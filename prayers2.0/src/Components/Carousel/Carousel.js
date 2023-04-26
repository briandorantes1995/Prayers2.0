import React from 'react';
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';
import "./Carousel.css"

export default function App() {
    return (
        <MDBCarousel showIndicators showControls fade className='carousel-wrapper'>
            <MDBCarouselItem
                className='d-block carousel-img first'
                itemId={1}
                src='https://i.imgur.com/kYOi2rs.jpg'
                alt='...'
            >
            </MDBCarouselItem>

            <MDBCarouselItem
                className='d-block carousel-img second'
                itemId={2}
                src='https://i.imgur.com/jKWkqQs.jpg'
                alt='...'
            >
            </MDBCarouselItem>

            <MDBCarouselItem
                className='d-block carousel-img  object-center'
                itemId={3}
                src='https://i.imgur.com/hCZBPHn.png?1'
                alt='...'
            >
            </MDBCarouselItem>
            <MDBCarouselItem
                className=' d-block carousel-img fourth'
                itemId={4}
                src='https://i.imgur.com/lFQYTGB.jpg'
                alt='...'
            >
            </MDBCarouselItem>
        </MDBCarousel>
    );
}
