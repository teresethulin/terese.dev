import { Work_Sans } from "next/font/google";
import "./globals.css";

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Terese Thulin | Developer + Designer",
  description: "Home page of Terese Thulin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={workSans.className}>{children}</body>
    </html>
  );
}
