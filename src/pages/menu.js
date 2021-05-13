import { graphql } from 'gatsby'
import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'

const Menu = class extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            en: false,
            es: true,
            alimentos: true,
            bebidas: false,
            desayunos: false,
        }
        this.enHandler = this.enHandler.bind(this)
        this.esHandler = this.esHandler.bind(this)
        this.alimentosHandler = this.alimentosHandler.bind(this)
        this.bebidasHandler = this.bebidasHandler.bind(this)
        this.desayunosHandler = this.desayunosHandler.bind(this)
    }

    enHandler() {
        this.setState({
            en: true,
            es: false
        })
    }

    esHandler() {
        this.setState({
            es: true,
            en: false
        })
    }

    alimentosHandler() {
        this.setState({
            alimentos: true,
            bebidas: false,
            desayunos: false,
        })
    }

    bebidasHandler() {
        this.setState({
            alimentos: false,
            bebidas: true,
            desayunos: false,
        })
    }

    desayunosHandler() {
        this.setState({
            alimentos: false,
            bebidas: false,
            desayunos: true,
        })
    }

    render() {
        
        const data = this.props.data
        const alimentos = getImage(data.alimentos)
        const bebidas = getImage(data.bebidas)
        const desayunos = getImage(data.desayunos)
        const food = getImage(data.food)
        const drinks = getImage(data.drinks)
        const breakfast = getImage(data.breakfast)

        return (
            <Layout>
                <div>
                    <div
                        className="flex justify-center my-4"
                    >
                        <button
                            onClick={this.esHandler}
                            className="py-1 px-4 mx-2 bg-gray-400
                                rounded-2xl border-2 border-black"
                        >
                            Español
                        </button>
                        <button
                            onClick={this.enHandler}
                            className="py-1 px-4 mx-2 bg-gray-400
                                rounded-2xl border-2 border-black"
                        >
                            English
                        </button>
                    </div>
                </div>
                <div id="es" className={this.state.es? 'block' : 'hidden'}>
                    <div className="flex justify-center">
                        <a onClick={this.alimentosHandler} className="flex-grow mx-2 text-beke bg-gray-400 px-8 py-4 text-center font-bold" href="#menu">
                            Alimentos
				        </a>
                        <a onClick={this.bebidasHandler} className="flex-grow mx-2 text-beke bg-gray-400 px-8 py-4 text-center font-bold" href="#menu">
                            Bebidas
				        </a>
                        <a onClick={this.desayunosHandler} className="flex-grow mx-2 text-beke bg-gray-400 px-8 py-4 text-center font-bold" href="#menu">
                            Desayunos
				        </a>
                    </div>
                    <div className="flex justify-center mt-8">
                        {
                            this.state.alimentos
                            ?<GatsbyImage
                                className={`${this.state.alimentos? 'block' : 'hidden'} sm:max-w-screen-sm`}
                                image={alimentos}
                                alt="Alimentos"
                            />
                            : ''
                        }
                        {
                            this.state.bebidas
                            ?<GatsbyImage
                                className={`${this.state.bebidas? 'block' : 'hidden'} sm:max-w-screen-sm`}
                                image={bebidas}
                                alt="Alimentos"
                            />
                            : ''
                        }
                        {
                            this.state.desayunos
                            ?<GatsbyImage
                                className={`${this.state.desayunos? 'block' : 'hidden'} sm:max-w-screen-sm`}
                                image={desayunos}
                                alt="Alimentos"
                            />
                            : ''
                        }
                    </div>
                </div>
                <div id="en" className={this.state.en? 'block' : 'hidden'}>
                    <div className="flex justify-center">
                        <a onClick={this.alimentosHandler} className="flex-grow mx-2 text-beke bg-gray-400 px-8 py-4 text-center font-bold active" href="#menu">
                            Food
				        </a>
                        <a onClick={this.bebidasHandler} className="flex-grow mx-2 text-beke bg-gray-400 px-8 py-4 text-center font-bold" href="#menu">
                            Drinks
				        </a>
                        <a onClick={this.desayunosHandler} className="flex-grow mx-2 text-beke bg-gray-400 px-8 py-4 text-center font-bold" href="#menu">
                            Breakfast
				        </a>
                    </div>
                    <div className="flex justify-center mt-8">
                        {
                            this.state.alimentos
                                ?<GatsbyImage
                                    className={`${this.state.alimentos? 'block' : 'hidden'} sm:max-w-screen-sm`}
                                    image={food}
                                    alt="Alimentos"
                                />
                                : ''
                        }
                        {
                            this.state.bebidas
                            ?<GatsbyImage
                                className={`${this.state.bebidas? 'block' : 'hidden'} sm:max-w-screen-sm`}
                                image={drinks}
                                alt="Alimentos"
                            />
                            :''
                        }
                        
                        {
                            this.state.desayunos
                            ? <GatsbyImage
                                className={`${this.state.desayunos? 'block' : 'hidden'} sm:max-w-screen-sm`}
                                image={breakfast}
                                alt="Alimentos"
                            />
                            :''
                        }
                        
                    </div>
                </div>
            </Layout>
        )
    }

}

export default Menu

export const query = graphql`
    query{
        alimentos: file(relativePath: {eq: "menu-alimentos-esp.jpg"}) {
            childImageSharp {
                gatsbyImageData(
                    layout: CONSTRAINED
                    width: 640
                    placeholder: BLURRED 
                    formats: [WEBP]
                    quality: 100
                )
            }
        }
        bebidas: file(relativePath: {eq: "bebidas-es.jpg"}) {
            childImageSharp {
                gatsbyImageData(
                    layout: CONSTRAINED
                    width: 640
                    placeholder: BLURRED 
                    formats: [WEBP]
                    quality: 100
                )
            }
        }
        desayunos: file(relativePath: {eq: "desayunos-es.jpg"}) {
            childImageSharp {
                gatsbyImageData(
                    layout: CONSTRAINED
                    width: 640
                    placeholder: BLURRED 
                    formats: [WEBP]
                    quality: 100
                )
            }
        }
        food: file(relativePath: {eq: "food-menu.jpg"}) {
            childImageSharp {
                gatsbyImageData(
                    layout: CONSTRAINED
                    width: 640
                    placeholder: BLURRED 
                    formats: [WEBP]
                    quality: 100
                )
            }
        }
        drinks: file(relativePath: {eq: "drinks-en.jpg"}) {
            childImageSharp {
                gatsbyImageData(
                    layout: CONSTRAINED
                    width: 640
                    placeholder: BLURRED 
                    formats: [WEBP]
                    quality: 100
                )
            }
        }
        breakfast: file(relativePath: {eq: "breakfast-en.jpg"}) {
            childImageSharp {
                gatsbyImageData(
                    layout: CONSTRAINED
                    width: 640
                    placeholder: BLURRED 
                    formats: [WEBP]
                    quality: 100
                )
            }
        }
    }
`