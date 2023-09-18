let Ui_restaurantCard = class {
    constructor() {
        this.cards=[];
        this.selectedRest=null;
        this.EVENT_UI();
        this.msgErreurRest=[];
        this.msgErreurRestUpdate=[];
        //this.selectedRestforDetail=null;
    }

    DATALIST(data){
        this.cards = data.res;
    }

    SETSELECTED(Rest){
        this.selectedRest= Rest;

    }

    TOGGEL_ALERTE(){
        $("[DATI-PAGE=Restaurant]").find("[dati-id=RestaurantAlerte]").find("[class=overlay_restau]").css("display", "block");
    }

    CANCEL_ALERTE(){
        $("[DATI-PAGE=Restaurant]").find("[dati-id=RestaurantAlerte]").find("[class=overlay_restau]").css("display", "none");
    }

    VALIDATE_ALERTE(){
        var id_rest = this.selectedRest.id;
        irestaurantCard.DELETE_RESTAU(id_rest);
    }
    DELETE_NAME(){
        var title = this.selectedRest.title;
        var titleUper = title.toUpperCase();
        $("[DATI-ID=delete-item-name]").html("Are you sure to delete "+titleUper+" Restaurant");
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
        this.selectedRest = this.FIN_BY_ID_IN_LIST(listSearch,id);
        this.HEDEAR_DETAIL_Rest();
        var event = new CustomEvent("ReviewReceive", { detail: {service_id : restaurantCard_ui.selectedRest.id , uri : "/Restaurant/getAllRate"} });
        document.dispatchEvent(event);
        this.CALLRATES();

    }
    CALLRATES(){

        $("[DATI-PAGE=detailServices]").find("[dati-five-star]").css("width", "0px");
        $("[DATI-PAGE=detailServices]").find("[dati-four-star]").css("width", "0px");
        $("[DATI-PAGE=detailServices]").find("[dati-three-star]").css("width", "0px");
        $("[DATI-PAGE=detailServices]").find("[dati-two-star]").css("width", "0px");
        $("[DATI-PAGE=detailServices]").find("[dati-one-star]").css("width", "0px");
        var event = new CustomEvent("getNbreRates", { detail: {service_id : restaurantCard_ui.selectedRest.id , uri : "/Restaurant" } });
        document.dispatchEvent(event);
        iReviews.GET_NUMBER_STATIC();
    }





    delete(rest_element){
        this.SETSELECTED_detail(rest_element);
        this.TOGGEL_ALERTE();
        this.DELETE_NAME();
    }

    HEDEAR_DETAIL_Rest(){
        $("[DATI-PAGE=detailServices]").find("[DATI-ID=detail-name-restaurant]").html("Name : "+this.selectedRest.title);
        $("[DATI-PAGE=detailServices]").find("[DATI-ID=detail-description-restaurant]").html("Description : "+this.selectedRest.descrip);
        $("[DATI-PAGE=detailServices]").find("[DATI-ID=detail-image-restaurant]").attr('src',this.selectedRest.image);
    }
    ENABLE_TIME(){
        var val = $("[DATI-ID=switcherOtaAddRestau]").find("[type=checkbox]").is(":checked");
        if(val){
            $("[DATI-ID=opening_Time_Restau]").slideDown();
            $("main").animate({ scrollTop: $("[DATI-PAGE=addFormServices]").height() }, 'slow');
        }else{
            $("[DATI-ID=opening_Time_Restau]").slideUp();
        }
    }
    ENABLE_PROMO(){
        var val = $("[DATI-ID=switcherPROMOAddRestau]").find("[type=checkbox]").is(":checked");
        if(val){
            $("[DATI-ID=Promo_Restau]").slideDown();
            $("main").animate({ scrollTop: $("[DATI-PAGE=addFormServices]").height() }, 'slow');
        }else{
            $("[DATI-ID=Promo_Restau]").slideUp();

        }
    }
    /* ******************************** CRUD RESTAU ****************************************** */
    /* ****** Add ******* */
    EVENT_UI(){

        $(document).ready(function(){
            $(document).on('click','[DATI-FOR=form_add_Restau] [DATI-COMPOSENT=SUBMIT]',function() {
                var formId = $(this).attr("DATI-FOR");
                var fn = $("[FORM-ID="+formId+"]").attr("DATI-SEND");
                var element = "$('[FORM-ID="+formId+"]')";
                fn=fn+"("+element+")";
                eval(fn);
            });

        });


        /* ******************************** PREVIEW REST ****************************************** */
        $("[DATI-INPUT-TITLE-REST]").on('keyup', function() {
            $("[dati-title-restau]").html( $("[DATI-INPUT-TITLE-REST]").val());
            $("[  class=preview_Rest]").find("[ class=time_shift]").html('<img src="/assets/img/ui/clock.png" alt="image" style="width: 12px;"  > <p>Open</p>');
            $("[  class=preview_Rest]").find("[ class=rating]").html(
                '<span class="fa fa-star "></span>'+
                '<span class="fa fa-star "></span>'+
                '<span class="fa fa-star "></span>'+
                '<span class="fa fa-star"></span>'+
                '<span class="fa fa-star" ></span>');



        });


        $("[DATI-INPUT-DESCRIPTION-REST]").on('keyup', function() {
            $("[dati-description-restau]").html( $("[DATI-INPUT-DESCRIPTION-REST]").val());

        });



        /* ******************************** End PREVIEW REST ****************************************** */


    }
    VIDE_PREVIEW_REST(){
        $("[dati-title-restau]").html("");
        $("[dati-description-restau]").html("");
        $("[  class=preview_Rest]").find("[ class=time_shift]").html("");
        $("[  class=preview_Rest]").find("[ class=rating]").html("");
        $("[dati-image-restau]").attr("src", "/assets/img/ui/white.png");

    }

    VERIF_FORM_ADD_RESTAU(element){
        this.msgErreurRest = [];
        dati_Erreurs.UPDATE("RestErreurs");
        var timeShifts = Shifts_ui.Shifts;
        var title = $(element).find("[DATI-INPUT-NAME=title]").val();
        var description = $(element).find("[DATI-INPUT-NAME=description]").val();
        var price = $(element).find("[DATI-INPUT-NAME=price]").val();
        var summary = $(element).find("[DATI-INPUT-NAME=summary]").val();
        var image = irestaurantCard.imgRestUploaded;
        var type = 0 ;
        var classification = 4;
        var enable = 1 ;
        var translate= formTrx_ui.save_addTrx ;
        var contacts= dati_contactForm.sendContactDb;
        for (const [lan, value] of Object.entries(translate)) {
            if(!translate[lan].hasOwnProperty("image")){
                translate[lan]["image"] = image;
            }else if(translate[lan]["image"] == "" || translate[lan]["image"]==null){
                translate[lan]["image"] = image;
            }
        }
        if ($("[dati-page=addFormServices]").find("[bt_checked=CheckBoxRestReservation]").attr("button-checked") == "false"&& $("[dati-page=addFormServices]").find("[bt_checked=CheckBoxRestOrder]").attr("button-checked") == "false"){
            type=0;
        }
        if ($("[dati-page=addFormServices]").find("[bt_checked=CheckBoxRestReservation]").attr("button-checked") == "false"&& $("[dati-page=addFormServices]").find("[bt_checked=CheckBoxRestOrder]").attr("button-checked") == "true"){
            type=1;
        }

        if ($("[dati-page=addFormServices]").find("[bt_checked=CheckBoxRestReservation]").attr("button-checked") == "true"&& $("[dati-page=addFormServices]").find("[bt_checked=CheckBoxRestOrder]").attr("button-checked") == "false"){
            type=2;
        }

        if ($("[dati-page=addFormServices]").find("[bt_checked=CheckBoxRestReservation]").attr("button-checked") == "true"&& $("[dati-page=addFormServices]").find("[bt_checked=CheckBoxRestOrder]").attr("button-checked") == "true"){
            type=3;
        }

        if(title ==""){
            this.msgErreurRest.push("title is required");
            dati_Erreurs.UPDATE("RestErreurs");
        }
        if(description===""){
            this.msgErreurRest.push("description is required");
            dati_Erreurs.UPDATE("RestErreurs");
        }
        if(image === null){
            this.msgErreurRest.push("image is required");
            dati_Erreurs.UPDATE("RestErreurs");
        }
        if(this.msgErreurRest.length == 0) {
            var data = {
                title: title,
                description: description,
                price:price,
                image: image,
                type: type,
                classification: classification,
                enable: enable,
                summary: summary,
                time_shift: timeShifts,
                contacts:contacts,
                translate: translate

            };




            SSAPI.SUBMIT({
                uri: "/Restaurant/add",
                data: data,
                onsuccess: "RestauAdded",
                onerror: "RestauAdded_error"
            });
            /*turn image value to null*/
            irestaurantCard.imgRestUploaded = null;
            /*turn image value to null*/
            Shifts_ui.RESET_TABLE("opening_Time_Restau");
            restaurantCard_ui.RESET_FORM_ADD();
            restaurantCard_ui.VIDE_PREVIEW_REST();
            $("[DATI-ID=contactListServiceRest]").css("display","none");
        }
    }
    RESET_FORM_ADD(){
        $("[FORM-ID=form_add_Restau]").find("[DATI-INPUT-NAME=title]").val("");
        $("[FORM-ID=form_add_Restau]").find("[DATI-INPUT-NAME=description]").val("");
        $("[FORM-ID=form_add_Restau]").find("[dati-input-name=summary]").val("");
        $("[FORM-ID=form_add_Restau]").find("[dati-input-name=price]").val("");
        $("[FORM-ID=form_add_Restau]").find("[DATI-INPUT-NAME=image]").val("");
        $("[FORM-ID=form_add_Restau]").find("[dati-role=clickableTrans]").css("background-image","none");
        $("[FORM-ID=form_add_Restau]").find("[dati-id=Reservation]").val("");
        $("[dati-page=addFormServices]").find("[bt_checked=CheckBoxRestReservation]").attr("button-checked","false");
        $("[dati-page=addFormServices]").find("[bt_checked=CheckBoxRestReservation]").find("[is_checked=ReservationCheckBoxRestReservation]").css("display","none");
        $("[dati-page=addFormServices]").find("[bt_checked=CheckBoxRestOrder]").attr("button-checked","false");
        $("[dati-page=addFormServices]").find("[bt_checked=CheckBoxRestOrder]").find("[is_checked=OrderCheckBoxRestOrder]").css("display","none");



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
        var pos = restaurantCard_ui.GET_POSITION_IN_LIST(restaurantCard_ui.cards,id);
        if(pos != -1){
            restaurantCard_ui.cards.splice(pos, 1);
        }
        dati_cardRestaurant.UPDATE("RestaurantList");
        restaurantCard_ui.CANCEL_ALERTE();
    }
    /* ******* UPDATE ******* */


    VERIF_FORM_EDIT_RESTAU(element){
        this.msgErreurRestUpdate = [];
        dati_Erreurs.UPDATE("RestauErreursUpdate");
        var timeShifts = Shifts_ui.Shifts;
        var title = $(element).find("[DATI-INPUT-NAME=title]").val();
        var description = $(element).find("[DATI-INPUT-NAME=description]").val();
        var summary = $(element).find("[DATI-INPUT-NAME=summary]").val();
        var price = $(element).find("[dati-input-name=price_order]").val();
        if(irestaurantCard.imgRestUploaded!= null){
            var image = irestaurantCard.imgRestUploaded ;
        }else {
            var image = restaurantCard_ui.selectedRest.image;
        }

        var type = 0;
        var classification = 4;
        var translate= formTrx_ui.save_addTrx ;
        var contacts= dati_contactForm.sendContactDb;
        var enable = 1 ;



        if ($("[dati-page=editRestauPage]").find("[bt_checked=CheckBoxRestReservationUp]").attr("button-checked") == "false" && $("[dati-page=editRestauPage]").find("[bt_checked=CheckBoxRestOrderUp]").attr("button-checked") == "false"){
            type=0;

        }
        if ($("[dati-page=editRestauPage]").find("[bt_checked=CheckBoxRestReservationUp]").attr("button-checked") == "false" && $("[dati-page=editRestauPage]").find("[bt_checked=CheckBoxRestOrderUp]").attr("button-checked") == "true"){
            type=1;

        }
        if ($("[dati-page=editRestauPage]").find("[bt_checked=CheckBoxRestReservationUp]").attr("button-checked") == "true" && $("[dati-page=editRestauPage]").find("[bt_checked=CheckBoxRestOrderUp]").attr("button-checked") == "false"){
            type=2;

        }
        if ($("[dati-page=editRestauPage]").find("[bt_checked=CheckBoxRestReservationUp]").attr("button-checked") == "true" && $("[dati-page=editRestauPage]").find("[bt_checked=CheckBoxRestOrderUp]").attr("button-checked") == "true"){
            type=3;

        }
        if(title ==""){
            this.msgErreurRestUpdate.push("title is required");
            dati_Erreurs.UPDATE("RestauErreursUpdate");
        }
        if(description===""){
            this.msgErreurRestUpdate.push("description is required");
            dati_Erreurs.UPDATE("RestauErreursUpdate");
        }
        if(image === null){
            this.msgErreurRestUpdate.push("image is required");
            dati_Erreurs.UPDATE("RestauErreursUpdate");
        }

        var data= {
            rest_id: this.selectedRest.id,
            title: title,
            description: description,
            image: image,
            type:type,
            price:price,
            classification:classification,
            enable:enable,
            translate:translate,
            summary:summary,
            contacts:contacts,
            time_shift:timeShifts
        };


        if(this.msgErreurRestUpdate.length == 0) {
            /*vider list erreurs*/
            this.msgErreurRestUpdate = [];
            dati_Erreurs.UPDATE("RestauErreursUpdate");
            /*vider list erreur*/
            SSAPI.SUBMIT({
                uri: "/Restaurant/update",
                data: data,
                onsuccess: "RestaurenatUpdated",
                onerror: "RestaurantUpdated_error"
            });

            irestaurantCard.imgRestUploaded=null;
        }
    }
    /* ******************************** END CRUD RESTAU ****************************************** */
    /* ******************************** POP UP  ****************************************** */
    SHOW_POPUP_SUCCESS(){
        $("[DATI-POPUP=sucess]").css("display","flex");
        setTimeout(function() {
            $("[DATI-POPUP=sucess]").css("display","none");
        }, 1000);

    }


    SHOW_POPUP_ERROR(){
        $("[DATI-POPUP=error]").css("display","flex");
        setTimeout(function() {
            $("[DATI-POPUP=error]").css("display","none");
        }, 1000);

    }

    SHOW_POPUP_SUCCESS_UPDATE(){
        $("[DATI-POPUP=sucess_update]").css("display","flex");
        setTimeout(function() {
            $("[DATI-POPUP=sucess_update]").css("display","none");
        }, 1000);

    }
    /* ******************************** END POP UP  ****************************************** */

};

let restaurantCard_ui = new Ui_restaurantCard();