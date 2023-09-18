<nav>
    <div class="logo_container">
        <img src="/assets/img/Nav/logo.png">
    </div>

    <ul class="dashboard_sidebar" DATI-NAV="nav">
        <li FOR-ITEM-LIST="ITEM_HOTEL"  dati-link="Hotels" dati-path="Hotels">Hotels
        <li ITEM-LIST="ITEM_HOTEL" style="display: none">
            <ul>
                <li dati-link="AddHotel" dati-path="Hotels &nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;Add">Add</li>

            </ul>
        </li>
        </li>


        <li FOR-ITEM-LIST="ITEM_DEVICE"  dati-link="Devices" dati-path="Devices">Devices
        <li ITEM-LIST="ITEM_DEVICE" style="display: none">
            <ul>
                <li dati-link="AddMark" dati-path="Devices &nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;Add Model"> Model</li>
                <li dati-link="AddPhone"  dati-path="Devices &nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;Add Phone"> Add Devices</li>
                <li dati-link="SWAP_DEVICE"  dati-path="Devices &nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;Swap Service"> SWAP Service</li>

            </ul>
        </li>
        </li>



        <li FOR-ITEM-LIST="ITEM_ACCESSORIES"  dati-link="Accessories" dati-path="Accessories" >Equipment
        <li ITEM-LIST="ITEM_ACCESSORIES" style="display: none">
            <ul>
                <li dati-link="AddProvider" dati-path="Accessories &nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;Add Provider"> Provider</li>
                <li dati-link="AddArticles" dati-path="Accessories &nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;Add Articles"> Add Articles</li>
                <li dati-link="SWAP_ACCESSORIES" dati-path="Accessories &nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;Swap Service"> SWAP Service</li>

            </ul>
        </li>
        </li>


        <li FOR-ITEM-LIST="ITEM_SIM" dati-link="SimsCard" dati-path="SIM Card" >SIM Card
        <li ITEM-LIST="ITEM_SIM" style="display: none">
            <ul>
                <li dati-link="AddOperator"  dati-path="SIM Card &nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;Add Operator"> Operator</li>
                <li dati-link="AddSims" dati-path="SIM Card &nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;Add Sims"> Add Sims</li>
                <li dati-link="SWAP_SIM" dati-path="SIM Card &nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;Swap Service"> SWAP Service</li>

            </ul>
        </li>
        </li>



        <li FOR-ITEM-LIST="ITEM_OFFERS"  dati-path="Offers">Offers
        <li ITEM-LIST="ITEM_OFFERS" style="display: none">
            <ul>
                <li dati-link="OfferOperator"  dati-path="Offers &nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;Offer Operator"> Offer Operator</li>
                <li dati-link="OfferHotel" dati-path="Offers &nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;Offer Hotel"> Offer Hotel</li>
            </ul>
        </li>
        </li>



    </ul>

    <div class="logout_container" onclick="SSAPI.destroy()">
        <div class="log_out">
            <i class="fas fa-sign-out-alt"></i>
            <p style="margin-left: 7px">Log Out</p>
        </div>

    </div>

</nav>