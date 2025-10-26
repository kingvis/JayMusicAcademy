import type { NextApiRequest, NextApiResponse } from 'next';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY as string;

export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  if (!supabaseUrl || !serviceRoleKey) {
    return res.status(500).json({ error: 'Missing Supabase env vars' });
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey);

  // Probe table existence and columns
  const { data, error, status } = await supabase
    .from('user_interests')
    .select('*')
    .limit(1);

  return res.status(error ? status || 400 : 200).json({ status, data, error });
}