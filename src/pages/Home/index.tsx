import React from 'react'
import Button from '../../core/components/Button'
import Navbar from '../../core/components/Navbar'
import { Link } from "react-router-dom";
import './styles.scss'

const Home = () => {

    return (
        <>
            <Navbar />
            <div className="home-content">
                <h1 className="text-title" >Desafio do Capítulo 3, Bootcamp DevSuperior</h1>
                <p className="text-subtitle">Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior. <br />
             Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto. <br />
             Este design foi adaptado a partir de Ant Design System for Figma,
             de Mateusz Wierzbicki: <b className="text-subtitle-mail">antforfigma@gmail.com</b></p>



            </div>
            <div className="btn-home">
               <Link to="/search"><Button text="Começar" /></Link> 
            </div>




        </>
    );
}

export default Home;