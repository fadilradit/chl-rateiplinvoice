import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { FaHouseUser, FaFileInvoiceDollar } from 'react-icons/fa';
import { AiOutlineFileAdd } from 'react-icons/ai';

import "./Invoice.css"

class Invoice extends Component{


    render(){
        return(
            <main id='sales-container' >
                

                <section className='sales-group-card' >

                    <Link to="/daftaripl" className='card-link' >
                        <AiOutlineFileAdd size={100} color='#ffffff'/>
                        <h3>Daftar</h3>
                    </Link>
                    <Link to="/unit" className='card-link' >
                        <FaFileInvoiceDollar size={90} color='#ffffff'/>
                        <h3>Buat Tagihan</h3>
                    </Link>
                    {/* <Link to="/newcustomer" className='card-link' >
                        <FaUserPlus size={100} color='#ffffff'/>
                        <h3>Pendaftaran</h3>
                    </Link>
                    <Link to="/newcustomer" className='card-link' >
                        <FaUserPlus size={100} color='#ffffff'/>
                        <h3>Pendaftaran</h3>
                    </Link> */}

                </section>
            </main>
        )
    }


}

export default Invoice;