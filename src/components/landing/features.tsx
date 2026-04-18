'use client';

import { motion } from 'framer-motion';
import { Smartphone, Zap, Bell, CreditCard, BarChart3, Star } from 'lucide-react';

const features = [
  {
    icon: <Smartphone className="h-8 w-8 text-gold" />,
    title: "Menú Interactivo",
    description: "Navegación visual premium que seduce al cliente y aumenta el ticket promedio."
  },
  {
    icon: <Zap className="h-8 w-8 text-gold" />,
    title: "Pedidos en Segundos",
    description: "Sin esperas. El cliente pide directamente a la cocina desde su celular."
  },
  {
    icon: <Bell className="h-8 w-8 text-gold" />,
    title: "Llamado al Mozo",
    description: "Eficiencia total. Tus mozos acuden exactamente cuando se los necesita."
  },
  {
    icon: <CreditCard className="h-8 w-8 text-gold" />,
    title: "Pagos Integrados",
    description: "Checkout rápido y sin fricciones. Aceptá tarjetas y billeteras digitales."
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-gold" />,
    title: "Analítica en Tiempo Real",
    description: "Conocé qué platos son los favoritos y optimizá tu stock con datos reales."
  },
  {
    icon: <Star className="h-8 w-8 text-gold" />,
    title: "Reseñas & Fidelización",
    description: "Capturá el feedback del cliente antes de que se retire del salón."
  }
];

export default function Features() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
            Funcionalidades de <span className="text-gold">Próxima Generación</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Todo lo que necesitás para llevar tu servicio al nivel de los mejores del mundo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-slate-card border border-white/5 hover:border-gold/30 transition-all group"
            >
              <div className="mb-6 bg-gold/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
