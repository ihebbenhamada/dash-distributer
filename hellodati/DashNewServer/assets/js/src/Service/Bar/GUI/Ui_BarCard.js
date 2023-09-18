let Ui_barCard = class {
    constructor() {
        this.cards=[];
        this.selectedBar=null;
        this.EVENT_UI();
        this.msgErreurBar=[];
        this.msgErreurUpdateBar=[];
        this.imgTransUploaded=null;
        this.btChecked={};


    }

    DATALIST(data){
        this.cards = data.res;

    }

    TOGGEL_ALERTE(){
        $("[DATI-PAGE=Bar]").find("[dati-id=BarAlerte]").find("[class=overlay_restau]").css("display", "block");
    }
    CANCEL_ALERTE(){
        $("[DATI-PAGE=Bar]").find("[dati-id=BarAlerte]").find("[class=overlay_restau]").css("display", "none");
    }
    VALIDATE_ALERTE(){
        var id_bar = this.selectedBar.id;
        iBarCard.DELETE_BAR(id_bar);

        /*       var listBar =  this.cards;
               var newList = listBar.filter(list => list.id !== id_rest);
               this.cards =  newList ;
               dati_cardRestaurant.UPDATE("BarList");
               this.CANCEL_ALERTE();*/
    }
    DELETE_NAME(){
        var title = this.selectedBar.title;
        var titleUper = title.toUpperCase();
        $("[DATI-ID=delete-item-name]").html("Are you sure to delete "+titleUper+" Bar");
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
        this.selectedBar = this.FIN_BY_ID_IN_LIST(listSearch,id);

        var event = new CustomEvent("ReviewReceive", { detail: {service_id : barCard_ui.selectedBar.id , uri : "/Bar/getAllRate"} });
        document.dispatchEvent(event);
        this.HEDEAR_DETAIL_Bar();
        this.CALLRATES();

    }
    CALLRATES(){
        var event = new CustomEvent("getNbreRates", { detail: {service_id : barCard_ui.selectedBar.id , uri : "/Bar"} });
        document.dispatchEvent(event);
        /* getNbreClic*/
        /*   var service_id*/
        SSAPI.SUBMIT({
            uri: "/Bar/getClicked",
            data :{bar_id:barCard_ui.selectedBar.id},
            onsuccess:"clickNbreReceive",
            onerror:"clickNbreReceive_error",

        })
        /* end getNbreClics*/
        /* getNbreViews*/

        SSAPI.SUBMIT({
            uri: "/Bar/getNumViews",
            data :{bar_id:barCard_ui.selectedBar.id},
            onsuccess:"clickNbreViews"

        })
        /* end getNbreViews*/
    }

    HEDEAR_DETAIL_Bar(){

        $("[DATI-PAGE=detailServices]").find("[DATI-ID=detail-name-restaurant]").html("Name : "+this.selectedBar.title);
        $("[DATI-PAGE=detailServices]").find("[DATI-ID=detail-description-restaurant]").html("Description : "+this.selectedBar.descrip);
        $("[DATI-PAGE=detailServices]").find("[DATI-ID=detail-image-restaurant]").attr('src',this.selectedBar.image);

    }
    SETSELECTED(Bar){
        this.selectedBar= Bar;

    }
    ENABLE_TIME(){
        var val = $("[DATI-ID=switcherAddBar]").find("[type=checkbox]").is(":checked");
        if(val){
            $("[DATI-ID=opening_Time_Bar]").slideDown();
            $("main").animate({ scrollTop: $("[DATI-PAGE=addBarServices]").height() }, 'slow');
        }else{
            $("[DATI-ID=opening_Time_Bar]").slideUp();
        }
    }
    /* ******************************** CRUD BAR ****************************************** */
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



        /* ******************************** PREVIEW EVENT ****************************************** */
        $("[ DATI-INPUT-TITLE-BAR]").on('keyup', function() {
            $("[dati-title-bar]").html( $("[ DATI-INPUT-TITLE-BAR]").val());
            $("[  class=preview_Bar]").find("[ class=time_shift]").html('<img src="/assets/img/ui/clock.png" alt="image" style="width: 12px;"  > <p>Open</p>');
            $("[  class=preview_Bar]").find("[ class=rating]").html(
                '<span class="fa fa-star "></span>'+
                '<span class="fa fa-star "></span>'+
                '<span class="fa fa-star "></span>'+
                '<span class="fa fa-star"></span>'+
                '<span class="fa fa-star" ></span>');


        });
        $("[DATI-INPUT-DESCRIPTION-BAR]").on('keyup', function() {
            $("[dati-description-bar]").html( $("[DATI-INPUT-DESCRIPTION-BAR]").val());

        });



        /* ******************************** End PREVIEW EVENT ****************************************** */

    }

    VIDE_PREVIEW_BAR(){
        $("[dati-title-bar]").html("");
        $("[dati-description-bar]").html("");
        $("[  class=preview_Bar]").find("[ class=time_shift]").html("");
        $("[  class=preview_Bar]").find("[ class=rating]").html("");
        $("[dati-image-bar]").attr("src", "/assets/img/ui/white.png");

    }

    VERIF_FORM_ADD_BAR(element){
        this.msgErreurBar = [];
        var timeShifts = Shifts_ui.Shifts;
        var title = $(element).find("[DATI-INPUT-NAME=title]").val();
        var description = $(element).find("[DATI-INPUT-NAME=description]").val();
        var summary =$(element).find("[DATI-INPUT-NAME=summary]").val();
        var price =$(element).find("[dati-input-name=price_reservation]").val();
        var image = barCard_ui.imgTransUploaded;
        var type ;
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

        if ($("[dati-page=addBarServices]").find("[bt_checked=CheckBoxBarReservation]").attr("button-checked") == "true" && $("[dati-page=addBarServices]").find("[bt_checked=CheckBoxBarOrder]").attr("button-checked") == "true"){
            type=0;
        }

        if ($("[dati-page=addBarServices]").find("[bt_checked=CheckBoxBarReservation]").attr("button-checked") == "true" && $("[dati-page=addBarServices]").find("[bt_checked=CheckBoxBarOrder]").attr("button-checked") == "true"){
            type=1;
        }

        if ($("[dati-page=addBarServices]").find("[bt_checked=CheckBoxBarReservation]").attr("button-checked") == "true" && $("[dati-page=addBarServices]").find("[bt_checked=CheckBoxBarOrder]").attr("button-checked") == "true"){
            type=2;
        }

        if ($("[dati-page=addBarServices]").find("[bt_checked=CheckBoxBarReservation]").attr("button-checked") == "true" && $("[dati-page=addBarServices]").find("[bt_checked=CheckBoxBarOrder]").attr("button-checked") == "true"){
            type=3;
        }

        if(title ==""){
            this.msgErreurBar.push("title is required");
            dati_Erreurs.UPDATE("BarErreurs");
        }
        if(description===""){
            this.msgErreurBar.push("description is required");
            dati_Erreurs.UPDATE("BarErreurs");
        }
        if(image === null){
            this.msgErreurBar.push("image is required");
            dati_Erreurs.UPDATE("BarErreurs");
        }
/*        if(translate.hasOwnProperty("EN")){

        }*/
 /*       for (const [key, value] of Object.entries(translate)) {
            if (!value.hasOwnProperty("image")) {
                value["image"]=image;
            }

        }*/

        if(this.msgErreurBar.length == 0){
            /*vider list erreurs*/
            this.msgErreurBar =[];
            dati_Erreurs.UPDATE("BarErreurs");
            /*vider list erreur*/
            var data = {
                title: title,
                description: description,
                summary:summary,
                price:price,
                image: image,
                type: type,
                classification: classification,
                enable: enable,
                translate:translate,
                contacts:contacts,
                time_shift:timeShifts

            };




            SSAPI.SUBMIT({
                uri: "/Bar/add",
                data: data,
                onsuccess: "BarAdded",
                onerror: "BarAdded_error"
            });
            Shifts_ui.RESET_TABLE("opening_Time_Bar");
            barCard_ui.RESET_FORM_ADD();
            barCard_ui.VIDE_PREVIEW_BAR();
            $("[ DATI-ID=contactListServiceBar]").css("display","none");
/*turn image value to null*/
            iBarCard.imgBarUploaded=null;
/*turn image value to null*/
        }

    }
    RESET_FORM_ADD(){
        $("[ FORM-ID=form_add_Bar]").find("[DATI-INPUT-NAME=title]").val("");
        $("[ FORM-ID=form_add_Bar]").find("[DATI-INPUT-NAME=description]").val("");
        $("[ FORM-ID=form_add_Bar]").find("[DATI-INPUT-NAME=summary]").val("");
        $("[ FORM-ID=form_add_Bar]").find("[DATI-INPUT-NAME=image]").val("");
        $("[ FORM-ID=form_add_Bar]").find("[dati-role=clickableTrans]").css("background-image","none");
        $("[ FORM-ID=form_add_Bar]").find("[dati-id=Reservation]").val("");
        $("[ FORM-ID=form_add_Bar]").find("[id=CheckBoxBarReservation]").find("[bt_checked=CheckBoxBarReservation]").attr("button-checked","false");
        $("[ FORM-ID=form_add_Bar]").find("[id=CheckBoxBarReservation]").find("[bt_checked=CheckBoxBarReservation]").find("[is_checked=ReservationCheckBoxBarReservation]").css("display","none");
        $("[ FORM-ID=form_add_Bar]").find("[id=CheckBoxBarOrder]").find("[bt_checked=CheckBoxBarOrder]").attr("button-checked","false");
        $("[ FORM-ID=form_add_Bar]").find("[id=CheckBoxBarOrder]").find("[bt_checked=CheckBoxBarOrder]").find("[is_checked=OrderCheckBoxBarOrder]").css("display","none");

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
        var pos = barCard_ui.GET_POSITION_IN_LIST(barCard_ui.cards,id);
        if(pos != -1){
            barCard_ui.cards.splice(pos, 1);
        }
        dati_cardRestaurant.UPDATE("BarList");
        barCard_ui.CANCEL_ALERTE();
    }
    /* ******* UPDATE ******* */


    VERIF_FORM_EDIT_BAR(element){
        this.msgErreurUpdateBar = [];
        var timeShifts = Shifts_ui.Shifts;
        var title = $(element).find("[DATI-INPUT-NAME=title]").val();
        var description = $(element).find("[DATI-INPUT-NAME=description]").val();
        var summary = $(element).find("[DATI-INPUT-NAME=summary]").val();
        var price = $(element).find("[dati-input-name=price_reservation]").val();
        if(barCard_ui.imgTransUploaded!= null){
            var image = barCard_ui.imgTransUploaded;
        }else {
            var image =  this.selectedBar.image;
        }
        var translate= formTrx_ui.save_addTrx ;
        var contacts= dati_contactForm.sendContactDb;
        var type ;
        var classification = 4;
        var enable = 1 ;

        if ($("[dati-page=editBarPage]").find("[bt_checked=CheckBoxBarReservationUp]").attr("button-checked") == "false" && $("[dati-page=editBarPage]").find("[bt_checked=CheckBoxBarOrderUp]").attr("button-checked") == "false"){
            type=0;
        }
        if ($("[dati-page=editBarPage]").find("[bt_checked=CheckBoxBarReservationUp]").attr("button-checked") == "false" && $("[dati-page=editBarPage]").find("[bt_checked=CheckBoxBarOrderUp]").attr("button-checked") == "true"){
            type=1;
        }
        if ($("[dati-page=editBarPage]").find("[bt_checked=CheckBoxBarReservationUp]").attr("button-checked") == "true" && $("[dati-page=editBarPage]").find("[bt_checked=CheckBoxBarOrderUp]").attr("button-checked") == "false"){
            type=2;
        }
        if ($("[dati-page=editBarPage]").find("[bt_checked=CheckBoxBarReservationUp]").attr("button-checked") == "true" && $("[dati-page=editBarPage]").find("[bt_checked=CheckBoxBarOrderUp]").attr("button-checked") == "true"){
            type=3;
        }



        if(title ==""){
            this.msgErreurUpdateBar.push("title is required");
            dati_Erreurs.UPDATE("BarUpdateErreurs");
        }
        if(description==""){
            this.msgErreurUpdateBar.push("description is required");
            dati_Erreurs.UPDATE("BarUpdateErreurs");
        }
        if(image === null){
            this.msgErreurUpdateBar.push("image is required");
            dati_Erreurs.UPDATE("BarUpdateErreurs");
        }

        if(this.msgErreurUpdateBar.length == 0) {
            /*vider list erreurs*/
            this.msgErreurUpdateBar = [];
            dati_Erreurs.UPDATE("BarUpdateErreurs");
            /*vider list erreur*/
            var data = {
                bar_id: this.selectedBar.id,
                title: title,
                description: description,
                summary:summary,
                image: image,
                type: type,
                price:price,
                classification: classification,
                enable: enable,
                translate:translate,
                contacts:contacts,
                time_shift: timeShifts
            };

            SSAPI.SUBMIT({
                uri: "/Bar/update",
                data: data,
                onsuccess: "BarUpdated",
                onerror: " BarUpdated_error",
            });
            barCard_ui.imgTransUploaded = null;

        }


    }
    /* ******************************** END CRUD BAR ****************************************** */
};

let barCard_ui = new Ui_barCard();