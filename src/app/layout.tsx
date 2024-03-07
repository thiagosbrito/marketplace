'use client';
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from 'sonner';
import Navbar from "@/components/website/Navbar";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  	children,
}: Readonly<{
  	children: React.ReactNode;
}>) {
	const router = usePathname();
    const isAdmin = router.includes("/admin");
  	return (
    	<html lang="en" className="h-full">
      		<body className={cn(
				"relative h-full font-sans antialiased",
				inter.className
			)}>
				<main className="relative flex flex-col min-h-screen">
					{isAdmin ? null : <Navbar />}
					<div className="flex-grow flex-1">
						{children}
					</div>
				</main>
				<Toaster position="top-center" richColors />
			</body>
		</html>
  	);
}
