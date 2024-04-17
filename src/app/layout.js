import { Inter } from "next/font/google";
import "./reset.css";
import "./styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wordle From 'La Salada'",
  description:
    "Coming straight from 'La Salada', a game to honour the cheap and... yeah, that. Enjoy.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
