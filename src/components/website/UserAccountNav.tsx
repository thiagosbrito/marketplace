'use client';

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";

import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "@/config";
import { useRouter } from 'next/navigation';
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Gauge, LogOut, User, UserCircle2 } from "lucide-react";

const UserAccountNav = () => {
    const [ user ] = useAuthState(auth);
    const router = useRouter();
    const [signOut, loading, error] = useSignOut(auth);
    const logout = async () => {
        const success = await signOut();
        if (success) {
            sessionStorage.removeItem('user_session');
            router.push('/sign-in');
        }
    }
    
    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="overflow-visible">
                <Button variant='ghost' size='sm' className="relative text-md antialiased font-light">My Account</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white w-60" align="end">
                <div className="flex items-center justify-start g-2 p-2 py-3">
                    <div className="flex space-y 0 5 leading-none items-center">
                        <div className="mx-3">
                            <UserCircle2 className="h-5 w-5" />
                        </div>
                        <p className="antialiased font-light">{user?.email}</p>
                    </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <Link href="/dashboard" className="flex py-3 hover:bg-slate-200 cursor-pointer">
                        <div className="mx-3">
                            <Gauge className="w-5 h-5" />
                        </div>
                        <span className="text-left">My dashboard</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href="/" onClick={logout} className="flex py-3 hover:bg-slate-200 cursor-pointer">
                        <div className="mx-3">
                            <LogOut className="h-5 w-5" />
                        </div>
                        <span className="text-left">Logout</span>
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserAccountNav;