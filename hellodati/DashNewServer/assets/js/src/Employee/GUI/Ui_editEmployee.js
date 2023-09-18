let Ui_editEmployee = class {
    constructor() {
        this.EVENT_UI();
    }

    CHECK_EMAIL(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    RESET_FORM_UPDATE_EMP() {
        $("[DATI-PAGE=EditEmployee] [BTN-PRIV-I]").css("background-color", "#ffffff");
        $("[DATI-PAGE=EditEmployee] [BTN-PRIV-I]").css("color", "#111f35");
        $("[DATI-PAGE=EditEmployee] [BTN-SI]").css("background-color", "#ffffff");
        $("[DATI-PAGE=EditEmployee] [BTN-SI]").css("color", "#111f35");
        $("[DATI-PAGE=EditEmployee] [EMP-PERSONAL-INFO ]").css("display", "flex");
        $("[DATI-PAGE=EditEmployee] [EMP-SECURE-INFO]").css("display", "none");
        $("[DATI-PAGE=EditEmployee] [emp-ptivilege-info]").css("display", "none");
        $("[DATI-PAGE=EditEmployee] [dati-input-name=employee_username_edit]").val("");
        $("[DATI-PAGE=EditEmployee] [dati-input-name=employee_confirm_username_edit]").val("");
        $("[DATI-PAGE=EditEmployee] [dati-input-name=employee_password_edit]").val("");
        $("[DATI-PAGE=EditEmployee] [dati-input-name=employee_confirm_password_edit]").val("");
        $("[DATI-PAGE=EditEmployee] [dati-input-name=employee_email_edit]").val("");
        $("[DATI-PAGE=EditEmployee] [dati-input-name=employee_confirm_email_edit]").val("");
    }

    VERIF_FORM_EDIT_EMPLOYEE(element) {

        var prefix = $(element).find("[DATI-INPUT-NAME=employee_prefix_edit]").val();
        var name = $(element).find("[DATI-INPUT-NAME=employee_name_edit]").val();
        var username = $(element).find("[DATI-INPUT-NAME=employee_username_edit]").val();
        var password = $(element).find("[DATI-INPUT-NAME=employee_password_edit]").val();
        var email = $(element).find("[DATI-INPUT-NAME=email_employee_edit]").val();
        var dateofbirth = $(element).find("[DATI-INPUT-NAME=date_of_birth_employee_edit]").val();
        var phoneNumber = $(element).find("[DATI-INPUT-NAME=phone_number_employee_edit]").val();
        var cin = $(element).find("[DATI-INPUT-NAME=cin_employee_edit]").val();
        var country = $(element).find("[DATI-INPUT-NAME=country_employee_edit]").val();
        var priv = dati_table_previlege.listF;


        var dataSend = {
            emp_id: employeeList_ui.selectedEmployee.id,
            country_id: country,
            name: name,
            cin: cin,
            date_of_birth: dateofbirth,
            email: email,
            password: password,
            username: username,
            is_su: false,
            privilege: priv,
            prefix: prefix,
            phone_number: phoneNumber,
            is_owner: false

        };
        SSAPI.SUBMIT({
            uri: "/Emp/update",
            data: dataSend,
            onsuccess: "EmployeeUpdated",
            onerror: "EmployeeUpdated_error"
        });

    }

    EVENT_UI() {


        $(document).on('click', '[DATI-BTN-SUBMIT=emp_change_username]', function () {
            console.log("1111111111111111111111");
            var username = $(this).parent().find("[dati-input-name=employee_username_edit]").val();
            var confirm_username = $(this).parent().find("[dati-input-name=employee_confirm_username_edit]").val();
            if (username != "" && confirm_username != "") {
                if (username == confirm_username) {
                    iEmployee.UPDATE_USERNAME(username, employeeList_ui.selectedEmployee["User"].id);
                } else {
                    alert("info not much");
                }
            } else {
                alert("missed info");
            }
        });
        $(document).on('click', '[DATI-BTN-SUBMIT=emp_change_password]', function () {
            var password = $(this).parent().find("[dati-input-name=employee_password_edit]").val();
            var confirm_password = $(this).parent().find("[dati-input-name=employee_confirm_password_edit]").val();
            if (password != "" && confirm_password != "") {
                if (password == confirm_password) {
                    iEmployee.UPDATE_PASSWORD(password, employeeList_ui.selectedEmployee["User"].id)
                } else {
                    alert("info not much");
                }
            } else {
                alert("missed info");
            }
        });
        $(document).on('click', '[DATI-BTN-SUBMIT=emp_change_email]', function () {
            var email = $(this).parent().find("[dati-input-name=employee_email_edit]").val();
            var confirm_email = $(this).parent().find("[dati-input-name=employee_confirm_email_edit]").val();
            if (email != "" && confirm_email != "") {
                if (email == confirm_email) {
                    iEmployee.UPDATE_EMAIL(email, employeeList_ui.selectedEmployee["User"].id)
                } else {
                    alert("info not much");
                }
            } else {
                alert("missed info");
            }

        });
        $(document).on('click', '[DATI-BTN-SUBMIT=emp_change_priv]', function () {
            iEmployee.UPDATE_PRIV(dati_table_previlege.listF, employeeList_ui.selectedEmployee["User"].id);
        });
        $(document).on('click', '[DATI-BTN-SUBMIT=emp_change_personal_info]', function () {
            var user_id = employeeList_ui.selectedEmployee["User"].id;
            var country_id = $(this).parent().find("[dati-input-name=country_employee_edit]").val();
            var prefix = $(this).parent().find("[dati-input-name=employee_prefix_edit]").val();
            var name = $(this).parent().find("[dati-input-name=employee_name_edit]").val();
            var cin = $(this).parent().find("[dati-input-name=cin_employee_edit]").val();
            var date_of_birth = $(this).parent().find("[dati-input-name=date_of_birth_employee_edit]").val();
            var phone = $(this).parent().find("[dati-input-name=phone_number_employee_edit]").val();
            console.log(user_id, "11111111");
            console.log(country_id, "22222");
            console.log(name, "33333");
            console.log(cin, "44444");
            console.log(date_of_birth, "55555");
            console.log(phone, "666666");

            if (prefix == 0) {
                prefix = "FALSE";
            } else {
                prefix = "TRUE";
            }
            console.log(prefix, "777777");
            iEmployee.UPDATE_PERSONAL_INFO(user_id, country_id, prefix, name, cin, date_of_birth, phone);
        });


        $(document).on("click", "[DATI-PAGE=EditEmployee] [BTN-PI]", function () {
            $(this).css("background-color", "#111f35");
            $(this).css("color", "#ffffff");
            $("[DATI-PAGE=EditEmployee] [BTN-PRIV-I]").css("background-color", "#ffffff");
            $("[DATI-PAGE=EditEmployee] [BTN-PRIV-I]").css("color", "#111f35");
            $("[DATI-PAGE=EditEmployee] [BTN-SI]").css("background-color", "#ffffff");
            $("[DATI-PAGE=EditEmployee] [BTN-SI]").css("color", "#111f35");
            $("[DATI-PAGE=EditEmployee] [EMP-PERSONAL-INFO ]").css("display", "flex");
            $("[DATI-PAGE=EditEmployee] [EMP-SECURE-INFO]").css("display", "none");
            $("[DATI-PAGE=EditEmployee] [EMP-PTIVILEGE-INFO]").css("display", "none");


            $("[DATI-PAGE=EditEmployee] [dati-input-name=employee_username_edit]").val("");
            $("[DATI-PAGE=EditEmployee] [dati-input-name=employee_confirm_username_edit]").val("");
            $("[DATI-PAGE=EditEmployee] [dati-input-name=employee_email_edit]").val("");
            $("[DATI-PAGE=EditEmployee] [dati-input-name=employee_confirm_email_edit]").val("");
            $("[DATI-PAGE=EditEmployee] [dati-input-name=employee_password_edit]").val("");
            $("[DATI-PAGE=EditEmployee] [dati-input-name=employee_confirm_password_edit]").val("");
        });
        $(document).on("click", "[DATI-PAGE=EditEmployee] [BTN-SI]", function () {
            $(this).css("background-color", "#111f35");
            $(this).css("color", "#ffffff");
            $("[DATI-PAGE=EditEmployee] [BTN-PRIV-I]").css("background-color", "#ffffff");
            $("[DATI-PAGE=EditEmployee] [BTN-PRIV-I]").css("color", "#111f35");
            $("[DATI-PAGE=EditEmployee] [BTN-PI]").css("background-color", "#ffffff");
            $("[DATI-PAGE=EditEmployee] [BTN-PI]").css("color", "#111f35");
            $("[DATI-PAGE=EditEmployee] [EMP-SECURE-INFO]").css("display", "flex");
            $("[DATI-PAGE=EditEmployee] [EMP-PERSONAL-INFO ]").css("display", "none");
            $("[DATI-PAGE=EditEmployee] [EMP-PTIVILEGE-INFO]").css("display", "none");

            $("[DATI-PAGE=EditEmployee] [dati-input-name=employee_username_edit]").val("");
            $("[DATI-PAGE=EditEmployee] [dati-input-name=employee_confirm_username_edit]").val("");
            $("[DATI-PAGE=EditEmployee] [dati-input-name=employee_email_edit]").val("");
            $("[DATI-PAGE=EditEmployee] [dati-input-name=employee_confirm_email_edit]").val("");
            $("[DATI-PAGE=EditEmployee] [dati-input-name=employee_password_edit]").val("");
            $("[DATI-PAGE=EditEmployee] [dati-input-name=employee_confirm_password_edit]").val("");
        });
        $(document).on("click", "[DATI-PAGE=EditEmployee] [BTN-PRIV-I]", function () {
            $(this).css("background-color", "#111f35");
            $(this).css("color", "#ffffff");
            $("[DATI-PAGE=EditEmployee] [BTN-PI]").css("background-color", "#ffffff");
            $("[DATI-PAGE=EditEmployee] [BTN-PI]").css("color", "#111f35");
            $("[DATI-PAGE=EditEmployee] [BTN-SI]").css("background-color", "#ffffff");
            $("[DATI-PAGE=EditEmployee] [BTN-SI]").css("color", "#111f35");
            $("[DATI-PAGE=EditEmployee] [EMP-PTIVILEGE-INFO]").css("display", "flex");
            $("[DATI-PAGE=EditEmployee] [EMP-SECURE-INFO]").css("display", "none");
            $("[DATI-PAGE=EditEmployee] [EMP-PERSONAL-INFO ]").css("display", "none");

            $("[DATI-PAGE=EditEmployee] [dati-input-name=employee_username_edit]").val("");
            $("[DATI-PAGE=EditEmployee] [dati-input-name=employee_confirm_username_edit]").val("");
            $("[DATI-PAGE=EditEmployee] [dati-input-name=employee_email_edit]").val("");
            $("[DATI-PAGE=EditEmployee] [dati-input-name=employee_confirm_email_edit]").val("");
            $("[DATI-PAGE=EditEmployee] [dati-input-name=employee_password_edit]").val("");
            $("[DATI-PAGE=EditEmployee] [dati-input-name=employee_confirm_password_edit]").val("");
        });


    }
};

let dati_edit_employee = new Ui_editEmployee();

