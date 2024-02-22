import React, { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const ImageSlider = () => {
  const url = `https://picsum.photos/v2/list?page=1&limit=3`;
  const [images, setImages] = useState([]); //fetches images
  const [currentImage, setCurrentImage] = useState(0);
  const [imgLoading, setImgLoading] = useState(false);
  const [error, setError] = useState(null);

  // handlers
  const leftBtnHandler = () => {
    currentImage == 0
      ? setCurrentImage(images.length - 1)
      : setCurrentImage((currentImage) => currentImage - 1);
  };
  const rightBtnHandler = () => {
    currentImage == images.length - 1
      ? setCurrentImage(0)
      : setCurrentImage((currentImage) => currentImage + 1);
  };

  useEffect(() => {
    async function fetchImages() {
      setImgLoading(true);
      let response = await fetch(url);
      let data = await response.json();
      setImages(data);
      setImgLoading(false);
    }
    fetchImages();
  }, [url]);
  return (
    <div className='slider_container relative w-[500px] m-2 h-[333px]'>
      {imgLoading ? (
        <div className='leading flex justify-center items-center absolute z-20 w-full h-full bg-slate-400 bg-opacity-65 text-4xl text-white font-bold'>
          Loading Image . . .
        </div>
      ) : null}
      <BsArrowLeftCircleFill
        onClick={() => leftBtnHandler()}
        className='absolute left-8 top-1/2 text-white text-3xl shadow-md shadow-gray-500 z-10 cursor-pointer'
      />
      <div className='images flex'>
        {images && images.length
          ? images.map((image, index) => {
              return (
                <img
                  className={`image current-image absolute ${
                    currentImage === index ? `block` : `hidden`
                  }`}
                  key={image.id}
                  src={image.download_url}
                  alt={image.url}
                  //   width='500'
                  //   height='333'
                />
              );
            })
          : null}
      </div>
      <BsArrowRightCircleFill
        onClick={() => rightBtnHandler()}
        className='absolute right-8 top-1/2 text-white text-3xl shadow-md shadow-gray-500 cursor-pointer'
      />
      <div className='indicators absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-1'>
        {images && images.length
          ? images.map((image, index) => {
              return (
                <button
                  key={image.id + "indicator"}
                  onClick={() => setCurrentImage(index)}
                  className={`bg-white rounded-full  w-3 h-3 shadow-md shadow-gray-700 ${
                    currentImage == index ? "relative bottom-1" : "bg-slate-500"
                  }`}></button>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default ImageSlider;
