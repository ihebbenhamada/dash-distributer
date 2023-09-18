<div class="employeeContainer" FORM-ID="form_edit_Profile" DATI-SEND="editProfile_ui.VERIF_FORM_EDIT_PROFILE"
     DATI-PAGE="EditProfile">
    <div
            class="container_msg_erreur"
            DATI-COMPOSENT="msgErreurContainer"
            DATI-ID="EditProfileErreurs"
            DATI-UPDATE="showMsgEditProfile"

    >
    </div>
    <div class="form_add" style="width: 100%;" >

        <div class="header_add_form">
            <img src="assets/img/add_employee.png">
            <label style="margin-left: 5px">Update Profile</label>
        </div>
        <div class="add_form_container"  DATI-FORM="edit_profile" style="width: 100%;display: flex !important;justify-content: space-between;">
            <div style="width: 20%;display: flex;float: left;height: 200px;flex-direction: column;align-items: center;justify-content: space-evenly">
                <div BTN-PI style="height: 40px;background-color: white;width: 90%;border-radius: 7px;display: flex;align-items: center;justify-content: center;font-size: 13px;cursor: pointer">
                    Personal Info
                </div>
                <div BTN-SI style="height: 40px;background-color: white;width: 90%;border-radius: 7px;display: flex;align-items: center;justify-content: center;font-size: 13px;cursor: pointer">
                    Security
                </div>
            </div>
            <div EMP-PERSONAL-INFO  style="display: flex;width: 80%;height: 100%;float: right;justify-content: center;">

                <div style="display: flex;flex-direction: column;align-items: center;">
                    <div style="width:100%;display: flex;justify-content: space-between">
                        <div class="input_add_form" style="width: 45%;max-width: 45%">
                            <label style="text-align: left;opacity: 0;"> Gender</label>
                            <select prefix_edit_profile class="select">
                                <option value="0">Mr</option>
                                <option value="1">Mrs</option>
                            </select>
                        </div>
                        <div class="input_add_form" style="width: 45%;max-width: 45%">
                            <label style="text-align: left;font-size: 14px;"> NAME :</label>
                            <input name_edit_profile type="text">
                        </div>

                    </div>
                    <div style="width:100%;display: flex;justify-content: space-between">
                        <div class="input_add_form" style="width: 45%;max-width: 45%">
                            <label style="text-align: left;font-size: 14px;"> DATE OF BIRTH :</label>
                            <input dateofbirth_edit_profile type="date">
                        </div>
                        <div class="input_add_form" style="width: 45%;max-width: 45%">
                            <label style="text-align: left;font-size: 14px;"> PHONE NUMBER :</label>
                            <input phone_edit_profile type="text">
                        </div>
                    </div>
                    <div style="width:100%;display: flex;justify-content: space-between">

                        <div class="input_add_form" style="width: 45%;max-width: 45%">
                            <label style="text-align: left;font-size: 14px;"> IDENTITY :</label>
                            <input identity_edit_profile type="text">
                        </div>

                        <div class="input_add_form" style="width: 45%;max-width: 45%">
                            <label style="text-align: left;font-size: 14px;"> COUNTRY :</label>
                            <select country_edit_profile DATI-INPUT-COUNTRY="AllCountry" class="select">
                            </select>
                        </div>

                    </div>
                    <input DATI-BTN-SUBMIT="profile_change_personal_info"  type="submit" class="btn_valid" value="SAVE" style="width: 50%;max-width: 50%;margin-bottom: 20px">
                </div>
                <div style="background-color: #e0e0e0;float: left;display: flex;align-items: center;justify-content: center;margin: 10px;margin-top: 6%;margin-left: 30px;height: 100%">
                    <div img_profile_user_uploader id="img_profile_edit" style="display:inline-block; border:0px solid; border-radius:8vw;width: 8vw; height:8vw; color: white;cursor: pointer; background-image: url('/assets/img/profileImage.png'); background-size: cover;" title="Click to change"></div>
                    <input  id="img_profile_edit_input" style="display:none" type="file"/>
                </div>

            </div>
            <div EMP-SECURE-INFO style="display: none;width: 80%;height: 100%;float: right;justify-content: space-between">
                <div style="width:30%;display: flex;justify-content: space-between;flex-direction: column;float: left">
                    <fieldset style="text-align: left;margin: 10px;border-color: #d8d8d8;">
                        <legend style="font-size: 13px;">CHANGE USERNAME</legend>

                        <div class="input_add_form" style="width: 100%;max-width: 100%">
                            <label>NEW USERNAME</label>
                            <input DATI-INPUT-NAME="profile_username_edit" type="text">
                        </div>
                        <div class="input_add_form" style="width: 100%;max-width: 100%">
                            <label>CONFIRM USERNAME</label>
                            <input DATI-INPUT-NAME="profile_confirm_username_edit" type="text">
                        </div>
                        <input DATI-BTN-SUBMIT="profile_change_username" type="submit" class="btn_valid" value="SAVE" style="width: 100%;max-width: 100%;">
                    </fieldset>
                </div>
                <div style="width:30%;display: flex;justify-content: space-between;flex-direction: column;float: left">
                    <fieldset style="text-align: left;margin: 10px;border-color: #d8d8d8;">
                        <legend style="font-size: 13px;">CHANGE EMAIL</legend>
                        <div class="input_add_form" style="width: 100%;max-width: 100%">
                            <label>NEW EMAIL</label>
                            <input DATI-INPUT-NAME="profile_email_edit" type="text">
                        </div>
                        <div class="input_add_form" style="width: 100%;max-width: 100%">
                            <label>CONFIRM EMAIL</label>
                            <input DATI-INPUT-NAME="profile_confirm_email_edit" type="text">
                        </div>
                        <input DATI-BTN-SUBMIT="profile_change_email" type="submit" class="btn_valid" value="SAVE" style="width: 100%;max-width: 100%;">
                    </fieldset>
                </div>
                <div style="width:30%;display: flex;justify-content: space-between;flex-direction: column;float: left">
                    <fieldset style="text-align: left;margin: 10px;border-color: #d8d8d8;">
                        <legend style="font-size: 13px;">CHANGE PASSWORD</legend>
                        <div class="input_add_form" style="width: 100%;max-width: 100%">
                            <label>OLD PASSWORD</label>
                            <input DATI-INPUT-NAME="profile_old_password_edit" type="password">
                        </div>
                        <div class="input_add_form" style="width: 100%;max-width: 100%">
                            <label>NEW PASSWORD</label>
                            <input DATI-INPUT-NAME="profile_new_password_edit" type="password">
                        </div>
                        <div class="input_add_form" style="width: 100%;max-width: 100%">
                            <label>CONFIRM PASSWORD</label>
                            <input DATI-INPUT-NAME="profile_confirm_password_edit" type="password">
                        </div>
                        <input DATI-BTN-SUBMIT="profile_change_password" type="submit" class="btn_valid" value="SAVE" style="width: 100%;max-width: 100%;">
                    </fieldset>
                </div>
            </div>

            <!--<div style="width: 100%;display: inline-block">
                <div style="width: 20%;height: 240px;background-color: #e0e0e0;float: left;display: flex;align-items: center;justify-content: center">
                    <div img_profile_user_uploader id="img_profile_edit" style="display:inline-block; border:0px solid; border-radius:10vw;width: 10vw; height:10vw; color: white;cursor: pointer; background-image: url('/assets/img/profileImage.png'); background-size: cover;" title="Click to change"></div>
                    <input  id="img_profile_edit_input" style="display:none" type="file"/>
                </div>
                <div style="width: 80%;height: 240px;background-color: #e0e0e0;float: right;display: inline-block">
                    <div style="width: 100%;height: 80px;background-color: #e0e0e0;display: flex;align-items: center;justify-content: space-between;padding-left: 2%;padding-right: 2%;box-sizing: border-box;">

                        <div style="width: 32%;display: flex;flex-direction: column;justify-content: left">
                            <label style="text-align: left;opacity: 0;margin-bottom: 5px"> Gender</label>
                            <select prefix_edit_profile style="outline: none;width: 100%;height: 40px;background-color: white;box-sizing: border-box;padding: 7px;border-radius: 4px;border: 1px solid grey;">
                                <option value="0">Mr</option>
                                <option value="1">Mrs</option>
                            </select>
                        </div>

                        <div style="width: 32%;display: flex;flex-direction: column;justify-content: left">
                            <label style="text-align: left;margin-bottom: 5px;font-size: 14px;"> NAME :</label>
                            <input name_edit_profile style="width: 100%;height: 40px;background-color: white;box-sizing: border-box;padding: 7px;border-radius: 4px;border: 1px solid grey;">
                        </div>
                        <div style="width: 32%;display: flex;flex-direction: column;justify-content: left">
                            <label style="text-align: left;margin-bottom: 5px;font-size: 14px;"> USERNAME :</label>
                            <input username_edit_profile style="width: 100%;height: 40px;background-color: white;box-sizing: border-box;padding: 7px;border-radius: 4px;border: 1px solid grey;">
                        </div>

                    </div>
                    <div style="width: 100%;height: 80px;background-color: #e0e0e0;display: flex;align-items: center;justify-content: space-between;padding-left: 2%;padding-right: 2%;box-sizing: border-box;">
                        <div style="width: 32%;display: flex;flex-direction: column;justify-content: left">
                            <label style="text-align: left;margin-bottom: 5px;font-size: 14px;"> EMAIL :</label>
                            <input email_edit_profile type="email" style="width: 100%;height: 40px;background-color: white;box-sizing: border-box;padding: 7px;border-radius: 4px;border: 1px solid grey;">
                        </div>
                        <div style="width: 32%;display: flex;flex-direction: column;justify-content: left">
                            <label style="text-align: left;margin-bottom: 5px;font-size: 14px;"> PASSWORD :</label>
                            <input password_edit_profile type="password" style="width: 100%;height: 40px;background-color: white;box-sizing: border-box;padding: 7px;border-radius: 4px;border: 1px solid grey;">
                        </div>
                        <div style="width: 32%;display: flex;flex-direction: column;justify-content: left">
                            <label style="text-align: left;margin-bottom: 5px;font-size: 14px;"> DATE OF BIRTH :</label>
                            <input dateofbirth_edit_profile type="date" style="width: 100%;height: 40px;background-color: white;box-sizing: border-box;padding: 7px;border-radius: 4px;border: 1px solid grey;">
                        </div>
                    </div>
                    <div style="width: 100%;height: 80px;background-color: #e0e0e0;display: flex;align-items: center;justify-content: space-between;padding-left: 2%;padding-right: 2%;box-sizing: border-box;">
                        <div style="width: 32%;display: flex;flex-direction: column;justify-content: left">
                            <label style="text-align: left;margin-bottom: 5px;font-size: 14px;"> PHONE NUMBER :</label>
                            <input phone_edit_profile style="width: 100%;height: 40px;background-color: white;box-sizing: border-box;padding: 7px;border-radius: 4px;border: 1px solid grey;">
                        </div>
                        <div style="width: 32%;display: flex;flex-direction: column;justify-content: left">
                            <label style="text-align: left;margin-bottom: 5px;font-size: 14px;"> IDENTITY :</label>
                            <input identity_edit_profile style="width: 100%;height: 40px;background-color: white;box-sizing: border-box;padding: 7px;border-radius: 4px;border: 1px solid grey;">
                        </div>
                        <div style="width: 32%;display: flex;flex-direction: column;justify-content: left;">
                            <label style="text-align: left;margin-bottom: 5px;font-size: 14px;"> COUNTRY :</label>
                            <select country_edit_profile DATI-INPUT-COUNTRY="AllCountry" style="outline: none;width: 100%;height: 40px;background-color: white;box-sizing: border-box;padding: 7px;border-radius: 4px;border: 1px solid grey;">
                            </select>
                        </div>
                    </div>
                </div>

            </div>-->



        </div>

    </div>

    <!--<div class="div_btn_add">
        <input type="submit" DATI-COMPOSENT="SUBMIT" DATI-FOR="form_edit_Profile" class="btn_valid" value="UPDATE"
               DATA-ROLE="SUBMIT"/>
    </div>-->


</div>


