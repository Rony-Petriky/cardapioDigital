"use client"
import Rectangle from "@/assets/images/Rectangle.png"
import Image from "next/image";
import { useRef, useState, useEffect, ReactNode  } from 'react';
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowLeft } from "react-icons/md";
import useWindowDimensions from "./tamanhotela";




export function Rolagem({children}:{children : ReactNode} ){
    
    const { width, height } = useWindowDimensions();

    const breakpoint = 768;
    const isTabletOrLarger: boolean = width! >= breakpoint;
    
    const scrollRef = useRef<HTMLDivElement>(null)
    const [selecCor, setSelectCor] = useState("bg-red-500")
    const [isAtStart, setIsAtStart] = useState(true)
    const [isAtEnd, setIsAtEnd] = useState(false)
    const SCROLL_AMOUNT = 300;


      const checkScrollPosition = () => {
        if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        
        // Verifica se está no início (com uma pequena tolerância)
        setIsAtStart(scrollLeft < 10);

        // Verifica se está no fim (com uma pequena tolerância)
        setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 10);

        }
    };

    useEffect(() => {
        const scrollElement = scrollRef.current;
        if (scrollElement) {
          // Verifica a posição quando o componente é montado
          checkScrollPosition(); 
          
          // Adiciona o listener de evento de scroll
          scrollElement.addEventListener('scroll', checkScrollPosition);
          
          // Limpa o listener quando o componente é desmontado
          return () => {
            scrollElement.removeEventListener('scroll', checkScrollPosition);
          };
        }
      }, []);

      const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
          const currentScroll = scrollRef.current.scrollLeft;
          
          if (direction === 'left') {
            // Rola para a esquerda: diminui o valor de scrollLeft
            scrollRef.current.scrollTo({
              left: currentScroll - SCROLL_AMOUNT,
              behavior: 'smooth' // Adiciona rolagem suave
            });
          } else {
            // Rola para a direita: aumenta o valor de scrollLeft
            scrollRef.current.scrollTo({
              left: currentScroll + SCROLL_AMOUNT,
              behavior: 'smooth'
            });
          }
        }
    }
    

    
    return(
    
    <div className="bg-white rounded-2xl mt-5 ">
        <div className="relative">
            {isTabletOrLarger &&(
            <button
                onClick={() => scroll("left")}
                className="absolute left-0 top-1/2  p-2 transform -translate-y-1/2
                    opacity-10 hover:opacity-100
                    bg-white shadow-lg rounded-full z-10 "
                >
                <MdOutlineKeyboardArrowLeft
                size={50}/>
            </button>
            )}

            <div ref={scrollRef} className=" overflow-y-hidden py-2 md:pt-2 md:pb-2 overflow-x-scroll .scrollbar-hide
                            [&::-webkit-scrollbar]:hidden 
                            [-ms-overflow-style:'none'] 
                            [scrollbar-width:'none']
                            ">
                <div  className="  flex gap-6 h-full flex-row justify-between items-center flex-nowrap w-max">
                 
                 {children}   
                   
                 </div>
                
            </div>
                {isTabletOrLarger && (
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 top-1/2  p-2 transform -translate-y-1/2
                    opacity-10 hover:opacity-100
                    bg-white shadow-lg rounded-full z-10 "
                    >
                    <MdOutlineKeyboardArrowRight size={50} />
                </button>
                )}
        </div>
    </div>
    );
};