class imp_Guest{
    constructor() {
       this.EVENTS_UI();
       this.EVENTS_SSAPI();
    }

    GET_ALL_GUESTS(){
        var page_nbr = 0;
        try {
            var page_nbr = $(document.querySelectorAll("[dati-id=pagination_guestList]")[0]).find("[dati_composent=PAGES]").val();
            if(!page_nbr){
                page_nbr = 0;
            }
        }catch (e) {
            page_nbr = 0
        }

        if(guestList_ui.lastSearchBy != ""){
            if(guestList_ui.lastSearchBy == "roomNumber"){
                this.GET_GUESTS_BY_ROOM_NUMBER($("[DATI-ID=listguests_search_byroom]").val(),true);
            }
            if(guestList_ui.lastSearchBy == "guestName"){
                this.GET_GUESTS_BY_GUEST_NAME($("[DATI-ID=listguests_search_byname]").val(),true);
            }

            return false;
        }

        SSAPI.SUBMIT({
            uri:"/Guest/getAll",
            data:{
                pagination:{
                    page: page_nbr,
                    quantity:guestList_ui.nbrRows
                }
            },
            onsuccess:"ListGuestsReceive",
            onerror:"ListGuestsReceive_error"
        })
    };

    GET_ALL_GUESTS2(){
        var page_nbr = 0;
        guestList_ui.lastSearchBy="";
        $("[DATI-ID=guestList]").attr("header_created",true);
        dati_table.init("guestList");

        SSAPI.SUBMIT({
            uri:"/Guest/getAll",
            data:{
                pagination:{
                    page: page_nbr,
                    quantity:guestList_ui.nbrRows
                }
            },
            onsuccess:"ListGuestsReceive",
            onerror:"ListGuestsReceive_error"
        })
    };


    DELETE_GUEST(id){
        console.log(id,"front id guest to delete");
        SSAPI.SUBMIT({
            uri:"/Guest/delete",
            onsuccess:"GuestDeleted",
            onerror:"GuestDeleted_error",
            data:{
                guest_id:id
            }
        })
    }

    GET_GUESTS_BY_ROOM_NUMBER(val,page){
        guestList_ui.lastSearchBy="roomNumber";
        if(page){
            var page_nbr = 0;

            try {
                var page_nbr = $(document.querySelectorAll("[dati-id=pagination_guestList]")[0]).find("[dati_composent=PAGES]").val();
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
            uri:"/Guest/getByRoom_number",
            onsuccess:"ResearchByRoomNumberGuestsReceive",
            data:{
                room_number:val,
                pagination:{
                    page: page_nbr,
                    quantity:guestList_ui.nbrRowsS
                }
            }
        })
    }

    GET_GUESTS_BY_GUEST_NAME(val,page){
        guestList_ui.lastSearchBy="guestName";
        if(page){
            var page_nbr = 0;
            try {
                var page_nbr = $(document.querySelectorAll("[dati-id=pagination_guestList]")[0]).find("[dati_composent=PAGES]").val();
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
            uri:"/Guest/getByName",
            onsuccess:"ResearchGuestsReceive",
            data:{
                name:val,
                pagination:{
                    page: page_nbr,
                    quantity:guestList_ui.nbrRowsS
                }
            }
        })
    }
   /* GET_GUESTS_BY_DEVICE_IMEI(val){
        SSAPI.SUBMIT({
            uri:"/Guest/getByDeviceIMEI",
            onsuccess:"ResearchGuestsReceive",
            data:{
                imei:val
            }
        })
    }*/

    EVENTS_UI(){
        $(document).on('keyup','[DATI-ID=listguests_search_byroom]',function(){
            guestList_ui.lastSearchBy="roomNumber";
            var val = $(this).val();
            if(val.length > 0){
                $("[DATI-ID=guestList]").attr("header_created",true);
                dati_table.init("guestList");
                iGuest.GET_GUESTS_BY_ROOM_NUMBER(val,false);
            }else if(val.length < 1){
                guestList_ui.lastSearchBy="";
                $("[DATI-ID=guestList]").attr("header_created",true);
                dati_table.init("guestList");
                iGuest.GET_ALL_GUESTS();
            }
            console.log(guestList_ui.guests,"layess num room");
        });

        $(document).on('keyup','[DATI-ID=listguests_search_byname]',function(){
            guestList_ui.lastSearchBy="guestName";
            var val = $(this).val();
            console.log(val,"zzzzaaaaaaa");
            if(val.length > 1){
                $("[DATI-ID=guestList]").attr("header_created",true);
                dati_table.init("guestList");
                iGuest.GET_GUESTS_BY_GUEST_NAME(val,false);
            }else if(val.length < 1){
                guestList_ui.lastSearchBy="";
                $("[DATI-ID=guestList]").attr("header_created",true);
                dati_table.init("guestList");
                iGuest.GET_ALL_GUESTS();
            }
        });

        document.addEventListener("SHOW_PAGE", function(e){
            var page = e.detail.pageLink;
            if(page == "AddGuest"){
                iRoom.GET_RD_WITHOUT_GUEST();
            }

            if(page == "EditGuest"){
                iRoom.GET_RD_WITHOUT_GUEST();
            }

            if(page == "detailsGuest"){
                guestList_ui.fillPageDetail();
                var event = new CustomEvent("showAlerteCheckOutGuest");
                document.dispatchEvent(event);

                var event1 = new CustomEvent("showAlerteResetPasswordGuest");
                document.dispatchEvent(event1);
            }

            if(page == "EditGuest"){
                guestList_ui.fillPageEditGuest();

            }
            if (page != "AddGuest"){
                dati_add_guest.msgErreurAddGuest = [];
                dati_Erreurs.UPDATE("AddGuestErreurs");
            }

            if (page != "EditGuest"){
                dati_edit_guest.msgErreurUpdateGuest = [];
                dati_Erreurs.UPDATE("UpdateGuestErreurs");
            }

            if(page == "ListGuests"){
                guestList_ui.lastSearchBy = "";
                //$("[DATI-ID=guestList]").attr("header_created",false);
                dati_table.init("guestList");
                var event1 = new CustomEvent("GuestListPageReady");
                document.dispatchEvent(event1);

                $("[DATI-ID=searchBarGuestList] [DATI-ID=listguests_search_byname]").css("display","inline-block");
                $("[DATI-ID=searchBarGuestList] [DATI-ID=listguests_search_byroom]").css("display","none");
                // CALL SSAPI  DEVICE GET LIST
                // event success ListDevicesReceive
                var event = new CustomEvent("showAlerteDeleteGuest");
                document.dispatchEvent(event);

               iGuest.GET_ALL_GUESTS();
               dati_searchBar.UPDATE("searchBarGuestList");


            }
         }, false);
    }


    EVENTS_SSAPI(){
        document.addEventListener("ListGuestsReceive", function(e){
            console.log(e.detail);
            guestList_ui.INIT_dataTable();
            guestList_ui.DATALIST(e.detail);
            $("[DATI-ID=pagination_guestList]").attr("DATI-NBR-ROW",guestList_ui.nbrRows);
            $("[DATI-ID=pagination_guestList]").attr("DATI-TOTAL-PAGE",guestList_ui.total);
            dati_pagination.UPDATE("pagination_guestList");
            //guestList_ui.total=e.detail.total;
         }, false);

        document.addEventListener("ListGuestsReceive_error", function(e){
            console.log(e.detail);
            //guestList_ui.total=e.detail.total;
         }, false);

        document.addEventListener("GuestAdded", function(e){

           dati_add_guest.RESET_FORM_ADD();
           dati_add_guest.SHOW_POPUP_SUCCESS();
        }, false);
        document.addEventListener("GuestAdded_error", function(e){
            console.log(e);
            if (e.detail.error_code=="2004"){
                dati_add_guest.SHOW_POPUP_ERROR("The room is affected to another guest");
            }

        }, false);


        document.addEventListener("GuestUpdated", function(e){

            dati_add_guest.SHOW_POPUP_SUCCESS();
        }, false);
        document.addEventListener("GuestUpdated_error", function(e){
            console.log(e.detail);
            dati_add_guest.SHOW_POPUP_ERROR()
        }, false);

        document.addEventListener("GuestDeleted", function(e){
            console.log(e.detail.res[0],"deleted guest id");
            guestList_ui.DELETE_ID_FROM_DATATABLE(e.detail.res[0]);
        }, false);

        document.addEventListener("GuestDeleted_error", function(e){
            console.log(e.detail);
        }, false);




        document.addEventListener("Guest_Password_cleared", function(e){
            console.log("id guest to delete password",e.detail.res);
            guestList_ui.DELETE_PASSWORD_FROM_DATATABLE(e.detail.res);
        }, false);

        document.addEventListener("Guest_Password_cleared_error", function(e){

        }, false);

        document.addEventListener("Guest_CheckOut", function(e){
            console.log("id guest to delete residence",e.detail.res);
            guestList_ui.DELETE_RESIDENCE_FROM_DATATABLE(e.detail.res);
        }, false);

        document.addEventListener("Guest_CheckOut_error", function(e){
            console.log(e.detail);
        }, false);





        document.addEventListener("ResearchGuestsReceive", function(e){
            guestList_ui.INIT_dataTable();
            try {
                guestList_ui.totalS = e.detail.res[0].count1;
                guestList_ui.nbrRowsS = e.detail.res[0].quantity1;
                $("[DATI-ID=pagination_guestList]").attr("DATI-NBR-ROW",guestList_ui.nbrRowsS);
                $("[DATI-ID=pagination_guestList]").attr("DATI-TOTAL-PAGE",guestList_ui.totalS);
                dati_pagination.UPDATE("pagination_guestList");
            }catch (e) {
                $("[DATI-ID=pagination_guestList]").attr("DATI-NBR-ROW","0");
                $("[DATI-ID=pagination_guestList]").attr("DATI-TOTAL-PAGE","0");
                dati_pagination.UPDATE("pagination_guestList");
            }


            var event = new CustomEvent("searchByGuestNameEvent", { detail: {list : e.detail.res} });
            document.dispatchEvent(event);






        }, false);

        document.addEventListener("searchByGuestNameEvent", function(e){
            guestList_ui.RESEARCH_BY_GUEST(e.detail.list);
            console.log(e.detail.list,"maryoumyeeeet");


        }, false);

        document.addEventListener("ResearchByRoomNumberGuestsReceive", function(e){
            guestList_ui.INIT_dataTable();
            try {
                guestList_ui.totalS = e.detail.res[0].count1;
                guestList_ui.nbrRowsS = e.detail.res[0].quantity1;
                $("[DATI-ID=pagination_guestList]").attr("DATI-NBR-ROW",guestList_ui.nbrRowsS);
                $("[DATI-ID=pagination_guestList]").attr("DATI-TOTAL-PAGE",guestList_ui.totalS);
                dati_pagination.UPDATE("pagination_guestList");
            }catch (e) {
                $("[DATI-ID=pagination_guestList]").attr("DATI-NBR-ROW",0);
                $("[DATI-ID=pagination_guestList]").attr("DATI-TOTAL-PAGE",0);
                dati_pagination.UPDATE("pagination_guestList");
            }

            var event = new CustomEvent("searchByRoomNumberEvent", { detail: {list : e.detail.res} });
            document.dispatchEvent(event);


        }, false);

        document.addEventListener("searchByRoomNumberEvent", function(e){
            guestList_ui.RESEARCH_BY_ROOM_NUMBER(e.detail.list);
            console.log(e.detail.list,"maryoumyeeeet");


        }, false);
    }
}

let iGuest = new imp_Guest();