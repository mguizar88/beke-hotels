import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import Layout from '../components/Layout'

const Tours = () => (
    <Layout>

        <h1 
            className="sm:text-6xl text-2xl text-gray-900 py-4
            font-bold text-center sm:pt-24"
        >
            Tours en Bacalar
        </h1>

        <div className="grid grid-cols-1 grid-rows-none sm:grid-rows-2 sm:grid-cols-4 gap-4 p-4 my-20">
          <div className="sm:col-span-2 row-span-2">
            <StaticImage className="max-w-full rounded-sm" src="../img/bacalar-laguna.jpg" alt="Bacalar" />
            <div className="sm:p-12 p-4 rounded-sm bg-gray-900 text-white">
              <h2 className="text-2xl font-bold mb-4">Tour en Ponton</h2>
              <p>
                ¡El favorito de todos! Descubre la laguna de los 7 colores a bordo de una cómoda embarcación con la tripulación más amigable y profesional de la zona. Recorre los sitios con mayor relevancia y belleza de la laguna, mientras conoces la historia y misterios de Bacalar.
              </p>
              <a href="">
                Más información
              </a>
            </div>
          </div>
          <div className="flex row-span-1 col-span-1">
            <StaticImage className="max-w-full rounded-sm" src="../img/bacalar-tours.jpeg" alt="Bacalar" />
          </div>
          <div className="flex row-span-1 col-span-1">
            <StaticImage className="max-w-full rounded-sm" src="../img/ponton-itzaes-bacalar.jpeg" alt="Bacalar" />
          </div>
          <div className="flex row-span-1 col-span-1">
            <StaticImage className="max-w-full rounded-sm" src="../img/Tour-Bacalar-Thumb.jpg" alt="Bacalar" />
          </div>
          <div className="flex row-span-1 col-span-1">
            <StaticImage width={800} height={800} className="max-w-full rounded-sm" src="../img/b.jpg" alt="Bacalar" />
          </div>
        </div>

        <div className="grid grid-cols-1 grid-rows-none sm:grid-rows-2 sm:grid-cols-4 gap-4 p-4 my-20">
          <div className="sm:col-span-2 row-span-2">
            <StaticImage className="max-w-full rounded-sm" src="../img/paddle-surf.jpg" alt="Bacalar" />
            <div className="sm:p-12 p-4 rounded-sm bg-gray-900 text-white">
              <h2 className="text-2xl font-bold mb-4">Tour Paddle</h2>
              <p>
                Descubre de la manera más sustentable la laguna de los 7 colores con el equipo de guías más amigable y capacitado de la zona. Rema sobre una tabla de Paddle Surf o sobre un kayak para recibir el primer rayo de sol del día. 
              </p>
            </div>
          </div>
          <div className="flex ">
            <StaticImage className="max-w-full rounded-sm" src="../img/paddle-tour.jpg" alt="Bacalar" />
          </div>
          <div className="flex ">
            <StaticImage className="max-w-full rounded-sm" src="../img/005-1.jpg" alt="Bacalar" />
          </div>
          <div className="flex ">
            <StaticImage className="max-w-full rounded-sm" src="../img/pad.jpg" alt="Bacalar" />
          </div>
          <div className="flex ">
            <StaticImage className="max-w-full rounded-sm" src="../img/paddle_surf.jpg" alt="Bacalar" />
          </div>
        </div>

        <div className="grid grid-cols-1 grid-rows-none sm:grid-rows-2 sm:grid-cols-4 gap-4 p-4 my-20">
          <div className="sm:col-span-2 row-span-2">
            <StaticImage className="max-w-full rounded-sm" src="../img/vel.jpg" alt="Bacalar" />
            <div className="sm:p-12 p-4 rounded-sm bg-gray-900 text-white">
              <h2 className="text-2xl font-bold mb-4">Tour Velero</h2>
              <p>
                Conocerás los diferentes cenotes que alimentan la laguna, la Isla de los Pájaros, el canal de los piratas y los famosos estromatolitos: formaciones orgánicas. ¡Disfrutarás de un delicioso snack tropical y bebidas refrescantes a bordo! 
              </p>
            </div>
          </div>
          <div className="flex row-span-1 col-span-1">
            <StaticImage width={400} height={400} className="max-w-full rounded-sm" src="../img/bacalar-2699012_640.jpg" alt="Bacalar" />
          </div>
          <div className="flex row-span-1 col-span-1">
            <StaticImage width={400} height={400} className="max-w-full rounded-sm" src="../img/dog.jpeg" alt="Bacalar" />
          </div>
          <div className="flex row-span-1 col-span-1">
            <StaticImage width={400} height={400} className="max-w-full rounded-sm" src="../img/velero.jpg" alt="Bacalar" />
          </div>
          <div className="flex row-span-1 col-span-1">
            <StaticImage width={400} height={400} className="max-w-full rounded-sm" src="../img/laguna.jpg" alt="Bacalar" />
          </div>
        </div>
    </Layout>
)

export default Tours
