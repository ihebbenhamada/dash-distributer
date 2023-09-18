<div DATI-PAGE="AddEmpolyeeDati" style="display:none" class="container_emp_dati"  FORM-ID="form_add_Employee" DATI-SEND="employee_ui.FORM_ADD_Employee" >

 <dati-HeaderNavigation   class="header_employee"  ID="HeaderEmployeeAdd" UPDATE="showHeaderEmployeeAdd" LIST="employee_ui.HeaderList" ></dati-HeaderNavigation >


    <div class="emp_add_container">





<div class="form_add">
    <fieldset style="border-radius: 5px; position: relative;">
        <legend>Add New Employee : </legend>
        <div class="container_employee">
<div class="image-container">
    <span style="background-image: url(https://apitndati.com/assets/HOTEL39/j2NEUTskkcHhtCDJp6bHiaJRBBPbjnoKp7Su4n0yL5xzFfMVBDAjdD48u39LAEtD3681IFCPO4PuRwfeLUwZ5C4cx0shHUK0EIm7)"></span>
</div>
  <fieldset class="info_personnel ">
        <legend> Personal informations: </legend>
<div class="body_form_add_emp">

        <div>
            <label>FirstName</label>
            <input placeholder="FirstName" DATI-FIRST-NAME-EMPLOYEE>
        </div>
        <div >
            <label>lastName</label>
            <input placeholder="lastName" DATI-LAST-NAME-EMPLOYEE>
        </div>




        <div>
            <label>Job  </label>
            <input placeholder="Job " DATI-JOB-EMPLOYEE >
        </div>



        <div>
            <label>CIN </label>
            <input placeholder="Cin" DATI-CIN-EMPLOYEE>
        </div>
         <div>
             <label>Date of Birth </label>
             <input placeholder="Date of Birth" DATI-BD-EMPLOYEE>
         </div>



</div>
        </fieldset>
          <fieldset class="info_personnel info_personnel_two">
                <legend> Security informations : </legend>
        <div class="body_form_add_emp">

                <div>
                    <label>Username</label>
                    <input placeholder="username" DATI-USERNAME-EMPLOYEE>
                </div>
                <div >
                    <label>Email</label>
                    <input placeholder="@ email" DATI-EMAIL-EMPLOYEE>
                </div>




                <div>
                    <label>Password  </label>
                    <input placeholder="password" DATI-PASSWORD-EMPLOYEE>
                </div>




        </div>
                </fieldset>
                         <fieldset class="info_personnel info_personnel_two">
                                <legend> Contact informations : </legend>
                        <div class="body_form_add_emp">

                                <div style="width:98%;">
                                    <label>Email</label>
                                    <input placeholder="@ email" DATI-EMAILCONTACT-EMPLOYEE>
                                </div>
                                <div >
                                    <label>Phone</label>
                                    <input placeholder="Phone" DATI-PHONE-EMPLOYEE>
                                </div>








                        </div>
                                </fieldset>
                                 <fieldset class="info_personnel ">
                                                <legend> Authorisation informations : </legend>
                                               <table border="1" class="dataTableStyle privilegeEmp"
                                                       DATI-LIST="employee_ui.Authorisation"
                                                       DATI-ID="previlegeList"
                                                       DATI-UPDATE="ListPrevilegesReceive"
                                                       DATI-PRIV-ATTR="privilege"
                                                       DATI-PRIV-DETAIL-ATTR="privilege_detail"
                                                       dati-priv-fields-attr="fields">

                                                    <tr class="tableHeader" DATI-COMPOSENT="datatable_previlege_header">

                                                        <th DATI-ATTR="privilege_name" class="tableName" colspan="3">
                                                            <div>
                                                                <img src="assets/img/ui/autorisation.png">
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
                                     </fieldset>
            <div class="section_button"  >
                <button  DATI-FOR="form_add_Employee" DATI-COMPOSENT="SUBMIT">
                    <img src="/assets/img/Employee/plus.svg">
                    Add
                </button>
            </div>
        </div>
        </fieldset>









</div>




    </div>












</div>