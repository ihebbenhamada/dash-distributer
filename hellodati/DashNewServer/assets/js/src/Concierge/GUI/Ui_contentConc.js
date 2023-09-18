class Ui_congContent{
    constructor() {
        this.cards=[];
        this.categorie=[];
        this.imageItemConc=null;
        this.imageItemConcUp=null;
        this.selectedCat=null;
        this.selectedItem=null;
        this.msgErreurConcItem=[];
        this.msgErreurConcItemUp=[];
        this.EVENT_UI();
    }


    DATALIST(data){

        this.cards = [];
        for(var i=0;i < data.res.length; i++){
            var card = {};
            card.id = data.res[i].id;
            card.hotel_id = data.res[i].hotel_id;
            card.cat_conc_id = data.res[i].cat_conc_id;
            card.conc_id = data.res[i].conc_id;
            card.title = data.res[i].name;
            card.summary = data.res[i].summary;
            card.image = data.res[i].img1;
            card.image2 = data.res[i].img2;
            card.enable = data.res[i].enable;
            card.num_views = data.res[i].num_views;
            card.atteint = data.res[i].atteint;
            card.type = data.res[i].type;
            card.clicked = data.res[i].clicked;
            card.descrip = data.res[i].descrip;
            card.price = data.res[i].price;
            card.translate = data.res[i].translate;
            this.cards.push(card);
        }

    }
    CATEGORIELIST(data){
        this.categorie = data.res;
        congContent_ui.DATALIST_AVAILABLE_CATEGORIES(data.res);


    }
    DATALIST_AVAILABLE_CATEGORIES(data){
        var options = "<option value=''>SELECT CATEGORY </option>";
        for (var i = 0; i < data.length; i++) {
            options = options + '<option value="' + data[i].id + '">'+data[i].name+'</option>';
        }
        $("[dati-page=addConciergeItem]").find("[DATI-SELECT-CATEGORIES-CONC]").html(options);
        $("[dati-page=editItemConcierge]").find("[DATI-SELECT-CATEGORIES-CONC]").html(options);

    }


    FIN_BY_ID_IN_LIST(list,id){
        for(var i=0; i < list.length; i++){
            if(list[i].id == id){
                return list[i];
            }
        }
    }

    SETSELECTED_detail(rest_element){
        var id = $(rest_element).parent().parent().attr("DATI-id");
        var listSearch = eval($(rest_element).parent().parent().parent().attr("DATI-LIST"));
        this.selectedItem = this.FIN_BY_ID_IN_LIST(listSearch,id);


    }

    CANCEL_ALERTE(){
        $("[DATI-PAGE=ConciergeContents]").find("[dati-id=ItemAlerte]").find("[class=overlay_restau]").css("display", "none");
    }
    VALIDATE_ALERTE(){

        var id = this.selectedItem.id;
        var conc_id =this.selectedItem.conc_id ;

        iConciergeContent.DELETE_ITEM(id,conc_id);

    }
    TOGGEL_ALERTE(){
        $("[DATI-PAGE=ConciergeContents]").find("[dati-id=ItemAlerte]").find("[class=overlay_restau]").css("display", "block");
    }
    DELETE_NAME(){
        var title = this.selectedItem.title;
        var titleUper = title.toUpperCase();
        $("[DATI-ID=delete-item-name]").html("Are you sure to delete "+titleUper);
    }
    delete(rest_element){
        this.SETSELECTED_detail(rest_element);
       this.TOGGEL_ALERTE();
        this.DELETE_NAME();
    }


    /* ******* DELETE ******* */
    GET_POSITION_IN_LIST(list,id){
        for(var i=0; i<list.length;i++){
            if(list[i].id == id){
                return i;
            }
        }
        return -1;
    }

    DELETE_ID_FROM_LIST(id){
        var pos = congContent_ui.GET_POSITION_IN_LIST(congContent_ui.cards,id);
        if(pos != -1){
            congContent_ui.cards.splice(pos, 1);
        }
        Concierge_ui.UPDATE("ConciergeContentList");
        congContent_ui.CANCEL_ALERTE();
    }
    /* ******* END DELETE ******* */



    FIN_BY_ID_IN_CAT(list,id){

        for(var i=0; i < list.length; i++){
            if(list[i].cat_rest_id == id){

                return list[i];
            }

        }
    }


    SETSELECTED_CAT(rest_element){
        $(".categories_name").find(".activeCategorie").removeClass("activeCategorie");
        $(rest_element).addClass("activeCategorie");
        this.selectedCat= eval($(rest_element).attr("DATI-ID"));
        var idCategories  = eval($(rest_element).attr("DATI-ID"));
        var event = new CustomEvent("filterConcByCat", {  detail: {id_cat:idCategories}});
        document.dispatchEvent(event);
    }

    RESET_FORM_ADD(){
        $("[ FORM-ID=form_add_item_Concierge]").find("[dati-input-title-item-conc]").val("");
        $("[ FORM-ID=form_add_item_Concierge]").find("[dati-input-description-item-conc]").val("");
        $("[ FORM-ID=form_add_item_Concierge]").find("[dati-input-summary-item-conc]").val("");
        $("[ FORM-ID=form_add_item_Concierge]").find("[dati-input-price-item-conc]").val("");
        $("[ FORM-ID=form_add_item_Concierge]").find("[dati-select-categories-conc]").val("");
        $("[ FORM-ID=form_add_item_Concierge]").find("[dati-role=clickableTrans]").css("background-image","none");
        $("[dati-page=addConciergeItem]").find("[bt_checked=CheckBoxConciergeItemOrder]").attr("button-checked","false");
        $("[dati-page=addConciergeItem]").find("[bt_checked=CheckBoxConciergeItemOrder]").find("[is_checked=OrderCheckBoxConciergeItemOrder]").css("display","none");
        $("[dati-page=addConciergeItem]").find("[bt_checked=CheckBoxConciergeItemReservation]").attr("button-checked","false");
        $("[dati-page=addConciergeItem]").find("[bt_checked=CheckBoxConciergeItemReservation]").find("[is_checked=ReservationCheckBoxConciergeItemReservation]").css("display","none");
        $("[dati-page=addConciergeItem]").find("[bt_checked=CheckBoxConciergeItemResquest]").attr("button-checked","false");
        $("[dati-page=addConciergeItem]").find("[bt_checked=CheckBoxConciergeItemResquest]").find("[is_checked=RequestCheckBoxConciergeItemResquest]").css("display","none");
        $("[dati-page=addConciergeItem]").find("[dati-id=Order]").val("");
        $("[dati-page=addConciergeItem]").find("[dati-id=Reservation]").val("");

    }
    VIDE_PREVIEW_CONC_ITEM(){
        $("[DATI-TITLE-CONC-ITEM]").html("");
        $("[ DATI-PREVIEW-CONC-ITEM]").css("opacity","0");
        $("[  DATI-IMAGE-CONC-ITEM]").css("opacity","0");

    }

    VERIF_FORM_ADD_CONTENT_CONC(element) {
        this.msgErreurConcItem = [];
        dati_Erreurs.UPDATE("ConcItemErreurs");
        var id = Concierge_ui.selectedConcierge.id;
     /*   var cat_id = this.selectedCat;*/
        var cat_id =  $("[dati-page=addConciergeItem]").find("[DATI-SELECT-CATEGORIES-CONC]").val();
        var name = $(element).find("[DATI-INPUT-NAME=title]").val();
        var description = $(element).find("[DATI-INPUT-NAME=description]").val();
        var summary = $(element).find("[dati-input-summary-item-conc]").val();
        var img1 = this.imageItemConc;
        var img2 = this.imageItemConc;
        var price =  $(element).find("[dati-input-name=price]").val();
        var enable = 1;
        var type;
        var translate = formTrx_ui.save_addTrx;

        for (const [key, value] of Object.entries(translate)) {
            if (!value.hasOwnProperty("image")) {
                translate[key]["img1"] = img1;
            } else {
                if (translate[key]["image"] != null && translate[key]["image"] != "") {
                    translate[key]["img1"] = translate[key]["image"];
                } else {
                    translate[key]["img1"] = img1;
                }
            }
            translate[key]["name"] = translate[key]["title"];


        }
        if ($("[dati-page=addConciergeItem]").find("[bt_checked=CheckBoxConciergeItemOrder]").attr("button-checked") == "false" && $("[dati-page=addConciergeItem]").find("[bt_checked=CheckBoxConciergeItemReservation]").attr("button-checked") == "false" && $("[dati-page=addConciergeItem]").find("[bt_checked=CheckBoxConciergeItemResquest]").attr("button-checked") == "false") {
            type = 0;
        }
        if ($("[dati-page=addConciergeItem]").find("[bt_checked=CheckBoxConciergeItemOrder]").attr("button-checked") == "true" && $("[dati-page=addConciergeItem]").find("[bt_checked=CheckBoxConciergeItemReservation]").attr("button-checked") == "false" && $("[dati-page=addConciergeItem]").find("[bt_checked=CheckBoxConciergeItemResquest]").attr("button-checked") == "false") {
            type = 1;
        }

        if ($("[dati-page=addConciergeItem]").find("[bt_checked=CheckBoxConciergeItemOrder]").attr("button-checked") == "false" && $("[dati-page=addConciergeItem]").find("[bt_checked=CheckBoxConciergeItemReservation]").attr("button-checked") == "true" && $("[dati-page=addConciergeItem]").find("[bt_checked=CheckBoxConciergeItemResquest]").attr("button-checked") == "false") {
            type = 2;
        }
        if ($("[dati-page=addConciergeItem]").find("[bt_checked=CheckBoxConciergeItemOrder]").attr("button-checked") == "true" && $("[dati-page=addConciergeItem]").find("[bt_checked=CheckBoxConciergeItemReservation]").attr("button-checked") == "true" && $("[dati-page=addConciergeItem]").find("[bt_checked=CheckBoxConciergeItemResquest]").attr("button-checked") == "false") {
            type = 3;
        }
        if ($("[dati-page=addConciergeItem]").find("[bt_checked=CheckBoxConciergeItemOrder]").attr("button-checked") == "false" && $("[dati-page=addConciergeItem]").find("[bt_checked=CheckBoxConciergeItemReservation]").attr("button-checked") == "false" && $("[dati-page=addConciergeItem]").find("[bt_checked=CheckBoxConciergeItemResquest]").attr("button-checked") == "true") {
            type = 4;
        }
        if ($("[dati-page=addConciergeItem]").find("[bt_checked=CheckBoxConciergeItemOrder]").attr("button-checked") == "true" && $("[dati-page=addConciergeItem]").find("[bt_checked=CheckBoxConciergeItemReservation]").attr("button-checked") == "false" && $("[dati-page=addConciergeItem]").find("[bt_checked=CheckBoxConciergeItemResquest]").attr("button-checked") == "true") {
            type = 5;
        }
        if ($("[dati-page=addConciergeItem]").find("[bt_checked=CheckBoxConciergeItemOrder]").attr("button-checked") == "false" && $("[dati-page=addConciergeItem]").find("[bt_checked=CheckBoxConciergeItemReservation]").attr("button-checked") == "true" && $("[dati-page=addConciergeItem]").find("[bt_checked=CheckBoxConciergeItemResquest]").attr("button-checked") == "true") {
            type = 6;
        }
        if ($("[dati-page=addConciergeItem]").find("[bt_checked=CheckBoxConciergeItemOrder]").attr("button-checked") == "true" && $("[dati-page=addConciergeItem]").find("[bt_checked=CheckBoxConciergeItemReservation]").attr("button-checked") == "true" && $("[dati-page=addConciergeItem]").find("[bt_checked=CheckBoxConciergeItemResquest]").attr("button-checked") == "true") {
            type = 7;
        }


        if (name == "") {
            this.msgErreurConcItem.push("title is required");
            dati_Erreurs.UPDATE("ConcItemErreurs");
        }
        if (description === "") {
            this.msgErreurConcItem.push("description is required");
            dati_Erreurs.UPDATE("ConcItemErreurs");
        }
        if (this.imageItemConc === null) {
            this.msgErreurConcItem.push("image is required");
            dati_Erreurs.UPDATE("ConcItemErreurs");
        }

        if (this.msgErreurConcItem.length == 0) {
            /*vider list erreurs*/
            this.msgErreurConcItem = [];
            dati_Erreurs.UPDATE("ConcItemErreurs");
            /*vider list erreur*/
            if ($("[dati-page=addConciergeItem]").find("[DATI-SELECT-CATEGORIES-CONC]").val() == null || $("[dati-page=addConciergeItem]").find("[DATI-SELECT-CATEGORIES-CONC]").val()== "") {

                var data = {
                    id: id,
                    name: name,
                    translate: translate,
                    summary:summary,
                    img1: img1,
                    img2: img2,
                    type: type,
                    price:price,
                    enable: enable,
                    description: description

                };



                SSAPI.SUBMIT({
                    uri: "/Concierge/addItem",
                    data: data,
                    onsuccess: "ItemAdded",
                    onerror: "ItemAdded_error"
                });
            } else {

                var dataCat = {
                    id: id,
                    cat_id: $("[dati-page=addConciergeItem]").find("[DATI-SELECT-CATEGORIES-CONC]").val(),
                    name: name,
                    summary:summary,
                    translate: translate,
                    img1: img1,
                    img2: img2,
                    type: type,
                    price:price,
                    enable: enable,
                    description: description

                };




                SSAPI.SUBMIT({
                    uri: "/Concierge/addItem",
                    data: dataCat,
                    onsuccess: "FoodAdded",
                    onerror: "FoodAdded_error"
                });
            }
            congContent_ui.RESET_FORM_ADD();
            this.imageItemConc=null;
            congContent_ui.VIDE_PREVIEW_CONC_ITEM();
        }


    }


    /* ******* UPDATE ******* */


    VERIF_FORM_EDIT_ITEM(element){
        this.msgErreurConcItemUp = [];
        dati_Erreurs.UPDATE("ConcItemUpErreurs");
        var id = congContent_ui.selectedItem.id ;
        var cong_id = congContent_ui.selectedItem.conc_id;
        var cat_id =  $("[dati-page=editItemConcierge]").find("[DATI-SELECT-CATEGORIES-CONC]").val();
        var translate= formTrx_ui.save_addTrx ;
        var price = $(element).find("[dati-input-name=price]").val();
        var name = $(element).find("[dati-input-name-title-concierge]").val();
        var description = $(element).find("[dati-input-description-concierge]").val();
        var summary = $(element).find("[dati-input-summary-item-conc]").val();
        if(  this.imageItemConcUp!= null){
            var img1 =  this.imageItemConcUp;
            var img2 =   this.imageItemConcUp;
        }else {
            var img1 = congContent_ui.selectedItem.image;
            var img2 = congContent_ui.selectedItem.image;
        };

        var enable = 1 ;
        var type;

        if ($("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemOrderUp]").attr("button-checked") == "false" && $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemReservationUp]").attr("button-checked") == "false" && $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemResquestUp]").attr("button-checked") == "false") {
            type = 0;
        }
        if ($("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemOrderUp]").attr("button-checked") == "true" && $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemReservationUp]").attr("button-checked") == "false" && $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemResquestUp]").attr("button-checked") == "false") {
            type = 1;
        }

        if ($("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemOrderUp]").attr("button-checked") == "false" && $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemReservationUp]").attr("button-checked") == "true" && $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemResquestUp]").attr("button-checked") == "false") {
            type = 2;
        }
        if ($("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemOrderUp]").attr("button-checked") == "true" && $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemReservationUp]").attr("button-checked") == "true" && $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemResquestUp]").attr("button-checked") == "false") {
            type = 3;
        }
        if ($("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemOrderUp]").attr("button-checked") == "false" && $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemReservationUp]").attr("button-checked") == "false" && $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemResquestUp]").attr("button-checked") == "true") {
            type = 4;
        }
        if ($("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemOrderUp]").attr("button-checked") == "true" && $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemReservationUp]").attr("button-checked") == "false" && $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemResquestUp]").attr("button-checked") == "true") {
            type = 5;
        }
        if ($("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemOrderUp]").attr("button-checked") == "false" && $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemReservationUp]").attr("button-checked") == "true" && $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemResquestUp]").attr("button-checked") == "true") {
            type = 6;
        }
        if ($("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemOrderUp]").attr("button-checked") == "true" && $("[dati-page=editItemConcierge]").find("[bt_checked=CheckBoxConciergeItemReservationUp]").attr("button-checked") == "true" && $("[dati-page=addConciergeItem]").find("[bt_checked=CheckBoxConciergeItemResquestUp]").attr("button-checked") == "true") {
            type = 7;
        }

        for (const [key, value] of Object.entries(translate)) {
            if (!value.hasOwnProperty("image")) {
                translate[key]["img1"] = img1;
            }else{
                if(translate[key]["image"] != null && translate[key]["image"] != ""){
                    translate[key]["img1"] = translate[key]["image"];
                }else{
                    translate[key]["img1"] = img1;
                }
            }
            translate[key]["name"] = translate[key]["title"];


        }

        if(name ==""){
            this.msgErreurConcItemUp.push("title is required");
            dati_Erreurs.UPDATE("ConcItemUpErreurs");
        }
        if(description===""){
            this.msgErreurConcItemUp.push("description is required");
            dati_Erreurs.UPDATE("ConcItemUpErreurs");
        }
        if( this.imageItemConcUp=== null && congContent_ui.selectedItem.image===null ){
            this.msgErreurConcItemUp.push("image is required");
            dati_Erreurs.UPDATE("ConcItemUpErreurs");
        }


        if(this.msgErreurConcItemUp.length == 0) {
            /*vider list erreurs*/
            this.msgErreurConcItemUp = [];
            dati_Erreurs.UPDATE("ConcItemUpErreurs");
            var data = {
                id: id,
                cong_id: cong_id,
                cat_id:cat_id,
                name: name,
                summary:summary,
                price:price,
                description: description,
                img1: img1,
                img2: img2,
                translate: translate,
                type: type,
                enable: enable,

            };


            SSAPI.SUBMIT({
                uri: "/Concierge/updateItem",
                data: data,
                onsuccess: "ConciergeItemUpdated",
                onerror: "ConciergeItemUpdated_error"
            });
            this.imageItemConcUp=null;
        }

    }
    /* ******* ENDUPDATE ******* */

    EVENT_UI(){




        /* ******************************** PREVIEW CONCIERGE ITEM ****************************************** */
        $("[DATI-INPUT-TITLE-ITEM-CONC]").on('keyup', function() {
            $("[DATI-TITLE-CONC-ITEM]").html( $("[ DATI-INPUT-TITLE-ITEM-CONC]").val());
            $("[ DATI-PREVIEW-CONC-ITEM]").css("opacity","1");
        });

        /* ******************************** End PREVIEW CONCIERGE ITEM****************************************** */

    }


}


let congContent_ui = new Ui_congContent();