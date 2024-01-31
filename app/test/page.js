'use client'
import React from 'react'
import { submitForm } from './action'


export default function Page() {


    return (
        <form action={submitForm}>
            email :<input type="email" name="email" />
            <button type="submit">บันทึก</button>
        </form>
    )
}
