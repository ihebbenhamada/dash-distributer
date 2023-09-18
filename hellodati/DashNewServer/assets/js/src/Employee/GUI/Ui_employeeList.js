let Ui_employeeList = class {
    constructor() {
        this.total = 0;
        this.selectedEmployee=null;
        this.nbrRows=10;
        this.totalS = 0;
        this.nbrRowsS=10;
        this.lastSearchBy ="";
        $("[DATI-ID=pagination_employeeList]").attr("DATI-NBR-ROW",this.nbrRows);
        this.filterBy={
            "Name" : 1,
            "Identity" : 2,
        };
        $(document).on('change','[DATI-ID=searchBarEmployeeList] [DATI-ID=listEmployees_filter_by]',function(){
            var filterSelected = $(this).val();
            console.log(filterSelected);

            switch (filterSelected) {
                case "1" :
                    iEmployee.GET_ALL_EMPLOYEES2();
                    $("[DATI-ID=searchBarEmployeeList] [dati-composent=input]").css("display","none");
                    $("[DATI-ID=searchBarEmployeeList] [dati-composent=input]").val("");
                    $("[DATI-ID=searchBarEmployeeList] [DATI-ID=listEmployees_filter_by]").val(filterSelected);
                    $("[DATI-ID=searchBarEmployeeList] [DATI-ID=listEmployees_filter_by]").css("display","inline-block");
                    $("[DATI-ID=searchBarEmployeeList] [DATI-ID=listemployees_search_byname]").css("display","inline-block");
                    break;
                case "2" :
                    iEmployee.GET_ALL_EMPLOYEES2();
                    $("[DATI-ID=searchBarEmployeeList] [dati-composent=input]").css("display","none");
                    $("[DATI-ID=searchBarEmployeeList] [dati-composent=input]").val("");
                    $("[DATI-ID=searchBarEmployeeList] [DATI-ID=listEmployees_filter_by]").val(filterSelected);
                    $("[DATI-ID=searchBarEmployeeList] [DATI-ID=listEmployees_filter_by]").css("display","inline-block");
                    $("[DATI-ID=searchBarEmployeeList] [DATI-ID=listemployees_search_byIdentity]").css("display","inline-block");
                    break;
            }
        });
    }

    DATALIST(data){
        this.employees = data.res;
        //dati_table.UPDATE("employeeList");
        this.total = data.res[0].count1;
        this.nbrRows = data.res[0].quantity1;
    }

    INIT_dataTable_Employee(){
        var action = '<tr DATI-COMPOSENT="datatable-icon-detail" DATI-LINK="DetailEmployee"\n' +
            '            onclick="employeeList_ui.setSelected(this)"></tr>\n' +
            '        <tr DATI-COMPOSENT="datatable-icon-edit"\n' +
            '            onclick="employeeList_ui.setSelected(this)"></tr>\n' +
            '        <tr DATI-COMPOSENT="datatable-icon-delete" onclick="employeeList_ui.DELETE(this)"></tr>';
        $("[DATI-ID=employeeList]").append(action);
    }
    SEARCH_BY_NAME(data){

        employeeList_ui.employees=data;
        dati_table.UPDATE("employeeList");

    }

    SEARCH_BY_CIN(data){

        employeeList_ui.employees=data;
        dati_table.UPDATE("employeeList");

    }


    GET_COUNTRY_NAME(attribute){
        if(attribute !=null){
            return attribute;
        }else {
            return "-";
        }

    }
    GET_HTML_Edit(id){
        if(id != null && id != 'null' && id != ''){
            return '<i title="Edit" style="cursor: pointer;padding: 5px;" DATI-TD-STYLE="text-align:center" DATI-LINK="EditEmployee" DATI-PATH="Employees &nbsp&nbsp&nbsp > &nbsp&nbsp&nbsp List &nbsp&nbsp&nbsp > &nbsp&nbsp&nbsp Edit Form" onclick="employeeList_ui.setSelected(this)" class="fas fa-pencil-alt fa-lg"></i>';
        }else{
            return "";
        }
    }
    GET_HTML_Delete(id){
        if(id != null && id != 'null' && id != ''){
            return '<i title="Delete" style="cursor: pointer;padding: 5px" DATI-TD-STYLE="text-align:right" onclick="employeeList_ui.DELETE(this)" class="far fa-trash-alt fa-lg"></i>';
        }else{
            return "";
        }
    }
    GET_HTML_Plus(id){
        if(id != null && id != 'null' && id != ''){
            return '<i title="Details" style="cursor: pointer;padding: 5px" DATI-TD-STYLE="text-align:right" DATI-LINK="DetailEmployee" onclick="employeeList_ui.setSelected(this)" class="fas fa-ellipsis-v fa-lg"></i>';
        }else{
            return "";
        }
    }
    TOGGEL_ALERTE(){
        $("[DATI-PAGE=ListEmployees]").find("[dati-id=EmployeeDeleteAlerte]").find("[class=overlay_restau]").css("display", "block");
    }

    CANCEL_ALERTE(){
        $("[DATI-PAGE=ListEmployees]").find("[dati-id=EmployeeDeleteAlerte]").find("[class=overlay_restau]").css("display", "none");
    }

    VALIDATE_ALERTE(){
        var id_employee = this.selectedEmployee.id;

        iEmployee.DELETE_EMPLOYEE(id_employee);

    }
    DELETE_NAME(){
        var fName = this.selectedEmployee.name;

        fName = fName.toUpperCase();
        $("[DATI-ID=delete-item-name]").html("Are you sure to delete employee "+fName);
    }
    DELETE(rest_element){
        this.setSelected(rest_element);
        this.TOGGEL_ALERTE();
        this.DELETE_NAME();
    }

    GET_POSITION_IN_TAB(list,id){
        for(var i=0; i<list.length;i++){
            if(list[i].id == id){
                return i;
            }
        }
        return -1;
    }

    DELETE_ID_FROM_DATATABLE(id){
        var pos = employeeList_ui.GET_POSITION_IN_TAB(employeeList_ui.employees,id);
        if(pos != -1){
            employeeList_ui.employees.splice(pos, 1);
        }
        dati_table.UPDATE("employeeList");
        employeeList_ui.CANCEL_ALERTE();
    }

    fillPageDetail(){
        $("[DATI-ID=employee_name]").html(this.selectedEmployee.name);
        $("[DATI-ID=email_employee]").html(this.selectedEmployee.User.email);
        $("[DATI-ID=date_of_birth_employee]").html(this.selectedEmployee.date_of_birth);
        $("[DATI-ID=phone_number_employee]").html(this.selectedEmployee.phone_number);
        $("[DATI-ID=cin_employee]").html(this.selectedEmployee.cin);
        $("[DATI-ID=country_employee]").html(this.selectedEmployee.Country.name);

    }

    fillPageEditEmployee(){
        $("[DATI-INPUT-NAME=employee_prefix_edit]").val(this.selectedEmployee.prefix);
        $("[DATI-INPUT-NAME=employee_name_edit]").val(this.selectedEmployee.name);
        $("[DATI-INPUT-NAME=date_of_birth_employee_edit]").val(this.selectedEmployee.date_of_birth);
        $("[DATI-INPUT-NAME=phone_number_employee_edit]").val(this.selectedEmployee.phone_number);
        $("[DATI-INPUT-NAME=cin_employee_edit]").val(this.selectedEmployee.cin);
        $("[DATI-INPUT-NAME=country_employee_edit]").val(this.selectedEmployee.Country.id);
    }
    setSelected(iconDetail){
        var i = $(iconDetail).parent().parent().attr("DATI-ROW");
        this.selectedEmployee = this.employees[i];
    }
};

let employeeList_ui = new Ui_employeeList();