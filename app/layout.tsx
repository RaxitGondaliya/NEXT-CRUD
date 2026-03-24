import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Simple React CRUD",
  description: "A beginner friendly Next.js CRUD application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: "0 auto", maxWidth: "800px", padding: "20px", fontFamily: "sans-serif" }}>
        
        <nav style={{ borderBottom: "1px solid #ccc", paddingBottom: "10px", marginBottom: "20px" }}>
          <Link href="/">
            <b>Home</b>
          </Link>
          {" | "}
          <Link href="/blog">
            <b>Blogs</b>
          </Link>
          {" | "}
          <Link href="/blog/create">
            <b>Create New</b>
          </Link>
        </nav>

        <main>
          {children}
        </main>
        
      </body>
    </html>
  );
}