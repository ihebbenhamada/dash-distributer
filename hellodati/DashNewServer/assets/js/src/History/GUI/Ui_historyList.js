let Ui_historyList = class {
    constructor() {
        this.total = 0;
        this.nbrRows=10;
        this.totalS = 0;
        this.nbrRowsS=10;
        this.selectedHistory=null;
        this.lastSearchBy ="";
        this.selectedDate=[];
        $("[DATI-ID=pagination_empHistoryList]").attr("DATI-NBR-ROW",this.nbrRows);
        this.optionsAction={
            "Actions" : "",
            "Create" : "C",
            "Delete" : "D",
            "Update" : "U",
            "Order Confirmed" : "OC",
            "Order Prepered" : "OP",
            "Order Delivered" : "OD",
            "Order Rejected" : "OR",
            "Reservation Confirmed" : "RC",
            "Reservation Rejected" : "RR",
            "SigntIn" : "S",
            "Enable" : "E",
            "Disable" : "Di",
        };
        this.filterBy={
            "Name" : 1,
            "Action" : 2,
        };
        $(document).on('change','[DATI-ID=searchBarEmpHistoryList] [DATI-ID=listhystoryEmps_filter_by]',function(){
            var filterSelected = $(this).val();
            console.log(filterSelected);

            switch (filterSelected) {
                case "1" :
                    iHistory.GET_ALL_EMP_HISTORY2();
                    $("[DATI-ID=searchBarEmpHistoryList] [dati-composent=input]").css("display","none");
                    $("[DATI-ID=searchBarEmpHistoryList] [dati-composent=input]").val("");
                    $("[DATI-ID=searchBarEmpHistoryList] [DATI-ID=listhystoryEmps_filter_by]").val(filterSelected);
                    $("[DATI-ID=searchBarEmpHistoryList] [DATI-ID=listhystoryEmps_filter_by]").css("display","inline-block");
                    $("[DATI-ID=searchBarEmpHistoryList] [DATI-ID=empHistoryList_search_byname]").css("display","inline-block");
                    break;
                case "2" :
                    iHistory.GET_ALL_EMP_HISTORY2();
                    $("[DATI-ID=searchBarEmpHistoryList] [dati-composent=input]").css("display","none");
                    $("[DATI-ID=searchBarEmpHistoryList] [dati-composent=input]").val("");
                    $("[DATI-ID=searchBarEmpHistoryList] [DATI-ID=listhystoryEmps_filter_by]").val(filterSelected);
                    $("[DATI-ID=searchBarEmpHistoryList] [DATI-ID=listhystoryEmps_filter_by]").css("display","inline-block");
                    $("[DATI-ID=searchBarEmpHistoryList] [DATI-ID=empHistoryList_search_byAction]").css("display","inline-block");
                    break;
            }
        });
    }

    DATALIST(data){
        this.empHistory = data;
        try {
            this.total = data[0].count1;
            this.nbrRows = data[0].quantity1;
            $("[DATI-ID=pagination_empHistoryList]").attr("DATI-NBR-ROW",historyList_ui.nbrRows);
            $("[DATI-ID=pagination_empHistoryList]").attr("DATI-TOTAL-PAGE",historyList_ui.total);
            dati_pagination.UPDATE("pagination_empHistoryList");
        }catch (e) {
            $("[DATI-ID=pagination_empHistoryList]").attr("DATI-NBR-ROW",0);
            $("[DATI-ID=pagination_empHistoryList]").attr("DATI-TOTAL-PAGE",10);
            dati_pagination.UPDATE("pagination_empHistoryList");
        }

        console.log("total rows",this.total);
        console.log("nbr rows",this.nbrRows);
    }
    getAction(attribute){
        if (attribute != null && attribute != "null" && attribute != "") {
            if (attribute=="C"){
                return "Create"
            }
            if (attribute=="U"){
                return "Update"
            }
            if (attribute=="D"){
                return "Delete"
            }
            if (attribute=="S"){
                return "SignIn"
            }
            if (attribute=="L"){
                return "Logout"
            }
            if (attribute=="OC"){
                return "Order Confirmed"
            }
            if (attribute=="OP"){
                return "Order Prepered"
            }
            if (attribute=="OD"){
                return "Order Delivered"
            }
            if (attribute=="OR"){
                return "Order Rejected"
            }
            if (attribute=="RC"){
                return "Reservation Confirmed"
            }
            if (attribute=="RR"){
                return "Reservation Rejected"
            }
            if (attribute=="E"){
                return "Enable"
            }
            if (attribute=="Di"){
                return "Disable"
            }



        }else {
            return "- -";
        }
    }
    getActionDetail(attribute){
        if (attribute != null && attribute != "null" && attribute != "") {
            return attribute;
        }else {
            return "- -";
        }
    }
    getDate(attribute){
        if (attribute != null && attribute != "null" && attribute != "") {
            return attribute;
        } else {
            return "";
        }
    }
    GET_HTML_Plus(id){
        if(id != null && id != 'null' && id != ''){
            return '<i title="Details" style="cursor: pointer;padding: 5px" DATI-TD-STYLE="text-align:right" DATI-LINK="detailsEmpHistory" onclick="historyList_ui.setSelected(this)" class="fas fa-ellipsis-v fa-lg"></i>';
        }else{
            return "";
        }
    }
    GET_HTML_TD(id){
        if(id != null && id != 'null' && id != ''){
            return "<div style='width: 70px'></div>";
        }
    }
    setSelected(iconDetail){
        var i = $(iconDetail).parent().parent().attr("DATI-ROW");
        this.selectedHistory = this.empHistory[i];

    }
    RESEARCH_BY_EMP_NAME(data){
            historyList_ui.empHistory=data;
            dati_table.UPDATE("EmphistoryList");
    }
    RESEARCH_BY_ACTION(data){
        historyList_ui.empHistory=data;
        dati_table.UPDATE("EmphistoryList");
    }


};

let historyList_ui = new Ui_historyList();