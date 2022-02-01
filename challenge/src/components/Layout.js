import React from "react";

const Layout = ({children}) => (
    <div className="flex flex-col max-w-screen-sm mx-auto bg-slate-900 text-white">
        {
            children
        }
    </div>
)

export default Layout