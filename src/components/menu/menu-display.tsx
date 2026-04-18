'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MENU_DATA, CATEGORIES, MenuItem } from '@/data/menu';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, ShoppingCart, Bell } from 'lucide-react';
import { useCart } from '@/hooks/use-cart';
import { toast } from 'sonner';
import CheckoutModal from '@/components/cart/checkout-modal';

export default function MenuDisplay() {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0]);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const { addItem, itemCount, total } = useCart();

  const filteredItems = MENU_DATA.filter((item) => item.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const notifyWaiter = () => {
    toast.success('Pidiendo atención del mozo...', {
      description: 'Un mozo se acercará a su mesa en breve.',
      icon: <Bell className="h-5 w-5 text-gold" />,
    });
  };

  const handleAddToCart = (item: MenuItem) => {
    addItem(item);
    toast.success(`${item.name} añadido`, {
      description: 'El item se agregó correctamente al carrito.',
      action: {
        label: 'Ver Carrito',
        onClick: () => document.getElementById('cart-trigger')?.click(),
      },
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-background pb-32">
      {/* Header with Call Waiter */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-white/5 px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-gold to-white bg-clip-text text-transparent">
          RestoQR
        </h1>
        <Button
          variant="outline"
          size="sm"
          onClick={notifyWaiter}
          className="border-gold text-gold hover:bg-gold/10"
        >
          <Bell className="h-4 w-4 mr-2" />
          Llamar Mozo
        </Button>
      </header>

      {/* Categories Horizontal Scroll */}
      <div className="sticky top-[73px] z-40 bg-background pt-4 pb-2">
        <div className="flex overflow-x-auto lg:justify-center px-6 gap-2 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-gold text-black shadow-lg shadow-gold/20'
                  : 'bg-slate-card text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Menu Items Grid */}
      <main className="px-6 py-8">
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredItems.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <Card className="group overflow-hidden border-white/5 hover:border-gold/30 transition-all">
                <div className="relative h-48 w-full bg-slate-surface overflow-hidden">
                  {/* Image Placeholder with Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                  <img
                    src={`https://source.unsplash.com/featured/?${item.name},food`}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Badge className="absolute top-4 right-4 z-20" variant="gold">
                    ${item.price}
                  </Badge>
                </div>
                <CardHeader className="pt-4">
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between items-center pt-0">
                  <span className="text-gold font-bold text-xl">${item.price}</span>
                  <Button
                    onClick={() => handleAddToCart(item)}
                    size="sm"
                    className="rounded-full h-10 w-10 p-0 shadow-lg shadow-gold/20"
                  >
                    <Plus className="h-5 w-5" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </main>

      {/* Bottom Cart Bar */}
      <AnimatePresence>
        {itemCount > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-6 left-6 right-6 z-50"
          >
            <div className="bg-gradient-to-r from-gold to-gold-muted p-[1px] rounded-2xl shadow-2xl shadow-gold/20">
              <div className="bg-black/90 backdrop-blur-2xl rounded-[15px] p-4 flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="bg-gold text-black h-6 w-6 rounded-full flex items-center justify-center text-xs font-bold absolute -top-2 -right-2 border-2 border-black">
                      {itemCount}
                    </div>
                    <ShoppingCart className="h-6 w-6 text-gold" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-lg">${total}</p>
                    <p className="text-slate-400 text-xs text-uppercase tracking-wider">Mi Pedido</p>
                  </div>
                </div>
                <Button 
                  id="cart-trigger" 
                  variant="premium" 
                  className="rounded-xl px-8 h-12"
                  onClick={() => setIsCheckoutOpen(true)}
                >
                  Ver Todo
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CheckoutModal 
        isOpen={isCheckoutOpen} 
        onClose={() => setIsCheckoutOpen(false)} 
      />
    </div>
  );
}
