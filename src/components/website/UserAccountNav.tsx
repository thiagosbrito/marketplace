'use client';

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";

import Link from "next/link";
import { signOut } from "firebase/auth";
import { auth } from "@/config";
import { useRouter } from 'next/navigation';
import { useAuthState } from "react-firebase-hooks/auth";

const UserAccountNav = () => {
    const [ user ] = useAuthState(auth);
    const router = useRouter();
    const logout = () => {
        signOut(auth);
        sessionStorage.removeItem('user_session');
        router.push('/sign-in');
    }
    
    return(
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="overflow-visible">
                <Button variant='ghost' size='sm' className="relative">My Account</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white w-60" align="end">
                <div className="flex items-center justify-start g-2 p-2">
                    <div className="flex flex-col space-y 0 5 leading-none">
                        <p className="font-medium text-sm text-black">{user?.email}</p>
                    </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <Link href="/dashboard">My dashboard</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                    <Link href="/sign-in" onClick={logout}>Logout</Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserAccountNav;