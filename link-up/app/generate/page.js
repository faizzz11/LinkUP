"use client"
import React from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const generate = () => {

    const [link, setlink] = useState("")
    const [linkText, setlinkText] = useState("")
    const [handle, sethandle] = useState("")
    const [picture, setpicture] = useState("")
    const addLink = async (text, link, handle) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "link": link,
            "link-text": text,
            "handle": handle
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        const r = await fetch("http://localhost:3000/api/add", requestOptions)
           const result = await r.json();
           toast(r.message)

    }
    return (
        <div className='bg-[#E9C0E9] min-h-screen grid grid-cols-2' >

            <div className="col1 flex justify-center items-center flex-col text-gray-800">

                <div className='flex flex-col gap-5 my-8'>
                    <h1 className='font-bold text-4xl'>Create your LinkUP</h1>
                    <div className="item">
                        <h2 className='font-medium text-xl '>Step 1: Claim Your Handle</h2>
                        <div className="mx-4">
                            <input value={handle || ""} onChange={e=>{sethandle(e.target.value)}} type="text" placeholder='Choose your Handle!' className='bg-white text-black px-4 py-3 my-2 mx-2 focus:outline-pink-400 rounded-full' />
                        </div>
                    </div>
                    <div className="item">


                        <h2 className='font-medium text-xl '>Step 2: Add Links</h2>
                        <div className="mx-4">
                            <input value={linkText || ""} onChange={e=>{setlinkText(e.target.value)}} type="text" placeholder='Enter Link Text' className='bg-white text-black px-4 py-3 mx-2 my-2 focus:outline-pink-400 rounded-full' />
                            <input value={link || ""} onChange={e=>{setlink(e.target.value)}}type="text" placeholder='Enter Links' className='bg-white text-black px-4 py-3 mx-2 focus:outline-pink-400 rounded-full' />
                            <button className=" py-3 px-5 mx-2 bg-pink-500 font-medium text-white rounded-4xl p-5"> Add Link </button>
                        </div>
                    </div>
                    <div className="item">
                        <h2 className='font-medium text-xl'>Step 3: Add Picture and LockIT</h2>
                        <div className="mx-4 flex flex-col">
                            <input value={picture || ""} onChange={e=>{setpicture(e.target.value)}} type="text" placeholder='Enter Links To Your Pictures' className='bg-white text-black px-4 py-3 mx-2 focus:outline-pink-400 rounded-full' />
                            <button className=" py-3 px-5 mx-2 my-4 bg-pink-500 font-medium text-white rounded-4xl p-5 w-fit">Create Your LinkUP</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="col2 w-full h-screen bg-[#E9C0E9]">
                <img src="/generate.png" alt="generate ur link" className='h-full object-contain' />
            
            <ToastContainer />
            </div>
        </div>
    )
}

export default generate



{/* <div class="hidden relative -z-10 items-center justify-center overflow-hidden lg:!flex lg:w-[calc(100vw-48%)] bg-center bg-cover bg-no-repeat bg-cover bg-[#225AC0]" style="background-image: ;"></div> */ }