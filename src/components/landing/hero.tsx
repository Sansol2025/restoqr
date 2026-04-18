'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background z-10" />
        <img
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2070"
          className="w-full h-full object-cover scale-105"
          alt="Luxury Restaurant"
        />
      </div>

      <div className="container relative z-20 px-6 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-gold font-medium tracking-[0.3em] uppercase mb-4 block animate-pulse">
            La Evolución Gastronómica
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight">
            Digitalizá la Excelencia <br />
            <span className="text-gold italic">en cada mesa.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-300 text-lg md:text-xl mb-10 leading-relaxed">
            RestoQR transforma la experiencia de tus clientes con un menú digital premium, 
            pedidos en tiempo real y pagos integrados. Más ventas, menos esperas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="premium" size="lg" className="rounded-full px-12 h-16 text-lg w-full sm:w-auto">
              Comenzar Ahora
            </Button>
            <Link href="/demo">
              <Button variant="outline" size="lg" className="rounded-full px-12 h-16 text-lg border-white/20 text-white hover:bg-white/10 w-full sm:w-auto">
                Ver Demo En Vivo
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gold/10 rounded-full blur-[120px] z-10" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold/5 rounded-full blur-[120px] z-10" />
    </section>
  );
}
