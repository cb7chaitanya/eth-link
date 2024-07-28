"use client"
import { signIn, useSession } from "next-auth/react";

export default function Appbar() {
    const session = useSession();
    const user = session.data?.user;
    return (
        <div>
            {!user ? (
                <button onClick={async() => await signIn('google')}>
                    Login
                </button>
            ) : (
                <div>
                    Signed in as {user.email}
                </div>
            )}
        </div>
    )
}