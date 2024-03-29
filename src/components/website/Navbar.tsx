
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
import { usePathname } from "next/navigation";
import { LogIn, UserPlus2 } from "lucide-react";
// import Breadcrumb from "../dashboard/Breadcrumb";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const location = usePathname();

  console.log(location);

  return (
    <>
      <div className="bg-white sticky z-50 top-0 inset-x-0 h-24">
        <header className="relative bg-white">
          <MaxWidthWrapper>
            <div className="border-b border-gray-200">
              <div className="flex h-24 items-center">
                <div className="ml-4 flex lg:ml-0">
                  <Link href="/">
                    <Icons.logo className="h-10 w-10" />
                  </Link>
                </div>

                <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                  {['/sign-in', '/sign-up', '/verify-email'].includes(location) ? null : <NavItems />}
                  {/* <NavItems /> */}
                </div>

                <div className="ml-auto flex items-center">
                  <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                    {user ? null : (
                      <>
                      
                        {['/sign-in'].includes(location) ? <Link href="/sign-up" className={buttonVariants({variant: 'ghost', className: 'text-lg antialiased flex gap-2'})}>
                          <LogIn className="h-5 w-5" />
                          <span>Sign Up</span>
                        </Link> : null}

                        {['/sign-up'].includes(location) ? <Link href="/sign-in" className={buttonVariants({variant: 'ghost', className: 'text-lg antialiased flex gap-2'})}>
                          <LogIn className="h-5 w-5" />
                          <span>Sign In</span>
                        </Link> : null}
                      
                      </>


                    )}
                    {user ? null : (
                      <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                    )}
                    {user ? <UserAccountNav /> : (
                      <>
                        {['/', '/sign-in', '/sign-up', '/verify-email'].includes(location) ? null : (
                          <Link href="/sign-up" className={buttonVariants({variant: 'ghost', className: 'text-lg antialiased flex gap-2'})}>
                            <UserPlus2 className="h-5 w-5" />
                            <span>Create account</span>
                          </Link>
                        )}
                      </>
                    )}
                    {user ? <span className="h-6 w-px bg-gray-200" aria-hidden="true" /> : null}
                    {user ? null : 
                      <div className="flex lg:ml-6">
                        <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                      </div>}
                      {['/sign-in', '/sign-up', '/verify-email'].includes(location) ? null : <div className="mll-4 flow-root lg:ml-6">
                        <Cart />
                      </div>}
                      
                  </div>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
        </header>
      </div>
      {/* { 
        ['/', '/sign-in', '/sign-up', '/verify-email'].includes(location) ? 
          null :
          <div className="max-w-7xl my-4 mx-auto px-4 sm:px-6 lg:px-8">
              <Breadcrumb pageName="Dashboard" />
          </div> 
      } */}
    </>
  )
}

export default Navbar;