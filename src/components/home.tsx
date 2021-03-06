import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {magazineAPI} from '../environment/env';
import {MagazinesModels, ProductModels} from '../models';
import './home.css';
import ProductCard from './productCard';
interface magazinesPageStates {
  list: Array<MagazinesModels>
}
const Home: React.FC = () => {
  const [magazinePages, setMagazinePages] = useState<magazinesPageStates>({list: []})
  const [currentPage, setCurrentPage] = useState<MagazinesModels | null>(null)
  const [favoriteList, setFavoriteList] = useState<Array<ProductModels>>([])
  const [pageMode, setPageMode] = useState<string>('pageList')
    
  useEffect(() => {
    axios.get(magazineAPI).then((data: any) => {
      setMagazinePages({
        list: data.data.editionMap.pages
      })
    })
  }, [])
    
  const addToFavoriteList = (product: ProductModels): void => {
    setFavoriteList([
      ...favoriteList,
      product
    ])
    alert('added to favoriteList')
  }
  
  return (
    <div>
      {pageMode === 'pageList' &&
        <div>
          {
            favoriteList.length !== 0 &&
            <button 
              className='page-mode-button' 
              onClick={() => setPageMode('favoriteList')}
            >
              Go to Favorite List
            </button>
          }
          {
            magazinePages.list.map((magazine: MagazinesModels, index: number): any => (
              <div key={index} className='page-card'>
                <div className='page-card-image'>
                  <img src={magazine.thumbnailUrl} alt='ownable' />
                </div>
                <div className='page-card-image'>
                  <h3>{magazine.articleName}</h3>
                </div>
                <div className='page-card-action'>
                  <button onClick={() => {
                    setCurrentPage(magazine)
                    setPageMode('productList')
                  }}>
                    See all products
                  </button>
                </div>
              </div>
            ))
          }
        </div>
      }
      {
        pageMode === 'productList' &&
          <div>
            <button className='page-mode-button' onClick={() => setPageMode('pageList')}>Go to Page List</button>
            {
              favoriteList.length !== 0 &&
                <button className='page-mode-button' onClick={() => setPageMode('favoriteList')}>Go to Favorite List</button>
            }
            {
              currentPage === null &&
                <h1>Empty list</h1>
            }
            {
              currentPage !== null &&
                currentPage.products.map((product: ProductModels, index: number): any => (
                  <ProductCard key={index} pageMode={pageMode} data={product} addToFavoriteList={addToFavoriteList} />
                ))
            }
          </div>
        }
        {
          pageMode === 'favoriteList' &&
          <div>
            <button className='page-mode-button' onClick={() => setPageMode('pageList')}>Go to Page List</button>
            {
              favoriteList.length === 0 &&
              <h1>Empty list</h1>
            }
            {
              favoriteList.map((product: ProductModels, index: number): any => (
              <ProductCard key={index} pageMode={pageMode} data={product} addToFavoriteList={addToFavoriteList} />
              ))
            }
          </div>
        }
    </div>
  );
}

export default Home;
