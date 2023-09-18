let Ui_datatablePrevilege = class {
    constructor() {
        this.listF = null;
        this.EVENT_UI();
        this.selectedPrev = null;
        this.idUpdate = null;
        this.previleges = [];
    }

    DATALIST(data) {
        this.previleges = data;

    }

    DATALISTUPDATE(data) {
        this.previlegesUpdate = data.list;
    }

    RESET(table, header) {
        $(table).html("");
        $(table).append(header);
    }

    VERIF_LIST_STRUC_ADD_ATTR(obj, priv_attr, detail_attr, fields_attr) {
        var objRetour = obj;
        for (var i = 0; i < objRetour.length; i++) {
            if (!objRetour[i].hasOwnProperty(priv_attr)) {
                objRetour[i][priv_attr] = 1;

            }
            if (!objRetour[i].hasOwnProperty(detail_attr)) {
                objRetour[i][detail_attr] = {};
                objRetour[i][detail_attr]["C"] = false;
                objRetour[i][detail_attr]["U"] = false;
                objRetour[i][detail_attr]["D"] = false;
            }
            if (!objRetour[i].hasOwnProperty(fields_attr)) {
                objRetour[i][fields_attr] = [];
            }else if(objRetour[i][fields_attr] == null || objRetour[i][fields_attr] == ""){
                objRetour[i][fields_attr] = [];
            }else {
                objRetour[i][fields_attr] = this.VERIF_LIST_STRUC_ADD_ATTR(objRetour[i][fields_attr], priv_attr, detail_attr, fields_attr);
            }
        }
        return objRetour;
    }

    VERIF_LIST_STRUC(list, id) {
        var table = $("[DATI-ID=" + id + "]");
        var listRetour = list;
        console.log("id table : ",id);
        if (!$(table).find("[dati-attr]").attr("dati-attr")) {
            console.error("attribute dati-attr not declared in datatable " + id);
            return false;
        }
        if (!$(table).attr("dati-priv-attr")) {
            console.error("attribute dati-priv-attr not declared in datatable " + id);
            return false;
        }

        if (!$(table).attr("dati-priv-fields-attr")) {
            console.error("attribute dati-priv-fields-attr not declared in datatable " + id);
            return false;
        }

        if (!$(table).attr("dati-priv-detail-attr")) {
            console.error("attribute dati-priv-detail-attr not declared in datatable " + id);
            return false;
        }

        listRetour = this.VERIF_LIST_STRUC_ADD_ATTR(listRetour, $(table).attr("dati-priv-attr"), $(table).attr("dati-priv-detail-attr"), $(table).attr("dati-priv-fields-attr"));
        return listRetour;

    }

    GET_PRIV_AJOUT(isChecked) {
        var html = "";
        if (isChecked && isChecked != "false") {
            html = html + "<td style=\"width: 25px\" DATI-ROLE-SPE='C' DATI-ROLE='update' onclick='dati_table_previlege.setSelected(this)' DATA-ROLE='RADIO-ITEM-CHECKED'>" +
                "<i class=\"fas fa-check check\"></i>" +
                "<i class=\"fas fa-check close\"></i>" +
                "</td>\n";
        } else {
            html = html + "<td style=\"width: 25px\" DATI-ROLE-SPE='C' DATI-ROLE='update' onclick='dati_table_previlege.setSelected(this)' DATA-ROLE='RADIO-ITEM'>" +
                "<i class=\"fas fa-check check\"></i>" +
                "<i class=\"fas fa-check close\"></i>" +
                "</td>";
        }
        return html;
    }

    GET_PRIV_UPDATE(isChecked) {
        var html = "";
        if (isChecked && isChecked != "false") {
            html = html + "<td style=\"width: 25px\" DATI-ROLE-SPE='U' DATI-ROLE='update' onclick='dati_table_previlege.setSelected(this)' DATA-ROLE='RADIO-ITEM-CHECKED'>" +
                "<i class=\"fas fa-check check\"></i>" +
                "<i class=\"fas fa-check close\"></i>" +
                "</td>";
        } else {
            html = html + "<td style=\"width: 25px\" DATI-ROLE-SPE='U' DATI-ROLE='update' onclick='dati_table_previlege.setSelected(this)' DATA-ROLE='RADIO-ITEM'>" +
                "<i class=\"fas fa-check check\"></i>" +
                "<i class=\"fas fa-check close\"></i>" +
                "</td>";
        }
        return html;
    }

    GET_PRIV_SUP(isChecked) {
        var html = "";
        if (isChecked && isChecked != "false") {
            html = html + "<td style=\"width: 25px\" DATI-ROLE-SPE='D' DATI-ROLE='update' onclick='dati_table_previlege.setSelected(this)' DATA-ROLE='RADIO-ITEM-CHECKED'>" +
                "<i class=\"fas fa-check check\"></i>" +
                "<i class=\"fas fa-check close\"></i></td>";
        } else {
            html = html + "<td style=\"width: 25px\" DATI-ROLE-SPE='D' DATI-ROLE='update' onclick='dati_table_previlege.setSelected(this)' DATA-ROLE='RADIO-ITEM'>" +
                "<i class=\"fas fa-check check\"></i>" +
                "<i class=\"fas fa-check close\"></i></td>";
        }
        return html;
    }

    GET_PRIV_SHOW(isChecked) {
        var html = "";
        if (isChecked) {
            html = html + "<td style=\"width: 25px\" DATI-ROLE='show' onclick='dati_table_previlege.setSelected(this)' DATA-ROLE='RADIO-ITEM-CHECKED'>" +
                "<i class=\"fas fa-check check\"></i>" +
                "<i class=\"fas fa-check close\"></i>" +
                "</td>";
        } else {
            html = html + "<td style=\"width: 25px\" DATI-ROLE='show' onclick='dati_table_previlege.setSelected(this)' DATA-ROLE='RADIO-ITEM'>" +
                "<i class=\"fas fa-check check\"></i>" +
                "<i class=\"fas fa-check close\"></i>" +
                "</td>";
        }
        return html;
    }

    GET_PRIV_DISABLE(isChecked) {
        var html = "";
        if (isChecked) {
            html = html + "<td style=\"width: 25px\" DATI-ROLE='disable' onclick='dati_table_previlege.setSelected(this)' DATA-ROLE='RADIO-ITEM-CHECKED'>" +
                "<i class=\"fas fa-check check\"></i>" +
                "<i class=\"fas fa-check close\"></i>" +
                "</td>";
        } else {
            html = html + "<td style=\"width: 25px\" DATI-ROLE='disable' onclick='dati_table_previlege.setSelected(this)' DATA-ROLE='RADIO-ITEM'>" +
                "<i class=\"fas fa-check check\"></i>" +
                "<i class=\"fas fa-check close\"></i>" +
                "</td>";
        }
        return html;
    }

    GET_PRIV_HTML(add, del, update, show, disable) {
        var html = "";
        if (add || update || del) {
            html += this.GET_PRIV_AJOUT(add);
            html += this.GET_PRIV_UPDATE(update);
            html += this.GET_PRIV_SUP(del);
            html += this.GET_PRIV_SHOW(false);
            html += this.GET_PRIV_DISABLE(false);
            return html;
        } else if (show) {
            html += this.GET_PRIV_AJOUT(false);
            html += this.GET_PRIV_UPDATE(false);
            html += this.GET_PRIV_SUP(false);
            html += this.GET_PRIV_SHOW(true);
            html += this.GET_PRIV_DISABLE(false);
        } else if (disable) {
            html += this.GET_PRIV_AJOUT(false);
            html += this.GET_PRIV_UPDATE(false);
            html += this.GET_PRIV_SUP(false);
            html += this.GET_PRIV_SHOW(false);
            html += this.GET_PRIV_DISABLE(true);
        }

        return html;
    }


    GET_HTML(list, row, id, cells, padding,varName) {
        var table = $("[DATI-ID=" + id + "]");
        var attr = $(table).find("[dati-attr]").attr("dati-attr");
        var priv_detail = $(table).attr("dati-priv-detail-attr");
        var fields =$(table).attr("dati-priv-fields-attr");
        var priv =$(table).attr("DATI-PRIV-ATTR");
        var check = "";
        var rowNumber = row;
        for(var i=0; i<list.length; i++){
            rowNumber=rowNumber+1;
            var varN = varName+"["+i+"]";
            var line = "";
            if (list[i][fields].length>0){
                line = line + this.ADD_CELL(list[i][attr], true, rowNumber, padding);
            } else {
                line = line + this.ADD_CELL(list[i][attr], false, rowNumber,padding, null);
            }
            if (list[i][priv] == 1) {
                check = this.GET_PRIV_HTML(0, 0, 0, 0, 1);
            } else if (list[i][priv] == 2) {
                check = this.GET_PRIV_HTML(0, 0, 0, 1, 0);
            } else if (list[i][priv] == 3) {
                check = this.GET_PRIV_HTML(list[i][priv_detail].C, list[i][priv_detail].D, list[i][priv_detail].U, false, false);
            }
            line += check;
            var varNf = "['"+fields+"']";
            if(padding != 0){
                $(table).append("<tr DATA-ROLE='RADIO' DATI-PARENT='"+row+"' DATI-ROW='" + rowNumber + "'  DATI-IN-LIST=\""+varN+"\" style='display: none'>"+line+"</tr>");
            }else{
                $(table).append("<tr DATA-ROLE='RADIO' DATI-PARENT='"+row+"' DATI-ROW='" + rowNumber + "'  DATI-IN-LIST=\""+varN+"\">"+line+"</tr>");
            }
            if (list[i][fields].length>0){
                this.GET_HTML(list[i][fields],rowNumber, id,cells,padding+1,varN+varNf);
            }
            rowNumber+=list[i][fields].length;
        }
    }

    UPDATE(id) {
        this.idUpdate = id;
        var table = $("[DATI-ID=" + id + "]");
        var list = $(table).attr("DATI-LIST");
        list = eval(list);
        var listRetour = this.VERIF_LIST_STRUC(list, id);
        if (!listRetour) {
            return false;
        }
        this.listF = listRetour;
        var cells = $(table).find("[DATI-COMPOSENT=datatable_previlege_header]");
        this.RESET(table, cells);
        this.GET_HTML(listRetour, 0, id, cells,0,"dati_table_previlege['listF']");
    }


    setSelected(element) {
        var i = $(element).parent().attr("DATI-ROW");
        this.selectedPrev = eval($(element).parent().attr("dati-in-list"));


    }


    DISABLE_DISPLAY(table,rowid){
        var fields = $(table).find("[DATI-PARENT="+rowid+"]");
        var priv = $(table).attr("dati-priv-attr");
        for (var i = 0; i < fields.length; i++) {
                var l = $(fields[i]).attr("dati-in-list");
                var list = eval(l);
                if(list[priv] != 1) {
                    $(fields[i]).find("[dati-role=disable]").click();
                }
                    fields[i].style.display = "none";
                    var lastParent = $(fields[i]).attr("DATI-ROW");
                    $("[DATI-PARENT=" + lastParent + "]").css("display", "none");

                    this.DISABLE_DISPLAY(table, lastParent);
        }
        $("[DATI-ROW="+rowid+"]").find("[DATI-ARROW-PREV]").removeClass("fas fa-angle-down");
        $("[DATI-ROW="+rowid+"]").find("[DATI-ARROW-PREV]").addClass("fas fa-angle-right");
    }
    DISPLAY_FIELDS(element) {

        var rowid = $(element).parent().attr("DATI-ROW");
        var table = $(element).parent().parent();
        var priv = $(table).attr("dati-priv-attr");
        var list = $(table).find("[DATI-ROW="+rowid+"]").attr("dati-in-list");
        var EvList = eval(list);
        console.log("EvList", EvList);


        if($(table).find("[DATI-PARENT="+rowid+"]").css("display") == "none"){
            if(EvList[priv] != 1){
                $(table).find("[DATI-PARENT="+rowid+"]").css("display","table-row");
                $(table).find("[DATI-ROW="+rowid+"]").find("[DATI-ARROW-PREV]").removeClass("fas fa-angle-right");
                $(table).find("[DATI-ROW="+rowid+"]").find("[DATI-ARROW-PREV]").addClass("fas fa-angle-down");
            }else{
                alert("Enable Itiem first to show childs");
            }

        }else{
            this.DISABLE_DISPLAY(table,rowid);

            /*$("[DATI-PARENT="+rowid+"]").css("display","none");*/

        }


    /*    for (var j = 0; j < this.listF.length; j++) {

            if (i == j) {
                var rows = $("[dati-id=" + this.idUpdate + "]").find("[DATI-ROW=" + j + "]");
                var mere = rows[0];
                for (var m = 1; m < rows.length; m++) {
                    var row = rows[m];
                    if (this.listF[j].privilege == 1) {
                        $(row).css("display", "none");
                    } else {
                        if ($(row).css("display") == "none") {
                            $(row).css("display", "table-row");
                            $(mere).find("[DATI-ARROW-PREV]").removeClass("fas fa-angle-right");
                            $(mere).find("[DATI-ARROW-PREV]").addClass("fas fa-angle-down");
                        } else {
                            $(row).css("display", "none");
                            $(mere).find("[DATI-ARROW-PREV]").removeClass("fas fa-angle-down");
                            $(mere).find("[DATI-ARROW-PREV]").addClass("fas fa-angle-right");
                        }
                    }

                }


            }
        }*/
    }

    ADD_CELL(cell_content, arrow, i, marginCount, style) {
        var margin = marginCount * 50;
        if (arrow) {
            return "<td onclick='dati_table_previlege.DISPLAY_FIELDS(this)'  style='width: 20px;cursor: pointer;'><i DATI-ARROW-PREV class=\"fas fa-angle-right\"></i></td><td style='cursor: pointer;padding-left:"+margin+"px' onclick='dati_table_previlege.DISPLAY_FIELDS(this)'>" + cell_content + "</td><td style='width: 20px'></td>";
        } else {
            return "<td style='width: 20px;'></td><td style='padding-left: "+margin+"px'>" + cell_content + "</td><td style='width: 20px'></td>";
        }
    }

    /*ADD_CELL_FIELDS(cell_content, i, arrow, style) {
        if (style == null) {
            if (arrow) {
                return "<td style='cursor: pointer;padding-left: 50px'><i DATI-ARROW-PREV class=\"fas fa-angle-right\"></i></td><td style='cursor: pointer'>" + cell_content + "</td><td style='width: 20px'></td>";
            } else {
                return "<td style='width: 20px;'></td><td style='padding-left: 50px;font-size: 14px'>" + cell_content + "</td>";
            }

        } else {
            return "<td style='width: 20px'></td><td style='padding-left: 50px;font-size: 14px'" + style + "'>" + cell_content + "</td>"
        }

    }*/

    /*ADD_CELL_FIELDS_Of_FIELDS(cell_content, i, arrow, style) {
        if (style == null) {
            if (arrow) {
                return "<td style='cursor: pointer;padding-left: 100px'><i DATI-ARROW-PREV class=\"fas fa-angle-right\"></i></td><td style='cursor: pointer'>" + cell_content + "</td><td style='width: 20px'></td>";
            } else {
                return "<td style='width: 20px;'></td><td style='padding-left: 100px;font-size: 14px'>" + cell_content + "</td>";
            }

        } else {
            return "<td style='width: 20px'></td><td style='padding-left: 100px;font-size: 14px'" + style + "'>" + cell_content + "</td>"
        }

    }*/

    LIST(list, attrs) {
        var lines = "";
        for (var i = 0; i < list.length; i++) {
            var line = "<tr >";
            for (var j = 0; j < attrs.length; j++) {

                line = line + "<td LINE-ID=\"" + list[i].id + "\">" + list[i][attrs[j]];
                +"</td>";
            }
            line = line + "</tr>";
            lines = lines + line;
        }
        return lines;

    }

    EVENT_UI() {


        $(document).on("click", "[DATI-ROLE=disable]", function () {
            dati_table_previlege.DISPLAY_FIELDS(this);
        });

        $(document).on("click", "[data-role=RADIO-ITEM]", function () {

            var attr = $(this).attr("dati-role");
            var i = $(this).parent().attr("dati-row");
            var j = $(this).parent().attr("dati-row-fields");

            if (attr != "disable") {
                $("[dati-parent=" + i + "]").css("display", "table-row");


                $("[dati-row=" + i + "]").find("[DATI-ARROW-PREV]").removeClass("fas fa-angle-right");
                $("[dati-row=" + i + "]").find("[DATI-ARROW-PREV]").addClass("fas fa-angle-down");
            }

        });
        $(document).on("click", "[DATA-ROLE=RADIO] [DATI-ROLE]", function () {

            var role = $(this).attr("DATI-ROLE");
            var item = $(this).parent().attr("dati-in-list");
            var list = eval(item);
            if (role == "update") {
                if ($(this).attr("DATA-ROLE") == "RADIO-ITEM") {
                    $(this).parent().find("[DATI-ROLE=show][DATA-ROLE=RADIO-ITEM-CHECKED]").attr("DATA-ROLE", "RADIO-ITEM");
                    $(this).parent().find("[DATI-ROLE=disable][DATA-ROLE=RADIO-ITEM-CHECKED]").attr("DATA-ROLE", "RADIO-ITEM");
                    $(this).attr("DATA-ROLE", "RADIO-ITEM-CHECKED");
                    var privelege = $(this).parent().parent().attr("dati-priv-attr");
                    var privelege_detail = $(this).parent().parent().attr("DATI-PRIV-DETAIL-ATTR");
                    var privelege_detail_spe = $(this).attr("DATI-ROLE-SPE");
                    list[privelege]=3;
                    list[privelege_detail][privelege_detail_spe]= true;
                } else {
                    var privelege = $(this).parent().parent().attr("dati-priv-attr");
                    var privelege_detail = $(this).parent().parent().attr("DATI-PRIV-DETAIL-ATTR");
                    var privelege_detail_spe = $(this).attr("DATI-ROLE-SPE");
                    list[privelege]=3;
                    list[privelege_detail][privelege_detail_spe]= false;
                    $(this).attr("DATA-ROLE", "RADIO-ITEM");
                }

            } else if (role == "show") {
                var privelege = $(this).parent().parent().attr("dati-priv-attr");
                var privelege_detail = $(this).parent().parent().attr("DATI-PRIV-DETAIL-ATTR");

                $(this).parent().find("[DATI-ROLE=update][DATA-ROLE=RADIO-ITEM-CHECKED]").attr("DATA-ROLE", "RADIO-ITEM");
                $(this).parent().find("[DATI-ROLE=disable][DATA-ROLE=RADIO-ITEM-CHECKED]").attr("DATA-ROLE", "RADIO-ITEM");
                $(this).attr("DATA-ROLE", "RADIO-ITEM-CHECKED");
                list[privelege]=2;
                list[privelege_detail]["C"]= false;
                list[privelege_detail]["D"]= false;
                list[privelege_detail]["U"]= false;
            } else if (role == "disable") {
                var privelege = $(this).parent().parent().attr("dati-priv-attr");
                var privelege_detail = $(this).parent().parent().attr("DATI-PRIV-DETAIL-ATTR");
                $(this).parent().find("[DATI-ROLE=update][DATA-ROLE=RADIO-ITEM-CHECKED]").attr("DATA-ROLE", "RADIO-ITEM");
                $(this).parent().find("[DATI-ROLE=show][DATA-ROLE=RADIO-ITEM-CHECKED]").attr("DATA-ROLE", "RADIO-ITEM");
                $(this).attr("DATA-ROLE", "RADIO-ITEM-CHECKED");
                list[privelege]=1;
                list[privelege_detail]["C"]= false;
                list[privelege_detail]["D"]= false;
                list[privelege_detail]["U"]= false;
            }

            /*dati_table_previlege.UPDATE("previlegeList");*/
        });
    }


}

let dati_table_previlege = new Ui_datatablePrevilege();