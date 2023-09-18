class imp_EventCard{
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();
        this.imgEventUploaded = null;
    }
    DELETE_EVENT(id){

        SSAPI.SUBMIT({
            uri:"/Event/delete",
            onsuccess:"EventDeleted",
            onerror:"EventDeleted_error",
            data:{
                event_id:id
            }
        })
    }
    ENABLE_EVENT(list){
        var id =list.id;
        if(list.enable){

            SSAPI.SUBMIT({
                uri:"/Event/disableEvent",
                data:{
                    event_id: id
                },
                onsuccess:"eventDisabled"
            })
            //if changed in database
            list.enable=false;

        }else{

            SSAPI.SUBMIT({
                uri:"/Event/enableEvent",
                data:{
                    event_id: id
                },
                onsuccess:"eventEnabled"
            })
            //if changed in database
            list.enable=true;

        }
    }



    EVENTS_UI(){
        document.addEventListener("SHOW_PAGE", function(e){

            var page = e.detail.pageLink;
            if(page != "addEventServices" ){
                $("[DATI-ID=opening_Time_Event]").slideUp();
                eventCard_ui.RESET_FORM_ADD();
                eventCard_ui.VIDE_PREVIEW_EVENT();
                eventCard_ui.msgErreurEvent = [];
                dati_Erreurs.UPDATE("EventErreurs");
                $("[ DATI-ID=contactListServiceEvent]").css("display","none");
            }
            if(page == "addEventServices"){
                setTimeout(function(){
                    $("[dati-page=addEventServices]").find("[bt_checked=CheckBoxEventOrder]").attr("button-checked","false");
                    $("[dati-page=addEventServices]").find("[bt_checked=CheckBoxEventOrder]").find("[is_checked=OrderCheckBoxEventOrder]").css("display","none");
                    $("[dati-page=addEventServices]").find("[bt_checked=CheckBoxEventReservation]").attr("button-checked","false");
                    $("[dati-page=addEventServices]").find("[bt_checked=CheckBoxEventReservation]").find("[is_checked=ReservationCheckBoxEventReservation]").css("display","none");
                    $("[dati-page=addEventServices]").find("[bt_checked=CheckBoxEventRequest]").attr("button-checked","false");
                    $("[dati-page=addEventServices]").find("[bt_checked=CheckBoxEventRequest]").find("[is_checked=RequestCheckBoxEventRequest]").css("display","none");
                }, 300);
                dati_contactForm.contact={};
                $("[dati-image-event]").attr("src", "/assets/img/ui/white.png");
                $("[dati-role=clickableTrans]").css("background-image","");
                var event = new CustomEvent("showPageAddEvent");
                document.dispatchEvent(event);
                var eventTrans = new CustomEvent("showformTranslateEvent");
                document.dispatchEvent(eventTrans);
                var eventContact = new CustomEvent("showcontactFormEvent");
                document.dispatchEvent(eventContact);
                var eventListContact = new CustomEvent("showcontactListServiceEvent");
                document.dispatchEvent(eventListContact);
                var eventAlertContact = new CustomEvent("showContactAlerteEvent");
                document.dispatchEvent(eventAlertContact);
                var eventTypeService= new CustomEvent("showTypeServiceEvent");
                document.dispatchEvent(eventTypeService);
                eventCard_ui.btChecked=[{title:"Reservation", width:"33%"},{title:"Order", width:"33%"},{title:"Request", width:"33%"}];
                var eventTypeService= new CustomEvent("showCheckBoxEvent");
                document.dispatchEvent(eventTypeService);
            }else if(page == "Events"){

                SSAPI.SUBMIT({
                    uri:"/Event/getAll",
                    onsuccess:"EventCardReceive"
                })

                var eventAlerte = new CustomEvent("showAlerteEvent");


                document.dispatchEvent(eventAlerte);
            /*    document.dispatchEvent(event);*/
            }
        }, false);

        $(document).on('change','[DATI-ID=uploadIamgeEventfile]',function(){
            var image =$(this)[0].files[0];
            var form = new FormData();
            form.append("img", image, $(this).val());
            SSAPI.upload({
                uri:"/Cdn/upload_img",
                onsuccess:"imageEventUploaded",
                data:form
            })
            //$(this).parent().find("img").attr("src",src);
        });
    }


    EVENTS_SSAPI(){
        document.addEventListener("imageEventUploaded", function(e){
            $("[DATI-ID=uploadIamgeEvent]").find("[dati-role=clickable]").css("background-image","url('"+e.detail.res[0]+"')");
            $("[DATI-ID=uploadIamgeEvent]").find("[dati-role=clickable]").css("background-position","center");
            $("[DATI-ID=uploadIamgeEvent]").find("[dati-role=clickable]").css("background-size","100% 100%");
            $("[DATI-ID=uploadIamgeEvent]").find("[dati-role=clickable]").css("background-repeat","no-repeat");

            $("[DATI-ID=formTranslateEvent]").find("[dati-composent=UploaderTrans]").find("[dati-role=clickableTrans]").css("background-image","url('"+e.detail.res[0]+"')");

            $("[DATI-ID=formTranslateEvent]").find("[dati-composent=UploaderTrans]").find("[dati-role=clickableTrans]").css("background-position","center");
            $("[DATI-ID=formTranslateEvent]").find("[dati-composent=UploaderTrans]").find("[dati-role=clickableTrans]").css("background-size","100% 100%");
            $("[DATI-ID=formTranslateEvent]").find("[dati-composent=UploaderTrans]").find("[dati-role=clickableTrans]").css("background-repeat","no-repeat");

            $("[dati-image-event]").attr("src", e.detail.res[0]);
            $("[dati-image-event]").css("opacity", "1");
            ieventCard.imgEventUploaded = e.detail.res[0] ;
            formTrx_ui.imgTransUploaded = e.detail.res[0] ;
        }, false);
        document.addEventListener("EventCardReceive", function(e){
            eventCard_ui.DATALIST(e.detail);

        }, false);
        /* ADD EVENT */
        document.addEventListener("eventAdded", function(e){
            eventCard_ui.RESET_FORM_ADD();
            restaurantCard_ui.SHOW_POPUP_SUCCESS();
        }, false);

        document.addEventListener("eventAdded_error", function(e){
            restaurantCard_ui.SHOW_POPUP_ERROR();
        }, false);
        /* DELETE EVENT */
        document.addEventListener("EventDeleted", function(e){

            eventCard_ui.DELETE_ID_FROM_LIST(e.detail.res);
        }, false);

        document.addEventListener("EventDeleted_error", function(e){


        }, false);

        /* UPDATE EVENT */
        document.addEventListener("EventUpdated", function(e){

            restaurantCard_ui.SHOW_POPUP_SUCCESS_UPDATE();
        }, false);
        document.addEventListener("EventUpdated_error", function(e){

            restaurantCard_ui.SHOW_POPUP_ERROR()
        }, false);
    }
}

let ieventCard = new imp_EventCard();