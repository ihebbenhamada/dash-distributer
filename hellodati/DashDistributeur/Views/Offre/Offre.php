<div DATI-PAGE="Offers" dati-display="inline-block" style="display:none" class="container_hotel_dati">
    <div style="display: flex;width: 100%;align-items: center;justify-content: space-between;height: 200px">
        <div class="line-chart">
            <div class="aspect-ratio">
                <canvas id="chart_offre"></canvas>
            </div>
        </div>
        <div class="line-chart">
            <div class="aspect-ratio">
                <canvas id="graph_offre"></canvas>
            </div>
        </div>
    </div>

    <div class="header_container">

        <div class="search_container"
             DATI-ID="searchBarListOffre"
             DATI-COMPOSENT="searchBarDatatable"
             DATI-FOR="dataTable"
             DATI-ACTION="searchOffre"
             DATI-TITLE-SEARCH="FIND BY"
             DATI-UPDATE="OffreListPageReady">
            <div DATI-COMPOSENT="input" DATI-ID="listOffre_filter_by" DATI-OPTION="offreList_ui.filterBy"
                 DATI-INPUT-TYPE="select"></div>


            <div DATI-COMPOSENT="input" DATI-ID="listOffre_search_byName" DATI-INPUT-TYPE="text"
                 placeholder="Name"></div>


            <div DATI-COMPOSENT="input" DATI-ID="listOffre_search_byPrice" DATI-INPUT-TYPE="text"
                 placeholder="Price" style="display: none"></div>


            <div DATI-COMPOSENT="input" DATI-ID="listOffre_search_byHotel" DATI-INPUT-TYPE="text"
                 placeholder="Hotel" style="display: none"></div>


            <div DATI-COMPOSENT="input" DATI-ID="listOffre_search_byEquipedRoom" DATI-INPUT-TYPE="text"
                 placeholder="Equiped Room" style="display: none"></div>

            <div DATI-COMPOSENT="input" DATI-ID="listOffre_search_byStatus" DATI-INPUT-TYPE="text"
                 placeholder="Status" style="display: none"></div>

        </div>

    </div>
    <table class="dataTableStyle"
           DATI-COMPOSENT="dataTable"
           DATI-LIST="offreList_ui.offres"
           DATI-ID="OffreList"
           id="tableOffre"
           DATI-UPDATE="ListOffreReceive"
           DATI-TD-STYLE="text-align:center"
    >


        <tr DATI-COMPOSENT="datatable_header">
            <th DATI-ATTR="name" align="center">OFFRE</th>
            <th DATI-ATTR="price" align="center">PRICE</th>
            <th DATI-ATTR="hotel" align="center">HOTEL</th>
            <th DATI-ATTR="equiped_room"  align="center">EQUIPED ROOMS</th>
            <th DATI-ATTR="status" align="center">STATUS</th>
            <th DATI-ATTR="id" DATI-FN="offreList_ui.GET_HTML_Edit" DATI-ACTION="1" style="display: none"></th>
            <th DATI-ATTR="id" DATI-FN="offreList_ui.GET_HTML_Delete" DATI-ACTION="1" style="display: none"></th>
            <th DATI-ATTR="id" DATI-FN="offreList_ui.GET_HTML_Plus" DATI-ACTION="1" style="display: none"></th>
            <th colspan="3"
                DATI-COMPOSENT="pagination"
                DATI-ID="pagination_OffreList"
                DATI-NBR-ROW=""
                DATI-UPDATE="ListOffreReceive"
                DATI-TOTAL-PAGE="offreList_ui.total"
                DATI-FOR="OffreList"
                DATI-FN="iOffre.GET_ALL_OFFRES()">
            </th>


        </tr>


    </table>
    <div
            DATI-COMPOSENT="alerteContainer"
            DATI-ID="OffreDeleteAlerte"
            DATI-UPDATE="showAlerteDeleteOffre"
            DATI-CANCEL="offreList_ui.CANCEL_ALERTE()"
            DATI-VALIDATE="offreList_ui.VALIDATE_ALERTE()"
            TYPE="1"
            CLASS-CSS="Suppression_modal"
    >
    </div>

</div>

