import React from 'react'
import './Profile.css';
import RecentItem from './RecentItem';

function Profile() {
    return (
        <div className='profile'>
            <div className="profile__topLeft">
                <img src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png"/>

                <div className="profile__topLeftDetails">
                    <h1>Chinedu</h1>
                    <h3>2 followers</h3>





                </div>




            </div>

            <div className="profile__topRight">
                <i className="fas fa-heart graybg"></i>
                <i className="fas fa-bell graybg"></i>
                <i className="fas fa-ellipsis-v"></i>

            </div>

            <div className="profile__menu">
                <h2 className="active" >Home</h2>
                <h2>About</h2>
                <h2>Schedule</h2>
                <h2>Videos</h2>
                <h2><i class="fas fa-arrow-up"></i></h2>
                <h2>Chat</h2>



            </div>

            <div className="profile__recent">

                <h2>Recent Broadcast</h2>
                <div className="profile__recentItems">


                    <RecentItem

                        url={'https://www.youtube.com/embed/OO_FhAEMB1c'}
                        title={'American Dragon Jake Long 15 Year Anniversary!'}


                        />


                    <RecentItem

                        url={'https://www.youtube.com/embed/65WLkN0jXU4'}
                        title={'FIFA 21 Gameplay (PS5 UHD) [4K60FPS]'}


                        />

                    <RecentItem

                        url={'https://www.youtube.com/embed/slUOkbI7rSs'}
                        title={'Forza Horizon 5 - TRAILER | 2020 | 4K FH5'}


                        />


                    <RecentItem

                        url={'https://www.youtube.com/embed/AtwgGc-An6U'}
                        title={'DADDYS HOME | God Of War - Part 1'}


                        />

                </div>


                <div className="profile__categories">


                    <h2>Chinedu's recently streamed Categories</h2>
                    <img src="https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/kronos/common/social-share/social-share-image.jpg" />
                    <h3>Call of Duty</h3>






                </div>




            </div>

            
        </div>
    )
}

export default Profile
