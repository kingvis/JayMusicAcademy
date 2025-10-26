import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';
import { getAuth } from '@clerk/nextjs/server';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string;

const badEnv = !supabaseUrl || !serviceRoleKey;
const supabase = !badEnv ? createClient(supabaseUrl, serviceRoleKey) : null;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  if (badEnv || !supabase) {
    return res.status(500).json({ error: 'Supabase server credentials are not set' });
  }

  // Require an authenticated Clerk user
  const { userId } = getAuth(req);
  if (!userId) return res.status(401).json({ error: 'Unauthorized' });

  const { user_id, name, email, interests } = req.body || {};
  if (!user_id || !interests) return res.status(400).json({ error: 'Missing required fields' });

  try {
    const { error } = await supabase.from('user_interests').insert({
      user_id,
      name,
      email,
      interests,
    });
    if (error) {
      // Log full details server-side for debugging
      // eslint-disable-next-line no-console
      console.error('Supabase insert error', { message: error.message, details: (error as any).details, hint: (error as any).hint, code: (error as any).code });
      return res.status(400).json({ error: error.message, details: (error as any).details, hint: (error as any).hint, code: (error as any).code });
    }

    return res.status(200).json({ ok: true });
  } catch (e: any) {
    // eslint-disable-next-line no-console
    console.error('API unexpected error', e);
    return res.status(500).json({ error: e?.message || 'Unexpected error' });
  }
}
