
import { Categories } from '@/types/enum';

export interface Category {
  id: number;
  name: Categories.Fixed | Categories.Variable;
}

export interface Subcategory {
  name: string;
  description: string;
  categoryId: Category.id;
  designatedAmount: number;
}