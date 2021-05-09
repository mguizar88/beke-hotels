import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'

const Tours = () => (
    <Layout>

        <h1 
            className="sm:text-6xl text-2xl text-gray-900 py-4
            font-bold text-center sm:pt-24"
        >
            Tours en Holbox
        </h1>

        <div className="grid grid-cols-1 grid-rows-none sm:grid-rows-2 sm:grid-cols-4 gap-4 p-4 my-20">
          <div className="sm:col-span-2 row-span-2">
            <StaticImage className="max-w-full rounded-sm" src="../img/tour-clasico-3-islas_22.jpg" alt="Bacalar" />
            <div className="sm:p-12 p-4 rounded-sm bg-gray-900 text-white">
              <h2 className="text-2xl font-bold mb-4">Tour 3 Islas</h2>
              <p>
                 
              </p>
            </div>
          </div>
          <div className="flex row-span-1 col-span-1">
            <StaticImage className="max-w-full rounded-sm" src="../img/3-islas.jpg" alt="Bacalar" />
          </div>
          <div className="flex row-span-1 col-span-1">
            <StaticImage className="max-w-full rounded-sm" src="../img/tour-clasico-3-islas_24.jpg" alt="Bacalar" />
          </div>
          <div className="flex row-span-1 col-span-1">
            <StaticImage className="max-w-full rounded-sm" src="../img/tour-clasico-3-islas_17.jpg" alt="Bacalar" />
          </div>
          <div className="flex row-span-1 col-span-1">
            <StaticImage className="max-w-full rounded-sm" src="../img/3.jpg" alt="Bacalar" />
          </div>
        </div>

        <div className="grid grid-cols-1 grid-rows-none sm:grid-rows-2 sm:grid-cols-4 gap-4 p-4 my-20">
          <div className="sm:col-span-2 row-span-2">
            <StaticImage className="max-w-full rounded-sm" src="../img/nado-tiburon-ballena.jpg" alt="Bacalar" />
            <div className="sm:p-12 p-4 rounded-sm bg-gray-900 text-white">
              <h2 className="text-2xl font-bold mb-4">Tour Nado con Tiburon Ballena</h2>
              <p>
                
              </p>
            </div>
          </div>
          <div className="flex ">
            <StaticImage className="max-w-full rounded-sm" src="../img/tb.jpg" alt="Bacalar" />
          </div>
          <div className="flex ">
            <StaticImage className="max-w-full rounded-sm" src="../img/tiburon-ballena.jpg" alt="Bacalar" />
          </div>
          <div className="flex ">
            <StaticImage className="max-w-full rounded-sm" src="../img/ballenatiburon.jpg" alt="Bacalar" />
          </div>
          <div className="flex ">
            <StaticImage className="max-w-full rounded-sm" src="../img/holbox-tb.jpg" alt="Bacalar" />
          </div>
        </div>

        <div className="grid grid-cols-1 grid-rows-none sm:grid-rows-2 sm:grid-cols-4 gap-4 p-4 my-20">
          <div className="sm:col-span-2 row-span-2">
            <StaticImage className="max-w-full rounded-sm" src="../img/nativa-park.jpg" alt="Bacalar" />
            <div className="sm:p-12 p-4 rounded-sm bg-gray-900 text-white">
              <h2 className="text-2xl font-bold mb-4">Tour Wild by Nativa</h2>
              <p>
                
              </p>
            </div>
          </div>
          <div className="flex row-span-1 col-span-1">
            <StaticImage className="max-w-full rounded-sm" src="../img/wild.jpg" alt="Bacalar" />
          </div>
          <div className="flex row-span-1 col-span-1">
            <StaticImage className="max-w-full rounded-sm" src="../img/reserva.jpg" alt="Bacalar" />
          </div>
          <div className="flex row-span-1 col-span-1">
            <StaticImage className="max-w-full rounded-sm" src="../img/nativa.jpg" alt="Bacalar" />
          </div>
          <div className="flex row-span-1 col-span-1">
            <StaticImage className="max-w-full rounded-sm" src="../img/nativawild.jpg" alt="Bacalar" />
          </div>
        </div>
    </Layout>
)

export default Tours
