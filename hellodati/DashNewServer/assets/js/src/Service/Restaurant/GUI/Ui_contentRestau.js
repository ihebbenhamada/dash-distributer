 class Ui_restauContent{
    constructor() {
        this.cards=[];
        this.categorie=[];
        this.cardsBeforeFilter=[];
        this.selectedFood=null;
        this.selectedCat=null;
        this.msgErreurFood=[];
        this.msgErreurFoodUpdate=[];
        this.promotion={};


        this.EVENT_UI();
    }

    FILL_PROMOTION(){
        this.promotion={};
    }

    DATALIST(data){

        this.cards = [];
        for(var i=0;i < data.res.length; i++){
            var card = {};
            card.id = data.res[i].id;
            card.hotel_id = data.res[i].hotel_id;
            card.cat_rest_id = data.res[i].cat_rest_id;
            card.rest_id = data.res[i].rest_id;
            card.title = data.res[i].name;
            card.summary = data.res[i].summary;
            card.image = data.res[i].img1;
            card.image2 = data.res[i].img2;
            card.enable = data.res[i].enable;
            card.num_views = data.res[i].num_views;
            card.atteint = data.res[i].atteint;
            card.type = data.res[i].type;
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
     CATEGORIELIST(data){
         this.categorie = data.res;
         restauContent_ui.DATALIST_AVAILABLE_CATEGORIES(data.res);

     }

     DATALIST_AVAILABLE_CATEGORIES(data){
         var options = "<option value=''>SELECT CATEGORY </option>";
         for (var i = 0; i < data.length; i++) {
             options = options + '<option value="' + data[i].id + '">'+data[i].name+'</option>';
         }
         $("[dati-page=addDish]").find("[DATI-SELECT-CATEGORIES]").html(options);
         $("[dati-page=editDishPage]").find("[DATI-SELECT-CATEGORIES-UP]").html(options);

     }
     DATALIST_BEFORE_FILTER_WITH_CAT(data){
         this.cardsBeforeFilter = data.res;

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
       this.selectedFood = this.FIN_BY_ID_IN_LIST(listSearch,id);
       //this.FILL_UPDATE_FORM()
         this.HEDEAR_DETAIL_Dish();

     }

     CANCEL_ALERTE(){
         $("[DATI-PAGE=Restaurant\\/Contents]").find("[dati-id=DishAlerte]").find("[class=overlay_restau]").css("display", "none");
     }
     VALIDATE_ALERTE(){

         var id = this.selectedFood.id;
         var rest_id =this.selectedFood.rest_id ;
         var cat_id = this.selectedFood.cat_rest_id;
         icontentRestau.DELETE_FOOD(id,rest_id,cat_id);

     }
     TOGGEL_ALERTE(){
         $("[DATI-PAGE=Restaurant\\/Contents]").find("[dati-id=DishAlerte]").find("[class=overlay_restau]").css("display", "block");
     }
     DELETE_NAME(){
         var title = this.selectedFood.title;
         var titleUper = title.toUpperCase();
         $("[DATI-ID=delete-item-name]").html("Are you sure to delete "+titleUper+" Dish");
     }
     delete(rest_element){
         this.SETSELECTED_detail(rest_element);
         this.TOGGEL_ALERTE();
         this.DELETE_NAME();
     }
     HEDEAR_DETAIL_Dish(){

         $("[DATI-PAGE=detailNotif]").find("[DATI-ID=detail-name-restaurant]").html("Name : "+restauContent_ui.selectedFood.title);
         $("[DATI-PAGE=detailNotif]").find("[DATI-ID=detail-description-restaurant]").html("Description : "+restauContent_ui.selectedFood.descrip);
         $("[DATI-PAGE=detailNotif]").find("[DATI-ID=detail-image-restaurant]").attr('src', restauContent_ui.selectedFood.image);
         $("[DATI-PAGE=detailNotif]").find("[dati-taux-clics]").html( restauContent_ui.selectedFood.num_views);
         $("[DATI-PAGE=detailNotif]").find("[dati-taux-views]").html( restauContent_ui.selectedFood.clicked);
     }



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

              var event = new CustomEvent("filterFoodByCat", {  detail: {id_cat:idCategories}});
             document.dispatchEvent(event);
     }


     VIDE_PREVIEW_FOOD(){
         $("[dati-title-food]").html("");
         $("[dati-description-food]").html("");
         $("[dati-price-food]").html("");
         $("[dati-image-food]").attr("src", "/assets/img/ui/white.png");

     }

     VERIF_FORM_ADD_CONTENT_RESTAU(element){
         this.promotion={};
         this.msgErreurFood = [];
         dati_Erreurs.UPDATE("FoodErreurs");
        /* var cat_rest_id =restauContent_ui.selectedCat;*/
         var cat_rest_id =$("[dati-page=addDish]").find("[DATI-SELECT-CATEGORIES]").val();
         var translate= formTrx_ui.save_addTrx ;
         var rest_id = restaurantCard_ui.selectedRest.id;
         var name = $(element).find("[DATI-INPUT-NAME=title]").val();
         var description = $(element).find("[DATI-INPUT-NAME=description]").val();
         var summary = $(element).find("[DATI-INPUT-NAME=summary]").val();
         var price =$(element).find("[DATI-INPUT-NAME=price_order]").val();
         var promotion = this.promotion;
         var img1 =  icontentRestau.imgFoodUploaded;
         var img2 =  icontentRestau.imgFoodUploaded;
         var enable = 1 ;
         var type;

         for (const [lan, value] of Object.entries(translate)) {
             if(!translate[lan].hasOwnProperty("image")){
                 translate[lan]["image"] = img1;
             }else if(translate[lan]["image"] == "" || translate[lan]["image"]==null){
                 translate[lan]["image"] = img1;
             }
         }


         if ($("[DATI-ID=switcherAddDish]").find("[type=checkbox]").is(":checked")){
             this.promotion["service_id"]=serviceCard_ui.selectedServiceId;
             this.promotion["discount"]=$("[dati-percent_promo-food-input]").val();
             this.promotion["end_date"]=$("[DATI_PROMO_END_DATE]").val();
             this.promotion["begin_date"]=$("[DATI_PROMO_BEGIN_DATE]").val();
             this.promotion["begin_time"]=$("[DATI_PROMO_BEGIN_TIME]").val();
             this.promotion["end_time"]=$("[DATI_PROMO_END_TIME]").val();
         }




         if ($("[dati-page=addDish]").find("[bt_checked=CheckBoxFoodOrder]").attr("button-checked") == "false" ) {
             type = 0;
         }
         if ($("[dati-page=addDish]").find("[bt_checked=CheckBoxFoodOrder]").attr("button-checked") == "true") {
             type = 1;
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
             this.msgErreurFood.push("title is required");
             dati_Erreurs.UPDATE("FoodErreurs");
         }
         if(description===""){
             this.msgErreurFood.push("description is required");
             dati_Erreurs.UPDATE("FoodErreurs");
         }
         if(price===""){
             this.msgErreurFood.push("price is required");
             dati_Erreurs.UPDATE("FoodErreurs");
         }
         if(icontentRestau.imgFoodUploaded === null  ){
             this.msgErreurFood.push("image is required");
             dati_Erreurs.UPDATE("FoodErreurs");
         }
         if (($("[DATI-ID=switcherAddDish]").find("[type=checkbox]").is(":checked") )&&( $("[DATI-PAGE=addDish]").find("[dati-input-price-order-food]").val() !="" )){
             if(promotion.discount===""){
                 this.msgErreurFood.push("Promotion : Discount is required");
                 dati_Erreurs.UPDATE("FoodErreurs");
             }
             if(promotion.begin_date===""){
                 this.msgErreurFood.push("Promotion : Begin date is required");
                 dati_Erreurs.UPDATE("FoodErreurs");
             }
             if(promotion.begin_time===""){
                 this.msgErreurFood.push("Promotion : Begin time is required");
                 dati_Erreurs.UPDATE("FoodErreurs");
             }
             if(promotion.end_date===""){
                 this.msgErreurFood.push("Promotion : End date is required");
                 dati_Erreurs.UPDATE("FoodErreurs");
             }
             if(promotion.end_time===""){
                 this.msgErreurFood.push("Promotion : End time is required");
                 dati_Erreurs.UPDATE("FoodErreurs");
             }
         }

         if(this.msgErreurFood.length == 0) {
         var data= {
             id:rest_id,
             cat_id:cat_rest_id,
             name: name,
             summary:summary,
             translate:translate,
             img1: img1,
             img2:img2,
             type:type,
             price:price,
             promotion:promotion,
             enable:enable,
             description:description

         };





         SSAPI.SUBMIT({
             uri:"/Restaurant/addFood",
             data:data,
             onsuccess:"FoodAdded",
             onerror:"FoodAdded_error"
         });

             /*turn image value to null*/
             icontentRestau.imgFoodUploaded = null;
             /*turn image value to null*/
             restauContent_ui.RESET_PROMOTION();
             restauContent_ui.RESET_FORM_ADD();
             restauContent_ui.VIDE_PREVIEW_FOOD();
         }

     }
     RESET_FORM_ADD(){
         $("[ FORM-ID=form_add_Content_Restau]").find("[DATI-INPUT-NAME=title]").val("");
         $("[ FORM-ID=form_add_Content_Restau]").find("[DATI-INPUT-NAME=description]").val("");
         $("[ FORM-ID=form_add_Content_Restau]").find("[DATI-INPUT-NAME=summary]").val("");
         $("[ FORM-ID=form_add_Content_Restau]").find("[DATI-INPUT-NAME=image]").val("");
         $("[ FORM-ID=form_add_Content_Restau]").find("[dati-input-name=price_order]").val("");
         $("[ FORM-ID=form_add_Content_Restau]").find("[dati-role=clickableTrans]").css("background-image","none");
         $("[ FORM-ID=form_add_Content_Restau]").find("[bt_checked=CheckBoxFoodOrder]").attr("button-checked","false");
         $("[ FORM-ID=form_add_Content_Restau]").find("[bt_checked=CheckBoxFoodOrder]").find("[is_checked=OrderCheckBoxFoodOrder]").css("display","none");

     }
     RESET_PROMOTION(){
         $("[ dati-page=addDish]").find("[dati_promo_begin_time]").val("");
         $("[ dati-page=addDish]").find("[dati_promo_begin_date]").val("");
         $("[ dati-page=addDish]").find("[dati_promo_end_time]").val("");
         $("[ dati-page=addDish]").find("[dati_promo_end_date]").val("");
         $("[ dati-page=addDish]").find("[dati-price_promo-food-input]").val("");
         $("[ dati-page=addDish]").find("[dati-percent_promo-food-input]").val("");

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
         var pos = restauContent_ui.GET_POSITION_IN_LIST(restauContent_ui.cards,id);
         if(pos != -1){
             restauContent_ui.cards.splice(pos, 1);
         }
         dati_cardRestaurant.UPDATE("foodsList");
         restauContent_ui.CANCEL_ALERTE();
     }
     /* ******* END DELETE ******* */

     /* ******* UPDATE ******* */


     VERIF_FORM_EDIT_FOOD(element){
         this.promotion={};
         this.msgErreurFoodUpdate = [];
         dati_Erreurs.UPDATE("FoodErreursUpdate");
         var id = restauContent_ui.selectedFood.id ;
         var translate= formTrx_ui.save_addTrx ;
         var cat_id =$("[dati-page=editDishPage]").find("[DATI-SELECT-CATEGORIES-UP]").val();
         var rest_id = restauContent_ui.selectedFood.rest_id;
         var promotion = this.promotion;
         var name = $(element).find("[DATI-ID=val_title]").val();
         var description = $(element).find("[DATI-ID=val_desc]").val();
         var summary = $(element).find("[DATI-ID=val_summary]").val();
         var price =$(element).find("[dati-input-name=price_order]").val();
         if(icontentRestau.imgFoodUploaded!= null){
             var img1 = icontentRestau.imgFoodUploaded;
             var img2 = icontentRestau.imgFoodUploaded;
         }else {
             var img1 = restauContent_ui.selectedFood.image;
             var img2 = restauContent_ui.selectedFood.image;
         };

         var enable = 1 ;
         var type;




         if ($("[dati-page=editDishPage]").find("[bt_checked=CheckBoxFoodOrderUp]").attr("button-checked") == "false") {
             type = 0;
         }
         if ($("[dati-page=editDishPage]").find("[bt_checked=CheckBoxFoodOrderUp]").attr("button-checked") == "true") {
             type = 1;
         }


         if ($("[DATI-ID=switcherEditDish]").find("[type=checkbox]").is(":checked")){

             this.promotion["service_id"]=serviceCard_ui.selectedServiceId;
             this.promotion["discount"]=$("[dati-percent_promo-food-input-update]").val();
             this.promotion["end_date"]=$("[DATI_PROMO_END_DATE_UPDATE]").val();
             this.promotion["begin_date"]=$("[DATI_PROMO_BEGIN_DATE_UPDATE]").val();
             this.promotion["begin_time"]=$("[DATI_PROMO_BEGIN_TIME_UPDATE]").val();
             this.promotion["end_time"]=$("[DATI_PROMO_END_TIME_UPDATE]").val();
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
             this.msgErreurFoodUpdate.push("title is required");
             dati_Erreurs.UPDATE("FoodErreursUpdate");
         }
         if(description===""){
             this.msgErreurFoodUpdate.push("description is required");
             dati_Erreurs.UPDATE("FoodErreursUpdate");
         }
         if(price===""){
             this.msgErreurFoodUpdate.push("price is required");
             dati_Erreurs.UPDATE("FoodErreursUpdate");
         }
         if(icontentRestau.imgFoodUploaded=== null && restauContent_ui.selectedFood.image===null ){
             this.msgErreurFoodUpdate.push("image is required");
             dati_Erreurs.UPDATE("FoodErreursUpdate");
         }

         if (($("[DATI-ID=switcherEditDish]").find("[type=checkbox]").is(":checked") )&&( $("[DATI-PAGE=editDishPage]").find("[dati-input-price-update]").val() !="" )){
             if(promotion.discount===""){
                 this.msgErreurFoodUpdate.push("Promotion : Discount is required");
                 dati_Erreurs.UPDATE("FoodErreursUpdate");
             }
             if(promotion.begin_date===""){
                 this.msgErreurFoodUpdate.push("Promotion : Begin date is required");
                 dati_Erreurs.UPDATE("FoodErreursUpdate");
             }
             if(promotion.begin_time===""){
                 this.msgErreurFoodUpdate.push("Promotion : Begin time is required");
                 dati_Erreurs.UPDATE("FoodErreursUpdate");
             }
             if(promotion.end_date===""){
                 this.msgErreurFoodUpdate.push("Promotion : End date is required");
                 dati_Erreurs.UPDATE("FoodErreursUpdate");
             }
             if(promotion.end_time===""){
                 this.msgErreurFoodUpdate.push("Promotion : End time is required");
                 dati_Erreurs.UPDATE("FoodErreursUpdate");
             }
         }

         if(this.msgErreurFoodUpdate.length == 0) {
         var data= {
             id:id ,
             cat_id:cat_id,
             rest_id: rest_id,
             name: name,
             description: description,
             summary:summary,
             img1: img1,
             img2:img2,
             promotion:promotion,
             translate:translate,
             type:type,
             price:price,
             enable:enable,

         };


         SSAPI.SUBMIT({
             uri:"/Restaurant/updateFood",
             data:data ,
             onsuccess:"FoodUpdated",
             onerror:"FoodUpdated_error"
         });
             icontentRestau.imgFoodUploaded = null ;

         }
     }
     /* ******* ENDUPDATE ******* */
     SHOW_BT_ADD(){

         if(this.selectedCat ==  null ){

             $("[DATI-PAGE=Restaurant\\/Contents]").find("[DATI-ADD-BT]").css("display", "none");
         }else{

             $("[DATI-PAGE=Restaurant\\/Contents]").find("[DATI-ADD-BT]").css("display", "flex");
        }
     }

     /* ******************************** CRUD CONTENT RESTAU FOOD ****************************************** */
     /* ****** Add ******* */
     EVENT_UI(){

         $(document).ready(function(){
             $(document).on('click','[DATI-FOR=form_add_Content_Restau] [DATI-COMPOSENT=SUBMIT]',function() {
                 var formId = $(this).attr("DATI-FOR");
                 var fn = $("[FORM-ID="+formId+"]").attr("DATI-SEND");
                 var element = "$('[FORM-ID="+formId+"]')";
                 fn=fn+"("+element+")";
                 eval(fn);
             });

             //calculate price promo
             $(document).on('keyup','[dati-price_promo-food-input]',function() {
                 $("[dati-percent_promo-food-input]").val(100-($("[dati-price_promo-food-input]").val() * 100 / $("[dati-input-price-order-food]").val()));
             });

             $(document).on('keyup','[dati-percent_promo-food-input]',function() {
                 $("[dati-price_promo-food-input]").val($("[dati-input-price-order-food]").val()-($("[dati-input-price-order-food]").val() * $("[dati-percent_promo-food-input]").val() / 100));
             });

             $(document).on('keyup','[dati-input-price-order-food]',function() {
                 if($("[dati-percent_promo-food-input]").val() != ""){
                     $("[dati-price_promo-food-input]").val($("[dati-input-price-order-food]").val()-($("[dati-input-price-order-food]").val() * $("[dati-percent_promo-food-input]").val() / 100));
                 }else if($("[dati-price_promo-food-input]").val() != ""){
                     $("[dati-percent_promo-food-input]").val($("[dati-price_promo-food-input]").val() * 100 / $("[dati-input-price-order-food]").val());
                 }
             });

         });


         /* ******************************** PREVIEW FOOD ****************************************** */
         $("[DATI-INPUT-TITLE-FOOD]").on('keyup', function() {
             $("[dati-title-food]").html( $("[ DATI-INPUT-TITLE-FOOD]").val());


         });

         $("[DATI-INPUT-DESCRIPTION-FOOD]").on('keyup', function() {

             $("[dati-description-food]").html( $("[DATI-INPUT-DESCRIPTION-FOOD]").val());


         });
         $("[DATI-PRICE-FOOD-INPUT]").on('keyup', function() {

             $("[dati-price-food]").html( $("[ DATI-PRICE-FOOD-INPUT]").val() +"  DT");


         });

         $(document).on('change','[DATI-ID=uploadIamgeDishfile]',function(){
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
         /* ******************************** End PREVIEW FOOD ****************************************** */

        }


}


let restauContent_ui = new Ui_restauContent();