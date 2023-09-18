let Ui_DatiInputPopUp = class {
    constructor() {
        this.EVENTS_UI();
    }


    INPUT_POPuP(label){
        return   '<label>'+label+'</label>'+
        '<i class="fas fa-plus-circle"></i>'

    }


    UPDATE(id){
        var InputPopUp = $("[ID="+id+"]");
        var label = $(InputPopUp).attr("LABEL");
        $(InputPopUp).html("");
        var input = this.INPUT_POPuP(label);
        $(InputPopUp).append(input);


    }




    EVENTS_UI(){
        $(document).ready(function() {
            var myComposents = document.querySelectorAll("dati-input-popUp");
            for(var i=0; i<myComposents.length;i++){

                var myComposent = myComposents[i];
                if($(myComposent).attr("UPDATE")){
                    dati_input_with_popUp.LUNCH($(myComposent).attr("UPDATE"),$(myComposent).attr("ID"),$(myComposent).attr("DATI-VALIDATE"),$(myComposent).attr("DATI-CANCEL"));
                }
            }
        });

    }



    LUNCH(eventName,id){
        document.addEventListener(eventName, function(e){
            setTimeout(function(){
                dati_input_with_popUp.UPDATE(id);
            }, 100);
        }, false);


    }


}




let dati_input_with_popUp = new Ui_DatiInputPopUp();