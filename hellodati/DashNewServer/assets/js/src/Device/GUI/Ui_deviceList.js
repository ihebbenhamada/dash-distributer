let Ui_deviceList = class {
    constructor() {
        this.total = 0;
        //this.total1 = 0;
        this.nbrRows=10;
        this.selectedDevice=null;
        this.totalS = 0;
        this.nbrRowsS=10;
        this.lastSearchBy ="";
        $("[DATI-ID=pagination_deviceList]").attr("DATI-NBR-ROW",this.nbrRows);
        this.options={
            "All" : '',
            "Available" : 1,
            "In Use" : 2,

        };
        this.filterBy={
            "IMEI" : 1,
            "Sim number" : 2,
            "Status" : 3
        };
        $(document).on('change','[DATI-ID=searchBarDevice] [DATI-ID=listDevices_filter_by]',function(){
            var filterSelected = $(this).val();
            console.log(filterSelected);

            switch (filterSelected) {
                case "1" :
                    iDevice.GET_ALL_DEVICES2();
                    $("[DATI-ID=searchBarDevice] [dati-composent=input]").css("display","none");
                    $("[DATI-ID=searchBarDevice] [dati-composent=input]").val("");
                    $("[DATI-ID=searchBarDevice] [DATI-ID=listDevices_filter_by]").val(filterSelected);
                    $("[DATI-ID=searchBarDevice] [DATI-ID=listDevices_filter_by]").css("display","inline-block");
                    $("[DATI-ID=searchBarDevice] [DATI-ID=listdevices_search_byImei]").css("display","inline-block");
                    break;
                case "2" :
                    iDevice.GET_ALL_DEVICES2();
                    $("[DATI-ID=searchBarDevice] [dati-composent=input]").css("display","none");
                    $("[DATI-ID=searchBarDevice] [dati-composent=input]").val("");
                    $("[DATI-ID=searchBarDevice] [DATI-ID=listDevices_filter_by]").val(filterSelected);
                    $("[DATI-ID=searchBarDevice] [DATI-ID=listDevices_filter_by]").css("display","inline-block");
                    $("[DATI-ID=searchBarDevice] [DATI-ID=listdevices_search_bySim]").css("display","inline-block");
                    break;
                case "3" :
                    iDevice.GET_ALL_DEVICES2();
                    $("[DATI-ID=searchBarDevice] [dati-composent=input]").css("display","none");
                    $("[DATI-ID=searchBarDevice] [dati-composent=input]").val("");
                    $("[DATI-ID=searchBarDevice] [DATI-ID=listDevices_filter_by]").val(filterSelected);
                    $("[DATI-ID=searchBarDevice] [DATI-ID=listDevices_filter_by]").css("display","inline-block");
                    $("[DATI-ID=searchBarDevice] [DATI-ID=listDevice_byStatus]").css("display","inline-block");
                    break;
            }
        });
    }

    DATALIST(data){
        this.devices = data.res;
        this.total = data.res[0].count1;
        this.nbrRows = data.res[0].quantity1;
    }

    getStatusDevice(id){
        if(id != null && id != 'null' && id != ''){

        }else {
            return "- -";
        }
    }

    GET_HTML_Edit(id){
        if(id != null && id != 'null' && id != ''){
            return '<i title="Edit Device" style="cursor: pointer;padding: 5px;" DATI-TD-STYLE="text-align:center" DATI-LINK="EditDevice" onclick="deviceList_ui.setSelected(this)" class="fas fa-pencil-alt fa-lg"></i>';
        }else{
            return "";
        }
    }
    GET_HTML_TD(id){
        if(id != null && id != 'null' && id != ''){
            return "<div style='width: 70px'></div>";
        }
    }
    GET_HTML_Delete(id){
        if(id != null && id != 'null' && id != ''){
            return '<i title="Delete" style="cursor: pointer;padding: 5px" DATI-TD-STYLE="text-align:right" onclick="deviceList_ui.DELETE(this)" class="far fa-trash-alt fa-lg"></i>';
        }else{
            return "";
        }
    }
    GET_HTML_Plus(id){
        if(id != null && id != 'null' && id != ''){
            return '<i title="Details" style="cursor: pointer;padding: 5px" DATI-TD-STYLE="text-align:right" DATI-LINK="DetailDevice" onclick="deviceList_ui.setSelected(this)" class="fas fa-ellipsis-v fa-lg"></i>';
        }else{
            return "";
        }
    }

    INIT_dataTable_Devices(){
        var action = '<tr DATI-COMPOSENT="datatable-icon-detail" DATI-LINK="DetailDevice"\n' +
            '            onclick="deviceList_ui.setSelected(this)"></tr>';
        $("[DATI-ID=deviceList]").append(action);
    }
    SEARCH_BY_IMEI(data){

            deviceList_ui.devices=data;
            dati_table.UPDATE("deviceList");

    }

    SEARCH_BY_SIM_NUMBER(data){

            deviceList_ui.devices=data;
            dati_table.UPDATE("deviceList");

    }
    SEARCH_BY_IN_USE(data){

        deviceList_ui.devices=data;
        dati_table.UPDATE("deviceList");

    }
    SEARCH_AVAILABLE(data){

        deviceList_ui.devices=data;
        dati_table.UPDATE("deviceList");

    }
    fillPageDetail(){
        $("[DATI-ID=imei_device]").html(this.selectedDevice.imei);
        $("[DATI-ID=call_time_device]").html(this.selectedDevice.call_time);
        $("[DATI-ID=call_limit_device]").html(this.selectedDevice.call_limit);
        $("[DATI-ID=sim_number_device]").html(this.selectedDevice.sim_number);
        $("[DATI-ID=phone_description_device]").html(this.selectedDevice.phone_description);
        //$("[DATI-ID=hotel_name_device]").html("this.selectedDevice.hotel_name");
        $("[DATI-ID=status_device]").html(this.selectedDevice.status);
        //$("[DATI-ID=vext]").html(/*this.selectedDevice.vext*/);
    }

    fillPageEditDevice(){
        $("[DATI-ID=imei_device_edit]").val(this.selectedDevice.imei);
        $("[DATI-ID=call_time_device_edit]").val(this.selectedDevice.call_time);
        $("[DATI-ID=call_limit_device_edit]").val(this.selectedDevice.call_limit);
        $("[DATI-ID=sim_number_device_edit]").val(this.selectedDevice.sim_number);
        $("[DATI-ID=phone_description_device_edit]").val(this.selectedDevice.phone_description);
        $("[DATI-ID=hotel_name_device_edit]").val("this.selectedDevice.hotel_name");
        $("[DATI-ID=status_device_edit]").val(this.selectedDevice.status);


    }
    setSelected(iconDetail){
        var i = $(iconDetail).parent().parent().attr("DATI-ROW");
        this.selectedDevice = this.devices[i];


    }

    getStatusName(attribute){
        if(attribute!="false" && attribute!=false){
            return '<div style="text-align: center;color: rgb(215,92,84);background-color: rgb(247,240,241);border-radius: 20px;padding: 8px;font-size: 13px">In Use</div>';
        }else{
            return '<div style="text-align: center;color: rgb(159,213,168);background-color: rgb(232,245,237);border-radius: 20px;padding: 8px;font-size: 13px">Available</div>';
        }
    }
};

let deviceList_ui = new Ui_deviceList();