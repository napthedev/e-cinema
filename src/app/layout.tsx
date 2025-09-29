import "../styles/globals.css";
import "nprogress/nprogress.css";
import "swiper/css";
import "swiper/css/navigation";

import Footer from "../components/Layout/footer";
import Navbar from "../components/Layout/navbar";
import type { Metadata } from "next";
import ProgressBarProvider from "./providers/progress-bar-provider";

export const metadata: Metadata = {
  title: "e-cinema - Popular movies in one place",
  description: "Watch your favorite movies and TV shows in our website.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ProgressBarProvider>
          <Navbar />
          {children}
          <Footer />
        </ProgressBarProvider>
      </body>
    </html>
  );
}
