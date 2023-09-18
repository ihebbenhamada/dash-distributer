<div class="main_container" DATI-PAGE="ListGuests">
    <div class="header_container">

        <div class="search_container"
             DATI-ID="searchBarGuestList"
             DATI-COMPOSENT="searchBarDatatable"
             DATI-FOR="dataTable"
             DATI-ACTION="searchGuest"
             DATI-TITLE-SEARCH="FIND BY"
             DATI-UPDATE="GuestListPageReady">
            <div DATI-COMPOSENT="input"  DATI-ID="listGuests_filter_by" DATI-OPTION="guestList_ui.filterBy" DATI-INPUT-TYPE="select"></div>
            <div DATI-COMPOSENT="input" DATI-ID="listguests_search_byname" DATI-INPUT-TYPE="text"
                 placeholder="Guest Name"></div>
            <div DATI-COMPOSENT="input" DATI-ID="listguests_search_byroom" DATI-INPUT-TYPE="text"
                 placeholder="Room Number" style="display: none"></div>

        </div>

        <div class="btn_add_header" DATI-LINK="AddGuest" DATI-PATH="Front Office &nbsp&nbsp&nbsp > &nbsp&nbsp&nbsp Guests &nbsp&nbsp&nbsp > &nbsp&nbsp&nbsp Add Form">
            <img style="width: 30px; height: 30px" src="/assets/img/add_employee.png">
            <div class="btn_text">
                <p>Add Guest</p>
            </div>

        </div>

    </div>


    <table class="dataTableStyle"
           DATI-COMPOSENT="dataTable"
           DATI-LIST="guestList_ui.guests"
           DATI-ID="guestList"
           id="tableGuest"
           DATI-UPDATE="ListGuestsReceive"
           DATI-TD-STYLE="text-align:center"
    >


        <tr DATI-COMPOSENT="datatable_header">
            <th DATI-ATTR="id" align="center" DATI-FN="guestList_ui.getGuestName">GUEST NAME</th>
            <th DATI-ATTR="id" DATI-FN="guestList_ui.getRoomNumber" align="center">ROOM NUMBER</th>
            <th DATI-ATTR="prefix" align="center">SHORT NUMBER</th>
            <th DATI-ATTR="Residence.arrival_date" DATI-FN="roomList_ui.getAttribute" align="center">CHECK IN</th>
            <th DATI-ATTR="Residence.departure_date" DATI-FN="roomList_ui.getAttribute" align="center">CHECK OUT</th>
            <th DATI-ATTR="id" DATI-FN="deviceList_ui.GET_HTML_TD" style="display: none"></th>
            <th DATI-ATTR="id" DATI-FN="guestList_ui.GET_HTML_Edit" style="display: none"></th>
            <th DATI-ATTR="id" DATI-FN="guestList_ui.GET_HTML_Delete" style="display: none"></th>
            <th DATI-ATTR="id" DATI-FN="guestList_ui.GET_HTML_Plus" style="display: none"></th>
            <th colspan="4"
                DATI-COMPOSENT="pagination"
                   DATI-ID="pagination_guestList"
                   DATI-NBR-ROW=""
                   DATI-UPDATE="ListGuestsReceive"
                   DATI-TOTAL-PAGE="guestList_ui.total"
                   DATI-FOR="guestList"
                   DATI-FN="iGuest.GET_ALL_GUESTS()">
            </th>


        </tr>


    </table>

    <div
            DATI-COMPOSENT="alerteContainer"
            DATI-ID="GuestDeleteAlerte"
            DATI-UPDATE="showAlerteDeleteGuest"
            DATI-CANCEL="guestList_ui.CANCEL_ALERTE()"
            DATI-VALIDATE="guestList_ui.VALIDATE_ALERTE()"
    >
    </div>



</div>