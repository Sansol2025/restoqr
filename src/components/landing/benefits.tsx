'use client';

import { motion } from 'framer-motion';

export default function Benefits() {
  return (
    <section className="py-32 bg-slate-surface">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
              Diseñado para el <br />
              <span className="text-gold italic">Éxito Operativo</span>
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="text-4xl font-serif text-gold/40">+30%</div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Aumento del Ticket Promedio</h4>
                  <p className="text-slate-400">La venta sugestiva inteligente y las fotos premium tientan más que un papel.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-4xl font-serif text-gold/40">-20%</div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Reducción en Tiempos de Espera</h4>
                  <p className="text-slate-400">Los clientes no esperan por el mozo para pedir o pagar la cuenta.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="text-4xl font-serif text-gold/40">100%</div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Control Total</h4>
                  <p className="text-slate-400">Todo centralizado. Controlá stock, ventas y rendimiento desde un solo lugar.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border border-gold/20 shadow-[0_0_50px_rgba(212,175,55,0.1)]">
              <img 
                src="/restaurant_owner_looking_at_tablet_1776540830168.png"
                className="w-full h-full object-cover"
                alt="Gestión inteligente de restaurante"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-8 -left-8 bg-gold p-8 rounded-2xl shadow-2xl animate-bounce-slow">
              <p className="text-black font-bold text-lg">"RestoQR duplicó <br />nuestra rotación <br />de mesas"</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
