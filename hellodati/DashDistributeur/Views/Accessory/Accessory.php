<div DATI-PAGE="Accessories" dati-display="inline-block" style="display:none" class="container_hotel_dati">
    <div style="display: flex;width: 100%;align-items: center;justify-content: space-between;height: 200px">
        <div class="line-chart">
            <div class="aspect-ratio">
                <canvas id="chart_accessory"></canvas>
            </div>
        </div>
        <div class="line-chart">
            <div class="aspect-ratio">
                <canvas id="graph_accessory"></canvas>
            </div>
        </div>
    </div>

    <div class="header_container">

        <div class="search_container"
             DATI-ID="searchBarListAccessory"
             DATI-COMPOSENT="searchBarDatatable"
             DATI-FOR="dataTable"
             DATI-ACTION="searchAccessory"
             DATI-TITLE-SEARCH="FIND BY"
             DATI-UPDATE="AccessoryListPageReady">
            <div DATI-COMPOSENT="input" DATI-ID="listAccessory_filter_by" DATI-OPTION="accessoryList_ui.filterBy"
                 DATI-INPUT-TYPE="select"></div>


            <div DATI-COMPOSENT="input" DATI-ID="listAccessory_search_byProvider" DATI-INPUT-TYPE="text"
                 placeholder="Provider"></div>


            <div DATI-COMPOSENT="input" DATI-ID="listAccessory_search_byReference" DATI-INPUT-TYPE="text"
                 placeholder="Reference" style="display: none"></div>


            <div DATI-COMPOSENT="input" DATI-ID="listAccessory_search_byName" DATI-INPUT-TYPE="text"
                 placeholder="Name" style="display: none"></div>

            <div DATI-COMPOSENT="input" DATI-ID="listAccessory_search_byWareHouse" DATI-INPUT-TYPE="text"
                 placeholder="WareHouse" style="display: none"></div>

<!--
            <div DATI-COMPOSENT="input" DATI-ID="listAccessory_search_byStock" DATI-INPUT-TYPE="text"
                 placeholder="Status Stock" style="display: none"></div>

            <div DATI-COMPOSENT="input" DATI-ID="listAccessory_search_byStatusStock" DATI-INPUT-TYPE="text"
                 placeholder="Stock" style="display: none"></div>-->

        </div>

    </div>
    <table class="dataTableStyle"
           DATI-COMPOSENT="dataTable"
           DATI-LIST="accessoryList_ui.accessories"
           DATI-ID="AccessoryList"
           id="tableAccessory"
           DATI-UPDATE="ListAccessoryReceive"
           DATI-TD-STYLE="text-align:center"
    >


        <tr DATI-COMPOSENT="datatable_header">
            <th DATI-ATTR="inserted_at" align="center">DATE</th>
            <th DATI-ATTR="Provider.name" align="center">PROVIDER</th>
            <th DATI-ATTR="reference" align="center">REFERENCE</th>
            <th DATI-ATTR="name"  align="center">NAME</th>
            <th DATI-ATTR="quantity" DATI-FN="accessoryList_ui.GET_STATUS"align="center">STATUS</th>
            <th DATI-ATTR="quantity" align="center">STOCK</th>
            <th DATI-ATTR="warehouse" align="center">WAREHOUSE</th>
            <th DATI-ATTR="id" DATI-FN="accessoryList_ui.GET_HTML_Edit" DATI-ACTION="1" style="display: none"></th>
            <th DATI-ATTR="id" DATI-FN="accessoryList_ui.GET_HTML_Delete" DATI-ACTION="1" style="display: none"></th>

            <th colspan="2"
                DATI-COMPOSENT="pagination"
                DATI-ID="pagination_AccessoryList"
                DATI-NBR-ROW=""
                DATI-UPDATE="ListAccessoryReceive"
                DATI-TOTAL-PAGE="accessoryList_ui.total"
                DATI-FOR="AccessoryList"
                DATI-FN="iAccessory.GET_ALL_ACCESSORIES()">
            </th>


        </tr>


    </table>
    <div
            DATI-COMPOSENT="alerteContainer"
            DATI-ID="AccessoryDeleteAlerte"
            DATI-UPDATE="showAlerteDeleteAccessory"
            DATI-CANCEL="accessoryList_ui.CANCEL_ALERTE()"
            DATI-VALIDATE="accessoryList_ui.VALIDATE_ALERTE()"
            TYPE="1"
            CLASS-CSS="Suppression_modal"
    >
    </div>

</div>

