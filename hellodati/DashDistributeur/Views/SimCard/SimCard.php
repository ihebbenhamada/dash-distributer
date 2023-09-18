<div DATI-PAGE="SimsCard" dati-display="inline-block" style="display:none" class="container_hotel_dati">
    <div style="display: flex;width: 100%;align-items: center;justify-content: space-between;height: 200px">
        <div class="line-chart">
            <div class="aspect-ratio">
                <canvas id="chart_sim_card"></canvas>
            </div>
        </div>
        <div class="line-chart">
            <div class="aspect-ratio">
                <canvas id="graph_sim_card"></canvas>
            </div>
        </div>
    </div>

    <div class="header_container">

        <div class="search_container"
             DATI-ID="searchBarListSimCard"
             DATI-COMPOSENT="searchBarDatatable"
             DATI-FOR="dataTable"
             DATI-ACTION="searchSimCard"
             DATI-TITLE-SEARCH="FIND BY"
             DATI-UPDATE="SimCardListPageReady">
            <div DATI-COMPOSENT="input" DATI-ID="listSimCard_filter_by" DATI-OPTION="simCardList_ui.filterBy"
                 DATI-INPUT-TYPE="select"></div>


            <div DATI-COMPOSENT="input" DATI-ID="listSimCard_search_byNumber" DATI-INPUT-TYPE="text"
                 placeholder="Number"></div>


            <div DATI-COMPOSENT="input" DATI-ID="listSimCard_search_byOperator" DATI-INPUT-TYPE="text"
                 placeholder="Operator" style="display: none"></div>

<!--
            <div DATI-COMPOSENT="input" DATI-ID="listSimCard_search_byICCID" DATI-INPUT-TYPE="text"
                 placeholder="ICCID" style="display: none"></div>


            <div DATI-COMPOSENT="input" DATI-ID="listSimCard_search_byOffre" DATI-INPUT-TYPE="text"
                 placeholder="Offre" style="display: none"></div>

            <div DATI-COMPOSENT="input" DATI-ID="listSimCard_search_byStatus" DATI-INPUT-TYPE="text"
                 placeholder="Status" style="display: none"></div>-->

        </div>

    </div>
    <table class="dataTableStyle"
           DATI-COMPOSENT="dataTable"
           DATI-LIST="simCardList_ui.simCards"
           DATI-ID="SimCardList"
           id="tableSimCard"
           DATI-UPDATE="ListSimCardReceive"
           DATI-TD-STYLE="text-align:center"
    >


        <tr DATI-COMPOSENT="datatable_header">
            <th DATI-ATTR="inserted_at" align="center">DATE</th>
            <th DATI-ATTR="Operator.name" align="center">OPERATOR</th>
            <th DATI-ATTR="sim_number" align="center">NUMBER</th>
            <th DATI-ATTR="iccid"  align="center">ICCD</th>
            <th DATI-ATTR="Offer.name" align="center">OFFRE</th>
            <th DATI-ATTR="status" DATI-FN="simCardList_ui.GET_SIM_STATUS" align="center">STATUS</th>
            <th DATI-ATTR="id" DATI-FN="simCardList_ui.GET_HTML_Edit" DATI-ACTION="1" style="display: none"></th>
            <th DATI-ATTR="id" DATI-FN="simCardList_ui.GET_HTML_Delete" DATI-ACTION="1" style="display: none"></th>
            <!--<th DATI-ATTR="id" DATI-FN="simCardList_ui.GET_HTML_Plus" DATI-ACTION="1" style="display: none"></th>-->
            <th colspan="2"
                DATI-COMPOSENT="pagination"
                DATI-ID="pagination_SimCardList"
                DATI-NBR-ROW=""
                DATI-UPDATE="ListSimCardReceive"
                DATI-TOTAL-PAGE="simCardList_ui.total"
                DATI-FOR="SimCardList"
                DATI-FN="iSimCard.GET_ALL_SIM_CARDS()">
            </th>


        </tr>


    </table>
    <div
            DATI-COMPOSENT="alerteContainer"
            DATI-ID="SimCardDeleteAlerte"
            DATI-UPDATE="showAlerteDeleteSimCard"
            DATI-CANCEL="simCardList_ui.CANCEL_ALERTE()"
            DATI-VALIDATE="simCardList_ui.VALIDATE_ALERTE()"
            TYPE="1"
            CLASS-CSS="Suppression_modal"
    >
    </div>

</div>

