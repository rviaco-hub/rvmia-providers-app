import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import clsx from "clsx";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [open, setOpen] = useState(true);

    return (
        <div className="flex">
            <Sidebar open={open} />

            <div
                className={clsx(
                    "bg-gray-900 text-white h-screen fixed md:relative top-0 left-0 z-40 transition-all",
                    open ? "w-64" : "w-0 md:w-16 overflow-hidden"
                )}
            >
                <Header toggle={() => setOpen(!open)} />

                <main className="p-4">{children}</main>
            </div>
        </div>
    );
}