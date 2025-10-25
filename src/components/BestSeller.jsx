import React from 'react'
import ProductCard from './ProductCard'
import { useAppContext } from '../context/AppContext';

const BestSeller = () => {
    const { products } = useAppContext();
  return (
    <div className='mt-20 mb-12'>
      <div className='mb-8'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-800'>Best Sellers</h2>
        <p className='text-gray-600 mt-2'>Top picks loved by our customers</p>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-dull rounded-full mt-3"></div>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8'>
        {products.filter((product)=> product.inStock).slice(0,8).map((product, index)=>(
            <ProductCard key={index} product={product} index={index}/>
        ))}
        
      </div>
    </div>
  )
}

export default BestSeller
