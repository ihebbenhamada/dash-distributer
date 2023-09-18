let Ui_searchBarDatatable = class {
    constructor() {
        this.EVENTS_UI();

    }


    ATTRIBUTES(element){
        var attributs = "";
        $(element).each(function() {

            $.each(this.attributes, function() {
                // this.attributes is not a plain object, but an array
                // of attribute nodes, which contain both the name and value
                if(this.specified) {
                    attributs=attributs+' '+this.name+' = "'+this.value+'"';
                }
            });
        });
        return attributs;
    }


    CREATE_INPUT_TXT(attribute,style){
        if (style != null){
            return    '<input style="'+style+'" type="text" '+attribute+'/>';
        }else {
            return    '<input type="text" '+attribute+'/>';
        }

    }

    CREATE_INPUT_DATE_PICKER(html,attrs){

        return '<dati-datepicker '+attrs+'>' +html+
            '    </dati-datepicker>';

    }


    CREATE_INPUT_SELECT(attribute,options,style){

        var select1 ='<select class="defaultDateSelect" '+attribute+'>';

        var option = "";
        for (const [key, value] of Object.entries(options)) {
            if (style != null){
                option = option+"<option value='"+value+"'>"+key+"</option>";
            }else {
                option = option+"<option value='"+value+"'>"+key+"</option>";
            }
        }
        select1 = select1+option+"</select>";
        return select1;

    }
    /*CREATE_INPUT_SELECT(attribute,style){
        if (style != null){
            return '<select style="'+style+'" '+attribute+' ></select>';
        }else {
            return '<select '+attribute+'><option value="" >All</option><option value="0">Waiting</option><option value="3">In progress</option><option value="4">Finished</option></select>';
        }

    }*/

    /*CREATE_OPTION(nb_option,name_option){
        var option ="";

        for (var i=0;i<nb_option;i++){
            option = option+'<option value="'+i+'">'+name_option+'</option>';
        }
        return option;
    }*/


        UPDATE(id){

            var searchBar = $("[DATI-ID="+id+"]");
            var titleSearch = $(searchBar).attr("DATI-TITLE-SEARCH");
            var myComposents = document.querySelectorAll(' [dati-id='+id+'] [DATI-COMPOSENT=input]');



            var inputs = "<div class='title_search'>"+titleSearch+"</div><div class='inputs'>";
            for(var i=0; i<myComposents.length;i++) {
                var myComposent = myComposents[i];
                if ($(myComposent).attr("DATI-INPUT-TYPE")=="text"){
                    inputs=inputs+ this.CREATE_INPUT_TXT(this.ATTRIBUTES(myComposent),null);
                }else if ($(myComposent).attr("DATI-INPUT-TYPE")=="select"){
                    if ($(myComposent).attr("DATI-OPTION")){
                        var options = $(myComposent).attr("DATI-OPTION");
                        options = eval(options);
                        inputs=inputs+ this.CREATE_INPUT_SELECT(this.ATTRIBUTES(myComposent),options,null);
                    }

                }

            }
            var myComposents2 = document.querySelectorAll(' [dati-id='+id+'] dati-datepicker');
            for(var i=0; i<myComposents2.length;i++) {
                var  myComposent= myComposents2[i];
                var attrs_rec = this.ATTRIBUTES(myComposent);
                inputs=inputs+ this.CREATE_INPUT_DATE_PICKER($(myComposent).html(),attrs_rec);
            }
            inputs=inputs+'</div>';
            $(searchBar).html("");
            $(searchBar).append(inputs);



    }

    EVENTS_UI(){
        var  myComposents = document.querySelectorAll("[dati-composent=searchBarDatatable]");
        for(var i=0; i<myComposents.length;i++){
            var myComposent = myComposents[i];
            if($(myComposent).attr("dati-update")){
                this.LUNCH($(myComposent).attr("dati-id"),$(myComposent).attr("dati-update"));
            }
        }
    }

    LUNCH(id,eventName){

        document.addEventListener(eventName, function(e){


            setTimeout(function(){
                dati_searchBar.UPDATE(id);
            }, 100);
        },true);

    }
}

let dati_searchBar = new Ui_searchBarDatatable();