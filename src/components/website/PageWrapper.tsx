'use client';
import { ReactNode } from "react";

import Navbar from "./Navbar";
import { Toaster } from "sonner";
import { usePathname } from "next/navigation";

const PageWrapper = ({ children }: { children: ReactNode}) => {
    const pathname = usePathname();
    const is_admin = pathname.includes('/admin') || pathname.includes('/dashboard');
    return (
        <>   
            {is_admin ? null : (
                <Navbar />
            )}
            <main className="relative flex flex-col min-h-screen">
                {children}
            </main>
            <Toaster position="top-center" richColors />  
        </>
    )
};
export default PageWrapper;