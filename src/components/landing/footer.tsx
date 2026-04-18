'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Mail, Phone, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black py-20 border-t border-white/5">
      <div className="container px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-serif text-white mb-6">Resto<span className="text-gold italic">QR</span></h2>
            <p className="text-slate-400 max-w-sm mb-8">
              Transformando la industria gastronómica a través de tecnología premium 
              y experiencias memorables para el comensal.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-gold hover:border-gold transition-all">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-gold hover:border-gold transition-all">
                <Facebook size={20} />
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Contacto</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold" />
                info@restoqr.com
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold" />
                +54 11 1234 5678
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Próximos Pasos</h4>
            <Button variant="premium" className="w-full mb-4">Solicitar Demo</Button>
            <Link href="/demo">
              <Button variant="outline" className="w-full border-white/10 text-white">Ver Menú Ejemplo</Button>
            </Link>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center text-slate-500 text-sm">
          © 2026 RestoQR. Todos los derechos reservados. Diseñado para la excelencia.
        </div>
      </div>
    </footer>
  );
}
