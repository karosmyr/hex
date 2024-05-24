"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./nav-link.module.css";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps): JSX.Element {
  const path = usePathname();
  const isActive = path === href;

  return (
    <Link
      href={href}
      className={isActive ? `${styles.link} ${styles.active}` : styles.link}
    >
      {children}
    </Link>
  );
}
