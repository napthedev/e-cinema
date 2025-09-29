import "../styles/globals.css";
import "nprogress/nprogress.css";
import "swiper/css";
import "swiper/css/navigation";

import Footer from "../components/layout/footer";
import Navbar from "../components/layout/navbar";
import type { Metadata } from "next";
import ProgressBarProvider from "./providers/progress-bar-provider";
import { Suspense } from "react";

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
        <Suspense fallback={null}>
          <ProgressBarProvider>
            <Navbar />
            {children}
            <Footer />
          </ProgressBarProvider>
        </Suspense>
      </body>
    </html>
  );
}
