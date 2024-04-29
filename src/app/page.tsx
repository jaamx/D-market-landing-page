import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "../../node_modules/next/link";
import {  ArrowDownToLine , CheckCircle, Leaf } from 'lucide-react'


const perks =[

  {
    name:'Instant delivery',
    Icon:  ArrowDownToLine ,
    description:'Get your assets delivered to your email in seconds nd download them right away'
  },
  {
    name:'Guaranteed quality',
    Icon: CheckCircle,
    description:'Get your assets delivered to your email in seconds nd download them right away'
  },
  {
    name:'For the planet',
    Icon: Leaf,
    description:'Get your assets delivered to your email in seconds nd download them right away'
  },
  
]


export default function Home() {
  return (
    <>
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
         <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Your marketplace for high-quality 
          <span className="text-green-600"> Digital assets</span>.
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to DigitalHippo. Every asset on our our
            platform is verified by our team to ensure our
            highest quality starndards.
          </p>
          <div className=" flex flex-col sm:flex-row gap-4 mt-6">
            <Link href='/products' className={buttonVariants()}>Browse trending</Link>
              <Button variant='ghost'>  Our quality promise &rarr;</Button>
          </div>
      </div>
      {/**todolist product */}
    </MaxWidthWrapper>
    <section className="border-t border-gray-200 bg-gray-50">
      <MaxWidthWrapper className="py-20">
        <div className="grid grid-cols-1 gap-y-12 sm:gap-x-6  lg:grid-cols-3 md:grid-cols-2 lg:gap-x-8 sm:grid-cols-1">
          {perks.map((perk)=>(
             <div key={perk.name} 
             className='text-center md-flex md:items-start md:text-left lg:block lg:text-center'>

              <div className="md:flex-shrink-0 flex justify-center">
                <div className="h-16 w-16 flex items-center  justify-center rounded-full bg-green-100 text-green-500">
                  {<perk.Icon className='w-1/3 h-1/3'/>}
                </div>
                    
              </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6 ">
                  <h3 className="text-base font-medium text-gray-900">
                      {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                   {perk.description}
                  </p>
                </div>
             </div>
          ))}
          
        </div>
      </MaxWidthWrapper>
    </section>
    </>
  )
}
