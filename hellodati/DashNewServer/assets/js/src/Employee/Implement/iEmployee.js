class imp_Employee{
    constructor() {
       this.EVENTS_UI();
       this.EVENTS_SSAPI();
    }

    DELETE_EMPLOYEE(id){
        SSAPI.SUBMIT({
            uri:"/Emp/delete",
            onsuccess:"EmployeeDeleted",
            onerror:"EmployeeDeleted_error",
            data:{
                emp_id:id
            }
        })
    }
    GET_ALL_EMPLOYEES2(){
        var page_nbr = 0;
        employeeList_ui.lastSearchBy="";
        $("[DATI-ID=employeeList]").attr("header_created",true);
        dati_table.init("employeeList");
        SSAPI.SUBMIT({
            uri:"/Emp/getAllEmps",
            data:{
                pagination:{
                    page: page_nbr,
                    quantity:employeeList_ui.nbrRows
                }
            },
            onsuccess:"ListEmployeesReceive",
            onerror:"ListEmployeesReceive_error"
        })
    }
    GET_ALL_EMPLOYEES(){
        var page_nbr = 0;
        try {
            var page_nbr = $(document.querySelectorAll("[dati-id=pagination_employeeList]")[0]).find("[dati_composent=PAGES]").val();
            if(!page_nbr){
                page_nbr = 0;
            }
        }catch (e) {
            page_nbr = 0
        }

        if(employeeList_ui.lastSearchBy != ""){
            if(employeeList_ui.lastSearchBy == "emp"){
                this.GET_EMPLOYEES_BY_NAME($("[DATI-ID=listemployees_search_byname]").val(),true);
            }
            if(employeeList_ui.lastSearchBy == "cin"){
                this.GET_EMPLOYEES_BY_NAME($("[DATI-ID=listemployees_search_byname]").val(),true);
            }


            return false;
        }
        SSAPI.SUBMIT({
            uri:"/Emp/getAllEmps",
            data:{
                pagination:{
                    page: page_nbr,
                    quantity:employeeList_ui.nbrRows
                }
            },
            onsuccess:"ListEmployeesReceive",
            onerror:"ListEmployeesReceive_error"
        })
    }

    GET_EMPLOYEES_BY_NAME(val,page){
        employeeList_ui.lastSearchBy="emp";
        if(page){
            var page_nbr = 0;
            try {
                var page_nbr = $(document.querySelectorAll("[dati-id=pagination_employeeList]")[0]).find("[dati_composent=PAGES]").val();
                if(!page_nbr){
                    page_nbr = 0;
                }
            }catch (e) {
                page_nbr = 0
            }
        }else{
            page_nbr = 0;
        }
        SSAPI.SUBMIT({
            uri:"/Emp/getByName",
            onsuccess:"ResearchEmployeessByNameReceive",
            data:{
                name:val,
                pagination:{
                    page: page_nbr,
                    quantity:employeeList_ui.nbrRowsS
                }
            }
        })
    }
    GET_EMPLOYEES_BY_CIN(val,page){
        employeeList_ui.lastSearchBy="cin";
        if(page){
            var page_nbr = 0;
            try {
                var page_nbr = $(document.querySelectorAll("[dati-id=pagination_employeeList]")[0]).find("[dati_composent=PAGES]").val();
                if(!page_nbr){
                    page_nbr = 0;
                }
            }catch (e) {
                page_nbr = 0
            }
        }else{
            page_nbr = 0;
        }
        SSAPI.SUBMIT({
            uri:"/Emp/getByCIN",
            onsuccess:"ResearchEmployeessByCinReceive",
            data:{
                cin:val,
                pagination:{
                    page: page_nbr,
                    quantity:employeeList_ui.nbrRowsS
                }
            }
        })
    }
    UPDATE_USERNAME(username,user_id){
        SSAPI.SUBMIT({
            uri:"/Emp/update_username",
            onsuccess:"empUserNameUpdated",
            onerror:"empUserNameUpdated_error",
            data:{
                username:username,
                user_id:user_id
            }
        })
    }
    UPDATE_EMAIL(email,user_id){
        SSAPI.SUBMIT({
            uri:"/Emp/update_email",
            onsuccess:"empEmailUpdated",
            onerror:"empEmailUpdated_error",
            data:{
                email:email,
                user_id:user_id
            }
        })
    }
    UPDATE_PASSWORD(password,user_id){
        SSAPI.SUBMIT({
            uri:"/Emp/update_password",
            onsuccess:"empPasswordUpdated",
            onerror:"empPasswordUpdated_error",
            data:{
                password:password,
                user_id:user_id
            }
        })
    }
    UPDATE_PRIV(priv,user_id){
        console.log(priv,"priiiiiiii",user_id);
        SSAPI.SUBMIT({
            uri:"/Emp/update_priv",
            onsuccess:"empPrivilegeUpdated",
            onerror:"empPrivilegeUpdated_error",
            data:{
                privilege:priv,
                user_id:user_id
            }
        })
    }
    UPDATE_PERSONAL_INFO(user_id,country_id,prefix,name,cin,dateOfBirth,phone){
        SSAPI.SUBMIT({
            uri:"/Emp/update_perso_info",
            onsuccess:"empPersonalInfoUpdated",
            onerror:"empPersonalInfoUpdated_error",
            data:{
                country_id:country_id,
                user_id:user_id,
                prefix:prefix,
                name:name,
                cin:cin,
                date_of_birth:dateOfBirth,
                phone_number:phone
            }
        });
    }

    EVENTS_UI(){

        $(document).on('keyup','[DATI-ID=listemployees_search_byname]',function(){
            employeeList_ui.lastSearchBy="emp";
            var val = $(this).val();

                if(val.length > 1){
                    $("[DATI-ID=employeeList]").attr("header_created",true);
                    dati_table.init("employeeList");
                    iEmployee.GET_EMPLOYEES_BY_NAME(val,false);
                }else if(val.length < 1){
                    employeeList_ui.lastSearchBy="";
                    $("[DATI-ID=employeeList]").attr("header_created",true);
                    dati_table.init("employeeList");
                    iEmployee.GET_ALL_EMPLOYEES();
                }

        });
        $(document).on('keyup','[DATI-ID=listemployees_search_byIdentity]',function(){
            employeeList_ui.lastSearchBy="cin";
            var val = $(this).val();

            if(val.length > 0){
                $("[DATI-ID=employeeList]").attr("header_created",true);
                dati_table.init("employeeList");
                iEmployee.GET_EMPLOYEES_BY_CIN(val,false);
            }else if(val.length < 1){
                employeeList_ui.lastSearchBy="";
                $("[DATI-ID=employeeList]").attr("header_created",true);
                dati_table.init("employeeList");
                iEmployee.GET_ALL_EMPLOYEES();
            }
        });
        document.addEventListener("SHOW_PAGE", function(e){
            var page = e.detail.pageLink;
            if(page == "DetailEmployee"){
                employeeList_ui.fillPageDetail();

            }

            if (page =="AddEmployee"){
                dati_table_previlege.UPDATE("previlegeList");
            }
            if (page != "AddEmployee"){
                dati_add_employee.msgErreurAddEmp = [];
                dati_Erreurs.UPDATE("AddEmpErreurs");
            }

            if(page == "EditEmployee"){
                employeeList_ui.fillPageEditEmployee();
                $("[DATI-PAGE=EditEmployee] [BTN-PI]").css("background-color","#111f35");
                $("[DATI-PAGE=EditEmployee] [BTN-PI]").css("color","#ffffff");
                dati_table_previlege.UPDATE("previlegeUpdateList");
            }else {
                dati_edit_employee.RESET_FORM_UPDATE_EMP();
            }
            if(page == "ListEmployees"){
                employeeList_ui.lastSearchBy = "";
                //$("[DATI-ID=guestList]").attr("header_created",false);
                dati_table.init("employeeList");
                var event1 = new CustomEvent("EmployeeListPageReady");
                document.dispatchEvent(event1);
                // CALL SSAPI  DEVICE GET LIST
                // event success ListDevicesReceive
                $("[DATI-ID=searchBarEmployeeList] [DATI-ID=listemployees_search_byname]").css("display","inline-block");
                $("[DATI-ID=searchBarEmployeeList] [DATI-ID=listemployees_search_byIdentity]").css("display","none");
                var event = new CustomEvent("showAlerteDeleteEmployee");
                document.dispatchEvent(event);
                iEmployee.GET_ALL_EMPLOYEES();
                dati_searchBar.UPDATE("searchBarEmployeeList");
            }
         }, false);
    }


    EVENTS_SSAPI(){
        document.addEventListener("DefaultPrivReceive", function (e) {

            dati_table_previlege.DATALIST(e.detail.res);
            dati_table_previlege.UPDATE("previlegeList");

        }, false);
        document.addEventListener("ListEmployeesReceive", function(e){
            employeeList_ui.DATALIST(e.detail);
            employeeList_ui.INIT_dataTable_Employee();
            $("[DATI-ID=pagination_employeeList]").attr("DATI-NBR-ROW",employeeList_ui.nbrRows);
            $("[DATI-ID=pagination_employeeList]").attr("DATI-TOTAL-PAGE",employeeList_ui.total);
            dati_pagination.UPDATE("pagination_employeeList");
         }, false);
        document.addEventListener("ListEmployeesReceive_error", function(e){
            console.log(e.detail,"error get emp");
         }, false);
        document.addEventListener("EmpAdded", function(e){

            dati_add_employee.RESET_FORM_ADD_EMPLOYEE();
            dati_add_guest.SHOW_POPUP_SUCCESS();
        }, false);
        document.addEventListener("EmpAdded_error", function(e){
            console.log(e.detail,"error add emp");
            dati_add_guest.SHOW_POPUP_ERROR();
        }, false);
        document.addEventListener("EmployeeUpdated", function(e){

            dati_add_guest.SHOW_POPUP_SUCCESS();
        }, false);
        document.addEventListener("EmployeeUpdated_error", function(e){
                console.log(e.detail);
            dati_add_guest.SHOW_POPUP_ERROR()
        }, false);
        document.addEventListener("EmployeeDeleted", function(e){
            employeeList_ui.DELETE_ID_FROM_DATATABLE(e.detail.res[0]);
        }, false);
        document.addEventListener("EmployeeDeleted_error", function(e){

        }, false);
        document.addEventListener("ResearchEmployeessByNameReceive", function(e){
            employeeList_ui.INIT_dataTable_Employee();
            try {
                employeeList_ui.totalS = e.detail.res[0].count1;
                employeeList_ui.nbrRowsS = e.detail.res[0].quantity1;
                $("[DATI-ID=pagination_employeeList]").attr("DATI-NBR-ROW",employeeList_ui.nbrRowsS);
                $("[DATI-ID=pagination_employeeList]").attr("DATI-TOTAL-PAGE",employeeList_ui.totalS);
                dati_pagination.UPDATE("pagination_employeeList");
            }catch (e) {
                $("[DATI-ID=pagination_employeeList]").attr("DATI-NBR-ROW",0);
                $("[DATI-ID=pagination_employeeList]").attr("DATI-TOTAL-PAGE",0);
                dati_pagination.UPDATE("pagination_employeeList");
            }


            var event = new CustomEvent("searchEmpByNameEvent", { detail: {list : e.detail.res} });
            document.dispatchEvent(event);


        }, false);
        document.addEventListener("searchEmpByNameEvent", function(e){
            employeeList_ui.SEARCH_BY_NAME(e.detail.list);
            console.log(e.detail.list,"maryoumyeeeet");


        }, false);
        document.addEventListener("ResearchEmployeessByCinReceive", function(e){
            employeeList_ui.INIT_dataTable_Employee();
            try {
                employeeList_ui.totalS = e.detail.res[0].count1;
                employeeList_ui.nbrRowsS = e.detail.res[0].quantity1;
                $("[DATI-ID=pagination_employeeList]").attr("DATI-NBR-ROW",employeeList_ui.nbrRowsS);
                $("[DATI-ID=pagination_employeeList]").attr("DATI-TOTAL-PAGE",employeeList_ui.totalS);
                dati_pagination.UPDATE("pagination_employeeList");
            }catch (e) {
                $("[DATI-ID=pagination_employeeList]").attr("DATI-NBR-ROW",0);
                $("[DATI-ID=pagination_employeeList]").attr("DATI-TOTAL-PAGE",0);
                dati_pagination.UPDATE("pagination_employeeList");
            }



            var event = new CustomEvent("searchEmpByCinEvent", { detail: {list : e.detail.res} });
            document.dispatchEvent(event);


        }, false);
        document.addEventListener("searchEmpByCinEvent", function(e){
            employeeList_ui.SEARCH_BY_CIN(e.detail.list);
            console.log(e.detail.list,"maryoumyeeeet");


        }, false);
        //**********************************Update UserName********************************************
        document.addEventListener("empUserNameUpdated", function(e){
            dati_add_guest.SHOW_POPUP_SUCCESS();
        }, false);
        document.addEventListener("empUserNameUpdated_error", function(e){
            dati_add_guest.SHOW_POPUP_ERROR();
        }, false)
        //**********************************Update Email********************************************
        document.addEventListener("empEmailUpdated", function(e){
            dati_add_guest.SHOW_POPUP_SUCCESS();
        }, false);
        document.addEventListener("empEmailUpdated_error", function(e){
            dati_add_guest.SHOW_POPUP_ERROR();
        }, false);
        //**********************************Update Password********************************************
        document.addEventListener("empPasswordUpdated", function(e){
            dati_add_guest.SHOW_POPUP_SUCCESS();
        }, false);
        document.addEventListener("empPasswordUpdated_error", function(e){
            dati_add_guest.SHOW_POPUP_ERROR();
        }, false);
        //**********************************Update Password********************************************
        document.addEventListener("empPrivilegeUpdated", function(e){
            dati_add_guest.SHOW_POPUP_SUCCESS();
        }, false);
        document.addEventListener("empPrivilegeUpdated_error", function(e){
            dati_add_guest.SHOW_POPUP_ERROR();
        }, false);
    }
}

let iEmployee = new imp_Employee();