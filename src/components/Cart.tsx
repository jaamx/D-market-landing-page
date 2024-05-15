'use client'

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger,SheetFooter } from "./ui/sheet"
import {ShoppingCart} from 'lucide-react'
import { Separator } from "./ui/separator"
import { formatPrice } from "@/lib/utils"
import Link from "../../node_modules/next/link"
import { buttonVariants } from "./ui/button"
import Image from "../../node_modules/next/image"
const Cart = () => {
const itemCount = 0
const fee = 1

   return <Sheet>
<<<<<<< HEAD

=======
>>>>>>> 1ee6fcd415965d1d66b5466352362b8b28341b9f
         <SheetTrigger className='group -m-2  items-center p-2'>
            <ShoppingCart aria-hidden='true' className='h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500'/>
         </SheetTrigger>
         <span className="  text-sm font-medium text-gray-400 group-hover:text-gray-800">0</span>
         <SheetContent className='flex w-full flex-col pr-0  sm:max-w-lg'>
            <SheetHeader className="space-y-2.5 pr-6">
               <SheetTitle className=''>
                  cart (0)
               </SheetTitle>
            </SheetHeader>
            {/** Counter */}
              {itemCount > 0? (
          <>
                   <div className="flex w-full flex-col pr6">
                     {/**cart logic */}
                     cart items
                   </div>
                   <div className="flex w-full flex-col pr6">
                     <Separator/>
                     <div className="space-y-1.5 pr-6 " >
                            <div className="flex">
                              <span className="flex-1">Shipping fee</span>
                              <span>free</span>
                            </div>

                            <div className="flex">
                              <span className="flex-1">Transction fee</span>
                              <span>{formatPrice(fee)}</span>
                            </div>


                            <div className="flex">
                              <span className="flex-1">Total</span>
                              <span>{formatPrice(fee)}</span>
                            </div>
                     </div>
                     
              <SheetFooter>
                    <SheetTrigger asChild>
                      <Link
                        href='/cart'
                        className={buttonVariants({
                          className: 'w-full',
                        })}>
                        Continue to Checkout
                      </Link>
                    </SheetTrigger>
              </SheetFooter>
                   </div>
          </>
              ):(
               <div className="flex h-full flex-col items-center justify-center space-y-1">
                 <div aria-hidden='true' className="relative mb-4 w-60 text-muted-foreground ">
                 <Image src="/hippo-empty-cart.png" alt="Empty shopping cart" width={300} height={200} />
                </div>
                   <div className="text-xl font-semibold">Your cart is empty</div>
                   <SheetTrigger asChild>
                         <Link href='/products' className={buttonVariants({
                             variant:'link',
                             size: 'sm',
                             className: 'text-sm text-muted-foreground'})}>  Add item to your cart to check out</Link>
                   </SheetTrigger>
               </div>
              )}
         </SheetContent>   
   </Sheet>
}
export default Cart
