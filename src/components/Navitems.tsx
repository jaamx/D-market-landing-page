"use client"

import { PRODUCT_CATEGORIES } from "@/config/index"
import { useOnClickOutside } from "@/hooks/use-onclick-outside"
import { useEffect, useRef, useState } from "react"
import Navitem from "./Navitem"

function Navitems() {
    const [Activeindex,setActiveindex] = useState<null| number>(null)
    useEffect(() => {
        const handler = (e:KeyboardEvent) => {
          if(e.key === 'Escape') {
            setActiveindex(null)
          }
        }
        document.addEventListener('keydown',handler)
        return () => {
          document.removeEventListener('keydown',handler)
        }
    },[])
        const isAnyOpen = Activeindex !== null
        const navRef = useRef<HTMLDivElement | null> (null)
        useOnClickOutside(navRef, () => setActiveindex(null))
      
  
    return (
    <div className=" flex gap-4 h-full" ref={navRef}>
      {PRODUCT_CATEGORIES.map((category, i)=>{
        const handleOpen =() => {
          if(Activeindex === i){
            setActiveindex(null)
          }else{
            setActiveindex(i)
          }
        }

          const isOpen = i === Activeindex
        return(
          <Navitem
          category={category}
          handleOpen={handleOpen}
          isOpen={isOpen}
          key={category.value}
          isAnyOpen={isAnyOpen}
          close={close}
            />
        )
      })}
    </div>
  )
}

export default Navitems