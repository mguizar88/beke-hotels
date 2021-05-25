import React from "react"
import IdentityProvider from "./src/context/identity-context"

export default ({ element }) => (
    <IdentityProvider>
        {element}
    </IdentityProvider>
) 