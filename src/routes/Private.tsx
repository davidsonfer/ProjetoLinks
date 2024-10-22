import { ReactNode, useState, useEffect } from 'react'
import { auth } from '../services/firebaseConnection'
import { onAuthStateChanged } from 'firebase/auth'
import { Navigate } from 'react-router-dom'

interface PrivateProps {
    children: ReactNode
}

export function Private({ children }: PrivateProps): JSX.Element | null {
    const [loading, setLoading] = useState(true)
    const [signed, setSigned] = useState(false)
    
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                const userData = {
                    uid: user?.uid,
                    email: user?.email,
                }

                localStorage.setItem("@reactlinks", JSON.stringify(userData))
                setSigned(true)
            } else {
                setSigned(false)
            }
            setLoading(false)
        })

        return () => unsub()
    }, [])

    if (loading) {
        return <div>Loading...</div> // Exibir algo visual enquanto carrega
    }

    if (!signed) {
        return <Navigate to="/login" />
    }

    return <>{children}</>
}