let Ui_contactUs = class {
    constructor() {
        this.EVENTS_UI();
        this.contactInfo = null;
        this.selectedContact = null;
        this.ContactSameType = {};
    }

    DATALIST(data) {
        this.contactInfo = data.res;


    }

    TOGGEL_ALERTE() {
        $("[DATI-PAGE=ContactUs]").find("[dati-id=contactAlerteContact]").find("[class=overlay_restau]").css("display", "block");
    }
    CANCEL_ALERTE() {
        $("[DATI-PAGE=ContactUs]").find("[dati-id=contactAlerteContact]").find("[class=overlay_restau]").css("display", "none");

    }
    VALIDATE_ALERTE() {
        var id_contact = this.selectedContact.id;
        iContactUs.DELETE_CONTACT(id_contact);
        $("[DATI-PAGE=ContactUs]").find("[dati-id=contactAlerteContact]").find("[class=overlay_restau]").css("display", "none");
        //$("[dati-composent=alerteContainer]").css("display", "none");
    }


    DELETE_NAME() {
        $("[DATI-ID=delete-item-name]").html("Are you sure to delete this contact");
    }


    delete(elem) {
        try {
            this.SETSELECTED_detail(elem);

        } catch {

        }
        this.TOGGEL_ALERTE();
        this.DELETE_NAME();
    }

    SETSELECTED_detail(rest_element) {
        var id = $(rest_element).parent().parent().find("[input-type-contact-us]").attr("input-type-contact-us");
        var listSearch = eval($(rest_element).parent().parent().parent().parent().attr("LIST"));

        this.ContactSameType = listSearch;
        this.selectedContact = this.FIN_BY_ID_IN_LIST(listSearch, id);

    }

    FIN_BY_ID_IN_LIST(list, id) {
        for (var i = 0; i < list.length; i++) {
            if (list[i].id == id) {
                return list[i];
            }
        }
    }

    FIN_POSITION_BY_ID_IN_LIST(list, id) {
            for (var i = 0; i < list.length; i++) {
                if (list[i].id == id) {
                    return i;
                }
            }
            return -1;
        }
        /* ******* DELETE ******* */
    GET_POSITION_IN_LIST(list, id) {
        for (var i = 0; i < list.length; i++) {
            if (list[i].id == id) {
                return i;
            }
        }
        return -1;
    }

    DELETE_ID_FROM_LIST(id) {


        var pos = dati_contact_us.GET_POSITION_IN_LIST(dati_contact_us.ContactSameType, id);
        if (pos != -1) {

            dati_contact_us.ContactSameType.splice(pos, 1);
        }
        dati_contactUsInput.UPDATE("contactUsHotel");
        dati_contact_us.CANCEL_ALERTE();
    }

    SAVE_NEW_CONTACT_CLICK(element) {
        var idNewContact = $(element).attr("input-type-contact-us");
        var libelleNewContact = $(element).val();
        var data = {
            contact_type_id: idNewContact,
            libelle: libelleNewContact
        }
        try {
            $(element).parent().remove();
        } catch (error) {

        }
        if (libelleNewContact != "") {
            SSAPI.SUBMIT({
                uri: "/Contact_us/add",
                data: data,
                onsuccess: "contact_added",
                onerror: "listContactsReceive_error",
            });
        }

    }
    EVENTS_UI() {



        //   ADD CONTACT
        $(document).on("keydown", "[DATI-ADD-NEW-CONTACT]", function(e) {
            if (e.keyCode === 13) {

                dati_contact_us.SAVE_NEW_CONTACT_CLICK($(this));

            }
        });
        // UPDATE CONTACT 
        $(document).on("keydown", "[DATI-UPDATE-CURRENT-CONTACT]", function(e) {
            if (e.keyCode === 13) {

                var idCurrentContact = $(this).attr("input-type-contact-us");
                var libelleContactUp = $(this).val();
                var data = {
                    contact_id: idCurrentContact,
                    libelle: libelleContactUp
                }

                SSAPI.SUBMIT({
                    uri: "/Contact_us/updateContact",
                    data: data,
                    onsuccess: "contact_updated",
                    onerror: "listContactsReceive_error",
                });

            }
        });



    }




};

let dati_contact_us = new Ui_contactUs();