<div class="main_container" DATI-PAGE="ListRooms">
    <div class="header_container">
        <div class="search_container"
             DATI-ID="searchBarRoomList"
             DATI-COMPOSENT="searchBarDatatable"
             DATI-FOR="dataTable"
             DATI-ACTION="searchRoom"
             DATI-TITLE-SEARCH="FIND BY"
             DATI-UPDATE="RoomListPageReady"
        >
            <div DATI-COMPOSENT="input"  DATI-ID="listRooms_filter_by" DATI-OPTION="roomList_ui.filterBy" DATI-INPUT-TYPE="select"></div>
            <div DATI-COMPOSENT="input" DATI-ID="listrooms_search_byroomnumber" DATI-INPUT-TYPE="text"
                 placeholder="Room Number" ></div>
            <div DATI-COMPOSENT="input" DATI-ID="listrooms_search_byguestname" DATI-INPUT-TYPE="text"
                 placeholder="Guest Name" style="display: none"></div>
            <div DATI-COMPOSENT="input"  DATI-ID="listRooms_byStatus" DATI-OPTION="roomList_ui.options" DATI-INPUT-TYPE="select" placeholder="Status" style="display: none"></div>


        </div>
        <div class="btn_add_header" DATI-LINK="AddRoom"  DATI-PATH="Front Office &nbsp&nbsp&nbsp > &nbsp&nbsp&nbsp Rooms &nbsp&nbsp&nbsp > &nbsp&nbsp&nbsp Add Form">
            <img style="width: 30px; height: 30px" src="assets/img/add_room.png">
            <div class="btn_text">
                <p>Add Room</p>
            </div>

        </div>
    </div>

    <table class="dataTableStyle"
           DATI-COMPOSENT="dataTable"
           DATI-LIST="roomList_ui.rooms"
           DATI-ID="roomList"
           DATI-UPDATE="ListRoomsReceive"
           DATI-TD-STYLE="text-align:center">

        <tr DATI-COMPOSENT="datatable_header">
            <th DATI-ATTR="id" DATI-FN="roomList_ui.getRoomNumber" align="center">ROOM NUMBER</th>

            <th DATI-ATTR="id" DATI-FN="roomList_ui.getGuestName" align="center">GUEST</th>

            <th DATI-ATTR="capacity" align="center">CAPACITY</th>
            <th DATI-ATTR="id" DATI-FN="roomList_ui.checkIn" align="center">CHECKIN</th>
            <th DATI-ATTR="id" DATI-FN="roomList_ui.checkOut" align="center">CHECKOUT</th>
            <th DATI-ATTR="Residence.id" DATI-FN="roomList_ui.getStatusRoom" align="center">STATUS</th>
            <th DATI-ATTR="id" DATI-FN="deviceList_ui.GET_HTML_TD"  style="display: none"></th>
            <th DATI-ATTR="id" DATI-FN="roomList_ui.GET_HTML_Edit" style="display: none"></th>
            <th DATI-ATTR="id" DATI-FN="roomList_ui.GET_HTML_Delete" style="display: none"></th>
            <th DATI-ATTR="id" DATI-FN="roomList_ui.GET_HTML_Plus" style="display: none"></th>
            <th COLSPAN="4"
                DATI-COMPOSENT="pagination"
                DATI-ID="pagination_roomList"
                DATI-NBR-ROW=""
                DATI-UPDATE="ListRoomsReceive"
                DATI-TOTAL-PAGE="roomList_ui.total"
                DATI-FOR="roomList"
                DATI-FN="iRoom.GET_ALL_ROOMS()">
            </th>
        </tr>

    </table>

    <div
            DATI-COMPOSENT="alerteContainer"
            DATI-ID="RoomDeleteAlerte"
            DATI-UPDATE="showAlerteDeleteRoom"
            DATI-CANCEL="roomList_ui.CANCEL_ALERTE()"
            DATI-VALIDATE="roomList_ui.VALIDATE_ALERTE()"
    >
    </div>


</div>
