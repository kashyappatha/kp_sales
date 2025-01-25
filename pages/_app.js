import '../styles/globals.css';

import Layout from '../components/Layout';
import Transition from '../components/Transition';

import {AnimatePresence, motion} from 'framer-motion';
import { useRouter } from 'next/router';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/sonner"


export default function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return <Layout>
        <AnimatePresence mode='wait'>
          <motion.div key={router.route} className='h-full'>
            <Transition/>
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
        <Toaster />
        <SpeedInsights />
        <Analytics/>
    </Layout>;
}

