<div DATI-PAGE="EditEmpolyeeDati" style="display:none" class="container_emp_dati">

<div class="header_employee_update">

<div class="item_header" DATI-FIELDSET-BUTTON="Personel" style="background-color:#111f35;color: #fff;">

<div style="margin-left: 5px;">Personal informations</div>
</div>


<div class="item_header" DATI-FIELDSET-BUTTON="Security">

<div style="margin-left: 5px;">Security informations</div>
</div>


<div class="item_header" DATI-FIELDSET-BUTTON="Authorisation">

<div style="margin-left: 5px;">Authorisation informations</div>
</div>


</div>



    <div class="emp_edit_container">







<div class="forms_container">
<fieldset class="info_personnel_update " style="display:inline-block" DATI-FIELDSET="Personel">
        <legend> Personal informations: </legend>
         <span style="background-image: url(https://apitndati.com/assets/HOTEL39/j2NEUTskkcHhtCDJp6bHiaJRBBPbjnoKp7Su4n0yL5xzFfMVBDAjdD48u39LAEtD3681IFCPO4PuRwfeLUwZ5C4cx0shHUK0EIm7)"></span>
<div class="body_form_add_emp">

        <div>
            <label>FirstName</label>
            <input placeholder="FirstName">
        </div>
        <div >
            <label>lastName</label>
            <input placeholder="lastName">
        </div>




        <div>
            <label>Job  </label>
            <input placeholder="Job">
        </div>



        <div>
            <label>CIN </label>
            <input placeholder="Cin">
        </div>
         <div>
             <label>Date of Birth </label>
             <input placeholder="Date of Birth">
         </div>
              <div>
                      <label>Email of contact </label>
                      <input placeholder="@ contact">
                  </div>
     <div>
                      <label>Phone </label>
                      <input placeholder="Phone">
                  </div>



</div>
<div class="container_buttons">
                        <div class="button" >

       Edit

                        </div>
                        </div>
        </fieldset>

        <fieldset class="info_personnel_update"  DATI-FIELDSET="Security" style="display:none" >
                        <legend> Security informations : </legend>

       <fieldset class="info_personnel_section "   >
                        <legend> CHANGE USERNAME : </legend>
                            <div>
                            <label>New Username :</label>
                            <input placeholder="username">
                            </div>
                                                        <div >
                                                        <label>Confirm Username : </label>
                                                        <input placeholder="username">
                                                        </div>
                                                                            <button class="button" >

                                                               Edit

                                                                                </button>
                        </fieldset>
    <fieldset class="info_personnel_section "   >
                        <legend> CHANGE EMAIL : </legend>

                         <div>
                            <label>New Email :</label>
                            <input placeholder="username">
                            </div>
                                                        <div >
                                                        <label>Confirm Email : </label>
                                                        <input placeholder="username">
                                                        </div>
                                                                            <button class="button" >

                                                               Edit

                                                                                </button>


                        </fieldset>
                            <fieldset class="info_personnel_section"   >
                                                <legend> CHANGE PASSWORD : </legend>
                         <div>
                            <label>New Password :</label>
                            <input placeholder="username">
                            </div>
                                                        <div >
                                                        <label>Confirm Password : </label>
                                                        <input placeholder="username">
                                                        </div>
                                                                            <button class="button" >

                                                               Edit

                                                                                </button>
                                                </fieldset>
                        </fieldset>

                                                                                         <fieldset class="info_personnel_update "  DATI-FIELDSET="Authorisation">
                                                                                                        <legend> Authorisation informations : </legend>
                                                                                                       <table border="1" class="dataTableStyle privilegeEmp"
                                                                                                               DATI-LIST="employee_ui.Authorisation"
                                                                                                               DATI-ID="previlegeListUpdate"
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
                                                                                                        <div class="container_buttons">
                                                                                                                                <div class="button" >

                                                                                                               Edit

                                                                                                                                </div>
                                                                                                                                </div>
                                                                                             </fieldset>



</div>


    </div>












</div>