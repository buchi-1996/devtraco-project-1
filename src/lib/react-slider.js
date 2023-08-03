const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        onClick={onClick}
      >
        <svg
        className={`${className} w-12 h-12`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33 64"
          fill="none"
          >
          <path d="M8.80844 52.0809C8.0984 51.3708 8.03385 50.2597 8.61479 49.4768L8.80844 49.2525L26.06 32L8.80844 14.7475C8.0984 14.0375 8.03385 12.9264 8.61479 12.1434L8.80844 11.9191C9.51849 11.2091 10.6296 11.1445 11.4126 11.7255L11.6369 11.9191L30.3035 30.5858C31.0136 31.2958 31.0781 32.4069 30.4972 33.1899L30.3035 33.4142L11.6369 52.0809C10.8558 52.8619 9.58949 52.8619 8.80844 52.0809Z" fill="white"/>
        </svg>
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { onClick, className } = props;
    return (
      <div
        onClick={onClick}
      >
        <svg
        className={`${className} w-12 h-12`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33 64"
          fill="none"
        >
          <path
            d="M26.7472 11.9191C27.4573 12.6292 27.5218 13.7403 26.9409 14.5232L26.7472 14.7475L9.49567 32L26.7472 49.2524C27.4573 49.9625 27.5218 51.0736 26.9409 51.8566L26.7472 52.0809C26.0372 52.7909 24.9261 52.8555 24.1431 52.2745L23.9188 52.0809L5.25213 33.4142C4.54208 32.7042 4.47753 31.5931 5.05848 30.8101L5.25213 30.5858L23.9188 11.9191C24.6998 11.1381 25.9662 11.1381 26.7472 11.9191Z"
            fill="white"
          />
        </svg>
      </div>
    );
  }


  export default settings;