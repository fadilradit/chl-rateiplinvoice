import React from 'react';
import {
    FaArrowLeft
} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'

import './NewCustomer.css'

const NewCustomer = () => {

    const navigate = useNavigate()

    return (
        <main id='newcustomer-container' >

            {/* <FaArrowLeft className='arrow-back' size={25} onClick={() => {navigate("/customer")}} />
            <h1>Add New Customer</h1> */}


            <form>
            <FaArrowLeft className='arrow-back' size={25} onClick={() => {navigate("/customer")}} />
            <h1>Add New Customer</h1>
            <div class="row">
                <div class="column">
                    <label for="name">Nama</label>
                    <input type="text" id="name" placeholder="nama"/>
                </div>
                <div class="column">
                    <label for="unitcode">Unit Code</label>
                    <input type="text" id="unitcode" placeholder="Unit Code here"/>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <label for="cluster">Cluster</label>
                    <select id='cluster' placeholder='Cluster' >
                        <option>--Select Cluster--</option>
                        <option>Ambara</option>
                        <option>Lenggana</option>
                        <option>Ruko</option>
                        <option>Kavling</option>
                    </select>
                    
                </div>
                <div class="column">
                    <label for="buildtype">Tipe Bangunan</label>
                    <select id='buildtype' placeholder='Building Type' >
                        <option>--Select Type--</option>
                        <option>Type 6</option>
                        <option>Type 7</option>
                        <option>Kavling</option>
                        <option>Ruko</option>
                    </select>
                    
                </div>
            </div>
            <div class="row">
                
                <div class="column">
                    <label for="LT">Luas Tanah</label>
                    <input type="number" id="lt" placeholder="Luas Tanah"/>
                </div>

                <div class="column">
                    <label for="LB">Luas Bangunan</label>
                    <input type="number" id="lb" placeholder="Luas Bangunan"/>
                </div>
            </div>
            
            
            <button>Submit</button>
        </form>

            {/* <form className='form-container' >

                <label>Name: <input/></label>
                <label>Name: <input/></label>
                <label>Name: <input/></label>

            </form> */}
        </main>
    );
};

export default NewCustomer;