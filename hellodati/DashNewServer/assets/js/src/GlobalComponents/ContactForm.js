let Ui_ContactForm = class {
    constructor() {
        this.EVENTS_UI();
        this.contact={};
        this.sendContactDb={}
        this.reseauxSociaux=null;
        $(document).on('click','[DATI-CLOSE-FORM-CONTACT]',function() {
            $("[DATI-FORM-CONTACT]").css("display","none");
        })
    }

    CONTACT_CONTAINER(containerList,id){
        return '<div class="trx_bg_transparant_contact" DATI-FORM-CONTACT="'+id+'" >'+
            '<div  class="form_trx_container_contact">'+
            '<span DATI-CLOSE-FORM-CONTACT>x</span>'+
            '<div class="inputShow">' +
            '<select  DATI-INPUT-CONTACT="AllContact" onchange="dati_contactForm.GET_VALUE_CONTACT(this,\''+id+'\')">'+
            '<option value="">Select Contact Type</option>'+
            '</select>'+
            '<input DATI-INPUT-CONTACT="'+id+'" DATI-VALUE="" placeholder="Select Contact Type">'+
            '</div>'+
            '<div class="action_contact">'+
              '<span  onclick="dati_contactForm.GET_CONTACT(\''+containerList+'\',\''+id+'\')">Valider</span>'+
            '</div>'+
            '</div>'+
            '</div>'
    }
    GET_CONTACT(containerList,id){
        var contactTXT = $("[DATI-FORM-CONTACT="+id+"]").find("[DATI-INPUT-CONTACT="+id+"]").val();
        var reseauS = $("[DATI-FORM-CONTACT="+id+"]").find("[DATI-INPUT-CONTACT="+id+"]").attr("placeholder");
        var IDreseauS = $("[DATI-FORM-CONTACT="+id+"]").find("[DATI-INPUT-CONTACT="+id+"]").attr("DATI-VALUE");
        this.reseauxSociaux = reseauS;
        if( $("[DATI-FORM-CONTACT="+id+"]").find("[DATI-INPUT-CONTACT="+id+"]").val() != "" ){
            this.contact[reseauS] = contactTXT;
            this.sendContactDb[IDreseauS] = contactTXT;
            dati_ReseauxSociaux.UPDATE(containerList);
            $("[ DATI-ID="+containerList+"]").css("display","flex");
        }
        $("[DATI-FORM-CONTACT="+id+"]").find("[DATI-INPUT-CONTACT="+id+"]").val("");
        $("[DATI-FORM-CONTACT="+id+"]").find("[DATI-INPUT-CONTACT="+id+"]").attr("placeholder","Select Contact Type");
        $("[DATI-FORM-CONTACT="+id+"]").find("[DATI-INPUT-CONTACT=AllContact ]").val("");


    }
    GET_VALUE_CONTACT(elem,id){
   var contact = $(elem).find("option:selected").text();
   var Idcontact = $(elem).find("option:selected").val();
   $("[DATI-INPUT-CONTACT="+id+"]").attr("placeholder",contact);
   $("[DATI-INPUT-CONTACT="+id+"]").attr("DATI-VALUE",Idcontact);
    }

    SHOW_CONTACT(button, datiId){
        $(document).on('click','['+button+']',function() {
            $("[DATI-ID="+datiId+"]").find("[DATI-FORM-CONTACT]").css("display","flex");
        })
    }
    DATALIST_CONTECT(page,list){
        var options = "<option value=''> Select Contact Type</option>";
        for (var i = 0; i < list.length; i++) {
            options = options + '<option value="' + list[i].id + '">'+list[i].moyen+'</option>';
        }
        $("[dati-page="+page+"]").find("[DATI-INPUT-CONTACT=AllContact]").html(options);
    }
    UPDATE(id){
        this.contact={};
        this.sendContactDb={};
        var formContact = $("[DATI-ID="+id+"]");
        $(formContact).html("");
        var containerList = $(formContact).attr("DATI-LIST-CONTACT-SHOW");
        var formContactContainer = this.CONTACT_CONTAINER(containerList,id);
        $(formContact).append(formContactContainer);
        var button = $(formContact).attr("DATI-BTN");
        var page = $(formContact).attr("DATI-PAGE");
        var list_name = $(formContact).attr("DATI-LIST");
        var list =  eval(list_name);
        dati_contactForm.DATALIST_CONTECT(page,list);
        this.SHOW_CONTACT(button, id);
    }
    EVENTS_UI(){
        var myComposents = document.querySelectorAll("[dati-composent=contactFormService]");
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
                dati_contactForm.UPDATE(id);
            }, 100);
        }, false);



    }
}
let dati_contactForm = new Ui_ContactForm();