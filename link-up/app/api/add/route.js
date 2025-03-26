import clientPromise from "@/lib/mongodb"



export async function POST(request) {
    const body = await request.json()
    // console.log(body)
    const client = await clientPromise;
    const db = client.db("LinkUP")
    const collection = db.collection("links")

  
    //agar kisine yeh handle pehle se hi le liya, fir tum yeh handle se linkUP nhi bana skte
    const doc= await collection.findOne({handle: body.handle})
    if(doc){
      return Response.json({ success: false, error: true, message: 'This Handle Already Exists!!',result: null})
    }

    const result=await collection.insertOne(body)

    return Response.json({ success: true, error: false,message: 'Your LinkUP has been Made!!!',result: result})
    
  }