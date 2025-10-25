import React from 'react'
import { categories } from '../assets/assets'
import { useAppContext } from '../context/AppContext'
import { useRef } from 'react'

const Categories = () => {

    const {navigate} = useAppContext()
    const scrollRef = useRef(null)

    const scroll = (scrollOffset) => {
        scrollRef.current.scrollLeft += scrollOffset
    }

  return (
    <div className='mt-20'>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className='text-3xl md:text-4xl font-bold text-gray-800'>Shop by Category</h2>
          <p className='text-gray-600 mt-2'>Browse through our wide range of categories</p>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={()=> scroll(-200)} className='bg-white border-2 border-gray-200 p-3 rounded-full shadow-md hover:bg-primary hover:text-white hover:border-primary transition-all duration-300'>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={()=> scroll(200)} className='bg-white border-2 border-gray-200 p-3 rounded-full shadow-md hover:bg-primary hover:text-white hover:border-primary transition-all duration-300'>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
      <div className='relative'>
        <div ref={scrollRef} className='flex overflow-x-scroll no-scrollbar gap-6 py-4'>

          {categories.map((category, index)=>(
              <div key={index} 
                className='group cursor-pointer py-8 px-6 rounded-2xl flex flex-col justify-center items-center min-w-[180px] border-2 border-gray-200 bg-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out hover:border-primary'
              onClick={()=>{
                  navigate(`/products/${category.path.toLowerCase()}`);
                  scrollTo(0,0)
              }}
              >
                  <div className='w-28 h-28 mb-4 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary-dull/10 rounded-full group-hover:scale-110 transition-transform duration-300'>
                    <img src={category.image} alt={category.text} className='max-w-20 max-h-20 object-contain'/>
                  </div>
                  <p className='text-base font-bold text-gray-800 text-center group-hover:text-primary transition-colors duration-300'>{category.text}</p>
              </div>
                      
          ))}

          
        </div>
      </div>
    </div>
  )
}

export default Categories
