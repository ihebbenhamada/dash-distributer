class imp_UpdateEvent{
    constructor() {
        this.EVENTS_UI();
    }

    EVENTS_UI(){
        document.addEventListener("SHOW_PAGE", function(e){

            var page = e.detail.pageLink;
            if(page != "editEventPage"){
                $("[DATI-ID=opening_Time_Update_Event]").slideUp();
                eventCard_ui.msgErreurEventUpdate = [];
                dati_Erreurs.UPDATE("EventErreursUpdate");
                $("[ DATI-ID=contactListServiceEventUp]").css("display","none");

            }
            else if(page == "editEventPage"){
                updateEvent_ui.contact={};
                updateEvent_ui.contactDb={};
                dati_contactForm.contact={};
                dati_contactForm.sendContactDb={};
                Shifts_ui.RESET_TABLE("opening_Time_Update_Event");
                Shifts_ui.Shifts = {};
                Shifts_ui.Shifts["mon"] = [];
                Shifts_ui.Shifts["tue"] = [];
                Shifts_ui.Shifts["wed"] = [];
                Shifts_ui.Shifts["thu"] = [];
                Shifts_ui.Shifts["fri"] = [];
                Shifts_ui.Shifts["sat"] = [];
                Shifts_ui.Shifts["sun"] = [];
                var event = new CustomEvent("showPageUpdateEvent");
                document.dispatchEvent(event);
                updateEvent_ui.READ_VALUE_INPUT();
//sow trx form
                //updateEvent_ui.translate = eventCard_ui.selectedEvent.translate;
                var trx = eventCard_ui.selectedEvent.translate;
                updateEvent_ui.translate = {};
                if(eventCard_ui.selectedEvent.hasOwnProperty("translate")){
                    if(eventCard_ui.selectedEvent.translate != null && eventCard_ui.selectedEvent.translate != ""){
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
                                updateEvent_ui.translate[code] = {};
                                updateEvent_ui.translate[code]["title"] = title;
                                updateEvent_ui.translate[code]["image"] = image;
                                updateEvent_ui.translate[code]["description"] = description;
                                updateEvent_ui.translate[code]["summary"] = summary;
                            }catch (e) {

                            }
                        }
                    }
                    if( eventCard_ui.selectedEvent.Contact != null &&  eventCard_ui.selectedEvent.Contact != "") {
                        var contacts =  eventCard_ui.selectedEvent.Contact.Info;
                        updateEvent_ui.contact = {};
                        updateEvent_ui.contactDb = {};
                        if ( eventCard_ui.selectedEvent.hasOwnProperty("Contact")) {
                            if ( eventCard_ui.selectedEvent.Contact != null &&  eventCard_ui.selectedEvent.Contact != "") {
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

                                        updateEvent_ui.contact[key] = value;

                                    } catch (e) {

                                    }
                                    try {

                                        updateEvent_ui.contactDb[id] = value;

                                    } catch (e) {

                                    }
                                }
                            }
                        }
                    }
                }
                var eventTrans = new CustomEvent("showformTranslateEventUpdate");
                document.dispatchEvent(eventTrans);
                var eventContact = new CustomEvent("showcontactFormEventUp");
                document.dispatchEvent(eventContact);
                var eventListContact = new CustomEvent("showcontactListServiceEventUp");
                document.dispatchEvent(eventListContact);
                var eventAlertContact = new CustomEvent("showContactAlerteEventUp");
                document.dispatchEvent(eventAlertContact);
                var eventTypeService= new CustomEvent("showCheckBoxEventUp");
                document.dispatchEvent(eventTypeService);
// event to show my switcher

            }


        }, false);
    }


}

let iUpdateEvent = new imp_UpdateEvent();