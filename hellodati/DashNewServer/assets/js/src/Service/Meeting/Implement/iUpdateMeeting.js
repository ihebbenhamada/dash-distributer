class imp_UpdateMeeting{
    constructor() {
        this.EVENTS_UI();
    }

    EVENTS_UI(){
        document.addEventListener("SHOW_PAGE", function(e){

            var page = e.detail.pageLink;
            if(page != "editMeetingPage"){
                $("[DATI-ID=opening_Time_Update_Meeting]").slideUp();
                meetingCard_ui.msgErreurMeetingUpdate = [];
                dati_Erreurs.UPDATE("MeetingErreursUpdate");
                $("[ DATI-ID=contactListServiceMeetingUp]").css("display","none");
            }
            else if(page == "editMeetingPage"){
                updateMeeting_ui.contact={};
                updateMeeting_ui.contactDb={};
                dati_contactForm.contact={};
                dati_contactForm.sendContactDb={};
                Shifts_ui.RESET_TABLE("opening_Time_Update_Meeting");
                Shifts_ui.Shifts = {};
                Shifts_ui.Shifts["mon"] = [];
                Shifts_ui.Shifts["tue"] = [];
                Shifts_ui.Shifts["wed"] = [];
                Shifts_ui.Shifts["thu"] = [];
                Shifts_ui.Shifts["fri"] = [];
                Shifts_ui.Shifts["sat"] = [];
                Shifts_ui.Shifts["sun"] = [];

                //sow trx form
                //updateEvent_ui.translate = eventCard_ui.selectedEvent.translate;
                var trx = meetingCard_ui.selectedMeeting.translate;
                updateMeeting_ui.translate = {};
                if(meetingCard_ui.selectedMeeting.hasOwnProperty("translate")){
                    if(meetingCard_ui.selectedMeeting.translate != null && meetingCard_ui.selectedMeeting.translate != ""){
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
                                updateMeeting_ui.translate[code] = {};
                                updateMeeting_ui.translate[code]["title"] = title;
                                updateMeeting_ui.translate[code]["image"] = image;
                                updateMeeting_ui.translate[code]["description"] = description;
                                updateMeeting_ui.translate[code]["summary"] = summary;
                            }catch (e) {

                            }
                        }
                    }
                }
                if( meetingCard_ui.selectedMeeting.Contact != null &&  meetingCard_ui.selectedMeeting.Contact != "") {
                    var contacts =  meetingCard_ui.selectedMeeting.Contact.Info;
                    updateMeeting_ui.contact = {};
                    updateMeeting_ui.contactDb = {};
                    if ( meetingCard_ui.selectedMeeting.hasOwnProperty("Contact")) {
                        if ( meetingCard_ui.selectedMeeting.Contact != null &&  meetingCard_ui.selectedMeeting.Contact != "") {
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

                                    updateMeeting_ui.contact[key] = value;

                                } catch (e) {

                                }
                                try {

                                    updateMeeting_ui.contactDb[id] = value;

                                } catch (e) {

                                }
                            }
                        }
                    }
                }
                var eventTrans = new CustomEvent("showformTranslateMeetingUpdate");
                document.dispatchEvent(eventTrans);
// event to show my switcher
                var event = new CustomEvent("showPageUpdateMeeting");
                document.dispatchEvent(event);
                var eventContact = new CustomEvent("showcontactFormMeetingUp");
                document.dispatchEvent(eventContact);
                var eventListContact = new CustomEvent("showcontactListServiceMeetingUp");
                document.dispatchEvent(eventListContact);
                var eventAlertContact = new CustomEvent("showContactAlerteMeetingUp");
                document.dispatchEvent(eventAlertContact);
                var eventTypeService= new CustomEvent("showCheckBoxMeetingUp");
                document.dispatchEvent(eventTypeService);

                setTimeout(function(){
/*/!*
                    $("[DATI-ID=switcherUpdateMeeting]").find("[type=checkbox]").attr("checked",true);*!/
                    $("[DATI-ID=opening_Time_Update_Meeting]").css("display","inline-block");*/
                    updateMeeting_ui.READ_VALUE_INPUT();

                }, 100);
                /*dati_switcher.TOGGLE_VAL($("[DATI-ID=switcherUpdateMeeting]"));*/




            }


        }, false);
    }


}

let iUpdateMeeting = new imp_UpdateMeeting();