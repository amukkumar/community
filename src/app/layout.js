import "./globals.css";
import { Toaster } from 'react-hot-toast';
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"
import StoreProvider from "./StoreProvider";

export const metadata = {
  title: "IntelliEdtech",
  description: "Community Application",
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <StoreProvider>
          <Toaster />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
