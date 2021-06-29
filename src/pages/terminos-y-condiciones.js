import React from 'react'
import Layout from '../components/Layout'

const Page = () => {
    return (
        <Layout>
            <div className="bg-gradient-to-br from-beke to-gray-900">
                <div className="max-w-screen-md mx-auto py-12 px-4">
                    <h1 className="text-center font-bold text-white text-2xl sm:text-6xl mb-12">Términos y condiciones</h1>
                    <div className="bg-gray-900 shadow-lg rounded-xl text-white p-8">
                        <div className="mb-4">
                            <p>Totales en pesos mexicanos e impuestos incluidos.</p>
                            <p>Mejor precio garantizado: Evita cargos y comisiones de agencias.</p>
                            <p>Métodos de pago: transferencia, tarjeta y depósito.</p>
                            <p>Aparta con 50% y liquida al llegar.</p>
                            <p>Teléfono: (998) 272 2665</p>
                        </div>
                        <div className="mb-4">
                            <h2>Tarifa Flex:</h2>
                            <p>
                                Porque sabemos que la vida nos sorprende, nuestra tarifa flex brinda la tranquilidad de poder modificar fácilmente tus fechas sin costo alguno, además, garantiza la tarifa más económica.
                            </p>
                        </div>
                        <div className="">
                            <p>*Cambio de fecha, nombre y tipo de habitación hasta con 5 días de anticipación sin costo.</p>
                            <p>*Vigencia de 365 días y sujeta a disponibilidad.</p>
                            <p>*Entrada y salida preferencial.</p>
                            <p>*No reembolsable.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Page