import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import "../../index.css"

export default function Footer() {
    return (
        <MDBFooter className='text-center  fixed-bottom blue yellow-text h5 mb-0' >

            <section className='d-flex justify-content-between p-4 border-bottom'>
                <div className=''>&copy; Players Web - 2023</div>

                <div>
                    <a href='https://www.facebook.com/Prayersmx' className='me-4 text-reset 1'>
                        <MDBIcon fab icon="facebook-f" />
                    </a>
                    <a href='https://www.instagram.com/prayersmx/' className='me-4 text-reset 2'>
                        <MDBIcon fab icon="instagram" />
                    </a>
                    <a href='https://github.com/briandorantes1995/Prayers2.0' className='me-4 text-reset 3'>
                        <MDBIcon fab icon="github" />
                    </a>
                </div>
            </section>


        </MDBFooter>
    );
}
