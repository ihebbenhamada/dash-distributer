class imp_BarCard{
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();
        this.imgBarUploaded=null;
        this.imgBarTransUploaded=null;
    }
    DELETE_BAR(id){

        SSAPI.SUBMIT({
            uri:"/Bar/delete",
            onsuccess:"BarDeleted",
            onerror:"BarDeleted_error",
            data:{
                bar_id:id
            }
        })
    }

    ENABLE_BAR(list){
        var id =list.id;

        if(list.enable){
            SSAPI.SUBMIT({
                uri:"/Bar/disableBar",
                data:{
                    bar_id: id
                },
                onsuccess:"barDisabled"
            })
            //if changed in database
            list.enable=false;
        }else{
            // ss-api /Service/enable
            SSAPI.SUBMIT({
                uri:"/Bar/enableBar",
                data:{
                    bar_id: id
                },
                onsuccess:"barEnabled"
            })
            //if changed in database
            list.enable=true;
        }
    }



    EVENTS_UI(){
        document.addEventListener("SHOW_PAGE", function(e){

            var page = e.detail.pageLink;
            if(page != "addBarServices" ){
                $("[DATI-ID=opening_Time_Restau]").slideUp();
                barCard_ui.RESET_FORM_ADD();
                barCard_ui.VIDE_PREVIEW_BAR();
                barCard_ui.msgErreurBar = [];
                dati_Erreurs.UPDATE("BarErreurs");
                $("[ DATI-ID=contactListServiceBar]").css("display","none");

            }

            if(page == "addBarServices"){
                setTimeout(function(){
                    $("[dati-page=addBarServices]").find("[bt_checked=CheckBoxBarReservation]").attr("button-checked","false");
                    $("[dati-page=addBarServices]").find("[bt_checked=CheckBoxBarReservation]").find("[is_checked=ReservationCheckBoxBarReservation]").css("display","none");
                    $("[dati-page=addBarServices]").find("[bt_checked=CheckBoxBarOrder]").attr("button-checked","false");
                    $("[dati-page=addBarServices]").find("[bt_checked=CheckBoxBarOrder]").find("[is_checked=OrderCheckBoxBarOrder]").css("display","none");
                }, 200);
                dati_contactForm.contact={};
                $("[dati-image-bar]").attr("src", "/assets/img/ui/white.png");
                $("[dati-role=clickableTrans]").css("background-image","");
                var event = new CustomEvent("showPageAddBar");
                document.dispatchEvent(event);
                var eventTrans = new CustomEvent("showformTranslateBar");
                document.dispatchEvent(eventTrans);
                var eventContact = new CustomEvent("showcontactFormBar");
                document.dispatchEvent(eventContact);
                var eventListContact = new CustomEvent("showcontactListServiceBar");
                document.dispatchEvent(eventListContact);
                var eventAlertContact = new CustomEvent("showContactAlerteBar");
                document.dispatchEvent(eventAlertContact);
                var eventTypeService= new CustomEvent("showCheckBoxBar");
                document.dispatchEvent(eventTypeService);
            }else if(page == "Bar"){

                SSAPI.SUBMIT({
                    uri:"/Bar/getAll",
                    onsuccess:"BarCardReceive"
                })
                var eventAlerte = new CustomEvent("showAlerteBar");


                document.dispatchEvent(eventAlerte);
            }



        }, false);

        $(document).on('change','[DATI-ID=uploadIamgeBarfile]',function(){

            var image =$(this)[0].files[0];

            var form = new FormData();
            form.append("img", image, $(this).val());
            SSAPI.upload({
                uri:"/Cdn/upload_img",
                onsuccess:"imageBarUploaded",
                data:form
            })
            //$(this).parent().find("img").attr("src",src);
        });

    }


    EVENTS_SSAPI(){


        document.addEventListener("imageBarUploaded", function(e){

            $("[dati-role=clickable]").css("background-image","url('"+e.detail.res[0]+"')");
            $("[dati-role=clickable]").css("background-position","center");
            $("[dati-role=clickable]").css("background-size","100% 100%");
            $("[dati-role=clickable]").css("background-repeat","no-repeat");
            $("[dati-composent=UploaderTrans]").find("[dati-role=clickableTrans]").css("background-image","url('"+e.detail.res[0]+"')");
            $("[dati-composent=UploaderTrans]").find("[dati-role=clickableTrans]").css("background-position","center");
            $("[dati-composent=UploaderTrans]").find("[dati-role=clickableTrans]").css("background-size","100% 100%");
            $("[dati-composent=UploaderTrans]").find("[dati-role=clickableTrans]").css("background-repeat","no-repeat");
            $("[dati-image-bar]").attr("src", e.detail.res[0]);
            iBarCard.imgBarUploaded = e.detail.res[0] ;
            formTrx_ui.imgTransUploaded=e.detail.res[0] ;


        }, false);
        document.addEventListener("BarCardReceive", function(e){

            barCard_ui.DATALIST(e.detail);


        }, false);

        /* ADD BAR */
        document.addEventListener("BarAdded", function(e){
            barCard_ui.RESET_FORM_ADD();
            restaurantCard_ui.SHOW_POPUP_SUCCESS();
        }, false);

        document.addEventListener("BarAdded_error", function(e){

            restaurantCard_ui.SHOW_POPUP_ERROR();
        }, false);
        /* DELETE BAR */
        document.addEventListener("BarDeleted", function(e){

            barCard_ui.DELETE_ID_FROM_LIST(e.detail.res);
        }, false);

        document.addEventListener("BarDeleted_error", function(e){


        }, false);

        /* UPDATE BAR */
        document.addEventListener("BarUpdated", function(e){

            restaurantCard_ui.SHOW_POPUP_SUCCESS_UPDATE();
        }, false);
        document.addEventListener("BarUpdated_error", function(e){

            restaurantCard_ui.SHOW_POPUP_ERROR()
        }, false);

    }
}

let iBarCard = new imp_BarCard();