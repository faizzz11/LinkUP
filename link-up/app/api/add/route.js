import clientPromise from "@/lib/mongodb"



export async function POST(request) {
    const body = await request.json()
    // console.log(body)
    const client = await clientPromise;
    const db = client.db("LinkUP")
    const collection = db.collection("links")

    const result=await collection.insertOne(body)


    return Response.json({ success: true, error: false,message: 'Links Added',result: result})
  }