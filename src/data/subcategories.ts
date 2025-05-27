import { Categories } from "@/types/enum";
import type { Category, Subcategory } from "@/types/types";

export const categories: Category[] = [
  { id: 1, name: Categories.Fixed },
  { id: 2, name: Categories.Variable }
];

export const subcategories: Subcategory[] = [
  { name: 'Transporte', description: 'Gasto de gasolina en moto', categoryId: 1, designatedAmount: 18.00 },
  { name: 'Corte de cabello', description: 'Gasto de corte de cabello generalmente dos cortes al mes', categoryId: 1, designatedAmount: 7.00 },
  { name: 'Apoyo familiar', description: 'Mensualidad para ayudar a mi familia', categoryId: 1, designatedAmount: 20.00 },
  { name: 'Mantenimiento de moto', description: 'Gasto en mantenimiento de la moto', categoryId: 1, designatedAmount: 25.00 },
  { name: 'Salud Física', description: 'Gasto en salida a las piscinas', categoryId: 1, designatedAmount: 10.00 },
  { name: 'Comer fuera', description: 'Salidas a comer con amigos o familia', categoryId: 2, designatedAmount: 5.00 },
  { name: 'Artículos personales', description: 'Compra de artículos personales como ropa, calzado, etc', categoryId: 2, designatedAmount: 7.00 },
  { name: 'Entretenimiento', description: 'Subscripciones a plataformas de striming, etc', categoryId: 2, designatedAmount: 5.00 },
  { name: 'Deporte', description: 'Gasto relacionado con actividades deportivas', categoryId: 2, designatedAmount: 5.00 },
  { name: 'Transporte tarjetas', description: 'Recarga de tarjetas de transporte', categoryId: 2, designatedAmount: 3.00 },
  { name: 'Comunidad', description: 'Monto asignado a la comunidad', categoryId: 2, designatedAmount: 10.00 }
]
export const subcategoryFixed: Subcategory[] = subcategories.filter(subcategory => subcategory.categoryId === 1);
export const subcategoryVariable: Subcategory[] = subcategories.filter(subcategory => subcategory.categoryId === 2);