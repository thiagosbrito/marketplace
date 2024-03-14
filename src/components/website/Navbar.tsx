
'use client';
import Link from "next/link";
import MaxWidthWrapper from "../shared/MaxWidthWrapper";
import { Icons } from "../shared/Icons";
import NavItems from "./NavItems";
import { buttonVariants } from "../ui/button";
import Cart from "./Cart";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/config";
import UserAccountNav from "./UserAccountNav";
import Breadcrumbs from "./Breadcrumbs";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const location = usePathname();

  return (
    <>
      <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
        <header className="relative bg-white">
          <MaxWidthWrapper>
            <div className="border-b border-gray-200">
              <div className="flex h-16 items-center">
                <div className="ml-4 flex lg:ml-0">
                  <Link href="/">
                    <Icons.logo className="h-10 w-10" />
                  </Link>
                </div>

                <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                  <NavItems />
                </div>

                <div className="ml-auto flex items-center">
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    {user ? null : (
                      <Link href="/sign-in" className={buttonVariants({variant: 'ghost'})}>Sign In</Link>
                    )}
                    {user ? null : (
                      <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                    )}
                    {user ? <UserAccountNav /> : <Link href="/sign-up" className={buttonVariants({variant: 'ghost'})}>Create account</Link>}
                    {user ? <span className="h-6 w-px bg-gray-200" aria-hidden="true" /> : null}
                    {user ? null : 
                      <div className="flex lg:ml-6">
                        <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                      </div>}
                      <div className="mll-4 flow-root lg:ml-6">
                        <Cart />
                      </div>
                  </div>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
        </header>
      </div>
      { 
        ['/', '/sign-in', '/sign-up', '/verify-email'].includes(location) ? 
          null :
          <div className="max-w-7xl my-4 mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs
              homeElement={'Home'}
              separator={<li><ChevronRight className="w-4 h-4 text-muted-foreground" /></li>}
              activeClasses='text-muted-foreground font-semibold'
              containerClasses='flex shadow-lg items-center justify-start p-2 rounded-lg text-sm bg-gradient-to-l from-slate-50 to-white' 
              listClasses='hover:underline mx-2 text-xs'
              capitalizeLinks
            />
          </div> 
      }
    </>
  )
}

export default Navbar;