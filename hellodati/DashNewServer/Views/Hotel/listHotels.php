<div class="main_container" DATI-PAGE="ListHotels">
    <div class="header_container">
        <div class="search_container"
             DATI-ID="searchBarHotel"
             DATI-COMPOSENT="searchBarDatatable"
             DATI-FOR="dataTable"
             DATI-ACTION="searchHotel"
             DATI-TITLE-SEARCH="Search Hotel"
             DATI-UPDATE="ListHotelsReceive">

            <div DATI-COMPOSENT="input" DATI-INPUT-TYPE="text" placeholder="Guest Name"></div>
            <div DATI-COMPOSENT="input" DATI-INPUT-TYPE="text" placeholder="Room Number"></div>

        </div>
    </div>

    <table class="dataTableStyle">
        <tr>
            <th>DATE</th>
            <th>STATUS</th>
            <th>DEVICE IMEI</th>
            <th>VIRTUAL EXTENSION</th>
            <th>ROOM NUMBER</th>
            <th COLSPAN="3" style="text-align: right">1-10 OF 300 < ></th>
        </tr>


    </table>
</div>