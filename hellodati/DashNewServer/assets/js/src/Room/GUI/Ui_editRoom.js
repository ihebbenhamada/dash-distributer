let Ui_editRoom = class {
    constructor() {
        this.EVENT_UI();
        this.msgErreurUpdateRoom=[];
    }


    DATALIST_AVAILABLE_DEVICE(data){
        var options = "";
        for(var i = 0; i<data.length; i++){
            options = options+"<option value='"+data[i].id+"'>"+data[i].imei+"</option>";
        }
        $("[dati-input-name=room_device_room_edit]").html(options);
        try {
            var options2 ="<option value=''>select imei</option><option value='"+roomList_ui.selectedRoom.Device.id+"'>"+roomList_ui.selectedRoom.Device.imei+"</option>"+options;
            $("[DATI-INPUT-NAME=room_device_room_edit]").html(options2);
            $("[DATI-INPUT-NAME=room_device_room_edit]").val(roomList_ui.selectedRoom.Device.id);
        }catch (e) {
            $("[dati-input-name=room_device_room_edit]").html("<option value=''>select imei</option>"+options);
        }
    }


    VERIF_FORM_EDIT_ROOM(element){
        this.msgErreurUpdateRoom=[];
        dati_Erreurs.UPDATE("UpdateRoomErreurs");
        var roomNumber = $(element).find("[DATI-INPUT-NAME=room_number_room_edit]").val();
        var section = $(element).find("[DATI-INPUT-NAME=room_section_room_edit]").val();
        var floor = $(element).find("[DATI-INPUT-NAME=room_floor_room_edit]").val();
        var capacity = $(element).find("[DATI-INPUT-NAME=room_capacity_room_edit]").val();
        var type = $(element).find("[DATI-INPUT-NAME=room_type_room_edit]").val();
        var device = $(element).find("[DATI-INPUT-NAME=room_device_room_edit]").val();


        if(roomNumber===""){
            this.msgErreurUpdateRoom.push("Room number is required");
            dati_Erreurs.UPDATE("UpdateRoomErreurs");
        }else if(capacity===""){
            this.msgErreurUpdateRoom.push("Capacity is required");
            dati_Erreurs.UPDATE("UpdateRoomErreurs");
        }else if(type===""){
            this.msgErreurUpdateRoom.push("Type is required");
            dati_Erreurs.UPDATE("UpdateRoomErreurs");
        }else if(floor===""){
            this.msgErreurUpdateRoom.push("Floor is required");
            dati_Erreurs.UPDATE("UpdateRoomErreurs");
        }else {

            SSAPI.SUBMIT({
                uri:"/Room/update",
                data:{
                    room_number: roomNumber,
                    section: section,
                    floor: floor,
                    capacity: capacity,
                    type: type,
                    device_id: device,
                    room_id: roomList_ui.selectedRoom.id,
                },
                onsuccess:"RoomUpdated",
                onerror:"RoomUpdated_error"
            });
        }
    }



    EVENT_UI(){
        $(document).ready(function(){
            $(document).on('click','[DATI-FOR=form_edit_Room] [DATI-COMPOSENT=SUBMIT]',function() {
                var formId = $(this).attr("DATI-FOR");
                var fn = $("[FORM-ID="+formId+"]").attr("DATI-SEND");
                var element = "$('[FORM-ID="+formId+"]')";
                fn=fn+"("+element+")";
                eval(fn);
            });

        });
    }
};

let dati_edit_room = new Ui_editRoom();

