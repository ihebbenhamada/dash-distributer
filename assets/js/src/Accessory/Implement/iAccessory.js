class imp_Accessory{
    constructor() {
       this.EVENTS_UI();
       this.EVENTS_SSAPI();
    }

    GET_ALL_ACCESSORIES(){
        var page_nbr = 0;
        try {
            var page_nbr = $(document.querySelectorAll("[dati-id=pagination_AccessoryList]")[0]).find("[dati_composent=PAGES]").val();
            if(!page_nbr){
                page_nbr = 0;
            }
        }catch (e) {
            page_nbr = 0
        }

        if(accessoryList_ui.lastSearchBy != ""){
            if(accessoryList_ui.lastSearchBy == "name"){
                this.GET_ACCESSORIES_BY_NAME($("[DATI-ID=listAccessory_search_byName]").val(),true);
            }

            if(accessoryList_ui.lastSearchBy == "provider"){
                this.GET_ACCESSORIES_BY_PROVIDER($("[DATI-ID=listAccessory_search_byProvider]").val(),true);
            }

            if(accessoryList_ui.lastSearchBy == "reference"){
                this.GET_ACCESSORIES_BY_REFERENCE($("[DATI-ID=listAccessory_search_byReference]").val(),true);
            }
            if(accessoryList_ui.lastSearchBy == "warehouse"){
                this.GET_ACCESSORIES_BY_WAREHOUSE($("[DATI-ID=listAccessory_search_byWareHouse]").val(),true);
            }
/*
            if(accessoryList_ui.lastSearchBy == "stock"){
                this.GET_ACCESSORIES_BY_STOCK($("[DATI-ID=listAccessory_search_byStock]").val(),true);
            }

            if(accessoryList_ui.lastSearchBy == "status"){
                this.GET_ACCESSORIES_BY_STATUS($("[DATI-ID=listAccessory_search_byStatusStock]").val(),true);
            }*/


            return false;
        }

        SSAPI.SUBMIT({
            uri:"/Accessory/getAll",
            data:{
                pagination:{
                    page: page_nbr,
                    quantity:accessoryList_ui.nbrRows
                }
            },
            onsuccess:"ListAccessoryReceive",
            onerror:"ListAccessoryReceive_error"
        })

    };

    GET_ALL_ACCESSORIES2(){
        var page_nbr = 0;
        accessoryList_ui.lastSearchBy="";
        $("[DATI-ID=AccessoryList]").attr("header_created",true);
        dati_table.init("AccessoryList");
        SSAPI.SUBMIT({
            uri:"/Accessory/getAll",
            data:{
                pagination:{
                    page: page_nbr,
                    quantity:accessoryList_ui.nbrRows
                }
            },
            onsuccess:"ListAccessoryReceive",
            onerror:"ListAccessoryReceive_error"
        })
    };

    DELETE_ACCESSORY(id){
        console.log(id,"front id ACCESSORY to delete");
        SSAPI.SUBMIT({
            uri:"/Accessory/delete",
            onsuccess:"AccessoryDeleted",
            onerror:"AccessoryDeleted_error",
            data:{
                id:id
            }
        })
    }

    GET_ACCESSORIES_BY_NAME(val,page){
        accessoryList_ui.lastSearchBy="name";
        if(page){
            var page_nbr = 0;

            try {
                var page_nbr = $(document.querySelectorAll("[dati-id=pagination_AccessoryList]")[0]).find("[dati_composent=PAGES]").val();
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
            uri:"/Accessory/getAllByName",
            onsuccess:"ResearchByNameAccessoriesReceive",
            onerror:"ResearchByNameAccessoriesReceive_error",
            data:{
                name:val,
                pagination:{
                    page: page_nbr,
                    quantity:10
                }
            }
        })
    }
    GET_ACCESSORIES_BY_PROVIDER(val,page){
        accessoryList_ui.lastSearchBy="provider";
        if(page){
            var page_nbr = 0;

            try {
                var page_nbr = $(document.querySelectorAll("[dati-id=pagination_AccessoryList]")[0]).find("[dati_composent=PAGES]").val();
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
            uri:"/Accessory/getAllByProviderName",
            onsuccess:"ResearchByProviderNameAccessoryReceive",
            onerror:"ResearchByProviderNameAccessoryReceive_error",
            data:{
                provider_name:val,
                pagination:{
                    page: page_nbr,
                    quantity:10
                }
            }
        })
    }
    GET_ACCESSORIES_BY_WAREHOUSE(val,page){
        accessoryList_ui.lastSearchBy="warehouse";
        if(page){
            var page_nbr = 0;
            try {
                var page_nbr = $(document.querySelectorAll("[dati-id=pagination_AccessoryList]")[0]).find("[dati_composent=PAGES]").val();
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
            uri:"/Accessory/getAllByWarehouse",
            onsuccess:"ResearchWareHouseAccessoryReceive",
            onerror:"ResearchWareHouseAccessoryReceive_error",
            data:{
                warehouse:val,
                pagination:{
                    page: page_nbr,
                    quantity:10
                }
            }
        })
    }
    GET_ACCESSORIES_BY_REFERENCE(val,page){
        accessoryList_ui.lastSearchBy="reference";
        if(page){
            var page_nbr = 0;
            try {
                var page_nbr = $(document.querySelectorAll("[dati-id=pagination_AccessoryList]")[0]).find("[dati_composent=PAGES]").val();
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
            uri:"/Accessory/getAllByRef",
            onsuccess:"ResearchReferenceAccessoryReceive",
            onerror:"ResearchReferenceAccessoryReceive_error",
            data:{
                reference:val,
                pagination:{
                    page: page_nbr,
                    quantity:10
                }
            }
        })
    }
    GET_ACCESSORIES_BY_STOCK(val,page){
        accessoryList_ui.lastSearchBy="stock";
        if(page){
            var page_nbr = 0;
            try {
                var page_nbr = $(document.querySelectorAll("[dati-id=pagination_AccessoryList]")[0]).find("[dati_composent=PAGES]").val();
                if(!page_nbr){
                    page_nbr = 0;
                }
            }catch (e) {
                page_nbr = 0
            }
        }else {
            page_nbr = 0;
        }



        /*SSAPI.SUBMIT({
            uri:"/Guest/getByName",
            onsuccess:"ResearchGuestsReceive",
            data:{
                name:val,
                pagination:{
                    page: page_nbr,
                    quantity:guestList_ui.nbrRowsS
                }
            }
        })*/
    }
    GET_ACCESSORIES_BY_STATUS(val,page){
        accessoryList_ui.lastSearchBy="status";
        if(page){
            var page_nbr = 0;
            try {
                var page_nbr = $(document.querySelectorAll("[dati-id=pagination_AccessoryList]")[0]).find("[dati_composent=PAGES]").val();
                if(!page_nbr){
                    page_nbr = 0;
                }
            }catch (e) {
                page_nbr = 0
            }
        }else {
            page_nbr = 0;
        }



        /*SSAPI.SUBMIT({
            uri:"/Guest/getByName",
            onsuccess:"ResearchGuestsReceive",
            data:{
                name:val,
                pagination:{
                    page: page_nbr,
                    quantity:guestList_ui.nbrRowsS
                }
            }
        })*/
    }


    EVENTS_UI(){
        $(document).on('keyup','[DATI-ID=listAccessory_search_byName]',function(){
            accessoryList_ui.lastSearchBy="name";
            var val = $(this).val();
            if(val.length > 0){
                $("[DATI-ID=AccessoryList]").attr("header_created",true);
                dati_table.init("AccessoryList");
                iAccessory.GET_ACCESSORIES_BY_NAME(val,false);
            }else{
                accessoryList_ui.lastSearchBy="";
                $("[DATI-ID=AccessoryList]").attr("header_created",true);
                dati_table.init("AccessoryList");
                iAccessory.GET_ALL_ACCESSORIES();
            }
        });
        $(document).on('keyup','[DATI-ID=listAccessory_search_byProvider]',function(){
            accessoryList_ui.lastSearchBy="provider";
            var val = $(this).val();
            if(val.length > 0){
                $("[DATI-ID=AccessoryList]").attr("header_created",true);
                dati_table.init("AccessoryList");
                iAccessory.GET_ACCESSORIES_BY_PROVIDER(val,false);
            }else{
                accessoryList_ui.lastSearchBy="";
                $("[DATI-ID=AccessoryList]").attr("header_created",true);
                dati_table.init("AccessoryList");
                iAccessory.GET_ALL_ACCESSORIES();
            }
        });
        $(document).on('keyup','[DATI-ID=listAccessory_search_byReference]',function(){
            accessoryList_ui.lastSearchBy="reference";
            var val = $(this).val();
            if(val.length > 0){
                $("[DATI-ID=AccessoryList]").attr("header_created",true);
                dati_table.init("AccessoryList");
                iAccessory.GET_ACCESSORIES_BY_REFERENCE(val,false);
            }else{
                accessoryList_ui.lastSearchBy="";
                $("[DATI-ID=AccessoryList]").attr("header_created",true);
                dati_table.init("AccessoryList");
                iAccessory.GET_ALL_ACCESSORIES();
            }
        });
        $(document).on('keyup','[DATI-ID=listAccessory_search_byWareHouse]',function(){
            accessoryList_ui.lastSearchBy="warehouse";
            var val = $(this).val();
            if(val.length > 0){
                $("[DATI-ID=AccessoryList]").attr("header_created",true);
                dati_table.init("AccessoryList");
                iAccessory.GET_ACCESSORIES_BY_WAREHOUSE(val,false);
            }else{
                accessoryList_ui.lastSearchBy="";
                $("[DATI-ID=AccessoryList]").attr("header_created",true);
                dati_table.init("AccessoryList");
                iAccessory.GET_ALL_ACCESSORIES();
            }
        });
        document.addEventListener("SHOW_PAGE", function(e){
            var page = e.detail.pageLink;


            if(page == "Accessories"){
                chart_accessory_ui.UI_EVENT();
                accessoryList_ui.lastSearchBy = "";
                dati_table.init("AccessoryList");
                var event1 = new CustomEvent("AccessoryListPageReady");
                document.dispatchEvent(event1);

                $("[DATI-ID=searchBarListAccessory] [DATI-ID=listAccessory_search_byName]").css("display","inline-block");
                $("[DATI-ID=searchBarListAccessory] [DATI-ID=listAccessory_search_byProvider]").css("display","none");
                $("[DATI-ID=searchBarListAccessory] [DATI-ID=listAccessory_search_byReference]").css("display","none");
                $("[DATI-ID=searchBarListAccessory] [DATI-ID=listAccessory_search_byWareHouse]").css("display","none");
                var event = new CustomEvent("showAlerteDeleteAccessory");
                document.dispatchEvent(event);

                iAccessory.GET_ALL_ACCESSORIES();
               dati_searchBar.UPDATE("searchBarListAccessory");


            }
            if(page == "EditAccessory"){

                var event = new CustomEvent("showInputArticleEdit");
                document.dispatchEvent(event);
                setTimeout(function () {
                    accessoryList_ui.fillPageEdit()
                },500);

            }
         }, false);
    }


    EVENTS_SSAPI(){
        document.addEventListener("ListAccessoryReceive", function(e){
            accessoryList_ui.DATALIST(e.detail.res);
            $("[DATI-ID=pagination_AccessoryList]").attr("DATI-NBR-ROW",accessoryList_ui.nbrRows);
            $("[DATI-ID=pagination_AccessoryList]").attr("DATI-TOTAL-PAGE",accessoryList_ui.total);
            dati_pagination.UPDATE("pagination_AccessoryList");

        }, false);
         document.addEventListener("ListAccessoryReceive_error", function(e){
           console.error(e.detail)
        }, false);

//************************************************Delete accessory***************************************************************
        document.addEventListener("AccessoryDeleted", function(e){
            var pos = accessoryList_ui.GET_POSITION_IN_TAB(accessoryList_ui.accessories,e.detail.res[0]);
            if(pos != -1){
                accessoryList_ui.accessories.splice(pos, 1);
            }
            dati_table.UPDATE("AccessoryList");
            accessoryList_ui.CANCEL_ALERTE();

        }, false);

        document.addEventListener("AccessoryDeleted_error", function(e){
            console.error(e.detail);

        }, false);
        //************************************************Search by name***************************************************************
        document.addEventListener("ResearchByNameAccessoriesReceive", function(e){
            var event = new CustomEvent("ResearchByNameAccessoriesReceiveEvent", { detail: {list : e.detail.res} });
            document.dispatchEvent(event);


        }, false);

        document.addEventListener("ResearchByNameAccessoriesReceiveEvent", function(e){
            accessoryList_ui.DATALIST(e.detail.list);
            dati_table.UPDATE("AccessoryList")
        }, false);

        document.addEventListener("ResearchByNameAccessoriesReceive_error", function(e){
            console.error(e.detail);

        }, false);
        //************************************************Search by provider name***************************************************************
        document.addEventListener("ResearchByProviderNameAccessoryReceive", function(e){
            var event = new CustomEvent("ResearchByProviderNameAccessoryReceiveEvent", { detail: {list : e.detail.res} });
            document.dispatchEvent(event);


        }, false);

        document.addEventListener("ResearchByProviderNameAccessoryReceiveEvent", function(e){
            accessoryList_ui.DATALIST(e.detail.list);
            dati_table.UPDATE("AccessoryList")
        }, false);

        document.addEventListener("ResearchByProviderNameAccessoryReceive_error", function(e){
            console.error(e.detail);

        }, false);
        //************************************************Search by warehouse ***************************************************************
        document.addEventListener("ResearchWareHouseAccessoryReceive", function(e){
            var event = new CustomEvent("ResearchWareHouseAccessoryReceiveEvent", { detail: {list : e.detail.res} });
            document.dispatchEvent(event);


        }, false);

        document.addEventListener("ResearchWareHouseAccessoryReceiveEvent", function(e){
            accessoryList_ui.DATALIST(e.detail.list);
            dati_table.UPDATE("AccessoryList")
        }, false);

        document.addEventListener("ResearchWareHouseAccessoryReceive_error", function(e){
            console.error(e.detail);

        }, false);
        //************************************************Search by warehouse ***************************************************************
        document.addEventListener("ResearchReferenceAccessoryReceive", function(e){
            var event = new CustomEvent("ResearchReferenceAccessoryReceiveEvent", { detail: {list : e.detail.res} });
            document.dispatchEvent(event);


        }, false);

        document.addEventListener("ResearchReferenceAccessoryReceiveEvent", function(e){
            accessoryList_ui.DATALIST(e.detail.list);
            dati_table.UPDATE("AccessoryList")
        }, false);

        document.addEventListener("ResearchReferenceAccessoryReceive_error", function(e){
            console.error(e.detail);

        }, false);
    }
}

let iAccessory = new imp_Accessory();