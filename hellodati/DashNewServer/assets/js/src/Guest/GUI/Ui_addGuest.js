let Ui_addGuest = class {
    constructor() {
        this.EVENT_UI();
        this.msgErreurAddGuest=[];
    }

    CHECK_EMAIL(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    REFERESH_ROOMS(){
        var options = "<option value=''>select room</optionvalue>";
        for(var i=0; i<roomList_ui.Av_Rooms.length;i++){
            options=options+'<option value="'+roomList_ui.Av_Rooms[i].id+'">'+roomList_ui.Av_Rooms[i].room_number+'</option>';
        }
        $("[dati-input-name=room_number]").html(options);
    }

    DATALIST_AVAILABLE_WITHOUT_GUEST(data){
        var options = "<option value=''>select room</optionvalue>";
        for(var i=0; i<data.length;i++){
            options=options+'<option value="'+data[i].id+'">'+"Room number:&emsp;"+data[i].room_number+"&emsp;&emsp;Section:&emsp;"+data[i].section+"&emsp;&emsp;Floor:&emsp;"+data[i].floor+'</option>';
        }
        $("[dati-input-name=room_number]").html(options);
    }

    SHOW_POPUP_SUCCESS(msg){
        $("[DATI-POPUP=sucess]").css("display","flex");
        setTimeout(function() {
            $("[DATI-POPUP=sucess]").css("display","none");
            }, 1000);

    }

    SHOW_POPUP_SUCCESS_UPDATE(){
        $("[DATI-POPUP=sucess_update]").css("display","flex");
        setTimeout(function() {
            $("[DATI-POPUP=sucess_update]").css("display","none");
        }, 1000);
    }

    SHOW_POPUP_SUCCESS_SWAPED(){
        $("[DATI-POPUP=sucess_swaped]").css("display","flex");
        setTimeout(function() {
            $("[DATI-POPUP=sucess_swaped]").css("display","none");
        }, 1000);
    }

    SHOW_POPUP_SUCCESS_REPORT_DEVICE(){
        $("[DATI-POPUP=success-report]").css("display","flex");
        setTimeout(function() {
            $("[DATI-POPUP=success-report]").css("display","none");
        }, 1000);
    }

    SHOW_POPUP_ERROR(msg){
        console.log(msg);
        if (msg!=null){
            $("[DATI_ID=msg_error]").text(msg);

        }
        $("[DATI-POPUP=error]").css("display","flex");
        setTimeout(function() {
            $("[DATI-POPUP=error]").css("display","none");
        }, 2500);

    }

    formatDate(date) {
        var d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }

    VERIF_FORM_ADD_GUEST(element){
        this.msgErreurAddGuest = [];
        dati_Erreurs.UPDATE("AddGuestErreurs");
        var prefix = $(element).find("[DATI-INPUT-NAME=prefix]").val();
        var firstName = $(element).find("[DATI-INPUT-NAME=first_name]").val();
        var lastName = $(element).find("[DATI-INPUT-NAME=last_name]").val();
        var dateOfBirth = $(element).find("[DATI-INPUT-NAME=date_of_birth]").val();
        var email = $(element).find("[DATI-INPUT-NAME=email]").val();
        var country = $(element).find("[DATI-INPUT-NAME=country]").val();
        var phoneNumber = $(element).find("[DATI-INPUT-NAME=phone_number]").val();
        var idPassport = $(element).find("[DATI-INPUT-NAME=id_passport]").val();
        var roomNumber = $(element).find("[DATI-INPUT-NAME=room_number]").val();
        var arrivalDate = $(element).find("[DATI-INPUT-NAME=arrival_date]").val();
        var arrivalTime = $(element).find("[DATI-INPUT-NAME=arrival_time]").val();
        var departureDate = $(element).find("[DATI-INPUT-NAME=departure_date]").val();
        var departureTime = $(element).find("[DATI-INPUT-NAME=departure_time]").val();
        var arr = new Date(arrivalDate);
        var dep = new Date(departureDate);

        //console.log(arr,dep,"jajajajaj");



        if(firstName ===""){
            this.msgErreurAddGuest.push("First Name is required");
            dati_Erreurs.UPDATE("AddGuestErreurs");
        }
        if(lastName===""){
            this.msgErreurAddGuest.push("Last Name is required");
            dati_Erreurs.UPDATE("AddGuestErreurs");
        }
        if(dateOfBirth === ""){
            this.msgErreurAddGuest.push("Date of Birth is required");
            dati_Erreurs.UPDATE("AddGuestErreurs");
        }
        if(idPassport === ""){
            this.msgErreurAddGuest.push("Id or passport is required");
            dati_Erreurs.UPDATE("AddGuestErreurs");
        }
        if(roomNumber === ""){
            this.msgErreurAddGuest.push("Room is required");
            dati_Erreurs.UPDATE("AddGuestErreurs");
        }
        if(arrivalDate === ""){
            this.msgErreurAddGuest.push("Arrival date is required");
            dati_Erreurs.UPDATE("AddGuestErreurs");
        }
        if(arrivalTime === ""){
            this.msgErreurAddGuest.push("Arrival date is required");
            dati_Erreurs.UPDATE("AddGuestErreurs");
        }
        if(departureDate === ""){
            this.msgErreurAddGuest.push("Departure Time is required");
            dati_Erreurs.UPDATE("AddGuestErreurs");
        }
        if(departureTime === ""){
            this.msgErreurAddGuest.push("Departure Time is required");
            dati_Erreurs.UPDATE("AddGuestErreurs");
        }
        if(country === ""){
            this.msgErreurAddGuest.push("Country is required");
            dati_Erreurs.UPDATE("AddGuestErreurs");
        }
        if(this.formatDate(arrivalDate)>=this.formatDate(departureDate)){
            this.msgErreurAddGuest.push("Departure date should be greater than arrival date");
            dati_Erreurs.UPDATE("AddGuestErreurs");
        }
        if(!this.CHECK_EMAIL(email)){
            this.msgErreurAddGuest.push("Adresse e-mail non valide");
            dati_Erreurs.UPDATE("AddGuestErreurs");
        }

        if(this.msgErreurAddGuest.length == 0) {
            SSAPI.SUBMIT({
                uri:"/Guest/add",
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
                },
                onsuccess:"GuestAdded",
                onerror:"GuestAdded_error"
            });
        }else {
            $("main").animate({ scrollTop: 0 }, '200');
        }

        /*if(firstName==""){
            alert("first name is required");
        }else if(lastName===""){
            alert("last name is required");
        }else if(dateOfBirth===""){
            alert("Date of birth is required");
        }else if(idPassport===""){
            alert("id or passport are required");
        }else if(roomNumber===""){
            alert("room number is required");
        }else if(arrivalDate===""){
            alert("arrival date is required");
        }else if(arrivalTime===""){
            alert("arrival time is required");
        }else if(departureDate===""){
            alert("departure date is required");
        }else if(departureTime===""){
            alert("departure time is required");
        }else if(country===""){
            alert("country is required");
        }else if (dep<arr){
            alert("departure date should be greater than arrival date");
        } else if (!this.CHECK_EMAIL(email)) {
            alert('Adresse e-mail non valide');
        }else {

            SSAPI.SUBMIT({
                uri:"/Guest/add",
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
                    },
                onsuccess:"GuestAdded",
                onerror:"GuestAdded_error"
            });


        }*/
    }
    RESET_FORM_ADD(){
        $("[form-id=form_add_Guest]").find("[DATI-INPUT-NAME=first_name]").val('');
        $("[form-id=form_add_Guest]").find("[DATI-INPUT-NAME=last_name]").val('');
        $("[form-id=form_add_Guest]").find("[DATI-INPUT-NAME=date_of_birth]").val('');
        $("[form-id=form_add_Guest]").find("[DATI-INPUT-NAME=email]").val('');
        $("[form-id=form_add_Guest]").find("[DATI-INPUT-NAME=country]").val('');
        $("[form-id=form_add_Guest]").find("[DATI-INPUT-NAME=phone_number]").val('');
        $("[form-id=form_add_Guest]").find("[DATI-INPUT-NAME=id_passport]").val('');
        $("[form-id=form_add_Guest]").find("[DATI-INPUT-NAME=room_number]").val('');
        $("[form-id=form_add_Guest]").find("[DATI-INPUT-NAME=arrival_date]").val('');
        $("[form-id=form_add_Guest]").find("[DATI-INPUT-NAME=arrival_time]").val('');
        $("[form-id=form_add_Guest]").find("[DATI-INPUT-NAME=departure_date]").val('');
        $("[form-id=form_add_Guest]").find("[DATI-INPUT-NAME=departure_time]").val('');
    }
    EVENT_UI(){

        $(document).ready(function(){
            $(document).on('click','[DATI-FOR=form_add_Guest] [DATI-COMPOSENT=SUBMIT]',function() {
                var formId = $(this).attr("DATI-FOR");
                var fn = $("[FORM-ID="+formId+"]").attr("DATI-SEND");
                var element = "$('[FORM-ID="+formId+"]')";
                fn=fn+"("+element+")";
                eval(fn);
            });

        });




}
};

let dati_add_guest = new Ui_addGuest();
