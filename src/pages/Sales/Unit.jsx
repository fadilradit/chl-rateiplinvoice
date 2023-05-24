import React, {Component, useState} from "react";
import {
    FaArrowLeft
} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
import { Link } from "react-router-dom";

import './Unit.css'

const Unit = () => {
    const navigate = useNavigate()
    const [custId, setCustId] = useState("")



    const openModalHandler = (e) => {
        const modal = document.getElementById("profile-modal")
        modal.style.display = "flex"
        setCustId(e)
        // console.log(e);
        
        
      
      
      }
      
    const  closeModalHandler = () => {
        document.getElementById("profile-modal").style.display = "none"
        setCustId("")
      }
    

    console.log(custId);
    
        return(
            <main id="unit-main" >
                <div className="unit-container" >
                    <FaArrowLeft className='arrow-back' size={25} onClick={() => {navigate(`/sales`)}} />
                    <section className="search-group" >

                        <input type="search" placeholder="Cari No. Reservasi/Nama" className="search-box" />
                        <button className="search-button" onClick = {openModalHandler}  >Cari</button>

                    </section>

                    <section className="list-antrian" >
                        
                        
                    <table class="greyGridTable">
                        <thead>
                            <tr>
                            <th>No.</th>
                            <th>No. Reservasi/NUP</th>
                            <th>Nama</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr onClick={() => {openModalHandler("1")}} >
                                <td>1</td>
                                <td>123</td>
                                <td>asd</td>
                            </tr>
                            <tr onClick={() => {openModalHandler("2")}} >
                                <td>2</td>
                                <td>123</td>
                                <td>asd</td>
                            </tr>
                            <tr onClick={() => {openModalHandler("3")}} >
                                <td>3</td>
                                <td>123</td>
                                <td>asd</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>123</td>
                                <td>asd</td>
                            </tr>
                        </tbody>
                    </table>



                    {/* MODAL START */}


                    <div className = "profile-modal" id = "profile-modal" >
                <div className = "profile-modalContent" >
                  <h1>Pilih Unit Untuk {custId}</h1>
                  <div className = "profile-editForm" >
                    
                    <label>Cluster: </label>
                    <select >
                      <option>Mazenta 1</option>
                      <option>Mazenta 2</option>
                    </select>
                    <label>Unit: </label>
                    <select >
                      <option>001</option>
                      <option>002</option>
                    </select>
                    <div className = "form-button" > 
                    <button className = "profile-save btn "  >Simpan</button>
                    <button className = "profile-cancel  btn" id = "profile-cancel" onClick = {closeModalHandler}  >Batalkan</button>
                    </div>
                  </div>
                </div>
        
              </div>


                    {/* MODAL END */}



                    </section>
                </div>
            </main>
        )
    

}

export default Unit;