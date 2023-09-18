class imp_Concierge{
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();
        this.imgConciergeUploaded=null;
        this.imgConciergeUpUploaded=null;
    }
    DELETE_CONC(id){

        SSAPI.SUBMIT({
            uri:"/Concierge/delete",
            onsuccess:"ConciergeDeleted",
            onerror:"ConciergeDeleted_error",
            data:{
                cong_id:id
            }
        })
    }
    ENABLE_CONCIERGE(list){
        var id =list.id;


        if(list.enable){

            SSAPI.SUBMIT({
                uri:"/Concierge/disable",
                data:{
                    cong_id: id
                },
                onsuccess:"ConcDisabled"
            })
            //if changed in database
            list.enable=false;

            $("[DATI-ID=conciergeCard"+id+"]").attr("dati-default_value",0);

        }else{

            SSAPI.SUBMIT({
                uri:"/Concierge/enable",
                data:{
                    cong_id: id
                },
                onsuccess:"ConcEnabled"
            })
            //if changed in database
            list.enable=true;
            $("[DATI-ID=conciergeCard"+id+"]").attr("dati-default_value",1);

        }
    }


    EVENTS_UI(){


document.addEventListener("SHOW_PAGE", function(e) {

    var page = e.detail.pageLink;
    if (page == "ConciergePage") {
        SSAPI.SUBMIT({
            uri:"/Concierge/getAll",
            onsuccess:"ListConciergeReceive"
        })


        $(document).on('change','[DATI-ID=uploadConciergePhotofile]',function(){

            var image =$(this)[0].files[0];
            var form = new FormData();
            form.append("img", image, $(this).val());
            SSAPI.upload({
                uri:"/Cdn/upload_img",
                onsuccess:"imageConciergeUploaded",
                data:form
            })
            //$(this).parent().find("img").attr("src",src);
        });
        $(document).on('change','[DATI-ID=uploadConciergePhotoUpfile]',function(){
            var image =$(this)[0].files[0];
            var form = new FormData();
            form.append("img", image, $(this).val());
            SSAPI.upload({
                uri:"/Cdn/upload_img",
                onsuccess:"imageConciergeUpUploaded",
                data:form
            })
            //$(this).parent().find("img").attr("src",src);
        });

        var eventSwitcher = new CustomEvent("SwitcherConcierge");


        document.dispatchEvent(eventSwitcher);
        var eventAlerte = new CustomEvent("showAlerteConc");

        document.dispatchEvent(eventAlerte);
    }

    if(page == "addConcierge"){
        setTimeout(function(){
            $("[dati-page=addConcierge]").find("[bt_checked=CheckBoxConciergeOrder]").attr("button-checked","false");
            $("[dati-page=addConcierge]").find("[bt_checked=CheckBoxConciergeOrder]").find("[is_checked=OrderCheckBoxConciergeOrder]").css("display","none");
            $("[dati-page=addConcierge]").find("[bt_checked=CheckBoxConciergeReservation]").attr("button-checked","false");
            $("[dati-page=addConcierge]").find("[bt_checked=CheckBoxConciergeReservation]").find("[is_checked=ReservationCheckBoxConciergeReservation]").css("display","none");
            $("[dati-page=addConcierge]").find("[bt_checked=CheckBoxConciergeResquest]").attr("button-checked","false");
            $("[dati-page=addConcierge]").find("[bt_checked=CheckBoxConciergeResquest]").find("[is_checked=RequestCheckBoxConciergeResquest]").css("display","none");
        }, 300);
        dati_contactForm.contact={};
        var eventTrans = new CustomEvent("showformTranslateConcierge");
        document.dispatchEvent(eventTrans);
        var eventContact = new CustomEvent("showcontactFormConcierge");
        document.dispatchEvent(eventContact);
        var eventListContact = new CustomEvent("showcontactListServiceConcierge");
        document.dispatchEvent(eventListContact);
        var eventAlertContact = new CustomEvent("showContactAlerteConcierge");
        document.dispatchEvent(eventAlertContact);
        var eventTypeService= new CustomEvent("showCheckBoxConcierge");
        document.dispatchEvent(eventTypeService);

    }
    if(page != "addConcierge"){
            Concierge_ui.RESET_FORM_ADD();
            Concierge_ui.VIDE_PREVIEW_CONC();
            Concierge_ui.msgErreurConcierge = [];
            dati_Erreurs.UPDATE("ConcErreurs");
        $("[ DATI-ID=contactListServiceConcierge]").css("display","none");

    }

    if(page == "editConcierge"){
        UpdateConc_ui.contact={};
        UpdateConc_ui.contactDb={};
        dati_contactForm.contact={};
        dati_contactForm.sendContactDb={};
        Concierge_ui.msgErreurConciergeUp = [];
        dati_Erreurs.UPDATE("ConcUpErreurs");
        UpdateConc_ui.READ_VALUE_INPUT();


        //sow trx form
        //updateEvent_ui.translate = eventCard_ui.selectedEvent.translate;
        var trx = Concierge_ui.selectedConc.translate;
        UpdateConc_ui.translate = {};
        if( Concierge_ui.selectedConc.hasOwnProperty("translate")){
            if( Concierge_ui.selectedConc.translate != null &&  Concierge_ui.selectedConc.translate != ""){
                for(var i=0; i<trx.length; i++){
                    try {
                        var image = trx[i]["image"];
                    }catch (e) {

                    }
                    try {
                        var description = trx[i]["description"];
                    }catch (e) {

                    }
                    try {
                        var title = trx[i]["title"];
                    }catch (e) {

                    }
                    try {
                        var summary = trx[i]["summary"];
                    }catch (e) {

                    }
                    try {
                        var code = trx[i]["trx_code"];
                        UpdateConc_ui.translate[code] = {};
                        UpdateConc_ui.translate[code]["title"] = title;
                        UpdateConc_ui.translate[code]["image"] = image;
                        UpdateConc_ui.translate[code]["description"] = description;
                        UpdateConc_ui.translate[code]["summary"] = summary;
                    }catch (e) {

                    }
                }
            }
        }
        if(Concierge_ui.selectedConc.Contact != null && Concierge_ui.selectedConc.Contact != "") {
            var contacts = Concierge_ui.selectedConc.Contact.Info;
           
            UpdateConc_ui.contact = {};
            UpdateConc_ui.contactDb = {};
            if (Concierge_ui.selectedConc.hasOwnProperty("Contact")) {
                if (Concierge_ui.selectedConc.Contact != null && Concierge_ui.selectedConc.Contact != "") {
                    for (var i = 0; i < contacts.length; i++) {
                        try {
                            var key = contacts[i]["type"];
                        } catch (e) {

                        }
                        try {
                            var value = contacts[i]["libelle"];
                        } catch (e) {

                        }
                        try {
                            var id = contacts[i]["contact_type_id"];
                        } catch (e) {

                        }
                        try {

                            UpdateConc_ui.contact[key] = value;

                        } catch (e) {

                        }
                        try {

                            UpdateConc_ui.contactDb[id] = value;

                        } catch (e) {

                        }
                    }
                }
            }
        }


        var eventTrx = new CustomEvent("showformTranslateConciergeUp");

        document.dispatchEvent(eventTrx);
        var eventContact = new CustomEvent("showcontactFormConciergeUp");
        document.dispatchEvent(eventContact);
        var eventListContact = new CustomEvent("showcontactListServiceConciergeUp");
        document.dispatchEvent(eventListContact);
        var eventAlertContact = new CustomEvent("showContactAlerteConciergeUp");
        document.dispatchEvent(eventAlertContact);
        var eventTypeService= new CustomEvent("showCheckBoxConciergeUp");
        document.dispatchEvent(eventTypeService);
    }
    if(page != "editConcierge"){
        Concierge_ui.msgErreurConciergeUp = [];
        dati_Erreurs.UPDATE("ConcUpErreurs");
        $("[ DATI-ID=contactListServiceConciergeUp]").css("display","none");
    }
})
    }

    EVENTS_SSAPI(){
        document.addEventListener("imageConciergeUploaded", function(e){

            $("[DATI-ID=uploadConciergePhoto]").find("[dati-role=clickableTrans]").css("background-image","url('"+e.detail.res[0]+"')");
            $("[DATI-ID=uploadConciergePhoto]").find("[dati-role=clickableTrans]").css("background-position","center");
            $("[DATI-ID=uploadConciergePhoto]").find("[dati-role=clickableTrans]").css("background-size","100% 100%");
            $("[DATI-ID=uploadConciergePhoto]").find("[dati-role=clickableTrans]").css("background-repeat","no-repeat");

            $("[DATI-IMAGE-CONC]").css("opacity","1");
            $("[DATI-DESCRIPTION-CONC]").css("display", "inline-block");
            $("[DATI-IMAGE-FLESH ]").css("display", "inline-block");
            $("[DATI-PREVIEW-CONC]").css("background-color", "rgb(255,0,0,0)");
            $("[dati-image-conc]").attr("src", e.detail.res[0]);
            iConcierge.imgConciergeUploaded = e.detail.res[0] ;
            formTrx_ui.imgTransUploaded = e.detail.res[0] ;
        }, false);

        document.addEventListener("imageConciergeUpUploaded", function(e){

            $("[DATI-ID=uploadConciergePhotoUp]").find("[dati-role=clickableTrans]").css("background-image","url('"+e.detail.res[0]+"')");
            $("[DATI-ID=uploadConciergePhotoUp]").find("[dati-role=clickableTrans]").css("background-position","center");
            $("[DATI-ID=uploadConciergePhotoUp]").find("[dati-role=clickableTrans]").css("background-size","100% 100%");
            $("[DATI-ID=uploadConciergePhotoUp]").find("[dati-role=clickableTrans]").css("background-repeat","no-repeat");
            $("[dati-image-conc-up]").attr("src", e.detail.res[0]);
            iConcierge.imgConciergeUpUploaded = e.detail.res[0] ;
            formTrx_ui.imgTransUploaded = e.detail.res[0] ;
        }, false);
        document.addEventListener("ListConciergeReceive", function(e){
            Concierge_ui.DATALIST(e.detail);
        }, false);
        /* ADD Concierge */
        document.addEventListener("conciergeAdded", function(e){
            /*eventCard_ui.RESET_FORM_ADD();*/
            restaurantCard_ui.SHOW_POPUP_SUCCESS();
        }, false);

        document.addEventListener("conciergeAdded_error", function(e){
            restaurantCard_ui.SHOW_POPUP_ERROR();
        }, false);
        /* UPDATE Conc */
        document.addEventListener("ConcUpdated", function(e){

            restaurantCard_ui.SHOW_POPUP_SUCCESS_UPDATE();
        }, false);
        document.addEventListener("ConcUpdated_error", function(e){

            restaurantCard_ui.SHOW_POPUP_ERROR()
        }, false);
        /* DELETE EVENT */
        document.addEventListener("ConciergeDeleted", function(e){
            Concierge_ui.DELETE_ID_FROM_LIST(e.detail.res);
        }, false);

        document.addEventListener("ConciergeDeleted_error", function(e){


        }, false);
    }
}

let iConcierge = new imp_Concierge();