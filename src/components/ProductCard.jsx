import React from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";


const ProductCard = ({product, index}) => {
    const {currency, addToCart, removeFromCart, cartItems, navigate} = useAppContext()

   
    return product && (
        <div 
            onClick={()=> {navigate(`/products/${product.category.toLowerCase()}/${product._id}`); scrollTo(0,0)}} 
            className="group relative border border-gray-200 rounded-xl p-5 bg-white shadow-md hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer overflow-hidden"
        >
            {/* Discount Badge */}
            {product.price > product.offerPrice && (
                <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    {Math.round(((product.price - product.offerPrice) / product.price) * 100)}% OFF
                </div>
            )}

            {/* Product Image */}
            <div className="flex items-center justify-center h-48 mb-4 overflow-hidden rounded-lg bg-gradient-to-br from-gray-50 to-gray-100">
                <img 
                    className="group-hover:scale-110 transition-transform duration-500 max-h-44 w-auto object-contain" 
                    src={product.image[0]} 
                    alt={product.name} 
                />
            </div>

            {/* Product Info */}
            <div className="space-y-3">
                {/* Category */}
                <span className="inline-block text-xs uppercase font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {product.category}
                </span>

                {/* Product Name */}
                <h3 className="text-gray-800 font-bold text-lg leading-tight line-clamp-2 min-h-[3.5rem]">
                    {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1">
                    {Array(5).fill('').map((_, i) => (
                        <img 
                            key={i} 
                            className="w-4 h-4" 
                            src={i < 4 ? assets.star_icon : assets.star_dull_icon} 
                            alt=""
                        />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">(4.0)</span>
                </div>

                {/* Price and Add to Cart */}
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <div className="flex flex-col">
                        <p className="text-2xl font-bold text-primary">
                            {currency}{product.offerPrice}
                        </p>
                        {product.price > product.offerPrice && (
                            <span className="text-gray-400 text-sm line-through">
                                {currency}{product.price}
                            </span>
                        )}
                    </div>

                    <div onClick={(e) => { e.stopPropagation(); }} className="text-primary">
                        {!cartItems[product._id] ? (
                            <button 
                                onClick={() => addToCart(product._id)} 
                                className="flex items-center justify-center gap-2 bg-primary text-white font-semibold px-5 py-2.5 rounded-lg hover:bg-primary-dull hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                            >
                                <img src={assets.cart_icon} alt="cart" className="w-5 h-5 brightness-0 invert"/>
                                Add
                            </button>
                        ) : (
                            <div className="flex items-center justify-center gap-3 bg-primary text-white font-semibold px-4 py-2.5 rounded-lg shadow-md">
                                <button 
                                    onClick={() => {removeFromCart(product._id)}} 
                                    className="text-xl font-bold hover:scale-125 transition-transform duration-200 w-6 h-6 flex items-center justify-center"
                                >
                                    −
                                </button>
                                <span className="text-lg font-bold min-w-[24px] text-center">
                                    {cartItems[product._id]}
                                </span>
                                <button 
                                    onClick={() => {addToCart(product._id)}} 
                                    className="text-xl font-bold hover:scale-125 transition-transform duration-200 w-6 h-6 flex items-center justify-center"
                                >
                                    +
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;