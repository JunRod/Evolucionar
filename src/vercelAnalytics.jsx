import { Analytics } from "@vercel/analytics/react";
export const VercelAnalytics = ({ Component, pageProps }) => <><Component {...pageProps} /><Analytics /></>
