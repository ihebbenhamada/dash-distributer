<div class="form_add" FORM-ID="form_edit_Room" DATI-SEND="dati_edit_room.VERIF_FORM_EDIT_ROOM" DATI-PAGE="EditRoom">

    <div
            class="container_msg_erreur"
            DATI-COMPOSENT="msgErreurContainer"
            DATI-ID="UpdateRoomErreurs"
            DATI-UPDATE="showMsgUpdateRoom"
            DATI-LIST="dati_edit_room.msgErreurUpdateRoom"
    >
    </div>
    <div class="header_add_form">
        <img src="assets/img/add_room.png">
        <label style="margin-left: 5px"> Edit Room</label>
    </div>
    <div class="add_form_container" FORM-ACTION="/Room/Add" DATI-FORM="add-room">
        <div style="width:100%;display: flex;justify-content: space-between">
            <div class="input_add_form">
                <label>ROOM NUMBER</label>
                <input DATI-INPUT-NAME="room_number_room_edit" type="text" name="Rnumber">
            </div>
            <div class="input_add_form">
                <label>SECTION</label>
                <input DATI-INPUT-NAME="room_section_room_edit" type="text" name="section">
            </div>

            <div class="input_add_form">
                <label>FLOOR</label>
                <input DATI-INPUT-NAME="room_floor_room_edit" type="text" name="floor">
            </div>
        </div>
        <div style="width:100%;display: flex;justify-content: space-between">
            <div class="input_add_form">
                <label>CAPACITY</label>
                <select DATI-INPUT-NAME="room_capacity_room_edit" class="select">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>

            <div class="input_add_form">
                <label>TYPE</label>
                <select DATI-INPUT-NAME="room_type_room_edit" class="select">
                    <option value="1">Room</option>
                    <option value="2">Suite</option>
                </select>
            </div>
            <div class="input_add_form">
                <label>SWITCH DEVICE *</label>
                <select DATI-INPUT-NAME="room_device_room_edit" class="select">

                </select>
            </div>

        </div>


        <div class="div_btn_add">
            <input DATI-COMPOSENT="SUBMIT" DATI-FOR="form_edit_Room" type="submit" class="btn_valid" value="Update">
        </div>


    </div>
</div>