import React from 'react'
import Photos from './Photos';

const Favourite = ({favouritePhotos,handleRemoveFavourite}) => {

  return (
    <div>
      <nav className="navbar">
        <div className="nav_logo">
          Fotoflix
        </div>
        <div className="navbar_links">
          <a href='/'>Home</a>
        </div>
      </nav>
      <main>
        <section className='photos'>
           { favouritePhotos && favouritePhotos.map((image,index) => {
            return (
              <Photos key={index} {...image}
              isFavourite={true}
              onFavouriteClick=
              {()=> handleRemoveFavourite(image)}>
                <span>Added to favourites</span>
              </Photos>
            )
           
           })}
        </section>
      </main>
    </div>
  )
}

export default Favourite;
