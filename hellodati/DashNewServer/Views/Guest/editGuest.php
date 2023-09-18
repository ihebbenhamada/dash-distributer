<div class="form_add" FORM-ID="form_edit_Guest" DATI-SEND="dati_edit_guest.VERIF_FORM_EDIT_GUEST" DATI-PAGE="EditGuest">

    <div class="header_add_form">
        <img src="assets/img/add_employee.png">
        <label style="margin-left: 5px"> Edit Guest</label>
    </div>
    <div class="add_form_container" FORM-ACTION="/Guest/Add" DATI-FORM="add-guest">
        <div
                class="container_msg_erreur"
                DATI-COMPOSENT="msgErreurContainer"
                DATI-ID="UpdateGuestErreurs"
                DATI-UPDATE="showMsgUpdateGuest"
                DATI-LIST="dati_edit_guest.msgErreurUpdateGuest"
        >
        </div>
        <div style="width:100%;display: flex;justify-content: space-between">
            <div class="input_add_form">
                <label style="opacity: 0">Prefix</label>
                <select DATI-INPUT-NAME="prefix_edit_guest" class="select" name="prefix">
                    <option value="1">Mr</option>
                    <option value="2">Ms</option>
                </select>
            </div>
            <div class="input_add_form">
                <label>FIRST NAME</label>
                <input DATI-INPUT-NAME="first_name_edit_guest" type="text" name="fname">
            </div>
            <div class="input_add_form">
                <label>LAST NAME</label>
                <input DATI-INPUT-NAME="last_name_edit_guest" type="text" name="lname">
            </div>
        </div>
        <div style="width:100%;display: flex;justify-content: space-between">
            <div class="input_add_form">
                <label>DATE OF BIRTH</label>
                <input DATI-INPUT-NAME="born_edit_guest" type="date">
            </div>
            <div class="input_add_form">
                <label>EMAIL</label>
                <input DATI-INPUT-NAME="email_edit_guest" type="text">
            </div>
            <div class="input_add_form">
                <label>COUNTRY *</label>
                <select DATI-INPUT-NAME="country_edit_guest" class="select">
                    <option value="Tunisie">Tunisie</option>
                    <option value="France">France</option>
                </select>
            </div>
        </div>
        <div style="width:100%;display: flex;justify-content: space-between">
            <div class="input_add_form">
                <label>PHONE NUMBER</label>
                <input DATI-INPUT-NAME="phone_number_edit_guest" type="text">
            </div>
            <div class="input_add_form">
                <label>ID NUMBER / PASSPORT *</label>
                <input DATI-INPUT-NAME="id_passport_edit_guest" type="text">
            </div>
            <div class="input_add_form">
                <label>ROOM</label>
                <SELECT class="select" DATI-INPUT-NAME="room_edit_guest" type="text">

                </select>
            </div>
        </div>
        <div style="width:100%;display: flex;justify-content: space-between">
            <div class="input_add_form">
                <label>ARRIVAL DATE</label>
                <input DATI-INPUT-NAME="arrival_date_edit_guest" type="date">
            </div>
            <div class="input_add_form">
                <label>ARRIVAL TIME</label>
                <input DATI-INPUT-NAME="arrival_time_name_edit" type="time" placeholder="12:00">
            </div>
            <div class="input_add_form">
                <label>DEPARTURE DATE</label>
                <input DATI-INPUT-NAME="departure_date_edit" type="date">
            </div>
        </div>
        <div style="width:100%;display: flex;justify-content: left">
            <div class="input_add_form">
                <label>DEPARTURE TIME</label>
                <input DATI-INPUT-NAME="departure_time_edit" type="time" value="" placeholder="12:00">
            </div>
        </div>
        <div class="div_btn_add">
            <input DATI-COMPOSENT="SUBMIT" DATI-FOR="form_edit_Guest" type="submit" class="btn_valid" value="Update">
        </div>


    </div>
</div>