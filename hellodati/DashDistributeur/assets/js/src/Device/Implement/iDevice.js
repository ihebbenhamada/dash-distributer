class imp_Device{
    constructor() {
       this.EVENTS_UI();
       this.EVENTS_SSAPI();
    }

    GET_ALL_DEVICES(){
        var page_nbr = 0;
        try {
            var page_nbr = $(document.querySelectorAll("[dati-id=pagination_deviceList]")[0]).find("[dati_composent=PAGES]").val();
            if(!page_nbr){
                page_nbr = 0;
            }
        }catch (e) {
            page_nbr = 0
        }

        if(deviceList_ui.lastSearchBy != ""){
            if(deviceList_ui.lastSearchBy == "imei"){
                this.GET_DEVICES_BY_IMEI($("[DATI-ID=listDevices_search_byImei]").val(),true);
            }

            if(deviceList_ui.lastSearchBy == "model"){
                this.GET_DEVICES_BY_MODEL($("[DATI-ID=listDevices_search_byModel]").val(),true);
            }

            if(deviceList_ui.lastSearchBy == "brand"){
                this.GET_DEVICES_BY_BRAND($("[DATI-ID=listDevices_search_byBrand]").val(),true);
            }

            if(deviceList_ui.lastSearchBy == "status"){
                this.GET_DEVICES_BY_STATUS($("[DATI-ID=listDevices_search_byStatus]").val(),true);
            }


            return false;
        }

        SSAPI.SUBMIT({
            uri:"/Device/getAll",
            data:{
                pagination:{
                    page: page_nbr,
                    quantity:deviceList_ui.nbrRows
                }
            },
            onsuccess:"ListDevicesReceive",
            onerror:"ListDevicesReceive_error"
        })

    };
    GET_ALL_DEVICES2(){
        var page_nbr = 0;
        deviceList_ui.lastSearchBy="";
        $("[DATI-ID=deviceList]").attr("header_created",true);
        dati_table.init("deviceList");
        SSAPI.SUBMIT({
            uri:"/Device/getAll",
            data:{
                pagination:{
                    page: page_nbr,
                    quantity:deviceList_ui.nbrRows
                }
            },
            onsuccess:"ListDevicesReceive",
            onerror:"ListDevicesReceive_error"
        })
    };
    GET_ALL_COLORS(){
        SSAPI.SUBMIT({
            uri:"/Brand/getAllColors",
            onsuccess:"colorsReceive",
            onerror:"colorsReceive_error"
        })
    }
    GET_ALL_BRANDS(){
        SSAPI.SUBMIT({
            uri:"/Brand/getAllBrands",
            onsuccess:"brandsReceive",
            onerror:"brandsReceive_error"
        })
    }
    GET_MODELS(id){
        SSAPI.SUBMIT({
            uri:"/Brand/getModelByBrandId",
            onsuccess:"modelReceive",
            onerror:"modelReceive_error",
            data:{
                brand_id:id,
            }
        })
    }
    GET_ALL_MODELS(){
        SSAPI.SUBMIT({
            uri:"/Brand/getAllModels",
            onsuccess:"allModelReceive",
            onerror:"allModelReceive_error",
        })
    }
    DELETE_DEVICE(id){
        console.log(id,"front id device to delete");
        SSAPI.SUBMIT({
            uri:"/Device/deleteDevice",
            onsuccess:"deviceDeleted",
            onerror:"deviceDeleted_error",
            data:{
                device_id:id
            }
        })
    }
    GET_DEVICES_BY_IMEI(val,page){
        deviceList_ui.lastSearchBy="imei";
        if(page){
            var page_nbr = 0;

            try {
                var page_nbr = $(document.querySelectorAll("[dati-id=pagination_deviceList]")[0]).find("[dati_composent=PAGES]").val();
                if(!page_nbr){
                    page_nbr = 0;
                }
            }catch (e) {
                page_nbr = 0
            }
        }else{
            page_nbr = 0;
        }

        SSAPI.SUBMIT({
            uri:"/Device/getByIMEI",
            onsuccess:"ResearchByImeiDevicesReceive",
            onerror:"ResearchByImeiDevicesReceive_error",
            data:{
                imei:val,
                pagination:{
                    page: page_nbr,
                    quantity:10
                }
            }
        })
    }
    GET_DEVICES_BY_MODEL(val,page){
        deviceList_ui.lastSearchBy="model";
        if(page){
            var page_nbr = 0;
            try {
                var page_nbr = $(document.querySelectorAll("[dati-id=pagination_deviceList]")[0]).find("[dati_composent=PAGES]").val();
                if(!page_nbr){
                    page_nbr = 0;
                }
            }catch (e) {
                page_nbr = 0
            }
        }else {
            page_nbr = 0;
        }



        SSAPI.SUBMIT({
            uri:"/Device/getByModelName",
            onsuccess:"ResearchByModelDevicesReceive",
            onerror:"ResearchByModelDevicesReceive_error",
            data:{
                model_name:val,
                pagination:{
                    page: page_nbr,
                    quantity:10
                }
            }
        })
    }
    GET_DEVICES_BY_BRAND(val,page){
        deviceList_ui.lastSearchBy="brand";
        if(page){
            var page_nbr = 0;
            try {
                var page_nbr = $(document.querySelectorAll("[dati-id=pagination_deviceList]")[0]).find("[dati_composent=PAGES]").val();
                if(!page_nbr){
                    page_nbr = 0;
                }
            }catch (e) {
                page_nbr = 0
            }
        }else {
            page_nbr = 0;
        }

        SSAPI.SUBMIT({
            uri:"/Device/getByBrandName",
            onsuccess:"ResearchByBrandDevicesReceive",
            onerror:"ResearchByBrandDevicesReceive_error",
            data:{
                brand_name:val,
                pagination:{
                    page: page_nbr,
                    quantity:10
                }
            }
        })
    }
    GET_DEVICES_BY_STATUS(val,page){
        deviceList_ui.lastSearchBy="status";
        if(page){
            var page_nbr = 0;
            try {
                var page_nbr = $(document.querySelectorAll("[dati-id=pagination_deviceList]")[0]).find("[dati_composent=PAGES]").val();
                if(!page_nbr){
                    page_nbr = 0;
                }
            }catch (e) {
                page_nbr = 0
            }
        }else {
            page_nbr = 0;
        }

        SSAPI.SUBMIT({
            uri:"/Device/getByStatus",
            onsuccess:"ResearchByStatusDevicesReceive",
            onerror:"ResearchByStatusDevicesReceive_error",
            data:{
                status:val,
                pagination:{
                    page: page_nbr,
                    quantity:10
                }
            }
        })
    }
    ADD_DEVICE(infoDevice,provider,price,model_id,color_id){
        var data = {
            model_id:model_id,
            color_id:color_id,
            provider:provider,
            price:price,
            tab:infoDevice,
        };
        SSAPI.SUBMIT({
            uri:"/Device/addListOfDevices",
            onsuccess:"addDeviceReceive",
            onerror:"addDeviceReceive_error",
            data:data
        });

        console.log(data,'daataa add device');


    }
    EDIT_DEVICE(device_id,serial_number,imei,provider,price,model_id,color_id){
        var data = {
            device_id:device_id,
            model_id:model_id,
            color_id:color_id,
            provider:provider,
            price:price,
            imei:imei,
            serial_number:serial_number,
        };
        SSAPI.SUBMIT({
            uri:"/Device/update",
            onsuccess:"updateDeviceReceive",
            onerror:"updateDeviceReceive_error",
            data:data
        });

        console.log(data,'daataa add device');


    }

    EVENTS_UI(){
        $(document).on('keyup','[DATI-ID=listDevices_search_byImei]',function(){
            deviceList_ui.lastSearchBy="imei";
            var val = $(this).val();
            if(val.length > 0){
                $("[DATI-ID=deviceList]").attr("header_created",true);
                dati_table.init("deviceList");
                iDevice.GET_DEVICES_BY_IMEI(val,false);
            }else{
                deviceList_ui.lastSearchBy="";
                $("[DATI-ID=deviceList]").attr("header_created",true);
                dati_table.init("deviceList");
                iDevice.GET_ALL_DEVICES();
            }
        });

        $(document).on('change','[DATI-ID=listDevices_search_byModel]',function(){
            deviceList_ui.lastSearchBy="model";
            var val = $(this).find('option:selected').text();
            console.log(val,"aaaaaaa");
            if($(this).val() != ""){
                $("[DATI-ID=deviceList]").attr("header_created",true);
                dati_table.init("deviceList");
                iDevice.GET_DEVICES_BY_MODEL(val,false);
            }else{
                deviceList_ui.lastSearchBy="";
                $("[DATI-ID=deviceList]").attr("header_created",true);
                dati_table.init("deviceList");
                iDevice.GET_ALL_DEVICES();
            }
        });

        $(document).on('change','[DATI-ID=listDevices_search_byBrand]',function(){
            deviceList_ui.lastSearchBy="brand";
            var val = $(this).find('option:selected').text();
            if($(this).val() != ""){
                $("[DATI-ID=deviceList]").attr("header_created",true);
                dati_table.init("deviceList");
                iDevice.GET_DEVICES_BY_BRAND(val,false);
            }else{
                deviceList_ui.lastSearchBy="";
                $("[DATI-ID=deviceList]").attr("header_created",true);
                dati_table.init("deviceList");
                iDevice.GET_ALL_DEVICES();
            }
        });

        $(document).on('keyup','[DATI-ID=listDevices_search_byStatus]',function(){
            deviceList_ui.lastSearchBy="status";
            var val = $(this).val();
            if(val.length > 0){
                $("[DATI-ID=deviceList]").attr("header_created",true);
                dati_table.init("deviceList");
                iDevice.GET_DEVICES_BY_STATUS(val,false);
            }else{
                deviceList_ui.lastSearchBy="";
                $("[DATI-ID=deviceList]").attr("header_created",true);
                dati_table.init("deviceList");
                iDevice.GET_ALL_DEVICES();
            }
        });

        document.addEventListener("SHOW_PAGE", function(e){
            var page = e.detail.pageLink;
            if(page == "Devices"){
                iDevice.GET_ALL_BRANDS();
                iDevice.GET_ALL_MODELS();
                chart_device_ui.UI_EVENT();
                deviceList_ui.lastSearchBy = "";
                dati_table.init("deviceList");
                var event1 = new CustomEvent("DeviceListPageReady");
                document.dispatchEvent(event1);
                $("[DATI-ID=searchBarListDevices] [DATI-ID=listDevices_search_byImei]").css("display","inline-block");
                $("[DATI-ID=searchBarListDevices] [DATI-ID=listDevices_search_byModel]").css("display","none");
                $("[DATI-ID=searchBarListDevices] [DATI-ID=listDevices_search_byBrand]").css("display","none");
                $("[DATI-ID=searchBarListDevices] [DATI-ID=listDevices_search_byStatus]").css("display","none");
                var event = new CustomEvent("showAlerteDeleteDevice");
                document.dispatchEvent(event);


               iDevice.GET_ALL_DEVICES();
               dati_searchBar.UPDATE("searchBarListDevices");


            }

            if (page != "AddPhone"){
                addDevice_ui.RESET_FORM_ADD_DEVICE();
            }

            if (page == "AddPhone"){
                iDevice.GET_ALL_COLORS();
                iDevice.GET_ALL_BRANDS();
                csvUploader_ui.ADDTODOM();
                var event = new CustomEvent("showInputDevices");
                document.dispatchEvent(event);
            }

            if (page == "EditDevice"){
                iDevice.GET_ALL_COLORS();
                iDevice.GET_ALL_BRANDS();
                iDevice.GET_ALL_MODELS();
                var event = new CustomEvent("showInputUpdateDevices");
                document.dispatchEvent(event);
                setTimeout(function () {
                    deviceList_ui.fillPageEdit();
                },1000);

            }
         }, false);
    }


    EVENTS_SSAPI(){
//*********************************************GET LIST OF DEVICES******************************************************
        document.addEventListener("ListDevicesReceive", function(e){
            deviceList_ui.DATALIST(e.detail.res);

            $("[DATI-ID=pagination_deviceList]").attr("DATI-NBR-ROW",deviceList_ui.nbrRows);
            $("[DATI-ID=pagination_deviceList]").attr("DATI-TOTAL-PAGE",deviceList_ui.total);
            dati_pagination.UPDATE("pagination_deviceList");

        }, false);

//**********************************************GET LIST OF COLORS******************************************************
        document.addEventListener("colorsReceive", function(e){
            addDevice_ui.LIST_COLORS(e.detail.res);
            deviceList_ui.LIST_COLORS(e.detail.res);
            updateDevice_ui.LIST_COLORS(e.detail.res);
            dati_select.UPDATE("inputDeviceColor");
            //dati_select.UPDATE("inputMarkColor");

        }, false);
        document.addEventListener("colorsReceive_error", function(e){
            console.error(e.detail);

        }, false);
//**********************************************GET LIST OF MODELS******************************************************
        document.addEventListener("allModelReceive", function(e){
            addBrand_ui.FILL_SELECT_MODEL(e.detail.res);
            deviceList_ui.LIST_MODELS(e.detail.res);
            updateDevice_ui.FILL_SELECT_MODEL(e.detail.res);
            dati_searchBar.UPDATE("searchBarListDevices");
        }, false);

        document.addEventListener("allModelReceive_error", function(e){
            console.error(e.detail);

        }, false);

//**********************************************GET MODEL**********************************************************
        document.addEventListener("modelReceive", function(e){
            addDevice_ui.FILL_SELECT_MODEL(e.detail.res);
            console.log(e.detail.res,"hhhhhhhhhhhhhhh");
            dati_select.UPDATE("inputDeviceModel");

        }, false);
        document.addEventListener("modelReceive_error", function(e){
            console.error(e.detail);

        }, false);

//***********************************************GET LIST OF BRANDS*****************************************************
        document.addEventListener("brandsReceive", function(e){
            addDevice_ui.LIST_BRANDS(e.detail.res);
            deviceList_ui.LIST_BRANDS(e.detail.res);
            console.log(e.detail.res,"hhhhhhhhhhhhhhh");
            dati_select.UPDATE("inputDeviceBrand");
            dati_searchBar.UPDATE("searchBarListDevices");
            addBrand_ui.FILL_SELECT_BRAND(e.detail.res);

        }, false);
        document.addEventListener("brandsReceive_error", function(e){
            console.error(e.detail);

        }, false);

//***********************************************ADD DEVICES************************************************************
        document.addEventListener("addDeviceReceive", function(e){
            addDevice_ui.RESET_FORM_ADD_DEVICE();
            addProvider_ui.SHOW_POPUP_SUCCESS("Devices added successfully!");

        }, false);
        document.addEventListener("addDeviceReceive_error", function(e){
            console.error(e.detail);
            addProvider_ui.SHOW_POPUP_ERROR("Failed to add devices!");

        }, false);

        //***********************************************UPDATE DEVICES************************************************************
        document.addEventListener("updateDeviceReceive", function(e){
            addProvider_ui.SHOW_POPUP_SUCCESS("Devices updated successfully!");

        }, false);
        document.addEventListener("updateDeviceReceive_error", function(e){
            console.error(e.detail);
            addProvider_ui.SHOW_POPUP_ERROR("Failed to update devices!");

        }, false);

//************************************************DELETE DEVICES********************************************************
        document.addEventListener("deviceDeleted", function(e){
            var pos = deviceList_ui.GET_POSITION_IN_TAB(deviceList_ui.devices,e.detail.res[0]);
            if(pos != -1){
                deviceList_ui.devices.splice(pos, 1);
            }
            dati_table.UPDATE("deviceList");
            deviceList_ui.CANCEL_ALERTE();

        }, false);
        document.addEventListener("deviceDeleted_error", function(e){
            console.error(e.detail);
            alert("Failed to delete devices");

        }, false);
//************************************************SEARCH BY IMEI***************************************************************
        document.addEventListener("ResearchByImeiDevicesReceive", function(e){
              try {
                  deviceList_ui.totalS = e.detail.res[0].count1;
                  deviceList_ui.nbrRowsS = e.detail.res[0].quantity1;
                  $("[DATI-ID=pagination_deviceList]").attr("DATI-NBR-ROW",deviceList_ui.nbrRowsS);
                  $("[DATI-ID=pagination_deviceList]").attr("DATI-TOTAL-PAGE",deviceList_ui.totalS);
                  dati_pagination.UPDATE("pagination_deviceList");
              }catch (e) {
                  $("[DATI-ID=pagination_deviceList]").attr("DATI-NBR-ROW",0);
                  $("[DATI-ID=pagination_deviceList]").attr("DATI-TOTAL-PAGE",0);
                  dati_pagination.UPDATE("pagination_deviceList");
              }


            var event = new CustomEvent("ResearchByImeiDevicesReceiveEvent", { detail: {list : e.detail.res} });
            document.dispatchEvent(event);


        }, false);

        document.addEventListener("ResearchByImeiDevicesReceiveEvent", function(e){
            deviceList_ui.DATA_SEARCH(e.detail.list);
        }, false);

        document.addEventListener("ResearchByImeiDevicesReceive_error", function(e){
            console.error(e.detail);

        }, false);
//************************************************SEARCH BY MODEL***************************************************************
        document.addEventListener("ResearchByModelDevicesReceive", function(e){
            try {
                deviceList_ui.totalS = e.detail.res[0].count1;
                deviceList_ui.nbrRowsS = e.detail.res[0].quantity1;
                $("[DATI-ID=pagination_deviceList]").attr("DATI-NBR-ROW",deviceList_ui.nbrRowsS);
                $("[DATI-ID=pagination_deviceList]").attr("DATI-TOTAL-PAGE",deviceList_ui.totalS);
                dati_pagination.UPDATE("pagination_deviceList");
            }catch (e) {
                $("[DATI-ID=pagination_deviceList]").attr("DATI-NBR-ROW",0);
                $("[DATI-ID=pagination_deviceList]").attr("DATI-TOTAL-PAGE",0);
                dati_pagination.UPDATE("pagination_deviceList");
            }


            var event = new CustomEvent("ResearchByModelDevicesReceiveEvent", { detail: {list : e.detail.res} });
            document.dispatchEvent(event);


        }, false);

        document.addEventListener("ResearchByModelDevicesReceiveEvent", function(e){
            deviceList_ui.DATA_SEARCH(e.detail.list);
        }, false);

        document.addEventListener("ResearchByModelDevicesReceive_error", function(e){
            console.error(e.detail);

        }, false);
//************************************************SEARCH BY BRAND***************************************************************
        document.addEventListener("ResearchByBrandDevicesReceive", function(e){
            try {
                deviceList_ui.totalS = e.detail.res[0].count1;
                deviceList_ui.nbrRowsS = e.detail.res[0].quantity1;
                $("[DATI-ID=pagination_deviceList]").attr("DATI-NBR-ROW",deviceList_ui.nbrRowsS);
                $("[DATI-ID=pagination_deviceList]").attr("DATI-TOTAL-PAGE",deviceList_ui.totalS);
                dati_pagination.UPDATE("pagination_deviceList");
            }catch (e) {
                $("[DATI-ID=pagination_deviceList]").attr("DATI-NBR-ROW",0);
                $("[DATI-ID=pagination_deviceList]").attr("DATI-TOTAL-PAGE",0);
                dati_pagination.UPDATE("pagination_deviceList");
            }


            var event = new CustomEvent("ResearchByBrandDevicesReceiveEvent", { detail: {list : e.detail.res} });
            document.dispatchEvent(event);


        }, false);

        document.addEventListener("ResearchByBrandDevicesReceiveEvent", function(e){
            deviceList_ui.DATA_SEARCH(e.detail.list);
        }, false);

        document.addEventListener("ResearchByBrandDevicesReceive_error", function(e){
            console.error(e.detail);

        }, false);
//************************************************SEARCH BY STATUS***************************************************************
        document.addEventListener("ResearchByStatusDevicesReceive", function(e){
            try {
                deviceList_ui.totalS = e.detail.res[0].count1;
                deviceList_ui.nbrRowsS = e.detail.res[0].quantity1;
                $("[DATI-ID=pagination_deviceList]").attr("DATI-NBR-ROW",deviceList_ui.nbrRowsS);
                $("[DATI-ID=pagination_deviceList]").attr("DATI-TOTAL-PAGE",deviceList_ui.totalS);
                dati_pagination.UPDATE("pagination_deviceList");
            }catch (e) {
                $("[DATI-ID=pagination_deviceList]").attr("DATI-NBR-ROW",0);
                $("[DATI-ID=pagination_deviceList]").attr("DATI-TOTAL-PAGE",0);
                dati_pagination.UPDATE("pagination_deviceList");
            }


            var event = new CustomEvent("ResearchByStatusDevicesReceiveEvent", { detail: {list : e.detail.res} });
            document.dispatchEvent(event);


        }, false);

        document.addEventListener("ResearchByStatusDevicesReceiveEvent", function(e){
            deviceList_ui.DATA_SEARCH(e.detail.list);
        }, false);

        document.addEventListener("ResearchByStatusDevicesReceive_error", function(e){
            console.error(e.detail);

        }, false);

    }
}

let iDevice = new imp_Device();