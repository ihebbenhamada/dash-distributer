<div class="employeeContainer" FORM-ID="form_add_Employee" DATI-SEND="dati_add_employee.VERIF_FORM_ADD_EMPLOYEE"
     DATI-PAGE="AddEmployee">
    <div
            class="container_msg_erreur"
            DATI-COMPOSENT="msgErreurContainer"
            DATI-ID="AddEmpErreurs"
            DATI-UPDATE="showMsgAddEmp"
            DATI-LIST="dati_add_employee.msgErreurAddEmp"
    >
    </div>
    <div class="form_add" style="width: 100%;" >

        <div class="header_add_form">
            <img src="assets/img/add_employee.png">
            <label style="margin-left: 5px"> Add Employee</label>
        </div>
        <div class="add_form_container" FORM-ACTION="/Employee/Add" DATI-FORM="add-employee">


            <div style="width:100%;display: flex;justify-content: space-between">
                <div class="input_add_form">
                    <label style="opacity: 0">PREFIX</label>
                    <select DATI-INPUT-NAME="prefix_employee" class="select">
                        <option value="0">Mr</option>
                        <option value="1">Mrs</option>
                    </select>
                </div>
                <div class="input_add_form">
                    <label>NAME</label>
                    <input DATI-INPUT-NAME="name_employee" type="text">
                </div>
                <div class="input_add_form">
                    <label>USERNAME</label>
                    <input DATI-INPUT-NAME="user_name_employee" type="text">
                </div>

            </div>
            <div style="width:100%;display: flex;justify-content: space-between">
                <div class="input_add_form">
                    <label>EMAIL</label>
                    <input DATI-INPUT-NAME="email_employee" type="text">
                </div>
                <div class="input_add_form">
                    <label>PASSWORD</label>
                    <input DATI-INPUT-NAME="password_employee" type="password">
                </div>
                <div class="input_add_form">
                    <label>DATE OF BIRTH</label>
                    <input DATI-INPUT-NAME="date_of_birth_employee" type="date">
                </div>



            </div>
            <div style="width:100%;display: flex;justify-content: space-between">

                <div class="input_add_form">
                    <label>PHONE NUMBER</label>
                    <input DATI-INPUT-NAME="phone_number_employee" type="text">
                </div>
                <div class="input_add_form">
                    <label>CIN</label>
                    <input DATI-INPUT-NAME="cin_employee" type="text">
                </div>
                <div class="input_add_form">
                    <label>COUNTRY</label>
                    <select DATI-INPUT-NAME="country_employee" class="select">
                        <option value="15">Active</option>
                        <option value="16">Inactive</option>
                    </select>
                </div>

            </div>


        </div>

    </div>

    <div class="EmpTableContainer" style="display: inline-block">

        <table border="1" class="dataTableStyle privilegeEmp"
               DATI-LIST="dati_table_previlege.previleges"
               DATI-ID="previlegeList"
               DATI-UPDATE="ListPrevilegesReceive"
               DATI-PRIV-ATTR="privilege"
               DATI-PRIV-DETAIL-ATTR="privilege_detail"
               dati-priv-fields-attr="fields">

            <tr class="tableHeader" DATI-COMPOSENT="datatable_previlege_header">

                <th DATI-ATTR="privilege_name" class="tableName" colspan="3">
                    <div>
                        <img src="assets/img/autorisation.png">
                        <span>LIST OF AUTHORIZATIONS</span>
                    </div>
                </th>

                <th colspan="3">
                        <div style="text-align: center; margin-top: 5px; margin-bottom: 5px; display: none">
                            <i class="fas fa-pencil-alt"></i>
                        </div>
                        <div style="text-align: center;display: inline-block;width: 100%">
                            <i style="float: left;margin-left: 5px" class="fas fa-plus"></i>
                            <i class="fas fa-pencil-alt"></i>
                            <i style="float: right;margin-right: 10px" class="fas fa-trash-alt"></i>
                        </div>
                </th>
                <th ><i class="far fa-eye"></i></th>
                <th><i class="far fa-eye-slash"></i></th>

            </tr>



        </table>
    </div>
    <div class="div_btn_add">
        <input type="submit" DATI-COMPOSENT="SUBMIT" DATI-FOR="form_add_Employee" class="btn_valid" value="ADD"
               DATA-ROLE="SUBMIT"/>
    </div>


</div>


