class imp_WellBeingCard{
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();
        this.imgWellUploaded=null;
    }
    DELETE_WELLBEING(id){

        SSAPI.SUBMIT({
            uri:"/Well_being/delete",
            onsuccess:"wellBeingDeleted",
            onerror:"wellBeingDeleted_error",
            data:{
                well_being_id:id
            }
        })
    }
    ENABLE_WELLBEING(list){
        var id =list.id;
        if(list.enable){
            SSAPI.SUBMIT({
                uri:"/Well_being/disableWellBeing",
                data:{
                    well_being_id: id
                },
                onsuccess:"wellBeingDisabled"
            })
            //if changed in database
            list.enable=false;

        }else{
            SSAPI.SUBMIT({
                uri:"/Well_being/enableWellBeing",
                data:{
                    well_being_id: id
                },
                onsuccess:"wellBeingEnabled"
            })
            //if changed in database
            list.enable=true;

        }
    }



    EVENTS_UI(){
        document.addEventListener("SHOW_PAGE", function(e){
            var page = e.detail.pageLink;
            if(page != "addWellBServices" ){
                $("[DATI-ID=opening_Time_WellB]").slideUp();
                WellBeingCard_ui.RESET_FORM_ADD();
                WellBeingCard_ui.VIDE_PREVIEW_WELL()
                WellBeingCard_ui.msgErreurWellB = [];
                dati_Erreurs.UPDATE("WellBErreurs");
                $("[ DATI-ID=contactListServiceWellB]").css("display","none");
            }

            if(page == "addWellBServices"){
                setTimeout(function(){
                    $("[dati-page=addWellBServices]").find("[bt_checked=CheckBoxWellBOrder]").attr("button-checked","false");
                    $("[dati-page=addWellBServices]").find("[bt_checked=CheckBoxWellBOrder]").find("[is_checked=OrderCheckBoxWellBOrder]").css("display","none");
                    $("[dati-page=addWellBServices]").find("[bt_checked=CheckBoxWellBReservation]").attr("button-checked","false");
                    $("[dati-page=addWellBServices]").find("[bt_checked=CheckBoxWellBReservation]").find("[is_checked=ReservationCheckBoxWellBReservation]").css("display","none");
                    $("[dati-page=addWellBServices]").find("[bt_checked=CheckBoxWellBResquest]").attr("button-checked","false");
                    $("[dati-page=addWellBServices]").find("[bt_checked=CheckBoxWellBResquest]").find("[is_checked=RequestCheckBoxWellBResquest]").css("display","none");
                }, 300);
                dati_contactForm.contact={};
                $("[dati-image-well]").attr("src", "/assets/img/ui/white.png");
                $("[dati-role=clickable]").css("background-image","");
                var event = new CustomEvent("showPageAddWellB");
                document.dispatchEvent(event);
                var eventTrans = new CustomEvent("showformTranslateWellB");
                document.dispatchEvent(eventTrans);
                var eventContact = new CustomEvent("showcontactFormWellB");
                document.dispatchEvent(eventContact);
                var eventListContact = new CustomEvent("showcontactListServiceWellB");
                document.dispatchEvent(eventListContact);
                var eventAlertContact = new CustomEvent("showContactAlerteWellB");
                document.dispatchEvent(eventAlertContact);
                var eventTypeService= new CustomEvent("showCheckBoxWellB");
                document.dispatchEvent(eventTypeService);
            }else if(page == "Well-being"){

                SSAPI.SUBMIT({
                    uri:"/Well_being/getAll",
                    onsuccess:"wellBeingCardReceive"
                })

                var eventAlerte = new CustomEvent("showAlerteWellB");


                document.dispatchEvent(eventAlerte);

              /*  document.dispatchEvent(event);*/
            }
        }, false);

        $(document).on('change','[DATI-ID=uploadIamgeWellfile]',function(){
            var image =$(this)[0].files[0];
            var form = new FormData();
            form.append("img", image, $(this).val());
            SSAPI.upload({
                uri:"/Cdn/upload_img",
                onsuccess:"imageWellUploaded",
                data:form
            })
            //$(this).parent().find("img").attr("src",src);
        });
    }


    EVENTS_SSAPI(){
        document.addEventListener("imageWellUploaded", function(e){
            $("[dati-role=clickable]").css("background-image","url('"+e.detail.res[0]+"')");
            $("[dati-role=clickable]").css("background-position","center");
            $("[dati-role=clickable]").css("background-size","100% 100%");
            $("[dati-role=clickable]").css("background-repeat","no-repeat");
            $("[dati-composent=UploaderTrans]").find("[dati-role=clickableTrans]").css("background-image","url('"+e.detail.res[0]+"')");
            $("[dati-composent=UploaderTrans]").find("[dati-role=clickableTrans]").css("background-position","center");
            $("[dati-composent=UploaderTrans]").find("[dati-role=clickableTrans]").css("background-size","100% 100%");
            $("[dati-composent=UploaderTrans]").find("[dati-role=clickableTrans]").css("background-repeat","no-repeat");
            $("[dati-image-well]").attr("src", e.detail.res[0]);
            iWellBeingCard.imgWellUploaded = e.detail.res[0] ;
            formTrx_ui.imgTransUploaded=e.detail.res[0] ;


        }, false);
        document.addEventListener("wellBeingCardReceive", function(e){
            WellBeingCard_ui.DATALIST(e.detail);

        }, false);
        /* ADD WELLBEING */
        document.addEventListener("wellBeingAdded", function(e){
            WellBeingCard_ui.RESET_FORM_ADD();
            restaurantCard_ui.SHOW_POPUP_SUCCESS();
        }, false);

        document.addEventListener("wellBeingAdded_error", function(e){
            restaurantCard_ui.SHOW_POPUP_ERROR();
        }, false);
        /* DELETE WELLBEING */
        document.addEventListener("wellBeingDeleted", function(e){

            WellBeingCard_ui.DELETE_ID_FROM_LIST(e.detail.res);
        }, false);

        document.addEventListener("wellBeingDeleted_error", function(e){


        }, false);

        /* UPDATE WELLBEING */
        document.addEventListener("WellBeingUpdated", function(e){

            restaurantCard_ui.SHOW_POPUP_SUCCESS_UPDATE();
        }, false);
        document.addEventListener("WellBeingUpdated_error", function(e){

            restaurantCard_ui.SHOW_POPUP_ERROR()
        }, false);
    }
}

let iWellBeingCard = new imp_WellBeingCard();