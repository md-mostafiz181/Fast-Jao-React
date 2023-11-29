import React from 'react';

const Container = ({children}) => {
    return (
        <section className='max-w-screen-xl mx-auto px-2'>
            {children}
            
        </section>
    );
};

export default Container;