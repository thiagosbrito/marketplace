import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from 'sonner';
import TanstackProvider from "../../providers/TanstackProvider";
import Navbar from "@/components/website/Navbar";
import PageWrapper from "@/components/website/PageWrapper";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  	return (
    	<html lang="en" className="h-full">
      		<body className={ cn("relative h-full font-sans antialiased", inter.className) }>
				<TanstackProvider>
					<PageWrapper>{children}</PageWrapper>
				</TanstackProvider>
			</body>
		</html>
  	);
}
