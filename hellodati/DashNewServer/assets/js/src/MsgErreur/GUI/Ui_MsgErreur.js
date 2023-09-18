let Ui_msgErreur = class {
    constructor() {
        this.EVENTS_UI();
    }




    MSG_ERREUR(list){

        return   '<div class="msg_erreur">'+list+'</div>'

    }
    UPDATE(id){
        var MsgErreurs = $("[DATI-ID="+id+"]");
        var lists_name = $(MsgErreurs).attr("DATI-LIST");
        var lists = eval(lists_name);

    if(lists != undefined){
     $(MsgErreurs).html("");
    for(var i=0; i<lists.length; i++) {
        var list = lists[i];
        var MsgItem = "";
        MsgItem += this.MSG_ERREUR(list);
        $(MsgErreurs).append(MsgItem);
    }
}




    }




    EVENTS_UI(){
        var myComposents = document.querySelectorAll("[dati-composent=msgErreurContainer]");
        for(var i=0; i<myComposents.length;i++){
            var myComposent = myComposents[i];
            if($(myComposent).attr("dati-update")){
                this.LUNCH($(myComposent).attr("dati-update"),$(myComposent).attr("dati-id"));
            }
        }

    }



    LUNCH(eventName,id,validate,cancel){
        document.addEventListener(eventName, function(e){
            setTimeout(function(){
                dati_Erreurs.UPDATE(id);
            }, 100);
        }, false);


    }


}




let dati_Erreurs = new Ui_msgErreur();