import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function SiteLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
          <div className="gradient-2"></div>
        </div>

        <main className="app">
          <Nav />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
