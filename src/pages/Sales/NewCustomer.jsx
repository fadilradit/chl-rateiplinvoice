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
            <FaArrowLeft className='arrow-back' size={25} onClick={() => {navigate("/sales")}} />
            <h1>Pendaftaran Customer Baru</h1>
            <h3>Identitas</h3>
            <div class="row">
                <div class="column">
                    <label for="name">No. Reservasi/ No. NUP: </label>
                    <input type="text" id="no-nup" placeholder="No. Reservasi/ No. NUP"/>
                </div>
                <div class="column">
                    <label for="unitcode">No. Customer: </label>
                    <input type="text" id="no-cusomer" placeholder="No. Customer"/>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <label for="project">Project: </label>
                    <select id='project' placeholder='Project' >
                        <option>--Select Project--</option>
                        <option>Mazenta</option>
                    </select>
                    
                </div>
                <div class="column">
                    <label for="sumber-data">Sumber Data: </label>
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
                    <label for="tipe-buyer">Tipe: </label>
                    <select id='tipe-buyer' placeholder='Tipe' >
                        <option>--Select Tipe--</option>
                        <option>Perorangan</option>
                        <option>Badan Hukum</option>
                    </select>
                    
                </div>

                <div class="column">
                    <label for="warga-negara">Kewarganegaraan: </label>
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
                    <label for="alamat">Alamat: </label>
                    <input type="text" id="alamat" placeholder="Alamat"/>
                </div>
            </div>

            <div class="row">
                <div class="column">
                    <label for="rt-rw">RT/RW: </label>
                    <input type="text" id="rt-rw" placeholder="RT/RW"/>
                </div>
                <div class="column">
                    <label for="kelurahan">Kelurahan: </label>
                    <input type="text" id="kelurahan" placeholder="Kelurahan"/>
                </div>
            </div>
            
            <div class="row">
                <div class="column">
                    <label for="kecamatan">Kecamatan: </label>
                    <input type="text" id="kecamatan" placeholder="Kecamatan"/>
                </div>
                <div class="column">
                    <label for="kota-kabupaten">Kotamadya/Kabupaten: </label>
                    <input type="text" id="kota-kabupaten" placeholder="Kotamadya/Kabupaten"/>
                </div>
            </div>
            
            <div class="row">
                <div class="column">
                    <label for="kode-pos">Kode Pos: </label>
                    <input type="number" id="kode-pos" placeholder="Kode Pos"/>
                </div>
            </div>
            
            <h3>Data Pribadi</h3>
            
            <div class="row">
                
                <div class="column">
                    <label for="agama">Agama: </label>
                    <select id='agama' placeholder='Agama' >
                        <option>--Select Agama--</option>
                        <option>Islam</option>
                        <option>Kristen</option>
                        <option>Katolik</option>
                        <option>Budha</option>
                        <option>Hindu</option>
                        <option>Konghucu</option>
                        <option>Lainnya</option>
                    </select>
                    
                </div>

                <div class="column">
                    <label for="status-pernikahan">Status:</label>
                    <select id='status-pernikahan' placeholder='Status' >
                        <option>--Status--</option>
                        <option>Menikah</option>
                        <option>Belum Menikah</option>
                        <option>Cerai</option>
                        <option>Lain - Lain</option>
                    </select>
                    
                </div>
            </div>

            <div class="row">
                <div class="column">
                    <label for="tempat-lahir">Tempat Lahir: </label>
                    <input type="text" id="tempat-lahir" placeholder="Tempat Lahir"/>
                </div>
                <div class="column">
                    <label for="tanggal-lahir">Tanggal Lahir:</label>
                    <input type="date" id="tanggal-lahir" placeholder="Tanggal Lahir"/>
                </div>
            </div>

            <h3>Data NPWP</h3>
            
            <div class="row">
                <div class="column" style={{flexDirection: "row", alignItems: "center", gap: "10px"}} >
                    
                    <input type = "checkbox"  style={{width: "20px"}} />
                    <label for="check-same">Sama Dengan KTP </label>
                </div>
                
            </div>

            <div class="row">
                <div class="column">
                    <label for="nama-npwp">Nama NPWP: </label>
                    <input type="text" id="nama-npwp" placeholder="Nama NPWP"/>
                </div>
                <div class="column">
                    <label for="npwp">NPWP: </label>
                    <input type="number" id="npwp" placeholder="NPWP"/>
                </div>
                
            </div>

            <div class="row">
                <div class="column">
                    <label for="alamat-npwp">Alamat NPWP: </label>
                    <input type="text" id="alamat-npwp" placeholder="Alamat NPWP"/>
                </div>
                <div class="column">
                    <label for="rt-rw-npwp">RT/RW: </label>
                    <input type="text" id="rt-rw-npwp" placeholder="RT/RW"/>
                </div>
                
            </div>
            
            <div class="row">
                <div class="column">
                    <label for="kelurahan-npwp">Kelurahan:</label>
                    <input type="text" id="kelurahan-npwp" placeholder="Kelurahan"/>
                </div>
                <div class="column">
                    <label for="kecamatan-npwp">Kecamatan: </label>
                    <input type="text" id="kecamatan-npwp" placeholder="Kecamatan"/>
                </div>
            </div>
            
            <div class="row">
                <div class="column">
                    <label for="kota-kabupaten-npwp">Kotamadya/Kabupaten:</label>
                    <input type="text" id="kota-kabupaten-npwp" placeholder="Kotamadya/Kabupaten"/>
                </div>
            </div>

            <h3>Kontak</h3>


            <div class="row">
                <div class="column">
                    <label for="no-telpon">No. Telepon: </label>
                    <input type="number" id="no-telpon" placeholder="No. Telepon"/>
                </div>
                <div class="column">
                    <label for="no-hp1">No. HP 1: </label>
                    <input type="number" id="no-hp1" placeholder="No. HP 1"/>
                </div>
                
            </div>
            <div class="row">
                <div class="column">
                    <label for="no-hp2">No. HP 2: </label>
                    <input type="number" id="no-hp2" placeholder="No. HP 2"/>
                </div>
                <div class="column">
                    <label for="no-fax">No. Fax: </label>
                    <input type="number" id="no-fax" placeholder="No. Fax"/>
                </div>
                
            </div>
            <div class="row">
                <div class="column">
                    <label for="email">Alamat Email: </label>
                    <input type="email" id="email" placeholder="Alamat Email"/>
                </div>
                
            </div>


            
            
            <button onClick={(e) => {e.preventDefault()}} >Submit</button>
        </form>

            
        </main>
    );
};

export default NewCustomer;