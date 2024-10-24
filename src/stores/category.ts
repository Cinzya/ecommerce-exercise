import { ref } from 'vue'
import { defineStore } from 'pinia'

interface Category {
  id: number
  name: string
  subcategories: string[]
}

export interface CategoryStore {
  categories: Category[]
  selectedCategory: number | null
  setSelectedCategory: number | null
}

export const useCategoryStore = defineStore('category', () => {
  const categories = ref<Category[]>([
    {
      id: 1,
      name: 'Computer & Laptop',
      subcategories: [
        'Laptop',
        'Desktop',
        'Computer Accessories',
        'Storage Devices',
        'Networking Devices',
        'Software',
      ],
    },
    {
      id: 2,
      name: 'Computer Accessories',
      subcategories: [
        'Laptop Bags',
        'Mouse',
        'Keyboard',
        'Headphones',
        'Webcams',
        'Speakers',
      ],
    },
    {
      id: 3,
      name: 'Phones & Tablets',
      subcategories: [
        'Smartphones',
        'Tablets',
        'Phone Accessories',
        'Tablet Accessories',
        'Smartwatches',
        'Fitness Bands',
      ],
    },
    {
      id: 4,
      name: 'Headphones',
      subcategories: [
        'In-Ear Headphones',
        'On-Ear Headphones',
        'Over-Ear Headphones',
        'Wireless Headphones',
        'Noise Cancelling Headphones',
        'Sports Headphones',
      ],
    },
  ])
  const selectedCategory = ref<number | null>(null)

  const setSelectedCategory = (index: number) => {
    setSelectedCategory(index)
  }

  return {
    categories,
    selectedCategory,
    setSelectedCategory,
  }
})
