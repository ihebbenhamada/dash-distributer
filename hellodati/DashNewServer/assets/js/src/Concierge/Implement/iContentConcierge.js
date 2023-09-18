class imp_ConciergeContent{
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();
    }
    DELETE_ITEM(id,cong_id){
            SSAPI.SUBMIT({
                uri:"/Concierge/deleteItem",
                onsuccess:"itemDeleted",
                onerror:"itemDeleted_error",
                data:{
                    id:id,
                    cong_id:cong_id,
                }
            })



        restauContent_ui.CANCEL_ALERTE();
    }
    ENABLE_CONCIERGE_ITEM(list){
        var id =list.id;
        var conc_id =list.conc_id;

        if(list.enable){

            SSAPI.SUBMIT({
                uri:"/Concierge/disableItem",
                data:{
                    id:id,
                    cong_id: conc_id
                },
                onsuccess:"ConcItemDisabled"
            })
            //if changed in database
            list.enable=false;
            $("[DATI-ID=conciergeCard"+id+"]").attr("dati-default_value",0);

        }else{

            SSAPI.SUBMIT({
                uri:"/Concierge/enableItem",
                data:{
                    id:id,
                    cong_id: conc_id
                },
                onsuccess:"ConcItemEnabled"
            })
            //if changed in database
            list.enable=true;
            $("[DATI-ID=conciergeCard"+id+"]").attr("dati-default_value",1);

        }
    }
    EVENTS_UI(){


        document.addEventListener("SHOW_PAGE", function(e) {

            var page = e.detail.pageLink;
            if (page == "ConciergeContents") {
              /*  cat-id become null because in congContent_ui.selectedCat save the selected one*/
                congContent_ui.selectedCat = null ;
                /* end cat-id become null because in congContent_ui.selectedCat save the selected one*/
                SSAPI.SUBMIT({
                    uri:"/Concierge/getAllItemByCong",
                    data :{id:Concierge_ui.selectedConcierge.id},
                    onsuccess:"ConciergeContentRecieve"

                })
                SSAPI.SUBMIT({
                    uri:"/Concierge/getAllCategories",
                    data :{id:Concierge_ui.selectedConcierge.id},
                    onsuccess:"ConciergeUpdateBar"

                })
                var eventAlerteConc = new CustomEvent("showAlerteItem")

                document.dispatchEvent(eventAlerteConc);

            }

            if(page =="addConciergeItem"){
                setTimeout(function(){
                    $("[dati-page=addConciergeItem]").find("[bt_checked=CheckBoxConciergeItemOrder]").attr("button-checked","false");
                    $("[dati-page=addConciergeItem]").find("[bt_checked=CheckBoxConciergeItemOrder]").find("[is_checked=OrderCheckBoxConciergeItemOrder]").css("display","none");
                    $("[dati-page=addConciergeItem]").find("[bt_checked=CheckBoxConciergeItemReservation]").attr("button-checked","false");
                    $("[dati-page=addConciergeItem]").find("[bt_checked=CheckBoxConciergeItemReservation]").find("[is_checked=ReservationCheckBoxConciergeItemReservation]").css("display","none");
                    $("[dati-page=addConciergeItem]").find("[bt_checked=CheckBoxConciergeItemResquest]").attr("button-checked","false");
                    $("[dati-page=addConciergeItem]").find("[bt_checked=CheckBoxConciergeItemResquest]").find("[is_checked=RequestCheckBoxConciergeItemResquest]").css("display","none");
                }, 300);
                var eventTrx = new CustomEvent("showformTranslateConcItem");
                document.dispatchEvent(eventTrx);
                if(congContent_ui.selectedCat != null){
                    $("[dati-page=addConciergeItem]").find("[DATI-SELECT-CATEGORIES-CONC]").val( congContent_ui.selectedCat);
                }
                SSAPI.SUBMIT({
                    uri:"/Concierge/getAllCategories",
                    data :{id:Concierge_ui.selectedConcierge.id},
                    onsuccess:"ConciergeUpdateBar"

                })
                var eventTypeService= new CustomEvent("showCheckBoxConciergeItem");
                document.dispatchEvent(eventTypeService);
            }
            if(page != "addConciergeItem"){
                congContent_ui.RESET_FORM_ADD();
                congContent_ui.VIDE_PREVIEW_CONC_ITEM();
                congContent_ui.msgErreurConcItem = [];
                dati_Erreurs.UPDATE("ConcItemErreurs");

            }

            if(page == "editItemConcierge") {

                UpdateConc_ui.READ_VALUE_INPUT_ITEM();

                //sow trx form
                //updateEvent_ui.translate = eventCard_ui.selectedEvent.translate;
                var trx = congContent_ui.selectedItem.translate;
                UpdateConc_ui.translateItem = {};
                if( congContent_ui.selectedItem.hasOwnProperty("translate")){
                    if( congContent_ui.selectedItem.translate != null &&  congContent_ui.selectedItem.translate != ""){
                        for(var i=0; i<trx.length; i++){
                            try {
                                var image = trx[i]["img1"];
                            }catch (e) {

                            }
                            try {
                                var description = trx[i]["description"];
                            }catch (e) {

                            }
                            try {
                                var title = trx[i]["name"];
                            }catch (e) {

                            }
                            try {
                                var summary = trx[i]["summary"];
                            }catch (e) {

                            }
                            try {
                                var code = trx[i]["trx_code"];
                                UpdateConc_ui.translateItem[code] = {};
                                UpdateConc_ui.translateItem[code]["title"] = title;
                                UpdateConc_ui.translateItem[code]["image"] = image;
                                UpdateConc_ui.translateItem[code]["description"] = description;
                                UpdateConc_ui.translateItem[code]["summary"] = summary;

                            }catch (e) {
                            }
                        }
                    }
                }

                var eventTrx = new CustomEvent("showformTranslateConciergeItemUp");

                document.dispatchEvent(eventTrx);
                var eventTypeService= new CustomEvent("showCheckBoxConciergeItemUp");
                document.dispatchEvent(eventTypeService);
            }

        })


        $(document).on('change','[DATI-ID=uploadIamgeCatConciergeBarfile]',function(){
            var image =$(this)[0].files[0];
            var form = new FormData();
            form.append("img", image, $(this).val());
            SSAPI.upload({
                uri:"/Cdn/upload_img",
                onsuccess:"imageCatConcUploaded",
                data:form
            })
            //$(this).parent().find("img").attr("src",src);
        });
        $(document).on('change','[DATI-ID=uploadConciergeItemPhotofile]',function(){
            var image =$(this)[0].files[0];
            var form = new FormData();
            form.append("img", image, $(this).val());
            SSAPI.upload({
                uri:"/Cdn/upload_img",
                onsuccess:"imageItemConcUploaded",
                data:form
            })
            //$(this).parent().find("img").attr("src",src);
        });
        $(document).on('change','[DATI-ID=uploadItemConciergePhotoUpfile]',function(){
            var image =$(this)[0].files[0];
            var form = new FormData();
            form.append("img", image, $(this).val());
            SSAPI.upload({
                uri:"/Cdn/upload_img",
                onsuccess:"imageItemConcUpUploaded",
                data:form
            })
            //$(this).parent().find("img").attr("src",src);
        });

    }

    EVENTS_SSAPI(){
        document.addEventListener("imageCatConcUploaded", function(e){
           /* $("[DATI-IMAGE-FOOD]").attr("src", e.detail.res[0]);*/
            $("[dati-id=ConciergeBar]").find("[dati-role=clickableTrans]").css("background-image","url('"+e.detail.res[0]+"')");
            $("[dati-id=ConciergeBar]").find("[dati-role=clickableTrans]").css("background-position","center");
            $("[dati-id=ConciergeBar]").find("[dati-role=clickableTrans]").css("background-size","100% 100%");
            $("[dati-id=ConciergeBar]").find("[dati-role=clickableTrans]").css("background-repeat","no-repeat");
            CategoriesConc_ui.imageCat=e.detail.res[0] ;


        }, false);
        document.addEventListener("imageItemConcUploaded", function(e){
            /* $("[DATI-IMAGE-FOOD]").attr("src", e.detail.res[0]);*/
            $("[dati-id=uploadConciergeItemPhoto]").find("[dati-role=clickableTrans]").css("background-image","url('"+e.detail.res[0]+"')");
            $("[dati-id=uploadConciergeItemPhoto]").find("[dati-role=clickableTrans]").css("background-position","center");
            $("[dati-id=uploadConciergeItemPhoto]").find("[dati-role=clickableTrans]").css("background-size","100% 100%");
            $("[dati-id=uploadConciergeItemPhoto]").find("[dati-role=clickableTrans]").css("background-repeat","no-repeat");
            $("[DATI-IMAGE-CONC-ITEM]").attr("src", e.detail.res[0]);
            $("[DATI-IMAGE-CONC-ITEM]").css("opacity","1");
            $("[ DATI-PREVIEW-CONC-ITEM]").css("opacity","1");
            congContent_ui.imageItemConc=e.detail.res[0] ;
            formTrx_ui.imgTransUploaded = e.detail.res[0] ;


        }, false);
        document.addEventListener("imageItemConcUpUploaded", function(e){
            /* $("[DATI-IMAGE-FOOD]").attr("src", e.detail.res[0]);*/
            $("[dati-id=uploadItemConciergePhotoUp]").find("[dati-role=clickableTrans]").css("background-image","url('"+e.detail.res[0]+"')");
            $("[dati-id=uploadItemConciergePhotoUp]").find("[dati-role=clickableTrans]").css("background-position","center");
            $("[dati-id=uploadItemConciergePhotoUp]").find("[dati-role=clickableTrans]").css("background-size","100% 100%");
            $("[dati-id=uploadItemConciergePhotoUp]").find("[dati-role=clickableTrans]").css("background-repeat","no-repeat");
            congContent_ui.imageItemConcUp=e.detail.res[0] ;
            formTrx_ui.imgTransUploaded = e.detail.res[0] ;
            $("[dati-image-conc-item-up]").attr("src", e.detail.res[0]);


        }, false);
        document.addEventListener("ConciergeContentRecieve", function(e){
            congContent_ui.DATALIST(e.detail);

        /*    restauContent_ui.DATALIST_BEFORE_FILTER_WITH_CAT(e.detail);
            restauContent_ui.SHOW_BT_ADD();*/
        }, false);

        document.addEventListener("ConciergeUpdateBar", function(e){
            congContent_ui.CATEGORIELIST(e.detail);
            $("[dati-page=addConciergeItem]").find("[DATI-SELECT-CATEGORIES-CONC]").val( congContent_ui.selectedCat);
        }, false);

        /* ADD ITEM */
        document.addEventListener("ItemAdded", function(e){
            restaurantCard_ui.SHOW_POPUP_SUCCESS();
         /*   restauContent_ui.RESET_FORM_ADD();*/
        }, false);

        document.addEventListener("ItemAdded_error", function(e){
            restaurantCard_ui.SHOW_POPUP_ERROR();

        }, false);
        /* DELETE ITEM */
        document.addEventListener("itemDeleted", function(e){

            congContent_ui.DELETE_ID_FROM_LIST(e.detail.res);
        }, false);

        document.addEventListener("itemDeleted_error", function(e){
        }, false);

        /* UPDATE ITEM */
        document.addEventListener("ConciergeItemUpdated", function(e){
            restaurantCard_ui.SHOW_POPUP_SUCCESS_UPDATE();
        }, false);

        document.addEventListener("ConciergeItemUpdated_error", function(e){
            restaurantCard_ui.SHOW_POPUP_ERROR()
        }, false);

    }
}

let iConciergeContent = new imp_ConciergeContent();