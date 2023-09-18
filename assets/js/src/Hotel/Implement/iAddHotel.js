class i_AddHotel{
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();

    }
    GET_LIST_SERVICES(){
        SSAPI.SUBMIT({
            uri:"/Service_type/getAll",
            onsuccess:"showServicesHotels",
            onerror:"showServicesHotels_error",
        });
    }
    GET_CHAIN(){
        SSAPI.SUBMIT({
            uri:"/Chain/getAll",
            onsuccess:"chainReceive",
            onerror:"chainReceive_error",
        });
    }
    GET_CATEGORY(){
        var eventStars = new CustomEvent("starsReceive", {
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
            onsuccess:"offreHotelReceive",
            onerror:"offreHotelReceive_error",
        });



    }
    GET_COUNTRY(){
        SSAPI.SUBMIT({
            uri:"/Country/getAll",
            onsuccess:"countryReceive",
            onerror:"countryReceive_error",
        });
    }
    GET_BUSSINESS_MANAGER(){
        SSAPI.SUBMIT({
            uri:"/Emp/getAllBusinessManager",
            onsuccess:"BusinessManagerReceive",
            onerror:"BusinessManagerReceive_error",
        });
    }
    GET_LANGUAGES(){
        SSAPI.SUBMIT({
            uri:"/Language/getAll",
            onsuccess:"LanguageReceive",
            onerror:"LanguageReceive_error",
        });
    }
    GET_TIME_ZONE(){
        SSAPI.SUBMIT({
            uri:"/Time_zone/getAll",
            onsuccess:"Time_zoneReceive",
            onerror:"Time_zoneReceive_error",
        });
    }

    ADD_HOTEL(offer_id,business_manager_id,country_id,chain_id,time_zone_id,name,stars,
              address,city,postal_code,capacity,tel_demande,tab_demande,logo,cover,prefix,country_id_responsable,
              name_responsable,email_responsable,login,password,languages,services,contacts){
        var data = {
            offer_id:offer_id,
            business_manager_id:business_manager_id,
            country_id:country_id,
            chain_id:chain_id,
            time_zone_id:time_zone_id,
            name:name,
            stars:stars,
            address:address,
            city:city,
            postal_code:postal_code,
            capacity:capacity,
            tel_demande:tel_demande,
            tab_demande:tab_demande,
            logo:logo,
            cover:cover,
            prefix:prefix,
            country_id_responsable:country_id_responsable,
            name_responsable:name_responsable,
            email_responsable:email_responsable,
            login:login,
            password:password,
            languages:languages,
            services:services,
            contacts:contacts
        };
        SSAPI.SUBMIT({
            uri:"/Hotel/add",
            onsuccess:"addHotelSuccess",
            onerror:"addHotelSuccess_error",
            data:data
        });

        console.log(data,'daataa add Provider');


    }
    GET_HOTEL_ADDED(id){
        var id = parseInt(id);
        console.log(id,"from addddddd");
        SSAPI.SUBMIT({
            uri:"/Hotel/getById",
            data:{
                id:id,
            },
            onsuccess:"HotelAddedReceive",
            onerror:"HotelAddedReceive_error",
        });
    }
    GET_HOTEL_PRIMARY_LANGUAGE(id){
        var id = parseInt(id);
        console.log(id,"lang prim addddddd");
        SSAPI.SUBMIT({
            uri:"/Hotel_language/getPrimaryLanguage",
            data:{
                hotel_id:id,
            },
            onsuccess:"PrimaryLanguageReceive",
            onerror:"PrimaryLanguageReceive_error",
        });
    }
    EVENTS_UI(){

        document.addEventListener("SHOW_PAGE", function(e){

            var page = e.detail.pageLink;
            if(page == "AddHotel" ){
                console.log(page,"page22222");
                var event = new CustomEvent("showInputHotels");
                document.dispatchEvent(event);
                var eventServices = new CustomEvent("showServicesHotels");
                document.dispatchEvent(eventServices);
                var eventLanguage = new CustomEvent("showInputHotelsLanguage");
                document.dispatchEvent(eventLanguage);


                IAddHotel.GET_LIST_SERVICES();
                IAddHotel.GET_CHAIN();
                IAddHotel.GET_COUNTRY();
                IAddHotel.GET_CATEGORY();
                IAddHotel.GET_OFFRE_HOTEL();
                IAddHotel.GET_BUSSINESS_MANAGER();
                IAddHotel.GET_LANGUAGES();
                IAddHotel.GET_TIME_ZONE();
            }
            if(page != "AddHotel" ){
                dati_multichoose.defaultLnagugeList = [];
                dati_multichoose.defaultLnagugeListDB = [];
                dati_multichoose.primaryLanguage = [];
                DatiListApplications_ui.listServiceDB=[]
            }


        }, false);



    }


    EVENTS_SSAPI(){
        document.addEventListener("showServicesHotels", function(e){
            addHotel_ui.DATALIST(e.detail);
        }, false);
        document.addEventListener("chainReceive", function(e){
            addHotel_ui.DATALISTCHAIN(e.detail);
        }, false);
        document.addEventListener("starsReceive", function(e){
            addHotel_ui.DATALISTSTARS(e.detail);
        }, false);
        document.addEventListener("offreHotelReceive", function(e){
            addHotel_ui.DATALISTOFFREHOTEL(e.detail);
        }, false);
        document.addEventListener("countryReceive", function(e){
            addHotel_ui.DATALISTCOUNTRY(e.detail);
        }, false);
        document.addEventListener("offreHotelReceive_error", function(e){
            console.error(e.detail);
        }, false);
        document.addEventListener("BusinessManagerReceive", function(e){
            addHotel_ui.DATALISTBUSSINESMANAGER(e.detail);
        }, false);
        document.addEventListener("LanguageReceive", function(e){
            addHotel_ui.DATALISTLANGUAGES(e.detail);
        }, false);
        document.addEventListener("Time_zoneReceive", function(e){
            addHotel_ui.DATALISTTIMEZONE(e.detail);
        }, false);
        document.addEventListener("addHotelSuccess", function(e){
            console.log(e.detail.res,"idddd");
           /* addProvider_ui.SHOW_POPUP_SUCCESS("Add Hotel With Success!");*/
            $("[DATI-PAGE]").css("display", "none");
            $("[DATI-PAGE=SuccessAddHotel]").css("display", "flex");
            //Show Page
            var event = new CustomEvent("SHOW_PAGE", {
                detail: {
                    pageLink: "SuccessAddHotel",
                    pagePath: "SuccessAddHotel"
                }
            });
            document.dispatchEvent(event);
            $("[dati-current-pathname]").html(" Hotel &nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;SuccessAddHotel");

            var eventHotel = new CustomEvent("GET_HOTEL_ADEED", { detail: {list : e.detail.res} });
            document.dispatchEvent(eventHotel);

        }, false);

        document.addEventListener("GET_HOTEL_ADEED", function(e){
            console.log(e.detail.list,"dkhalllllll");
            IAddHotel.GET_HOTEL_ADDED(e.detail.list);
            IAddHotel.GET_HOTEL_PRIMARY_LANGUAGE(e.detail.list);
        }, false);
                 /* HOTEL ADDED*/
        document.addEventListener("HotelAddedReceive", function(e){
            addHotel_ui.HOTEL_ADDED_RECEIVE(e.detail);
            addHotel_ui.fillPageSuccess()
        }, false);
        document.addEventListener("HotelAddedReceive_error", function(e){
            console.error(e.detail);
        }, false);
                /* PRIMARY LANGUAGE HOTEL*/
        document.addEventListener("PrimaryLanguageReceive", function(e){
            addHotel_ui.HOTEL_PRIMARY_LANGUAGE_RECEIVE(e.detail);
        }, false);
        document.addEventListener("PrimaryLanguageReceive_error", function(e){
            console.error(e.detail);
        }, false);
        document.addEventListener("addHotelSuccess_error", function(e){
            console.error(e.detail);
            addProvider_ui.SHOW_POPUP_ERROR("Hotel Add  Failed!");
        }, false);

        
    }
}

let IAddHotel= new  i_AddHotel();