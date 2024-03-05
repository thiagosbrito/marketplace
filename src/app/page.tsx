import MaxWidthWrapper from "@/components/shared/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { CalendarClock, CheckCircle, Leaf } from 'lucide-react';

const perks = [
  { 
    name: 'Instant booking',
    icon: CalendarClock,
    description: 'Get your experience booking in your calendar in seconds'
  },
  { 
    name: 'Guaranteed Quality',
    icon: CheckCircle,
    description: 'Every experience in our marketplace is verified by our team to ensure your best experience.'
  },
  { 
    name: 'For the Planet',
    icon: Leaf,
    description: "We've pledge 1% of the sales for the preservation and restoration of the environment"
  }
]
export default function Home() {
  return (
    <>
      <MaxWidthWrapper className="bg-[url('../../public/images/wave.png')] bg-cover px-0 max-w-screen-3xl mx-auto">
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-slate-300 sm:text-6xl py-24">
            Your marketplace for <span className="text-slate-500">adventures</span> and
            <span className="text-slate-800"> incredible experiences</span>
          </h1>
          {/* <p className="mt-6 text-lg max-w-prose text-gray-200">
            Welcome to AllDrenaline. Every asset on our
            platform is verified by our team to ensure our 
            highest quality standards.
          </p> */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href='/products' className={buttonVariants({variant: 'ghost'})}>Browse experiences</Link>
          </div>
        </div>
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-y-0">
            {perks.map((perk) =>  (
              <div key={perk.name} className="text-center md:flex md:items-center md:text-left lg:block lg:text-center">
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">{perk.name}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{perk.description}</p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
