let Ui_checkBoxButton = class {
    constructor() {
        this.EVENTS_UI();
    }


    CONTAINER_TYPE_SERVICE(id){
        return'<div class="container_box" DATI-CONTAINER-FOR-SERVICE-TYPE='+id+'>'+


            '</div>'

    }

    MAKE_IT_CHECKED(elem){
        var id =  $(elem).attr("ID");
        var data =  $(elem).attr("DATA");
        if($(elem).find("[IS_CHECKED="+data+id+"]").css('display') == 'none'){
            $(elem).find("[IS_CHECKED="+data+id+"]").css("display","inline-block");
            $(elem).find("[BUTTON-CHECKED]").attr("BUTTON-CHECKED","true");
            $(elem).attr("CHECK","true");
        }else{
            $(elem).find("[IS_CHECKED="+data+id+"]").css("display","none");
            $(elem).find("[BUTTON-CHECKED]").attr("BUTTON-CHECKED","false");
            $(elem).attr("CHECK","false");
        }



    }

    BUTTON_CHECK(id,list){

        var name = list.title ;
        return '<dati-checkBox   class="container_order"  ID="CheckBoxEvent222" UPDATE="showCheckBoxEvent" DATA='+name+' CHANGE="dati_checkBoxButton.MAKE_IT_CHECKED(this)" CHECK="true"></dati-checkBox>'
    }

    UPDATE(id){
        var typeS = $("[DATI-ID="+id+"]");
        var list_name = $(typeS).attr("DATI-BT-LIST");
        var lists = eval(list_name);
        $(typeS).html("");
        var containerTypeS = this.CONTAINER_TYPE_SERVICE(id);
        $(typeS).append(containerTypeS);
        var containerForTypeService =  $(typeS).find("[DATI-CONTAINER-FOR-SERVICE-TYPE="+id+"]");
        for(var i=0; i<lists.length; i++) {
            var list = lists[i];
            var BtCheck = "";
            BtCheck += this.BUTTON_CHECK(id,list);
            $(containerForTypeService).append(BtCheck);
    /*        dati_checkBoxBt.ADD_TO_DOM("CheckBoxEvent"+id+type);*/
        }


    }




    EVENTS_UI(){
        var myComposents = document.querySelectorAll("[dati-composent=checkBoxButton]");
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
                dati_checkBoxButton.UPDATE(id);
            }, 100);
        }, false);


    }


}




let dati_checkBoxButton = new Ui_checkBoxButton();