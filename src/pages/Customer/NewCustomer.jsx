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
            <h1>Pendaftaran Customer Baru</h1>
            <h3>Identitas</h3>
            <div class="row">
                <div class="column">
                    <label for="name">No. Reservasi/ No. NUP: </label>
                    <input type="text" id="no-nup" placeholder="No. Reservasi/ No. NUP"/>
                </div>
                <div class="column">
                    <label for="unitcode">No. Customer</label>
                    <input type="text" id="no-cusomer" placeholder="No. Customer"/>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <label for="project">Project</label>
                    <select id='project' placeholder='Project' >
                        <option>--Select Project--</option>
                        <option>Mazenta</option>
                    </select>
                    
                </div>
                <div class="column">
                    <label for="sumber-data">Sumber Data</label>
                    <select id='sumber-data' placeholder='Sumber Data' >
                        <option>--Sumber Data--</option>
                        <option>Walk In</option>
                        <option>Call In</option>
                        <option>Canvas</option>
                        <option>Buyer Get Buyer</option>
                        <option>Referensi</option>
                        <option>Pembeli Lama</option>
                        <option>eSales</option>
                        <option>Lainnya</option>
                    </select>
                    
                </div>
            </div>
            <div class="row">
                
                <div class="column">
                    <label for="tipe-buyer">Tipe</label>
                    <select id='tipe-buyer' placeholder='Tipe' >
                        <option>--Select Tipe--</option>
                        <option>Perorangan</option>
                        <option>Badan Hukum</option>
                    </select>
                    
                </div>

                <div class="column">
                    <label for="warga-negara">Kewarganegaraan</label>
                    <select id='warga-negara' placeholder='Kewarganegaraan' >
                        <option>--Kewarganegaraan--</option>
                        <option>WNI</option>
                        <option>WNA</option>
                    </select>
                    
                </div>
            </div>

            <div class="row">
                
                <div class="column">
                    <label for="nama">Nama: </label>
                    <input type="text" id="nama" placeholder="Nama"/>
                </div>
                
            </div>

            <h3>Kartu Identitas</h3>

            <div class="row">
                <div class="column">
                    <label for="no-identitas">No. Identitas: </label>
                    <input type="number" id="no-identitas" placeholder="No. Identitas"/>
                </div>
                <div class="column">
                    <label for="alamat">Alamat</label>
                    <input type="text" id="alamat" placeholder="Alamat"/>
                </div>
            </div>

            <div class="row">
                <div class="column">
                    <label for="rt-rw">RT/RW: </label>
                    <input type="text" id="rt-rw" placeholder="RT/RW"/>
                </div>
                <div class="column">
                    <label for="kelurahan">Kelurahan</label>
                    <input type="text" id="kelurahan" placeholder="Kelurahan"/>
                </div>
            </div>
            
            <div class="row">
                <div class="column">
                    <label for="kecamatan">Kecamatan: </label>
                    <input type="text" id="kecamatan" placeholder="Kecamatan"/>
                </div>
                <div class="column">
                    <label for="kota-kabupaten">Kotamadya/Kabupaten</label>
                    <input type="text" id="kota-kabupaten" placeholder="Kotamadya/Kabupaten"/>
                </div>
            </div>
            
            <div class="row">
                <div class="column">
                    <label for="kode-pos">Kode Pos: </label>
                    <input type="number" id="kode-pos" placeholder="Kode Pos"/>
                </div>
            </div>
            
            
            <button>Submit</button>
        </form>

            
        </main>
    );
};

export default NewCustomer;