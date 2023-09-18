<div class="form_add" DATI-PAGE="EditDevice">

    <div class="header_add_form">
        <img src="/assets/img/add_device.png">
        <label style="margin-left: 5px"> Edit Device</label>
    </div>
    <div class="add_form_container" FORM-ACTION="/Device/Add" DATI-FORM="add-device">
        <div style="width:100%;display: flex;justify-content: space-between">
            <div class="input_add_form" style="display: none">
                <label>IMEI</label>
                <input DATI-ID="imei_device_edit" type="text">
            </div>

            <div class="input_add_form" style="display: none">
                <label>CALL TIME</label>
                <input DATI-ID="call_time_device_edit" type="text">
            </div>

            <div class="input_add_form" style="display: none">
                <label>CALL LIMIT</label>
                <input DATI-ID="call_limit_device_edit" type="text">
            </div>
        </div>
        <div style="width:100%;display: flex;justify-content: space-between">
            <div class="input_add_form">
                <label>SIM NUMBER</label>
                <input DATI-ID="sim_number_device_edit" type="text">
            </div>


            <div class="input_add_form">
                <label>PHONE DESCRIPTION</label>
                <input DATI-ID="phone_description_device_edit" type="text">
            </div>


            <div class="input_add_form">
                <label>HOTEL NAME</label>
                <select DATI-ID="hotel_name_device_edit" class="select">
                    <option value="Business Hotel">Business Hotel</option>
                    <option value="Hello Dati">Hello Dati</option>
                </select>
            </div>
        </div>
        <div style="width:100%;display: flex;justify-content: left">
            <div class="input_add_form">
                <label>STATUS</label>
                <select DATI-ID="status_device_edit" class="select">
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>
            </div>
        </div>
        <div class="div_btn_add">
            <input type="submit" class="btn_valid" value="Update">
        </div>

    </div>
</div>
