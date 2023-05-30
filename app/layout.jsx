import "@styles/globals.css";

export const metadata = {
  title: "Promptopia",
  descreption: "Discover and share AI prompts",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">{children}</main>
      </body>
    </html>
  );
}