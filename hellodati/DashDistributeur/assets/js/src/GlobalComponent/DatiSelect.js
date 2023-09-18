let Ui_DatiSelect = class {
    constructor() {
        this.EVENTS_UI();
        this.options=[];
    }


    INPUT(id,label){
        return      '<label>'+label+'</label>'+
        '<select DATI-SELECT-LIST-'+id+'>'+
        ''+this.options+''+
        '</select>'

    }
LIST_OPTIONS(data,label,OPTION){

    this.options = "<option value=''>Select "+label+"</option>";
    for (var i = 0; i < data.length; i++) {
         var title = "data[i]."+OPTION;
        title =eval(title);
        this.options =  this.options + '<option value="' + data[i].id + '">'+title+'</option>';
    }
}

    UPDATE(id){
        console.log(id,"offreHotel")
        this.options=[];
        var SelectC = $("[ID="+id+"]");
        var label = $(SelectC).attr("LABEL");
        var lists_name = $(SelectC).attr("LIST");
        var OPTION= $(SelectC).attr("OPTION");
        var lists = eval(lists_name);
        $(SelectC).html("");
        if(lists!= undefined || lists !=null){
            this.LIST_OPTIONS(lists,label,OPTION);
        }


        var input = this.INPUT(id,label);
        $(SelectC).append(input);


    }




    EVENTS_UI(){
        $(document).ready(function() {
            var myComposents = document.querySelectorAll("dati-select");
            for(var i=0; i<myComposents.length;i++){

                var myComposent = myComposents[i];
                if($(myComposent).attr("UPDATE")){
                    dati_select.LUNCH($(myComposent).attr("UPDATE"),$(myComposent).attr("ID"),$(myComposent).attr("DATI-VALIDATE"),$(myComposent).attr("DATI-CANCEL"));
                }
            }
        });

    }



    LUNCH(eventName,id){
        document.addEventListener(eventName, function(e){
            setTimeout(function(){
                dati_select.UPDATE(id);
            }, 100);
        }, false);


    }


}




let dati_select = new Ui_DatiSelect();