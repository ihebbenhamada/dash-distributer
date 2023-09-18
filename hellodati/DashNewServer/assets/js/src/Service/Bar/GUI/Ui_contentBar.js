class Ui_barContent{
    constructor() {
        this.cards=[];
        this.categorie=[];
        this.cardsBeforeFilter=[];
        this.selectedDrink=null;
        this.selectedDrinkCat=null;
        this.EVENT_UI();
        this.msgErreurDrinks=[];
        this.msgErreurDrinksUpdate=[];
        this.promotion={};
    }



    DATALIST(data){

        this.cards = [];
        for(var i=0;i < data.res.length; i++){
            var card = {};
            card.id = data.res[i].id;
            card.hotel_id = data.res[i].hotel_id;
            card.cat_rest_id = data.res[i].cat_bar_id;
            card.rest_id = data.res[i].bar_id;
            card.title = data.res[i].name;
            card.summary = data.res[i].summary;
            card.type = data.res[i].type;
            card.image = data.res[i].img1;
            card.image2 = data.res[i].img2;
            card.enable = data.res[i].enable;
            card.num_views = data.res[i].num_views;
            card.atteint = data.res[i].atteint;
            card.clicked = data.res[i].clicked;
            card.price = data.res[i].price;
            card.translate = data.res[i].translate;
            card.descrip = data.res[i].descrip;
            if(data.res[i].promotion != null){
                card.discount = data.res[i].promotion.discount;
                card.begin_date = data.res[i].promotion.begin_date;
                card.end_date = data.res[i].promotion.end_date;
                card.begin_time = data.res[i].promotion.begin_time;
                card.end_time = data.res[i].promotion.end_time;
            }
            this.cards.push(card);
        }

    }
    CATEGORIELIST(data){

        this.categorie = data.res;
        barContent_ui.DATALIST_AVAILABLE_CATEGORIES(data.res);


    }
    DATALIST_AVAILABLE_CATEGORIES(data){
        var options = "<option value=''>SELECT CATEGORY </option>";
        for (var i = 0; i < data.length; i++) {
            options = options + '<option value="' + data[i].id + '">'+data[i].name+'</option>';
        }
        $("[dati-page=addDrinks]").find("[DATI-SELECT-CATEGORIES-BAR]").html(options);
        $("[dati-page=editDrinks]").find("[DATI-SELECT-CATEGORIES-BAR-UP]").html(options);

    }

    DATALIST_BEFORE_FILTER_WITH_CAT(data){

        this.cards = [];
        for(var i=0;i < data.res.length; i++){
            var card = {};
            card.id = data.res[i].id;
            card.hotel_id = data.res[i].hotel_id;
            card.cat_rest_id = data.res[i].cat_bar_id;
            card.rest_id = data.res[i].bar_id;
            card.title = data.res[i].name;
            card.summary = data.res[i].summary;
            card.type = data.res[i].type;
            card.image = data.res[i].img1;
            card.image2 = data.res[i].img2;
            card.enable = data.res[i].enable;
            card.num_views = data.res[i].num_views;
            card.atteint = data.res[i].atteint;
            card.clicked = data.res[i].clicked;
            card.price = data.res[i].price;
            card.descrip = data.res[i].descrip;
            card.translate = data.res[i].translate;
            if(data.res[i].promotion != null){
                card.discount = data.res[i].promotion.discount;
                card.begin_date = data.res[i].promotion.begin_date;
                card.end_date = data.res[i].promotion.end_date;
                card.begin_time = data.res[i].promotion.begin_time;
                card.end_time = data.res[i].promotion.end_time;
            }
            this.cards.push(card);
        }

    }
    VALIDATE_ALERTE(){
        var id = this.selectedDrink.id;
        var rest_id = this.selectedDrink.rest_id ;
        var cat_id = this.selectedDrink.cat_rest_id ;

        icontentBar.DELETE_DRINK(id,rest_id,cat_id);
    }
    CANCEL_ALERTE(){
        $("[DATI-PAGE=Bar\\/Contents]").find("[dati-id=DrinksAlerte]").find("[class=overlay_restau]").css("display", "none");
    }
    TOGGEL_ALERTE(){
        $("[DATI-PAGE=Bar\\/Contents]").find("[dati-id=DrinksAlerte]").find("[class=overlay_restau]").css("display", "block");
    }
    DELETE_NAME(){
        var title = this.selectedDrink.title;
        var titleUper = title.toUpperCase();
        $("[DATI-ID=delete-item-name]").html("Are you sure to delete "+titleUper+" Drinks");
    }
    delete(rest_element){
        this.SETSELECTED_detail(rest_element);
        this.TOGGEL_ALERTE();
        this.DELETE_NAME();
    }
    FIN_BY_ID_IN_LIST(list,id){
        for(var i=0; i < list.length; i++){
            if(list[i].id == id){
                return list[i];
            }
        }
    }

    SETSELECTED_detail(rest_element){
        var id = $(rest_element).parent().parent().parent().attr("DATI-id");

        var listSearch = eval($(rest_element).parent().parent().parent().parent().attr("DATI-LIST"));

        this.selectedDrink = this.FIN_BY_ID_IN_LIST(listSearch,id);

        this.HEDEAR_DETAIL_Drinks();

    }
    HEDEAR_DETAIL_Drinks(){


        $("[DATI-PAGE=detailNotif]").find("[DATI-ID=detail-name-restaurant]").html("Name : "+barContent_ui.selectedDrink.title);
        $("[DATI-PAGE=detailNotif]").find("[DATI-ID=detail-description-restaurant]").html("Description : "+barContent_ui.selectedDrink.descrip);
        $("[DATI-PAGE=detailNotif]").find("[DATI-ID=detail-image-restaurant]").attr('src',barContent_ui.selectedDrink.image);
        $("[DATI-PAGE=detailNotif]").find("[dati-taux-clics]").html( barContent_ui.selectedDrink.num_views);
        $("[DATI-PAGE=detailNotif]").find("[dati-taux-views]").html(barContent_ui.selectedDrink.clicked);
    }

    SETSELECTED_CAT(rest_element){
        $(".categories_name").find(".activeCategorie").removeClass("activeCategorie");
        $(rest_element).addClass("activeCategorie");
        this.selectedDrinkCat= eval($(rest_element).attr("DATI-ID"));

        var idCategories  = eval($(rest_element).attr("DATI-ID"));

        var event = new CustomEvent("filterDrinksByCat", {  detail: {id_cat:idCategories}});
        document.dispatchEvent(event);
    }
    /* ******************************** CRUD CONTENT RESTAU FOOD ****************************************** */
    /* ****** Add ******* */
    EVENT_UI(){

        $(document).ready(function(){
            $(document).on('click','[DATI-FOR=form_add_Content_Bar] [DATI-COMPOSENT=SUBMIT]',function() {
                var formId = $(this).attr("DATI-FOR");
                var fn = $("[FORM-ID="+formId+"]").attr("DATI-SEND");
                var element = "$('[FORM-ID="+formId+"]')";
                fn=fn+"("+element+")";
                eval(fn);
            });

        });

        //calculate price promo
        $(document).on('keyup','[dati-price_promo-drink-input]',function() {
            $("[dati-percent_promo-drink-input]").val(100-($("[dati-price_promo-drink-input]").val() * 100 / $("[dati-input-price-order-drink]").val()));
        });

        $(document).on('keyup','[dati-percent_promo-drink-input]',function() {
            $("[dati-price_promo-drink-input]").val($("[dati-input-price-order-drink]").val()-($("[dati-input-price-order-drink]").val() * $("[dati-percent_promo-drink-input]").val() / 100));
        });

        $(document).on('keyup','[dati-input-price-order-drink]',function() {
            if($("[dati-percent_promo-drink-input]").val() != ""){
                $("[dati-price_promo-drink-input]").val($("[dati-input-price-order-drink]").val()-($("[dati-input-price-order-drink]").val() * $("[dati-percent_promo-drink-input]").val() / 100));
            }else if($("[dati-price_promo-drink-input]").val() != ""){
                $("[dati-percent_promo-drink-input]").val($("[dati-price_promo-drink-input]").val() * 100 / $("[dati-input-price-order-drink]").val());
            }
        });

        /* ******************************** PREVIEW DINK ****************************************** */
        $("[DATI-INPUT-TITLE-DRINK]").on('keyup', function() {
            $("[dati-title-drink]").html( $("[ DATI-INPUT-TITLE-DRINK]").val());



        });

        $("[DATI-INPUT-DESCRIPTION-DRINK]").on('keyup', function() {

            $("[dati-description-drink]").html( $("[DATI-INPUT-DESCRIPTION-DRINK]").val());


        });
        $("[DATI-INPUT-PRICE-DRINK]").on('keyup', function() {

            $("[dati-price-drink]").html( $("[DATI-INPUT-PRICE-DRINK]").val() +"  DT");


        });


        /* ******************************** End PREVIEW DRINK ****************************************** */

    }
    VIDE_PREVIEW_DRINK(){
        $("[dati-title-drink]").html("");
        $("[dati-description-drink]").html("");
        $("[dati-price-drink]").html("");
        $("[dati-image-drink]").attr("src", "/assets/img/ui/white.png");

    }

    VERIF_FORM_ADD_CONTENT_BAR(element){
        this.promotion={};

        this.msgErreurDrinks = [];
        dati_Erreurs.UPDATE("DrinksErreurs");
        var cat_id = $("[dati-page=addDrinks]").find("[DATI-SELECT-CATEGORIES-BAR]").val();
        var id =barCard_ui.selectedBar.id;
        var name = $(element).find("[DATI-INPUT-NAME=title]").val();
        var price =$(element).find("[dati-input-price-order-drink]").val();
        var description =$(element).find("[dati-input-name=description]").val();
        var summary =$(element).find("[dati-input-name=summary]").val();
        var translate= formTrx_ui.save_addTrx ;
        var promotion = this.promotion;
        var img1 =    icontentBar.imgDrinkUploaded ;
        var img2 =    icontentBar.imgDrinkUploaded ;
        var type;
        if ($("[dati-page=addDrinks]").find("[bt_checked=CheckBoxDrinkOrder]").attr("button-checked") == "false" ) {
            type = 0;
        }
        if ($("[dati-page=addDrinks]").find("[bt_checked=CheckBoxDrinkOrder]").attr("button-checked") == "true") {
            type = 1;
        }
        var enable = 1 ;
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

         /*   console.log(key, value);*/
        }

        if ($("[DATI-ID=switcherAddDrinks]").find("[type=checkbox]").is(":checked")){

            this.promotion["service_id"]=serviceCard_ui.selectedServiceId;
            this.promotion["discount"]=$("[dati-percent_promo-drink-input]").val();
            this.promotion["end_date"]=$("[DATI_PROMO_END_DATE_DRINK]").val();
            this.promotion["begin_date"]=$("[DATI_PROMO_BEGIN_DATE_DRINK]").val();
            this.promotion["begin_time"]=$("[DATI_PROMO_BEGIN_TIME_DRINK]").val();
            this.promotion["end_time"]=$("[DATI_PROMO_END_TIME_DRINK]").val();
        }

        if(name ==""){
            this.msgErreurDrinks.push("title is required");
            dati_Erreurs.UPDATE("DrinksErreurs");
        }
        if(price===""){
            this.msgErreurDrinks.push("price is required");
            dati_Erreurs.UPDATE("DrinksErreurs");
        }
        if(description===""){
            this.msgErreurDrinks.push("Description is required");
            dati_Erreurs.UPDATE("DrinksErreurs");
        }
        if(icontentBar.imgDrinkUploaded === null){
            this.msgErreurDrinks.push("image is required");
            dati_Erreurs.UPDATE("DrinksErreurs");
        }
        if( ($("[DATI-ID=switcherAddDrinks]").find("[type=checkbox]").is(":checked") )&&( $("[DATI-PAGE=addDrinks]").find("[dati-input-price-order-drink]").val() != "" )){
            if(promotion.discount===""){
                this.msgErreurDrinks.push("Promotion : Discount is required");
                dati_Erreurs.UPDATE("DrinksErreurs");
            }
            if(promotion.begin_date===""){
                this.msgErreurDrinks.push("Promotion : Begin date is required");
                dati_Erreurs.UPDATE("DrinksErreurs");
            }
            if(promotion.begin_time===""){
                this.msgErreurDrinks.push("Promotion : Begin time is required");
                dati_Erreurs.UPDATE("DrinksErreurs");
            }
            if(promotion.end_date===""){
                this.msgErreurDrinks.push("Promotion : End date is required");
                dati_Erreurs.UPDATE("DrinksErreurs");
            }
            if(promotion.end_time===""){
                this.msgErreurDrinks.push("Promotion : End time is required");
                dati_Erreurs.UPDATE("DrinksErreurs");
            }
        }

        if(this.msgErreurDrinks.length == 0) {
            /*vider list erreurs*/
            this.msgErreurDrinks = [];
            dati_Erreurs.UPDATE("DrinksErreurs");
            /*vider list erreur*/
            var data = {
                id: id,
                cat_id: cat_id,
                name: name,
                summary:summary,
                img1: img1,
                img2: img2,
                type:type,
                description:description,
                translate:translate,
                price: price,
                enable: enable,
                promotion:promotion,

            };


;

            SSAPI.SUBMIT({
                uri: "/Bar/addFood",
                data: data,
                onsuccess: "DrinkAdded",
                onerror: "DrinkAdded_error"
            });
            /*turn image value to null*/
            icontentBar.imgDrinkUploaded=null;
            /*turn image value to null*/
            barContent_ui.RESET_FORM_ADD();
            barContent_ui.VIDE_PREVIEW_DRINK();
            barContent_ui.RESET_PROMOTION();

        }


    }
    RESET_FORM_ADD(){
        $("[ FORM-ID=form_add_Content_Bar]").find("[DATI-INPUT-NAME=title]").val("");
        $("[ FORM-ID=form_add_Content_Bar]").find("[DATI-INPUT-NAME=description]").val("");
        $("[ FORM-ID=form_add_Content_Bar]").find("[DATI-INPUT-NAME=summary]").val("");
        $("[ FORM-ID=form_add_Content_Bar]").find("[DATI-INPUT-NAME=image]").val("");
        $("[ FORM-ID=form_add_Content_Bar]").find("[dati-input-name=price_order]").val("");
        $("[ FORM-ID=form_add_Content_Bar]").find("[dati-role=clickableTrans]").css("background-image","none");
        $("[ FORM-ID=form_add_Content_Bar]").find("[bt_checked=CheckBoxDrinkOrder]").attr("button-checked","false");
        $("[ FORM-ID=form_add_Content_Bar]").find("[bt_checked=CheckBoxDrinkOrder]").find("[is_checked=OrderCheckBoxDrinkOrder]").css("display","none");

    }
    RESET_PROMOTION(){
        $("[ dati-page=addDrinks]").find("[dati_promo_begin_time_drink]").val("");
        $("[ dati-page=addDrinks]").find("[dati_promo_begin_date_drink]").val("");
        $("[ dati-page=addDrinks]").find("[dati_promo_end_time_drink]").val("");
        $("[ dati-page=addDrinks]").find("[dati_promo_end_date_drink]").val("");
        $("[ dati-page=addDrinks]").find("[dati-price_promo-drink-input]").val("");
        $("[ dati-page=addDrinks]").find("[dati-percent_promo-drink-input]").val("");

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
        var pos = barContent_ui.GET_POSITION_IN_LIST(barContent_ui.cards,id);
        if(pos != -1){
            barContent_ui.cards.splice(pos, 1);
        }
        dati_cardRestaurant.UPDATE("drinksList");
        barContent_ui.CANCEL_ALERTE();
    }
    /* ******* END DELETE ******* */
    /* ******* UPDATE ******* */


    VERIF_FORM_EDIT_DRINK(element){
        this.promotion={};
        this.msgErreurDrinksUpdate = [];
        dati_Erreurs.UPDATE("DrinkErreursUpdate");
        var drink_id = barContent_ui.selectedDrink.id ;
        var cat_id =$("[dati-page=editDrinks]").find("[DATI-SELECT-CATEGORIES-BAR-UP]").val();
        var rest_id = barContent_ui.selectedDrink.rest_id;
        var promotion = this.promotion;
        var name = $(element).find("[DATI-ID=val_title]").val();
        var price =$(element).find("[dati-input-price-order-drink-update]").val();
        var summary =$(element).find("[DATI-ID=val_summary]").val();
        var description =$(element).find("[DATI-ID=val_desc]").val();
        var translate= formTrx_ui.save_addTrx ;
        var type;
        var enable = 1 ;
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
        if( icontentBar.imgDrinkUploaded!= null){
            var img1 =  icontentBar.imgDrinkUploaded;
            var img2 =  icontentBar.imgDrinkUploaded;
        }else {
            var img1 = barContent_ui.selectedDrink.image;
            var img2 = barContent_ui.selectedDrink.image;
        };

        if ($("[DATI-ID=switcherEditDrinks]").find("[type=checkbox]").is(":checked")){

            this.promotion["service_id"]=serviceCard_ui.selectedServiceId;
            this.promotion["discount"]=$("[DATI-PERCENT-PROMO-DRINK-INPUT-UPDATE]").val();
            this.promotion["end_date"]=$("[DATI_PROMO_END_DATE_DRINK_UPDATE]").val();
            this.promotion["begin_date"]=$("[DATI_PROMO_BEGIN_DATE_DRINK_UPDATE]").val();
            this.promotion["begin_time"]=$("[DATI_PROMO_BEGIN_TIME_DRINK_UPDATE]").val();
            this.promotion["end_time"]=$("[DATI_PROMO_END_TIME_DRINK_UPDATE]").val();
        }

        if ($("[dati-page=editDrinks]").find("[bt_checked=CheckBoxDrinkOrderUp]").attr("button-checked") == "false" ) {
            type = 0;
        }
        if ($("[dati-page=editDrinks]").find("[bt_checked=CheckBoxDrinkOrderUp]").attr("button-checked") == "true") {
            type = 1;
        }

        if(name ==""){
            this.msgErreurDrinksUpdate.push("title is required");
            dati_Erreurs.UPDATE("DrinkErreursUpdate");
        }
        if(description ==""){
            this.msgErreurDrinksUpdate.push("description is required");
            dati_Erreurs.UPDATE("DrinkErreursUpdate");
        }
        if(price===""){
            this.msgErreurDrinksUpdate.push("price is required");
            dati_Erreurs.UPDATE("DrinkErreursUpdate");
        }

        if(icontentBar.imgDrinkUploaded === null && barContent_ui.selectedDrink.image===null){
            this.msgErreurDrinksUpdate.push("image is required");
            dati_Erreurs.UPDATE("DrinkErreursUpdate");
        }
        if( ($("[DATI-ID=switcherEditDrinks]").find("[type=checkbox]").is(":checked") )&&( $("[DATI-PAGE=editDrinks]").find("[dati-input-price-order-drink-update]").val() !="" )){
            if(promotion.discount===""){
                this.msgErreurDrinksUpdate.push("Promotion : Discount is required");
                dati_Erreurs.UPDATE("DrinkErreursUpdate");
            }
            if(promotion.begin_date===""){
                this.msgErreurDrinksUpdate.push("Promotion : Begin date is required");
                dati_Erreurs.UPDATE("DrinkErreursUpdate");
            }
            if(promotion.begin_time===""){
                this.msgErreurDrinksUpdate.push("Promotion : Begin time is required");
                dati_Erreurs.UPDATE("DrinkErreursUpdate");
            }
            if(promotion.end_date===""){
                this.msgErreurDrinksUpdate.push("Promotion : End date is required");
                dati_Erreurs.UPDATE("DrinkErreursUpdate");
            }
            if(promotion.end_time===""){
                this.msgErreurDrinksUpdate.push("Promotion : End time is required");
                dati_Erreurs.UPDATE("DrinkErreursUpdate");
            }
        }
        if(barContent_ui.msgErreurDrinksUpdate.length == 0) {
            /*vider list erreurs*/
            this.msgErreurDrinksUpdate = [];
            dati_Erreurs.UPDATE("DrinkErreursUpdate");
            /*vider list erreur*/
            var data = {
                id: drink_id,
                cat_id: cat_id,
                rest_id: rest_id,
                name: name,
                summary:summary,
                description:description,
                translate:translate,
                img1: img1,
                img2: img2,
                price: price,
                type:type,
                promotion:promotion,
                enable: enable,

            };

            SSAPI.SUBMIT({
                uri: "/Bar/updateFood",
                data: data,
                onsuccess: "drinkUpdated",
                onerror: "drinkUpdated_error"
            });
            /*turn image value to null*/
            icontentBar.imgDrinkUploaded=null;
            /*turn image value to null*/
        }
    }
    /* ******* ENDUPDATE ******* */


    SHOW_BT_ADD(){

        if(this.selectedDrinkCat ==  null ){

            $("[DATI-PAGE=Bar\\/Contents]").find("[DATI-ADD-BT]").css("display", "none");
        }else{

            $("[DATI-PAGE=Bar\\/Contents]").find("[DATI-ADD-BT]").css("display", "flex");
        }
    }

};


let barContent_ui = new Ui_barContent();