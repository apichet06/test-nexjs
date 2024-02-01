import { NextResponse } from "next/server"
import { jwtVerify, importJWK } from 'jose'

export async function middleware(request) {
    try {

        const token = request.cookies.get('token').value

        const secretJWK = {
            kty: 'oct',
            k: process.env.JOSE_SECRET
        }
        const secretKey = await importJWK(secretJWK, 'HS256')
        const { payload } = await jwtVerify(token, secretKey)
        console.log(payload);
        if (payload.email !== 'apichet@gmail.com') {
            throw new Error('email incorrect')
        }

        const requestHeaders = new Headers(request.headers)
        requestHeaders.set('user', JSON.stringify({ email: payload.email }))
        const response = NextResponse.next({
            request: {
                headers: requestHeaders,
            }
        })
        return response
    } catch (error) {
        return NextResponse.redirect(new URL('/', request.url))
    }


}

export const config = {
    matcher: '/manage/blog/:path*'
}