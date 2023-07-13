import React from 'react';
import './testimonial-2.css'
import profile from '../../../assets/jorge.webp'
import quote from '../../../assets/quote.svg'

const TestimonialB  = () => {
    return (
        <div className="testimonial-container">
            <div className="text-container">
                <img src={quote} alt="quote"/>
                <p>
                En nuestro estudio jurídico, nos enorgullece ofrecer una representación legal excepcional, buscando la justicia y protegiendo los derechos de nuestros clientes con pasión y experiencia.
                </p>

                <img className="profile-pic" src={profile} alt="Profile"/>
            </div>
            <p className="name" >Dr. Jorge Cancio</p>
            <p className="position">Universidad de Buenos Aires</p>
            <p className="position">Abogado Penalista</p>
            <p className="position">Especilista en Criminologia</p>
        </div>
     );
}

export default TestimonialB;