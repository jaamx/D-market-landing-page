import Link from "../../node_modules/next/link"
import Cart from "./Cart"
import { Icons } from "./Icons"
import MaxWidthWrapper from "./MaxWidthWrapper"
import Navitems from "./Navitems"
import { buttonVariants } from "./ui/button"


const Navbar = () => {

    const  user = null

  return (
    <div className="bg-white sticky z-50 top-0 inset-x-0 h-16 ">
        <header className="relative bg-white">
            <MaxWidthWrapper>
                <div className="border-b border-gray-200">
                    <div className="flex h-16 items-center">
                        {/** mobile nav */}
                          
                          <div className="ml-4 flex lg:ml-0">
                               <Link href='/'>
                                   <Icons.logo className='h-10 w-10'/>
                               </Link>
                          </div>
                          <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                             <Navitems/>
                          </div>
                             
                             <div className="ml-auto flex items-centre">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    {user? null: 
                                    <Link href='/Sign-in' 
                                       className={buttonVariants({
                                        variant: 'ghost',
                                       })}>
                                        Sign in
                                    </Link>}
                                    {user? null : <span className="h-6 w-px bg-gray-200 aria-hidden:true"/>}

                                      {/**2 */}
                                    {user ? <p></p> : 
                                       <Link href='/Sign-up'
                                         className={buttonVariants({
                                            variant: 'ghost',
                                         })}
                                       >
                                         Create account
                                       </Link>
                                    }
                                          {/** condition 3 */}
                                    
                                    {user? <span className="h-6 w-px bg-gray-200 aria-hidden:true"/>: null }

                                         {/** condition 4 */}

                                     {user? null: 
                                      <div className="flex lg:ml-6">
                                         <span className="h-6 w-px bg-gray-200 aria-hidden:true"/>
                                      </div>
                                     }    

                                      {/** CART */}

                                     <div className="ml-4 flow-root lg:ml-6">
                                        <Cart/>
                                     </div>
                                </div>
                             </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </header>
    </div>
  )
}

export default Navbar