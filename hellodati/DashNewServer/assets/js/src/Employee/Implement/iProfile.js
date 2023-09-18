class imp_editProfile{
    constructor() {
       this.EVENTS_UI();
       this.EVENTS_SSAPI();
    }
    UPDATE_USERNAME(username,user_id){
        SSAPI.SUBMIT({
            uri:"/Emp/update_my_username",
            onsuccess:"profileUserNameUpdated",
            onerror:"profileUserNameUpdated_error",
            data:{
                username:username,
                user_id:user_id
            }
        })
    }
    UPDATE_EMAIL(email,user_id){
        SSAPI.SUBMIT({
            uri:"/Emp/update_my_email",
            onsuccess:"profileEmailUpdated",
            onerror:"profileUserNameUpdated_error",
            data:{
                email:email,
                user_id:user_id
            }
        })
    }
    UPDATE_PASSWORD(password,user_id){
        SSAPI.SUBMIT({
            uri:"/Emp/update_my_password",
            onsuccess:"profilePasswordUpdated",
            onerror:"profileUserNameUpdated_error",
            data:{
                password:password,
                user_id:user_id
            }
        })
    }
    UPDATE_PERSONAL_INFO(prefix,name,dateofbirth,phoneNumber,cin,country,image){
        var data = {
            country_id: country,
            name: name,
            cin: cin,
            date_of_birth: dateofbirth,
            prefix: prefix,
            phone_number: phoneNumber,
            img: image

        };
        //console.log("id user connected: " + prefix + " " + country + " " + name + " " + cin + " " + dateofbirth + " " + email + " " + username + " " + prefix + " " + phoneNumber + " " + image);
        SSAPI.SUBMIT({
            uri: "/Emp/update_my_perso_info",
            data: data,
            onsuccess: "profileUpdated",
            onerror: "profileUpdated_error"
        });

    }
    EVENTS_UI(){

        document.addEventListener("SHOW_PAGE", function(e){
            var page = e.detail.pageLink;

            if(page == "EditProfile"){
                editProfile_ui.FILL_EDIT_PROFILE_COUNTRY(country_ui.list);
                editProfile_ui.fillPageEditProfile();
                $("[DATI-PAGE=EditProfile] [BTN-PI]").css("background-color","#111f35");
                $("[DATI-PAGE=EditProfile] [BTN-PI]").css("color","#ffffff");
            }else {
                editProfile_ui.RESET_FORM_UPDATE_PROFILE();
            }

         }, false);
    }
    EVENTS_SSAPI(){
        document.addEventListener("profileUpdated", function(e){
            dati_add_guest.SHOW_POPUP_SUCCESS();
            console.log(editProfile_ui.imgProfileUploaded,"erererererererer");
            if (editProfile_ui.imgProfileUploaded!=null){
                $("[dati-img-profile-user]").attr("src", editProfile_ui.imgProfileUploaded);
            }
            editProfile_ui.user.Employee.prefix = $("[prefix_edit_profile]").val();
            editProfile_ui.user.Employee.name = $("[name_edit_profile]").val();
            editProfile_ui.user.username = $("[username_edit_profile]").val();
            editProfile_ui.user.email = $("[email_edit_profile]").val();
            editProfile_ui.user.password = $("[password_edit_profile]").val();
            editProfile_ui.user.Employee.date_of_birth = $("[dateofbirth_edit_profile]").val();
            editProfile_ui.user.Employee.phone_number = $("[phone_edit_profile]").val();
            editProfile_ui.user.Employee.cin = $("[identity_edit_profile]").val();
            editProfile_ui.user.Employee.Country["id"] = $("[country_edit_profile]").val();
            editProfile_ui.user.Employee.img = editProfile_ui.imgProfileUploaded;
            SSAPI.REMEMBER({
                USER: JSON.stringify(editProfile_ui.user),
                onsuccess: "session_saved"
            });

            $("[dati-name-employee]").html(editProfile_ui.nameEmp);
        }, false);
        document.addEventListener("profileUpdated_error", function(e){
            console.log(e.detail);
            dati_add_guest.SHOW_POPUP_ERROR()
        }, false);
        //**********************************Update UserName********************************************
        document.addEventListener("profileUserNameUpdated", function(e){
            dati_add_guest.SHOW_POPUP_SUCCESS();
        }, false);
        document.addEventListener("profileUserNameUpdated_error", function(e){

        }, false)
        //**********************************Update Email********************************************
        document.addEventListener("profileEmailUpdated", function(e){
            dati_add_guest.SHOW_POPUP_SUCCESS();
        }, false);
        document.addEventListener("profileEmailUpdated_error", function(e){

        }, false);
        //**********************************Update Password********************************************
        document.addEventListener("profilePasswordUpdated", function(e){
            dati_add_guest.SHOW_POPUP_SUCCESS();
        }, false);
        document.addEventListener("profilePasswordUpdated_error", function(e){

        }, false);

    }
}

let iProfile = new imp_editProfile();