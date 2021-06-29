import React, { useEffect, useRef, useState } from "react"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { StarIcon } from '@heroicons/react/solid'

const UnfoldedCard = () => {
    return <div className="fixed inset-0 bg-black z-50">

    </div>
}

const PackageCard = React.forwardRef(({ cover, title, slides, price, disclaimers }, ref) => {
    console.log(ref)
    const [offsetWidth, setOffsetWidth] = useState(null)
    const [ isUnfold, setIsUnfolded ] = useState(false)
    const image = getImage(cover.image)
    const alt = cover.alt
    const parentRef = React.createRef()
    
    const setParentOffsetWidth = () => {
        const offsetWidth = parentRef.current.offsetWidth 
        setOffsetWidth(offsetWidth)
    }

    const unfoldCard = (parentSize) => {
        
        setIsUnfolded(!isUnfold)
    }
    
    return (
        <>
            <div 
                ref={parentRef} 
                style={{width: offsetWidth? offsetWidth : 'inherit'}}
                className="transition-all"
            >
                <div>
                    <GatsbyImage className="h-60" image={image} alt={alt} />
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
                    <button onClick={setParentOffsetWidth} className="bg-yellow-400 text-center text-white w-full py-2 rounded-md">
                        Ver más.
                    </button>
                </div>
            </div>
        </>
    )
})

export default PackageCard