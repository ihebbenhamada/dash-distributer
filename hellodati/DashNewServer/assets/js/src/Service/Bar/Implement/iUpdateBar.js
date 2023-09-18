class imp_UpdateBar{
    constructor() {
        this.EVENTS_UI();
    }

    EVENTS_UI(){
        document.addEventListener("SHOW_PAGE", function(e){

            var page = e.detail.pageLink;
            if(page != "editBarPage"){
                $("[DATI-ID=opening_Time_Update_Bar]").slideUp();
                barCard_ui.msgErreurUpdateBar = [];
                dati_Erreurs.UPDATE("BarUpdateErreurs");
                $("[ DATI-ID=contactListServiceBarUp]").css("display","none");

            }
           else if(page == "editBarPage"){
                updateBar_ui.contact={};
                updateBar_ui.contactDb={};
                dati_contactForm.contact={};
                dati_contactForm.sendContactDb={};
                Shifts_ui.RESET_TABLE("opening_Time_Update_Bar");
                Shifts_ui.Shifts = {};
                Shifts_ui.Shifts["mon"] = [];
                Shifts_ui.Shifts["tue"] = [];
                Shifts_ui.Shifts["wed"] = [];
                Shifts_ui.Shifts["thu"] = [];
                Shifts_ui.Shifts["fri"] = [];
                Shifts_ui.Shifts["sat"] = [];
                Shifts_ui.Shifts["sun"] = [];
                updateBar_ui.READ_VALUE_INPUT();
                //sow trx form
                //updateEvent_ui.translate = eventCard_ui.selectedEvent.translate;
                var trx = barCard_ui.selectedBar.translate;
                updateBar_ui.translate = {};
                if(barCard_ui.selectedBar.hasOwnProperty("translate")){
                    if(barCard_ui.selectedBar.translate != null && barCard_ui.selectedBar.translate != ""){
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
                                updateBar_ui.translate[code] = {};
                                updateBar_ui.translate[code]["title"] = title;
                                updateBar_ui.translate[code]["image"] = image;
                                updateBar_ui.translate[code]["description"] = description;
                                updateBar_ui.translate[code]["summary"] = summary;
                            }catch (e) {

                            }
                        }
                    }
                }
                if(barCard_ui.selectedBar.Contact != null && barCard_ui.selectedBar.Contact != "") {
                    var contacts = barCard_ui.selectedBar.Contact.Info;

                    updateBar_ui.contact = {};
                    updateBar_ui.contactDb = {};
                    if (barCard_ui.selectedBar.hasOwnProperty("Contact")) {
                        if (barCard_ui.selectedBar.Contact != null && barCard_ui.selectedBar.Contact != "") {
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

                                    updateBar_ui.contact[key] = value;

                                } catch (e) {

                                }
                                try {

                                    updateBar_ui.contactDb[id] = value;

                                } catch (e) {

                                }

                            }
                        }
                    }
                }

                var eventTrans = new CustomEvent("showformTranslateBarUpdate");
                document.dispatchEvent(eventTrans);
// event to show my switcher
                var event = new CustomEvent("showPageUpdateBar");
                document.dispatchEvent(event);
                var eventContact = new CustomEvent("showcontactFormBarUp");
                document.dispatchEvent(eventContact);
                var eventListContact = new CustomEvent("showcontactListServiceBarUp");
                document.dispatchEvent(eventListContact);
                var eventAlertContact = new CustomEvent("showContactAlerteBarUp");
                document.dispatchEvent(eventAlertContact);
                var eventTypeService= new CustomEvent("showCheckBoxBarUp");
                document.dispatchEvent(eventTypeService);
            }


        }, false);
    }


}

let iUpdateBar = new imp_UpdateBar();