class imp_LeisureCard{
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();
        this.imgLeisureUploaded=null;
    }
    DELETE_LEISURE(id){

        SSAPI.SUBMIT({
            uri:"/Leisure/delete",
            onsuccess:"LeisureDeleted",
            onerror:"LeisureDeleted_error",
            data:{
                leisure_id:id
            }
        })
    }
    ENABLE_LEISURE(list){
        var id =list.id;
        if(list.enable){
            SSAPI.SUBMIT({
                uri:"/Leisure/disableLeisure",
                data:{
                    leisure_id: id
                },
                onsuccess:"leisureDisabled"
            })
            //if changed in database
            list.enable=false;
        }else{
            SSAPI.SUBMIT({
                uri:"/Leisure/enableLeisure",
                data:{
                    leisure_id: id
                },
                onsuccess:"leisureEnabled"
            })
            //if changed in database
            list.enable=true;
        }
    }



    EVENTS_UI(){
        document.addEventListener("SHOW_PAGE", function(e){
            var page = e.detail.pageLink;
            if(page != "addLeisureServices"){
                $("[DATI-ID=opening_Time_Leisure]").slideUp();
                leisureCard_ui.RESET_FORM_ADD();
                leisureCard_ui.VIDE_PREVIEW_LEISURE();
                leisureCard_ui.msgErreurLeisure = [];
                dati_Erreurs.UPDATE("LeisureErreurs");
                $("[ DATI-ID=contactListServiceLeisure]").css("display","none");
            }

            if(page == "addLeisureServices"){
                setTimeout(function(){
                    $("[dati-page=addLeisureServices]").find("[bt_checked=CheckBoxLeisureOrder]").attr("button-checked","false");
                    $("[dati-page=addLeisureServices]").find("[bt_checked=CheckBoxLeisureOrder]").find("[is_checked=OrderCheckBoxLeisureOrder]").css("display","none");
                    $("[dati-page=addLeisureServices]").find("[bt_checked=CheckBoxLeisureReservation]").attr("button-checked","false");
                    $("[dati-page=addLeisureServices]").find("[bt_checked=CheckBoxLeisureReservation]").find("[is_checked=ReservationCheckBoxLeisureReservation]").css("display","none");
                    $("[dati-page=addLeisureServices]").find("[bt_checked=CheckBoxLeisureResquest]").attr("button-checked","false");
                    $("[dati-page=addLeisureServices]").find("[bt_checked=CheckBoxLeisureResquest]").find("[is_checked=RequestCheckBoxLeisureResquest]").css("display","none");
                }, 300);
                dati_contactForm.contact={};
                $("[dati-image-leisure]").attr("src", "/assets/img/ui/white.png");
                $("[dati-role=clickableTrans]").css("background-image","");
                var event = new CustomEvent("showPageAddLeisure");
                document.dispatchEvent(event);
                var eventTrans = new CustomEvent("showformTranslateLeisure");
                document.dispatchEvent(eventTrans);
                var eventContact = new CustomEvent("showcontactFormLeisure");
                document.dispatchEvent(eventContact);
                var eventListContact = new CustomEvent("showcontactListServiceLeisure");
                document.dispatchEvent(eventListContact);
                var eventAlertContact = new CustomEvent("showContactAlerteLeisure");
                document.dispatchEvent(eventAlertContact);
                var eventTypeService= new CustomEvent("showCheckBoxLeisure");
                document.dispatchEvent(eventTypeService);
            }else if(page == "Leisure"){


                SSAPI.SUBMIT({
                    uri:"/Leisure/getAll",
                    onsuccess:"LeisureCardReceive"
                })
                var eventAlerte = new CustomEvent("showAlerteLeisure");


                document.dispatchEvent(eventAlerte);


            }

        }, false);
        $(document).on('change','[DATI-ID=uploadIamgeLeisurefile]',function(){
            var image =$(this)[0].files[0];
            var form = new FormData();
            form.append("img", image, $(this).val());
            SSAPI.upload({
                uri:"/Cdn/upload_img",
                onsuccess:"imageleisureUploaded",
                data:form
            })
            //$(this).parent().find("img").attr("src",src);
        });
    }


    EVENTS_SSAPI(){
        document.addEventListener("imageleisureUploaded", function(e){
            $("[dati-role=clickable]").css("background-image","url('"+e.detail.res[0]+"')");
            $("[dati-role=clickable]").css("background-position","center");
            $("[dati-role=clickable]").css("background-size","100% 100%");
            $("[dati-role=clickable]").css("background-repeat","no-repeat");
            $("[dati-composent=UploaderTrans]").find("[dati-role=clickableTrans]").css("background-image","url('"+e.detail.res[0]+"')");
            $("[dati-composent=UploaderTrans]").find("[dati-role=clickableTrans]").css("background-position","center");
            $("[dati-composent=UploaderTrans]").find("[dati-role=clickableTrans]").css("background-size","100% 100%");
            $("[dati-composent=UploaderTrans]").find("[dati-role=clickableTrans]").css("background-repeat","no-repeat");
            $("[dati-image-leisure]").attr("src", e.detail.res[0]);
            iLeisureCard.imgLeisureUploaded = e.detail.res[0] ;
            formTrx_ui.imgTransUploaded=e.detail.res[0] ;


        }, false);

        document.addEventListener("LeisureCardReceive", function(e){
            leisureCard_ui.DATALIST(e.detail);

        }, false);
        /* ADD LEISURE */
        document.addEventListener("leisureAdded", function(e){
            leisureCard_ui.RESET_FORM_ADD();
            restaurantCard_ui.SHOW_POPUP_SUCCESS();
        }, false);

        document.addEventListener("leisureAdded_error", function(e){
            restaurantCard_ui.SHOW_POPUP_ERROR();
        }, false);
        /* DELETE LEISURE */
        document.addEventListener("LeisureDeleted", function(e){

            leisureCard_ui.DELETE_ID_FROM_LIST(e.detail.res);
        }, false);

        document.addEventListener("LeisureDeleted_error", function(e){


        }, false);

        /* UPDATE LEISURE */
        document.addEventListener("LeisureUpdated", function(e){

            restaurantCard_ui.SHOW_POPUP_SUCCESS_UPDATE();
        }, false);
        document.addEventListener("LeisureUpdated_error", function(e){
            restaurantCard_ui.SHOW_POPUP_ERROR()
        }, false);
    }
}

let iLeisureCard = new imp_LeisureCard();