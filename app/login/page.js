'use client'

import { Login } from './action'
import { useFormState } from 'react-dom'
export default function Page() {
    const initState = { message: '' }
    const [state, formAction] = useFormState(Login, initState)

    return (
        <>
            <form action={formAction}>
                <div>
                    Email: <input type="email" name="email" placeholder="Email" required />
                </div>
                <div>
                    Password: <input type="password" name="password" placeholder="Password" required />
                </div>
                <div>
                    Message:{state.message}
                </div>
                <div>
                    <button type="submit" >Login</button>
                </div>
            </form>
        </>
    )

}