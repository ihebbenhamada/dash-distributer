class imp_UpdateWellB{
    constructor() {
        this.EVENTS_UI();
    }

    EVENTS_UI(){
        document.addEventListener("SHOW_PAGE", function(e){

            var page = e.detail.pageLink;
            if(page != "editWellBPage"){
                $("[DATI-ID=opening_Time_Update_WellB]").slideUp();
                WellBeingCard_ui.msgErreurWellBUpdate = [];
                dati_Erreurs.UPDATE("WellBErreursUpdate");
                $("[ DATI-ID=contactListServiceWellBUp]").css("display","none");
            }
            else if(page == "editWellBPage"){
                updateWellB_ui.contact={};
                updateWellB_ui.contactDb={};
                dati_contactForm.contact={};
                dati_contactForm.sendContactDb={};
                Shifts_ui.RESET_TABLE("opening_Time_Update_WellB");
                Shifts_ui.Shifts = {};
                Shifts_ui.Shifts["mon"] = [];
                Shifts_ui.Shifts["tue"] = [];
                Shifts_ui.Shifts["wed"] = [];
                Shifts_ui.Shifts["thu"] = [];
                Shifts_ui.Shifts["fri"] = [];
                Shifts_ui.Shifts["sat"] = [];
                Shifts_ui.Shifts["sun"] = [];
                updateWellB_ui.READ_VALUE_INPUT();
                //sow trx form

                var trx = WellBeingCard_ui.selectedwellB.translate;
                updateWellB_ui.translate = {};
                if(WellBeingCard_ui.selectedwellB.hasOwnProperty("translate")){
                    if(WellBeingCard_ui.selectedwellB.translate != null && WellBeingCard_ui.selectedwellB.translate != ""){
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
                                updateWellB_ui.translate[code] = {};
                                updateWellB_ui.translate[code]["title"] = title;
                                updateWellB_ui.translate[code]["image"] = image;
                                updateWellB_ui.translate[code]["description"] = description;
                                updateWellB_ui.translate[code]["summary"] = summary;
                            }catch (e) {

                            }
                        }
                    }
                }
                if(WellBeingCard_ui.selectedwellB.Contact != null && WellBeingCard_ui.selectedwellB.Contact != "") {
                    var contacts = WellBeingCard_ui.selectedwellB.Contact.Info;
                    updateWellB_ui.contact = {};
                    updateWellB_ui.contactDb = {};
                    if (WellBeingCard_ui.selectedwellB.hasOwnProperty("Contact")) {
                        if (WellBeingCard_ui.selectedwellB.Contact != null && WellBeingCard_ui.selectedwellB.Contact != "") {
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

                                    updateWellB_ui.contact[key] = value;

                                } catch (e) {

                                }
                                try {

                                    updateWellB_ui.contactDb[id] = value;

                                } catch (e) {

                                }
                            }
                        }
                    }
                }


                var eventTrans = new CustomEvent("showformTranslateWellBUpdate");
                document.dispatchEvent(eventTrans);
// event to show my switcher
                var event = new CustomEvent("showPageUpdateWellB");
                document.dispatchEvent(event);
                var eventContact = new CustomEvent("showcontactFormWellBUp");
                document.dispatchEvent(eventContact);
                var eventListContact = new CustomEvent("showcontactListServiceWellBUp");
                document.dispatchEvent(eventListContact);
                var eventAlertContact = new CustomEvent("showContactAlerteWellBUp");
                document.dispatchEvent(eventAlertContact);
                var eventTypeService= new CustomEvent("showCheckBoxWellBUp");
                document.dispatchEvent(eventTypeService);
            }


        }, false);
    }


}

let iUpdateWellB = new imp_UpdateWellB();