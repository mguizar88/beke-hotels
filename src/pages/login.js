import React, { useContext, useEffect } from "react"
import { navigate } from "gatsby"

import { IdentityContext } from "../context/identity-context"

const LoginPage = props => {
    const { user, identity: netlifyIdentity } = useContext(IdentityContext)
    
    useEffect(() => {
        netlifyIdentity.open()
        return () => {
            netlifyIdentity.close()
            console.log("desmontado")
        }
    })

    if ( user ) {
        navigate(`/app/`)
    } 

    return null
}

export default LoginPage