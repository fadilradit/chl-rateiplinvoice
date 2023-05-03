import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import "./Invoice.css"

class Invoice extends Component{


    render(){
        return(
            <main id='invoice-container' >
                <Link className='link-button' to="/newcustomer" >Add New</Link>
            </main>
        )
    }


}

export default Invoice;