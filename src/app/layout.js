import Head from "next/head";
import { Footer, Header } from "@/components";
import "@/styles/globals.css";

export const metadata = {
  title: "Ahmad Rifal - Software Developer",
  description:
    "Welcome to Ahmad Rifal's portfolio. Learn more about his work and skills as a software developer based in Jakarta, Indonesia.",
};

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale}>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
