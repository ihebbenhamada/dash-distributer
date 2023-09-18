class imp_Offre{
    constructor() {
       this.EVENTS_UI();
       this.EVENTS_SSAPI();
    }

    GET_ALL_OFFRES(){
        var page_nbr = 0;
        try {
            var page_nbr = $(document.querySelectorAll("[dati-id=pagination_OffreList]")[0]).find("[dati_composent=PAGES]").val();
            if(!page_nbr){
                page_nbr = 0;
            }
        }catch (e) {
            page_nbr = 0
        }

        if(offreList_ui.lastSearchBy != ""){
            if(offreList_ui.lastSearchBy == "name"){
                this.GET_OFFRES_BY_NAME($("[DATI-ID=listOffre_search_byName]").val(),true);
            }

            if(offreList_ui.lastSearchBy == "price"){
                this.GET_OFFRES_BY_PRICE($("[DATI-ID=listOffre_search_byPrice]").val(),true);
            }

            if(offreList_ui.lastSearchBy == "hotel"){
                this.GET_OFFRES_BY_HOTEL($("[DATI-ID=listOffre_search_byHotel]").val(),true);
            }

            if(offreList_ui.lastSearchBy == "equiped_room"){
                this.GET_OFFRES_BY_EQUIPED_ROOM($("[DATI-ID=listOffre_search_byEquipedRoom]").val(),true);
            }

            if(offreList_ui.lastSearchBy == "status"){
                this.GET_OFFRES_BY_STATUS($("[DATI-ID=listOffre_search_byStatus]").val(),true);
            }


            return false;
        }

    /*    SSAPI.SUBMIT({
            uri:"/hOTEL/getAll",
            data:{
                pagination:{
                    page: page_nbr,
                    quantity:guestList_ui.nbrRows
                }
            },
            onsuccess:"ListGuestsReceive",
            onerror:"ListGuestsReceive_error"
        })*/
        var event = new CustomEvent("ListOffreReceive", {
            detail: {
                res:[{
                    id:1,
                    name:"Starter",
                    price:"90 Dt/c/m",
                    hotel:"Business",
                    equiped_room:"250",
                    status:"Active",
                },{
                    id:2,
                    name:"Starter",
                    price:"90 Dt/c/m",
                    hotel:"Business",
                    equiped_room:"250",
                    status:"Active",
                },{
                    id:3,
                    name:"Starter",
                    price:"90 Dt/c/m",
                    hotel:"Business",
                    equiped_room:"250",
                    status:"Active",
                },{
                    id:4,
                    name:"Starter",
                    price:"90 Dt/c/m",
                    hotel:"Business",
                    equiped_room:"250",
                    status:"Active",
                },{
                    id:5,
                    name:"Starter",
                    price:"90 Dt/c/m",
                    hotel:"Business",
                    equiped_room:"250",
                    status:"Active",
                }
                    ,{
                        id:4,
                        name:"Starter",
                        price:"90 Dt/c/m",
                        hotel:"Business",
                        equiped_room:"250",
                        status:"Active",
                    }
                    ,{
                        id:4,
                        name:"Starter",
                        price:"90 Dt/c/m",
                        hotel:"Business",
                        equiped_room:"250",
                        status:"Active",
                    }
                    ,{
                        id:4,
                        name:"Starter",
                        price:"90 Dt/c/m",
                        hotel:"Business",
                        equiped_room:"250",
                        status:"Active",
                    }
                    ,{
                        id:4,
                        name:"Starter",
                        price:"90 Dt/c/m",
                        hotel:"Business",
                        equiped_room:"250",
                        status:"Active",
                    }
                    ,{
                        id:4,
                        name:"Starter",
                        price:"90 Dt/c/m",
                        hotel:"Business",
                        equiped_room:"250",
                        status:"Active",
                    }]
            }
        });

        document.dispatchEvent(event);
    };
    GET_ALL_OFFRES2(){
        var page_nbr = 0;
        offreList_ui.lastSearchBy="";
        $("[DATI-ID=OffreList]").attr("header_created",true);
        dati_table.init("OffreList");
        var event = new CustomEvent("ListOffreReceive", {
            detail: {
                res:[{
                    id:1,
                    name:"Starter",
                    price:"90 Dt/c/m",
                    hotel:"Business",
                    equiped_room:"250",
                    status:"Active",
                },{
                    id:2,
                    name:"Starter",
                    price:"90 Dt/c/m",
                    hotel:"Business",
                    equiped_room:"250",
                    status:"Active",
                },{
                    id:3,
                    name:"Starter",
                    price:"90 Dt/c/m",
                    hotel:"Business",
                    equiped_room:"250",
                    status:"Active",
                },{
                    id:4,
                    name:"Starter",
                    price:"90 Dt/c/m",
                    hotel:"Business",
                    equiped_room:"250",
                    status:"Active",
                },{
                    id:5,
                    name:"Starter",
                    price:"90 Dt/c/m",
                    hotel:"Business",
                    equiped_room:"250",
                    status:"Active",
                }]
            }
        });

        document.dispatchEvent(event);
        /*SSAPI.SUBMIT({
            uri:"/Guest/getAll",
            data:{
                pagination:{
                    page: page_nbr,
                    quantity:guestList_ui.nbrRows
                }
            },
            onsuccess:"ListGuestsReceive",
            onerror:"ListGuestsReceive_error"
        })*/
    };


    DELETE_OFFRE(id){
        console.log(id,"front id OFFRE to delete");
        /*SSAPI.SUBMIT({
            uri:"/Guest/delete",
            onsuccess:"GuestDeleted",
            onerror:"GuestDeleted_error",
            data:{
                guest_id:id
            }
        })*/
    }

    GET_OFFRES_BY_NAME(val,page){
        offreList_ui.lastSearchBy="name";
        if(page){
            var page_nbr = 0;

            try {
                var page_nbr = $(document.querySelectorAll("[dati-id=pagination_OffreList]")[0]).find("[dati_composent=PAGES]").val();
                if(!page_nbr){
                    page_nbr = 0;
                }
            }catch (e) {
                page_nbr = 0
            }
        }else{
            page_nbr = 0;
        }

        /*SSAPI.SUBMIT({
            uri:"/Guest/getByRoom_number",
            onsuccess:"ResearchByRoomNumberGuestsReceive",
            data:{
                room_number:val,
                pagination:{
                    page: page_nbr,
                    quantity:guestList_ui.nbrRowsS
                }
            }
        })*/
    }
    GET_OFFRES_BY_PRICE(val,page){
        offreList_ui.lastSearchBy="price";
        if(page){
            var page_nbr = 0;

            try {
                var page_nbr = $(document.querySelectorAll("[dati-id=pagination_OffreList]")[0]).find("[dati_composent=PAGES]").val();
                if(!page_nbr){
                    page_nbr = 0;
                }
            }catch (e) {
                page_nbr = 0
            }
        }else{
            page_nbr = 0;
        }

        /*SSAPI.SUBMIT({
            uri:"/Guest/getByRoom_number",
            onsuccess:"ResearchByRoomNumberGuestsReceive",
            data:{
                room_number:val,
                pagination:{
                    page: page_nbr,
                    quantity:guestList_ui.nbrRowsS
                }
            }
        })*/
    }
    GET_OFFRES_BY_HOTEL(val,page){
        offreList_ui.lastSearchBy="hotel";
        if(page){
            var page_nbr = 0;
            try {
                var page_nbr = $(document.querySelectorAll("[dati-id=pagination_OffreList]")[0]).find("[dati_composent=PAGES]").val();
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
    GET_OFFRES_BY_EQUIPED_ROOM(val,page){
        offreList_ui.lastSearchBy="equiped_room";
        if(page){
            var page_nbr = 0;
            try {
                var page_nbr = $(document.querySelectorAll("[dati-id=pagination_OffreList]")[0]).find("[dati_composent=PAGES]").val();
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
    GET_OFFRES_BY_STATUS(val,page){
        offreList_ui.lastSearchBy="status";
        if(page){
            var page_nbr = 0;
            try {
                var page_nbr = $(document.querySelectorAll("[dati-id=pagination_OffreList]")[0]).find("[dati_composent=PAGES]").val();
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
        document.addEventListener("SHOW_PAGE", function(e){
            var page = e.detail.pageLink;


            if(page == "Offers"){
                offreList_ui.lastSearchBy = "";
                dati_table.init("OffreList");
                var event1 = new CustomEvent("OffreListPageReady");
                document.dispatchEvent(event1);

                $("[DATI-ID=searchBarListOffre] [DATI-ID=listOffre_search_byName]").css("display","inline-block");
                $("[DATI-ID=searchBarListOffre] [DATI-ID=listOffre_search_byPrice]").css("display","none");
                $("[DATI-ID=searchBarListOffre] [DATI-ID=listOffre_search_byHotel]").css("display","none");
                $("[DATI-ID=searchBarListOffre] [DATI-ID=listOffre_search_byEquipedRoom]").css("display","none");
                $("[DATI-ID=searchBarListOffre] [DATI-ID=listOffre_search_byStatus]").css("display","none");
                var event = new CustomEvent("showAlerteDeleteOffre");
                document.dispatchEvent(event);

                iOffre.GET_ALL_OFFRES();
               dati_searchBar.UPDATE("searchBarListOffre");


            }
         }, false);
    }


    EVENTS_SSAPI(){
        document.addEventListener("ListOffreReceive", function(e){
            offreList_ui.DATALIST(e.detail.res);
            chart_offre_ui.UI_EVENT();
            $("[DATI-ID=pagination_OffreList]").attr("DATI-NBR-ROW",offreList_ui.nbrRows);
            $("[DATI-ID=pagination_OffreList]").attr("DATI-TOTAL-PAGE",offreList_ui.total);
            dati_pagination.UPDATE("pagination_OffreList");

        }, false);
    }
}

let iOffre = new imp_Offre();