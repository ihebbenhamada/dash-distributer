<div class="main_container" DATI-PAGE="ListDevices">

    <div class="header_container">
        <div class="search_container"
             DATI-ID="searchBarDevice"
             DATI-COMPOSENT="searchBarDatatable"
             DATI-FOR="dataTable"
             DATI-ACTION="searchDevice"
             DATI-TITLE-SEARCH="FIND BY"
             DATI-UPDATE="DeviceListPageReady"
             style="width: 100%"
        >
            <div DATI-COMPOSENT="input"  DATI-ID="listDevices_filter_by" DATI-OPTION="deviceList_ui.filterBy" DATI-INPUT-TYPE="select"></div>
            <div DATI-COMPOSENT="input" DATI-ID="listdevices_search_byImei" DATI-INPUT-TYPE="text"
                 placeholder="IMEI"></div>
            <div DATI-COMPOSENT="input" DATI-ID="listdevices_search_bySim" DATI-INPUT-TYPE="text"
                 placeholder="Sim Number" style="display: none"></div>
            <div DATI-COMPOSENT="input"  DATI-ID="listDevice_byStatus" DATI-OPTION="deviceList_ui.options" DATI-INPUT-TYPE="select" style="display: none"></div>

        </div>

        <div class="btn_add_header" DATI-LINK="AddDevice" style="display: none">
            <img style="width: 30px; height: 30px" src="/assets/img/add_device.png">
            <div class="btn_text">
                <p>Add Device</p>
            </div>

        </div>
    </div>

    <table
            class="dataTableStyle"
            DATI-COMPOSENT="dataTable"
            DATI-LIST="deviceList_ui.devices"
            DATI-ID="deviceList"
            DATI-UPDATE="ListDevicesReceive"
            DATI-TD-STYLE="text-align:center"
    >
        <tr DATI-COMPOSENT="datatable_header">
            <th DATI-ATTR="imei" align="center">DEVICE IMEI</th>
            <th DATI-ATTR="sim_number" align="center">SIM NUMBER</th>
            <th DATI-ATTR="phone_description" align="center">PHONE DESCRIPTION</th>
            <th DATI-ATTR="linked" DATI-FN="deviceList_ui.getStatusName" align="center">STATUS</th>

            <th DATI-ATTR="id" DATI-FN="deviceList_ui.GET_HTML_TD" style="display: none"></th>
            <th DATI-ATTR="id" DATI-FN="deviceList_ui.GET_HTML_TD" style="display: none"></th>
            <th DATI-ATTR="id" DATI-FN="deviceList_ui.GET_HTML_Plus" style="display: none"></th>

            <!--<th DATI-ATTR="vext">VIRTUAL EXTENSION</th>
            <th DATI-ATTR="room_number">ROOM NUMBER</th>-->
            <th COLSPAN="3"
                DATI-COMPOSENT="pagination"
                DATI-ID="pagination_deviceList"
                DATI-NBR-ROW=""
                DATI-UPDATE="ListDevicesReceive"
                DATI-TOTAL-PAGE="deviceList_ui.total"
                DATI-FOR="deviceList"
                DATI-FN="iDevice.GET_ALL_DEVICES()">

            </th>
        </tr>

        <!--<tr DATI-COMPOSENT="datatable-icon-edit" DATI-LINK="EditDevice" onclick="deviceList_ui.setSelected(this)"></tr>-->
        <!--<tr DATI-COMPOSENT="datatable-icon-delete"></tr>-->
    </table>
</div>

<div class="popup_success_div" DATI-POPUP="sucess">
    <div class="popup_success_container">
        <div class="validate_modal">
            <img src="/assets/img/succes.png">
            <div>Successfully added !</div>
        </div>
    </div>
</div>

<div class="popup_success_div" DATI-POPUP="success-report">
    <div class="popup_success_container">
        <div class="validate_modal">
            <img src="/assets/img/succes.png">
            <div>Device Reported !</div>
        </div>
    </div>
</div>

<div class="popup_success_div" DATI-POPUP="sucess_update">
    <div class="popup_success_container">
        <div class="validate_modal">
            <img src="/assets/img/succes.png">
            <div>Successfully Updated !</div>
        </div>
    </div>
</div>

<div class="popup_success_div" DATI-POPUP="sucess_swaped">
    <div class="popup_success_container">
        <div class="validate_modal">
            <img src="/assets/img/succes.png">
            <div>Swaped Successfully !</div>
        </div>
    </div>
</div>

<div class="popup_success_div" DATI-POPUP="error">
    <div class="popup_success_container">
        <div class="echec_modal">
            <i style="color: #b51e00;font-size: 50px" class="fas fa-exclamation-circle"></i>
            <div DATI_ID="msg_error" style="width: 100px">Error !</div>
        </div>
    </div>
</div>

