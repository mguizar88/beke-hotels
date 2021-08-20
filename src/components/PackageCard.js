import React, { useEffect, useRef, useState } from "react"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { StarIcon } from '@heroicons/react/solid'

import transitionPromise from "../hooks/transitionPromise"
import Carousel from 'react-bootstrap/Carousel'

const PackageCard = React.forwardRef(({ cover, title, includes, price, elementIndex }, ref) => {
    
    const [offsetWidth, setOffsetWidth] = useState(null)
    const [ isUnfold, setIsUnfold ] = useState(false)
    const [ renderPackagesIncludes, setRenderPackagesIncludes ] = useState(false)
    const image = getImage(cover.image)
    const alt = cover.alt
    const { amount, people } = price
    
    const setParentOffsetWidth = () => {
        const offsetWidth = ref.current.offsetWidth 
        return setOffsetWidth(offsetWidth)
        
    }

    const childFillParentWidth = () => {
        setParentOffsetWidth()
        transitionPromise(ref.current, 'width', '600px')
    }

    const unfoldCard = async(parentSize) => {
        ref.current.addEventListener('transitionend', te())
        console.log(ref)
        //const onClick = await parentOnClick(elementIndex)
        //const fillParent = childFillParentWidth()
        
    }
    
    const te = () => setIsUnfold(!isUnfold)
    return (
        <>
            <div 
                ref={ref}
                className={`${isUnfold? `w-2/3` : `w-1/3`} transition-all duration-300`}
            >   
                { !isUnfold
                    ?<>
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
                                <h3 className="text-center font-black uppercase w-full overflow-ellipsis whitespace-nowrap overflow-hidden">{ title }</h3>
                            </div>
                            <button onClick={unfoldCard} className="bg-yellow-400 text-center text-white w-full py-2 rounded-md">
                                Ver más.
                            </button>
                        </div>
                    </>
                    :<Carousel
                        nextLabel={null}
                        prevLabel={null}
                    >
                        {
                            includes.map((include, index) => {

                                const includeTitle = include.title
                                const image = getImage(include.imageObject.image)
                                const alt = include.imageObject.alt

                                return (
                                    <Carousel.Item key={index}>
                                        <div className="absolute top-0 w-full bg-gray-900 z-50 text-white text-center">
                                            <h2 className="text-xl">{ title }</h2>
                                            <p>{amount}<span className="font-extrabold"> {people}</span></p>
                                        </div>
                                        <div className="mx-auto">
                                            <GatsbyImage style={{height: ref.current.clientHeight}} image={image} alt={alt} />
                                        </div>
                                        <Carousel.Caption className="bg-gray-900 rounded-xl">
                                            <h3 className="mb-4">{includeTitle}</h3>
                                            <a className="bg-yellow-400 p-2 my-4" target="_blank" href="https://hotels.cloudbeds.com/es/reservation/a5nfpq?currency=MXN#checkin=2021-09-15&checkout=2021-09-18">Reservar</a>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                )
                            })
                        }
                    </Carousel>
                }
            </div>
        </>
    )
})

export default PackageCard
