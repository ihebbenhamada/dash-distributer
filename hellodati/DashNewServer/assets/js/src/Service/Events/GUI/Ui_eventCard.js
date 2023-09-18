let Ui_eventCard = class {
    constructor() {
        this.cards=[];
        this.selectedEvent=null;
        this.EVENT_UI();
        this.msgErreurEvent=[];
        this.msgErreurEventUpdate = [];
        this.btChecked={};
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
        this.selectedEvent = this.FIN_BY_ID_IN_LIST(listSearch,id);
        this.HEDEAR_DETAIL_Event();
        var event = new CustomEvent("ReviewReceive", { detail: {service_id : eventCard_ui.selectedEvent.id , uri : "/Event/getAllRate"} });
        document.dispatchEvent(event);
        this.CALLRATES();

    }
    CALLRATES(){
        var event = new CustomEvent("getNbreRates", { detail: {service_id :eventCard_ui.selectedEvent.id , uri : "/Event"} });
        document.dispatchEvent(event);
        /* getNbreClic*/
        /*   var service_id*/
        SSAPI.SUBMIT({
            uri: "/Event/getClicked",
            data :{event_id: eventCard_ui.selectedEvent.id},
            onsuccess:"clickNbreReceive"

        })
        /* end getNbreClics*/
        /* getNbreViews*/

        SSAPI.SUBMIT({
            uri: "/Event/getNumViews",
            data :{event_id: eventCard_ui.selectedEvent.id},
            onsuccess:"clickNbreViews"

        })
        /* end getNbreViews*/
    }
    HEDEAR_DETAIL_Event(){

        $("[DATI-PAGE=detailServices]").find("[DATI-ID=detail-name-restaurant]").html("Name : "+this.selectedEvent.title);
        $("[DATI-PAGE=detailServices]").find("[DATI-ID=detail-description-restaurant]").html("Description : "+this.selectedEvent.descrip);
        $("[DATI-PAGE=detailServices]").find("[DATI-ID=detail-image-restaurant]").attr('src',this.selectedEvent.image);

    }
    SETSELECTED(Event){
        this.selectedEvent= Event;

    }
    TOGGEL_ALERTE(){
        $("[DATI-PAGE=Events]").find("[dati-id=EventAlerte]").find("[class=overlay_restau]").css("display", "block");
    }
    CANCEL_ALERTE(){
        $("[DATI-PAGE=Events]").find("[dati-id=EventAlerte]").find("[class=overlay_restau]").css("display", "none");
    }
    VALIDATE_ALERTE(){
        var id_event = this.selectedEvent.id;
        ieventCard.DELETE_EVENT(id_event);

    }
    DELETE_NAME(){
        var title = this.selectedEvent.title;
        var titleUper = title.toUpperCase();
        $("[DATI-ID=delete-item-name]").html("Are you sure to delete "+titleUper+" Event");
    }
    delete(rest_element){
        this.SETSELECTED_detail(rest_element);
        this.TOGGEL_ALERTE();
        this.DELETE_NAME();
    }
    ENABLE_TIME(){
        var val = $("[DATI-ID=switcherAddEvent]").find("[type=checkbox]").is(":checked");
        if(val){
            $("[DATI-ID=opening_Time_Event]").slideDown();
            $("main").animate({ scrollTop: $("[DATI-PAGE=addEventServices]").height() }, 'slow');
        }else{
            $("[DATI-ID=opening_Time_Event]").slideUp();
        }
    }
    /* ******************************** CRUD EVENT ****************************************** */




    /* ****** Add ******* */
    EVENT_UI(){
        /* click to show trx event*/
/*        $(document).ready(function(){
            $(document).on('click','[dati-show-trx-event]',function() {
         $("[DATI-FORM-TRX]").css("display","inline-block");
            });

        });*/
        /* end click to show trx event*/
        /* click to hide trx event*/
        $(document).ready(function(){
            $(document).on('click','[DATI-CLOSE-TRX]',function() {
                $("[DATI-FORM-TRX]").css("display","none");
            });

        });
        /* end click to hide trx event*/
        $(document).ready(function(){
            $(document).on('click','[DATI-FOR=form_add_Event] [DATI-COMPOSENT=SUBMIT]',function() {
                var formId = $(this).attr("DATI-FOR");
                var fn = $("[FORM-ID="+formId+"]").attr("DATI-SEND");
                var element = "$('[FORM-ID="+formId+"]')";
                fn=fn+"("+element+")";
                eval(fn);
            });

        });

        /* ******************************** PREVIEW EVENT ****************************************** */
        $("[DATI-INPUT-TITLE-EVENT]").on('keyup', function() {
            $("[dati-title-event]").html( $("[DATI-INPUT-TITLE-EVENT]").val());
            $("[ class=preview_Event]").find("[class=time_shift]").html('<img  src="/assets/img/ui/clock.png" alt="image" style="width: 12px;"  > <p> Timinig</p> ');


        });
        $("[DATI-INPUT-DESCRIPTION-EVENT]").on('keyup', function() {
            $("[dati-description-event]").html( $("[DATI-INPUT-DESCRIPTION-EVENT]").val());

        });



        /* ******************************** End PREVIEW EVENT ****************************************** */


    }

    VIDE_PREVIEW_EVENT(){
        $("[dati-title-event]").html("");
        $("[dati-description-event]").html("");
        $("[class=preview_Event]").find("[ class=time_shift]").html("");
        $("[dati-image-event]").css("display","none");

    }


    VERIF_FORM_ADD_EVENT(element){
        this.msgErreurEvent = [];
        dati_Erreurs.UPDATE("EventErreurs");
        var title = $(element).find("[DATI-INPUT-NAME=title]").val();
        var description = $(element).find("[DATI-INPUT-NAME=description]").val();
        var summary = $(element).find("[DATI-INPUT-NAME=summary]").val();
        var tarif = $(element).find("[DATI-INPUT-NAME=price]").val();
        //var image = $(element).find("[DATI-INPUT-NAME=image]").val();
        var image = ieventCard.imgEventUploaded;
        var type  ;
        var classification = 4;
        var enable = 1 ;
        var translate= formTrx_ui.save_addTrx ;
        var timeShifts = Shifts_ui.Shifts;
        var contacts= dati_contactForm.sendContactDb;
        for( var i=0; i<translate.length; i++){
        }
        for (const [lan, value] of Object.entries(translate)) {
            if(!translate[lan].hasOwnProperty("image")){
                translate[lan]["image"] = image;
            }else if(translate[lan]["image"] == "" || translate[lan]["image"]==null){
                translate[lan]["image"] = image;
            }
        }
        if ($("[dati-page=addEventServices]").find("[bt_checked=CheckBoxEventOrder]").attr("button-checked") == "false" && $("[dati-page=addEventServices]").find("[bt_checked=CheckBoxEventReservation]").attr("button-checked") == "false" && $("[dati-page=addEventServices]").find("[bt_checked=CheckBoxEventRequest]").attr("button-checked") == "false") {
            type = 0;
        }
        if ($("[dati-page=addEventServices]").find("[bt_checked=CheckBoxEventOrder]").attr("button-checked") == "true" && $("[dati-page=addEventServices]").find("[bt_checked=CheckBoxEventReservation]").attr("button-checked") == "false" && $("[dati-page=addEventServices]").find("[bt_checked=CheckBoxEventRequest]").attr("button-checked") == "false") {
            type = 1;
        }

        if ($("[dati-page=addEventServices]").find("[bt_checked=CheckBoxEventOrder]").attr("button-checked") == "false" && $("[dati-page=addEventServices]").find("[bt_checked=CheckBoxEventReservation]").attr("button-checked") == "true" && $("[dati-page=addEventServices]").find("[bt_checked=CheckBoxEventRequest]").attr("button-checked") == "false") {
            type = 2;
        }
        if ($("[dati-page=addEventServices]").find("[bt_checked=CheckBoxEventOrder]").attr("button-checked") == "true" && $("[dati-page=addEventServices]").find("[bt_checked=CheckBoxEventReservation]").attr("button-checked") == "true" && $("[dati-page=addEventServices]").find("[bt_checked=CheckBoxEventRequest]").attr("button-checked") == "false") {
            type = 3;
        }
        if ($("[dati-page=addEventServices]").find("[bt_checked=CheckBoxEventOrder]").attr("button-checked") == "false" && $("[dati-page=addEventServices]").find("[bt_checked=CheckBoxEventReservation]").attr("button-checked") == "false" && $("[dati-page=addEventServices]").find("[bt_checked=CheckBoxEventRequest]").attr("button-checked") == "true") {
            type = 4;
        }
        if ($("[dati-page=addEventServices]").find("[bt_checked=CheckBoxEventOrder]").attr("button-checked") == "true" && $("[dati-page=addEventServices]").find("[bt_checked=CheckBoxEventReservation]").attr("button-checked") == "false" && $("[dati-page=addEventServices]").find("[bt_checked=CheckBoxEventRequest]").attr("button-checked") == "true") {
            type = 5;
        }
        if ($("[dati-page=addEventServices]").find("[bt_checked=CheckBoxEventOrder]").attr("button-checked") == "false" && $("[dati-page=addEventServices]").find("[bt_checked=CheckBoxEventReservation]").attr("button-checked") == "true" && $("[dati-page=addEventServices]").find("[bt_checked=CheckBoxEventRequest]").attr("button-checked") == "true") {
            type = 6;
        }
        if ($("[dati-page=addEventServices]").find("[bt_checked=CheckBoxEventOrder]").attr("button-checked") == "true" && $("[dati-page=addEventServices]").find("[bt_checked=CheckBoxEventReservation]").attr("button-checked") == "true" && $("[dati-page=addEventServices]").find("[bt_checked=CheckBoxEventRequest]").attr("button-checked") == "true") {
            type = 7;
        }



        if(title ==""){
            this.msgErreurEvent.push("title is required");
            dati_Erreurs.UPDATE("EventErreurs");
        }
        if(description===""){
            this.msgErreurEvent.push("description is required");
            dati_Erreurs.UPDATE("EventErreurs");
        }
        if(image === null){
            this.msgErreurEvent.push("image is required");
            dati_Erreurs.UPDATE("EventErreurs");
        }


        if(this.msgErreurEvent.length == 0) {
            /*vider list erreurs*/
            this.msgErreurEvent = [];
            dati_Erreurs.UPDATE("EventErreurs");
            /*vider list erreur*/
            var data = {
                title: title,
                description: description,
                image: image,
                type: type,
                tarif:tarif,
                time_shift:timeShifts,
                classification: classification,
                enable: enable,
                translate:translate,
                contacts:contacts,
                summary: summary,

            };



            SSAPI.SUBMIT({
                uri: "/Event/add",
                data: data,
                onsuccess: "eventAdded",
                onerror: "eventAdded_error"
            });
            Shifts_ui.RESET_TABLE("opening_Time_Event");
            eventCard_ui.RESET_FORM_ADD();
            eventCard_ui.VIDE_PREVIEW_EVENT();
            $("[ DATI-ID=contactListServiceEvent]").css("display","none");
            /*turn image value to null*/
            ieventCard.imgEventUploaded=null;
            /*turn image value to null*/
        }

    }
    RESET_FORM_ADD() {
        $("[ FORM-ID=form_add_Event]").find("[DATI-INPUT-NAME=title]").val("");
        $("[ FORM-ID=form_add_Event]").find("[DATI-INPUT-NAME=description]").val("");
        $("[ FORM-ID=form_add_Event]").find("[DATI-INPUT-NAME=summary]").val("");
        $("[ FORM-ID=form_add_Event]").find("[DATI-INPUT-NAME=price]").val("");
        $("[ FORM-ID=form_add_Event]").find("[DATI-INPUT-NAME=image]").val("");
        $("[ FORM-ID=form_add_Event]").find("[dati-role=clickableTrans]").css("background-image", "none");
        $("[dati-page=addEventServices]").find("[bt_checked=CheckBoxEventOrder]").attr("button-checked", "false");
        $("[dati-page=addEventServices]").find("[bt_checked=CheckBoxEventOrder]").find("[is_checked=OrderCheckBoxEventOrder]").css("display", "none");
        $("[dati-page=addEventServices]").find("[bt_checked=CheckBoxEventReservation]").attr("button-checked", "false");
        $("[dati-page=addEventServices]").find("[bt_checked=CheckBoxEventReservation]").find("[is_checked=ReservationCheckBoxEventReservation]").css("display", "none");
        $("[dati-page=addEventServices]").find("[bt_checked=CheckBoxEventRequest]").attr("button-checked", "false");
        $("[dati-page=addEventServices]").find("[bt_checked=CheckBoxEventRequest]").find("[is_checked=RequestCheckBoxEventRequest]").css("display", "none");
        $("[dati-page=addEventServices]").find("[dati-id=Order]").val("");
        $("[dati-page=addEventServices]").find("[dati-id=Reservation]").val("");
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

        var pos = eventCard_ui.GET_POSITION_IN_LIST(eventCard_ui.cards,id);
        if(pos != -1){
            eventCard_ui.cards.splice(pos, 1);
        }
        dati_cardRestaurant.UPDATE("EventList");
        eventCard_ui.CANCEL_ALERTE();
    }
    /* ******* UPDATE ******* */


    VERIF_FORM_EDIT_event(element){
        this.msgErreurEventUpdate=[];
        var timeShifts = Shifts_ui.Shifts;
        var title = $(element).find("[DATI-INPUT-NAME=title]").val();
        var description = $(element).find("[DATI-INPUT-NAME=description]").val();
        var summary = $(element).find("[DATI-INPUT-NAME=summary]").val();
        var tarif = $(element).find("[DATI-INPUT-NAME=price]").val();
        if(ieventCard.imgEventUploaded != null){
            var image =  ieventCard.imgEventUploaded;
        }else {
            var image =  this.selectedEvent.image;
        }
        var type = 1 ;
        var classification = 4;
        var enable = 1 ;
        var translate= formTrx_ui.save_addTrx ;
        var contacts= dati_contactForm.sendContactDb;
        if ($("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventOrderUp]").attr("button-checked") == "false" && $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventReservationUp]").attr("button-checked") == "false" && $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventRequestUp]").attr("button-checked") == "false") {
            type = 0;
        }
        if ($("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventOrderUp]").attr("button-checked") == "true" && $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventReservationUp]").attr("button-checked") == "false" && $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventRequestUp]").attr("button-checked") == "false") {
            type = 1;
        }

        if ($("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventOrderUp]").attr("button-checked") == "false" && $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventReservationUp]").attr("button-checked") == "true" && $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventRequestUp]").attr("button-checked") == "false") {
            type = 2;
        }
        if ($("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventOrderUp]").attr("button-checked") == "true" && $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventReservationUp]").attr("button-checked") == "true" && $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventRequestUp]").attr("button-checked") == "false") {
            type = 3;
        }
        if ($("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventOrderUp]").attr("button-checked") == "false" && $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventReservationUp]").attr("button-checked") == "false" && $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventRequestUp]").attr("button-checked") == "true") {
            type = 4;
        }
        if ($("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventOrderUp]").attr("button-checked") == "true" && $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventReservationUp]").attr("button-checked") == "false" && $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventRequestUp]").attr("button-checked") == "true") {
            type = 5;
        }
        if ($("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventOrderUp]").attr("button-checked") == "false" && $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventReservationUp]").attr("button-checked") == "true" && $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventRequestUp]").attr("button-checked") == "true") {
            type = 6;
        }
        if ($("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventOrderUp]").attr("button-checked") == "true" && $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventReservationUp]").attr("button-checked") == "true" && $("[dati-page=editEventPage]").find("[bt_checked=CheckBoxEventRequestUp]").attr("button-checked") == "true") {
            type = 7;
        }

        if(title ==""){
            this.msgErreurEventUpdate.push("title is required");
            dati_Erreurs.UPDATE("EventErreursUpdate");
        }
        if(description===""){
            this.msgErreurEventUpdate.push("description is required");
            dati_Erreurs.UPDATE("EventErreursUpdate");
        }
        if(image === null){
            this.msgErreurEventUpdate.push("image is required");
            dati_Erreurs.UPDATE("EventErreursUpdate");
        }



        if(this.msgErreurEventUpdate.length == 0) {
            /*vider list erreurs*/
            this.msgErreurEventUpdate = [];
            dati_Erreurs.UPDATE("EventErreursUpdate");

            SSAPI.SUBMIT({
                uri: "/Event/update",
                data: {
                    event_id: this.selectedEvent.id,
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
                onsuccess: "EventUpdated",
                onerror: " EventUpdated_error",
            });
            ieventCard.imgEventUploaded=null;
        }
    }
    /* ******************************** END CRUD EVENT ****************************************** */

};

let eventCard_ui = new Ui_eventCard();