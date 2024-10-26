import { ref } from 'vue'
import { defineStore } from 'pinia'

interface Category {
  id: number
  name: string
  subcategories: string[]
}

export interface FilterStore {
  categories: Category[]
  priceRange: { min: number | null; max: number | null }
  brands: string[]
}

export const useFilterStore = defineStore('filter', () => {
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
      id: 4,
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
      id: 2,
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
  const priceRange = ref<{ min: number | null; max: number | null }>({
    min: null,
    max: null,
  })
  const brands = ref<string[]>([])

  return {
    categories,
    priceRange,
    brands,
  }
})
