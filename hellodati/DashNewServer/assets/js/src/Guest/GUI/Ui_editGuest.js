let Ui_editGuest = class {
    constructor() {
        this.EVENT_UI();
        this.msgErreurUpdateGuest=[];
    }

    CHECK_EMAIL(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    DATALIST_AVAILABLE_WITHOUT_GUEST(data){

       try {
           var options = "<option value='"+guestList_ui.selectedGuest.Room.id+"'>"+"Room number:&emsp;"+guestList_ui.selectedGuest.Room.room_number+"&emsp;&emsp;Section:&emsp;"+guestList_ui.selectedGuest.Room.section+"&emsp;&emsp;Floor:&emsp;"+guestList_ui.selectedGuest.Room.floor+"</option>";
       }catch (e) {
           var options = "<option value=''>Select Room</option>";
       }

        for(var i=0; i<data.length;i++){
            options=options+'<option value="'+data[i].id+'">'+"Room number:&emsp;"+data[i].room_number+"&emsp;&emsp;Section:&emsp;"+data[i].section+"&emsp;&emsp;Floor:&emsp;"+data[i].floor+'</option>';
        }
        $("[dati-input-name=room_edit_guest]").html(options);
    }
    VERIF_FORM_EDIT_GUEST(element){
        this.msgErreurUpdateGuest = [];
        dati_Erreurs.UPDATE("UpdateGuestErreurs");
        var prefix = $(element).find("[DATI-INPUT-NAME=prefix_edit_guest]").val();
        var firstName = $(element).find("[DATI-INPUT-NAME=first_name_edit_guest]").val();
        var lastName = $(element).find("[DATI-INPUT-NAME=last_name_edit_guest]").val();
        var dateOfBirth = $(element).find("[DATI-INPUT-NAME=born_edit_guest]").val();
        var email = $(element).find("[DATI-INPUT-NAME=email_edit_guest]").val();
        var country = $(element).find("[DATI-INPUT-NAME=country_edit_guest]").val();
        var phoneNumber = $(element).find("[DATI-INPUT-NAME=phone_number_edit_guest]").val();
        var idPassport = $(element).find("[DATI-INPUT-NAME=id_passport_edit_guest]").val();
        var roomNumber = $(element).find("[DATI-INPUT-NAME=room_edit_guest]").val();
        var arrivalDate = $(element).find("[DATI-INPUT-NAME=arrival_date_edit_guest]").val();
        var arrivalTime = $(element).find("[DATI-INPUT-NAME=arrival_time_name_edit]").val();
        var departureDate = $(element).find("[DATI-INPUT-NAME=departure_date_edit]").val();
        var departureTime = $(element).find("[DATI-INPUT-NAME=departure_time_edit]").val();
        var arr = new Date(arrivalDate);
        var dep = new Date(departureDate);


        if(firstName===""){
            this.msgErreurUpdateGuest.push("First Name is required");
            dati_Erreurs.UPDATE("UpdateGuestErreurs");
        }
        if(lastName===""){
            this.msgErreurUpdateGuest.push("Last Name is required");
            dati_Erreurs.UPDATE("UpdateGuestErreurs");
        }
        if(dateOfBirth===""){
            this.msgErreurUpdateGuest.push("Date of Birth is required");
            dati_Erreurs.UPDATE("UpdateGuestErreurs");
        }
        if(idPassport===""){
            this.msgErreurUpdateGuest.push("Id or passport is required");
            dati_Erreurs.UPDATE("UpdateGuestErreurs");
        }
        if(country===""){
            this.msgErreurUpdateGuest.push("country is required");
            dati_Erreurs.UPDATE("UpdateGuestErreurs");
        }
        if(isNaN(phoneNumber)){
            this.msgErreurUpdateGuest.push("invalidate phone number");
            dati_Erreurs.UPDATE("UpdateGuestErreurs");
        }
        if(isNaN(idPassport)){
            this.msgErreurUpdateGuest.push("invalidate id or passport");
            dati_Erreurs.UPDATE("UpdateGuestErreurs");
        }
        if (dep<arr){
            this.msgErreurUpdateGuest.push("departure date should be bigger than arrival");
            dati_Erreurs.UPDATE("UpdateGuestErreurs");
        }
        if (!this.CHECK_EMAIL(email)) {
            this.msgErreurUpdateGuest.push("Adresse e-mail non valide");
            dati_Erreurs.UPDATE("UpdateGuestErreurs");
        }
            if((roomNumber!=="") || (departureDate!=="") || (departureTime!=="") || (arrivalTime!=="") || (arrivalDate!=="")) {
                if (roomNumber === "") {
                    this.msgErreurUpdateGuest.push("room number is required");
                    dati_Erreurs.UPDATE("UpdateGuestErreurs");
                }
                if (arrivalDate === "") {
                    this.msgErreurUpdateGuest.push("arrival date is required");
                    dati_Erreurs.UPDATE("UpdateGuestErreurs");

                }
                if (arrivalTime === "") {
                    this.msgErreurUpdateGuest.push("arrival time is required");
                    dati_Erreurs.UPDATE("UpdateGuestErreurs");

                }
                if (departureDate === "") {
                    this.msgErreurUpdateGuest.push("departure date is required");
                    dati_Erreurs.UPDATE("UpdateGuestErreurs");

                }
                if (departureTime === "") {
                    this.msgErreurUpdateGuest.push("departure time is required");
                    dati_Erreurs.UPDATE("UpdateGuestErreurs");

                }
            }

            if (this.msgErreurUpdateGuest.length ==0){
                SSAPI.SUBMIT({
                    uri:"/Guest/update",
                    data:{
                        country_id: country,
                        f_name: firstName,
                        l_name: lastName,
                        passport: idPassport,
                        birthDay: dateOfBirth,
                        arr_date: arrivalDate,
                        email: email,
                        phone_number:phoneNumber,
                        room_id: roomNumber,
                        dep_date: departureDate,
                        arr_time: arrivalTime,
                        dep_time: departureTime,
                        prefix: prefix,
                        guest_id:guestList_ui.selectedGuest.id,
                    },
                    onsuccess:"GuestUpdated",
                    onerror:"GuestUpdated_error"
                });
            }

    }
    EVENT_UI(){

        $(document).ready(function(){
            $(document).on('click','[DATI-FOR=form_edit_Guest] [DATI-COMPOSENT=SUBMIT]',function() {
                var formId = $(this).attr("DATI-FOR");
                var fn = $("[FORM-ID="+formId+"]").attr("DATI-SEND");
                var element = "$('[FORM-ID="+formId+"]')";
                fn=fn+"("+element+")";
                eval(fn);
            });

        });



    }
};

let dati_edit_guest = new Ui_editGuest();

