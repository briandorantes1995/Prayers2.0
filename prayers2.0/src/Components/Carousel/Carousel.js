import React from 'react';
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function App() {
    return (
        <MDBCarousel showIndicators showControls fade>
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={1}
                src='https://i.imgur.com/kYOi2rs.jpg'
                alt='...'
            >
            </MDBCarouselItem>

            <MDBCarouselItem
                className='w-100 d-block'
                itemId={2}
                src='https://i.imgur.com/jKWkqQs.jpg'
                alt='...'
            >
            </MDBCarouselItem>

            <MDBCarouselItem
                className='w-100 d-block'
                itemId={3}
                src='https://i.imgur.com/hCZBPHn.png?1'
                alt='...'
            >
            </MDBCarouselItem>
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={4}
                src='https://i.imgur.com/lFQYTGB.jpg'
                alt='...'
            >
            </MDBCarouselItem>
        </MDBCarousel>
    );
}