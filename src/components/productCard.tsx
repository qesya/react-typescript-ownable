import React from 'react';
import {ProductModels} from '../models'
interface ProductCardProps {
    data: ProductModels,
    pageMode: string,
    addToFavoriteList: (data: ProductModels) => void
}

const ProductCard: React.FC<ProductCardProps>  = ({data, pageMode, addToFavoriteList}) => {
  
  const  {thumbnailUrl, name, productTypeName, brand, price} = data;
 
  return (
    <div className='product-card'>
      <div className='product-image'>
        <img src={thumbnailUrl} alt='ownable'/>
      </div>
      <div>
        <h3>{name}</h3>
        <h5>{productTypeName} {brand && `(${brand})`}</h5>
        <h6>£{price && price.toFixed(2)} </h6>
      </div>
      <div className='product-action'>
        {
          pageMode !== 'favoriteList' &&
            <button onClick={() => addToFavoriteList(data)}>Add to favorite</button>
        }
      </div>
    </div>
  )
}

export default ProductCard
