let Ui_WellBeingCard = class {
    constructor() {
        this.cards=[];
        this.selectedwellB = null;
        this.EVENT_UI();
        this.msgErreurWellB=[];
        this.msgErreurWellBUpdate=[];
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

        this.selectedwellB = this.FIN_BY_ID_IN_LIST(listSearch,id);
        var event = new CustomEvent("ReviewReceive", { detail: {service_id : WellBeingCard_ui.selectedwellB.id , uri : "/Well_being/getAllRate"} });
        document.dispatchEvent(event);
        this.HEDEAR_DETAIL_wellB();
        this.CALLRATES();

    }
    CALLRATES(){
        var event = new CustomEvent("getNbreRates", { detail: {service_id : WellBeingCard_ui.selectedwellB.id , uri : "/Well_being"} });
        document.dispatchEvent(event);
        /* getNbreClic*/
        /*   var service_id*/
        SSAPI.SUBMIT({
            uri: "/Well_being/getClicked",
            data :{well_being_id: WellBeingCard_ui.selectedwellB.id },
            onsuccess:"clickNbreReceive"

        })
        /* end getNbreClics*/
        /* getNbreViews*/

        SSAPI.SUBMIT({
            uri: "/Well_being/getNumViews",
            data :{well_being_id: WellBeingCard_ui.selectedwellB.id },
            onsuccess:"clickNbreViews"

        })
        /* end getNbreViews*/
    }
    HEDEAR_DETAIL_wellB(){

        $("[DATI-PAGE=detailServices]").find("[DATI-ID=detail-name-restaurant]").html("Name : "+this.selectedwellB.title);
        $("[DATI-PAGE=detailServices]").find("[DATI-ID=detail-description-restaurant]").html("Description : "+this.selectedwellB.description);
        $("[DATI-PAGE=detailServices]").find("[DATI-ID=detail-image-restaurant]").attr('src',this.selectedwellB.image);

    }
    VALIDATE_ALERTE(){
        var well_being_id = this.selectedwellB.id;
        iWellBeingCard.DELETE_WELLBEING(well_being_id);

    }
    DELETE_NAME(){
        var title = this.selectedwellB.title;
        var titleUper = title.toUpperCase();
        $("[DATI-ID=delete-item-name]").html("Are you sure to delete "+titleUper+" Well-Being");
    }
    TOGGEL_ALERTE(){
        $("[DATI-PAGE=Well-being]").find("[dati-id=wellBAlerte]").find("[class=overlay_restau]").css("display", "block");
    }
    CANCEL_ALERTE(){
        $("[DATI-PAGE=Well-being]").find("[dati-id=wellBAlerte]").find("[class=overlay_restau]").css("display", "none");
    }
    delete(rest_element){
        this.SETSELECTED_detail(rest_element);
        this.TOGGEL_ALERTE();
        this.DELETE_NAME();
    }

    ENABLE_TIME(){
        var val = $("[DATI-ID=switcherAddWellB]").find("[type=checkbox]").is(":checked");
        if(val){
            $("[DATI-ID=opening_Time_WellB]").slideDown();
            $("main").animate({ scrollTop: $("[DATI-PAGE=addWellBServices]").height() }, 'slow');
        }else{
            $("[DATI-ID=opening_Time_WellB]").slideUp();
        }
    }
    /* ******************************** CRUD WELLBEING ****************************************** */
    /* ****** Add ******* */
    EVENT_UI(){

        $(document).ready(function(){
            $(document).on('click','[DATI-FOR=form_add_WellBeing] [DATI-COMPOSENT=SUBMIT]',function() {
                var formId = $(this).attr("DATI-FOR");
                var fn = $("[FORM-ID="+formId+"]").attr("DATI-SEND");
                var element = "$('[FORM-ID="+formId+"]')";
                fn=fn+"("+element+")";
                eval(fn);
            });

        });

        /* ******************************** PREVIEW WELL ****************************************** */
        $("[DATI-INPUT-TITLE-WELL]").on('keyup', function() {
            $("[dati-title-well]").html( $("[DATI-INPUT-TITLE-WELL]").val());


        });
        $("[DATI-INPUT-DESCRIPTION-WELL]").on('keyup', function() {
            $("[dati-description-well]").html( $("[DATI-INPUT-DESCRIPTION-WELL]").val());

        });



        /* ******************************** End PREVIEW WELL ****************************************** */


    }
    VIDE_PREVIEW_WELL(){
        $("[dati-title-well]").html("");
        $("[dati-description-well]").html("");
        $("[dati-image-well]").attr("src", "/assets/img/ui/white.png");

    }

    VERIF_FORM_ADD_WELLBEING(element){

        this.msgErreurWellB= [];
        var title = $(element).find("[DATI-INPUT-NAME=title]").val();
        var description = $(element).find("[DATI-INPUT-NAME=description]").val();
        var summary = $(element).find("[DATI-INPUT-NAME=summary]").val();
        var tarif = $(element).find("[dati-input-price-order-wellb]").val();
        var image =   iWellBeingCard.imgWellUploaded;
        var type  ;
        var classification = 4;
        var enable = 1 ;
        var timeShifts = Shifts_ui.Shifts;
        var translate= formTrx_ui.save_addTrx ;
        var contacts= dati_contactForm.sendContactDb;
        for (const [lan, value] of Object.entries(translate)) {
            if(!translate[lan].hasOwnProperty("image")){
                translate[lan]["image"] = image;
            }else if(translate[lan]["image"] == "" || translate[lan]["image"]==null){
                translate[lan]["image"] = image;
            }
        }
        if ($("[dati-page=addWellBServices]").find("[bt_checked=CheckBoxWellBOrder]").attr("button-checked") == "false" && $("[dati-page=addWellBServices]").find("[bt_checked=CheckBoxWellBReservation]").attr("button-checked") == "false" && $("[dati-page=addWellBServices]").find("[bt_checked=CheckBoxWellBResquest]").attr("button-checked") == "false") {
            type = 0;
        }
        if ($("[dati-page=addWellBServices]").find("[bt_checked=CheckBoxWellBOrder]").attr("button-checked") == "true" && $("[dati-page=addWellBServices]").find("[bt_checked=CheckBoxWellBReservation]").attr("button-checked") == "false" && $("[dati-page=addWellBServices]").find("[bt_checked=CheckBoxWellBResquest]").attr("button-checked") == "false") {
            type = 1;
        }

        if ($("[dati-page=addWellBServices]").find("[bt_checked=CheckBoxWellBOrder]").attr("button-checked") == "false" && $("[dati-page=addWellBServices]").find("[bt_checked=CheckBoxWellBReservation]").attr("button-checked") == "true" && $("[dati-page=addWellBServices]").find("[bt_checked=CheckBoxWellBResquest]").attr("button-checked") == "false") {
            type = 2;
        }
        if ($("[dati-page=addWellBServices]").find("[bt_checked=CheckBoxWellBOrder]").attr("button-checked") == "true" && $("[dati-page=addWellBServices]").find("[bt_checked=CheckBoxWellBReservation]").attr("button-checked") == "true" && $("[dati-page=addWellBServices]").find("[bt_checked=CheckBoxWellBResquest]").attr("button-checked") == "false") {
            type = 3;
        }
        if ($("[dati-page=addWellBServices]").find("[bt_checked=CheckBoxWellBOrder]").attr("button-checked") == "false" && $("[dati-page=addWellBServices]").find("[bt_checked=CheckBoxWellBReservation]").attr("button-checked") == "false" && $("[dati-page=addWellBServices]").find("[bt_checked=CheckBoxWellBResquest]").attr("button-checked") == "true") {
            type = 4;
        }
        if ($("[dati-page=addWellBServices]").find("[bt_checked=CheckBoxWellBOrder]").attr("button-checked") == "true" && $("[dati-page=addWellBServices]").find("[bt_checked=CheckBoxWellBReservation]").attr("button-checked") == "false" && $("[dati-page=addWellBServices]").find("[bt_checked=CheckBoxWellBResquest]").attr("button-checked") == "true") {
            type = 5;
        }
        if ($("[dati-page=addWellBServices]").find("[bt_checked=CheckBoxWellBOrder]").attr("button-checked") == "false" && $("[dati-page=addWellBServices]").find("[bt_checked=CheckBoxWellBReservation]").attr("button-checked") == "true" && $("[dati-page=addWellBServices]").find("[bt_checked=CheckBoxWellBResquest]").attr("button-checked") == "true") {
            type = 6;
        }
        if ($("[dati-page=addWellBServices]").find("[bt_checked=CheckBoxWellBOrder]").attr("button-checked") == "true" && $("[dati-page=addWellBServices]").find("[bt_checked=CheckBoxWellBReservation]").attr("button-checked") == "true" && $("[dati-page=addWellBServices]").find("[bt_checked=CheckBoxWellBResquest]").attr("button-checked") == "true") {
            type = 7;
        }

        if(title ==""){
            this.msgErreurWellB.push("title is required");
            dati_Erreurs.UPDATE("WellBErreurs");
        }
        if(description===""){
            this.msgErreurWellB.push("description is required");
            dati_Erreurs.UPDATE("WellBErreurs");
        }
        if(image === null){
            this.msgErreurWellB.push("image is required");
            dati_Erreurs.UPDATE("WellBErreurs");
        }
        if(this.msgErreurWellB.length == 0) {
            /*vider list erreurs*/
            this.msgErreurWellB = [];
            dati_Erreurs.UPDATE("WellBErreurs");
            /*vider list erreur*/
            var data = {
                title: title,
                description: description,
                image: image,
                type: type,
                tarif:tarif,
                classification: classification,
                enable: enable,
                time_shift: timeShifts,
                translate:translate,
                contacts:contacts,
                summary: summary,

            };
            SSAPI.SUBMIT({
                uri: "/Well_being/add",
                data: data,
                onsuccess: "wellBeingAdded",
                onerror: "wellBeingAdded_error"
            });
            Shifts_ui.RESET_TABLE("opening_Time_WellB");
            WellBeingCard_ui.RESET_FORM_ADD();
            WellBeingCard_ui.VIDE_PREVIEW_WELL();
            $("[ DATI-ID=contactListServiceWellB]").css("display","none");
            /*turn image value to null*/
            iWellBeingCard.imgWellUploaded=null;
            /*turn image value to null*/
        }
    }
    RESET_FORM_ADD(){
        $("[ FORM-ID=form_add_WellBeing]").find("[DATI-INPUT-NAME=title]").val("");
        $("[ FORM-ID=form_add_WellBeing]").find("[DATI-INPUT-NAME=description]").val("");
        $("[ FORM-ID=form_add_WellBeing]").find("[DATI-INPUT-NAME=summary]").val("");
        $("[ FORM-ID=form_add_WellBeing]").find("[DATI-INPUT-NAME=price]").val("");
        $("[ FORM-ID=form_add_WellBeing]").find("[DATI-INPUT-NAME=image]").val("");
        $("[ FORM-ID=form_add_WellBeing]").find("[dati-role=clickableTrans]").css("background-image","none");
        $("[dati-page=addWellBServices]").find("[bt_checked=CheckBoxWellBOrder]").attr("button-checked", "false");
        $("[dati-page=addWellBServices]").find("[bt_checked=CheckBoxWellBOrder]").find("[is_checked=OrderCheckBoxWellBOrder]").css("display", "none");
        $("[dati-page=addWellBServices]").find("[bt_checked=CheckBoxWellBReservation]").attr("button-checked", "false");
        $("[dati-page=addWellBServices]").find("[bt_checked=CheckBoxWellBReservation]").find("[is_checked=ReservationCheckBoxWellBReservation]").css("display", "none");
        $("[dati-page=addWellBServices]").find("[bt_checked=CheckBoxWellBResquest]").attr("button-checked", "false");
        $("[dati-page=addWellBServices]").find("[bt_checked=CheckBoxWellBResquest]").find("[is_checked=RequestCheckBoxWellBResquest]").css("display", "none");
        $("[dati-page=addWellBServices]").find("[dati-id=Order]").val("");
        $("[dati-page=addWellBServices]").find("[dati-id=Reservation]").val("");
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
        var pos = WellBeingCard_ui.GET_POSITION_IN_LIST(WellBeingCard_ui.cards,id);
        if(pos != -1){
            WellBeingCard_ui.cards.splice(pos, 1);
        }
        dati_cardRestaurant.UPDATE("wellBList");
        WellBeingCard_ui.CANCEL_ALERTE();
    }
    /* ******* UPDATE ******* */


    VERIF_FORM_EDIT_WELLBEING(element){

        this.msgErreurWellBUpdate = [];
        var title = $(element).find("[DATI-INPUT-NAME=title]").val();
        var description = $(element).find("[DATI-INPUT-NAME=description]").val();
        var summary = $(element).find("[DATI-INPUT-NAME=summary]").val();
        var tarif = $(element).find("[DATI-INPUT-NAME=price]").val();
        if(iWellBeingCard.imgWellUploaded != null){
            var image = iWellBeingCard.imgWellUploaded;
        }else {
            var image = this.selectedwellB.image;
        }
        var type = 0  ;
        var classification = 4;
        var timeShifts = Shifts_ui.Shifts;
        var enable = 1 ;
        var translate= formTrx_ui.save_addTrx;
        var contacts= dati_contactForm.sendContactDb;

        if ($("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBOrderUp]").attr("button-checked") == "false" && $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBReservationUp]").attr("button-checked") == "false" && $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBRequestUp]").attr("button-checked") == "false") {
            type = 0;
        }
        if ($("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBOrderUp]").attr("button-checked") == "true" && $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBReservationUp]").attr("button-checked") == "false" && $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBRequestUp]").attr("button-checked") == "false") {
            type = 1;
        }

        if ($("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBOrderUp]").attr("button-checked") == "false" && $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBReservationUp]").attr("button-checked") == "true" && $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBRequestUp]").attr("button-checked") == "false") {
            type = 2;
        }
        if ($("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBOrderUp]").attr("button-checked") == "true" && $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBReservationUp]").attr("button-checked") == "true" && $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBRequestUp]").attr("button-checked") == "false") {
            type = 3;
        }
        if ($("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBOrderUp]").attr("button-checked") == "false" && $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBReservationUp]").attr("button-checked") == "false" && $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBRequestUp]").attr("button-checked") == "true") {
            type = 4;
        }
        if ($("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBOrderUp]").attr("button-checked") == "true" && $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBReservationUp]").attr("button-checked") == "false" && $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBRequestUp]").attr("button-checked") == "true") {
            type = 5;
        }
        if ($("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBOrderUp]").attr("button-checked") == "false" && $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBReservationUp]").attr("button-checked") == "true" && $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBRequestUp]").attr("button-checked") == "true") {
            type = 6;
        }
        if ($("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBOrderUp]").attr("button-checked") == "true" && $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBReservationUp]").attr("button-checked") == "true" && $("[dati-page=editWellBPage]").find("[bt_checked=CheckBoxWellBRequestUp]").attr("button-checked") == "true") {
            type = 7;

        }
        if(title ==""){
            this.msgErreurWellBUpdate.push("title is required");
            dati_Erreurs.UPDATE("WellBErreursUpdate");
        }
        if(description===""){
            this.msgErreurWellBUpdate.push("description is required");
            dati_Erreurs.UPDATE("WellBErreursUpdate");
        }
        if(image === null){
            this.msgErreurWellBUpdate.push("image is required");
            dati_Erreurs.UPDATE("WellBErreursUpdate");
        }
        if(this.msgErreurWellBUpdate.length == 0) {

            /*vider list erreurs*/
            this.msgErreurWellBUpdate = [];
            dati_Erreurs.UPDATE("WellBErreursUpdate");
            /*vider list erreur*/
            SSAPI.SUBMIT({
                uri: "/Well_being/update",
                data: {
                    well_being_id: this.selectedwellB.id,
                    title: title,
                    description: description,
                    image: image,
                    type: type,
                    tarif:tarif,
                    classification: classification,
                    enable: enable,
                    time_shift: timeShifts,
                    translate: translate,
                    contacts:contacts,
                    summary: summary,
                },
                onsuccess: "WellBeingUpdated",
                onerror: " WellBeingUpdated_error",
            });
            iWellBeingCard.imgWellUploaded = null ;
        }
    }
    /* ******************************** END CRUD WELLBEING ****************************************** */

};

let WellBeingCard_ui = new Ui_WellBeingCard();