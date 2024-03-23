import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CustomLayout } from "@/components/CustomLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Poincitos ❤️",
  description:
    "Una app para que puedas tener en un solo lugar, aquellos rincones del mundo que te encantaría conocer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomLayout>{children}</CustomLayout>
      </body>
    </html>
  );
}
