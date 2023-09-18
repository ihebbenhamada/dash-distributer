class imp_UpdateRestau{
    constructor() {
        this.EVENTS_UI();
    }

    EVENTS_UI(){
        document.addEventListener("SHOW_PAGE", function(e){

            var page = e.detail.pageLink;

            if(page != "editRestauPage" ){
                /*$("[DATI-ID=opening_Time_Update_Restau]").slideUp();*/
                restaurantCard_ui.msgErreurRestUpdate = [];
                dati_Erreurs.UPDATE("RestauErreursUpdate");
                $("[ DATI-ID=contactListServiceRestUp]").css("display","none");

            }
            else if(page == "editRestauPage"){
                $("[ DATI-ID=contactListServiceRestUp]").css("display","none");
                UpdateRestau_ui.contact={};
                UpdateRestau_ui.contactDb={};
                dati_contactForm.contact={};
                dati_contactForm.sendContactDb={};
                Shifts_ui.RESET_TABLE("opening_Time_Update_Restau");
               Shifts_ui.Shifts = {};
                Shifts_ui.Shifts["mon"] = [];
                Shifts_ui.Shifts["tue"] = [];
                Shifts_ui.Shifts["wed"] = [];
                Shifts_ui.Shifts["thu"] = [];
                Shifts_ui.Shifts["fri"] = [];
                Shifts_ui.Shifts["sat"] = [];
                Shifts_ui.Shifts["sun"] = [];

                UpdateRestau_ui.READ_VALUE_INPUT();
                //sow trx form
                //updateEvent_ui.translate = eventCard_ui.selectedEvent.translate;
                var trx = restaurantCard_ui.selectedRest.translate;
                UpdateRestau_ui.translate = {};
                if(restaurantCard_ui.selectedRest.hasOwnProperty("translate")){
                    if(restaurantCard_ui.selectedRest.translate != null && restaurantCard_ui.selectedRest.translate != ""){
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
                                UpdateRestau_ui.translate[code] = {};
                                UpdateRestau_ui.translate[code]["title"] = title;
                                UpdateRestau_ui.translate[code]["image"] = image;
                                UpdateRestau_ui.translate[code]["description"] = description;
                                UpdateRestau_ui.translate[code]["summary"] = summary;
                            }catch (e) {

                            }
                        }
                    }
                }
                if(restaurantCard_ui.selectedRest.Contact != null && restaurantCard_ui.selectedRest.Contact != "") {
                    var contacts = restaurantCard_ui.selectedRest.Contact.Info;
                    UpdateRestau_ui.contact={};
                    UpdateRestau_ui.contactDb={};
                    dati_contactForm.contact={};
                    dati_contactForm.sendContactDb={};
                    if (restaurantCard_ui.selectedRest.hasOwnProperty("Contact")) {
                        if (restaurantCard_ui.selectedRest.Contact != null && restaurantCard_ui.selectedRest.Contact != "") {
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

                                    UpdateRestau_ui.contact[key] = value;

                                } catch (e) {

                                }
                                try {

                                    UpdateRestau_ui.contactDb[id] = value;

                                } catch (e) {

                                }
                            }
                        }
                    }
                }


                var eventTrans = new CustomEvent("showformTranslateRestauUpdate");
                document.dispatchEvent(eventTrans);
// event to show my switcher
                var event = new CustomEvent("showPageUpdateRestau");
                document.dispatchEvent(event);
                var eventContact = new CustomEvent("showcontactFormRestUp");
                document.dispatchEvent(eventContact);
                var eventListContact = new CustomEvent("showcontactListServiceUp");
                document.dispatchEvent(eventListContact);
                var eventAlertContact = new CustomEvent("showContactAlerteUp");
                document.dispatchEvent(eventAlertContact);
                var eventTypeService= new CustomEvent("showCheckBoxRestUp");
                document.dispatchEvent(eventTypeService);
            }



        }, false);
    }


}

let iUpdateRestau = new imp_UpdateRestau();