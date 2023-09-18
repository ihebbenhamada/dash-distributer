class imp_ContentRestau{
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();
        this.imgFoodUploaded= null ;
    }
    DELETE_FOOD(id,rest_id,cat_id){

        SSAPI.SUBMIT({
            uri:"/Restaurant/deleteFood",
            onsuccess:"FoodDeleted",
            onerror:"FoodDeleted_error",
            data:{
                id:id,
                rest_id:rest_id,
                cat_id:cat_id,
            }
        })
        restauContent_ui.CANCEL_ALERTE();
    }
    ENABLE_FOODS(list){
        if(list.enable){
            SSAPI.SUBMIT({
                uri:"/Restaurant/disableFood",
                data:{
                    id:list.id,
                    rest_id:list.rest_id,
                    cat_id:list.cat_rest_id,
                },
                onsuccess:""
            })
            //if changed in database
            list.enable=false;
        }else{
            SSAPI.SUBMIT({
                uri:"/Restaurant/enableFood",
                data:{
                    id:list.id,
                    rest_id:list.rest_id,
                    cat_id:list.cat_rest_id,
                },
                onsuccess:""
            })
            //if changed in database
            list.enable=true;

        }
    }



    EVENTS_UI(){
        document.addEventListener("SHOW_PAGE", function(e){

            var page = e.detail.pageLink;
            if(page != "addDish"){
                restauContent_ui.RESET_FORM_ADD();
                restauContent_ui.VIDE_PREVIEW_FOOD();
                restauContent_ui.msgErreurFood = [];
                dati_Erreurs.UPDATE("FoodErreurs");
            }
            if(page == "addDish"){


                setTimeout(function(){
                    $("[dati-page=addDish]").find("[bt_checked=CheckBoxFoodOrder]").attr("button-checked","false");
                    $("[dati-page=addDish]").find("[bt_checked=CheckBoxFoodOrder]").find("[is_checked=OrderCheckBoxFoodOrder]").css("display","none");
                }, 200);
                $("[dati-image-food]").attr("src", "/assets/img/ui/white.png");
                $("[dati-role=clickableTrans]").css("background-image","");
                var eventTrans = new CustomEvent("showformTranslateFood");
                document.dispatchEvent(eventTrans);
                /*default category*/
                SSAPI.SUBMIT({
                    uri:"/Restaurant/getAllCategories",
                    data :{id:restaurantCard_ui.selectedRest.id},
                    onsuccess:"headerShow"

                })

                $("[dati-page=addDish]").find("[DATI-SELECT-CATEGORIES]").val(restauContent_ui.selectedCat);
                var eventTypeService= new CustomEvent("showCheckBoxFood");
                document.dispatchEvent(eventTypeService);

            }

                if(page == "Restaurant\\/Contents") {


                SSAPI.SUBMIT({
                    uri:"/Restaurant/getAllFR",
                    data :{
                        id:restaurantCard_ui.selectedRest.id,
                        service_type_id:serviceCard_ui.selectedServiceId
                    },
                    onsuccess:"restauContentShow"

                })
                SSAPI.SUBMIT({
                    uri:"/Restaurant/getAllCategories",
                    data :{id:restaurantCard_ui.selectedRest.id},
                    onsuccess:"headerShow"

                })

                var eventAlerte = new CustomEvent("showAlerteDish")

                document.dispatchEvent(eventAlerte);
            }

            if(page != "Restaurant\\/Contents" && page != "addDish" && page != "formAddLanguage"){
                restauContent_ui.selectedCat =null;
            }
        }, false);
        $(document).on('change','[DATI-ID=uploadIamgeFoodfile]',function(){

            var image =$(this)[0].files[0];
            var form = new FormData();
            form.append("img", image, $(this).val());
            SSAPI.upload({
                uri:"/Cdn/upload_img",
                onsuccess:"imageFoodUploaded",
                data:form
            })
            //$(this).parent().find("img").attr("src",src);
        });
        $(document).on('change','[DATI-ID=uploadIamgeCatBarfile]',function(){
            var image =$(this)[0].files[0];
            var form = new FormData();
            form.append("img", image, $(this).val());
            SSAPI.upload({
                uri:"/Cdn/upload_img",
                onsuccess:"imageCatFoodUploaded",
                data:form
            })
            //$(this).parent().find("img").attr("src",src);
        });
    }


    EVENTS_SSAPI(){
        document.addEventListener("imageFoodUploaded", function(e){
            $("[DATI-IMAGE-FOOD]").attr("src", e.detail.res[0]);
            $("[dati-role=clickable]").css("background-image","url('"+e.detail.res[0]+"')");
            $("[dati-role=clickable]").css("background-position","center");
            $("[dati-role=clickable]").css("background-size","100% 100%");
            $("[dati-role=clickable]").css("background-repeat","no-repeat");
            $("[dati-composent=UploaderTrans]").find("[dati-role=clickableTrans]").css("background-image","url('"+e.detail.res[0]+"')");
            $("[dati-composent=UploaderTrans]").find("[dati-role=clickableTrans]").css("background-position","center");
            $("[dati-composent=UploaderTrans]").find("[dati-role=clickableTrans]").css("background-size","100% 100%");
            $("[dati-composent=UploaderTrans]").find("[dati-role=clickableTrans]").css("background-repeat","no-repeat");
            icontentRestau.imgFoodUploaded = e.detail.res[0] ;
            formTrx_ui.imgTransUploaded=e.detail.res[0] ;


        }, false);
        document.addEventListener("imageCatFoodUploaded", function(e){
            $("[DATI-IMAGE-FOOD]").attr("src", e.detail.res[0]);
            $("[dati-id=Bar]").find("[dati-role=clickableTrans]").css("background-image","url('"+e.detail.res[0]+"')");
            $("[dati-id=Bar]").find("[dati-role=clickableTrans]").css("background-position","center");
            $("[dati-id=Bar]").find("[dati-role=clickableTrans]").css("background-size","100% 100%");
            $("[dati-id=Bar]").find("[dati-role=clickableTrans]").css("background-repeat","no-repeat");
            Categories_ui.imageCat=e.detail.res[0] ;


        }, false);
        document.addEventListener("restauContentShow", function(e){

            restauContent_ui.DATALIST(e.detail);
            restauContent_ui.DATALIST_BEFORE_FILTER_WITH_CAT(e.detail);
            restauContent_ui.SHOW_BT_ADD();


        }, false);
        document.addEventListener("headerShow", function(e){

            restauContent_ui.CATEGORIELIST(e.detail);
            $("[dati-page=addDish]").find("[DATI-SELECT-CATEGORIES]").val(restauContent_ui.selectedCat);


        }, false);
        /* ADD FOOD */
        document.addEventListener("FoodAdded", function(e){
            restaurantCard_ui.SHOW_POPUP_SUCCESS();
            restauContent_ui.RESET_FORM_ADD();
        }, false);

        document.addEventListener("FoodAdded_error", function(e){
            restaurantCard_ui.SHOW_POPUP_ERROR();
        }, false);
        /* DELETE FOOD */
        document.addEventListener("FoodDeleted", function(e){

            restauContent_ui.DELETE_ID_FROM_LIST(e.detail.res);
        }, false);

        document.addEventListener("FoodDeleted_error", function(e){

        }, false);
        /* UPDATED FOOD */
        document.addEventListener("FoodUpdated", function(e){

            restaurantCard_ui.SHOW_POPUP_SUCCESS_UPDATE();
        }, false);

        document.addEventListener("FoodUpdated_error", function(e){
            restaurantCard_ui.SHOW_POPUP_ERROR()
        }, false);


    }
}

let icontentRestau = new imp_ContentRestau();