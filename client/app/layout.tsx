import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import { BackgroundBeams } from "@/components/Background/BackgroundBeams";
import { ThemeProvider } from "@/components/Theme/ThemeProvider";
import ToastProvider from "@/components/Toast/ToastProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stoic Quotes Dailt",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ToastProvider>
            <NavBar />
            <div className="pt-20">{children}</div>
            
              <BackgroundBeams />
            
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
