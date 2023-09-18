let Ui_editProfile = class {
    constructor() {
        this.EVENT_UI();
        this.imgProfileUploaded = null;
        this.user = null;
        this.nameEmp = null;

    }

    FILL_EDIT_PROFILE_COUNTRY(data) {
        var options = "<option value=''>select Country</option>";
        for (var i = 0; i < data.length; i++) {
            options = options + '<option value="' + data[i].id + '">' + data[i].name + '</option>';
        }
        $("[dati-page=EditProfile]").find("[DATI-INPUT-COUNTRY=AllCountry]").html(options);
        $("[country_edit_profile]").val(this.user["Employee"]["Country"][0].id);
    }

    CHECK_EMAIL(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    fillPageEditProfile() {
        $("[prefix_edit_profile]").val(this.user.Employee.prefix);
        $("[name_edit_profile]").val(this.user.Employee.name);
        $("[dateofbirth_edit_profile]").val(this.user.Employee.date_of_birth);
        $("[phone_edit_profile]").val(this.user.Employee.phone_number);
        $("[identity_edit_profile]").val(this.user.Employee.cin);
        if (this.user.Employee.img == null || this.user.Employee.img=="" || this.user.Employee.img=="NULL"){
            $("[img_profile_user_uploader]").css("background-image", "url('/assets/img/profile.png')");
        }else {
            $("[img_profile_user_uploader]").css("background-image", "url('" + this.user.Employee.img + "')");
        }

        this.imgProfileUploaded = this.user.Employee.img;
    }

    RESET_FORM_UPDATE_PROFILE() {
        $("[DATI-PAGE=EditProfile] [BTN-SI]").css("background-color", "#ffffff");
        $("[DATI-PAGE=EditProfile] [BTN-SI]").css("color", "#111f35");
        $("[DATI-PAGE=EditProfile] [EMP-PERSONAL-INFO ]").css("display", "flex");
        $("[DATI-PAGE=EditProfile] [EMP-SECURE-INFO]").css("display", "none");
        $("[DATI-PAGE=EditProfile] [dati-input-name=profile_username_edit]").val("");
        $("[DATI-PAGE=EditProfile] [dati-input-name=profile_confirm_username_edit]").val("");
        $("[DATI-PAGE=EditProfile] [dati-input-name=profile_email_edit]").val("");
        $("[DATI-PAGE=EditProfile] [dati-input-name=profile_confirm_email_edit]").val("");
        $("[DATI-PAGE=EditProfile] [dati-input-name=profile_old_password_edit]").val("");
        $("[DATI-PAGE=EditProfile] [dati-input-name=profile_new_password_edit]").val("");
        $("[DATI-PAGE=EditProfile] [dati-input-name=profile_confirm_password_edit]").val("");

    }

    VERIF_FORM_EDIT_PROFILE(element) {

        var prefix = $(element).find("[prefix_edit_profile]").val();
        var name = $(element).find("[name_edit_profile]").val();
        var username = $(element).find("[username_edit_profile]").val();
        var password = $(element).find("[password_edit_profile]").val();
        var email = $(element).find("[email_edit_profile]").val();
        var dateofbirth = $(element).find("[dateofbirth_edit_profile]").val();
        var phoneNumber = $(element).find("[phone_edit_profile]").val();
        var cin = $(element).find("[identity_edit_profile]").val();
        var country = $(element).find("[country_edit_profile]").val();
        var image = this.imgProfileUploaded;
        this.nameEmp = name;


        if (prefix == 0) {
            prefix = "FALSE";
        } else {
            prefix = "TRUE";
        }

        console.log(prefix, "mmmmmmmm");
        var data = {
            country_id: country,
            name: name,
            cin: cin,
            date_of_birth: dateofbirth,
            email: email,
            password: password,
            username: username,
            prefix: prefix,
            phone_number: phoneNumber,
            img: image

        };
        console.log("id user connected: " + prefix + " " + country + " " + name + " " + cin + " " + dateofbirth + " " + email + " " + username + " " + prefix + " " + phoneNumber + " " + image);
        SSAPI.SUBMIT({
            uri: "/Emp/updateProfile",
            data: data,
            onsuccess: "profileUpdated",
            onerror: "profileUpdated_error"
        });

    }

    EVENT_UI() {
        $(document).on('click', '[DATI-BTN-SUBMIT=profile_change_username]', function () {
            console.log("1111111111111111111111");
            var username = $(this).parent().find("[dati-input-name=profile_username_edit]").val();
            var confirm_username = $(this).parent().find("[dati-input-name=profile_confirm_username_edit]").val();

            if (username != "" && confirm_username != "") {
                if (username == confirm_username) {
                    iProfile.UPDATE_USERNAME(username, editProfile_ui.user.id);
                } else {
                    alert("info not much");
                }
            } else {
                alert("missed info");
            }
        });
        $(document).on('click', '[DATI-BTN-SUBMIT=profile_change_password]', function () {
            var password = $(this).parent().find("[dati-input-name=profile_new_password_edit]").val();
            var oldpassword = $(this).parent().find("[dati-input-name=profile_old_password_edit]").val();
            var confirm_password = $(this).parent().find("[dati-input-name=profile_confirm_password_edit]").val();
            if (password != "" && confirm_password != "" && oldpassword != "") {
                if (editProfile_ui.user.password == oldpassword) {

                    if (password == confirm_password) {
                        iProfile.UPDATE_PASSWORD(password, editProfile_ui.user.id)
                    } else {
                        alert("info not much");
                    }
                } else {
                    alert("wrong password");

                }
            } else {
                alert("missed info");
            }

        });
        $(document).on('click', '[DATI-BTN-SUBMIT=profile_change_email]', function () {
            var email = $(this).parent().find("[dati-input-name=profile_email_edit]").val();
            var confirm_email = $(this).parent().find("[dati-input-name=profile_confirm_email_edit]").val();
            if (email != "" && confirm_email != "") {
                if (email == confirm_email) {
                    iProfile.UPDATE_EMAIL(email, editProfile_ui.user.id)
                } else {
                    alert("info not much");
                }
            } else {
                alert("missed info");
            }

        });
        $(document).on('click', '[DATI-BTN-SUBMIT=profile_change_personal_info]', function () {
            var prefix = $(this).parent().find("[prefix_edit_profile]").val();
            var name = $(this).parent().find("[name_edit_profile]").val();
            var dateofbirth = $(this).parent().find("[dateofbirth_edit_profile]").val();
            var phoneNumber = $(this).parent().find("[phone_edit_profile]").val();
            var cin = $(this).parent().find("[identity_edit_profile]").val();
            var country = $(this).parent().find("[country_edit_profile]").val();
            var image = editProfile_ui.imgProfileUploaded;
            editProfile_ui.nameEmp = name;
       /*     var email = editProfile_ui.user.email;
            var username = editProfile_ui.user.username;
            var password = editProfile_ui.user.password;*/
            if (prefix == 0) {
                prefix = "FALSE";
            } else {
                prefix = "TRUE";
            }
            iProfile.UPDATE_PERSONAL_INFO(prefix,name,dateofbirth,phoneNumber,cin,country,image);

        });
        $(document).on("click", "[DATI-PAGE=EditProfile] [BTN-PI]", function () {
            $(this).css("background-color", "#111f35");
            $(this).css("color", "#ffffff");
            $("[DATI-PAGE=EditProfile] [BTN-SI]").css("background-color", "#ffffff");
            $("[DATI-PAGE=EditProfile] [BTN-SI]").css("color", "#111f35");
            $("[DATI-PAGE=EditProfile] [EMP-PERSONAL-INFO ]").css("display", "flex");
            $("[DATI-PAGE=EditProfile] [EMP-SECURE-INFO]").css("display", "none");
            $("[DATI-PAGE=EditProfile] [dati-input-name=profile_username_edit]").val("");
            $("[DATI-PAGE=EditProfile] [dati-input-name=profile_confirm_username_edit]").val("");
            $("[DATI-PAGE=EditProfile] [dati-input-name=profile_email_edit]").val("");
            $("[DATI-PAGE=EditProfile] [dati-input-name=profile_confirm_email_edit]").val("");
            $("[DATI-PAGE=EditProfile] [dati-input-name=profile_old_password_edit]").val("");
            $("[DATI-PAGE=EditProfile] [dati-input-name=profile_new_password_edit]").val("");
            $("[DATI-PAGE=EditProfile] [dati-input-name=profile_confirm_password_edit]").val("");
        });
        $(document).on("click", "[DATI-PAGE=EditProfile] [BTN-SI]", function () {
            $(this).css("background-color", "#111f35");
            $(this).css("color", "#ffffff");

            $("[DATI-PAGE=EditProfile] [BTN-PI]").css("background-color", "#ffffff");
            $("[DATI-PAGE=EditProfile] [BTN-PI]").css("color", "#111f35");
            $("[DATI-PAGE=EditProfile] [EMP-SECURE-INFO]").css("display", "flex");
            $("[DATI-PAGE=EditProfile] [EMP-PERSONAL-INFO ]").css("display", "none");
        });
        $(document).find("#img_profile_edit").click(function () {
            $("#img_profile_edit_input").click();
        });
        document.addEventListener("imageProfileUploaded", function (e) {
            editProfile_ui.imgProfileUploaded = e.detail.res[0];
            $("#img_profile_edit").css("background-image", "url('" + e.detail.res[0] + "')");
            $("#img_profile_edit").css("background-size", "10vw 10vw");
            $("#img_profile_edit").css("background-repeat", "no-repeat");
        });
        $(document).find("#img_profile_edit_input").change(function () {
            var form = new FormData();
            var image = $(this)[0].files[0];
            form.append("img", image, $(this).val());
            SSAPI.upload({
                uri: "/Cdn/upload_img",
                onsuccess: "imageProfileUploaded",
                data: form
            })
        });
    }
};

let editProfile_ui = new Ui_editProfile();

