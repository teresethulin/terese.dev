import "./globals.css";
import Header from "./components/Header/index.js";

export const metadata = {
  title: "Terese Thulin | Developer + Designer",
  description: "Home page of Terese Thulin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
