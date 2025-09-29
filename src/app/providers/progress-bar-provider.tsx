"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import NProgress from "nprogress";

NProgress.configure({
  showSpinner: false,
  trickleSpeed: 100,
});

export default function ProgressBarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Complete the progress bar when route changes
    NProgress.done();
  }, [pathname, searchParams]);

  useEffect(() => {
    // Override the default Link behavior to start NProgress
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest("a[href]") as HTMLAnchorElement;

      if (link && link.href) {
        const url = new URL(link.href);
        const currentUrl = new URL(window.location.href);

        // Check if it's an internal navigation (same origin and not same page)
        if (url.origin === currentUrl.origin && url.href !== currentUrl.href) {
          // Don't start progress for external links, anchors, or same page
          if (!url.hash && !link.target && !link.download) {
            NProgress.start();
          }
        }
      }
    };

    // Add click listener to document
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return <>{children}</>;
}
