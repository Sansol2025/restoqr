export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
}

export const MENU_DATA: MenuItem[] = [
  // Entradas
  {
    id: 'e1',
    name: 'Empanadas de Carne',
    description: 'Cortada a cuchillo, con aceitunas y huevo duro. 2 unidades.',
    price: 1200,
    category: 'Entradas',
    image: '/images/empanadas.jpg'
  },
  {
    id: 'e2',
    name: 'Provoleta al Hierro',
    description: 'Queso provolone fundido con orégano y aceite de oliva virgen.',
    price: 2500,
    category: 'Entradas',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'e3',
    name: 'Rabas a la Romana',
    description: 'Anillos de calamar rebozados con alioli de lima.',
    price: 3200,
    category: 'Entradas',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=2070&auto=format&fit=crop'
  },
  // Parrilla
  {
    id: 'p1',
    name: 'Ojo de Bife (400g)',
    description: 'Corte premium a la parrilla, con sal de mar y romero.',
    price: 8500,
    category: 'Parrilla',
    image: '/images/ojobife.jpg'
  },
  {
    id: 'p2',
    name: 'Asado de Tira',
    description: 'Costillar premium de cocción lenta a la brasa.',
    price: 7800,
    category: 'Parrilla',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2069&auto=format&fit=crop'
  },
  {
    id: 'p3',
    name: 'Choripán Gourmet',
    description: 'Chorizo de cerdo con chimichurri casero en pan de campo.',
    price: 2800,
    category: 'Parrilla',
    image: 'https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?q=80&w=2070&auto=format&fit=crop'
  },
  // Bebidas
  {
    id: 'b1',
    name: 'Malbec Reserva',
    description: 'Vino tinto intenso con notas de frutos rojos. Copa.',
    price: 1800,
    category: 'Bebidas',
    image: '/images/malbec.jpg'
  },
  {
    id: 'b2',
    name: 'Cerveza Ipa Artesanal',
    description: 'Cerveza tirada, amargor medio y aroma frutal.',
    price: 1500,
    category: 'Bebidas',
    image: 'https://images.unsplash.com/photo-1535959913415-c35332d6aff9?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'b3',
    name: 'Limonada con Menta',
    description: 'Refrescante, con jengibre y miel.',
    price: 1200,
    category: 'Bebidas',
    image: 'https://images.unsplash.com/photo-1542332213-9b5a5a3fab35?q=80&w=2070&auto=format&fit=crop'
  },
  // Postres
  {
    id: 'd1',
    name: 'Flan Mixto',
    description: 'Casero, con dulce de leche y crema doble.',
    price: 1500,
    category: 'Postres',
    image: 'https://images.unsplash.com/photo-1511910849309-0d5f2cddcada?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'd2',
    name: 'Panqueque de Dulce de Leche',
    description: 'Caramelizado, servido con helado de vainilla.',
    price: 1800,
    category: 'Postres',
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=2070&auto=format&fit=crop'
  }
];

export const CATEGORIES = ['Entradas', 'Parrilla', 'Bebidas', 'Postres'];
