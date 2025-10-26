import type { AppProps } from 'next/app';
import { ClerkProvider } from '@clerk/nextjs';
import dynamic from 'next/dynamic';
const ParticleBackground = dynamic(() => import('../components/ParticleBackground'), { ssr: false });
import '../styles/globals.css';
import { ThemeProvider } from '../components/theme-provider';
import AppShell from '../components/ui/app-shell';

export default function App({ 
  Component, 
  pageProps 
}: AppProps) {
  return (
    <ClerkProvider>
      <ThemeProvider>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-zinc-100 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900">
          <ParticleBackground />
          <AppShell>
            <Component {...pageProps} />
          </AppShell>
        </div>
      </ThemeProvider>
    </ClerkProvider>
  );
}
