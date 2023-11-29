import React from 'react';
import "./Contact.css"
import Container from '../../../components/Container/Container';

const Contact = () => {
    return (
        <div id='contact-part'>
            <Container>
                <div className="contact-container grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-3">
                    <div className="contact-form bg-white h-[500px] rounded-lg">
                        <h1 className='lg:text-4xl md:text-2xl sm:text-1xl font-bold primaryFont primaryTextColor ps-6 py-10'>Request a Quote </h1>

                        <form action="" className='px-4'>
                            <input type="text" name="name" id="name" className='name primaryFont primaryTextColor mb-3' placeholder='Name...' />

                            <input type="number" name="phone" className='name primaryFont primaryTextColor mb-3' id="phone" placeholder='Phone...' />

                            <input type="email" name="email" className='name primaryFont primaryTextColor mb-3' id="email" placeholder='Email...' />

                            {/* <input type="text" name="choose" id="choose" className='name primaryFont primaryTextColor mb-3' placeholder='Choose Service Type..' 
                            
                            /> */}

                            <select className="name primaryFont primaryTextColor mb-3">
                                <option disabled selected>Choose Service Type...</option>
                                <option>Rail Cargo</option>
                                <option>Shipping Cargo</option>
                                <option>Road Fraight</option>
                             </select>

                             <button className='btn-submit'>Request for submit</button>
                        </form>

                    </div>
                    <div className="contact-details bg-orange-300 h-[400px]"></div>
                </div>
            </Container>
            
        </div>
    );
};

export default Contact;