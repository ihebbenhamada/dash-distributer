let Ui_DatiInput = class {
    constructor() {
        this.EVENTS_UI();
    }


    INPUT(label,isEnable){
        console.log(isEnable,"isEnableisEnableisEnable");
        if(isEnable == "true"){
            var input =   '<input>' ;
        }else{
            var input =   '<input disabled>' ;
        }
        return     '<div>'+label+' : </div>'+
            ''+input+''

    }


    UPDATE(id){
        var InputC = $("[ID="+id+"]");
        var label = $(InputC).attr("LABEL");
        if($(InputC).attr("ISENABLE")){
            var isEnable = $(InputC).attr("ISENABLE");
        }else{
            var isEnable = "true";
        }

        $(InputC).html("");
        var input = this.INPUT(label,isEnable);
        $(InputC).append(input);


    }




    EVENTS_UI(){
        $(document).ready(function() {
        var myComposents = document.querySelectorAll("dati-input");
        for(var i=0; i<myComposents.length;i++){

            var myComposent = myComposents[i];
            if($(myComposent).attr("UPDATE")){
                dati_input.LUNCH($(myComposent).attr("UPDATE"),$(myComposent).attr("ID"),$(myComposent).attr("DATI-VALIDATE"),$(myComposent).attr("DATI-CANCEL"));
            }
        }
        });

    }



    LUNCH(eventName,id){
        document.addEventListener(eventName, function(e){
            setTimeout(function(){
                dati_input.UPDATE(id);
            }, 100);
        }, false);


    }


}




let dati_input = new Ui_DatiInput();