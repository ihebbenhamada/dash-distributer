let Ui_addEmployee = class {
    constructor() {
        this.EVENT_UI();
        this.msgErreurAddEmp = [];
    }

    CHECK_EMAIL(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }


    hasWhiteSpace(s) {
        return /\s/g.test(s);
    }

    HAS_ONLY_LETTERS(s) {
        return /^[a-zA-Z]+$/.test(s);
    }

    HAS_SPECIAL_CHAR(s) {
        var re = /^[a-zA-Z0-9- ]*$/;
        return re.test(s)
    }


    VERIF_FORM_ADD_EMPLOYEE(element) {
        this.msgErreurAddEmp = [];
        dati_Erreurs.UPDATE("AddEmpErreurs");
        var nameEmp = $(element).find("[DATI-INPUT-NAME=name_employee]").val();
        var usernameEmp = $(element).find("[DATI-INPUT-NAME=user_name_employee]").val();
        var prefix = $(element).find("[DATI-INPUT-NAME=prefix_employee]").val();
        var emailEmp = $(element).find("[DATI-INPUT-NAME=email_employee]").val();
        var passwordEmp = $(element).find("[DATI-INPUT-NAME=password_employee]").val();
        var birthdayEmp = $(element).find("[DATI-INPUT-NAME=date_of_birth_employee]").val();
        var phoneEmp = $(element).find("[DATI-INPUT-NAME=phone_number_employee]").val();
        var cinEmp = $(element).find("[DATI-INPUT-NAME=cin_employee]").val();
        var countryEmp = $(element).find("[DATI-INPUT-NAME=country_employee]").val();
        var priv = dati_table_previlege.listF;
        if (prefix == 0) {
            prefix = "FALSE";
        } else {
            prefix = "TRUE";
        }

        if (nameEmp === "") {
            this.msgErreurAddEmp.push("Name is required");
            dati_Erreurs.UPDATE("AddEmpErreurs");
        }
        if (!this.HAS_ONLY_LETTERS(nameEmp)) {
            this.msgErreurAddEmp.push("Name should contain only letters");
            dati_Erreurs.UPDATE("AddEmpErreurs");
        }
        if (usernameEmp === "") {
            this.msgErreurAddEmp.push("Username is required");
            dati_Erreurs.UPDATE("AddEmpErreurs");
        }
        if (this.hasWhiteSpace(usernameEmp)) {
            this.msgErreurAddEmp.push("Username should not has whitespace");
            dati_Erreurs.UPDATE("AddEmpErreurs");
        }
        if (!this.HAS_SPECIAL_CHAR(usernameEmp)) {
            this.msgErreurAddEmp.push("Username contains illegal characters");
            dati_Erreurs.UPDATE("AddEmpErreurs");
        }
        if (birthdayEmp === "") {
            this.msgErreurAddEmp.push("Date of birth is required");
            dati_Erreurs.UPDATE("AddEmpErreurs");
        }
        if (passwordEmp === "") {
            this.msgErreurAddEmp.push("Password is required");
            dati_Erreurs.UPDATE("AddEmpErreurs");
        }
        if (cinEmp === "") {
            this.msgErreurAddEmp.push("Cin is required");
            dati_Erreurs.UPDATE("AddEmpErreurs");
        }
        if (countryEmp === "") {
            this.msgErreurAddEmp.push("Country is required");
            dati_Erreurs.UPDATE("AddEmpErreurs");
        }
        if (phoneEmp === "") {
            this.msgErreurAddEmp.push("Phone number is required");
            dati_Erreurs.UPDATE("AddEmpErreurs");
        }
        if (!this.CHECK_EMAIL(emailEmp)) {
            this.msgErreurAddEmp.push("Adresse e-mail non valide");
            dati_Erreurs.UPDATE("AddEmpErreurs");
        }
        if (this.msgErreurAddEmp.length == 0) {
            var data1 = {

                country_id: countryEmp,
                username: usernameEmp,
                name: nameEmp,
                password: passwordEmp,
                date_of_birth: birthdayEmp,
                email: emailEmp,
                prefix: prefix,
                cin: cinEmp,
                phone_number: phoneEmp,
                is_sup: false,
                is_owner: false,
                privilege: priv
            };

            console.log(data1, "dataaaaa111111");

            SSAPI.SUBMIT({
                uri: "/Emp/add",
                data: data1,
                onsuccess: "EmpAdded",
                onerror: "EmpAdded_error"
            });
        } else {
            $("main").animate({scrollTop: 0}, '200');
        }

    }

    RESET_FORM_ADD_EMPLOYEE() {
        $("[form-id=form_add_Employee]").find("[DATI-INPUT-NAME=prefix_employee]").val('');
        $("[form-id=form_add_Employee]").find("[DATI-INPUT-NAME=name_employee]").val('');
        $("[form-id=form_add_Employee]").find("[DATI-INPUT-NAME=user_name_employee]").val('');
        $("[form-id=form_add_Employee]").find("[DATI-INPUT-NAME=email_employee]").val('');
        $("[form-id=form_add_Employee]").find("[DATI-INPUT-NAME=password_employee]").val('');
        $("[form-id=form_add_Employee]").find("[DATI-INPUT-NAME=date_of_birth_employee]").val('');
        $("[form-id=form_add_Employee]").find("[DATI-INPUT-NAME=phone_number_employee]").val('');
        $("[form-id=form_add_Employee]").find("[DATI-INPUT-NAME=cin_employee]").val('');
        $("[form-id=form_add_Employee]").find("[DATI-INPUT-NAME=country_employee]").val('');
    }

    EVENT_UI() {

        $(document).ready(function () {
            $(document).on('click', '[DATI-FOR=form_add_Employee] [DATI-COMPOSENT=SUBMIT]', function () {
                var formId = $(this).attr("DATI-FOR");
                var fn = $("[FORM-ID=" + formId + "]").attr("DATI-SEND");
                var element = "$('[FORM-ID=" + formId + "]')";
                fn = fn + "(" + element + ")";
                eval(fn);
            });

        });

        document.addEventListener("counrty_receive", function (e) {
            country_ui.getSelectOption($("[dati-input-name=country]"));
        }, false);


    }
};

let dati_add_employee = new Ui_addEmployee();
