<div class="form_add" FORM-ID="form_add_Guest" DATI-SEND="dati_add_guest.VERIF_FORM_ADD_GUEST" DATI-PAGE="AddGuest">

    <div
            class="container_msg_erreur"
            DATI-COMPOSENT="msgErreurContainer"
            DATI-ID="AddGuestErreurs"
            DATI-UPDATE="showMsgAddGuest"
            DATI-LIST="dati_add_guest.msgErreurAddGuest"
    >
    </div>
    <div class="header_add_form">
        <img src="assets/img/add_employee.png">
        <label style="margin-left: 5px"> Add Guest</label>
    </div>
    <div class="add_form_container" FORM-ACTION="/Guest/Add" DATI-FORM="add-guest">

        <div style="width:100%;display: flex;justify-content: space-between">

            <div class="input_add_form">
                <label style="opacity: 0">Prefix</label>
                <select DATI-INPUT-NAME="prefix" class="select">
                    <option value="1">Mr</option>
                    <option value="2">Mrs</option>
                </select>
            </div>
            <div class="input_add_form">
                <label>FIRST NAME *</label>
                <input type="text" DATI-INPUT-NAME="first_name" placeholder="Enter first name">
            </div>
            <div class="input_add_form">
                <label>LAST NAME *</label>
                <input type="text" DATI-INPUT-NAME="last_name" placeholder="Enter last name">
            </div>
        </div>
        <div style="width:100%;display: flex;justify-content: space-between">
            <div class="input_add_form">
                <label>DATE OF BIRTH *</label>
                <input DATI-INPUT-NAME="date_of_birth" type="date" placeholder="Enter date of birth">
            </div>
            <div class="input_add_form">
                <label>EMAIL</label>
                <input DATI-INPUT-NAME="email" type="email" placeholder="Enter email">
            </div>

            <div class="input_add_form">
                <label>COUNTRY *</label>
                <select DATI-INPUT-NAME="country" id="country_input" class="select">
                    <option>Tunisia</option>
                    <option>France</option>
                </select>
            </div>
        </div>
        <div style="width:100%;display: flex;justify-content: space-between">
            <div class="input_add_form">
                <label>PHONE NUMBER</label>
                <input DATI-INPUT-NAME="phone_number" type="text" placeholder="Enter phone number">
            </div>
            <div class="input_add_form">
                <label>ID NUMBER / PASSPORT *</label>
                <input DATI-INPUT-NAME="id_passport" type="text" placeholder="Enter id or passport ">
            </div>
            <div class="input_add_form">
                <label>ROOM *</label>
                <select DATI-INPUT-NAME="room_number" class="select">

                </select>
            </div>
        </div>
        <div style="width:100%;display: flex;justify-content: left">
            <div class="input_add_form">
                <label>ARRIVAL DATE *</label>
                <input DATI-INPUT-NAME="arrival_date" type="date" placeholder="Enter arrival date ">
            </div>
            <div class="input_add_form" style="margin-left: 5%">
                <label>ARRIVAL TIME *</label>
                <input DATI-INPUT-NAME="arrival_time" type="time" placeholder="Enter arrival time (12:00)">
            </div>

        </div>
        <div style="width:100%;display: flex;justify-content: left">
            <div class="input_add_form">
                <label>DEPARTURE DATE *</label>
                <input DATI-INPUT-NAME="departure_date" type="date">
            </div>
            <div class="input_add_form" style="margin-left: 5%">

                <label>DEPARTURE TIME *</label>
                <input DATI-INPUT-NAME="departure_time" id="departureTime_input" type="time" value=""
                       placeholder="Enter departure time (12:00)">
            </div>
        </div>


        <div class="div_btn_add">
            <input DATI-COMPOSENT="SUBMIT" DATI-FOR="form_add_Guest" INPUT-ID="btnAddGuest_input" type="submit"
                   class="btn_valid" value="ADD">
        </div>


    </div>
</div>