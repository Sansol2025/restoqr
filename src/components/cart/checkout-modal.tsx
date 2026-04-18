'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X, CreditCard, Landmark, Wallet } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';
import { toast } from 'sonner';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const { items, total, clearCart } = useCart();

  const handlePayment = (method: string) => {
    toast.loading(`Procesando pago con ${method}...`, {
      id: 'payment-toast',
    });

    setTimeout(() => {
      toast.success('¡Pago exitoso!', {
        id: 'payment-toast',
        description: 'Su pedido ha sido enviado a la cocina.',
      });
      clearCart();
      onClose();
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 z-[101] max-w-lg mx-auto"
          >
            <Card className="rounded-t-[32px] border-t-gold/50 border-x-0 border-b-0">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-2xl font-bold">Resumen y Pago</CardTitle>
                <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
                  <X className="h-6 w-6" />
                </Button>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Items Summary */}
                <div className="space-y-3 max-h-48 overflow-y-auto pr-2 no-scrollbar">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center text-sm">
                      <span className="text-slate-300">
                        {item.quantity}x {item.name}
                      </span>
                      <span className="text-white font-medium">${item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/10 pt-4 flex justify-between items-center">
                  <span className="text-xl font-bold">Total</span>
                  <span className="text-2xl font-bold text-gold">${total}</span>
                </div>

                {/* Payment Methods */}
                <div className="space-y-3">
                  <p className="text-sm text-slate-400 font-medium">Método de Pago</p>
                  <div className="grid grid-cols-3 gap-3">
                    <Button
                      variant="secondary"
                      onClick={() => handlePayment('Tarjeta')}
                      className="flex flex-col h-20 gap-2 border border-white/5 hover:border-gold/50"
                    >
                      <CreditCard className="h-6 w-6" />
                      <span className="text-[10px]">Tarjeta</span>
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => handlePayment('Mercado Pago')}
                      className="flex flex-col h-20 gap-2 border border-white/5 hover:border-gold/50"
                    >
                      <Wallet className="h-6 w-6" />
                      <span className="text-[10px]">E-wallet</span>
                    </Button>
                    <Button
                      variant="secondary"
                      onClick={() => handlePayment('Transferencia')}
                      className="flex flex-col h-20 gap-2 border border-white/5 hover:border-gold/50"
                    >
                      <Landmark className="h-6 w-6" />
                      <span className="text-[10px]">Banco</span>
                    </Button>
                  </div>
                </div>

                <Button variant="premium" className="w-full h-14 text-lg rounded-2xl shadow-xl shadow-gold/10">
                  Confirmar Pedido
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
