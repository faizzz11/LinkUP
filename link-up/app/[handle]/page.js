import Link from "next/link"
import clientPromise from "@/lib/mongodb"
import { notFound } from "next/navigation";


export default async function Page({ params }) {
    const { handle } = await params

    const client = await clientPromise;
    const db = client.db("LinkUP")
    const collection = db.collection("links")
  
    //agar kisine yeh handle pehle se hi le liya, fir tum yeh handle se linkUP nhi bana skte
    const item= await collection.findOne({handle: handle})
    if(!item){
        return notFound()
    }

    const item2={
        "_id": {
          "$oid": "67e43577ed57c6265691c2ff"
        },
        "links": [
          {
            "link": "https://www.instagram.com/faiz_moulavi11/",
            "linkText": "instagram"
          },
          {
            "link": "https://x.com/FaizMoulavi1",
            "linkText": "twitter"
          },
          {
            "link": "https://www.linkedin.com/in/faiz-moulavi1/",
            "linkText": "linkedin"
          },
          {
            "link": "https://github.com/faizzz11",
            "linkText": "github"
          }
        ],
        "handle": "faizzz",
        "pic": "https://pbs.twimg.com/profile_images/1723603820289335296/xmoYsh67_400x400.jpg"
      }
    return <div className="flex min-h-screen bg-[rgb(183,138,69)] justify-center items-start py-10">
      {item && <div className="photo flex justify-center flex-col items-center gap-4">
        <img className="rounded-full h-30 w-30 mt-[50px]" src={item.pic} alt="" />
        <span className="font-black text-xl">@{item.handle}</span>
       <span className="desc w-80 text-center">{item.desc}</span> {/* the greatest there is the greatest there was and the greatest there ever will be goattttttt */}
      <div className="links">
        {item.links.map((item, index)=>{
            return  <Link key={index} href={item.link}><div className="bg-[rgb(219,195,160)] py-4 shadow-lg px-2 min-w-96 flex justify-center rounded-md my-3"> 
               {item.linkText}
                
            </div>    </Link>        
        })}
      </div>
        
        </div>}
        </div>
  }