class imp_ContentBar{
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();
        this.imgDrinkUploaded=null;
    }
    DELETE_DRINK(id,rest_id,cat_id){

        SSAPI.SUBMIT({
            uri:"/Bar/deleteFood",
            onsuccess:"drinkDeleted",
            onerror:"drinkDeleted_error",
            data:{
                id:id,
                rest_id:rest_id,
                cat_id:cat_id,
            }
        })
        barContent_ui.CANCEL_ALERTE();
    }
    ENABLE_Drink(list){


        if(list.enable){
            SSAPI.SUBMIT({
                uri:"/Bar/disableFood",
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
                uri:"/Bar/enableFood",
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
            if(page != "addDrinks" ){
                barContent_ui.RESET_FORM_ADD();
                barContent_ui.VIDE_PREVIEW_DRINK();
                barContent_ui.msgErreurDrinks = [];
                dati_Erreurs.UPDATE("DrinksErreurs");
            }
             if(page == "addDrinks"){
                 setTimeout(function(){
                     $("[dati-page=addDrinks]").find("[bt_checked=CheckBoxDrinkOrder]").attr("button-checked","false");
                     $("[dati-page=addDrinks]").find("[bt_checked=CheckBoxDrinkOrder]").find("[is_checked=OrderCheckBoxDrinkOrder]").css("display","none");
                 }, 200);
             $("[dati-image-drink]").attr("src", "/assets/img/ui/white.png");
             $("[dati-role=clickableTrans]").css("background-image","");
                 var eventTrans = new CustomEvent("showformTranslateDrink");
                 document.dispatchEvent(eventTrans);
                 SSAPI.SUBMIT({
                     uri:"/Bar/getAllCategories",
                     data :{id:barCard_ui.selectedBar.id},
                     onsuccess:"barHeaderShow"

                 });

                 $("[dati-page=addDrinks]").find("[DATI-SELECT-CATEGORIES-BAR]").val(barContent_ui.selectedDrinkCat);

                 var eventTypeService= new CustomEvent("showCheckBoxDrink");
                 document.dispatchEvent(eventTypeService);
               }
            if(page == "Bar\\/Contents"){


                SSAPI.SUBMIT({
                    uri:"/Bar/getAllFR",
                    data :{id:barCard_ui.selectedBar.id},
                    onsuccess:"barContentShow"

                });
                SSAPI.SUBMIT({
                    uri:"/Bar/getAllCategories",
                    data :{id:barCard_ui.selectedBar.id},
                    onsuccess:"barHeaderShow"

                });



                var eventAlerte = new CustomEvent("showAlerteDrink")


                document.dispatchEvent(eventAlerte);
            }

            if(page != "Bar\\/Contents" && page != "addDrinks"){

                barContent_ui.selectedDrinkCat =null;
            }
        }, false);
        $(document).on('change','[DATI-ID=uploadIamgeDrinkfile]',function(){
            var image =$(this)[0].files[0];
            var form = new FormData();
            form.append("img", image, $(this).val());
            SSAPI.upload({
                uri:"/Cdn/upload_img",
                onsuccess:"imageDrinkUploaded",
                data:form
            })
            //$(this).parent().find("img").attr("src",src);
        });

        $(document).on('change','[DATI-ID=uploadIamgeCatHeaderCBfile]',function(){

            var image =$(this)[0].files[0];

            var form = new FormData();
            form.append("img", image, $(this).val());
            SSAPI.upload({
                uri:"/Cdn/upload_img",
                onsuccess:"imageCatDrinkUploaded",
                data:form
            })
            //$(this).parent().find("img").attr("src",src);
        });
    }


    EVENTS_SSAPI(){
        document.addEventListener("imageDrinkUploaded", function(e){

            $("[dati-role=clickable]").css("background-image","url('"+e.detail.res[0]+"')");
            $("[dati-role=clickable]").css("background-position","center");
            $("[dati-role=clickable]").css("background-size","100% 100%");
            $("[dati-role=clickable]").css("background-repeat","no-repeat");
            $("[dati-composent=UploaderTrans]").find("[dati-role=clickableTrans]").css("background-image","url('"+e.detail.res[0]+"')");
            $("[dati-composent=UploaderTrans]").find("[dati-role=clickableTrans]").css("background-position","center");
            $("[dati-composent=UploaderTrans]").find("[dati-role=clickableTrans]").css("background-size","100% 100%");
            $("[dati-composent=UploaderTrans]").find("[dati-role=clickableTrans]").css("background-repeat","no-repeat");
            $("[dati-image-drink]").attr("src", e.detail.res[0]);
            icontentBar.imgDrinkUploaded = e.detail.res[0] ;
            formTrx_ui.imgTransUploaded=e.detail.res[0] ;


        }, false);
        document.addEventListener("imageCatDrinkUploaded", function(e){

            $("[dati-id=HeaderCB]").find("[dati-role=clickableTrans]").css("background-image","url('"+e.detail.res[0]+"')");
            $("[dati-id=HeaderCB]").find("[dati-role=clickableTrans]").css("background-position","center");
            $("[dati-id=HeaderCB]").find("[dati-role=clickableTrans]").css("background-size","100% 100%");
            $("[dati-id=HeaderCB]").find("[dati-role=clickableTrans]").css("background-repeat","no-repeat");
            CategoriesBar_ui.imageCat=e.detail.res[0] ;


        }, false);
        document.addEventListener("barContentShow", function(e){

            barContent_ui.DATALIST(e.detail);
            barContent_ui.DATALIST_BEFORE_FILTER_WITH_CAT(e.detail);
            barContent_ui.SHOW_BT_ADD();

        }, false);

        document.addEventListener("barHeaderShow", function(e){

            barContent_ui.CATEGORIELIST(e.detail);
            $("[dati-page=addDrinks]").find("[DATI-SELECT-CATEGORIES-BAR]").val(barContent_ui.selectedDrinkCat);



        }, false);
        /* ADD DRINK */
        document.addEventListener("DrinkAdded", function(e){

            restaurantCard_ui.SHOW_POPUP_SUCCESS();
            barContent_ui.RESET_FORM_ADD();
        }, false);

        document.addEventListener("DrinkAdded_error", function(e){
            restaurantCard_ui.SHOW_POPUP_ERROR();
        }, false);
        /* DELETE DRINK */
        document.addEventListener("drinkDeleted", function(e){

            barContent_ui.DELETE_ID_FROM_LIST(e.detail.res);
        }, false);

        document.addEventListener("drinkDeleted_error", function(e){

        }, false);
        /* UPDATED DRINK */
        document.addEventListener("drinkUpdated", function(e){

            restaurantCard_ui.SHOW_POPUP_SUCCESS_UPDATE();
        }, false);

        document.addEventListener("drinkUpdated_error", function(e){

            restaurantCard_ui.SHOW_POPUP_ERROR()
        }, false);



    }
}

let icontentBar = new imp_ContentBar();