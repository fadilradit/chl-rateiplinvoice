import React, {useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList,
    FaFileInvoice
}from "react-icons/fa";
import Swal from "sweetalert2";


import {BsGraphUp} from "react-icons/bs"
import {BiLogOut} from "react-icons/bi"

import { NavLink } from 'react-router-dom';

import logoPict from '../Assets/CHL-Logo.png'
import {useNavigate} from 'react-router-dom'


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const navigate = useNavigate()

    

    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/sales",
            name:"Estate",
            icon:<BsGraphUp/>
        },
        {
            path:"/invoice",
            name:"IPL Rate",
            icon:<FaFileInvoice/>
        },
        // {
        //     path:"/comment",
        //     name:"Comment",
        //     icon:<FaCommentAlt/>
        // },
        // {
        //     path:"/product",
        //     name:"Product",
        //     icon:<FaShoppingBag/>
        // },
        // {
        //     path:"/productList",
        //     name:"Product List",
        //     icon:<FaThList/>
        // }
    ]

    const redirectHandler = () =>{
        

        return new Promise((resolve, reject) => {
            navigate("/")
            const error = false
      if(!error) {
        resolve()
      }else{
        reject()
      }
         })
    }

    const removeToken = () => {

         return new Promise((resolve, reject) => {
            localStorage.removeItem("TokenCHL")
            const error = false
      if(!error) {
        resolve()
      }else{
        reject()
      }
         })
        
   }


    const logout = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to logout?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes!'
          }).then((result) => {
            if (result.isConfirmed) {
             removeToken()
             .then(redirectHandler().then(window.location.reload()))
             .catch(error => console.log(error))
                
            }
          })
        
    }



    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <img src={logoPict} style={{display: isOpen ? "block" : "none"}} className="logo"/>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               <div className='nav-group' >

                    <div className='navlink-group' >
                    {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                    ))
                    }
                    </div>

                    <div onClick={logout} className="link logout" activeclassName="active">
                            <div className="icon"><BiLogOut/></div>
                           <div  className="link_text"style={{display: isOpen ? "block" : "none"}}>Logout</div>
                    </div>

               </div>
               {/* {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               } */}
                        {/* <div className="link logout" activeclassName="active">
                            <div className="icon">icon</div>
                           <div  className="link_text">Logout</div>
                        </div> */}
                          
                       
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;