import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import Navbar from '../components/Navbar';
import ParticleBackground from '../components/ParticleBackground';
import '../styles/globals.css';
import { ThemeProvider } from '../components/theme-provider';

export default function App({ 
  Component, 
  pageProps: { session, ...pageProps } 
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-zinc-100 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900">
          <ParticleBackground />
          <Navbar />
          <main className="pt-16">
            <Component {...pageProps} />
          </main>
        </div>
      </ThemeProvider>
    </SessionProvider>
  );
}
