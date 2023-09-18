class imp_UpdateLeisure{
    constructor() {
        this.EVENTS_UI();
    }

    EVENTS_UI(){
        document.addEventListener("SHOW_PAGE", function(e){

            var page = e.detail.pageLink;
            if(page != "editLeisurePage"){
                $("[DATI-ID=opening_Time_Update_Meeting]").slideUp();
                leisureCard_ui.msgErreurLeisureUpdate = [];
                dati_Erreurs.UPDATE("LeisureErreursUpdate");
            }
            else if(page == "editLeisurePage"){
                updateLeisure_ui.contact={};
                updateLeisure_ui.contactDb={};
                dati_contactForm.contact={};
                dati_contactForm.sendContactDb={};
                Shifts_ui.RESET_TABLE("opening_Time_Update_Leisure");
                Shifts_ui.Shifts = {};
                Shifts_ui.Shifts["mon"] = [];
                Shifts_ui.Shifts["tue"] = [];
                Shifts_ui.Shifts["wed"] = [];
                Shifts_ui.Shifts["thu"] = [];
                Shifts_ui.Shifts["fri"] = [];
                Shifts_ui.Shifts["sat"] = [];
                Shifts_ui.Shifts["sun"] = [];
                updateLeisure_ui.READ_VALUE_INPUT();
                //sow trx form
                //updateEvent_ui.translate = eventCard_ui.selectedEvent.translate;
                var trx = leisureCard_ui.selectedLeisure.translate;
                updateLeisure_ui.translate = {};
                if(leisureCard_ui.selectedLeisure.hasOwnProperty("translate")){
                    if(leisureCard_ui.selectedLeisure.translate != null && leisureCard_ui.selectedLeisure.translate != ""){
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
                                updateLeisure_ui.translate [code] = {};
                                updateLeisure_ui.translate [code]["title"] = title;
                                updateLeisure_ui.translate [code]["image"] = image;
                                updateLeisure_ui.translate [code]["description"] = description;
                                updateLeisure_ui.translate [code]["summary"] = summary;
                            }catch (e) {

                            }
                        }
                    }
                }
                if(leisureCard_ui.selectedLeisure.Contact != null &&leisureCard_ui.selectedLeisure.Contact != "") {
                    var contacts = leisureCard_ui.selectedLeisure.Contact.Info;
                    updateLeisure_ui.contact = {};
                    updateLeisure_ui.contactDb = {};
                    if (leisureCard_ui.selectedLeisure.hasOwnProperty("Contact")) {
                        if (leisureCard_ui.selectedLeisure.Contact != null && leisureCard_ui.selectedLeisure.Contact != "") {
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

                                    updateLeisure_ui.contact[key] = value;

                                } catch (e) {

                                }
                                try {

                                    updateLeisure_ui.contactDb[id] = value;

                                } catch (e) {

                                }
                            }
                        }
                    }
                }


                var eventTrans = new CustomEvent("showformTranslateLeisureUpdate");
                document.dispatchEvent(eventTrans);
// event to show my switcher
                var event = new CustomEvent("showPageUpdateLeisure");
                document.dispatchEvent(event);
                var eventContact = new CustomEvent("showcontactFormLeisureUp");
                document.dispatchEvent(eventContact);
                var eventListContact = new CustomEvent("showcontactListServiceLeisureUp");
                document.dispatchEvent(eventListContact);
                var eventAlertContact = new CustomEvent("showContactAlerteLeisureUp");
                document.dispatchEvent(eventAlertContact);
                var eventTypeService= new CustomEvent("showCheckBoxLeisureUp");
                document.dispatchEvent(eventTypeService);
            }


        }, false);
    }


}

let iUpdateLeisure = new imp_UpdateLeisure();