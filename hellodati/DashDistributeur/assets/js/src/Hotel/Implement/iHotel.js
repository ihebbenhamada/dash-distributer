class imp_Hotel{
    constructor() {
       this.EVENTS_UI();
       this.EVENTS_SSAPI();
    }

    GET_ALL_HOTELS(){
        var page_nbr = 0;
        try {
            var page_nbr = $(document.querySelectorAll("[dati-id=pagination_hotelList]")[0]).find("[dati_composent=PAGES]").val();
            if(!page_nbr){
                page_nbr = 0;
            }
        }catch (e) {
            page_nbr = 0
        }

        if(hotelList_ui.lastSearchBy != ""){
            if(hotelList_ui.lastSearchBy == "name"){
                this.GET_HOTELS_BY_NAME($("[DATI-ID=listHotels_search_byname]").val(),true);
            }
            if(hotelList_ui.lastSearchBy == "reference"){
                this.GET_HOTELS_BY_CHAIN($("[DATI-ID=listHotels_search_byreference]").val(),true);
            }
            if(hotelList_ui.lastSearchBy == "category"){
                this.GET_HOTELS_BY_CHAIN($("[DATI-ID=listhotels_search_bycategory]").val(),true);
            }

            return false;
        }

        SSAPI.SUBMIT({
            uri:"/Hotel/getAll",
            data:{
                pagination:{
                    page: page_nbr,
                    quantity:10
                }
            },
            onsuccess:"ListHotelsReceive",
            onerror:"ListHotelsReceive_error"
        });
    };
    GET_ALL_HOTELS2(){
        var page_nbr = 0;
        hotelList_ui.lastSearchBy="";
        $("[DATI-ID=hotelList]").attr("header_created",true);
        dati_table.init("hotelList");
        SSAPI.SUBMIT({
            uri:"/Hotel/getAll",
            data:{
                pagination:{
                    page: page_nbr,
                    quantity:10
                }
            },
            onsuccess:"ListHotelsReceive",
            onerror:"ListHotelsReceive_error"
        });
    };
    GET_LIST_SERVICES(){
        SSAPI.SUBMIT({
            uri:"/Service_type/getAll",
            onsuccess:"showServiceHotelsEdit",
            onerror:"showServiceHotelsEdit_error",
        });
    }
    GET_CHAIN(){
        SSAPI.SUBMIT({
            uri:"/Chain/getAll",
            onsuccess:"chainReceiveEdit",
            onerror:"chainReceiveEdit_error",
        });
    }
    GET_CATEGORY(){
        var eventStars = new CustomEvent("starsReceiveEdit", {
            detail: {
                res:[{
                    id:1,
                    name:"★",
                },
                    {
                        id:2,
                        name:"★★",
                    },
                    {
                        id:3,
                        name:"★★★",
                    },
                    {
                        id:4,
                        name:"★★★★",
                    },
                    {
                        id:5,
                        name:"★★★★★",
                    }

                ]
            }
        });
        document.dispatchEvent(eventStars);
    }
    GET_OFFRE_HOTEL(){
        SSAPI.SUBMIT({
            uri:"/Offer_hotel/getAll",
            onsuccess:"offreHotelReceiveEdit",
            onerror:"offreHotelReceiveEdit_error",
        });



    }
    GET_COUNTRY(){
        SSAPI.SUBMIT({
            uri:"/Country/getAll",
            onsuccess:"countryReceiveEdit",
            onerror:"countryReceiveEdit_error",
        });
    }
    GET_BUSSINESS_MANAGER(){
        SSAPI.SUBMIT({
            uri:"/Emp/getAllBusinessManager",
            onsuccess:"BusinessManagerReceiveEdit",
            onerror:"BusinessManagerReceiveEdit_error",
        });
    }
    GET_LANGUAGES(){
        SSAPI.SUBMIT({
            uri:"/Language/getAll",
            onsuccess:"LanguageReceiveEdit",
            onerror:"LanguageReceiveEdit_error",
        });
    }
    GET_TIME_ZONE(){
        SSAPI.SUBMIT({
            uri:"/Time_zone/getAll",
            onsuccess:"Time_zoneReceiveEdit",
            onerror:"Time_zoneReceiveEdit_error",
        });
    }
    DELETE_HOTEL(id){
        console.log(id,"front id hotel to delete");
        SSAPI.SUBMIT({
            uri:"/Hotel/delete",
            onsuccess:"HotelDeleted",
            onerror:"HotelDeleted_error",
            data:{
                id:id
            }
        })
    }
    GET_HOTELS_BY_NAME(val,page){
        hotelList_ui.lastSearchBy="name";
        if(page){
            var page_nbr = 0;

            try {
                var page_nbr = $(document.querySelectorAll("[dati-id=pagination_hotelList]")[0]).find("[dati_composent=PAGES]").val();
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
            uri:"/Hotel/getAllByName",
            onsuccess:"ResearchByNameHotelsReceive",
            onerror:"ResearchByNameHotelsReceive_error",
            data:{
                name:val,
                pagination:{
                    page: page_nbr,
                    quantity:10
                }
            }
        })
    }
    GET_HOTELS_BY_REFERENCE(val,page){
        hotelList_ui.lastSearchBy="reference";
        if(page){
            var page_nbr = 0;

            try {
                var page_nbr = $(document.querySelectorAll("[dati-id=pagination_hotelList]")[0]).find("[dati_composent=PAGES]").val();
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
            uri:"/Hotel/getAllByRef",
            onsuccess:"ResearchByRefHotelsReceive",
            onerror:"ResearchByRefHotelsReceive_error",
            data:{
                hotel_ref:val,
                pagination:{
                    page: page_nbr,
                    quantity:10
                }
            }
        })
    }
    GET_HOTELS_BY_CATEGORY(val,page){
        hotelList_ui.lastSearchBy="category";
        if(page){
            var page_nbr = 0;

            try {
                var page_nbr = $(document.querySelectorAll("[dati-id=pagination_hotelList]")[0]).find("[dati_composent=PAGES]").val();
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
            uri:"/Hotel/getAllByStars",
            onsuccess:"ResearchByCatHotelsReceive",
            onerror:"ResearchByCatHotelsReceive_error",
            data:{
                stars:val,
                pagination:{
                    page: page_nbr,
                    quantity:10
                }
            }
        })
    }
    GET_HOTELS_BY_CHAIN(val,page){
        hotelList_ui.lastSearchBy="chain";
        if(page){
            var page_nbr = 0;
            try {
                var page_nbr = $(document.querySelectorAll("[dati-id=pagination_hotelList]")[0]).find("[dati_composent=PAGES]").val();
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
    GET_HOTEL_ACCESS(id){
        var id = parseInt(id);
        console.log(id,"from addddddd");
        SSAPI.SUBMIT({
            uri:"/Hotel/getById",
            data:{
                id:id,
            },
            onsuccess:"HotelAccessReceive",
            onerror:"HotelAccessReceive_error",
        });
    }
    EDIT_HOTEL(offer_id,business_manager_id,country_id,chain_id,time_zone_id,name,stars,
               address,city,postal_code,capacity,tel_demande,tab_demande,logo,cover,prefix,country_id_responsable,
               name_responsable,email_responsable,login,password,languages,services){

    }
    EVENTS_UI(){
        $(document).on('keyup','[DATI-ID=listHotels_search_byname]',function(){
            hotelList_ui.lastSearchBy="name";
            var val = $(this).val();
            if(val.length > 0){
                $("[DATI-ID=hotelList]").attr("header_created",true);
                dati_table.init("hotelList");
                iHotel.GET_HOTELS_BY_NAME(val,false);
            }else{
                hotelList_ui.lastSearchBy="";
                $("[DATI-ID=hotelList]").attr("header_created",true);
                dati_table.init("hotelList");
                iHotel.GET_ALL_HOTELS();
            }
        });

        $(document).on('keyup','[DATI-ID=listHotels_search_byreference]',function(){
            hotelList_ui.lastSearchBy="reference";
            var val = $(this).val();
            if(val.length > 0){
                $("[DATI-ID=hotelList]").attr("header_created",true);
                dati_table.init("hotelList");
                iHotel.GET_HOTELS_BY_REFERENCE(val,false);
            }else{
                hotelList_ui.lastSearchBy="";
                $("[DATI-ID=hotelList]").attr("header_created",true);
                dati_table.init("hotelList");
                iHotel.GET_ALL_HOTELS();
            }
        });

        $(document).on('change','[DATI-ID=listhotels_search_bycategory]',function(){
            hotelList_ui.lastSearchBy="category";
            var val = $(this).val();
            if(val != "-1"){
                $("[DATI-ID=hotelList]").attr("header_created",true);
                dati_table.init("hotelList");
                iHotel.GET_HOTELS_BY_CATEGORY(val,false);
            }else{
                hotelList_ui.lastSearchBy="";
                $("[DATI-ID=hotelList]").attr("header_created",true);
                dati_table.init("hotelList");
                iHotel.GET_ALL_HOTELS();
            }
        });


        document.addEventListener("SHOW_PAGE", function(e){
            var page = e.detail.pageLink;


            if(page == "Hotels"){
                $("[DATI-PAGE=Hotels]").css("display", "inline-block");
                hotelList_ui.lastSearchBy = "";
                dati_table.init("hotelList");
                var event1 = new CustomEvent("HotelListPageReady");
                document.dispatchEvent(event1);
                iHotel.GET_CATEGORY();

                $("[DATI-ID=searchBarListHotels] [DATI-ID=listHotels_search_byname]").css("display","inline-block");
                $("[DATI-ID=searchBarListHotels] [DATI-ID=listhotels_search_bycategory]").css("display","none");
                $("[DATI-ID=searchBarListHotels] [DATI-ID=listHotels_search_byreference]").css("display","none");
                var event = new CustomEvent("showAlerteDeleteHotel");
                document.dispatchEvent(event);


                dati_searchBar.UPDATE("searchBarListHotels");

            }

            if(page == "EditHotel"){
                var event = new CustomEvent("showInputHotelsEdit");
                document.dispatchEvent(event);
                var eventService = new CustomEvent("showServicesHotelsEdit");
                document.dispatchEvent(eventService);
                iHotel.GET_LIST_SERVICES();
                iHotel.GET_CHAIN();
                iHotel.GET_COUNTRY();
                iHotel.GET_CATEGORY();
                iHotel.GET_OFFRE_HOTEL();
                iHotel.GET_BUSSINESS_MANAGER();
                iHotel.GET_LANGUAGES();
                iHotel.GET_TIME_ZONE();
                setTimeout(function () {
                    hotelList_ui.fillPageEdit()
                },2000);

            }
            if(page == "DetailHotel"){
                var event = new CustomEvent("showInputHotelsDetail");
                document.dispatchEvent(event);
                setTimeout(function () {
                    hotelList_ui.fillPageDetails()
                },2000);
            }

            $("main").scrollTop( 0 );
         }, false);


    }


    EVENTS_SSAPI(){
        document.addEventListener("SSAPI_READY", function(e){
            iHotel.GET_ALL_HOTELS();
        });
        document.addEventListener("ListHotelsReceive", function(e){
            hotelList_ui.DATALIST(e.detail.res);
            chart_hotel_ui.UI_EVENT();
            $("[DATI-ID=pagination_hotelList]").attr("DATI-NBR-ROW",hotelList_ui.nbrRows);
            $("[DATI-ID=pagination_hotelList]").attr("DATI-TOTAL-PAGE",hotelList_ui.total);
            dati_pagination.UPDATE("pagination_hotelList");
            dati_table.UPDATE("hotelList");


        }, false);
        //************************************************DELETE DEVICES********************************************************
        document.addEventListener("HotelDeleted", function(e){
            var pos = hotelList_ui.GET_POSITION_IN_TAB(hotelList_ui.hotels,e.detail.res[0]);
            if(pos != -1){
                hotelList_ui.hotels.splice(pos, 1);
            }
            dati_table.UPDATE("hotelList");
            hotelList_ui.CANCEL_ALERTE();

        }, false);
        document.addEventListener("HotelDeleted_error", function(e){
            console.error(e.detail);
            alert("Failed to delete hotels");

        }, false);
        //************************************************SEARCH BY NAME***************************************************************
        document.addEventListener("ResearchByNameHotelsReceive", function(e){
            try {
                hotelList_ui.totalS = e.detail.res[0].count1;
                hotelList_ui.nbrRowsS = e.detail.res[0].quantity1;
                $("[DATI-ID=pagination_hotelList]").attr("DATI-NBR-ROW",hotelList_ui.nbrRowsS);
                $("[DATI-ID=pagination_hotelList]").attr("DATI-TOTAL-PAGE",hotelList_ui.totalS);
                dati_pagination.UPDATE("pagination_hotelList");
            }catch (e) {
                $("[DATI-ID=pagination_hotelList]").attr("DATI-NBR-ROW",0);
                $("[DATI-ID=pagination_hotelList]").attr("DATI-TOTAL-PAGE",0);
                dati_pagination.UPDATE("pagination_hotelList");
            }


            var event = new CustomEvent("ResearchByNameHotelsReceiveEvent", { detail: {list : e.detail.res} });
            document.dispatchEvent(event);


        }, false);

        document.addEventListener("ResearchByNameHotelsReceiveEvent", function(e){
            hotelList_ui.DATA_SEARCH(e.detail.list);
        }, false);

        document.addEventListener("ResearchByNameHotelsReceive_error", function(e){
            console.error(e.detail);

        }, false);

        //************************************************SEARCH BY REFERENCE***************************************************************
        document.addEventListener("ResearchByRefHotelsReceive", function(e){
            try {
                hotelList_ui.totalS = e.detail.res[0].count1;
                hotelList_ui.nbrRowsS = e.detail.res[0].quantity1;
                $("[DATI-ID=pagination_hotelList]").attr("DATI-NBR-ROW",hotelList_ui.nbrRowsS);
                $("[DATI-ID=pagination_hotelList]").attr("DATI-TOTAL-PAGE",hotelList_ui.totalS);
                dati_pagination.UPDATE("pagination_hotelList");
            }catch (e) {
                $("[DATI-ID=pagination_hotelList]").attr("DATI-NBR-ROW",0);
                $("[DATI-ID=pagination_hotelList]").attr("DATI-TOTAL-PAGE",0);
                dati_pagination.UPDATE("pagination_hotelList");
            }


            var event = new CustomEvent("ResearchByRefHotelsReceiveEvent", { detail: {list : e.detail.res} });
            document.dispatchEvent(event);


        }, false);

        document.addEventListener("ResearchByRefHotelsReceiveEvent", function(e){
            hotelList_ui.DATA_SEARCH(e.detail.list);
        }, false);

        document.addEventListener("ResearchByRefHotelsReceive_error", function(e){
            console.error(e.detail);

        }, false);
        //************************************************SEARCH BY CATEGORY***************************************************************
        document.addEventListener("ResearchByCatHotelsReceive", function(e){
            try {
                hotelList_ui.totalS = e.detail.res[0].count1;
                hotelList_ui.nbrRowsS = e.detail.res[0].quantity1;
                $("[DATI-ID=pagination_hotelList]").attr("DATI-NBR-ROW",hotelList_ui.nbrRowsS);
                $("[DATI-ID=pagination_hotelList]").attr("DATI-TOTAL-PAGE",hotelList_ui.totalS);
                dati_pagination.UPDATE("pagination_hotelList");
            }catch (e) {
                $("[DATI-ID=pagination_hotelList]").attr("DATI-NBR-ROW",0);
                $("[DATI-ID=pagination_hotelList]").attr("DATI-TOTAL-PAGE",0);
                dati_pagination.UPDATE("pagination_hotelList");
            }


            var event = new CustomEvent("ResearchByCatHotelsReceiveEvent", { detail: {list : e.detail.res} });
            document.dispatchEvent(event);


        }, false);

        document.addEventListener("ResearchByCatHotelsReceiveEvent", function(e){
            hotelList_ui.DATA_SEARCH(e.detail.list);
        }, false);

        document.addEventListener("ResearchByCatHotelsReceive_error", function(e){
            console.error(e.detail);

        }, false);

        //************************************************ACCESS HOTEL RECEIVE ***************************************************************
        document.addEventListener("HotelAccessReceive", function(e){
           console.log(e.detail.res[0].Owner,"acces hotel is here");
           var data = e.detail.res[0].Owner ;
            hotelList_ui.fillAccessEdit(data);
            hotelList_ui.fillAccessDetails(data);
        }, false);

        document.addEventListener("HotelAccessReceive_error", function(e){
            console.error(e.detail);

        }, false);
        //************************************************GET ALL FOR INPUTs ***************************************************************
        document.addEventListener("showServiceHotelsEdit", function(e){
            editHotel_ui.DATALISTServices(e.detail);
        }, false);
        document.addEventListener("chainReceiveEdit", function(e){
            editHotel_ui.DATALISTCHAIN(e.detail);
        }, false);
        document.addEventListener("starsReceiveEdit", function(e){
            editHotel_ui.DATALISTSTARS(e.detail);
        }, false);
        document.addEventListener("offreHotelReceiveEdit", function(e){
            editHotel_ui.DATALISTOFFREHOTEL(e.detail);
        }, false);
        document.addEventListener("countryReceiveEdit", function(e){
            editHotel_ui.DATALISTCOUNTRY(e.detail);
        }, false);
        document.addEventListener("BusinessManagerReceiveEdit", function(e){
            editHotel_ui.DATALISTBUSSINESMANAGER(e.detail);
        }, false);
        document.addEventListener("LanguageReceiveEdit", function(e){
            editHotel_ui.DATALISTLANGUAGES(e.detail);
        }, false);
        document.addEventListener("Time_zoneReceiveEdit", function(e){
            editHotel_ui.DATALISTTIMEZONE(e.detail);
        }, false);
    }
}

let iHotel = new imp_Hotel();