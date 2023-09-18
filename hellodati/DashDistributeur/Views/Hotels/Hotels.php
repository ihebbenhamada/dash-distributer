<div DATI-PAGE="Hotels" dati-display="inline-block" style="display:none" class="container_hotel_dati">
    <div style="display: flex;width: 100%;align-items: center;justify-content: space-between;height: 200px">
        <div class="line-chart">
            <div class="aspect-ratio">
                <canvas id="chart_hotel"></canvas>
            </div>
        </div>
        <div class="line-chart">
            <div class="aspect-ratio">
                <canvas id="graph_hotel"></canvas>
            </div>
        </div>
    </div>

    <div class="header_container">

        <div class="search_container"
             DATI-ID="searchBarListHotels"
             DATI-COMPOSENT="searchBarDatatable"
             DATI-FOR="dataTable"
             DATI-ACTION="searchHotels"
             DATI-TITLE-SEARCH="FIND BY"
             DATI-UPDATE="HotelListPageReady">
            <div DATI-COMPOSENT="input" DATI-ID="listHotels_filter_by" DATI-OPTION="hotelList_ui.filterBy"
                 DATI-INPUT-TYPE="select"></div>
            <div DATI-COMPOSENT="input" DATI-ID="listHotels_search_byname" DATI-INPUT-TYPE="text"
                 placeholder="Hotel Name"></div>
            <div DATI-COMPOSENT="input" DATI-ID="listHotels_search_byreference" DATI-INPUT-TYPE="text"
                 placeholder="Reference"></div>
            <div DATI-COMPOSENT="input" DATI-ID="listhotels_search_bycategory" DATI-OPTION="hotelList_ui.stars" DATI-INPUT-TYPE="select"></div>

        </div>

    </div>
    <table  class="dataTableStyle"
           DATI-COMPOSENT="dataTable"
           DATI-LIST="hotelList_ui.hotels"
           DATI-ID="hotelList"
           id="tableHotel"
           DATI-UPDATE="ListHotelsReceive"
           DATI-TD-STYLE="text-align:center"
    >


        <tr DATI-COMPOSENT="datatable_header">
            <th DATI-ATTR="inserted_at" align="center">DATE</th>
            <th DATI-ATTR="name" align="center">HOTEL</th>
            <th DATI-ATTR="capacity" align="center">CAPACITY</th>
            <th DATI-ATTR="stars" DATI-FN="hotelList_ui.getStars" align="center">CATEGORY</th>
            <th DATI-ATTR="BusinessManager.name" align="center">BUSINESS MANAGER</th>
            <!--<th DATI-ATTR="id" DATI-FN="hotelList_ui.getCategory" align="center">CATEGORY</th>
            <th DATI-ATTR="id" DATI-FN="hotelList_ui.getbusinessManager" align="center">BUSINESS MANAGER</th>-->
            <th DATI-ATTR="id" DATI-FN="hotelList_ui.GET_HTML_Edit" DATI-ACTION="1" style="display: none"></th>
            <th DATI-ATTR="id" DATI-FN="hotelList_ui.GET_HTML_Delete" DATI-ACTION="1" style="display: none"></th>
            <th DATI-ATTR="id" DATI-FN="hotelList_ui.GET_HTML_Plus" DATI-ACTION="1" style="display: none"></th>
            <th colspan="3"
                DATI-COMPOSENT="pagination"
                DATI-ID="pagination_hotelList"
                DATI-NBR-ROW=""
                DATI-UPDATE="ListHotelsReceive"
                DATI-TOTAL-PAGE="hotelList_ui.total"
                DATI-FOR="hotelList"
                DATI-FN="iHotel.GET_ALL_HOTELS()">
            </th>


        </tr>


    </table>
    <div
            DATI-COMPOSENT="alerteContainer"
            DATI-ID="HotelDeleteAlerte"
            DATI-UPDATE="showAlerteDeleteHotel"
            DATI-CANCEL="hotelList_ui.CANCEL_ALERTE()"
            DATI-VALIDATE="hotelList_ui.VALIDATE_ALERTE()"
            TYPE="1"
            CLASS-CSS="Suppression_modal"
    >
    </div>



</div>

