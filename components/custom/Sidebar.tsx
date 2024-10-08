"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "@/components/ui/sidebar";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import {
    Building,
    CircleUserRound,
    KeyRound,
    LayoutDashboard,
    LogOut,
    Send,
} from "lucide-react";

export function NavSidebar({ avatarIcon, userName }: { avatarIcon?: React.ReactNode, userName?: string | null | undefined }) {
    userName ??= ""

    const links = [
        {
            label: "Account",
            href: "#",
            icon: (
                <CircleUserRound className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Dashboard",
            href: "#",
            icon: (
                <LayoutDashboard className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: "Contact",
            href: "#",
            icon: (
                <Send className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
            ),
        },
        {
            label: <span className="text-red-400">Logout</span>,
            href: "/login/signout",
            icon: (
                <LogOut className="text-red-400 dark:text-red-400 h-5 w-5 flex-shrink-0" />
            ),
        },
    ];
    const [open, setOpen] = useState(false);
    return (
        <Sidebar
            open={open}
            setOpen={setOpen}
            animate={true}
        >
            <SidebarBody className="justify-between gap-10">
                <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                    <SidebarLink
                        link={{
                            label: "JURO",
                            href: "#",
                            icon: <Building />,
                        }}
                    />
                    <div className="mt-8 flex flex-col gap-2">
                        {links.map((link, idx) => (
                            <SidebarLink
                                key={idx}
                                link={link}
                            />
                        ))}
                    </div>
                </div>
                <div>
                    {/* todo: remove dummy image & use actual real account names */}
                    <SidebarLink
                        link={{
                            label: userName,
                            href: "#",
                            icon: avatarIcon
                        }}
                    />
                </div>
            </SidebarBody>
        </Sidebar>
    );
}
export const Logo = () => {
    return (
        <Link
            href="#"
            className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
        >
            <Image
                src="https://dummyimage.com/500x500/000/fff&text=+LOGO+"
                width={30}
                height={30}
                alt="Logo Placeholder Image"
            />

            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-medium text-black dark:text-white whitespace-pre"
            >
                JURO
            </motion.span>
        </Link>
    );
};
