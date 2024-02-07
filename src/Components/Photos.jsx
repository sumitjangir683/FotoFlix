import React from 'react'
import { useState, useEffect } from 'react'
import { FaHeart, FaDownload, FaShare } from 'react-icons/fa';

function Photos() {
    const [loading, setLoading] = useState(false);
    const [photos, setPhotos] = useState([]);
    const [favouritePhotos,setFavouritePhotos]=useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            setLoading(true);
            // const clientID = '?client_id=ho_pSiTgNEsIs1HhE0HE77LR-eGYYsQ31WbbW4a-qCo';
            // const mainUrl = "https://api.unsplash.com/photos/";
            try {
                const response = await fetch('https://api.unsplash.com/photos/?client_id=ho_pSiTgNEsIs1HhE0HE77LR-eGYYsQ31WbbW4a-qCo');
                const data = await response.json();
                setPhotos(data);
                setLoading(false);
            }
            catch (error) {
                setLoading(false);
                console.log(error);
            }
        }
        fetchImages();
    }, []);

    const handleFavouriteClick= (photoId)=>{
        const existingIndex=favouritePhotos.findIndex((favPhoto) => favPhoto.id===photoId)
        if (existingIndex!==-1){
            setFavouritePhotos((prevFavourites) =>
                prevFavourites.filter((favPhoto) => favPhoto.id!==photoId)
            );

            console.log(photoId);
        }
        else {
            const photoToAdd = photos.find((photo) => photo.id===photoId)
            setFavouritePhotos((prevFavourites) => [...prevFavourites,photoToAdd]);
        }
    }
    return (
        <main>
            <section className="photos">
                {
                    loading ? (<p>
                        loading....
                    </p>) :(
                       photos && photos.map((photo)=>(
                    <article key={photo.id} className={`photo ${favouritePhotos.some((favPhoto) => favPhoto.id===photo.id) ? 'favourite-photo' : ""}`}>
                        <img src={photo.urls.regular} alt={photo.alt_description} />
                        <div className="photo_info">
                            <div className="photo-header">
                                <h4>{photo.user.name}</h4>
                                <button className={`favourite-btn ${favouritePhotos.some((favPhoto) => favPhoto.id===photo.id) ? 'active' : ""}`} onClick={()=>handleFavouriteClick(photo.id)}>
                                    <FaHeart />
                                </button>

                            </div>
                            <div className="photo-actions">
                                <p>
                                    <FaHeart className='heart-icon' />{photo.likes}
                                </p>
                                <button className='share-btn'>
                                    <FaShare />
                                </button>
                                <button className="download-btn">
                                    <FaDownload />
                                </button>
                            </div>
                            <a href={photo.user.portfolio_url}>
                                <img src={photo.user.profile_image.medium} className='user-img' alt={photo.user.name} />
                            </a>
                        </div>
                    </article>
                        )
                        )
                    )
                    }
                
        
            </section>
        </main>
    );
};

export default Photos
