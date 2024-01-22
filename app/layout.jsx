import Provider from "@/components/Providers";
import "../styles/globals.css";
import Head from "next/head";

export const metadata = {
  title: "coconut",
  description: "Create Unforgetable Birthday Experiences",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <body>
        <Provider>
          <div className="main">
            {/* <div className="gradient"></div>
          <div className="gradient-2"></div> */}
          </div>

          <main className="app">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
