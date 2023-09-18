class imp_SeviceCard{
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();
        this.page=null;
        this.oldPage=null;
        this.Navigation_history =["Dashboard"];
        this.Navigation_history_title =["DASHBOARD"];
        this.activePageIndex = 0;
        $(document).on('click', '[DATI-BACK-ARROW-NAVIGATION]', function () {
            iServiceCard.PREV_PAGE()
        });
        $(document).on('click', '[DATI-NEXT-ARROW-NAVIGATION]', function () {
            iServiceCard.NEXT_PAGE()
        });

    }
    ENABLE_SERVICE(list){
/*        console.log(list,"mi switcher")*/
        var id =list.id;
        if(list.enable){

            // ss-api /Service/disable
            SSAPI.SUBMIT({
                uri:"/Service/disableService",
                data:{
                    service_id: id
                },
                onsuccess:"ServiceCardDisnabled"
            })

            //if changed in database
            list.enable=false;
        }else{

            // ss-api /Service/enable
            SSAPI.SUBMIT({
                uri:"/Service/enableService",
                data:{
                    service_id: id
                },
                onsuccess:"ServiceCardEnabled"
            })
            //if changed in database
            list.enable=true;
        }
    }
    PREV_PAGE() {
        if(iServiceCard.activePageIndex == 0 ){
        }else{
            iServiceCard.activePageIndex -= 1;
            iServiceCard.ACTIVE_CURRENT_PAGE();
        }

    };
    NEXT_PAGE() {
        if(iServiceCard.activePageIndex == iServiceCard.Navigation_history.length -1){

        }else{
            iServiceCard.activePageIndex += 1;
            iServiceCard.ACTIVE_CURRENT_PAGE();
        }

    };
    ACTIVE_CURRENT_PAGE() {

        var activator = iServiceCard.Navigation_history[iServiceCard.activePageIndex];
        var activorTitle = iServiceCard.Navigation_history_title[iServiceCard.activePageIndex];
        var event = new CustomEvent("SHOW_PAGE", {
            detail: {
                pageLink: activator ,
                pagePath: activorTitle,
                nav_attr: true
            }
        });
        document.dispatchEvent(event);

        if (activator) {
            var page = "[DATI-PAGE=" + activator + "]";
            $("[DATI-PAGE]").css("display", "none");
            if ($(page).attr("DATI-DISPLAY")) {
                $(page).css("display", $(page).attr("DATI-DISPLAY"));
            } else {
                $(page).css("display", "inline-block");
            }

            $("[dati-current-pathname]").html(activorTitle);
        } else {
       /*     console.log("Out of bounds!");*/
        }
    };
    EVENTS_UI(){
        document.addEventListener("SHOW_PAGE", function(e){

            var page = e.detail.pageLink;
            var path = e.detail.pagePath;
            if(e.detail.hasOwnProperty("nav_attr")){
                return false;
            }

            if( iServiceCard.Navigation_history.indexOf(page) !== -1){
                var index = iServiceCard.Navigation_history.indexOf(page);
                iServiceCard.Navigation_history.splice(index, 1);
                iServiceCard.Navigation_history_title.splice(index, 1);
            }

            if(!$("[dati-page="+page+"]").attr("dati-page-type")){
                iServiceCard.Navigation_history.push(page);
                iServiceCard.Navigation_history_title.push(path);
            }

            iServiceCard.activePageIndex = iServiceCard.Navigation_history.length -1 ;




            if(page == "Services"){

                // CALL SSAPI  DEVICE GET LIST
                // event success ListDevicesReceive


                //var eventEdit = new CustomEvent("showModalService");
                //var eventSwitcher = new CustomEvent("ToggelTraServices");


                SSAPI.SUBMIT({
                    uri:"/Service/getAll",
                    onsuccess:"ServiceCardReceive"
                })

                SSAPI.SUBMIT({
                    uri:"/Contact_type/getAll",
                    onsuccess:"ContactTypeReceive"
                })

                //document.dispatchEvent(eventSwitcher);
                // document.dispatchEvent(eventEdit);

            }
        }, false);
    }


    EVENTS_SSAPI(){
        document.addEventListener("ServiceCardReceive", function(e){

            serviceCard_ui.DATALIST(e.detail);
            //editService_ui.DATALIST(e.detail);

        }, false);
        document.addEventListener("ContactTypeReceive", function(e){

            serviceCard_ui.CONTACTLIST(e.detail);
            //editService_ui.DATALIST(e.detail);

        }, false);

        document.addEventListener("ServiceCardDisnabled", function(e){
            var pos = serviceCard_ui.getPosition(serviceCard_ui.cards, e.detail.res[0]);
            serviceCard_ui.cards[pos].enable=0;
            dati_cardService.UPDATE("ServiceList");

        }, false);

        document.addEventListener("ServiceCardEnabled", function(e){

            var pos = serviceCard_ui.getPosition(serviceCard_ui.cards, e.detail.res[0]);
            serviceCard_ui.cards[pos].enable=1;
            dati_cardService.UPDATE("ServiceList");

        }, false);

        document.addEventListener("showServiceNav", function(e){

            nav_ui.SERVICENAV(e.detail);


        }, false);


    }
}

let iServiceCard = new imp_SeviceCard();