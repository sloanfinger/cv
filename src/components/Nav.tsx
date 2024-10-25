"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";
import styles from "./Nav.module.css";

function NavItem({ children, href, ...props }: ComponentProps<typeof Link>) {
  const pathname = usePathname();

  if (pathname === href) {
    return null;
  }

  return (
    <li>
      <Link href={href} {...props}>
        {children}
      </Link>
    </li>
  )
}

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <p>Sloan Finger</p>
      <ul>
        <NavItem href="/">About Sloan</NavItem>
        <NavItem href="/contact">Contact Sloan</NavItem>
      </ul>
    </nav>
  );
}
