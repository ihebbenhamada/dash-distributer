<div class="main_container" DATI-PAGE="ListEmployees">
    <div class="header_container">
        <div class="search_container"
             DATI-ID="searchBarEmployeeList"
             DATI-COMPOSENT="searchBarDatatable"
             DATI-FOR="dataTable"
             DATI-ACTION="searchEmployee"
             DATI-TITLE-SEARCH="FIND BY"
             DATI-UPDATE="EmployeeListPageReady">
            <div DATI-COMPOSENT="input"  DATI-ID="listEmployees_filter_by" DATI-OPTION="employeeList_ui.filterBy" DATI-INPUT-TYPE="select"></div>

            <div DATI-COMPOSENT="input" DATI-ID="listemployees_search_byname" DATI-INPUT-TYPE="text"
                 placeholder="Employee Name"></div>

            <div DATI-COMPOSENT="input" DATI-ID="listemployees_search_byIdentity" DATI-INPUT-TYPE="text"
                 placeholder="Identity" style="display: none"></div>

        </div>


        <div class="btn_add_header" DATI-LINK="AddEmployee" DATI-PATH="Employees &nbsp&nbsp&nbsp > &nbsp&nbsp&nbsp List &nbsp&nbsp&nbsp > &nbsp&nbsp&nbsp Add Form">
            <img style="width: 30px; height: 30px" src="assets/img/add_employee.png">
            <div class="btn_text">
                <p>Add Employee</p>
            </div>

        </div>
    </div>

    <table class="dataTableStyle"
           DATI-COMPOSENT="dataTable"
           DATI-LIST="employeeList_ui.employees"
           DATI-ID="employeeList"
           DATI-UPDATE="ListEmployeesReceive"
           DATI-TD-STYLE="text-align:center">

        <tr DATI-COMPOSENT="datatable_header">
            <th DATI-ATTR="name" align="center">EMPLOYEE NAME</th>
            <th DATI-ATTR="cin" align="center">CIN</th>
            <th DATI-ATTR="phone_number" align="center">PHONE</th>
            <th DATI-ATTR="Country.name" DATI-FN="employeeList_ui.GET_COUNTRY_NAME" align="center">COUNTRY</th>
            <th DATI-ATTR="id" DATI-FN="deviceList_ui.GET_HTML_TD" style="display: none"></th>
            <th DATI-ATTR="id" DATI-FN="deviceList_ui.GET_HTML_TD" style="display: none"></th>
            <th DATI-ATTR="id" DATI-FN="deviceList_ui.GET_HTML_TD" style="display: none"></th>

            <th DATI-ATTR="id" DATI-FN="employeeList_ui.GET_HTML_Edit" style="display: none"></th>
            <th DATI-ATTR="id" DATI-FN="employeeList_ui.GET_HTML_Delete" style="display: none"></th>
            <th DATI-ATTR="id" DATI-FN="employeeList_ui.GET_HTML_Plus" style="display: none"></th>
            <th COLSPAN="6"
                DATI-COMPOSENT="pagination"
                DATI-ID="pagination_employeeList"
                DATI-NBR-ROW=""
                DATI-UPDATE="ListEmployeesReceive"
                DATI-TOTAL-PAGE="employeeList_ui.total"
                DATI-FOR="employeeList"
                DATI-FN="iEmployee.GET_ALL_EMPLOYEES()">
            </th>
        </tr>

    </table>

    <div
            DATI-COMPOSENT="alerteContainer"
            DATI-ID="EmployeeDeleteAlerte"
            DATI-UPDATE="showAlerteDeleteEmployee"
            DATI-CANCEL="employeeList_ui.CANCEL_ALERTE()"
            DATI-VALIDATE="employeeList_ui.VALIDATE_ALERTE()"
    >
    </div>
</div>