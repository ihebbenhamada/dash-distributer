class imp_Room{
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();
    }

    AVAILABLE_ROOMS(){
        SSAPI.SUBMIT({
            uri:"/Residence/emptyRoom",
            onsuccess:"ListAvailableRoom",
            onerror:"ListAvailableRoom_error",
        })
    }

    DELETE_ROOM(id){
        SSAPI.SUBMIT({
            uri:"/Room/delete",
            onsuccess:"RoomDeleted",
            onerror:"RoomDeleted_error",
            data:{
                room_id:id
            }
        })
    }

    GET_ROOMS_LINKED_TO_DEVICE(){
        SSAPI.SUBMIT({
            uri:"/Room/getAllRD",
            onsuccess:"ListRoomsLinkedToDeviceReceive",
            onerror:"ListRoomsLinkedToDeviceReceive_error",
        })
    }

    GET_ALL_ROOMS2(){
        var page_nbr = 0;
        roomList_ui.lastSearchBy="";
        $("[DATI-ID=roomList]").attr("header_created",true);
        dati_table.init("roomList");
        SSAPI.SUBMIT({
            uri:"/Room/getAll",
            data:{
                pagination:{
                    page: page_nbr,
                    quantity:roomList_ui.nbrRows
                }
            },
            onsuccess:"ListRoomsReceive",
            onerror:"ListRoomsReceive_error",
        })
    }

    GET_ALL_ROOMS(){
        var page_nbr = 0;
        try {
            var page_nbr = $(document.querySelectorAll("[dati-id=pagination_roomList]")[0]).find("[dati_composent=PAGES]").val();
            if(!page_nbr){
                page_nbr = 0;
            }
        }catch (e) {
            page_nbr = 0
        }
        if(roomList_ui.lastSearchBy != ""){
            if(roomList_ui.lastSearchBy == "roomNumber"){
                this.GET_ROOMS_BY_ROOM_NUMBER($("[DATI-ID=listrooms_search_byroomnumber]").val(),true);
            }
            if(roomList_ui.lastSearchBy == "guestName"){
                this.GET_ROOMS_BY_GUEST_NAME($("[DATI-ID=listrooms_search_byguestname]").val(),true);
            }
            if(roomList_ui.lastSearchBy == "occuped"){
                this.GET_OCCUPED_ROOMS($("[DATI-ID=listRooms_byStatus]").val(),true);
            }
            if(roomList_ui.lastSearchBy == "free"){
                this.GET_FREE_ROOMS($("[DATI-ID=listRooms_byStatus]").val(),true);
            }

            return false;
        }
        SSAPI.SUBMIT({
            uri:"/Room/getAll",
            data:{
                pagination:{
                    page: page_nbr,
                    quantity:roomList_ui.nbrRows
                }
            },
            onsuccess:"ListRoomsReceive",
            onerror:"ListRoomsReceive_error",
        })
    }

    GET_ROOMS_BY_GUEST_NAME(val,page){
        roomList_ui.lastSearchBy="guestName";
        console.log(val,page);
        if(page){
            var page_nbr = 0;
            try {
                var page_nbr = $(document.querySelectorAll("[dati-id=pagination_roomList]")[0]).find("[dati_composent=PAGES]").val();
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
            uri:"/Room/getByName",
            onsuccess:"ResearchRoomsReceive",
            onerror:"ResearchRoomsReceive_error",

            data:{
                name:val,
                pagination:{
                    page: page_nbr,
                    quantity:roomList_ui.nbrRowsS
                }
            }
        })
    }

    GET_ROOMS_BY_ROOM_NUMBER(val,page){
        roomList_ui.lastSearchBy="roomNumber";
        console.log(val,page);
        if(page) {
            var page_nbr = 0;
            try {
                var page_nbr = $(document.querySelectorAll("[dati-id=pagination_roomList]")[0]).find("[dati_composent=PAGES]").val();
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
            uri:"/Room/getByNumber",
            onsuccess:"ResearchByNumberRoomsReceive",
            onerror:"ResearchByNumberRoomsReceive_error",

            data:{
                room_number:val,
                pagination:{
                    page: page_nbr,
                    quantity:roomList_ui.nbrRowsS
                }
            }
        })
    }

    GET_OCCUPED_ROOMS(val,page){
        roomList_ui.lastSearchBy="occuped";
        console.log(val,"mamamamamama");
        if(page){
            var page_nbr = 0;
            try {
                var page_nbr = $(document.querySelectorAll("[dati-id=pagination_roomList]")[0]).find("[dati_composent=PAGES]").val();
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
            uri:"/Room/getByStatus",
            onsuccess:"ResearchRoomsOccupedReceive",
            onerror:"ResearchRoomsOccupedReceive_error",
            data:{
                //*******************************A FAIRE******************************//
                status:val,
                pagination:{
                    page: page_nbr,
                    quantity:roomList_ui.nbrRowsS
                }
            }
        })
    }

    GET_FREE_ROOMS(val,page){
        console.log(val,page);
        roomList_ui.lastSearchBy="free";
        if(page){
            var page_nbr = 0;
            try {
                var page_nbr = $(document.querySelectorAll("[dati-id=pagination_roomList]")[0]).find("[dati_composent=PAGES]").val();
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
            uri:"/Room/getByStatus",
            onsuccess:"ResearchRoomsFreeReceive",
            onerror:"ResearchRoomsFreeReceive_error",
            data:{
                //*******************************A FAIRE******************************//
                status:val,
                pagination:{
                    page: page_nbr,
                    quantity:roomList_ui.nbrRowsS
                }
            }
        })
    }

    GET_RD_WITHOUT_GUEST(){
        SSAPI.SUBMIT({
            uri:"/Room/getAllRDWithoutGuest",
            onsuccess:"allRDwithoutGuestReceive",
            onerror:"allRDwithoutGuestReceive_error"
        })
    }

    EVENTS_UI(){

        $(document).on('keyup','[DATI-ID=listrooms_search_byroomnumber]',function(){
            roomList_ui.lastSearchBy ="roomNumber";
            var val = $(this).val();
            if(val.length > 0){
                $("[DATI-ID=roomList]").attr("header_created",true);
                dati_table.init("roomList");
                iRoom.GET_ROOMS_BY_ROOM_NUMBER(val,false);
            }else{
                roomList_ui.lastSearchBy="";
                $("[DATI-ID=roomList]").attr("header_created",true);
                dati_table.init("roomList");
                iRoom.GET_ALL_ROOMS();
            }
        });

        $(document).on('keyup','[DATI-ID=listrooms_search_byguestname]',function(){
            roomList_ui.lastSearchBy="guestName";
            var val = $(this).val();
            if(val.length > 1){
                //submit search byroom lunch event update ListGuestsReceive
                $("[DATI-ID=roomList]").attr("header_created",true);
                dati_table.init("roomList");
                iRoom.GET_ROOMS_BY_GUEST_NAME(val,false);
            }else if(val.length < 1){
                roomList_ui.lastSearchBy="";
                $("[DATI-ID=roomList]").attr("header_created",true);
                dati_table.init("roomList");
                iRoom.GET_ALL_ROOMS();
            }
        });

        $(document).on('change','[DATI-ID=listRooms_byStatus]',function(){
            var val = $(this).val();
            console.log(val,"vaaaaaaaaaaaaaal");
            switch (val) {
                case "0":
                    roomList_ui.lastSearchBy="";
                    $("[DATI-ID=roomList]").attr("header_created",true);
                    dati_table.init("roomList");
                    iRoom.GET_ALL_ROOMS();
                    break;
                case "2":
                    roomList_ui.lastSearchBy == "occuped"
                    $("[DATI-ID=roomList]").attr("header_created",true);
                    dati_table.init("roomList");
                    iRoom.GET_OCCUPED_ROOMS(2,false);
                    break;
                case "1":
                    roomList_ui.lastSearchBy == "free";
                    $("[DATI-ID=roomList]").attr("header_created",true);
                    dati_table.init("roomList");
                    iRoom.GET_FREE_ROOMS(1,false);
                    break;
                default:
                    roomList_ui.lastSearchBy="";
                    $("[DATI-ID=roomList]").attr("header_created",true);
                    dati_table.init("roomList");
                    iRoom.GET_ALL_ROOMS();
                    break;
            }
        });

        document.addEventListener("SHOW_PAGE", function(e){
            var page = e.detail.pageLink;
            if(page == "DetailRoom"){
                roomList_ui.fillPageDetail();
            }
            if (page != "AddRoom"){
                dati_add_room.msgErreurAddRoom = [];
                dati_Erreurs.UPDATE("AddRoomErreurs");
            }

            if(page == "AddRoom"){
                var event = new CustomEvent("ShowSwitcherAddRoom");
                document.dispatchEvent(event);
                iDevice.AVAILABLE_DEVICES();
            }

            if(page == "EditRoom"){
                roomList_ui.fillPageEditRoom();
                iDevice.AVAILABLE_DEVICES();
                var event = new CustomEvent("ShowSwitcherEditRoom");
                document.dispatchEvent(event);
            }else {
                dati_edit_room.msgErreurUpdateRoom=[];
                dati_Erreurs.UPDATE("UpdateRoomErreurs");
            }
            if(page == "ListRooms"){

                roomList_ui.lastSearchBy = "";
                dati_table.init("roomList");

                var event1 = new CustomEvent("RoomListPageReady");
                document.dispatchEvent(event1);

                $("[DATI-ID=searchBarRoomList] [DATI-ID=listrooms_search_byroomnumber]").css("display","inline-block");
                $("[DATI-ID=searchBarRoomList] [DATI-ID=listrooms_search_byguestname]").css("display","none");
                $("[DATI-ID=searchBarRoomList] [DATI-ID=listRooms_byStatus]").css("display","none");
                // CALL SSAPI  DEVICE GET LIST
                // event success ListDevicesReceive
                var event = new CustomEvent("showAlerteDeleteRoom");
                document.dispatchEvent(event);
                iRoom.GET_ALL_ROOMS();
                dati_searchBar.UPDATE("searchBarRoomList");
            }
        }, false);
    }


    EVENTS_SSAPI(){

        document.addEventListener("ListRoomsReceive", function(e){

            roomList_ui.DATALIST(e.detail.res);

            $("[DATI-ID=pagination_roomList]").attr("DATI-NBR-ROW",roomList_ui.nbrRows);
            $("[DATI-ID=pagination_roomList]").attr("DATI-TOTAL-PAGE",roomList_ui.total);
            dati_pagination.UPDATE("pagination_roomList");
            //roomList_ui.total=e.detail.total;
        }, false);

        document.addEventListener("ListRoomsLinkedToDeviceReceive", function(e){
            swapDevice_ui.GET_ALL_ROOMS_LINKED_TO_DEVICE(e.detail.res);
            console.log(e.detail.res);
        }, false);

        document.addEventListener("ListAvailableRoom", function(e){
            roomList_ui.DATALIST_AVAILABLE(e.detail.res);
            guestList_ui.DATALIST_AVAILABLE_ROOM_EDIT(e.detail.res);
            //dati_add_guest.REFERESH_ROOMS();


        }, false);

        document.addEventListener("RoomAdded", function(e){

            dati_add_room.RESET_ADD_FORM_ROOM();
            dati_add_guest.SHOW_POPUP_SUCCESS();
        }, false);

        document.addEventListener("RoomAdded_error", function(e){
            dati_add_guest.SHOW_POPUP_ERROR();
            console.log(e.detail);
        }, false);

        document.addEventListener("RoomUpdated", function(e){

            dati_add_guest.SHOW_POPUP_SUCCESS_UPDATE();
        }, false);

        document.addEventListener("RoomUpdated_error", function(e){
            console.log(e.detail);
            dati_add_guest.SHOW_POPUP_ERROR()
        }, false);

        document.addEventListener("RoomDeleted", function(e){
            roomList_ui.DELETE_ID_FROM_DATATABLE(e.detail.res[0]);
        }, false);

        document.addEventListener("RoomDeleted_error", function(e){

        }, false);



        document.addEventListener("ResearchRoomsReceive", function(e){

            try {
                roomList_ui.totalS = e.detail.res[0].count1;
                roomList_ui.nbrRowsS = e.detail.res[0].quantity1;
                $("[DATI-ID=pagination_roomList]").attr("DATI-NBR-ROW",roomList_ui.nbrRowsS);
                $("[DATI-ID=pagination_roomList]").attr("DATI-TOTAL-PAGE",roomList_ui.totalS);
                dati_pagination.UPDATE("pagination_roomList");
            }catch (e) {
                $("[DATI-ID=pagination_roomList]").attr("DATI-NBR-ROW",0);
                $("[DATI-ID=pagination_roomList]").attr("DATI-TOTAL-PAGE",0);
                dati_pagination.UPDATE("pagination_roomList");
            }

            var event = new CustomEvent("searchRoomByGuestNameEvent", { detail: {list : e.detail.res} });
            document.dispatchEvent(event);


        }, false);
        document.addEventListener("searchRoomByGuestNameEvent", function(e){
            roomList_ui.RESEARCH_BY_GUEST(e.detail.list);
            console.log(e.detail.list,"maryoumyeeeet");


        }, false);

        document.addEventListener("ResearchByNumberRoomsReceive", function(e){

            try {
                roomList_ui.totalS = e.detail.res[0].count1;
                roomList_ui.nbrRowsS = e.detail.res[0].quantity1;
                $("[DATI-ID=pagination_roomList]").attr("DATI-NBR-ROW",roomList_ui.nbrRowsS);
                $("[DATI-ID=pagination_roomList]").attr("DATI-TOTAL-PAGE",roomList_ui.totalS);
                dati_pagination.UPDATE("pagination_roomList");
            }catch (e) {
                $("[DATI-ID=pagination_roomList]").attr("DATI-NBR-ROW",0);
                $("[DATI-ID=pagination_roomList]").attr("DATI-TOTAL-PAGE",0);
                dati_pagination.UPDATE("pagination_roomList");
            }
            var event = new CustomEvent("searchRoomByRoomNumberEvent", { detail: {list : e.detail.res} });
            document.dispatchEvent(event);


        }, false);
        document.addEventListener("searchRoomByRoomNumberEvent", function(e){
            roomList_ui.RESEARCH_BY_ROOM_NUMBER(e.detail.list);
            console.log(e.detail.list,"maryoumyeeeet");


        }, false);

        document.addEventListener("allRDwithoutGuestReceive", function(e){
            swapDevice_ui.DATALIST_AVAILABLE_WITHOUT_GUEST(e.detail.res);
            dati_add_guest.DATALIST_AVAILABLE_WITHOUT_GUEST(e.detail.res);
            dati_edit_guest.DATALIST_AVAILABLE_WITHOUT_GUEST(e.detail.res);
        }, false);

        document.addEventListener("allRDwithoutGuestReceive_error", function(e){

        }, false);

        document.addEventListener("ResearchRoomsOccupedReceive", function(e){

            try {
                roomList_ui.totalS = e.detail.res[0].count1;
                roomList_ui.nbrRowsS = e.detail.res[0].quantity1;
                $("[DATI-ID=pagination_roomList]").attr("DATI-NBR-ROW",roomList_ui.nbrRowsS);
                $("[DATI-ID=pagination_roomList]").attr("DATI-TOTAL-PAGE",roomList_ui.totalS);
                dati_pagination.UPDATE("pagination_roomList");
            }catch (e) {
                $("[DATI-ID=pagination_roomList]").attr("DATI-NBR-ROW",0);
                $("[DATI-ID=pagination_roomList]").attr("DATI-TOTAL-PAGE",0);
                dati_pagination.UPDATE("pagination_roomList");
            }
            var event = new CustomEvent("ResearchRoomsOccupedReceiveEvent", { detail: {list : e.detail.res} });
            document.dispatchEvent(event);


        }, false);

        document.addEventListener("ResearchRoomsOccupedReceiveEvent", function(e){
            roomList_ui.RESEARCH_OCCUPED(e.detail.list);
            console.log(e.detail.list,"maryoumyeeeet");


        }, false);

        document.addEventListener("ResearchRoomsFreeReceive", function(e){

            try {
                roomList_ui.totalS = e.detail.res[0].count1;
                roomList_ui.nbrRowsS = e.detail.res[0].quantity1;
                $("[DATI-ID=pagination_roomList]").attr("DATI-NBR-ROW",roomList_ui.nbrRowsS);
                $("[DATI-ID=pagination_roomList]").attr("DATI-TOTAL-PAGE",roomList_ui.totalS);
                dati_pagination.UPDATE("pagination_roomList");
            }catch (e) {
                $("[DATI-ID=pagination_roomList]").attr("DATI-NBR-ROW",0);
                $("[DATI-ID=pagination_roomList]").attr("DATI-TOTAL-PAGE",0);
                dati_pagination.UPDATE("pagination_roomList");
            }
            var event = new CustomEvent("ResearchRoomsFreeReceiveEvent", { detail: {list : e.detail.res} });
            document.dispatchEvent(event);


        }, false);
        document.addEventListener("ResearchRoomsFreeReceiveEvent", function(e){
            roomList_ui.RESEARCH_FREE(e.detail.list);
            console.log(e.detail.list,"maryoumyeeeet");


        }, false);
    }


}



let iRoom = new imp_Room();