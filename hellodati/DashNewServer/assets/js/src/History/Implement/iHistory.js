class imp_History{
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();
    }

    GET_ALL_EMP_HISTORY(){
        var page_nbr = 0;
        try {
            var page_nbr = $(document.querySelectorAll("[dati-id=pagination_empHistoryList]")[0]).find("[dati_composent=PAGES]").val();
            if(!page_nbr){
                page_nbr = 0;
            }
        }catch (e) {
            page_nbr = 0
        }
        if(historyList_ui.lastSearchBy != ""){

            if(historyList_ui.lastSearchBy == "empName"){
                this.GET_EMPHISTORY_BY_EMP_NAME($("[DATI-ID=empHistoryList_search_byAction]").val(),true);
            }
            if(historyList_ui.lastSearchBy == "action"){
                this.GET_EMPHISTORY_BY_ACTION($("[DATI-ID=empHistoryList_search_byAction]").val(),true);
            }

            return false;
        }
        var data ={
            begin_date:historyList_ui.selectedDate["datefrom"],
            end_date:historyList_ui.selectedDate["dateto"],
            begin_time:historyList_ui.selectedDate["timefrom"],
            end_time:historyList_ui.selectedDate["timeto"],
            pagination:{
                page: page_nbr,
                quantity:historyList_ui.nbrRows
            }
        };
        SSAPI.SUBMIT({
            uri:"/Emp/getAllOwnHistory",
            data:data,
            onsuccess:"AllEmpHistoryReceive",
            onerror:"AllEmpHistoryReceive_error",
        });

        console.log(data,"data from history");
    }
    GET_HISTORY(){
        var name = $("[dati-id=searchBarEmpHistoryList]").find("[dati-id=empHistoryList_search_byname]").val();
        var action = $("[dati-id=searchBarEmpHistoryList]").find("[dati-id=empHistoryList_search_byAction]").val();
        if (name!=""){
            this.GET_EMPHISTORY_BY_EMP_NAME(name,false);
        }else if (action!=""){
            this.GET_EMPHISTORY_BY_ACTION(action,false);
        }else {
            this.GET_ALL_EMP_HISTORY();
        }
    }
    GET_ALL_EMP_HISTORY2(){
        var page_nbr = 0;
        historyList_ui.lastSearchBy="";
        $("[DATI-ID=EmphistoryList]").attr("header_created",true);
        dati_table.init("EmphistoryList");
        var data ={
            begin_date:historyList_ui.selectedDate["datefrom"],
            end_date:historyList_ui.selectedDate["dateto"],
            begin_time:historyList_ui.selectedDate["timefrom"],
            end_time:historyList_ui.selectedDate["timeto"],
            pagination:{
                page: page_nbr,
                quantity:historyList_ui.nbrRows
            }
        };
        SSAPI.SUBMIT({
            uri:"/Emp/getAllOwnHistory",
            data:data,
            onsuccess:"AllEmpHistoryReceive",
            onerror:"AllEmpHistoryReceive_error",
        })
    }
    GET_EMPHISTORY_BY_EMP_NAME(val,page){
        historyList_ui.lastSearchBy="empName";
        if(page){
            var page_nbr = 0;
            try {
                var page_nbr = $(document.querySelectorAll("[dati-id=pagination_empHistoryList]")[0]).find("[dati_composent=PAGES]").val();
                if(!page_nbr){
                    page_nbr = 0;
                }
            }catch (e) {
                page_nbr = 0
            }
        }else {
            page_nbr = 0;
        }

        var data ={
            name:val,
            begin_date:historyList_ui.selectedDate["datefrom"],
            end_date:historyList_ui.selectedDate["dateto"],
            begin_time:historyList_ui.selectedDate["timefrom"],
            end_time:historyList_ui.selectedDate["timeto"],
            pagination:{
                page: page_nbr,
                quantity:historyList_ui.nbrRows
            }
        };

        SSAPI.SUBMIT({
            uri:"/Emp/getAllHistoryByName",
            onsuccess:"getAllHistoryByNameReceive",
            onerror:"getAllHistoryByNameReceive_error",
            data:data
        });

        console.log(data,"from history by name")
    }
    GET_EMPHISTORY_BY_ACTION(val,page){
        historyList_ui.lastSearchBy="action";
        if(page){
            var page_nbr = 0;
            try {
                var page_nbr = $(document.querySelectorAll("[dati-id=pagination_empHistoryList]")[0]).find("[dati_composent=PAGES]").val();
                if(!page_nbr){
                    page_nbr = 0;
                }
            }catch (e) {
                page_nbr = 0
            }
        }else {
            page_nbr = 0;
        }

        var data ={
            action:val,
            begin_date:historyList_ui.selectedDate["datefrom"],
            end_date:historyList_ui.selectedDate["dateto"],
            begin_time:historyList_ui.selectedDate["timefrom"],
            end_time:historyList_ui.selectedDate["timeto"],
            pagination:{
                page: page_nbr,
                quantity:historyList_ui.nbrRows
            }
        };

        SSAPI.SUBMIT({
            uri:"/Emp/getAllHistoryByAction",
            onsuccess:"getAllHistoryByActionReceive",
            onerror:"getAllHistoryByActionReceive_error",
            data:data
        })
        console.log(data,"from history by action")
    }

    EVENTS_UI(){

        $(document).on('keyup','[DATI-ID=empHistoryList_search_byname]',function(){
                historyList_ui.lastSearchBy="empName";
                var val = $(this).val();
                console.log(val,"zzzzaaaaaaa");
                if(val.length > 1){
                    $("[DATI-ID=EmphistoryList]").attr("header_created",true);
                    dati_table.init("EmphistoryList");
                    iHistory.GET_EMPHISTORY_BY_EMP_NAME(val,false);
                }else if(val.length < 1){
                    historyList_ui.lastSearchBy="";
                    $("[DATI-ID=EmphistoryList]").attr("header_created",true);
                    dati_table.init("EmphistoryList");
                    iHistory.GET_ALL_EMP_HISTORY();
                }
            });
        $(document).on('change','[DATI-ID=empHistoryList_search_byAction]',function(){
            var val = $(this).val();
            console.log(val,"vaaaaaaaaaaaaaal");
            switch (val) {
                case "C":
                    historyList_ui.lastSearchBy="action";
                    $("[DATI-ID=EmphistoryList]").attr("header_created",true);
                    dati_table.init("EmphistoryList");
                    iHistory.GET_EMPHISTORY_BY_ACTION("C",false);
                    break;
                case "D":
                    historyList_ui.lastSearchBy == "action"
                    $("[DATI-ID=EmphistoryList]").attr("header_created",true);
                    dati_table.init("EmphistoryList");
                    iHistory.GET_EMPHISTORY_BY_ACTION("D",false);
                    break;
                case "U":
                    historyList_ui.lastSearchBy == "action";
                    $("[DATI-ID=EmphistoryList]").attr("header_created",true);
                    dati_table.init("EmphistoryList");
                    iHistory.GET_EMPHISTORY_BY_ACTION("U",false);
                    break;
                case "S":
                    historyList_ui.lastSearchBy == "action";
                    $("[DATI-ID=EmphistoryList]").attr("header_created",true);
                    dati_table.init("EmphistoryList");
                    iHistory.GET_EMPHISTORY_BY_ACTION("S",false);
                    break;
                case "OC":
                    historyList_ui.lastSearchBy == "action";
                    $("[DATI-ID=EmphistoryList]").attr("header_created",true);
                    dati_table.init("EmphistoryList");
                    iHistory.GET_EMPHISTORY_BY_ACTION("OC",false);
                    break;
                case "OP":
                    historyList_ui.lastSearchBy == "action";
                    $("[DATI-ID=EmphistoryList]").attr("header_created",true);
                    dati_table.init("EmphistoryList");
                    iHistory.GET_EMPHISTORY_BY_ACTION("OP",false);
                    break;
                case "OD":
                    historyList_ui.lastSearchBy == "action";
                    $("[DATI-ID=EmphistoryList]").attr("header_created",true);
                    dati_table.init("EmphistoryList");
                    iHistory.GET_EMPHISTORY_BY_ACTION("OD",false);
                    break;
                case "OR":
                    historyList_ui.lastSearchBy == "action";
                    $("[DATI-ID=EmphistoryList]").attr("header_created",true);
                    dati_table.init("EmphistoryList");
                    iHistory.GET_EMPHISTORY_BY_ACTION("OR",false);
                    break;
                case "RC":
                    historyList_ui.lastSearchBy == "action";
                    $("[DATI-ID=EmphistoryList]").attr("header_created",true);
                    dati_table.init("EmphistoryList");
                    iHistory.GET_EMPHISTORY_BY_ACTION("RC",false);
                    break;
                case "RR":
                    historyList_ui.lastSearchBy == "action";
                    $("[DATI-ID=EmphistoryList]").attr("header_created",true);
                    dati_table.init("EmphistoryList");
                    iHistory.GET_EMPHISTORY_BY_ACTION("RR",false);
                    break;
                case "E":
                    historyList_ui.lastSearchBy == "action";
                    $("[DATI-ID=EmphistoryList]").attr("header_created",true);
                    dati_table.init("EmphistoryList");
                    iHistory.GET_EMPHISTORY_BY_ACTION("E",false);
                    break;
                case "Di":
                    historyList_ui.lastSearchBy == "action";
                    $("[DATI-ID=EmphistoryList]").attr("header_created",true);
                    dati_table.init("EmphistoryList");
                    iHistory.GET_EMPHISTORY_BY_ACTION("Di",false);
                    break;
                default:
                    historyList_ui.lastSearchBy="";
                    $("[DATI-ID=EmphistoryList]").attr("header_created",true);
                    dati_table.init("EmphistoryList");
                    iHistory.GET_ALL_EMP_HISTORY();
                    break;
            }
        });

        document.addEventListener("SHOW_PAGE", function(e){
            var page = e.detail.pageLink;

            if(page == "history"){
                // CALL SSAPI  DEVICE GET LIST
                // event success ListDevicesReceive
                historyList_ui.lastSearchBy = "";
                dati_table.init("EmphistoryList");
                var event1 = new CustomEvent("HistoryEmpListPageReady");
                document.dispatchEvent(event1);
                var event = new CustomEvent("GetDateTimePickerHistoryEmp");
                document.dispatchEvent(event);
                $("[DATI-ID=searchBarEmpHistoryList] [DATI-ID=empHistoryList_search_byname]").css("display","inline-block");
                $("[DATI-ID=searchBarEmpHistoryList] [DATI-ID=empHistoryList_search_byAction]").css("display","none");
                iHistory.GET_ALL_EMP_HISTORY();
                dati_searchBar.UPDATE("searchBarEmpHistoryList");

            }
        }, false);
    }


    EVENTS_SSAPI(){
        document.addEventListener("AllEmpHistoryReceive", function(e){
            historyList_ui.DATALIST(e.detail.res);

            $("[DATI-ID=pagination_empHistoryList]").attr("DATI-NBR-ROW",historyList_ui.nbrRows);
            $("[DATI-ID=pagination_empHistoryList]").attr("DATI-TOTAL-PAGE",historyList_ui.total);
            dati_pagination.UPDATE("pagination_empHistoryList");
        }, false);

        document.addEventListener("AllEmpHistoryReceive_error", function(e){
            console.log(e.detail)
        }, false);


        document.addEventListener("getAllHistoryByNameReceive", function(e){
            try {
                historyList_ui.totalS = e.detail.res[0].count1;
                historyList_ui.nbrRowsS = e.detail.res[0].quantity1;
                $("[DATI-ID=pagination_empHistoryList]").attr("DATI-NBR-ROW",historyList_ui.nbrRowsS);
                $("[DATI-ID=pagination_empHistoryList]").attr("DATI-TOTAL-PAGE",historyList_ui.totalS);
                dati_pagination.UPDATE("pagination_empHistoryList");
            }catch (e) {
                $("[DATI-ID=pagination_empHistoryList]").attr("DATI-NBR-ROW",0);
                $("[DATI-ID=pagination_empHistoryList]").attr("DATI-TOTAL-PAGE",0);
                dati_pagination.UPDATE("pagination_empHistoryList");
            }

            var event = new CustomEvent("getAllHistoryByNameReceiveEvent", { detail: {list : e.detail.res} });
            document.dispatchEvent(event);
        }, false);

        document.addEventListener("getAllHistoryByNameReceiveEvent", function(e){
            historyList_ui.RESEARCH_BY_EMP_NAME(e.detail.list);
            console.log(e.detail.list,"maryoumyeeeet");
        }, false);

        document.addEventListener("getAllHistoryByNameReceive_error", function(e){
            console.log(e.detail)
        }, false);


        document.addEventListener("getAllHistoryByActionReceive", function(e){
            try {
                historyList_ui.totalS = e.detail.res[0].count1;
                historyList_ui.nbrRowsS = e.detail.res[0].quantity1;
            }catch (e) {

            }
            $("[DATI-ID=pagination_empHistoryList]").attr("DATI-NBR-ROW",historyList_ui.nbrRowsS);
            $("[DATI-ID=pagination_empHistoryList]").attr("DATI-TOTAL-PAGE",historyList_ui.totalS);
            dati_pagination.UPDATE("pagination_empHistoryList");
            var event = new CustomEvent("getAllHistoryByActionReceiveEvent", { detail: {list : e.detail.res} });
            document.dispatchEvent(event);
        }, false);

        document.addEventListener("getAllHistoryByActionReceiveEvent", function(e){
            historyList_ui.RESEARCH_BY_ACTION(e.detail.list);
            console.log(e.detail.list,"maryoumyeeeet");
        }, false);

        document.addEventListener("getAllHistoryByActionReceive_error", function(e){
            console.log(e.detail)
        }, false);
    }
}

let iHistory = new imp_History();