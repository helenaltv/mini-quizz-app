import "./styles/Admin.module.css";
import { ReactNode } from "react";
import Link from "next/link";
import "./styles/Layout.module.css";
import "./styles/globals.css";
import QuestionForm from "./components/QuestionForm";
import Admin from "./pages/admin";

interface LayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      {" "}
      {/* Lägg till språkattribut */}
      <body>
        <header>
          <h1>My App</h1>
          <Link href="/"> Min quiz</Link>
        </header>
        <main>
          {children} {/* Här renderas alla sidor */}
        </main>
        <footer>
          <p>© 2024 My App</p>
        </footer>
      </body>
    </html>
  );
}
