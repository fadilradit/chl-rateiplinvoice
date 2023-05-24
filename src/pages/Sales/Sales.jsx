import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import "./Sales.css"
import { FaHouseUser, FaUserPlus } from 'react-icons/fa';

class Sales extends Component{


    render(){
        return(
            <main id='sales-container' >
                

                <section className='sales-group-card' >

                    <Link to="/newcustomer" className='card-link' >
                        <FaUserPlus size={100} color='#ffffff'/>
                        <h3>Pendaftaran</h3>
                    </Link>
                    <Link to="/unit" className='card-link' >
                        <FaHouseUser size={100} color='#ffffff'/>
                        <h3>Unit</h3>
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

export default Sales;