<div DATI-PAGE="HistoryEmpolyeeDati" style="display:none" class="container_emp_dati">

 <dati-HeaderNavigation   class="header_employee"  ID="HeaderEmployeeHistory" UPDATE="showHeaderEmployeeHistory" LIST="employee_ui.HeaderList" ></dati-HeaderNavigation >


    <div class="emp_history_container">



    <table class="dataTableStyle"
           DATI-COMPOSENT="dataTable"
           DATI-LIST="employee_ui.HistoryList"
           DATI-ID="EmphistoryList"
           DATI-UPDATE="AllEmpHistoryReceive"
           DATI-TD-STYLE="text-align:center">


        <tr DATI-COMPOSENT="datatable_header">
            <th DATI-ATTR="date" align="center" >DATE</th>
            <th DATI-ATTR="employee_name" align="center" >EMPLOYEE NAME</th>
            <th DATI-ATTR="action" align="center">ACTION</th>
            <th DATI-ATTR="action_detail" align="center" >ACTION DETAIL</th>

        </tr>
    </table>

    </div>












</div>