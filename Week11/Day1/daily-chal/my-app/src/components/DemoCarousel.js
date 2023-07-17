import React from 'react';
// import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function DemoCarousel () {
        return (
        <div className="container">
            <Carousel autoPlay={true} interval={1500} infiniteLoop={true} stopOnHover={true}>
                <div>
                    <img src="hongkong.jpeg" alt='Hong Kong' />
                    <p className="legend">Hong Kong</p>
                </div>
                <div>
                    <img src="macao.webp" alt='Macao' />
                    <p className="legend">Macao</p>
                </div>
                <div>
                    <img src="japan.webp" alt='Japan' />
                    <p className="legend">Japan</p>
                </div>
                <div>
                    <img src="newyork.webp" alt='New York' />
                    <p className="legend">New York</p>
                </div>
            </Carousel>
        </div>
    );
};


  export default DemoCarousel;
  
//   ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));