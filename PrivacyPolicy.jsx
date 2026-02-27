import React from 'react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Política de <span className="text-yellow-500">Privacidad</span>
          </h1>
          <p className="text-gray-500 mb-8 italic">Última actualización: 26 de febrero de 2026</p>

          <div className="prose prose-gray max-w-none text-gray-700 space-y-6">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900">1. Identificación del Responsable</h2>
              <p>
                <strong>RM Lab</strong>, con domicilio principal en Tuluá, Valle del Cauca, Colombia, y portal web 
                <a href="https://rmlabco.com/" className="text-blue-600 ml-1">https://rmlabco.com/</a>, es el responsable 
                del tratamiento de sus datos personales.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">2. Finalidades del Tratamiento</h2>
              <p>Sus datos serán utilizados para:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Gestionar la implementación de servicios de automatización e IA solicitados.</li>
                <li>Envío de comunicaciones comerciales sobre nuevas tecnologías y ofertas de la agencia.</li>
                <li>Atención de soporte técnico y requerimientos post-venta.</li>
                <li>Cumplimiento de obligaciones legales y contractuales.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">3. Derechos del Titular (Habeas Data)</h2>
              <p>
                De acuerdo con la Ley 1581 de 2012, usted tiene derecho a conocer, actualizar, rectificar y solicitar 
                la supresión de sus datos personales. Para ejercer estos derechos, puede escribirnos a: 
                <span className="font-medium text-gray-900 ml-1">jricardo@rmlabco.com</span>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900">4. Tratamiento de Datos e IA</h2>
              <p>
                Informamos que para la ejecución de ciertos flujos de automatización, RM Lab utiliza servicios de 
                procesamiento en la nube (Google Cloud, OpenAI) que operan bajo estándares internacionales de seguridad. 
                Sus datos sensibles nunca serán utilizados para el entrenamiento público de modelos de terceros sin su 
                consentimiento explícito.
              </p>
            </section>

            <section className="bg-gray-50 p-6 rounded-xl border border-gray-100">
              <p className="text-sm text-gray-600">
                Esta política rige de acuerdo a las leyes de la República de Colombia. RM Lab se reserva el derecho de 
                actualizar estos términos para adaptarlos a cambios legislativos.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;