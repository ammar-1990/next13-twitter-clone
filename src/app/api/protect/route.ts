import { getSession } from "@/actions/getCurrentUser";
import { NextResponse } from "next/server";


export async function GET() {
    const currentUser = await getSession()

    if(!currentUser) return NextResponse.json({currentUser:null})  

    return NextResponse.json({currentUser})  
    
}