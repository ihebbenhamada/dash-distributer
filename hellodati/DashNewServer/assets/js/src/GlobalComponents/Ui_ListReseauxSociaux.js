let Ui_ListReseauxSociaux = class {
    constructor() {
        this.EVENTS_UI();
        this.ContactToDelete = null;
        this.DatiId = null ;
        this.alertToShow=null;
        this.ContactToDeleteId=null;
    }

    CONTACT_LIST_CONTAINER(id){
        return         '<div>'+
        '<i class="fas fa-phone" style="color:#1a3e64"></i>'+
            '<p  style="color:#1a3e64;margin-left: 12px; margin-right: 40px;">All Contact</p>'+
        '</div>'+
            '<div class="reseaux_sociaux_container" DATI-CONTAINER-RESEAUX-SOCIAUX='+id+'>'+

        '</div>'
    }
    CONTACT_ITEM(id,value,key){
        return     '<div class="reseaux_sociaux">'+
            '<span class="close"  onclick="dati_ReseauxSociaux.delete(\''+value+'\',\''+key+'\')">x</span>'+
            '<span style="color: #1a3e64">'+key+'</span>'+
            '<span>&nbsp;:&nbsp;</span>'+
            '<span>'+value+'</span>'+
            '</div>'
    }
    delete(value,key){
        this.ContactToDelete = key ;
        this.ContactToDeleteId = value ;
        this.TOGGEL_ALERTE();
        this.DELETE_NAME(key);
    }
    DELETE_NAME(key){
        var title = key;
        var titleUper = title.toUpperCase();
        $("[DATI-ID=delete-item-name]").html("Are you sure to delete "+titleUper+" Contact");
    }
    TOGGEL_ALERTE(){
        $("[dati-id="+this.alertToShow+"]").find("[class=overlay_restau]").css("display", "block");
    }
    CANCEL_ALERTE(){
        $("[dati-id="+this.alertToShow+"]").find("[class=overlay_restau]").css("display", "none");
    }
    VALIDATE_ALERTE(){
        var key = this.ContactToDelete ;
        var value =  this.ContactToDeleteId ;
        this.GET_KEY_BY_VALUE(dati_contactForm.sendContactDb,value);
        delete dati_contactForm.contact[key];
        dati_ReseauxSociaux.UPDATE(this.DatiId);
        this.DISPLAY_CONTAINER();
        this.CANCEL_ALERTE()
    }
    GET_KEY_BY_VALUE(object, value) {
        for (var prop in object) {
            if (object.hasOwnProperty(prop)) {
                if (object[prop] === value){
                    delete dati_contactForm.sendContactDb[prop];
                }
            }
        }
    }
    DISPLAY_CONTAINER(){
        if(Object.entries(dati_contactForm.contact).length === 0 ){
            $("[ DATI-ID="+this.DatiId+"]").css("display","none");
            dati_contactForm.contact={};
            dati_contactForm.sendContactDb={};
        }
    }
    UPDATE(id){
        var listContact = $("[DATI-ID="+id+"]");
        var alertContact =  $(listContact).attr("DATI-ID-ALERTE");
        this.alertToShow = alertContact;
        this.DatiId = id ;
        if($(listContact).attr("DATI-DATA-CONTACT")) {
            var contactUpdate = $(listContact).attr("DATI-DATA-CONTACT");
            var contact = eval(contactUpdate);
            dati_contactForm.contact = contact ;
            if(Object.entries(dati_contactForm.contact).length === 0){
                $("[ DATI-ID="+id+"]").css("display","none");
            }else{
                $("[ DATI-ID="+id+"]").css("display","flex");            }

        }
        if($(listContact).attr("DATI-DATA-CONTACT-DB")) {
            var contactUpdateBd = $(listContact).attr("DATI-DATA-CONTACT-DB");
            var contactBd = eval(contactUpdateBd);
            dati_contactForm.sendContactDb = contactBd ;
        }
        $(listContact).html("");
        var listContactContainer = this.CONTACT_LIST_CONTAINER(id);
        $(listContact).append(listContactContainer);
        var containerItems =  $(listContact).find("[DATI-CONTAINER-RESEAUX-SOCIAUX="+id+"]");


            for (const [key, value] of Object.entries(dati_contactForm.contact)) {
                var ItemContact = "";
                ItemContact += this.CONTACT_ITEM(id,value,key);
                $(containerItems).append(ItemContact);
            }

    }




    EVENTS_UI(){
        var myComposents = document.querySelectorAll("[dati-composent=contactListService]");
        for(var i=0; i<myComposents.length;i++){
            var myComposent = myComposents[i];
            if($(myComposent).attr("dati-update")){
                this.LUNCH($(myComposent).attr("dati-update"),$(myComposent).attr("dati-id"));
            }
        }

    }



    LUNCH(eventName,id){
        document.addEventListener(eventName, function(e){
            setTimeout(function(){
                dati_ReseauxSociaux.UPDATE(id);
            }, 100);
        }, false);


    }


}




let dati_ReseauxSociaux = new Ui_ListReseauxSociaux();