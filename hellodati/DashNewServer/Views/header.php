<header>
    <div class="top_left">
        <div class="logo_container">

            <div class="hotel_selected" DATI-COMPOSENT="hotel_info">
                <div class="logo_header_div">
                    <img DATI-LOGO-HOTEL src="assets/img/header/logo.png" alt="logo" class="logo">
                </div>

                <div class="hotel_description_header_div">
                    <div class="hotel_name_header_div" dati-name-hotel></div>

                    <div class="stars_container">

                        <span style="color: #ffde66" DATI-STAR-HOTEL repeat>★</span>
                    </div>
                    <div class="EditProfilIcon">
                        <div dati-name-employee></div>
                    </div>
                </div>


                <div class="block_list_hotels" style="display: none">
                    <div class="block_list_hotels_content"
                         DATI-COMPOSENT="listHotelInfo"
                         DATI-LIST="hotelList_ui.hotels"
                         DATI-ID="hotelsList"
                         id="listHotels"
                         DATI-UPDATE="ListHotelsReceive">

                    </div>
                </div>

            </div>
        </div>
    </div>
    <div class="top_right">
        <div class="top">
        <div class="item_navigation">
        <div class="button_navigation">
            <div class="navigation_left" DATI-BACK-ARROW-NAVIGATION> </div>
            <div class="navigation_right" DATI-NEXT-ARROW-NAVIGATION> </div>
             </div>
            <div class="navigation" DATI-CURRENT-PATHNAME>DASHBOARD</div>
                   </div>
            <div style="cursor: pointer" class="profil_detail" DATI-ID="editProfileEmp" DATI-LINK="EditProfile">
                <div class="image_profil">
                    <img dati-img-profile-user src="/assets/img/profile.png" alt="logo" class="logo">
                </div>
                <div class="information_profil">
                    <span style="font-family:CLB" dati-name-employee></span>
                    <span style="font-size:13px;" dati-last-conx></span>
                </div>
            </div>
                 <div class="progress">
                     <div class="bar"></div>
                   </div>
        </div>


    </div>
</header>
