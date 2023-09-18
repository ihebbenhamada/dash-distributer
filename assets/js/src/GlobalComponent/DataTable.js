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
            for(var j=0; j<cells.length; j++){
                var attr = cells[j];
                attr = $(attr).attr("dati-attr");
                var isAction = false;
                if(!$(cells[j]).attr("DATI-COMPOSENT")) {
                    if ($(cells[j]).attr("DATI-FN")) {

                        if ($(cells[j]).attr("DATI-ACTION")){
                            isAction = true;
                        }


                        var indexDot = attr.indexOf(".");

                        if (indexDot !== -1) {
                            var obj = attr.substr(0, indexDot);
                            var obj_attr = attr.substr(indexDot + 1, attr.length - (indexDot + 1));

                            attr = $(cells[j]).attr("DATI-FN") + "(list[" + i + "]['" + obj + "']." + obj_attr + ")";
                            try {
                                line = line + this.ADD_CELL(eval(attr), null, style_td,isAction);

                            } catch (e) {
                                line = line + this.ADD_CELL(eval($(cells[j]).attr("DATI-FN") + "(null)"), null, style_td,isAction);
                            }

                        } else {

                            var value = null;
                            try {
                                value = "'" + list[i][attr] + "'";
                            } catch (e) {
                                value = null;
                            }
                            attr = $(cells[j]).attr("DATI-FN") + "(" + value + ")";

                            if (value != null) {

                            }
                            try {
                                line = line + this.ADD_CELL(eval(attr), null, style_td,isAction);
                            } catch (e) {
                                line = line + this.ADD_CELL(eval($(cells[j]).attr("DATI-FN") + "(null)"), null, style_td,isAction);
                            }
                        }

                    } else {

                        try {
                            var indexDot = attr.indexOf(".");

                            if (indexDot !== -1) {
                                var obj = attr.substr(0, indexDot);
                                var obj_attr = attr.substr(indexDot + 1, attr.length - (indexDot + 1));
                                var indexDot = obj_attr.indexOf(".");
                                if (indexDot !== -1) {
                                    var obj2 = obj_attr.substr(0, indexDot);
                                    var obj_attr2 = obj_attr.substr(indexDot + 1, attr.length - (indexDot + 1));
                                    try {
                                        line = line + this.ADD_CELL(list[i][obj][obj2][obj_attr2], null, style_td,isAction);
                                    } catch (e) {
                                        line = line + this.ADD_CELL("", null, style_td,isAction);
                                    }
                                } else {
                                    try {
                                        line = line + this.ADD_CELL(list[i][obj][obj_attr], null, style_td,isAction);
                                    } catch (e) {
                                        line = line + this.ADD_CELL("", null, style_td,isAction);
                                    }
                                }

                            } else {
                                line = line + this.ADD_CELL(list[i][attr], null, style_td,isAction);
                            }
                        } catch (e) {

                        }

                    }
                }

            }

            // line=line;
            $(table).append("<tr DATI-ROW='"+i+"'></tr>");
            $(table).find("[DATI-ROW="+i+"]").append(line);
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

    ADD_CELL(cell_content,i,style,isAction){
        if(style == null){
            if (isAction){
                return "<td CLICK='"+i+"' style='width: 20px'>"+cell_content+"</td>";
            }else {
                return "<td CLICK='"+i+"'>"+cell_content+"</td>";
            }

        }else{
            if (isAction){
                return "<td CLICK='"+i+"' style='"+style+";width: 20px'>"+cell_content+"</td>"
            }else {
                return "<td CLICK='"+i+"' style='"+style+"'>"+cell_content+"</td>"
            }

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
        $(document).ready(function() {
        var myComposents = document.querySelectorAll("[dati-composent=dataTable]");
        for(var i=0; i<myComposents.length;i++){
            var myComposent = myComposents[i];
            if($(myComposent).attr("dati-update")){
                dati_table.LUNCH($(myComposent).attr("dati-id"),$(myComposent).attr("dati-update"));
            }
        }

        });
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