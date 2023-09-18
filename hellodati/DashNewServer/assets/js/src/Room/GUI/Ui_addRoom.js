let Ui_addRoom = class {
    constructor() {
        this.EVENT_UI();
        this.msgErreurAddRoom=[];
    }

    DATALIST_AVAILABLE_DEVICE(data){
        var options = "<option value=''>select imei</option>";
        for(var i = 0; i<data.length; i++){
            options = options+"<option value='"+data[i].id+"'>"+data[i].imei+"</option>";
        }
        $("[dati-input-name=add_device_add_room]").html(options);
    }


    RESET_ADD_FORM_ROOM(){
        $("[FORM-ID=form_add_Room]").find("[DATI-INPUT-NAME=room_number_add_room]").val('');
        $("[FORM-ID=form_add_Room]").find("[DATI-INPUT-NAME=section_add_room]").val('');
        $("[FORM-ID=form_add_Room]").find("[DATI-INPUT-NAME=floor_add_room]").val('');
        $("[FORM-ID=form_add_Room]").find("[DATI-INPUT-NAME=capacity_add_room]").val(1);
        $("[FORM-ID=form_add_Room]").find("[DATI-INPUT-NAME=type_add_room]").val(0);
        $("[FORM-ID=form_add_Room]").find("[DATI-INPUT-NAME=add_device_add_room]").val('');
    }


    VERIF_FORM_ADD_ROOM(element){

        this.msgErreurAddRoom = [];
        dati_Erreurs.UPDATE("AddRoomErreurs");
        var roomNumber = $(element).find("[DATI-INPUT-NAME=room_number_add_room]").val();
        var section = $(element).find("[DATI-INPUT-NAME=section_add_room]").val();
        var floor = $(element).find("[DATI-INPUT-NAME=floor_add_room]").val();
        var capacity = $(element).find("[DATI-INPUT-NAME=capacity_add_room]").val();
        var type = $(element).find("[DATI-INPUT-NAME=type_add_room]").val();
        var device_id= $(element).find("[DATI-INPUT-NAME=add_device_add_room]").val();

        if(roomNumber ==""){
            this.msgErreurAddRoom.push("room number is required");
            dati_Erreurs.UPDATE("AddRoomErreurs");
        }
        if(floor!=="" && isNaN(floor)){
            this.msgErreurAddRoom.push("Floor should be a number");
            dati_Erreurs.UPDATE("AddRoomErreurs");
        }
        if(this.msgErreurAddRoom.length == 0) {
            var data = {
                room_number: roomNumber,
                section: section,
                floor: floor,
                capacity: capacity,
                type: type,
                device_id: device_id

            };

            SSAPI.SUBMIT({
                uri:"/Room/add",
                data:data,
                onsuccess:"RoomAdded",
                onerror:"RoomAdded_error"
            });
        }

    }



    /*SELECT_DEVICE_ROOM(){
        var val = $("[DATI-ID=switcherAddRoom]").find("[type=checkbox]").is(":checked");

        /!*var switcherC =$("[DATI-ID=switcherAddRoom]");*!/
        if(val){
            $("[DATI-INPUT-NAME=link_to_available_device]").css("display","block");
            $("[DATI-INPUT-NAME=link_to_linked_device]").css("display","none");
            //$(switcherC).find(".flipswitch-switch").css("background-color","#E0CD08");
        }else{
           // $(switcherC).find(".flipswitch-switch").css("background-color", "#f58635");

            $("[DATI-INPUT-NAME=link_to_available_device]").css("display","none");
            $("[DATI-INPUT-NAME=link_to_linked_device]").css("display","block");
        }
    }*/


    EVENT_UI(){

    }
};

let dati_add_room = new Ui_addRoom();
