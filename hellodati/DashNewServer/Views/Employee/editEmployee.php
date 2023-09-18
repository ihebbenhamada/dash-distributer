<div class="employeeContainer" FORM-ID="form_edit_Employee" DATI-SEND="dati_edit_employee.VERIF_FORM_EDIT_EMPLOYEE"
     DATI-PAGE="EditEmployee">
    <div class="form_add" style="width: 100%;">

        <div class="header_add_form">
            <img src="assets/img/add_employee.png">
            <label style="margin-left: 5px"> Edit Employee</label>
        </div>
        <div class="add_form_container" FORM-ACTION="/Employee/Add" DATI-FORM="add-employee" style="width: 100%;display: flex !important;justify-content: space-between;">
            <div style="width: 20%;display: flex;float: left;height: 200px;flex-direction: column;align-items: center;justify-content: space-evenly">
                <div BTN-PI style="height: 40px;background-color: white;width: 90%;border-radius: 7px;display: flex;align-items: center;justify-content: center;font-size: 13px;cursor: pointer">
                    Personal Info
                </div>
                <div BTN-SI style="height: 40px;background-color: white;width: 90%;border-radius: 7px;display: flex;align-items: center;justify-content: center;font-size: 13px;cursor: pointer">
                    Security
                </div>
                <div BTN-PRIV-I style="height: 40px;background-color: white;width: 90%;border-radius: 7px;display: flex;align-items: center;justify-content: center;font-size: 13px;cursor: pointer">
                    Authorisations
                </div>
            </div>
            <div EMP-PERSONAL-INFO  style="display: inline-block;width: 75%;height: 100%;float: right;justify-content: space-between;flex-direction: column;align-items: center;">
                <div style="width:100%;display: flex;justify-content: space-between">
                    <div class="input_add_form" style="width: 45%;max-width: 45%">
                        <label>PREFIX</label>
                        <select DATI-INPUT-NAME="employee_prefix_edit" class="select">
                            <option disabled hidden value="">Prefix</option>
                            <option value="0">Mr</option>
                            <option value="1">Mrs</option>
                        </select>
                    </div>
                    <div class="input_add_form" style="width: 45%;max-width: 45%">
                        <label>NAME</label>
                        <input DATI-INPUT-NAME="employee_name_edit" type="text">
                    </div>

                </div>
                <div style="width:100%;display: flex;justify-content: space-between">
                    <div class="input_add_form" style="width: 45%;max-width: 45%">
                        <label>DATE OF BIRTH</label>
                        <input DATI-INPUT-NAME="date_of_birth_employee_edit" type="date">
                    </div>
                    <div class="input_add_form" style="width: 45%;max-width: 45%">
                        <label>PHONE NUMBER</label>
                        <input DATI-INPUT-NAME="phone_number_employee_edit" type="text">
                    </div>
                </div>
                <div style="width:100%;display: flex;justify-content: space-between">

                    <div class="input_add_form" style="width: 45%;max-width: 45%">
                        <label>CIN</label>
                        <input DATI-INPUT-NAME="cin_employee_edit" type="text">
                    </div>

                    <div class="input_add_form" style="width: 45%;max-width: 45%">
                        <label>COUNTRY</label>
                        <select DATI-INPUT-NAME="country_employee_edit" class="select">

                        </select>
                    </div>

                </div>
                <input DATI-BTN-SUBMIT="emp_change_personal_info"  type="submit" class="btn_valid" value="SAVE" style="width: 50%;max-width: 50%;margin-bottom: 20px">
            </div>
            <div EMP-SECURE-INFO style="display: none;width: 75%;height: 100%;float: right;justify-content: space-between">
                <div style="width:30%;display: flex;justify-content: space-between;flex-direction: column;float: left">
                    <fieldset style="text-align: left;margin: 10px;border-color: #d8d8d8;">
                        <legend style="font-size: 13px;">CHANGE USERNAME</legend>
                    <div class="input_add_form" style="width: 100%;max-width: 100%">
                        <label>NEW USERNAME</label>
                        <input DATI-INPUT-NAME="employee_username_edit" type="text">
                    </div>
                    <div class="input_add_form" style="width: 100%;max-width: 100%">
                        <label>CONFIRM USERNAME</label>
                        <input DATI-INPUT-NAME="employee_confirm_username_edit" type="text">
                    </div>
                        <input DATI-BTN-SUBMIT="emp_change_username" type="submit" class="btn_valid" value="SAVE" style="width: 100%;max-width: 100%;">
                    </fieldset>
                </div>
                <div style="width:30%;display: flex;justify-content: space-between;flex-direction: column;float: left">
                    <fieldset style="text-align: left;margin: 10px;border-color: #d8d8d8;">
                        <legend style="font-size: 13px;">CHANGE EMAIL</legend>
                    <div class="input_add_form" style="width: 100%;max-width: 100%">
                        <label>NEW EMAIL</label>
                        <input DATI-INPUT-NAME="employee_email_edit" type="text">
                    </div>
                    <div class="input_add_form" style="width: 100%;max-width: 100%">
                        <label>CONFIRM EMAIL</label>
                        <input DATI-INPUT-NAME="employee_confirm_email_edit" type="text">
                    </div>
                        <input DATI-BTN-SUBMIT="emp_change_email" type="submit" class="btn_valid" value="SAVE" style="width: 100%;max-width: 100%;">
                    </fieldset>
                </div>
                <div style="width:30%;display: flex;justify-content: space-between;flex-direction: column;float: left">
                    <fieldset style="text-align: left;margin: 10px;border-color: #d8d8d8;">
                        <legend style="font-size: 13px;">CHANGE PASSWORD</legend>
                    <div class="input_add_form" style="width: 100%;max-width: 100%">
                        <label>NEW PASSWORD</label>
                        <input DATI-INPUT-NAME="employee_password_edit" type="password">
                    </div>
                    <div class="input_add_form" style="width: 100%;max-width: 100%">
                        <label>CONFIRM PASSWORD</label>
                        <input DATI-INPUT-NAME="employee_confirm_password_edit" type="password">
                    </div>
                        <input DATI-BTN-SUBMIT="emp_change_password" type="submit" class="btn_valid" value="SAVE" style="width: 100%;max-width: 100%;">
                    </fieldset>
                </div>
            </div>
            <div EMP-PTIVILEGE-INFO style="display: none;width: 75%;height: 100%;float: right;">
                <div class="EmpTableContainer" style="display: inline-block;margin-top: 10px;border: none">
                    <table border="1" class="dataTableStyle privilegeEmp"
                           DATI-LIST="employeeList_ui.selectedEmployee.User.Privilege"
                           DATI-ID="previlegeUpdateList"
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
                            <th><i class="far fa-eye"></i></th>
                            <th><i class="far fa-eye-slash"></i></th>

                        </tr>


                    </table>
                    <input DATI-BTN-SUBMIT="emp_change_priv"  type="submit" class="btn_valid" value="SAVE" style="width: 50%;max-width: 50%;margin-bottom: 20px">
                </div>
            </div>
        </div>

    </div>

</div>