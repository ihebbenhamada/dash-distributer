class imp_ContactUs {
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();
    }

    GET_ALL_CONTACTS() {
        SSAPI.SUBMIT({
            uri: "/Contact_us/getAllContacts",
            onsuccess: "listContactsReceive",
            onerror: "listContactsReceive_error",
        })
    }
    DELETE_CONTACT(id) {

        SSAPI.SUBMIT({
            uri: "/Contact_us/delete  ",
            onsuccess: "ContactDeleted",
            onerror: "ContactDeleted_error",
            data: {
                contact_id: id
            }
        })
    }
    EVENTS_UI() {

        document.addEventListener("SHOW_PAGE", function(e) {
            var page = e.detail.pageLink;
            if (page == "ContactUs") {

                iContactUs.GET_ALL_CONTACTS();
                var eventTypeService = new CustomEvent("showContactAlerteContact");
                document.dispatchEvent(eventTypeService);

            }
        }, false);
    }


    EVENTS_SSAPI() {
        document.addEventListener("listContactsReceive", function(e) {

            dati_contact_us.DATALIST(e.detail);
            var eventTypeService = new CustomEvent("showContactUs");
            document.dispatchEvent(eventTypeService);
        }, false);
        document.addEventListener("contact_added", function(e) {
            restaurantCard_ui.SHOW_POPUP_SUCCESS();
            var type_updated = dati_contact_us.FIN_POSITION_BY_ID_IN_LIST(dati_contact_us.contactInfo, e.detail.res.contact_type_id);
            var newContact = {};
            newContact.id = e.detail.res.inserted_id;
            newContact.libelle = e.detail.res.value_added;
            if (type_updated != -1) {
                dati_contact_us.contactInfo[type_updated].Contacts.push(newContact);
            }
            dati_contactUsInput.UPDATE("contactUsHotel");

        }, false);

        document.addEventListener("contact_updated", function(e) {

            restaurantCard_ui.SHOW_POPUP_SUCCESS_UPDATE();
            //dati_contactUsInput.UPDATE("contactUsHotel");
            $("[id=contactUsHotel]").find("[INPUT-TYPE-CONTACT-US]").prop("disabled", true);
            $("[id=contactUsHotel]").find("[INPUT-TYPE-CONTACT-US]").removeAttr("title");

        }, false);
        document.addEventListener("ContactDeleted", function(e) {
            for (var i = 0; i < dati_contact_us.contactInfo.length; i++) {
                var pos = dati_contact_us.FIN_POSITION_BY_ID_IN_LIST(dati_contact_us.contactInfo[i].Contacts, e.detail.res[0]);
                if (pos != -1) {
                    dati_contact_us.contactInfo[i].Contacts.splice(pos, 1);
                    break;
                }
            }
            dati_contactUsInput.UPDATE("contactUsHotel");

        }, false);

        document.addEventListener("contactUpdated_error", function(e) {

            dati_add_guest.SHOW_POPUP_ERROR();
        }, false);
    }
}

let iContactUs = new imp_ContactUs();