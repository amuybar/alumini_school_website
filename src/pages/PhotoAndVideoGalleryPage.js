import React from 'react';
import PhotoGallery from '../components/PhotoGallery';
import VideoGallery from '../components/VideoGallery';

const PhotoAndVideoGalleryPage = () => {
  return (
    <div className='page-container'>
      <h1>Photo and Video Gallery</h1>
      <PhotoGallery />
      <VideoGallery />
    </div>
  );
};

export default PhotoAndVideoGalleryPage;
