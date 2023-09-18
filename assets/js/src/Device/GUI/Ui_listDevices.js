class Ui_listDevices {
    constructor() {
        this.total = 0;
        this.nbrRows = 10;
        this.totalS = 0;
        this.nbrRowsS = 10;
        this.selectedDevice = null;
        this.lastSearchBy = "";
        $("[DATI-ID=pagination_deviceList]").attr("DATI-NBR-ROW", this.nbrRows);
        this.filterBy = {
            "IMEI": 1,
            "Model": 2,
            "Brand": 3,
        };
        this.models = {};
        this.models["All Models"] = "";
        this.brands = {};
        this.brands["All Brands"] = "";
        this.colors =[];

        $(document).on('change', '[DATI-ID=searchBarListDevices] [DATI-ID=listDevices_filter_by]', function () {
            var filterSelected = $(this).val();
            console.log(filterSelected);

            switch (filterSelected) {
                case "1" :
                    iDevice.GET_ALL_DEVICES2();
                    $("[DATI-ID=searchBarListDevices] [dati-composent=input]").css("display", "none");
                    $("[DATI-ID=searchBarListDevices] [dati-composent=input]").val("");
                    $("[DATI-ID=searchBarListDevices] [DATI-ID=listDevices_filter_by]").val(filterSelected);
                    $("[DATI-ID=searchBarListDevices] [DATI-ID=listDevices_filter_by]").css("display", "inline-block");
                    $("[DATI-ID=searchBarListDevices] [DATI-ID=listDevices_search_byImei]").css("display", "inline-block");
                    break;
                case "2" :
                    iDevice.GET_ALL_DEVICES2();
                    $("[DATI-ID=searchBarListDevices] [dati-composent=input]").css("display", "none");
                    $("[DATI-ID=searchBarListDevices] [dati-composent=input]").val("");
                    $("[DATI-ID=searchBarListDevices] [DATI-ID=listDevices_filter_by]").val(filterSelected);
                    $("[DATI-ID=searchBarListDevices] [DATI-ID=listDevices_filter_by]").css("display", "inline-block");
                    $("[DATI-ID=searchBarListDevices] [DATI-ID=listDevices_search_byModel]").css("display", "inline-block");
                    break;
                case "3" :
                    iDevice.GET_ALL_DEVICES2();
                    $("[DATI-ID=searchBarListDevices] [dati-composent=input]").css("display", "none");
                    $("[DATI-ID=searchBarListDevices] [dati-composent=input]").val("");
                    $("[DATI-ID=searchBarListDevices] [DATI-ID=listDevices_filter_by]").val(filterSelected);
                    $("[DATI-ID=searchBarListDevices] [DATI-ID=listDevices_filter_by]").css("display", "inline-block");
                    $("[DATI-ID=searchBarListDevices] [DATI-ID=listDevices_search_byBrand]").css("display", "inline-block");
                    break;

              /*  case "4" :
                    iDevice.GET_ALL_DEVICES2();
                    $("[DATI-ID=searchBarListDevices] [dati-composent=input]").css("display", "none");
                    $("[DATI-ID=searchBarListDevices] [dati-composent=input]").val("");
                    $("[DATI-ID=searchBarListDevices] [DATI-ID=listDevices_filter_by]").val(filterSelected);
                    $("[DATI-ID=searchBarListDevices] [DATI-ID=listDevices_filter_by]").css("display", "inline-block");
                    $("[DATI-ID=searchBarListDevices] [DATI-ID=listDevices_search_byStatus]").css("display", "inline-block");
                    break;*/

            }
        });


    }

    LIST_MODELS(data){
        this.models = {};
        this.models["All Models"] = "";
        for (var i = 0; i < data.length; i++) {
            this.models[data[i].name] = data[i].id
        }
        console.log(this.models);
    }

    LIST_COLORS(data){
        this.colors = data;
        console.log(this.colors,"color");
    }

    LIST_BRANDS(data){
        this.brands = {};
        this.brands["All Brands"] = "";
        for (var i = 0; i < data.length; i++) {
            this.brands[data[i].name] = data[i].id
        }
        console.log(this.brands);
    }
    DATALIST(data) {
        this.devices = data;
        try{
            this.total = data[0].count1;
            this.nbrRows = data[0].quantity1;
        }catch (e) {
            this.total = 0;
            this.nbrRows = 0;
        }
    }
    DATA_SEARCH(data){
        this.devices = data;
        dati_table.UPDATE("deviceList");

    }

    GET_HTML_Edit(id) {
        if (id != null && id != 'null' && id != '') {
            return '<img src="/assets/img/ui/edit_button.png"  title="Edit" style="cursor: pointer;padding: 5px;width: 20px;" DATI-TD-STYLE="text-align:center" DATI-LINK="EditDevice"  DATI-PATH="Front Office &nbsp&nbsp&nbsp > &nbsp&nbsp&nbsp Guests &nbsp&nbsp&nbsp > &nbsp&nbsp&nbsp Edit Form" onclick="deviceList_ui.setSelected(this)"/>';
        } else {
            return "";
        }

    }

    GET_HTML_Delete(id) {
        if (id != null && id != 'null' && id != '') {
            return '<img src="/assets/img/ui/delete_button.png" title="Delete" style="cursor: pointer;padding: 5px;width: 20px;" DATI-TD-STYLE="text-align:right" onclick="deviceList_ui.DELETE(this)"/>';
        } else {
            return "";
        }
    }

    GET_HTML_Plus(id) {
        if (id != null && id != 'null' && id != '') {
            return '<i title="Details" style="cursor: pointer;padding: 5px;width: 20px;" DATI-TD-STYLE="text-align:right" onclick="deviceList_ui.setSelected(this);deviceList_ui.showPopupDetail();" class="fas fa-ellipsis-v fa-lg"></i>';
        } else {
            return "";
        }
    }

    TOGGEL_ALERTE() {
        $("[DATI-PAGE=Devices]").find("[dati-id=DeviceDeleteAlerte]").find("[class=overlay_restau]").css("display", "block");
    }

    CANCEL_ALERTE() {
        $("[DATI-PAGE=Devices]").find("[dati-id=DeviceDeleteAlerte]").find("[class=overlay_restau]").css("display", "none");
    }

    VALIDATE_ALERTE() {
        var id_device = this.selectedDevice.id;

        iDevice.DELETE_DEVICE(id_device);
    }

    DELETE_NAME() {
        var imei = this.selectedDevice.imei;
        $("[DATI-ID=delete-item-name]").html("Are you sure to delete device " + imei);
    }

    DELETE(rest_element) {
        this.setSelected(rest_element);
        this.TOGGEL_ALERTE();
        this.DELETE_NAME();
    }

    GET_POSITION_IN_TAB(list, id) {
        for (var i = 0; i < list.length; i++) {
            if (list[i].id == id) {
                return i;
            }
        }
        return -1;
    }

    showPopupDetail() {
        var event = new CustomEvent("showDetailDevices");
        document.dispatchEvent(event);
        $("#popup_detail_devices").css("display", "inline-block")
        setTimeout(function () {
            deviceList_ui.fillPageDetail("popup_detail_devices");
        }, 200)

    }

    CLOSE_POPUP() {

        $("#popup_detail_devices").css("display", "none");
        this.RESET_DETAIL_DEVICE("popup_detail_devices");

    }

    RESET_DETAIL_DEVICE(id) {

        $("#" + id).find("[ID=detailDeviceImei]").find("input").val('');


        $("#" + id).find("[ID=detailDeviceSerialNumber]").find("input").val('');


        $("#" + id).find("[ID=detailDeviceAffectedHotel]").find("input").val('');


        $("#" + id).find("[ID=detailDeviceInsertedDate]").find("input").val('');


        $("#" + id).find("[ID=detailDeviceBrand]").find("input").val('');


        $("#" + id).find("[ID=detailDeviceModel]").find("input").val('');


        $("#" + id).find("[ID=detailDeviceColor]").find("input").val('');


        $("#" + id).find("[ID=detailDeviceProvider]").find("input").val('');


        $("#" + id).find("[ID=detailDeviceStatus]").find("input").val('');


        $("#" + id).find("[ID=detailDevicePrice]").find("input").val('');

    }

    fillPageDetail(id) {

        try {
            $("#" + id).find("[ID=detailDeviceImei]").find("input").val(this.selectedDevice.imei);
        } catch (e) {
            $("#" + id).find("[ID=detailDeviceImei]").find("input").val('- -');
        }

        try {
            $("#" + id).find("[ID=detailDeviceSerialNumber]").find("input").val(this.selectedDevice.serial_number);
        } catch (e) {
            $("#" + id).find("[ID=detailDeviceSerialNumber]").find("input").val('- -');
        }

        try {
            $("#" + id).find("[ID=detailDeviceAffectedHotel]").find("input").val(this.selectedDevice.Hotel.name);
        } catch (e) {
            $("#" + id).find("[ID=detailDeviceAffectedHotel]").find("input").val('- -');
        }

        try {
            $("#" + id).find("[ID=detailDeviceInsertedDate]").find("input").val(this.selectedDevice.inserted_at);
        } catch (e) {
            $("#" + id).find("[ID=detailDeviceInsertedDate]").find("input").val('- -');
        }

        try {
            $("#" + id).find("[ID=detailDeviceBrand]").find("input").val(this.selectedDevice.Feature.Model.Brand.name);
        } catch (e) {
            $("#" + id).find("[ID=detailDeviceBrand]").find("input").val('- -');
        }

        try {
            $("#" + id).find("[ID=detailDeviceModel]").find("input").val(this.selectedDevice.Feature.Model.name);
        } catch (e) {
            $("#" + id).find("[ID=detailDeviceModel]").find("input").val('- -');
        }

        try {
            $("#" + id).find("[ID=detailDeviceColor]").find("input").val(this.selectedDevice.Feature.Color.name);
        } catch (e) {
            $("#" + id).find("[ID=detailDeviceColor]").find("input").val('- -');
        }

        try {
            $("#" + id).find("[ID=detailDeviceProvider]").find("input").val(this.selectedDevice.provider);
        } catch (e) {
            $("#" + id).find("[ID=detailDeviceProvider]").find("input").val('- -');
        }

        try {
            if (this.selectedDevice.status == 1) {
                $("#" + id).find("[ID=detailDeviceStatus]").find("input").val("Active");
            }
            if (this.selectedDevice.status == 0) {
                $("#" + id).find("[ID=detailDeviceStatus]").find("input").val("Inactive");
            }


        } catch (e) {
            $("#" + id).find("[ID=detailDeviceStatus]").find("input").val('- -');
        }

        try {
            $("#" + id).find("[ID=detailDevicePrice]").find("input").val(this.selectedDevice.price);
        } catch (e) {
            $("#" + id).find("[ID=detailDevicePrice]").find("input").val('- -');
        }
    }

    fillPageEdit() {
        try {
            $("[DATI-PAGE=EditDevice]").find("[ID=inputUpdateImeiDevice]").find("input").val(this.selectedDevice.imei);
        } catch (e) {
            $("[DATI-PAGE=EditDevice]").find("[ID=inputUpdateImeiDevice]").find("input").val('');
        }
        try {
            $("[DATI-PAGE=EditDevice]").find("[ID=inputUpdateSerialNumberDevice]").find("input").val(this.selectedDevice.serial_number);
        } catch (e) {
            $("[DATI-PAGE=EditDevice]").find("[ID=inputUpdateSerialNumberDevice]").find("input").val('');
        }

        try {
            $("[DATI-PAGE=EditDevice]").find("[ID=inputDeviceUpdateBrand]").find("select").val(this.selectedDevice.Feature.Model.Brand.id);
        } catch (e) {
            $("[DATI-PAGE=EditDevice]").find("[ID=inputDeviceUpdateBrand]").find("select").val('');
        }

        try {
            $("[DATI-PAGE=EditDevice]").find("[ID=inputDeviceUpdateModel]").find("select").val(this.selectedDevice.Feature.Model.id);
        } catch (e) {
            $("[DATI-PAGE=EditDevice]").find("[ID=inputDeviceUpdateModel]").find("select").val('');
        }

        try {
            $("[DATI-PAGE=EditDevice]").find("[ID=inputDeviceUpdateColor]").find("select").val(this.selectedDevice.Feature.Color.id);
        } catch (e) {
            $("[DATI-PAGE=EditDevice]").find("[ID=inputDeviceUpdateColor]").find("select").val('');
        }
        try {
            $("[DATI-PAGE=EditDevice]").find("[ID=inputDeviceUpdateProvider]").find("input").val(this.selectedDevice.provider);
        } catch (e) {
            $("[DATI-PAGE=EditDevice]").find("[ID=inputDeviceUpdateProvider]").find("input").val('');
        }

        try {
            $("[DATI-PAGE=EditDevice]").find("[ID=inputDeviceUpdatePrice]").find("input").val(this.selectedDevice.price);
        } catch (e) {
            $("[DATI-PAGE=EditDevice]").find("[ID=inputDeviceUpdatePrice]").find("input").val('');
        }

    }

    setSelected(iconDetail) {
        var i = $(iconDetail).parent().parent().attr("DATI-ROW");
        this.selectedDevice = this.devices[i];
        console.log(this.selectedDevice, "ssssss");
    }

    GET_STATUS(attribute) {
        if (attribute != null && attribute != "NULL") {
            return '<div style="text-align: center;color: rgb(215,92,84);background-color: rgb(247,240,241);border-radius: 20px;padding: 8px;font-size: 13px">In Use</div>';

        } else {

            return '<div style="text-align: center;color: rgb(159,213,168);background-color: rgb(232,245,237);border-radius: 20px;padding: 8px;font-size: 13px">Available</div>';
        }
    }

    GET_BRAND_HTML(attribute) {

        if (attribute != null && attribute != "NULL") {
            return attribute;

        } else {
            return '- -';
        }
    }

    GET_MODEL_HTML(attribute) {
        if (attribute != null && attribute != "NULL") {
            return attribute;
        } else {
            return '- -';
        }
    }
}

let deviceList_ui = new Ui_listDevices();