let Ui_meetingCard = class {
    constructor() {
        this.cards=[];
        this.selectedMeeting= null ;
        this.EVENT_UI();
        this.msgErreurMeeting=[];
        this.msgErreurMeetingUpdate=[];
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

        this.selectedMeeting = this.FIN_BY_ID_IN_LIST(listSearch,id);
        var event = new CustomEvent("ReviewReceive", { detail: {service_id : meetingCard_ui.selectedMeeting.id , uri : "/Meeting/getAllRate"} });
        document.dispatchEvent(event);
        this.HEDEAR_DETAIL_Meeting();
        this.CALLRATES();

    }
    CALLRATES(){
        var event = new CustomEvent("getNbreRates", { detail: {service_id :meetingCard_ui.selectedMeeting.id , uri : "/Meeting"} });
        document.dispatchEvent(event);
        /* getNbreClic*/
        /*   var service_id*/
        SSAPI.SUBMIT({
            uri: "/Meeting/getClicked",
            data :{meeting_id: meetingCard_ui.selectedMeeting.id},
            onsuccess:"clickNbreReceive"

        })
        /* end getNbreClics*/
        /* getNbreViews*/

        SSAPI.SUBMIT({
            uri: "/Meeting/getNumViews",
            data :{meeting_id: meetingCard_ui.selectedMeeting.id},
            onsuccess:"clickNbreViews"

        })
        /* end getNbreViews*/
    }
    HEDEAR_DETAIL_Meeting(){

        $("[DATI-PAGE=detailServices]").find("[DATI-ID=detail-name-restaurant]").html("Name : "+this.selectedMeeting.title);
        $("[DATI-PAGE=detailServices]").find("[DATI-ID=detail-description-restaurant]").html("Description : "+this.selectedMeeting.descrip);
        $("[DATI-PAGE=detailServices]").find("[DATI-ID=detail-image-restaurant]").attr('src',this.selectedMeeting.image);

    }
    TOGGEL_ALERTE(){
        $("[DATI-PAGE=Meetings]").find("[dati-id=MeetingAlerte]").find("[class=overlay_restau]").css("display", "block");
    }

    CANCEL_ALERTE(){
        $("[DATI-PAGE=Meetings]").find("[dati-id=MeetingAlerte]").find("[class=overlay_restau]").css("display", "none");
    }
    VALIDATE_ALERTE(){
        var meeting_id = this.selectedMeeting.id;
        imeetingCard.DELETE_MEETING(meeting_id);

    }
    DELETE_NAME(){
        var title = this.selectedMeeting.title;
        var titleUper = title.toUpperCase();
        $("[DATI-ID=delete-item-name]").html("Are you sure to delete "+titleUper+" Place");
    }
    delete(rest_element){
        this.SETSELECTED_detail(rest_element);
        this.TOGGEL_ALERTE();
        this.DELETE_NAME();
    }
    ENABLE_TIME(){
        var val = $("[DATI-ID=switcherAddMeeting]").find("[type=checkbox]").is(":checked");
        if(val){
            $("[DATI-ID=opening_Time_Meeting]").slideDown();
            $("main").animate({ scrollTop: $("[DATI-PAGE=addMeetingServices]").height() }, 'slow');
        }else{
            $("[DATI-ID=opening_Time_Meeting]").slideUp();
        }
    }
    /* ******************************** CRUD MEETING ****************************************** */
    /* ****** Add ******* */
    EVENT_UI(){

        $(document).ready(function(){
            $(document).on('click','[DATI-FOR=form_add_Meeting] [DATI-COMPOSENT=SUBMIT]',function() {
                var formId = $(this).attr("DATI-FOR");
                var fn = $("[FORM-ID="+formId+"]").attr("DATI-SEND");
                var element = "$('[FORM-ID="+formId+"]')";
                fn=fn+"("+element+")";
                eval(fn);
            });

        });

        /* ******************************** PREVIEW MEETING ****************************************** */
        $("[ DATI-INPUT-TITLE-MEETING]").on('keyup', function() {
            $("[dati-title-meeting]").html( $("[ DATI-INPUT-TITLE-MEETING]").val());
            $("[  class=preview_Meet]").find("[ class=rating]").html(
                '<span class="fa fa-star "></span>'+
                '<span class="fa fa-star "></span>'+
                '<span class="fa fa-star "></span>'+
                '<span class="fa fa-star"></span>'+
                '<span class="fa fa-star" style="color: white;"></span>');

        });



        /* ******************************** End PREVIEW MEETING ****************************************** */



    }

    VIDE_PREVIEW_MEETING(){
        $("[dati-title-meeting]").html("");
        $("[dati-description-meeting]").html("");
        $("[  class=preview_Meet]").find("[ class=rating]").html("");
        $("[dati-image-meeting]").attr("src", "/assets/img/ui/white.png");

    }
    VERIF_FORM_ADD_MEETING(element){
        this.msgErreurMeeting= [];
        var title = $(element).find("[DATI-INPUT-NAME=title]").val();
        var description = $(element).find("[DATI-INPUT-NAME=description]").val();
        var summary = $(element).find("[DATI-INPUT-NAME=summary]").val();
        var price = $(element).find("[DATI-INPUT-NAME=price]").val();
        var image =  imeetingCard.imgMeetingUploaded ;
        var timeShifts = Shifts_ui.Shifts;
        var type = 1 ;
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
        if ($("[dati-page=addMeetingServices]").find("[bt_checked=CheckBoxMeetingOrder]").attr("button-checked") == "false" && $("[dati-page=addMeetingServices]").find("[bt_checked=CheckBoxMeetingReservation]").attr("button-checked") == "false" && $("[dati-page=addMeetingServices]").find("[bt_checked=CheckBoxMeetingResquest]").attr("button-checked") == "false") {
            type = 0;
        }
        if ($("[dati-page=addMeetingServices]").find("[bt_checked=CheckBoxMeetingOrder]").attr("button-checked") == "true" && $("[dati-page=addMeetingServices]").find("[bt_checked=CheckBoxMeetingReservation]").attr("button-checked") == "false" && $("[dati-page=addMeetingServices]").find("[bt_checked=CheckBoxMeetingResquest]").attr("button-checked") == "false") {
            type = 1;
        }

        if ($("[dati-page=addMeetingServices]").find("[bt_checked=CheckBoxMeetingOrder]").attr("button-checked") == "false" && $("[dati-page=addMeetingServices]").find("[bt_checked=CheckBoxMeetingReservation]").attr("button-checked") == "true" && $("[dati-page=addMeetingServices]").find("[bt_checked=CheckBoxMeetingResquest]").attr("button-checked") == "false") {
            type = 2;
        }
        if ($("[dati-page=addMeetingServices]").find("[bt_checked=CheckBoxMeetingOrder]").attr("button-checked") == "true" && $("[dati-page=addMeetingServices]").find("[bt_checked=CheckBoxMeetingReservation]").attr("button-checked") == "true" && $("[dati-page=addMeetingServices]").find("[bt_checked=CheckBoxMeetingResquest]").attr("button-checked") == "false") {
            type = 3;
        }
        if ($("[dati-page=addMeetingServices]").find("[bt_checked=CheckBoxMeetingOrder]").attr("button-checked") == "false" && $("[dati-page=addMeetingServices]").find("[bt_checked=CheckBoxMeetingReservation]").attr("button-checked") == "false" && $("[dati-page=addMeetingServices]").find("[bt_checked=CheckBoxMeetingResquest]").attr("button-checked") == "true") {
            type = 4;
        }
        if ($("[dati-page=addMeetingServices]").find("[bt_checked=CheckBoxMeetingOrder]").attr("button-checked") == "true" && $("[dati-page=addMeetingServices]").find("[bt_checked=CheckBoxMeetingReservation]").attr("button-checked") == "false" && $("[dati-page=addMeetingServices]").find("[bt_checked=CheckBoxMeetingResquest]").attr("button-checked") == "true") {
            type = 5;
        }
        if ($("[dati-page=addMeetingServices]").find("[bt_checked=CheckBoxMeetingOrder]").attr("button-checked") == "false" && $("[dati-page=addMeetingServices]").find("[bt_checked=CheckBoxMeetingReservation]").attr("button-checked") == "true" && $("[dati-page=addMeetingServices]").find("[bt_checked=CheckBoxMeetingResquest]").attr("button-checked") == "true") {
            type = 6;
        }
        if ($("[dati-page=addMeetingServices]").find("[bt_checked=CheckBoxMeetingOrder]").attr("button-checked") == "true" && $("[dati-page=addMeetingServices]").find("[bt_checked=CheckBoxMeetingReservation]").attr("button-checked") == "true" && $("[dati-page=addMeetingServices]").find("[bt_checked=CheckBoxMeetingResquest]").attr("button-checked") == "true") {
            type = 7;
        }
        if(title ==""){
            this.msgErreurMeeting.push("title is required");
            dati_Erreurs.UPDATE("MeetingErreurs");
        }
        if(description===""){
            this.msgErreurMeeting.push("description is required");
            dati_Erreurs.UPDATE("MeetingErreurs");
        }
        if(image === null){
            this.msgErreurMeeting.push("image is required");
            dati_Erreurs.UPDATE("MeetingErreurs");
        }

        if(this.msgErreurMeeting.length == 0) {
            /*vider list erreurs*/
            this.msgErreurMeeting = [];
            dati_Erreurs.UPDATE("MeetingErreurs");
            /*vider list erreur*/
            var data = {
                title: title,
                description: description,
                image: image,
                type: type,
                price:price,
                time_shift: timeShifts,
                classification: classification,
                enable: enable,
                translate:translate,
                contacts:contacts,
                summary: summary,

            };


            SSAPI.SUBMIT({
                uri: "/Meeting/add",
                data: data,
                onsuccess: "meetingtAdded",
                onerror: "meetingAdded_error"
            });
            Shifts_ui.RESET_TABLE("opening_Time_Meeting");
            meetingCard_ui.RESET_FORM_ADD();
            meetingCard_ui.VIDE_PREVIEW_MEETING();
            $("[ DATI-ID=contactListServiceMeeting]").css("display","none");
            /*turn image value to null*/
            imeetingCard.imgMeetingUploaded=null;
            /*turn image value to null*/
        }

    }
    RESET_FORM_ADD(){
        $("[ FORM-ID=form_add_Meeting]").find("[DATI-INPUT-NAME=title]").val("");
        $("[ FORM-ID=form_add_Meeting]").find("[DATI-INPUT-NAME=description]").val("");
        $("[ FORM-ID=form_add_Meeting]").find("[DATI-INPUT-NAME=price]").val("");
        $("[ FORM-ID=form_add_Meeting]").find("[DATI-INPUT-NAME=summary]").val("");
        $("[ FORM-ID=form_add_Meeting]").find("[DATI-INPUT-NAME=image]").val("");
        $("[ FORM-ID=form_add_Meeting]").find("[dati_let_order]").prop('checked', false);
        $("[ FORM-ID=form_add_Meeting]").find("[dati_let_reservation]").prop('checked', false);
        $("[dati-page=addMeetingServices]").find("[dati-role=clickableTrans]").css("background-image","none");
        $("[dati-page=addMeetingServices]").find("[bt_checked=CheckBoxMeetingOrder]").attr("button-checked", "false");
        $("[dati-page=addMeetingServices]").find("[bt_checked=CheckBoxMeetingOrder]").find("[is_checked=OrderCheckBoxMeetingOrder]").css("display", "none");
        $("[dati-page=addMeetingServices]").find("[bt_checked=CheckBoxMeetingReservation]").attr("button-checked", "false");
        $("[dati-page=addMeetingServices]").find("[bt_checked=CheckBoxMeetingReservation]").find("[is_checked=ReservationCheckBoxMeetingReservation]").css("display", "none");
        $("[dati-page=addMeetingServices]").find("[bt_checked=CheckBoxMeetingResquest]").attr("button-checked", "false");
        $("[dati-page=addMeetingServices]").find("[bt_checked=CheckBoxMeetingResquest]").find("[is_checked=RequestCheckBoxMeetingResquest]").css("display", "none");
        $("[dati-page=addMeetingServices]").find("[dati-id=Order]").val("");
        $("[dati-page=addMeetingServices]").find("[dati-id=Reservation]").val("");

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
        var pos = meetingCard_ui.GET_POSITION_IN_LIST(meetingCard_ui.cards,id);
        if(pos != -1){
            meetingCard_ui.cards.splice(pos, 1);
        }
        dati_cardRestaurant.UPDATE("MeetingList");
        meetingCard_ui.CANCEL_ALERTE();
    }
    /* ******* UPDATE ******* */


    VERIF_FORM_EDIT_MEETING(element){
        this.msgErreurMeetingUpdate=[];

        var title = $(element).find("[DATI-INPUT-NAME=title]").val();
        var description = $(element).find("[DATI-INPUT-NAME=description]").val();
        var summary = $(element).find("[DATI-INPUT-NAME=summary]").val();
        var price = $(element).find("[DATI-INPUT-NAME=price]").val();
        var timeShifts = Shifts_ui.Shifts;
        if(imeetingCard.imgMeetingUploaded!= null){
            var image =imeetingCard.imgMeetingUploaded;
        }else {
            var image = this.selectedMeeting.image;
        };
        var type = 1 ;
        var classification = 4;
        var enable = 1 ;
        var translate=formTrx_ui.save_addTrx ;
        var contacts= dati_contactForm.sendContactDb;
        if ($("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingOrderUp]").attr("button-checked") == "false" && $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingReservationUp]").attr("button-checked") == "false" && $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingResquestUp]").attr("button-checked") == "false") {
            type = 0;
        }
        if ($("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingOrderUp]").attr("button-checked") == "true" && $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingReservationUp]").attr("button-checked") == "false" && $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingResquestUp]").attr("button-checked") == "false") {
            type = 1;
        }

        if ($("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingOrderUp]").attr("button-checked") == "false" && $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingReservationUp]").attr("button-checked") == "true" && $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingResquestUp]").attr("button-checked") == "false") {
            type = 2;
        }
        if ($("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingOrderUp]").attr("button-checked") == "true" && $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingReservationUp]").attr("button-checked") == "true" && $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingResquestUp]").attr("button-checked") == "false") {
            type = 3;
        }
        if ($("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingOrderUp]").attr("button-checked") == "false" && $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingReservationUp]").attr("button-checked") == "false" && $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingResquestUp]").attr("button-checked") == "true") {
            type = 4;
        }
        if ($("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingOrderUp]").attr("button-checked") == "true" && $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingReservationUp]").attr("button-checked") == "false" && $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingResquestUp]").attr("button-checked") == "true") {
            type = 5;
        }
        if ($("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingOrderUp]").attr("button-checked") == "false" && $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingReservationUp]").attr("button-checked") == "true" && $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingResquestUp]").attr("button-checked") == "true") {
            type = 6;
        }
        if ($("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingOrderUp]").attr("button-checked") == "true" && $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingReservationUp]").attr("button-checked") == "true" && $("[dati-page=editMeetingPage]").find("[bt_checked=CheckBoxMeetingResquestUp]").attr("button-checked") == "true") {
            type = 7;
        }
        if(title ==""){
            this.msgErreurMeetingUpdate.push("title is required");
            dati_Erreurs.UPDATE("MeetingErreursUpdate");
        }
        if(description===""){
            this.msgErreurMeetingUpdate.push("description is required");
            dati_Erreurs.UPDATE("MeetingErreursUpdate");
        }
        if(image === null){
            this.msgErreurMeetingUpdate.push("image is required");
            dati_Erreurs.UPDATE("MeetingErreursUpdate");
        }


        if(this.msgErreurMeetingUpdate.length == 0) {
            /*vider list erreurs*/
            this.msgErreurMeetingUpdate = [];
            dati_Erreurs.UPDATE("MeetingErreursUpdate");
            SSAPI.SUBMIT({
                uri: "/Meeting/update",
                data: {
                    meeting_id: this.selectedMeeting.id,
                    title: title,
                    description: description,
                    image: image,
                    type: type,
                    price:price,
                    time_shift: timeShifts,
                    classification: classification,
                    enable: enable,
                    translate: translate,
                    contacts:contacts,
                    summary: summary,
                },
                onsuccess: "MeetingUpdated",
                onerror: " MeetingUpdated_error",
            });
            imeetingCard.imgMeetingUploaded=null;
        }
    }
    /* ******************************** END CRUD EVENT ****************************************** */


};

let meetingCard_ui = new Ui_meetingCard();