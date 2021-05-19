import React from 'react';
import Channel from './Channel';
import './Sidebar.css';

function SideBar() {
    return (
        <div className='sidebar'>


            <div className="sidebar__top">
            <h5>FOLLOWED CHANNELS</h5>
            <Channel avatar='https://static.highsnobiety.com/thumbor/Dlh0IXpfsroEYkPeg4h9FT0Sjyc=/1600x1067/static.highsnobiety.com/wp-content/uploads/2012/08/06171644/replacement-logos-01.jpg'
            name='chinedu'
            followers='100'/>
            <Channel avatar='https://cdn.mos.cms.futurecdn.net/fHBA4cnnUNMz7pet6GVpSe.jpg'
            name='rico_33'
            followers='4'/>
            
            <h5>RECOMMENDED CHANNELS</h5>
            <Channel avatar='https://variety.com/wp-content/uploads/2013/03/sony-logo.jpg?w=1024'
            name='rico_33'/>
            <p className='sidebar_topShowMore'>Show More</p>


            </div>


            <div className="sidebar__bottom">
                <div className="sidebar__bottomContainer">


                    <i className="fas fa-search"></i>
                    <input type="text" placeholder="Search to Add Friends" />




                </div>







            </div>
            


            
        </div>
    )
}

export default SideBar
