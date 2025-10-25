import React, { useEffect, useState } from 'react'
import { useAppContext } from '../context/AppContext'
import ProductCard from '../components/ProductCard'

const AllProducts = () => {

    const {products, searchQuery } = useAppContext()
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(()=>{
        if(searchQuery.length > 0){
            setFilteredProducts(products.filter(
                product => product.name.toLowerCase().includes(searchQuery.toLowerCase())
            ))}else{
                setFilteredProducts(products)
            }
    },[products, searchQuery])

  return (
    <div className='mt-16 mb-12'>
      <div className='mb-8'>
        <div className='flex items-center gap-4 mb-2'>
          <h1 className='text-4xl font-bold text-gray-800'>All Products</h1>
          <span className='bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full'>
            {filteredProducts.filter((product)=> product.inStock).length} Products
          </span>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-dull rounded-full"></div>
        <p className='text-gray-600 mt-3'>Discover our complete collection of quality products</p>
      </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8'>
           {filteredProducts.filter((product)=> product.inStock).map((product, index)=>(
            <ProductCard key={index} product={product} index={index}/>
           ))}
        </div>

    </div>
  )
}

export default AllProducts
