import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import "./Customer.css"

class Customer extends Component{


    render(){
        return(
            <main id='customer-container' >
                <Link className='link-button' to="/newcustomer" >Add New</Link>
            </main>
        )
    }


}

export default Customer;