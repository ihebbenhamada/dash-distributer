let Ui_editService = class {
    constructor() {
        this.EVENTS_UI();
        this.trans=[];
    }

    DATALIST(data){

        this.trans = data.data;

    }
    SWITCHER(){
        return '<div  class="switcherContainer"\n' +
            '  DATI-COMPOSENT="switcherContainer"\n' +
            '  DATI-ID="toggelTra"\n' +
            '  DATI-UPDATE="ToggelTraServices"\n' +
            'DATI-CHANGE="editService_ui.TOGGEL_Lang()"' +

             '>\n' +
            '  </div>';
    }

    TOGGEL_Lang(){
        var val = $("[DATI-ID=toggelTra]").find("[type=checkbox]").is(":checked");
        if(val){
            $("[DATI-TR-INPUT=lang]").css("display", "inline-block");
        }else{
            $("[DATI-TR-INPUT=lang]").css("display", "none");
        }
    }

    Edit(){
        return  '<div class="overlay_Edit">'+
        '<div class="container_edit_service">'+
            '<span class="close" onclick=" serviceCard_ui.CLOSE_EDIT()">&times;</span>'+
            '<label for="" class="title_service">Title Service</label>'+
            '<input type="text" placeholder="title service" DATI-ID=val_title_SERVICE>'+
            '<div class="translates" DATI_TRANSLATE>'+

            '</div>'+
            '<button class="edit_service"><img src="/assets/img//ui/valideWhite.png" alt="validate">Update '+
            '</button>'+
            '</div>'+
            '</div>'
    }
    TRANS(list) {
        return '<div class="translate_item">' +
            '<div class="header">' +
            '<div class="switcherContainer">' +
            '</div>' +
            '<label for="">Translate <span>'+list.lang+'</span></label>' +
            '</div>' +
            '<input class="title_trans" value="'+list.title+'" placeholder="translate" DATI-TR-INPUT="lang'+list.id+'"/>' +
            '</div>'
    }
    UPDATE(id){

        var editS = $("[DATI-ID="+id+"]");
        var lists_name = $(editS).attr("DATI-LIST");
        var lists = eval(lists_name);
        var editSForm = this.Edit();
        $(editS).append(editSForm);






    }




    EVENTS_UI(){
        var myComposents = document.querySelectorAll("[dati-composent=EditServiceTitles]");
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
                editService_ui.UPDATE(id);
            }, 100);
        }, false);


    }


}




let editService_ui = new Ui_editService();