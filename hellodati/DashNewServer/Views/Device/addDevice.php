<div class="form_add" FORM-ID="form_add_Device" DATI-SEND="dati_add_device.VERIF_FORM_ADD_DEVICE" DATI-PAGE="AddDevice">

    <div class="header_add_form">
        <img src="/assets/img/add_device.png">
        <label style="margin-left: 5px"> Add Device</label>
    </div>
    <div class="add_form_container" FORM-ACTION="/Device/Add" DATI-FORM="add-device">

        <div style="width:100%; display: flex;justify-content: center">
            <div class="input_add_form">
                <label>IMEI *</label>
                <input DATI-INPUT-NAME="imei_add_device" type="text">
            </div>
            <div class="input_add_form">
                <label>CALL TIME *</label>
                <input DATI-INPUT-NAME="call_time_add_device" type="text">
            </div>

            <div class="input_add_form">
                <label>CALL LIMIT *</label>
                <input DATI-INPUT-NAME="call_limit_add_device" type="text">
            </div>
        </div>

        <div style="width:100%;display: flex;justify-content: center">
            <div class="input_add_form">
                <label>SIM NUMBER *</label>
                <input DATI-INPUT-NAME="sim_number_add_device" type="text">
            </div>


            <div class="input_add_form">
                <label>PHONE DESCRIPTION</label>
                <input DATI-INPUT-NAME="phone_description_add_device" type="text">
            </div>

            <div class="input_add_form">
                <label>STATUS</label>
                <select DATI-INPUT-NAME="status_add_device" class="select">
                    <option value="">Active</option>
                    <option value="">Inactive</option>
                </select>
            </div>
        </div>


        <div class="div_btn_add" DATI-COMPOSENT="SUBMIT" DATI-FOR="form_add_Device">
            <input type="submit" class="btn_valid" value="ADD">
        </div>

    </div>


</div>


