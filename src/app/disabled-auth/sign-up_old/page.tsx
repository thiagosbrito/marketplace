"use client"
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { AuthCredentialsValidator, TAuthCredentialsValidator } from "@/lib/validators/account-credentials-validator";

import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { toast } from 'sonner';
import { useForm } from 'react-hook-form';
import { ZodError } from "zod";
import { useRouter, useSearchParams } from "next/navigation";
import { Icons } from "@/components/shared/Icons";
// import signIn from "@/firebase/auth/signIn";
// import signUp from "@/firebase/auth/signUp";

const Page = () => {

    const router = useRouter();

    const { 
        register,
        handleSubmit,
        formState: { errors } 
    } = useForm<TAuthCredentialsValidator>({
        resolver: zodResolver(AuthCredentialsValidator)
    })

    const onSubmit = async ({email, password}: TAuthCredentialsValidator) => {
      console.log('trying to sign up');
    // send data to server
        // const { result, error } = await signUp(email, password);

        // if (error) {
        //     console.error(error);
        //     return;
        // }
        // return router.push('/');
    }

  return <>
    <div className="container relative flex pt-20 flex-col item-center lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col items-center space-y-2 text-center">
          <Icons.logo className="h-20 w-20"></Icons.logo>
          <h1 className="text-2xl font-bold">Create your account</h1>
          <Link className={buttonVariants({
            variant: 'link',
            className: 'gap-1.5'
          })} href="/sign-in">Already have an account? Sign-in <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className='grid gap-6'>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-2">
              <div className="grid gap-1 py-2">
                <Label htmlFor='email'>Email</Label>
                <Input
                  {...register('email')} 
                  className={cn({
                    "focus-visible:ring-red-500": errors.email
                  })}
                  placeholder="you@example.com" />
                  {errors?.email && (
                    <p className="text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
              </div>
              <div className="grid gap-1 py-2">
                <Label htmlFor='password'>Password</Label>
                <Input
                  {...register('password')}
                  type="password"
                  autoComplete="off" 
                  className={cn({
                    "focus-visible:ring-red-500": errors.password
                  })}
                  placeholder="your password" />
                  {errors?.password && (
                    <p className="text-sm text-red-500">
                      {errors.password.message}
                    </p>
                  )}
              </div>
              <Button>Sign Up</Button>

            </div>
          </form>
          <div className='relative'>
            <div
              aria-hidden='true'
              className='absolute inset-0 flex items-center'>
              <span className='w-full border-t' />
            </div>
            <div className='relative flex justify-center text-xs uppercase'>
              <span className='bg-background px-2 text-muted-foreground'>
                or
              </span>
            </div>
          </div>
		      <Button variant='secondary'>Login with Google</Button>
        </div>
      </div>
    </div>
  </>
}

export default Page;