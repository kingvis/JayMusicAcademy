"use client";

import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import {
  LayoutDashboard,
  Home,
  Users,
  Music,
  Calendar,
  BookOpen,
  UserCog,
  Settings,
  LogOut,
  LogIn,
  UserPlus,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const isHome = router.pathname === "/";
  const isDashboard = router.pathname.startsWith("/dashboard");

  const links = [
    {
      label: "Home",
      href: "/",
      icon: (
        <Home className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: (
        <LayoutDashboard className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Students",
      href: "#",
      icon: (
        <Users className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Lessons",
      href: "#",
      icon: (
        <Music className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Schedule",
      href: "#",
      icon: (
        <Calendar className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Courses",
      href: "#",
      icon: (
        <BookOpen className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Profile",
      href: "/profile",
      icon: (
        <UserCog className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Settings",
      href: "#",
      icon: (
        <Settings className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Sign In / Sign Up",
      href: "/auth",
      icon: (
        <LogIn className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
  ];

  return (
    <div
      className={cn(
        "min-h-screen flex bg-gray-100 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="gap-6">
          <div className="flex flex-col flex-1">
            <Link href="/" className="flex items-center gap-2 py-1">
              <div className="h-6 w-7 bg-black dark:bg-white rounded" />
              {open && (
                <span className="font-medium text-black dark:text-white">
                  JayMusic
                </span>
              )}
            </Link>
            <div className="mt-6 flex flex-col gap-1.5">
              {links.map((link) => (
                <SidebarLink key={link.label} link={link} />
              ))}
              <SidebarLink
                onClick={(e) => {
                  e.preventDefault();
                  signOut();
                }}
                link={{
                  label: "Logout",
                  href: "#",
                  icon: (
                    <LogOut className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
                  ),
                }}
              />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-start gap-2">
              <ThemeToggle />
            </div>
            <SidebarLink
              link={{
                label: "Guest User",
                href: "#",
                icon: (
                  <div className="h-7 w-7 flex-shrink-0 rounded-full bg-neutral-200 dark:bg-neutral-700 flex items-center justify-center text-[10px] font-semibold text-neutral-800 dark:text-neutral-100">
                    G
                  </div>
                ),
              }}
            />
          </div>
        </SidebarBody>
      </Sidebar>

      <div className="flex-1 min-w-0">
        {!isDashboard && (
          <header className="sticky top-0 z-40 flex items-center justify-between px-4 h-14 border-b border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-neutral-900/60">
            <div className="font-semibold">JayMusic Academy</div>
            <div className="md:hidden"><ThemeToggle /></div>
          </header>
        )}
        <main className={cn(isHome ? "p-0" : "p-4 md:p-8")}>{children}</main>
      </div>
    </div>
  );
}
