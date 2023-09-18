let Ui_InputContact = class {
    constructor() {
        this.EVENTS_UI();
    }



    CONTACT_INPUT(list){
        return '<div class="inputs_box">'+
         '<input value="'+list.libelle+'" DATI-INPUT-NAME="'+list.type+'" INPUT-TYPE-CONTACT-US='+list.id+' disabled>'+
        '<img  class="edit_pen" src="/assets/img/ui/editPen.svg" onclick="dati_InputContact.MAKE_IT_ENABLE('+list.id+')"></div>'
   


    }


    UPDATE(id){
        var contactInput = $("[ID="+id+"]");
        var lists_name = $(contactInput).attr("LIST");
        var lists = eval(lists_name);
        $(contactInput).html("");
        if(lists != null || lists != {} || lists != "" ){
        for(var i=0; i<lists.length; i++) {
            var list = lists[i];
            var Inputs = "";
            Inputs += this.CONTACT_INPUT(list);
            $(contactInput).append(Inputs);
        }
    }




    }




    EVENTS_UI(){
        var myComposents = document.querySelectorAll("dati-contactUs-input");
        for(var i=0; i<myComposents.length;i++){
            var myComposent = myComposents[i];
            if($(myComposent).attr("update")){
                this.LUNCH($(myComposent).attr("update"),$(myComposent).attr("id"));
            }
        }

    }

    ADD_TO_DOM(id){
        var myComposent = $("[ID="+id+"]");
        if($(myComposent).attr("update")){
            this.LUNCH($(myComposent).attr("update"),$(myComposent).attr("id"));
            dati_InputContact.UPDATE(id);
        }
    }

    LUNCH(eventName,id){
        document.addEventListener(eventName, function(e){
            setTimeout(function(){
                dati_InputContact.UPDATE(id);
            }, 100);
        }, false);



    }


}




let dati_InputContact = new Ui_InputContact();