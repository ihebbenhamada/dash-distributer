let Ui_alerte = class {
    constructor() {
        this.EVENTS_UI();
    }


ALERTE(validate,cancel){
return   '<div class="overlay_restau">'+
    '   <div class="Suppression_modal">'+
    '<div class="body_modal">'+
        '  <p DATI-ID="delete-item-name"></p>'+
    '<div class="bt_actions">'+
        '<div class="cancel" onclick=" '+cancel+'"  >'+
        '<i class="fas fa-times"style="color: #ffffff"></i>'+
        '<p>Cancel</p>'+
        '</div>'+
       '<div class="validate"  onclick=" '+validate+'">'+
       '<i class="fas fa-check" style="color: #ffffff"></i>'+
       '<p>Validate</p>'+
       '</div>'+
        '</div>'+
       '</div>'+
       '</div>'+
        '</div>'
}


    UPDATE(id,validate,cancel){
        var alerteC = $("[DATI-ID="+id+"]");
        $(alerteC).html("");
        var alerte = this.ALERTE(validate,cancel);
        $(alerteC).append(alerte);


    }




    EVENTS_UI(){
        var myComposents = document.querySelectorAll("[dati-composent=alerteContainer]");
        for(var i=0; i<myComposents.length;i++){
            var myComposent = myComposents[i];
            if($(myComposent).attr("dati-update")){
                this.LUNCH($(myComposent).attr("dati-update"),$(myComposent).attr("dati-id"),$(myComposent).attr("DATI-VALIDATE"),$(myComposent).attr("DATI-CANCEL"));
            }
        }

    }

    ADD_TO_DOM(id){

        var myComposent = $("[DATI-ID="+id+"]");
        if($(myComposent).attr("dati-update")){
            this.LUNCH($(myComposent).attr("dati-update"),$(myComposent).attr("dati-id"),$(myComposent).attr("DATI-VALIDATE"),$(myComposent).attr("DATI-CANCEL"));
            dati_alerte.UPDATE(id,$(myComposent).attr("DATI-VALIDATE"),$(myComposent).attr("DATI-CANCEL"));
        }
    }

    LUNCH(eventName,id,validate,cancel){
        document.addEventListener(eventName, function(e){
            setTimeout(function(){
                dati_alerte.UPDATE(id,validate,cancel);
            }, 100);
        }, false);


    }


}




let dati_alerte = new Ui_alerte();