<div DATI-PAGE="Devices" dati-display="inline-block" style="display:none" class="container_hotel_dati">
    <div style="display: flex;width: 100%;align-items: center;justify-content: space-between;height: 200px">
        <div class="line-chart">
            <div class="aspect-ratio">
                <canvas id="chart_device"></canvas>
            </div>
        </div>
        <div class="line-chart">
            <div class="aspect-ratio">
                <canvas id="graph_device"></canvas>
            </div>
        </div>
    </div>

    <div class="header_container">

        <div class="search_container"
             DATI-ID="searchBarListDevices"
             DATI-COMPOSENT="searchBarDatatable"
             DATI-FOR="dataTable"
             DATI-ACTION="searchDevices"
             DATI-TITLE-SEARCH="FIND BY"
             DATI-UPDATE="DeviceListPageReady">
            <div DATI-COMPOSENT="input" DATI-ID="listDevices_filter_by" DATI-OPTION="deviceList_ui.filterBy"
                 DATI-INPUT-TYPE="select"></div>


            <div DATI-COMPOSENT="input" DATI-ID="listDevices_search_byImei" DATI-INPUT-TYPE="text"
                 placeholder="IMEI"></div>


            <div DATI-COMPOSENT="input" DATI-ID="listDevices_search_byModel" DATI-INPUT-TYPE="select" DATI-OPTION="deviceList_ui.models"
                 placeholder="Model" style="display: none"></div>


            <div DATI-COMPOSENT="input" DATI-ID="listDevices_search_byBrand" DATI-INPUT-TYPE="select" DATI-OPTION="deviceList_ui.brands"
                 placeholder="Brand" style="display: none"></div>


        </div>

    </div>
    <table class="dataTableStyle"
           DATI-COMPOSENT="dataTable"
           DATI-LIST="deviceList_ui.devices"
           DATI-ID="deviceList"
           id="tableDevice"
           DATI-UPDATE="ListDevicesReceive"
           DATI-TD-STYLE="text-align:center"
    >


        <tr DATI-COMPOSENT="datatable_header">
            <th DATI-ATTR="inserted_at" align="center">DATE</th>
            <th DATI-ATTR="Feature.Model.Brand.name"  DATI-FN="deviceList_ui.GET_BRAND_HTML" align="center">BRAND</th>
            <th DATI-ATTR="Feature.Model.name" DATI-FN="deviceList_ui.GET_MODEL_HTML" align="center">MODEL</th>
            <th DATI-ATTR="imei" align="center">IMEI</th>
            <th DATI-ATTR="Hotel.id" DATI-FN="deviceList_ui.GET_STATUS" align="center">STATUS</th>
            <!--<th DATI-ATTR="id" DATI-FN="hotelList_ui.getCategory" align="center">CATEGORY</th>
            <th DATI-ATTR="id" DATI-FN="hotelList_ui.getbusinessManager" align="center">BUSINESS MANAGER</th>-->
            <th DATI-ATTR="id" DATI-FN="deviceList_ui.GET_HTML_Edit" DATI-ACTION="1" style="display: none"></th>
            <th DATI-ATTR="id" DATI-FN="deviceList_ui.GET_HTML_Delete" DATI-ACTION="1" style="display: none"></th>
            <th DATI-ATTR="id" DATI-FN="deviceList_ui.GET_HTML_Plus" DATI-ACTION="1" style="display: none"></th>
            <th colspan="3"
                DATI-COMPOSENT="pagination"
                DATI-ID="pagination_deviceList"
                DATI-NBR-ROW=""
                DATI-UPDATE="ListDevicesReceive"
                DATI-TOTAL-PAGE="deviceList_ui.total"
                DATI-FOR="deviceList"
                DATI-FN="iDevice.GET_ALL_DEVICES()">
            </th>


        </tr>


    </table>
    <div
            DATI-COMPOSENT="alerteContainer"
            DATI-ID="DeviceDeleteAlerte"
            DATI-UPDATE="showAlerteDeleteDevice"
            DATI-CANCEL="deviceList_ui.CANCEL_ALERTE()"
            DATI-VALIDATE="deviceList_ui.VALIDATE_ALERTE()"
            TYPE="1"
            CLASS-CSS="Suppression_modal"
    >
    </div>

    <div id="popup_detail_devices" class="overlay_pop" style="display: none">

        <div class="detail_modal">
            <div style="height: 100%;width: 100%;position: relative">

                    <span class="close_popup" onclick="deviceList_ui.CLOSE_POPUP()">x</span>

                <div class="body_detail_modal">
                    <div id="img_detail_device">
                        <img src="/assets/img/device.png">
                    </div>
                    <div id="info_device">
                        <dati-input class="dati-input-container" ID="detailDeviceImei" UPDATE="showDetailDevices"
                                    LABEL="IMEI"></dati-input>
                        <dati-input class="dati-input-container" ID="detailDeviceSerialNumber" UPDATE="showDetailDevices"
                                    LABEL="serial number"></dati-input>
                        <dati-input class="dati-input-container" ID="detailDeviceAffectedHotel" UPDATE="showDetailDevices"
                                    LABEL="Affected to"></dati-input>
                        <dati-input class="dati-input-container" ID="detailDeviceInsertedDate" UPDATE="showDetailDevices"
                                    LABEL="Inserted at"></dati-input>
                        <dati-input class="dati-input-container" ID="detailDeviceBrand" UPDATE="showDetailDevices"
                                    LABEL="Brand"></dati-input>
                        <dati-input class="dati-input-container" ID="detailDeviceModel" UPDATE="showDetailDevices"
                                    LABEL="Model"></dati-input>
                        <dati-input class="dati-input-container" ID="detailDeviceColor"  UPDATE="showDetailDevices"
                                     LABEL="Color"></dati-input>
                        <dati-input class="dati-input-container" ID="detailDeviceProvider" UPDATE="showDetailDevices"
                                    LABEL="Provider"></dati-input>
                        <dati-input class="dati-input-container" ID="detailDevicePrice" UPDATE="showDetailDevices"
                                    LABEL="BuyPrice"></dati-input>
                        <dati-input class="dati-input-container" ID="detailDeviceStatus" UPDATE="showDetailDevices"
                                    LABEL="Status"></dati-input>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

