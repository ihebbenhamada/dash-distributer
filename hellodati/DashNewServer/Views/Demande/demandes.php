<div class="demandeContainer" DATI-PAGE="Demande">
    <div class="header_container">
        <div class="search_container"
             DATI-ID="searchBarDemande"
             DATI-COMPOSENT="searchBarDatatable"
             DATI-FOR="dataTable"
             DATI-ACTION="searchDemande"
             DATI-TITLE-SEARCH="Search Demandes"
             DATI-UPDATE="ListDemandesReceive"
             style="width: 100%">

            <div DATI-COMPOSENT="input" DATI-INPUT-TYPE="text" placeholder="Guest Name"></div>
            <div DATI-COMPOSENT="input" DATI-INPUT-TYPE="text" placeholder="Room Number"></div>

            <div DATI-COMPOSENT="input" DATI-INPUT-TYPE="select"></div>

            <div DATI-COMPOSENT="input" DATI-INPUT-TYPE="date"></div>

            <div DATI-COMPOSENT="input" DATI-INPUT-TYPE="date"></div>

        </div>
    </div>


    <table class="dataTableStyle"
           DATI-COMPOSENT="dataTable"
           DATI-LIST="demandeList_ui.demandes"
           DATI-ID="demandeList"
           DATI-UPDATE="ListDemandesReceive">
        <tr DATI-COMPOSENT="datatable_header">
            <th DATI-ATTR="room_number">ROOM NUMBER</th>
            <th DATI-ATTR="type">TYPE</th>
            <th DATI-ATTR="status">STATUS</th>
            <th DATI-ATTR="comment">COMMENT</th>
            <th DATI-ATTR="date">DATE</th>
            <th COLSPAN="3"> <!--DATI-COMPOSENT="pagination"
                DATI-ID="pagination_demandeList"
                DATI-NBR-ROW="50"
                DATI-UPDATE="ListDemandesReceive"
                DATI-TOTAL-PAGE="demandeList_ui.total"
                DATI-FOR="demandeList">-->
            </th>
        </tr>
        <tr DATI-COMPOSENT="datatable-icon-detail" DATI-LINK="DetailDemande"
            onclick="demandeList_ui.setSelected(this)"></tr>
        <tr DATI-COMPOSENT="datatable-btn-accept"></tr>
        <tr DATI-COMPOSENT="datatable-btn-reject"></tr>
    </table>
</div>