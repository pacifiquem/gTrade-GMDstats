import React from 'react'
import { useState, useRef } from 'react';

const colorTheme = () => {

    const documentRef = useRef(document);

    return (
        <div className='absolute h-[35vh] w-[20%] bg-[rgb(28,28,34)] flex flex-col justify-center items-center gap-3 right-8 rounded-sm'>
            <button className='h-[18%] w-[80%] bg-[hsl(240,5%,24%)] border-[1px] border-solid border-zinc-500 rounded text-[rgb(138,138,150)] text-lg font-sans font-semibold' onClick={() => {
                    documentRef.current.children[0].children[1].classList.add('bg-[rgb(200,200,200)]');
            }}>Light &nbsp;&nbsp;&nbsp;
            </button>
            <button className='h-[18%] w-[80%] bg-[rgb(57,57,63)] border-[1px] border-solid border-zinc-500 rounded text-[rgb(138,138,150)] text-lg font-sans font-semibold'>Dark &nbsp;&nbsp;&nbsp;
            </button>
            <button className='h-[18%] w-[80%] bg-[rgb(57,57,63)] border-[1px] border-solid border-zinc-500 rounded text-[rgb(138,138,150)] text-lg font-sans font-semibold' onClick={() => {
                    documentRef.current.children[0].children[1].classList.add('bg-black');
            }}>Black &nbsp;&nbsp;&nbsp;
            </button>
            <button className='h-[18%] w-[80%] bg-[rgb(57,57,63)] border-[1px] border-solid border-zinc-500 rounded text-[rgb(138,138,150)] text-lg font-sans font-semibold'onClick={() => {
                    documentRef.current.children[0].children[1].classList.add('bg-[rbg(20, 50, 240)]');
            }}>Retroven &nbsp;&nbsp;&nbsp;
            </button>
        </div>
    )
}


export default colorTheme