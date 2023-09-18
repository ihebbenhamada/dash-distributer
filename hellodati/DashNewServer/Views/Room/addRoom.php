<div class="form_add" FORM-ID="form_add_Room" DATI-SEND="dati_add_room.VERIF_FORM_ADD_ROOM" DATI-PAGE="AddRoom">
    <div
            class="container_msg_erreur"
            DATI-COMPOSENT="msgErreurContainer"
            DATI-ID="AddRoomErreurs"
            DATI-UPDATE="showMsgAddRoom"
            DATI-LIST="dati_add_room.msgErreurAddRoom"
    >
    </div>
    <div class="header_add_form">
        <img src="assets/img/add_room.png">
        <label style="margin-left: 5px"> Add Room</label>
    </div>
    <div class="add_form_container" FORM-ACTION="/Room/Add" DATI-FORM="add-room">

        <div style="width:100%;display: flex;justify-content: space-between">
            <div class="input_add_form">
                <label>ROOM NUMBER *</label>
                <input DATI-INPUT-NAME="room_number_add_room" type="text">
            </div>
            <div class="input_add_form">
                <label>SECTION</label>
                <input DATI-INPUT-NAME="section_add_room" type="text">
            </div>

            <div class="input_add_form">
                <label>FLOOR</label>
                <input DATI-INPUT-NAME="floor_add_room" type="text">
            </div>

        </div>
        <div style="width:100%;display: flex;justify-content: space-between">
            <div class="input_add_form">
                <label>CAPACITY *</label>
                <select DATI-INPUT-NAME="capacity_add_room" class="select">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>

            <div class="input_add_form">
                <label>TYPE *</label>
                <select DATI-INPUT-NAME="type_add_room" class="select">
                    <option value="1">Room</option>
                    <option value="2">Suite</option>
                </select>
            </div>

            <div class="input_add_form">
                <label>ADD DEVICE *</label>
                <select DATI-INPUT-NAME="add_device_add_room" class="select">
                </select>
            </div>


        </div>


        <div class="div_btn_add">
            <input DATI-COMPOSENT="SUBMIT" DATI-FOR="form_add_Room" type="submit" class="btn_valid" value="ADD">
        </div>


    </div>
</div>