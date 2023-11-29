import React from 'react';
import "./About.css"
import Container from '../../../components/Container/Container';


const About = () => {
    return (
        <div id='about-part'>
            <Container>
                <div className="about-container flex flex-col lg:flex-row justify-between">
                    <div className="about-left">
                        <p className='lg:text-2xl md:text-2xl sm:text-1xl primaryFont secondaryTextColor ps-20'>Award Winner Logistic Company</p>

                        <h4 className='lg:text-4xl md:text-2xl sm:text-1xl font-bold primaryFont primaryTextColor mt-4'>World Best Secure Safe and <br /> Trusted Logistic Services <br /> Provider</h4>
                    </div>
                    <div className="about-right">
                        <p className='secondaryFont primaryTextColor font-noraml lg:text-xl md:text-2xl sm:text-xl'>Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit. Tenetur voluptatum expedita, <br /> facere consequuntur eius est minus natus sed <br /> error recusandae doloremque officia <br /> repudiandae vel laborum quos, deserunt, <br /> assumenda tempora labore!</p>
                    </div>
                </div>
            </Container>

            
        </div>
    );
};

export default About;