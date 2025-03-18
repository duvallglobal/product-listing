export interface ProductAnalysis {
  id: string
  imageUrl: string
  title: string
  description: string
  suggestedPrice: number
  category: string
  similarProducts: SimilarProduct[]
  competitorProducts: SimilarProduct[]
}

export interface SimilarProduct {
  id: string
  title: string
  price: number
  imageUrl: string
}

export interface ProductListing {
  id: string
  title: string
  description: string
  price: number
  imageUrl: string
  category: string
}

// Add this interface for the image enhancement options
export interface ImageEnhancementOptions {
  autoEnhance: boolean
  autoCrop: boolean
  brightness: number
  contrast: number
  saturation: number
}

