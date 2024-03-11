import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from 'sonner';
import TanstackProvider from "../../providers/TanstackProvider";
const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  	return (
    	<html lang="en" className="h-full">
      		<body className={ cn("relative h-full font-sans antialiased", inter.className) }>
				<TanstackProvider>
					<main className="relative flex flex-col min-h-screen">
						{children}
					</main>
					<Toaster position="top-center" richColors />
				</TanstackProvider>
			</body>
		</html>
  	);
}
