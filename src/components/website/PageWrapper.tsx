'use client';
import { ReactNode } from "react";

import Navbar from "./Navbar";
import { Toaster } from "sonner";
import { usePathname } from "next/navigation";

const PageWrapper = ({ children }: { children: ReactNode}) => {
    const is_admin = usePathname().includes('/admin');
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