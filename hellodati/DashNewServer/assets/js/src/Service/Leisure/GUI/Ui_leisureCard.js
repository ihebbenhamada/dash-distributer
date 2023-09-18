let Ui_leisureCard = class {
    constructor() {
        this.cards=[];
        this.selectedLeisure = null;
        this.EVENT_UI();
        this.msgErreurLeisure=[];
        this.msgErreurLeisureUpdate=[];
        this.btChecked=[];
    }

    DATALIST(data){

        this.cards = data.res;

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

        this.selectedLeisure = this.FIN_BY_ID_IN_LIST(listSearch,id);
        var event = new CustomEvent("ReviewReceive", { detail: {service_id : leisureCard_ui.selectedLeisure.id , uri : "/Leisure/getAllRate"} });
        document.dispatchEvent(event);
        this.HEDEAR_DETAIL_Leisure();
        this.CALLRATES();

    }
    CALLRATES(){
        var event = new CustomEvent("getNbreRates", { detail: {service_id : leisureCard_ui.selectedLeisure.id , uri : "/Leisure"} });
        document.dispatchEvent(event);
        /* getNbreClic*/
        /*   var service_id*/
        SSAPI.SUBMIT({
            uri: "/Leisure/getClicked",
            data :{leisure_id:leisureCard_ui.selectedLeisure.id},
            onsuccess:"clickNbreReceive"

        })
        /* end getNbreClics*/
        /* getNbreViews*/

        SSAPI.SUBMIT({
            uri: "/Leisure/getNumViews",
            data :{leisure_id:leisureCard_ui.selectedLeisure.id},
            onsuccess:"clickNbreViews"

        })
        /* end getNbreViews*/
    }

    HEDEAR_DETAIL_Leisure(){

        $("[DATI-PAGE=detailServices]").find("[DATI-ID=detail-name-restaurant]").html("Name : "+this.selectedLeisure.title);
        $("[DATI-PAGE=detailServices]").find("[DATI-ID=detail-description-restaurant]").html("Description : "+this.selectedLeisure.descrip);
        $("[DATI-PAGE=detailServices]").find("[DATI-ID=detail-image-restaurant]").attr('src',this.selectedLeisure.image);

    }
    DELETE_NAME(){
        var title = this.selectedLeisure.title;
        var titleUper = title.toUpperCase();
        $("[DATI-ID=delete-item-name]").html("Are you sure to delete "+titleUper+" Leisure");
    }
    VALIDATE_ALERTE(){
        var id_leisure = this.selectedLeisure.id;
        iLeisureCard.DELETE_LEISURE(id_leisure);
        /*     var listleisure =  this.cards;
             var newList = listleisure.filter(list => list.id !== id_leisure);
             this.cards =  newList ;

             dati_cardRestaurant.UPDATE("LeisureList");
             this.CANCEL_ALERTE();*/
    }
    TOGGEL_ALERTE(){
        $("[DATI-PAGE=Leisure]").find("[dati-id=LeisureAlerte]").find("[class=overlay_restau]").css("display", "block");
    }
    CANCEL_ALERTE(){
        $("[DATI-PAGE=Leisure]").find("[dati-id=LeisureAlerte]").find("[class=overlay_restau]").css("display", "none");
    }
    delete(rest_element){
        this.SETSELECTED_detail(rest_element);
        this.TOGGEL_ALERTE();
        this.DELETE_NAME();
    }
    ENABLE_TIME(){
        var val = $("[DATI-ID=switcherAddLeisure]").find("[type=checkbox]").is(":checked");
        if(val){
            $("[DATI-ID=opening_Time_Leisure]").slideDown();
            $("main").animate({ scrollTop: $("[DATI-PAGE=addLeisureServices]").height() }, 'slow');
        }else{
            $("[DATI-ID=opening_Time_Leisure]").slideUp();
        }
    }
    /* ******************************** CRUD EVENT ****************************************** */
    /* ****** Add ******* */
    EVENT_UI(){

        $(document).ready(function(){
            $(document).on('click','[DATI-FOR=form_add_Leisure] [DATI-COMPOSENT=SUBMIT]',function() {
                var formId = $(this).attr("DATI-FOR");
                var fn = $("[FORM-ID="+formId+"]").attr("DATI-SEND");
                var element = "$('[FORM-ID="+formId+"]')";
                fn=fn+"("+element+")";
                eval(fn);
            });

        });

        /* ******************************** PREVIEW LEISURE ****************************************** */
        $("[  DATI-INPUT-TITLE-LEISURE]").on('keyup', function() {
            $("[dati-title-leisure]").html( $("[  DATI-INPUT-TITLE-LEISURE]").val());
            $("[  class=preview_Leisure]").find("[ class=time_shift]").html('<img  src="/assets/img/ui/clock.png" alt="image" style="width: 12px;" > <p>Ouvert</p>');
            $("[  class=preview_Leisure]").find("[ class=localisation]").html('<i class="fas fa-map-marker-alt"></i> <p>Salle de Sport</p>');

        });
        $("[DATI-INPUT-DESCRIPTION-LEISURE]").on('keyup', function() {
            $("[dati-description-leisure]").html( $("[DATI-INPUT-DESCRIPTION-LEISURE]").val());

        });



        /* ******************************** End PREVIEW LEISURE ****************************************** */


    }
    VIDE_PREVIEW_LEISURE(){
        $("[dati-title-leisure]").html("");
        $("[dati-description-leisure]").html("");
        $("[  class=preview_Leisure]").find("[ class=time_shift]").html("");
        $("[  class=preview_Leisure]").find("[ class=localisation]").html("");
        $("[dati-image-leisure]").attr("src", "/assets/img/ui/white.png");

    }

    VERIF_FORM_ADD_LEISURE(element){
        this.msgErreurLeisure= [];
        var title = $(element).find("[DATI-INPUT-NAME=title]").val();
        var description = $(element).find("[DATI-INPUT-NAME=description]").val();
        var summary =$(element).find("[DATI-INPUT-NAME=summary]").val();
        var tarif =$(element).find("[dati-input-name=price]").val();
        var image =  iLeisureCard.imgLeisureUploaded ;
        var timeShifts = Shifts_ui.Shifts;
        var type = 1 ;
        var classification = 4;
        var enable = 1 ;
        var translate= formTrx_ui.save_addTrx;
        var contacts= dati_contactForm.sendContactDb;
        for (const [lan, value] of Object.entries(translate)) {
            if(!translate[lan].hasOwnProperty("image")){
                translate[lan]["image"] = image;
            }else if(translate[lan]["image"] == "" || translate[lan]["image"]==null){
                translate[lan]["image"] = image;
            }
        }
        if ($("[dati-page=addLeisureServices]").find("[bt_checked=CheckBoxLeisureOrder]").attr("button-checked") == "false" && $("[dati-page=addLeisureServices]").find("[bt_checked=CheckBoxLeisureReservation]").attr("button-checked") == "false" && $("[dati-page=addLeisureServices]").find("[bt_checked=CheckBoxLeisureResquest]").attr("button-checked") == "false") {
            type = 0;
        }
        if ($("[dati-page=addLeisureServices]").find("[bt_checked=CheckBoxLeisureOrder]").attr("button-checked") == "true" && $("[dati-page=addLeisureServices]").find("[bt_checked=CheckBoxLeisureReservation]").attr("button-checked") == "false" && $("[dati-page=addLeisureServices]").find("[bt_checked=CheckBoxLeisureResquest]").attr("button-checked") == "false") {
            type = 1;
        }

        if ($("[dati-page=addLeisureServices]").find("[bt_checked=CheckBoxLeisureOrder]").attr("button-checked") == "false" && $("[dati-page=addLeisureServices]").find("[bt_checked=CheckBoxLeisureReservation]").attr("button-checked") == "true" && $("[dati-page=addLeisureServices]").find("[bt_checked=CheckBoxLeisureResquest]").attr("button-checked") == "false") {
            type = 2;
        }
        if ($("[dati-page=addLeisureServices]").find("[bt_checked=CheckBoxLeisureOrder]").attr("button-checked") == "true" && $("[dati-page=addLeisureServices]").find("[bt_checked=CheckBoxLeisureReservation]").attr("button-checked") == "true" && $("[dati-page=addLeisureServices]").find("[bt_checked=CheckBoxLeisureResquest]").attr("button-checked") == "false") {
            type = 3;
        }
        if ($("[dati-page=addLeisureServices]").find("[bt_checked=CheckBoxLeisureOrder]").attr("button-checked") == "false" && $("[dati-page=addLeisureServices]").find("[bt_checked=CheckBoxLeisureReservation]").attr("button-checked") == "false" && $("[dati-page=addLeisureServices]").find("[bt_checked=CheckBoxLeisureResquest]").attr("button-checked") == "true") {
            type = 4;
        }
        if ($("[dati-page=addLeisureServices]").find("[bt_checked=CheckBoxLeisureOrder]").attr("button-checked") == "true" && $("[dati-page=addLeisureServices]").find("[bt_checked=CheckBoxLeisureReservation]").attr("button-checked") == "false" && $("[dati-page=addLeisureServices]").find("[bt_checked=CheckBoxLeisureResquest]").attr("button-checked") == "true") {
            type = 5;
        }
        if ($("[dati-page=addLeisureServices]").find("[bt_checked=CheckBoxLeisureOrder]").attr("button-checked") == "false" && $("[dati-page=addLeisureServices]").find("[bt_checked=CheckBoxLeisureReservation]").attr("button-checked") == "true" && $("[dati-page=addLeisureServices]").find("[bt_checked=CheckBoxLeisureResquest]").attr("button-checked") == "true") {
            type = 6;
        }
        if ($("[dati-page=addLeisureServices]").find("[bt_checked=CheckBoxLeisureOrder]").attr("button-checked") == "true" && $("[dati-page=addLeisureServices]").find("[bt_checked=CheckBoxLeisureReservation]").attr("button-checked") == "true" && $("[dati-page=addLeisureServices]").find("[bt_checked=CheckBoxLeisureResquest]").attr("button-checked") == "true") {
            type = 7;
        }

        if(title ==""){
            this.msgErreurLeisure.push("title is required");
            dati_Erreurs.UPDATE("LeisureErreurs");
        }
        if(description===""){
            this.msgErreurLeisure.push("description is required");
            dati_Erreurs.UPDATE("LeisureErreurs");
        }
        if(image === null){
            this.msgErreurLeisure.push("image is required");
            dati_Erreurs.UPDATE("LeisureErreurs");
        }
        if(this.msgErreurLeisure.length == 0) {
            /*vider list erreurs*/
            this.msgErreurLeisure = [];
            dati_Erreurs.UPDATE("LeisureErreurs");
            /*vider list erreur*/
            var data = {
                title: title,
                description: description,
                image: image,
                type: type,
                tarif:tarif,
                time_shift: timeShifts,
                classification: classification,
                enable: enable,
                translate:translate,
                contacts:contacts,
                summary: summary,

            };
            SSAPI.SUBMIT({
                uri: "/Leisure/add",
                data: data,
                onsuccess: "leisureAdded",
                onerror: "leisureAdded_error"
            });
            Shifts_ui.RESET_TABLE("opening_Time_Leisure");
            leisureCard_ui.RESET_FORM_ADD();
            leisureCard_ui.VIDE_PREVIEW_LEISURE();
            $("[ DATI-ID=contactListServiceLeisure]").css("display","none");
            /*turn image value to null*/
            iLeisureCard.imgLeisureUploaded=null;
            /*turn image value to null*/

        }

    }
    RESET_FORM_ADD(){
        $("[ FORM-ID=form_add_Leisure]").find("[DATI-INPUT-NAME=title]").val("");
        $("[ FORM-ID=form_add_Leisure]").find("[DATI-INPUT-NAME=description]").val("");
        $("[ FORM-ID=form_add_Leisure]").find("[DATI-INPUT-NAME=summary]").val("");
        $("[ FORM-ID=form_add_Leisure]").find("[DATI-INPUT-NAME=image]").val("");
        $("[ FORM-ID=form_add_Leisure]").find("[dati-role=clickableTrans]").css("background-image","none");
        $("[dati-page=addLeisureServices]").find("[bt_checked=CheckBoxLeisureOrder]").attr("button-checked","false");
        $("[dati-page=addLeisureServices]").find("[bt_checked=CheckBoxLeisureOrder]").find("[is_checked=OrderCheckBoxLeisureOrder]").css("display","none");
        $("[dati-page=addLeisureServices]").find("[bt_checked=CheckBoxLeisureReservation]").attr("button-checked","false");
        $("[dati-page=addLeisureServices]").find("[bt_checked=CheckBoxLeisureReservation]").find("[is_checked=ReservationCheckBoxLeisureReservation]").css("display","none");
        $("[dati-page=addLeisureServices]").find("[bt_checked=CheckBoxLeisureResquest]").attr("button-checked","false");
        $("[dati-page=addLeisureServices]").find("[bt_checked=CheckBoxLeisureResquest]").find("[is_checked=RequestCheckBoxLeisureResquest]").css("display","none");
        $("[ FORM-ID=form_add_Leisure]").find("[dati-id=Order]").val("");
        $("[ FORM-ID=form_add_Leisure]").find("[dati-id=Reservation]").val("");

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
        var pos = leisureCard_ui.GET_POSITION_IN_LIST(leisureCard_ui.cards,id);
        if(pos != -1){
            leisureCard_ui.cards.splice(pos, 1);
        }
        dati_cardRestaurant.UPDATE("LeisureList");
        leisureCard_ui.CANCEL_ALERTE();
    }
    /* ******* UPDATE ******* */


    VERIF_FORM_EDIT_LEISURE(element){
        this.msgErreurLeisureUpdate= [];
        var title = $(element).find("[DATI-INPUT-NAME=title]").val();
        var description = $(element).find("[DATI-INPUT-NAME=description]").val();
        var summary = $(element).find("[DATI-INPUT-NAME=summary]").val();
        var tarif = $(element).find("[DATI-INPUT-NAME=price]").val();
        var timeShifts = Shifts_ui.Shifts;

        if(iLeisureCard.imgLeisureUploaded!= null){
            var image = iLeisureCard.imgLeisureUploaded;
        }else {
            var image = this.selectedLeisure.image;
        };
        var type = 1 ;
        var classification = 4;
        var enable = 1 ;
        var translate= formTrx_ui.save_addTrx;
        var contacts= dati_contactForm.sendContactDb;

        if ($("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureOrderUp]").attr("button-checked") == "false" && $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureReservationUp]").attr("button-checked") == "false" && $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureResquestUp]").attr("button-checked") == "false") {
            type = 0;
        }
        if ($("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureOrderUp]").attr("button-checked") == "true" && $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureReservationUp]").attr("button-checked") == "false" && $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureResquestUp]").attr("button-checked") == "false") {
            type = 1;
        }

        if ($("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureOrderUp]").attr("button-checked") == "false" && $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureReservationUp]").attr("button-checked") == "true" && $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureResquestUp]").attr("button-checked") == "false") {
            type = 2;
        }
        if ($("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureOrderUp]").attr("button-checked") == "true" && $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureReservationUp]").attr("button-checked") == "true" && $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureResquestUp]").attr("button-checked") == "false") {
            type = 3;
        }
        if ($("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureOrderUp]").attr("button-checked") == "false" && $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureReservationUp]").attr("button-checked") == "false" && $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureResquestUp]").attr("button-checked") == "true") {
            type = 4;
        }
        if ($("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureOrderUp]").attr("button-checked") == "true" && $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureReservationUp]").attr("button-checked") == "false" && $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureResquestUp]").attr("button-checked") == "true") {
            type = 5;
        }
        if ($("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureOrderUp]").attr("button-checked") == "false" && $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureReservationUp]").attr("button-checked") == "true" && $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureResquestUp]").attr("button-checked") == "true") {
            type = 6;
        }
        if ($("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureOrderUp]").attr("button-checked") == "true" && $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureReservationUp]").attr("button-checked") == "true" && $("[dati-page=editLeisurePage]").find("[bt_checked=CheckBoxLeisureResquestUp]").attr("button-checked") == "true") {
            type = 7;
        }



        if(title ==""){
            this.msgErreurLeisureUpdate.push("title is required");
            dati_Erreurs.UPDATE("LeisureErreursUpdate");
        }
        if(description===""){
            this.msgErreurLeisureUpdate.push("description is required");
            dati_Erreurs.UPDATE("LeisureErreursUpdate");
        }
        if(image === null){
            this.msgErreurLeisureUpdate.push("image is required");
            dati_Erreurs.UPDATE("LeisureErreursUpdate");
        }
        if(this.msgErreurLeisureUpdate.length == 0) {
            /*vider list erreurs*/
            this.msgErreurLeisureUpdate = [];
            dati_Erreurs.UPDATE("LeisureErreursUpdate");
            /*vider list erreur*/
            SSAPI.SUBMIT({
                uri: "/Leisure/update",
                data: {
                    leisure_id: this.selectedLeisure.id,
                    title: title,
                    description: description,
                    image: image,
                    type: type,
                    tarif:tarif,
                    time_shift: timeShifts,
                    classification: classification,
                    enable: enable,
                    translate: translate,
                    contacts:contacts,
                    summary: summary,
                },
                onsuccess: "LeisureUpdated",
                onerror: "LeisureUpdated_error",
            });
            iLeisureCard.imgLeisureUploaded= null
        }
    }
    /* ******************************** END CRUD EVENT ****************************************** */

};

let leisureCard_ui = new Ui_leisureCard();