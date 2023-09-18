let Ui_contactUsInput = class {
    constructor() {
        this.EVENTS_UI();
        $(document).on('blur', "[form-id=form_add_contact_us] input", function(e) {
            $(this).prop("disabled", true);
            $(this).parent().removeAttr("title");
        });

        $(document).on('click', "[save_contact=false]", function() {
            $(this).attr("save_contact", true);
        });
        $(document).on('blur', "[form-id=form_add_contact_us] [DATI-ADD-NEW-CONTACT]", function(e) {
            var elem = $(this);
            setTimeout(function() {
                var save = $(elem).parent().find("[save_contact]").attr("save_contact");
                if (save == "true" || save == true) {
                    dati_contact_us.SAVE_NEW_CONTACT_CLICK(elem);
                    $(elem).parent().remove();
                } else {
                    $(elem).parent().remove();
                }
            }, 200);
        });
    }
    ADD_INPUT(list) {
        var mylist = JSON.parse(JSON.stringify(list));
        var container = $("[CONTAINER-CONTACT-US-INPUTS=" + mylist.id + "]");
        if ($(container).find("[DATI-ADD-NEW-CONTACT]").length <= 0) {
            var newInput = '<div class="inputs_box">' +
                '<input title="Press Enter To Save" placeholder="Add new ' + mylist.moyen + '" DATI-ADD-NEW-CONTACT  DATI-INPUT-NAME="' + mylist.moyen + '" INPUT-TYPE-CONTACT-US=' + mylist.id + ' >' +
                '<div class="icon_action">' +
                '<div save_contact="false" style="display:block;border-radius:2px; margin-right:6px;color:#fafafa;background-color: #1a5889; font-size:12px; padding:1px; padding-left:3px; padding-right:3px; cursor:pointer">save</div>' +
                '</div>' +
                '</div>';
            container.append(newInput);
        }
        $(container).find("[DATI-ADD-NEW-CONTACT]").focus();

    }
    DELETE_iINPUT(elem) {
        $(elem).parent().parent().remove();
    }
    CONTACT_INPUT_BLOCK(list) {
        var myList = JSON.stringify(list);
        var myListContact = JSON.stringify(list.Contacts);
        return "<div  LIST='" + myListContact + "' class='container_contact' DATI-ID='block_contact_type_id_" + list.id + "'>" +
            '<label style = "text-transform:capitalize;">' + list.moyen + ' : </label>' +
            '<div CONTAINER-CONTACT-US-INPUTS="' + list.id + '" class="container_inputs_added">' +

            '</div>' +
            "<span onclick='dati_contactUsInput.ADD_INPUT(" + myList + ")'>Add</span>" +
            '</div>'


    }



    MAKE_IT_ENABLE(id) {
        $("[id=contactUsHotel]").find("[INPUT-TYPE-CONTACT-US]").prop("disabled", true);
        $("[id=contactUsHotel]").find("[INPUT-TYPE-CONTACT-US]").css("background-color", "#e0e0e0");
        $("[id=contactUsHotel]").find("[INPUT-TYPE-CONTACT-US=" + id + "]").prop("disabled", false);
        $("[id=contactUsHotel]").find("[INPUT-TYPE-CONTACT-US=" + id + "]").css("background-color", "#e0e0e0");
        $("[id=contactUsHotel]").find("[INPUT-TYPE-CONTACT-US=" + id + "]").parent().attr("title", "Press Enter to Save");
        $("[id=contactUsHotel]").find("[INPUT-TYPE-CONTACT-US=" + id + "]").focus();

    }
    CONTACT_INPUT(list, contact) {
        return '<div class="inputs_box">' +
            '<input value="' + contact.libelle + '" DATI-INPUT-NAME="' + list.moyen + '" INPUT-TYPE-CONTACT-US=' + contact.id + ' DATI-UPDATE-CURRENT-CONTACT disabled>' +
            '<div class="icon_action">' +
            '<i title="Edit" style="cursor: pointer;padding: 5px;" class="fas fa-pencil-alt edit_pen" src="/assets/img/ui/editPen.svg" onclick="dati_contactUsInput.MAKE_IT_ENABLE(' + contact.id + ')"></i>' +
            '<i title="Delete" DATI-ID="DELETE_CONTACT_' + contact.id + '" style="cursor: pointer;padding: 5px;" class="far fa-trash-alt delete_icon" src="/assets/img/restaurant/delete_button.png" onclick=" dati_contact_us.delete(this)" ></i></div></div>'

    }


    UPDATE(id) {

        var contactList = $("[ID=" + id + "]");
        var lists_name = $(contactList).attr("LIST");
        $(contactList).html("");
        var lists = eval(lists_name);
        for (var i = 0; i < lists.length; i++) {
            var list = lists[i];
            var ContactUsInput = "";
            ContactUsInput += this.CONTACT_INPUT_BLOCK(list);
            $(contactList).append(ContactUsInput);
            // dati_InputContact.ADD_TO_DOM("contactUsInput"+list.id);
            var contacts = list.Contacts;
            if (list.Contacts != null || list.Contacts != {} || list.Contacts != "" || list.Contacts != undefined) {
                for (var j = 0; j < contacts.length; j++) {
                    var contact = contacts[j];
                    var inputContainer = $(contactList).find("[CONTAINER-CONTACT-US-INPUTS=" + list.id + "]");
                    var ContactInput = "";
                    ContactInput += this.CONTACT_INPUT(list, contact);
                    $(inputContainer).append(ContactInput);
                }
            }


        }




    }




    EVENTS_UI() {
        var myComposents = document.querySelectorAll("dati-contactUs");
        for (var i = 0; i < myComposents.length; i++) {
            var myComposent = myComposents[i];
            if ($(myComposent).attr("update")) {
                this.LUNCH($(myComposent).attr("update"), $(myComposent).attr("id"));
            }
        }

    }



    LUNCH(eventName, id) {
        document.addEventListener(eventName, function(e) {
            setTimeout(function() {
                dati_contactUsInput.UPDATE(id);
            }, 100);
        }, false);



    }


}




let dati_contactUsInput = new Ui_contactUsInput();