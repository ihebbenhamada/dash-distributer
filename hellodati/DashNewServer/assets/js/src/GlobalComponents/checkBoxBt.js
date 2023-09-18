let Ui_checkBoxBt = class {
    constructor() {
        this.EVENTS_UI();
    }


    CHECK_BOX_CONTAINER(id,data ,isChecked){
            var checkedAttr = 'BUTTON-CHECKED="false"';
            var styleAttr = 'style="display: none;"';
        if(isChecked){
            checkedAttr = 'BUTTON-CHECKED="true"';
             styleAttr = 'style="display: inline-block;"'
        }
        return '<span class="container_order_input" BT_CHECKED='+id+' '+checkedAttr+'>'+
            '<i  class="fas fa-check check" '+styleAttr+' IS_CHECKED='+data+id+'></i>'+
            '</span>'+
            '<span class="container_order_title">'+data+'</span>'


    }


    UPDATE(id){
        var checkBox = $("[ID="+id+"]");
        var data = $(checkBox).attr("DATA");
        var isCheck = $(checkBox).attr("CHECK");
        $(checkBox).html("");
        var containerTypeS = this.CHECK_BOX_CONTAINER(id,data,isCheck);
        $(checkBox).append(containerTypeS);

    }




    EVENTS_UI(){
        var myComposents = document.querySelectorAll("dati-checkBox");
        for(var i=0; i<myComposents.length;i++){
            var myComposent = myComposents[i];
            if($(myComposent).attr("update")){
                this.LUNCH($(myComposent).attr("update"),$(myComposent).attr("id"));
            }
        }

    }


    MAKE_IT_CHECKED(elem){
        var id =  $(elem).attr("ID");
        var data =  $(elem).attr("DATA");
        var page =  $(elem).attr("PAGE");
        if($(elem).find("[IS_CHECKED="+data+id+"]").css('display') == 'none'){
            $(elem).find("[IS_CHECKED="+data+id+"]").css("display","inline-block");
            $(elem).find("[BUTTON-CHECKED]").attr("BUTTON-CHECKED","true");
            $(elem).attr("CHECK","true");
   /*         $("[dati-page="+page+"]").find("[DATI-ID="+data+"]").css("display","inline-block");*/
        }else{
            $(elem).find("[IS_CHECKED="+data+id+"]").css("display","none");
            $(elem).find("[BUTTON-CHECKED]").attr("BUTTON-CHECKED","false");
            $(elem).attr("CHECK","false");
        /*    $("[dati-page="+page+"]").find("[DATI-ID="+data+"]").css("display","none");*/
           /* $("[dati-page="+page+"]").find("[DATI-ID="+data+"]").val("");*/
        }



    }
    LUNCH(eventName,id){

        document.addEventListener(eventName, function(e){
            setTimeout(function(){
                dati_checkBoxBt.UPDATE(id);
            }, 100);
        }, false);
        $(document).on('click','[ID='+id+']',function(){

            var elem = $('[ID='+id+']');

            if($(elem).attr("CHANGE")){
                var myFunction = $(this).attr("CHANGE");
                eval(myFunction);

            }

        });


    }


}




let dati_checkBoxBt = new Ui_checkBoxBt();