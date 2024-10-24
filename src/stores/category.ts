import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

interface Subcategory {
  name: string
  subcategories: string[]
}

interface CategoryStore {
  categories: Subcategory[]
  selectedCategory: Subcategory | null
  selectedCategoryIndex: number | null
  setSelectedCategory: (category: Subcategory, index: number) => void
}

export const useCategoryStore = defineStore('category', () => {
  const categories = ref([
    {
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
  const selectedCategory = ref<Subcategory | null>(null)
  const selectedCategoryIndex = ref<number | null>(null)

  const setSelectedCategory = (category: Subcategory, index: number) => {
    selectedCategory.value = category
    selectedCategoryIndex.value = index
  }

  return {
    categories,
    selectedCategory,
    selectedCategoryIndex,
    setSelectedCategory,
  }
})
