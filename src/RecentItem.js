import React from 'react';
import './RecentItem.css';

const RecentItem = ({url, title}) => {
    return (
        <div className = "item" >

    <iframe 
    width="400" 
    height="235" 
    src={url} 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen></iframe>



    <div className="item__details">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKlzd_cB_-ImUrFdjf2BQbwsUD5NaoH8jYqA&usqp=CAU"/>
        <div className="item__detailsText">
            <h4>{title}</h4>
            <p>Chinedu</p>
            <p>Science and Tech</p>






        </div>





    </div>


            
        </div>
    )
}

export default RecentItem
