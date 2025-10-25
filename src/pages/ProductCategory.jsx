import React from 'react'
import { useAppContext } from '../context/AppContext'
import { useParams } from 'react-router-dom'
import { categories } from '../assets/assets'
import ProductCard from '../components/ProductCard'

const ProductCategory = () => {

    const { products } =  useAppContext()
    const { category } = useParams()

    const searchCategory = categories.find((item)=> item.path.toLowerCase() === category)

    // Capitalize first letter to match product category format
    const categoryName = searchCategory ? searchCategory.path : category.charAt(0).toUpperCase() + category.slice(1)
    const filteredProducts = products.filter((product)=> product.category.toLowerCase() === categoryName.toLowerCase())

  return (
    <div className='mt-16 mb-12'>
      {searchCategory && (
        <div className='flex flex-col mb-8'>
            <div className='flex items-center gap-4 mb-2'>
                <h1 className='text-4xl font-bold text-gray-800'>{searchCategory.text}</h1>
                <span className='bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full'>
                    {filteredProducts.length} Products
                </span>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-dull rounded-full"></div>
            <p className='text-gray-600 mt-3'>Explore our collection of quality products</p>
        </div>
      )}
      {filteredProducts.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8'>
            {filteredProducts.map((product, index)=>(
                <ProductCard key={product._id} product={product} index={index}/>
            ))}
        </div>
      ): (
        <div className='flex flex-col items-center justify-center h-[60vh] space-y-4'>
            <div className='text-6xl'>🔍</div>
            <p className='text-3xl font-bold text-gray-800'>No products found</p>
            <p className='text-gray-600'>Try browsing other categories</p>
        </div>
      )}
    </div>
  )
}

export default ProductCategory
