import React, {Component} from "react";

import './Dashboard.css'

import UserIcon from '../../Assets/User.png'
import Dollar from '../../Assets/Dollar.png'
import Unpaid from '../../Assets/Invoice.png'

class Dashboard extends Component{
    constructor(props) {
        super(props);
        this.state = {
            emailLogin: "",
            passwordLogin:""
        }
    }

    

    render(){
        return(
            <main id="dashboard-main" >
                
                <section className="card-group" >

                    <div className="card" >

                        <div className="icon-flag" >
                            <img src={UserIcon} />
                        </div>

                        <div className="info" >
                            <h2>Today's User:</h2>
                            <h3>90</h3>
                        </div>
                        

                    </div>
                    <div className="card" >

                        <div className="icon-flag unpaid" >
                            <img src={Unpaid} />
                        </div>

                        <div className="info" >
                            <h2>Unpaid:</h2>
                            <h3>37</h3>
                        </div>
                        

                    </div>
                    <div className="card" >

                        <div className="icon-flag paid" >
                            <img src={Dollar} />
                        </div>

                        <div className="info" >
                            <h2>Paid:</h2>
                            <h3>20</h3>
                        </div>
                        

                    </div>

                </section>

            </main>
        )
    }

}

export default Dashboard;