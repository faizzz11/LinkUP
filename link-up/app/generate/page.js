"use client";
import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useSearchParams } from "next/navigation";

const generate = () => {

  const searchParams = useSearchParams()

const [links, setLinks] = useState([{link:"", linkText:""}])

const handleChange = (index, link, linkText)=>{
 setLinks((initialLinks)=>{
   return initialLinks.map((item,i)=>{
        if (i ===index){
            return {link, linkText}
        }
        else{
            return item
        }

    })
 })
}


  const [yourhandle, setYourhandle] = useState(searchParams.get('handle'));
  const [picture, setpicture] = useState("");
  const [desc, setdesc] = useState("")


  const addLink = () => { 
    setLinks(links.concat([{link: "", linkText: ""}]))
    }


  const submitLinks = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      links: links,
      handle: yourhandle,
      pic:picture,
      desc:desc
    });
console.log(raw);

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const r = await fetch("http://localhost:3000/api/add", requestOptions);
    const result = await r.json();
    if(result.success){ 
        toast.success(result.message)
        setLinks([])
        setpicture("")
        setYourhandle("")
        setdesc("")
       }
       else{
         toast.error(result.message)
       }
  };
  return (
    <div className="bg-[#E9C0E9] min-h-screen grid grid-cols-2">
      <div className="col1 flex justify-center items-center flex-col text-gray-800 ">
        <div className="flex flex-col gap-5 mt-40">
          <h1 className="font-bold text-4xl ">Create your LinkUP</h1>
          <div className="item">
            <h2 className="font-medium text-xl ">Step 1: Claim Your Handle</h2>
            <div className="mx-4">
              <input
                value={yourhandle || ""}
                onChange={(e) => {
                  setYourhandle(e.target.value);
                }}
                type="text"
                placeholder="Choose your Handle!"
                className="bg-white text-black px-4 py-3 my-2 mx-2 focus:outline-pink-400 rounded-full"
              />
            </div>
          </div>
          <div className="item">
            <h2 className="font-medium text-xl ">Step 2: Add Links</h2>
           {links && links.map((item,index)=>{
            return <div key={index}className="mx-4">
            <input
                value={item.link || ""}
                onChange={(e) => {
                  handleChange(index, e.target.value, item.linkText);
                }}
                type="text"
                placeholder="Enter Links"
                className="bg-white text-black px-4 py-3 mx-2 focus:outline-pink-400 rounded-full"
              />  
              
              <input
                value={item.linkText || ""}
                onChange={(e) => {
                    handleChange(index, item.link, e.target.value);
                }}
                type="text"
                placeholder="Enter Link Text"
                className="bg-white text-black px-4 py-3 mx-2 my-2 focus:outline-pink-400 rounded-full"
              />

            </div>
           })}

            <button onClick={()=>addLink()} className=" py-3 px-5 mx-2 bg-pink-500 font-medium text-white rounded-4xl p-5">
                {" "}
               + Add Link{" "}
              </button>
          </div>
          <div className="item">
            <h2 className="font-medium text-xl">
              Step 3: Add Picture and Description to LockIT
            </h2>
            <div className="mx-4 flex flex-col">
              <input
                value={picture || ""}
                onChange={(e) => {
                  setpicture(e.target.value);
                }}
                type="text"
                placeholder="Enter Links To Your Pictures"
                className="bg-white text-black px-4 py-3 mx-2 my-2 focus:outline-pink-400 rounded-full"
              />
              <input
                value={desc || ""}
                onChange={(e) => {
                  setdesc(e.target.value);
                }}
                type="text"
                placeholder="Describe Yourself"
                className="bg-white text-black px-4 py-3 mx-2 my-2 focus:outline-pink-400 rounded-full"
              />
              <button disabled={picture=="" || yourhandle=="" || links[0].linkText ==""} onClick={()=>{submitLinks()}}  className="disabled:bg-slate-500 py-3 px-5 mx-2 my-4 bg-pink-500 font-medium text-white rounded-4xl p-5 w-fit">
                Create Your LinkUP
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col2 w-full h-screen bg-[#E9C0E9]">
        <img
          src="/generate.png"
          alt="generate ur link"
          className="h-full object-contain pt-15 pl-20"
        />

        <ToastContainer />
      </div>
    </div>
  );
};

export default generate;

