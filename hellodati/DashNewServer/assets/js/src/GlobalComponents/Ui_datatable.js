let Ui_datatable = class {
    constructor() {
        this.EVENTS_UI();
    }

    init(id){
        $("[DATI-ID="+id+"]").attr("header_created",false);
        try {
            var selected_page= $("[DATI-ID="+id+"]").find("[dati-composent=pagination]").find("[dati_composent=PAGES]").val();
            var arrowNextClass= $("[DATI-ID="+id+"]").find("[dati-composent=pagination]").find("[DATI-COMPOSENT=arrow_pagination_next]").attr("class");
            var arrowPrevClass= $("[DATI-ID="+id+"]").find("[dati-composent=pagination]").find("[DATI-COMPOSENT=arrow_pagination_prev]").attr("class");
            if(selected_page){
                $("[DATI-ID="+id+"]").find("[dati-composent=pagination]").find("[dati_composent=PAGES]").val(0);
            }
            if(arrowNextClass){
                try {
                    $("[DATI-ID="+id+"]").find("[dati-composent=pagination]").find("[DATI-COMPOSENT=arrow_pagination_next]").removeClass("inactive");
                }catch (e) {

                }
            }
            if(arrowPrevClass){
                $("[DATI-ID="+id+"]").find("[dati-composent=pagination]").find("[DATI-COMPOSENT=arrow_pagination_prev]").addClass("inactive");
            }
        }catch (e) {

        }

    }
    RESET(table, header){

        if($(table).attr("header_created")){
            if($(table).attr("header_created") == true || $(table).attr("header_created")=="true"){
                var last_header = $(table).find("[dati-composent=datatable_header]");
                $(table).html("");
                $(table).append(last_header);
            }else{
                $(table).html("");
                $(table).append(header);
            }
        }else{
            $(table).html("");
            $(table).append(header);
        }

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

    UPDATE(id){
        var table = $("[DATI-ID="+id+"]");
        /*if ($(table).find("[DATI-COMPOSENT=datatable-btn-accept]").attr("DATI-COMPOSENT")){
            var btnAccept ='<input class="demande-btn-accept" type="submit" '+this.ATTRIBUTES($(table).find("[DATI-COMPOSENT=datatable-btn-accept]"))+' value="Accept"/>';
        }else {
            var btnAccept = null;
        }
        if ($(table).find("[DATI-COMPOSENT=datatable-btn-reject]").attr("DATI-COMPOSENT")){
            var btnReject ='<input class="demande-btn-reject" type="submit" '+this.ATTRIBUTES($(table).find("[DATI-COMPOSENT=datatable-btn-reject]"))+' value="Reject"/>';
        }else {
            var btnReject = null;
        }

        if ($(table).find("[DATI-COMPOSENT=datatable-btn-details]").attr("DATI-COMPOSENT")){
            var btnDetails ='<input class="demande-btn-details" type="submit" '+this.ATTRIBUTES($(table).find("[DATI-COMPOSENT=datatable-btn-details]"))+' value="Details"/>';
        }else {
            var btnDetails = null;
        }*/
        // icons detect
        // icon detail

       /* if($(table).find("[DATI-COMPOSENT=datatable-icon-detail]").attr("DATI-COMPOSENT")){
            var imgDetail ='<img  '+this.ATTRIBUTES($(table).find("[DATI-COMPOSENT=datatable-icon-detail]"))+'  style="width: 20px; height: 20px" src="/assets/img/guest/detail.svg"/>';
            //var imgDetail ='<img DATI-COMPOSENT="datatable-icon-detail"  '+iconLink+'  style="width: 20px; height: 20px" src="/assets/img/guest/detail.svg"/>';
        }else{
            var imgDetail = null;
        }

        //iconEdit
        if($(table).find("[DATI-COMPOSENT=datatable-icon-edit]").attr("DATI-COMPOSENT")){
            var imgEdit ='<img '+this.ATTRIBUTES($(table).find("[DATI-COMPOSENT=datatable-icon-edit]"))+'style="width: 20px; height: 20px" src="/assets/img/guest/edit.svg"/>';
        }else{
            var imgEdit = null;
        }

        //iconDelete
        if($(table).find("[DATI-COMPOSENT=datatable-icon-delete]").attr("DATI-COMPOSENT")){
            var imgDelete ='<img '+this.ATTRIBUTES($(table).find("[DATI-COMPOSENT=datatable-icon-delete]"))+' style="width: 20px; height: 20px" src="/assets/img/delete-icon.svg"/>';
        }else{
            var imgDelete = null;
        }
*/



        var list = $(table).attr("DATI-LIST");
        list = eval(list);


        var cells = $(table).find("[DATI-COMPOSENT=datatable_header]");
        this.RESET(table,cells);
        cells = $(cells).find("th");

        if($(table).attr("DATI-TD-STYLE")){
            var style_td = $(table).attr("DATI-TD-STYLE");
        }else {
            var style_td = null;
        }

        for(var i=0; i<list.length; i++){
            var line = "";
            for(var j=0; j<cells.length-1; j++){
                var attr = cells[j];
                attr = $(attr).attr("dati-attr");
                if( $(cells[j]).attr("DATI-FN")){
                    var indexDot = attr.indexOf(".") ;

                    if(indexDot !== -1){
                        var obj = attr.substr(0, indexDot);
                        var obj_attr = attr.substr(indexDot+1, attr.length-(indexDot+1));

                        attr = $(cells[j]).attr("DATI-FN")+"(list["+i+"]['"+obj+"']."+obj_attr+")";
                        try {
                                line=line+this.ADD_CELL(eval(attr),null, style_td);

                        }catch (e) {
                            line=line+this.ADD_CELL(eval($(cells[j]).attr("DATI-FN")+"(null)"),null, style_td);
                        }

                    }else{

                        var value = null;
                        try {
                            value = "'"+list[i][attr]+"'";
                        }catch (e) {
                            value = null;
                        }
                        attr = $(cells[j]).attr("DATI-FN")+"("+value+")";

                        if(value != null){

                        }
                        try {
                            line=line+this.ADD_CELL(eval(attr),null, style_td);
                        }catch (e) {
                            line=line+this.ADD_CELL(eval($(cells[j]).attr("DATI-FN")+"(null)"), null, style_td);
                        }
                    }

                }else{
                    var indexDot = attr.indexOf(".") ;

                    if(indexDot !== -1) {
                        var obj = attr.substr(0, indexDot);
                        var obj_attr = attr.substr(indexDot + 1, attr.length - (indexDot + 1));
                        var indexDot = obj_attr.indexOf(".") ;
                        if(indexDot !== -1) {
                            var obj2 = obj_attr.substr(0, indexDot);
                            var obj_attr2 = obj_attr.substr(indexDot + 1, attr.length - (indexDot + 1));
                            try {
                                line=line+this.ADD_CELL(list[i][obj][obj2][obj_attr2],null, style_td);
                            }catch (e) {
                                line=line+this.ADD_CELL("",null, style_td);
                            }
                        }else{
                            try {
                                line=line+this.ADD_CELL(list[i][obj][obj_attr],null, style_td);
                            }catch (e) {
                                line=line+this.ADD_CELL("",null, style_td);
                            }
                        }

                    }else{
                        line=line+this.ADD_CELL(list[i][attr],null, style_td);
                    }
                }

            }

            // line=line;
           $(table).append("<tr DATI-ROW='"+i+"'></tr>");
            $(table).find("[DATI-ROW="+i+"]").append(line);
            /*if(imgDetail != null){

               var cell = this.ADD_CELL(imgDetail,i,"width:35px");
               $(table).find("[DATI-ROW="+i+"]").append(cell);

           }

           if(imgEdit != null){
               var cell = this.ADD_CELL(imgEdit,i,"width:35px");
               $(table).find("[DATI-ROW="+i+"]").append(cell);
           }

           if(imgDelete != null){
               var cell = this.ADD_CELL(imgDelete,i,"width:35px");
               $(table).find("[DATI-ROW="+i+"]").append(cell);
           }

           if(btnDetails != null){

               var cell = this.ADD_CELL(btnDetails,i,"width:35px");
               $(table).find("[DATI-ROW="+i+"]").append(cell);
           }
           if(btnAccept != null){

               var cell = this.ADD_CELL(btnAccept,i,"width:35px");
               $(table).find("[DATI-ROW="+i+"]").append(cell);
           }

           if(btnReject != null){

               var cell = this.ADD_CELL(btnReject,i,"width:35px");
               $(table).find("[DATI-ROW="+i+"]").append(cell);
           }*/


            var elm = $(table).find("[DATI-ROW="+i+"]").find("[DATI-COMPOSENT=datatable-icon-detail]");
            var stl = $(elm).attr("DATI-TD-STYLE");
            var stl= $(elm).attr("style")+";"+stl;
            $(elm).parent().attr("style",stl);
            var elm = $(table).find("[DATI-ROW="+i+"]").find("[DATI-COMPOSENT=datatable-icon-edit]");
            var stl = $(elm).attr("DATI-TD-STYLE");

            var stl= $(elm).attr("style")+";"+stl;
            $(elm).parent().attr("style",stl);
            $(table).attr("header_created",true);
        }

    }

    ADD_CELL(cell_content,i,style){
        if(style == null){
            return "<td CLICK='"+i+"'>"+cell_content+"</td>";
        }else{
            return "<td CLICK='"+i+"' style='"+style+"'>"+cell_content+"</td>"
        }

    }


    LIST(list, attrs){
        var lines="";
        for(var i=0; i<list.length; i++ ){
            var line = "<tr>";
            for(var j=0; j<attrs.length; j++ ){
                line = line+"<td LINE-ID=\""+list[i].id+"\">"+list[i][attrs[j]];+"</td>"; 
            }
            line = line+"</tr>";
            lines = lines+line;
        }
        return lines;
        
    }


    EVENTS_UI(){
        var myComposents = document.querySelectorAll("[dati-composent=dataTable]");
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
                dati_table.UPDATE(id)
            }, 100);
        },true);
    }
}

let dati_table = new Ui_datatable();