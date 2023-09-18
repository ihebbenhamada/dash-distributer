class imp_RestaurantCard{
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();
        this.imgRestUploaded=null;
    }
    DELETE_RESTAU(id){

        SSAPI.SUBMIT({
            uri:"/Restaurant/delete",
            onsuccess:"RestauDeleted",
            onerror:"RestauDeleted_error",
            data:{
                rest_id:id
            }
        })
    }
    ENABLE_RESTAURANT(list){
        var id =list.id;
        if(list.enable){

            SSAPI.SUBMIT({
                uri:"/Restaurant/disableRest",
                data:{
                    rest_id: id
                },
                onsuccess:"restauDisabled"
            })
            //if changed in database
           list.enable=false;

        }else{
            // ss-api /Service/enable
            SSAPI.SUBMIT({
                uri:"/Restaurant/enableRest",
                data:{
                    rest_id: id
                },
                onsuccess:"restauEnabled"
            })
            //if changed in database
            list.enable=true;

        }
    }



    EVENTS_UI(){
        document.addEventListener("SHOW_PAGE", function(e){

            var page = e.detail.pageLink;
            if(page != "addFormServices" ){

                $("[DATI-ID=opening_Time_Restau]").slideUp();
                restaurantCard_ui.RESET_FORM_ADD();
                restaurantCard_ui.VIDE_PREVIEW_REST();
                $("[ DATI-ID=contactListServiceRest]").css("display","none");


            }
            if(page != "addFormServices"){
                $("[DATI-ID=Promo_Restau]").slideUp();
                restaurantCard_ui.msgErreurRest = [];
                dati_Erreurs.UPDATE("RestErreurs");
            }
            if(page == "addFormServices"){
                setTimeout(function(){
                $("[dati-page=addFormServices]").find("[bt_checked=CheckBoxRestReservation]").attr("button-checked","false");
                $("[dati-page=addFormServices]").find("[bt_checked=CheckBoxRestReservation]").find("[is_checked=ReservationCheckBoxRestReservation]").css("display","none");
                $("[dati-page=addFormServices]").find("[bt_checked=CheckBoxRestOrder]").attr("button-checked","false");
                $("[dati-page=addFormServices]").find("[bt_checked=CheckBoxRestOrder]").find("[is_checked=OrderCheckBoxRestOrder]").css("display","none");
                }, 200);
                dati_contactForm.contact={};
                Shifts_ui.RESET_TABLE("opening_Time_Restau");
                restaurantCard_ui.RESET_FORM_ADD();
                Shifts_ui.Shifts = {};
                Shifts_ui.Shifts["mon"] = [];
                Shifts_ui.Shifts["tue"] = [];
                Shifts_ui.Shifts["wed"] = [];
                Shifts_ui.Shifts["thu"] = [];
                Shifts_ui.Shifts["fri"] = [];
                Shifts_ui.Shifts["sat"] = [];
                Shifts_ui.Shifts["sun"] = [];
                $("[dati-image-meeting]").attr("src", "/assets/img/ui/white.png");
                $("[dati-role=clickableTrans]").css("background-image","");
                var event = new CustomEvent("showPageAddRestau");
                document.dispatchEvent(event);
                var eventTrans = new CustomEvent("showformTranslateRest");
                document.dispatchEvent(eventTrans);
                var eventContact = new CustomEvent("showcontactFormRest");
                document.dispatchEvent(eventContact);
                var eventListContact = new CustomEvent("showcontactListService");
                document.dispatchEvent(eventListContact);
                var eventAlertContact = new CustomEvent("showContactAlerte");
                document.dispatchEvent(eventAlertContact);
                var eventTypeService= new CustomEvent("showCheckBoxRest");
                document.dispatchEvent(eventTypeService);


            }

           else if(page == "Restaurant" ){

                SSAPI.SUBMIT({
                    uri:"/Restaurant/getAll",
                    onsuccess:"RestaurantCardReceive"
                })
               /* getRateNumber*/
                SSAPI.SUBMIT({
                    uri:"/Restaurant/getNbrRate",
                    data :{service_id:1},
                    onsuccess:"rateNumber"

                })
                /* end getRateNumber*/
                /* getFiveStar*/
                SSAPI.SUBMIT({
                    uri:"/Restaurant/getAvgFiveStars",
                    data :{service_id:1},
                    onsuccess:"rateNumber"

                })
                /* end getFiveStar*/

                var eventAlerte = new CustomEvent("showAlerte")

                document.dispatchEvent(eventAlerte);

            }

        }, false);

        $(document).on('change','[DATI-ID=uploadIamgeRestaufile]',function(){
            var image =$(this)[0].files[0];
            var form = new FormData();
            form.append("img", image, $(this).val());
            SSAPI.upload({
                uri:"/Cdn/upload_img",
                onsuccess:"imageRestauUploaded",
                data:form
            })
            //$(this).parent().find("img").attr("src",src);
        });
    }


    EVENTS_SSAPI(){
        document.addEventListener("imageRestauUploaded", function(e){
            $("[dati-role=clickable]").css("background-image","url('"+e.detail.res[0]+"')");
            $("[dati-role=clickable]").css("background-position","center");
            $("[dati-role=clickable]").css("background-size","100% 100%");
            $("[dati-role=clickable]").css("background-repeat","no-repeat");
            $("[dati-composent=UploaderTrans]").find("[dati-role=clickableTrans]").css("background-image","url('"+e.detail.res[0]+"')");
            $("[dati-composent=UploaderTrans]").find("[dati-role=clickableTrans]").css("background-position","center");
            $("[dati-composent=UploaderTrans]").find("[dati-role=clickableTrans]").css("background-size","100% 100%");
            $("[dati-composent=UploaderTrans]").find("[dati-role=clickableTrans]").css("background-repeat","no-repeat");
            $("[dati-image-restau]").attr("src", e.detail.res[0]);
            irestaurantCard.imgRestUploaded = e.detail.res[0] ;
            formTrx_ui.imgTransUploaded=e.detail.res[0] ;


        }, false);

        document.addEventListener("RestaurantCardReceive", function(e){
            restaurantCard_ui.DATALIST(e.detail);
        }, false);


        /* ADD RESTAU */
        document.addEventListener("RestauAdded", function(e){
            //restaurantCard_ui.RESET_FORM_ADD();
            restaurantCard_ui.SHOW_POPUP_SUCCESS();
        }, false);

        document.addEventListener("RestauAdded_error", function(e){
            restaurantCard_ui.SHOW_POPUP_ERROR()
        }, false);
/* DELETE RESTAU */
        document.addEventListener("RestauDeleted", function(e){

            restaurantCard_ui.DELETE_ID_FROM_LIST(e.detail.res);
        }, false);

        document.addEventListener("RestauDeleted_error", function(e){


        }, false);

        /* UPDATE RESTAU */
        document.addEventListener("RestaurenatUpdated", function(e){

            restaurantCard_ui.SHOW_POPUP_SUCCESS_UPDATE();
        }, false);
        document.addEventListener("RestaurantUpdated_error", function(e){

            restaurantCard_ui.SHOW_POPUP_ERROR();
        }, false);
        /* Nbre Rate */
        document.addEventListener("rateNumber", function(e){
            restaurantCard_ui.nbrRate = e.detail.res[0].nbr;

        }, false);

    }
}

let irestaurantCard = new imp_RestaurantCard();