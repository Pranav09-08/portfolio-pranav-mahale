"use client";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems, siteConfig } from "@/config/site";
import { Container } from "@/components/ui/container";

export const SiteHeader = () => {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");

  const sectionItems = useMemo(
    () => navItems.filter((item) => item.href.startsWith("#")),
    [],
  );

  useEffect(() => {
    if (pathname !== "/") {
      setActiveHash("");
      return;
    }

    const elements = sectionItems
      .map((item) => ({
        id: item.href,
        element: document.querySelector(item.href),
      }))
      .filter((entry): entry is { id: string; element: Element } => Boolean(entry.element));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (!visible) {
          return;
        }

        const matched = elements.find((entry) => entry.element === visible.target);
        if (matched) {
          setActiveHash(matched.id);
        }
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0.15, 0.3, 0.5],
      },
    );

    elements.forEach((entry) => observer.observe(entry.element));

    const initialHash = window.location.hash;
    if (initialHash && sectionItems.some((item) => item.href === initialHash)) {
      setActiveHash(initialHash);
    } else if (sectionItems[0]) {
      setActiveHash(sectionItems[0].href);
    }

    return () => {
      observer.disconnect();
    };
  }, [pathname, sectionItems]);

  const isItemActive = (href: string) => {
    if (pathname.startsWith("/blog") && href === "/blog") {
      return true;
    }

    if (pathname === "/" && href.startsWith("#") && href === activeHash) {
      return true;
    }

    return false;
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/70 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link href="/" className="font-semibold tracking-[0.03em]">
          {siteConfig.name}
        </Link>
        <nav className="hidden items-center gap-1 rounded-full border border-border/80 bg-surface/70 px-2 py-1 text-sm md:flex">
          {navItems.map((item) => {
            const active = isItemActive(item.href);

            return (
              <Link key={item.href} href={item.href} className="relative">
                {active ? (
                  <motion.span
                    layoutId="active-nav-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    className="absolute inset-0 rounded-full border border-brand/40 bg-brand/20 shadow-[0_0_20px_-10px_rgba(102,163,255,0.7)]"
                  />
                ) : null}
                <span
                  className={`relative z-10 block px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] transition ${
                    active ? "text-foreground" : "text-muted hover:text-brand"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
        <Link
          href={siteConfig.resumePath}
          target="_blank"
          className="rounded-full border border-brand bg-brand/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand transition hover:bg-brand hover:text-background"
        >
          Resume
        </Link>
      </Container>
    </header>
  );
};
