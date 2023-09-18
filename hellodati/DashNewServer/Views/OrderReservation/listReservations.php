<div class="main_container" DATI-PAGE="ReservationPage">

    <div class="header_container">
        <div class="search_container"
             DATI-ID="searchBarReservation"
             DATI-COMPOSENT="searchBarDatatable"
             DATI-FOR="dataTable"
             DATI-ACTION="searchReservation"
             DATI-TITLE-SEARCH="FIND BY"
             DATI-UPDATE="ReservationListPageReady"
             style="width: 100%">
            <div DATI-COMPOSENT="input"  DATI-ID="listReservations_filter_by" DATI-OPTION="reservationList_ui.filterBy" DATI-INPUT-TYPE="select"></div>

            <div DATI-COMPOSENT="input" DATI-ID="listReservations_search_byroomnumber" DATI-INPUT-TYPE="text" placeholder="Room Number"></div>


            <div DATI-COMPOSENT="input" DATI-ID="listReservations_search_byguestname" DATI-INPUT-TYPE="text" placeholder="Guest Name" style="display: none"></div>

            <div DATI-COMPOSENT="input" DATI-OPTION="reservationList_ui.optionsStatus"  DATI-ID="listreservation_search_byStatus" DATI-INPUT-TYPE="select" style="display: none"></div>


            <div DATI-COMPOSENT="input" DATI-OPTION="reservationList_ui.optionsItems"  DATI-ID="listreservation_search_byItem" DATI-INPUT-TYPE="select" style="display: none"></div>


            <div style="display: none" DATI-COMPOSENT="input" DATI-INPUT-TYPE="date"></div>

            <div style="display: none" DATI-COMPOSENT="input" DATI-INPUT-TYPE="date"></div>

            <dati-datepicker DATI-ID="ReservationDateTimePicker"
                             DATI-UPDATE="ReservationDateTimePicker"
                             ENABLE="0"
                             SHOW="0"
                             SELECTED-DATE="reservationList_ui.selectedDate"
                             DATI-INPUT-TYPE="datiDatePicker"
                             DEFAULT-VALUE="oneMonth"
                             DATI_CHANGE="IReservation.GET_RESERVATION()"
                             style="float: right;">
            </dati-datepicker>

        </div>
    </div>

    <table class="dataTableStyle"
           DATI-COMPOSENT="dataTable"
           DATI-LIST="reservationList_ui.reservations"
           DATI-ID="reservationList"
           id="tableReservationList"
           DATI-UPDATE="ListReservationsReceive"
           DATI-TD-STYLE="text-align:center">

        <tr DATI-COMPOSENT="datatable_header">
            <th DATI-ATTR="id" DATI-FN="reservationList_ui.getDate" align="center">DATE</th>
            <th DATI-ATTR="id" DATI-FN="reservationList_ui.getGustName" align="center">GUEST</th>
            <th DATI-ATTR="id" DATI-FN="reservationList_ui.getRoomNumber" align="center">ROOM</th>
            <th DATI-ATTR="Service.title" reservationList_ui.ITEM_RESERVED align="center">ITEM RESERVED</th>
            <th DATI-ATTR="num_person" align="center">NUMBER OF PERSON</th>
            <th DATI-ATTR="id" DATI-FN="reservationList_ui.getStatutItem" align="center">STATUS</th>
            <th DATI-ATTR="id" DATI-FN="reservationList_ui.GET_ACCEPT_REJECT_VALIDATE_INVALIDATE" style="display: none" align="center"></th>
            <th colspan="2"
                DATI-COMPOSENT="pagination"
                DATI-ID="pagination_reservationList"
                DATI-NBR-ROW=""
                DATI-UPDATE="ListReservationsReceive"
                DATI-TOTAL-PAGE="reservationList_ui.total"
                DATI-FOR="reservationList"
                DATI-FN="IReservation.GET_ALL_RESERVATION()">
            </th>
        </tr>
    </table>


</div>