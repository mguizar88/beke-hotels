import React, { useRef, useState } from "react"
import { GatsbyImage } from 'gatsby-plugin-image'
import { StarIcon } from '@heroicons/react/solid'

import getElementPosition from "../hooks/getElementPosition"

const Card = ({cover, title}) => {
    
    return (
        <>
            <div className="flex flex-col rounded-md overflow-hidden">
                <div>
                    <GatsbyImage className="h-60" image={cover} alt="Paquete Aventura" />
                    <div className="relative z-10 h-12 bg-gradient-to-t from-white via-white -mt-8">
                    </div>
                </div>
                <div className="flex-1 flex flex-col justify-between bg-white text-beke p-4">
                    <div className="mb-4">
                        <div className="flex justify-center">
                            <StarIcon className="h-6 w-6 text-yellow-400" />
                            <StarIcon className="h-6 w-6 text-yellow-400" />
                            <StarIcon className="h-6 w-6 text-yellow-400" />
                            <StarIcon className="h-6 w-6 text-yellow-400" />
                            <StarIcon className="h-6 w-6 text-yellow-400" />
                        </div>
                        <h3 className="text-center font-black uppercase">{ title }</h3>
                    </div>
                    <button className="bg-yellow-400 text-center text-white w-full py-2 rounded-md">
                        Ver más.
                    </button>
                </div>
            </div>
        
        </>
    )

}

const UnfoldedCard = () => {
    return <div className="fixed inset-0 bg-black z-50">

    </div>
}

const PackageCard = React.forwardRef( ({ cover, title, slides, price, disclaimers }, ref ) => {

    const [ isUnfold, setIsUnfolded ] = useState(false)
    
    return (
        <>
            <Card 
                ref={ref}
                cover={cover} 
                title={title} 
            />
            {
                isUnfold ? <UnfoldedCard /> : null
            }
        </>
    )
})

export default PackageCard