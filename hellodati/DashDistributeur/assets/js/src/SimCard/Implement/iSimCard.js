class imp_Sim_Card{
    constructor() {
       this.EVENTS_UI();
       this.EVENTS_SSAPI();
    }

    GET_ALL_SIM_CARDS(){
        var page_nbr = 0;
        try {
            var page_nbr = $(document.querySelectorAll("[dati-id=pagination_SimCardList]")[0]).find("[dati_composent=PAGES]").val();
            if(!page_nbr){
                page_nbr = 0;
            }
        }catch (e) {
            page_nbr = 0
        }

        if(simCardList_ui.lastSearchBy != ""){
            if(simCardList_ui.lastSearchBy == "number"){
                this.GET_SIM_CARDS_BY_NUMBER($("[DATI-ID=listSimCard_search_byNumber]").val(),true);
            }

            if(simCardList_ui.lastSearchBy == "operator"){
                this.GET_SIM_CARDS_BY_OPERATOR($("[DATI-ID=listSimCard_search_byOperator]").val(),true);
            }

            if(simCardList_ui.lastSearchBy == "iccd"){
                this.GET_SIM_CARDS_BY_ICCD($("[DATI-ID=listSimCard_search_byICCID]").val(),true);
            }

            if(simCardList_ui.lastSearchBy == "offre"){
                this.GET_SIM_CARDS_BY_OFFRE($("[DATI-ID=listSimCard_search_byOffre]").val(),true);
            }

            if(simCardList_ui.lastSearchBy == "status"){
                this.GET_SIM_CARDS_BY_STATUS($("[DATI-ID=listSimCard_search_byStatus]").val(),true);
            }


            return false;
        }

        SSAPI.SUBMIT({
            uri:"/Sim_card/getAll",
            data:{
                pagination:{
                    page: page_nbr,
                    quantity:simCardList_ui.nbrRows
                }
            },
            onsuccess:"ListSimCardReceive",
            onerror:"ListSimCardReceive_error"
        })

    };
    GET_ALL_OPERATORS(){

        SSAPI.SUBMIT({
            uri:"/Operator/getAll",
            data:{
                pagination:{
                    page: 0,
                    quantity:10
                }
            },
            onsuccess:"ListOperatorsReceive",
            onerror:"ListOperatorsReceive_error"
        })
    };
    GET_ALL_OFFRES(){

        SSAPI.SUBMIT({
            uri:"/Offer_operator/getAll",
            data:{
                pagination:{
                    page: 0,
                    quantity:10
                }
            },
            onsuccess:"ListOffresReceive",
            onerror:"ListOffressReceive_error"
        })
    };
    GET_ALL_SIM_CARDS2(){
        var page_nbr = 0;
        simCardList_ui.lastSearchBy="";
        $("[DATI-ID=SimCardList]").attr("header_created",true);
        dati_table.init("SimCardList");
        SSAPI.SUBMIT({
            uri:"/Sim_card/getAll",
            data:{
                pagination:{
                    page: page_nbr,
                    quantity:simCardList_ui.nbrRows
                }
            },
            onsuccess:"ListSimCardReceive",
            onerror:"ListSimCardReceive_error"
        })
    };
    EDIT_SIM(id,simnumber,iccid,operator,offred){
        var data = {
            id:id,
            operator_id:operator,
            offer_id:offred,
            sim_number:simnumber,
            iccid:iccid,
        };
        SSAPI.SUBMIT({
            uri:"/Sim_card/update",
            onsuccess:"updateSimCardReceive",
            onerror:"updateSimCardReceive_error",
            data:data
        });

        console.log(data,'daataa add device');


    }

    DELETE_SIM_CARD(id){
        console.log(id,"front id SIM card to delete");
        SSAPI.SUBMIT({
            uri:"/Sim_card/delete",
            onsuccess:"sim_card_deleted",
            onerror:"sim_card_deleted_error",
            data:{
                id:id
            }
        })
    }

    GET_SIM_CARDS_BY_NUMBER(val,page){
        simCardList_ui.lastSearchBy="number";
        if(page){
            var page_nbr = 0;

            try {
                var page_nbr = $(document.querySelectorAll("[dati-id=pagination_SimCardList]")[0]).find("[dati_composent=PAGES]").val();
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
            uri:"/Sim_card/getAllBySimNumber",
            onsuccess:"ResearchBySimNumberSimCardsReceive",
            onerror:"ResearchBySimNumberSimCardsReceive_error",
            data:{
                sim_number:val,
                pagination:{
                    page: 0,
                    quantity:10
                }
            }
        })
    }
    GET_SIM_CARDS_BY_OPERATOR(val,page){
        simCardList_ui.lastSearchBy="operator";
        if(page){
            var page_nbr = 0;

            try {
                var page_nbr = $(document.querySelectorAll("[dati-id=pagination_SimCardList]")[0]).find("[dati_composent=PAGES]").val();
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
            uri:"/Sim_card/getAllByOperatorName",
            onsuccess:"ResearchByOperatorSimCardsReceive",
            onerror:"ResearchByOperatorSimCardsReceive_error",
            data:{
                operator_name:val,
                pagination:{
                    page: 0,
                    quantity:10
                }
            }
        })
    }
    GET_SIM_CARDS_BY_ICCD(val,page){
        simCardList_ui.lastSearchBy="iccd";
        if(page){
            var page_nbr = 0;
            try {
                var page_nbr = $(document.querySelectorAll("[dati-id=pagination_SimCardList]")[0]).find("[dati_composent=PAGES]").val();
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
    GET_SIM_CARDS_BY_OFFRE(val,page){
        simCardList_ui.lastSearchBy="offre";
        if(page){
            var page_nbr = 0;
            try {
                var page_nbr = $(document.querySelectorAll("[dati-id=pagination_SimCardList]")[0]).find("[dati_composent=PAGES]").val();
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
    GET_SIM_CARDS_BY_STATUS(val,page){
        simCardList_ui.lastSearchBy="status";
        if(page){
            var page_nbr = 0;
            try {
                var page_nbr = $(document.querySelectorAll("[dati-id=pagination_SimCardList]")[0]).find("[dati_composent=PAGES]").val();
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

    ADD_SIM_CARDS(sims,offre_id,operator_id){
        var data = {
            offer_id:offre_id,
            operator_id:operator_id,
            sims:sims,
        };
        SSAPI.SUBMIT({
            uri:"/Sim_card/add",
            onsuccess:"addSimCardsReceive",
            onerror:"addSimCardsReceive_error",
            data:data
        });

        console.log(data,'daataa add sim cards');


    }
    EVENTS_UI(){
        $(document).on('keyup','[DATI-ID=listSimCard_search_byNumber]',function(){
            simCardList_ui.lastSearchBy="number";
            var val = $(this).val();
            if(val.length > 0){
                $("[DATI-ID=SimCardList]").attr("header_created",true);
                dati_table.init("SimCardList");
                iSimCard.GET_SIM_CARDS_BY_NUMBER(val,false);
            }else{
                simCardList_ui.lastSearchBy="";
                $("[DATI-ID=SimCardList]").attr("header_created",true);
                dati_table.init("SimCardList");
                iSimCard.GET_ALL_SIM_CARDS();
            }
        });
        $(document).on('keyup','[DATI-ID=listSimCard_search_byOperator]',function(){
            simCardList_ui.lastSearchBy="operator";
            var val = $(this).val();
            if(val.length > 0){
                $("[DATI-ID=SimCardList]").attr("header_created",true);
                dati_table.init("SimCardList");
                iSimCard.GET_SIM_CARDS_BY_OPERATOR(val,false);
            }else{
                simCardList_ui.lastSearchBy="";
                $("[DATI-ID=SimCardList]").attr("header_created",true);
                dati_table.init("SimCardList");
                iSimCard.GET_ALL_SIM_CARDS();
            }
        });
        document.addEventListener("SHOW_PAGE", function(e){
            var page = e.detail.pageLink;


            if (page != "AddSims"){
                addSimCard_ui.RESET_FORM_ADD();
            }

            if (page == "EditSimCard"){
                iSimCard.GET_ALL_OPERATORS();
                iSimCard.GET_ALL_OFFRES();
                var event = new CustomEvent("showInputUpdateSimCards");
                document.dispatchEvent(event);
                setTimeout(function () {
                    simCardList_ui.fillPageEdit();
                },600);

            }
            if(page == "SimsCard"){
                chart_sim_card_ui.UI_EVENT();
                simCardList_ui.lastSearchBy = "";
                $("[DATI-ID=SimCardList]").attr("header_created",false);
                dati_table.init("SimCardList");
                var event1 = new CustomEvent("SimCardListPageReady");
                document.dispatchEvent(event1);

                $("[DATI-ID=searchBarListSimCard] [DATI-ID=listSimCard_search_byNumber]").css("display","inline-block");
                $("[DATI-ID=searchBarListSimCard] [DATI-ID=listSimCard_search_byOperator]").css("display","none");
                $("[DATI-ID=searchBarListSimCard] [DATI-ID=listSimCard_search_byICCID]").css("display","none");
                $("[DATI-ID=searchBarListSimCard] [DATI-ID=listSimCard_search_byOffre]").css("display","none");
                $("[DATI-ID=searchBarListSimCard] [DATI-ID=listSimCard_search_byStatus]").css("display","none");
                var event = new CustomEvent("showAlerteDeleteSimCard");
                document.dispatchEvent(event);

                iSimCard.GET_ALL_SIM_CARDS();
               dati_searchBar.UPDATE("searchBarListSimCard");


            }

            if (page=="AddSims"){
                var event = new CustomEvent("showInputSimCards");
                document.dispatchEvent(event);
                iSimCard.GET_ALL_OPERATORS();
                iSimCard.GET_ALL_OFFRES();
            }
         }, false);
    }


    EVENTS_SSAPI(){
        document.addEventListener("ListSimCardReceive", function(e){
            simCardList_ui.DATALIST(e.detail.res);

            console.log(simCardList_ui.nbrRows,"aaaaaa");
            console.log(simCardList_ui.total,"bbbbb");
            $("[DATI-ID=pagination_SimCardList]").attr("DATI-NBR-ROW",simCardList_ui.nbrRows);
            $("[DATI-ID=pagination_SimCardList]").attr("DATI-TOTAL-PAGE",simCardList_ui.total);
            dati_pagination.UPDATE("pagination_SimCardList");

        }, false);
        document.addEventListener("ListSimCardReceive_error", function(e){
            console.error(e.detail)
        }, false);
        
//************************************************Delete sim card***************************************************************
        document.addEventListener("sim_card_deleted", function(e){
            var pos = simCardList_ui.GET_POSITION_IN_TAB(simCardList_ui.simCards,e.detail.res[0]);
            if(pos != -1){
                simCardList_ui.simCards.splice(pos, 1);
            }
            dati_table.UPDATE("SimCardList");
            simCardList_ui.CANCEL_ALERTE();

        }, false);

        document.addEventListener("sim_card_deleted_error", function(e){
            console.error(e.detail);

        }, false);

        //************************************************Search by sim number***************************************************************
        document.addEventListener("ResearchBySimNumberSimCardsReceive", function(e){
            try {
                simCardList_ui.totalS = e.detail.res[0].count1;
                simCardList_ui.nbrRowsS = e.detail.res[0].quantity1;
                $("[DATI-ID=pagination_SimCardList]").attr("DATI-NBR-ROW",simCardList_ui.nbrRowsS);
                $("[DATI-ID=pagination_SimCardList]").attr("DATI-TOTAL-PAGE",simCardList_ui.totalS);
                dati_pagination.UPDATE("pagination_SimCardList");
            }catch (e) {
                $("[DATI-ID=pagination_SimCardList]").attr("DATI-NBR-ROW",0);
                $("[DATI-ID=pagination_SimCardList]").attr("DATI-TOTAL-PAGE",0);
                dati_pagination.UPDATE("pagination_SimCardList");
            }


            var event = new CustomEvent("ResearchBySimNumberSimCardsReceiveEvent", { detail: {list : e.detail.res} });
            document.dispatchEvent(event);


        }, false);

        document.addEventListener("ResearchBySimNumberSimCardsReceiveEvent", function(e){
            simCardList_ui.DATA_SEARCH(e.detail.list);
        }, false);

        document.addEventListener("ResearchBySimNumberSimCardsReceive_error", function(e){
            console.error(e.detail);

        }, false);

        //************************************************Search by operator***************************************************************
        document.addEventListener("ResearchByOperatorSimCardsReceive", function(e){
              try {
                  simCardList_ui.totalS = e.detail.res[0].count1;
                  simCardList_ui.nbrRowsS = e.detail.res[0].quantity1;
                  $("[DATI-ID=pagination_SimCardList]").attr("DATI-NBR-ROW",simCardList_ui.nbrRowsS);
                  $("[DATI-ID=pagination_SimCardList]").attr("DATI-TOTAL-PAGE",simCardList_ui.totalS);
                  dati_pagination.UPDATE("pagination_SimCardList");
              }catch (e) {
                  $("[DATI-ID=pagination_SimCardList]").attr("DATI-NBR-ROW",0);
                  $("[DATI-ID=pagination_SimCardList]").attr("DATI-TOTAL-PAGE",0);
                  dati_pagination.UPDATE("pagination_SimCardList");
              }


            var event = new CustomEvent("ResearchByOperatorSimCardsReceiveEvent", { detail: {list : e.detail.res} });
            document.dispatchEvent(event);


        }, false);

        document.addEventListener("ResearchByOperatorSimCardsReceiveEvent", function(e){
            simCardList_ui.DATA_SEARCH(e.detail.list);
        }, false);

        document.addEventListener("ResearchByOperatorSimCardsReceive_error", function(e){
            console.error(e.detail);

        }, false);
        document.addEventListener("addSimCardsReceive", function(e){
            addSimCard_ui.RESET_FORM_ADD();
            addProvider_ui.SHOW_POPUP_SUCCESS("Sim Cards added successfully!");

        }, false);
        document.addEventListener("addSimCardsReceive_error", function(e){
            console.error(e.detail);
            addProvider_ui.SHOW_POPUP_ERROR("Failed to add Sim Cards!");


        }, false);

        document.addEventListener("ListOperatorsReceive", function(e){
            addSimCard_ui.LIST_OPERATORS(e.detail.res);
            updateSimCard_ui.LIST_OPERATORS(e.detail.res)
            dati_select.UPDATE("inputSimCardOperator");

        }, false);
        document.addEventListener("ListOperatorsReceive_error", function(e){
            console.error(e.detail);

        }, false);


        document.addEventListener("ListOffresReceive", function(e){
            addSimCard_ui.LIST_OFFRES(e.detail.res);
            updateSimCard_ui.LIST_OFFRES(e.detail.res)
            dati_select.UPDATE("inputSimCardOffre");

        }, false);
        document.addEventListener("ListOffresReceive_error", function(e){
            console.error(e.detail);

        }, false);

        document.addEventListener("updateSimCardReceive", function(e){
            addProvider_ui.SHOW_POPUP_SUCCESS("SimCard updated successfully!");

        }, false);
        document.addEventListener("updateSimCardReceive_error", function(e){
            console.error(e.detail);
            addProvider_ui.SHOW_POPUP_ERROR("Failed to update SimCard!");

        }, false);

    }
}

let iSimCard = new imp_Sim_Card();