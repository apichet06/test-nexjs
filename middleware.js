import { NextResponse } from "next/server"



export function middleware(request) {
    console.log("testing middleware");
    return NextResponse.next()
}

export const config = {
    matcher: '/content/:path*'
}