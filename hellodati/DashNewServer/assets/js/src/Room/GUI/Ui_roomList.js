let Ui_roomList = class {
    constructor() {
        this.total = 0;
        this.selectedRoom=null;
        this.nbrRows=10;
        this.totalS = 0;
        this.nbrRowsS=10;
        this.lastSearchBy ="";
        $("[DATI-ID=pagination_roomList]").attr("DATI-NBR-ROW",this.nbrRows);
        this.options={
            "ALL" : '',
            "Free" : 1,
            "Occuped" : 2
        };

        this.filterBy={
            "Room Number" : 1,
            "Guest Name" : 2,
            "Room Status" : 3
        };
        $(document).on('change','[DATI-ID=searchBarRoomList] [DATI-ID=listRooms_filter_by]',function(){
            var filterSelected = $(this).val();
            console.log(filterSelected);

            switch (filterSelected) {
               case "1" :
                   iRoom.GET_ALL_ROOMS2();
                   $("[DATI-ID=searchBarRoomList] [dati-composent=input]").css("display","none");
                   $("[DATI-ID=searchBarRoomList] [dati-composent=input]").val("");
                   $("[DATI-ID=searchBarRoomList] [DATI-ID=listRooms_filter_by]").val(filterSelected);
                   $("[DATI-ID=searchBarRoomList] [DATI-ID=listRooms_filter_by]").css("display","inline-block");
                   $("[DATI-ID=searchBarRoomList] [DATI-ID=listrooms_search_byroomnumber]").css("display","inline-block");
                   break;
               case "2" :
                   iRoom.GET_ALL_ROOMS2();
                   $("[DATI-ID=searchBarRoomList] [dati-composent=input]").css("display","none");
                   $("[DATI-ID=searchBarRoomList] [dati-composent=input]").val("");
                   $("[DATI-ID=searchBarRoomList] [DATI-ID=listRooms_filter_by]").val(filterSelected);
                   $("[DATI-ID=searchBarRoomList] [DATI-ID=listRooms_filter_by]").css("display","inline-block");

                   $("[DATI-ID=searchBarRoomList] [DATI-ID=listrooms_search_byguestname]").css("display","inline-block");
                   break;
               case "3" :
                   iRoom.GET_ALL_ROOMS2();
                   $("[DATI-ID=searchBarRoomList] [dati-composent=input]").css("display","none");
                   $("[DATI-ID=searchBarRoomList] [dati-composent=input]").val("");
                   $("[DATI-ID=searchBarRoomList] [DATI-ID=listRooms_filter_by]").val(filterSelected);
                   $("[DATI-ID=searchBarRoomList] [DATI-ID=listRooms_filter_by]").css("display","inline-block");
                   $("[DATI-ID=searchBarRoomList] [DATI-ID=listRooms_byStatus]").css("display","inline-block");
                   break;
           }
        });
    }

    DATALIST(data){
        this.rooms = data;
        this.total = data[0].count1;
        this.nbrRows = data[0].quantity1;
        //dati_table.UPDATE("roomList");
    }

    DATALIST_AVAILABLE(data){

        this.Av_Rooms = data;
        //dati_table.UPDATE("roomList");
    }


    fillPageDetail(){
        $("[DATI-ID=roomnumber]").html(this.selectedRoom.section+this.selectedRoom.floor+this.selectedRoom.room_number);
        $("[DATI-ID=section]").html(this.selectedRoom.section);
        $("[DATI-ID=floor]").html(this.selectedRoom.floor);
        $("[DATI-ID=capacity]").html(this.selectedRoom.capacity);

        try {
            $("[DATI-ID=linked_to_device]").html(this.selectedRoom.Device.imei);
        }catch (e) {
            $("[DATI-ID=linked_to_device]").html("Not linked to device");
        }

        try {
            $("[DATI-ID=linked_to_guest]").html(this.selectedRoom.Guest.f_name+" "+this.selectedRoom.Guest.l_name);
        }catch (e) {
            $("[DATI-ID=linked_to_guest]").html("Not linked to guest");
        }

    }

    fillPageEditRoom(){

        $("[DATI-INPUT-NAME=room_number_room_edit]").val(this.selectedRoom.room_number);
        try {
            $("[DATI-INPUT-NAME=room_section_room_edit]").val(this.selectedRoom.section);
        }catch (e) {
            $("[DATI-INPUT-NAME=room_section_room_edit]").val("");
        }
        try {
            $("[DATI-INPUT-NAME=room_floor_room_edit]").val(this.selectedRoom.floor);
        }catch (e) {
            $("[DATI-INPUT-NAME=room_floor_room_edit]").val("");
        }
        try {
            $("[DATI-INPUT-NAME=room_capacity_room_edit]").val(this.selectedRoom.capacity);
        }catch (e) {
            $("[DATI-INPUT-NAME=room_capacity_room_edit]").val("");
        }
       try {
           $("[DATI-INPUT-NAME=room_type_room_edit]").val(this.selectedRoom.type);

       }catch (e) {
           $("[DATI-INPUT-NAME=room_type_room_edit]").val(1);
       }
       try {
           $("[DATI-INPUT-NAME=room_device_room_edit]").val(this.selectedRoom.Device.imei);
       }catch (e) {
           $("[DATI-INPUT-NAME=room_device_room_edit]").val("Switch Device");
       }
    }

    DATALIST_AVAILABLE_ROOM_EDIT(data){
        var options = "<option value=''>select room</option>";
        for(var i = 0; i<data.length; i++){
            options = options+"<option value='"+data[i].id+"'>"+data[i].room_number+"</option>";
        }
        $("[dati-input-name=room_edit_guest]").html(options);
    }

    setSelected(iconDetail){
        var i = $(iconDetail).parent().parent().attr("DATI-ROW");
        this.selectedRoom = this.rooms[i];

    }

    TOGGEL_ALERTE(){
        $("[DATI-PAGE=ListRooms]").find("[dati-id=RoomDeleteAlerte]").find("[class=overlay_restau]").css("display", "block");
    }

    CANCEL_ALERTE(){
        $("[DATI-PAGE=ListRooms]").find("[dati-id=RoomDeleteAlerte]").find("[class=overlay_restau]").css("display", "none");
    }

    VALIDATE_ALERTE(){
        var id_room = this.selectedRoom.id;

        iRoom.DELETE_ROOM(id_room);

    }

    DELETE_NAME(){
        var title = this.selectedRoom.room_number;
        var title = title.toUpperCase();
        $("[DATI-ID=delete-item-name]").html("Are you sure to delete Room number "+title);
    }

    DELETE(rest_element){
        this.setSelected(rest_element);
        this.TOGGEL_ALERTE();
        this.DELETE_NAME();
    }

    GET_HTML_Edit(id){
        if(id != null && id != 'null' && id != ''){
            return '<i title="Edit" style="cursor: pointer;padding: 5px;" DATI-TD-STYLE="text-align:center" DATI-LINK="EditRoom" DATI-PATH="Front Office &nbsp&nbsp&nbsp > &nbsp&nbsp&nbsp Rooms &nbsp&nbsp&nbsp > &nbsp&nbsp&nbsp Edit Form" onclick="roomList_ui.setSelected(this)" class="fas fa-pencil-alt fa-lg"></i>';
        }else{
            return "";
        }
    }

    GET_HTML_Delete(id){
        if(id != null && id != 'null' && id != ''){
            return '<i title="Delete" style="cursor: pointer;padding: 5px" DATI-TD-STYLE="text-align:right" onclick="roomList_ui.DELETE(this)" class="far fa-trash-alt fa-lg"></i>';
        }else{
            return "";
        }
    }

    GET_HTML_Plus(id){
        if(id != null && id != 'null' && id != ''){
            return '<i title="Details" style="cursor: pointer;padding: 5px" DATI-TD-STYLE="text-align:right" DATI-LINK="DetailRoom" onclick="roomList_ui.setSelected(this)" class="fas fa-ellipsis-v fa-lg"></i>';
        }else{
            return "";
        }
    }

    getIMEI(attribute){
        if(attribute!=null){
            return attribute;
        }else{
            return "Not linked to device";
        }

    }

    getGuestName(attribute) {
        if (attribute != null || attribute != "null") {
            var pos = roomList_ui.GET_POSITION_IN_TAB(this.rooms, attribute);
            if (this.rooms[pos]["Guest"]!= null) {
               return  this.rooms[pos]["Guest"].f_name+" "+this.rooms[pos]["Guest"].l_name;
            } else {
                return "--";
            }
        }
    }

    checkIn(attribute){
        if (attribute != null || attribute != "null") {
            var pos = roomList_ui.GET_POSITION_IN_TAB(this.rooms, attribute);
            if (this.rooms[pos]["Residence"]!= null) {
                var index1 = this.rooms[pos]["Residence"].arrival_time.indexOf(":");
                if(index1 != -1){
                    var index2 = this.rooms[pos]["Residence"].arrival_time.indexOf(":", index1+1);
                    if(index2 != -1){
                        this.rooms[pos]["Residence"].arrival_time = this.rooms[pos]["Residence"].arrival_time.substr(0, index2);
                    }
                }
                return  this.rooms[pos]["Residence"].arrival_date+" "+this.rooms[pos]["Residence"].arrival_time;
            } else {
                return "--";
            }
        }
    }

    checkOut(attribute){
        if (attribute != null || attribute != "null") {
            var pos = roomList_ui.GET_POSITION_IN_TAB(this.rooms, attribute);
            if (this.rooms[pos]["Residence"]!= null) {
                var index1 = this.rooms[pos]["Residence"].departure_time.indexOf(":");
                if(index1 != -1){
                    var index2 = this.rooms[pos]["Residence"].departure_time.indexOf(":", index1+1);
                    if(index2 != -1){
                        this.rooms[pos]["Residence"].departure_time = this.rooms[pos]["Residence"].departure_time.substr(0, index2);
                    }
                }
                return  this.rooms[pos]["Residence"].departure_date+" "+this.rooms[pos]["Residence"].arrival_time;
            } else {
                return "--";
            }
        }
    }

    getStatusRoom(attribute){
        if(attribute!=null){
            return '<div style="text-align: center;color: rgb(215,92,84);background-color: rgb(247,240,241);border-radius: 20px;padding: 8px;font-size: 13px">Occupied</div>';

        }else{
            return '<div style="text-align: center;color: rgb(159,213,168);background-color: rgb(232,245,237);border-radius: 20px;padding: 8px;font-size: 13px">Free</div>';
        }
    }

    getRoomNumber(attribute){
        if (attribute!=null || attribute!="null"){
            var pos = roomList_ui.GET_POSITION_IN_TAB(this.rooms, attribute);
            if(this.rooms[pos]!=null){
                var section="";
                var floor = "";
                var room_number="";
                if(this.rooms[pos].section != null){
                    section = "S"+this.rooms[pos].section;
                }else{
                    section = "S";
                }
                if(this.rooms[pos].floor != null){
                    floor = "F"+this.rooms[pos].floor;
                }else {
                    floor = "F";
                }
                if(this.rooms[pos].room_number != null){
                    room_number = "N"+this.rooms[pos].room_number;
                }else {
                    room_number = "N";
                }

                return section+"-"+floor+"-"+room_number;
            }else {
                return "--";
            }

        }else {
            return "";
        }
    }

    RESEARCH_BY_GUEST(data){
        console.log(data,"hihihi");
        roomList_ui.rooms=data;
        dati_table.UPDATE("roomList");
    }

    RESEARCH_BY_ROOM_NUMBER(data){
        console.log(data,"hihihi");
        roomList_ui.rooms=data;
        dati_table.UPDATE("roomList");
    }

    RESEARCH_OCCUPED(data){
        console.log(data,"hihihi");
        roomList_ui.rooms=data;
        dati_table.UPDATE("roomList");
    }

    RESEARCH_FREE(data){
        console.log(data,"hihihi");
        roomList_ui.rooms=data;
        dati_table.UPDATE("roomList");
    }

    GET_POSITION_IN_TAB(list,id){
        for(var i=0; i<list.length;i++){
            if(list[i].id == id){
                return i;
            }
        }
        return -1;
    }

    DELETE_ID_FROM_DATATABLE(id){
        var pos = roomList_ui.GET_POSITION_IN_TAB(roomList_ui.rooms,id);
        if(pos != -1){
            roomList_ui.rooms.splice(pos, 1);
        }
        dati_table.UPDATE("roomList");
        roomList_ui.CANCEL_ALERTE();
    }

    getAttribute(attribute){
        if(attribute!=null){
            return attribute;
        }else{
            return "- -";
        }
    }

};

let roomList_ui = new Ui_roomList();