class imp_Device{
    constructor() {
       this.EVENTS_UI();
       this.EVENTS_SSAPI();
    }

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
    }
    AVAILABLE_DEVICES(){
        SSAPI.SUBMIT({
            uri:"/Device/getFreeDevice",
            onsuccess:"ListAvailableDevices",
            onerror:"ListAvailableDevices_error",
        })
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
                this.GET_DEVICES_BY_IMEI($("[DATI-ID=listdevices_search_byImei]").val(),true);
            }
            if(deviceList_ui.lastSearchBy == "sim"){
                this.GET_DEVICES_BY_SIM($("[DATI-ID=listdevices_search_bySim]").val(),true);
            }
            if(deviceList_ui.lastSearchBy == "inUse"){
                this.GET_BY_IN_USE($("[DATI-ID=listDevice_byStatus]").val(),true);
            }
            if(deviceList_ui.lastSearchBy == "available"){
                this.GET_BY_AVAILABLE($("[DATI-ID=listDevice_byStatus]").val(),true);
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
    }
    GET_BY_IN_USE(val,page){
        deviceList_ui.lastSearchBy="inUse";
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
            onsuccess:"ResearchDevicesInUseReceive",
            onerror:"ResearchDevicesInUseReceive_error",
            data:{
                status:val,
                pagination:{
                    page: page_nbr,
                    quantity:deviceList_ui.nbrRowsS
                }
            }
        })
    }
    GET_BY_AVAILABLE(val,page){
        deviceList_ui.lastSearchBy="available";
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
            onsuccess:"ResearchDevicesAvailableReceive",
            onerror:"ResearchDevicesAvailableReceive_error",
            data:{
                status:val,
                pagination:{
                    page: page_nbr,
                    quantity:deviceList_ui.nbrRowsS
                }
            }
        })
    }
    GET_DEVICES_BY_IMEI(val,page){
        deviceList_ui.lastSearchBy="imei";
        if(page) {
            var page_nbr = 0;
            try {
                var page_nbr = $(document.querySelectorAll("[dati-id=pagination_deviceList]")[0]).find("[dati_composent=PAGES]").val();
                if (!page_nbr) {
                    page_nbr = 0;
                }
            } catch (e) {
                page_nbr = 0
            }
        }else {
            page_nbr = 0;
        }
        SSAPI.SUBMIT({
            uri:"/Device/getByIMEI",
            onsuccess:"ResearchDevicesByIMEIReceive",
            data:{
                imei:val,
                pagination:{
                    page: page_nbr,
                    quantity:deviceList_ui.nbrRowsS
                }
            }
        })
    }
    GET_DEVICES_BY_SIM(val,page){
        deviceList_ui.lastSearchBy="sim";
        if(page) {
            var page_nbr = 0;
            try {
                var page_nbr = $(document.querySelectorAll("[dati-id=pagination_deviceList]")[0]).find("[dati_composent=PAGES]").val();
                if (!page_nbr) {
                    page_nbr = 0;
                }
            } catch (e) {
                page_nbr = 0
            }
        }else {
            page_nbr = 0;
        }
        SSAPI.SUBMIT({
            uri:"/Device/getBySim",
            onsuccess:"ResearchDevicesBySimReceive",
            data:{
                sim:val,
                pagination:{
                    page: page_nbr,
                    quantity:deviceList_ui.nbrRowsS
                }
            }
        })
    }

    EVENTS_UI(){
        $(document).on('keyup','[DATI-ID=listdevices_search_byImei]',function(){
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
        $(document).on('keyup','[DATI-ID=listdevices_search_bySim]',function(){
            deviceList_ui.lastSearchBy="sim";
            var val = $(this).val();
            if(val.length > 0){
                $("[DATI-ID=deviceList]").attr("header_created",true);
                dati_table.init("deviceList");
                iDevice.GET_DEVICES_BY_SIM(val,false);
            }else if(val.length < 1) {
                deviceList_ui.lastSearchBy="";
                $("[DATI-ID=deviceList]").attr("header_created",true);
                dati_table.init("deviceList");
                iDevice.GET_ALL_DEVICES();
            }
        });
        $(document).on('change','[DATI-ID=listDevice_byStatus]',function(){
            var val = $(this).val();
            switch (val) {
                case "0":
                    deviceList_ui.lastSearchBy="";
                    $("[DATI-ID=deviceList]").attr("header_created",true);
                    dati_table.init("deviceList");
                    iDevice.GET_ALL_DEVICES();
                    break;
                case "1":
                    deviceList_ui.lastSearchBy == "inUse"
                    $("[DATI-ID=deviceList]").attr("header_created",true);
                    dati_table.init("deviceList");
                    iDevice.GET_BY_IN_USE(1,false);
                    break;
                case "2":
                    deviceList_ui.lastSearchBy == "available";
                    $("[DATI-ID=deviceList]").attr("header_created",true);
                    dati_table.init("deviceList");
                    iDevice.GET_BY_AVAILABLE(2,false);
                    break;
                default:
                    deviceList_ui.lastSearchBy="";
                    $("[DATI-ID=deviceList]").attr("header_created",true);
                    dati_table.init("deviceList");
                    iDevice.GET_ALL_DEVICES();
                    break;
            }
        });
        document.addEventListener("SHOW_PAGE", function(e){
            var page = e.detail.pageLink;
            if(page == "DetailDevice"){
                deviceList_ui.fillPageDetail();

            }
            if (page == "SwapDevice"){

            }

            if(page == "EditDevice"){
                deviceList_ui.fillPageEditDevice();
            }
            if(page == "ListDevices"){
                deviceList_ui.lastSearchBy = "";
                //$("[DATI-ID=guestList]").attr("header_created",false);
                dati_table.init("deviceList");
                var event1 = new CustomEvent("DeviceListPageReady");
                document.dispatchEvent(event1);
                $("[DATI-ID=searchBarDevice] [DATI-ID=listdevices_search_byImei]").css("display","inline-block");
                $("[DATI-ID=searchBarDevice] [DATI-ID=listdevices_search_bySim]").css("display","none");
                $("[DATI-ID=searchBarDevice] [DATI-ID=listDevice_byStatus]").css("display","none");
                // CALL SSAPI  DEVICE GET LIST
                // event success ListDevicesReceive
                iDevice.GET_ALL_DEVICES();
                dati_searchBar.UPDATE("searchBarDevice");
            }
         }, false);
    }


    EVENTS_SSAPI(){
        document.addEventListener("ListDevicesReceive", function(e){
            deviceList_ui.DATALIST(e.detail);
            deviceList_ui.INIT_dataTable_Devices();
            $("[DATI-ID=pagination_deviceList]").attr("DATI-NBR-ROW",deviceList_ui.nbrRows);
            $("[DATI-ID=pagination_deviceList]").attr("DATI-TOTAL-PAGE",deviceList_ui.total);
            dati_pagination.UPDATE("pagination_deviceList");
            //deviceList_ui.total=e.detail.total;
         }, false);

        document.addEventListener("ListDevicesReceive_error", function(e){
            console.log(e.detail);
         }, false);

        document.addEventListener("ListAvailableDevices", function(e){
            dati_add_room.DATALIST_AVAILABLE_DEVICE(e.detail.res);
            dati_edit_room.DATALIST_AVAILABLE_DEVICE(e.detail.res);
            swapDevice_ui.DATALIST_AVAILABLE_DEVICE(e.detail.res);
        }, false);

        document.addEventListener("ResearchDevicesByIMEIReceive", function(e){
            deviceList_ui.INIT_dataTable_Devices();
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
            var event = new CustomEvent("searchDeviceByImeiEvent", { detail: {list : e.detail.res} });
            document.dispatchEvent(event);


        }, false);

        document.addEventListener("searchDeviceByImeiEvent", function(e){
            deviceList_ui.SEARCH_BY_IMEI(e.detail.list);
        }, false);
        //***************
        document.addEventListener("ResearchDevicesBySimReceive", function(e){
            deviceList_ui.INIT_dataTable_Devices();
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


            var event = new CustomEvent("searchDeviceBySimEvent", { detail: {list : e.detail.res} });
            document.dispatchEvent(event);


        }, false);

        document.addEventListener("searchDeviceBySimEvent", function(e){
            deviceList_ui.SEARCH_BY_SIM_NUMBER(e.detail.list);
        }, false);

        document.addEventListener("ResearchDevicesInUseReceive", function(e){
            deviceList_ui.INIT_dataTable_Devices();
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


            var event = new CustomEvent("ResearchDevicesInUseReceiveEvent", { detail: {list : e.detail.res} });
            document.dispatchEvent(event);


        }, false);

        document.addEventListener("ResearchDevicesInUseReceiveEvent", function(e){
            deviceList_ui.SEARCH_BY_IN_USE(e.detail.list);
          }, false);

        document.addEventListener("ResearchDevicesAvailableReceive", function(e){
            deviceList_ui.INIT_dataTable_Devices();
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


            var event = new CustomEvent("ResearchDevicesAvailableReceiveEvent", { detail: {list : e.detail.res} });
            document.dispatchEvent(event);


        }, false);

        document.addEventListener("ResearchDevicesAvailableReceiveEvent", function(e){
            deviceList_ui.SEARCH_AVAILABLE(e.detail.list);
        }, false);



    }
}

let iDevice = new imp_Device();