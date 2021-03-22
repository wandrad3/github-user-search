import React from 'react'
import Button from '../../core/components/Button'
import Navbar from '../../core/components/Navbar'
import './styles.scss'
const Search = () => {

    return (
        <>
            <Navbar />
            <div className="search-container">
                    <h1 className="search-text-title">Encontre um perfil Github</h1>
                    <input className="form-control input-search " type="text"/>
                    <Button text="Encontrar"/>

            </div>
            <div className="user-search-container">
                
            </div>

        </>
    );
}

export default Search;