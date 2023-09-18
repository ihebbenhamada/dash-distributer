let Ui_guestList = class {

    constructor() {
        this.total = 0;
        this.nbrRows=10;
        this.totalS = 0;
        this.nbrRowsS=10;
        this.selectedGuest=null;
        this.lastSearchBy ="";
        $("[DATI-ID=pagination_guestList]").attr("DATI-NBR-ROW",this.nbrRows);
        this.filterBy={
            "Guest Name" : 1,
            "Room Number" : 2,
        };
        $(document).on('change','[DATI-ID=searchBarGuestList] [DATI-ID=listGuests_filter_by]',function(){
            var filterSelected = $(this).val();
            console.log(filterSelected);

            switch (filterSelected) {
                case "1" :
                    iGuest.GET_ALL_GUESTS2();
                    $("[DATI-ID=searchBarGuestList] [dati-composent=input]").css("display","none");
                    $("[DATI-ID=searchBarGuestList] [dati-composent=input]").val("");
                    $("[DATI-ID=searchBarGuestList] [DATI-ID=listGuests_filter_by]").val(filterSelected);
                    $("[DATI-ID=searchBarGuestList] [DATI-ID=listGuests_filter_by]").css("display","inline-block");
                    $("[DATI-ID=searchBarGuestList] [DATI-ID=listguests_search_byname]").css("display","inline-block");
                    break;
                case "2" :
                    iGuest.GET_ALL_GUESTS2();
                    $("[DATI-ID=searchBarGuestList] [dati-composent=input]").css("display","none");
                    $("[DATI-ID=searchBarGuestList] [dati-composent=input]").val("");
                    $("[DATI-ID=searchBarGuestList] [DATI-ID=listGuests_filter_by]").val(filterSelected);
                    $("[DATI-ID=searchBarGuestList] [DATI-ID=listGuests_filter_by]").css("display","inline-block");
                    $("[DATI-ID=searchBarGuestList] [DATI-ID=listguests_search_byroom]").css("display","inline-block");
                    break;

            }
        });
    }

    DATALIST(data){
        this.guests = data.res;
        this.total = data.res[0].count1;
        this.nbrRows = data.res[0].quantity1;

        console.log("total rows",this.total);
        console.log("nbr rows",this.nbrRows);
        //dati_table.UPDATE("guestList");
    }

    getGuestName(attribute){
        if (attribute!=null || attribute!="null"){
            var pos = roomList_ui.GET_POSITION_IN_TAB(this.guests, attribute);
            return this.guests[pos].f_name+" "+this.guests[pos].l_name;
        }else {
            return "";
        }
    }
    ClearPw(element){
        var pos = $(element).parent().parent().attr("DATI-ROW");
        var id = this.guests[pos].id;
        SSAPI.SUBMIT({
            uri:"/Guest/clear_password",
            onsuccess:"Guest_Password_cleared",
            onerror:"Guest_Password_cleared_error",
            data:{
                guest_id:id
            }
        })
    }
    CheckOut(element){
        var pos = $(element).parent().parent().attr("DATI-ROW");
        var id = this.guests[pos].id;
        SSAPI.SUBMIT({
            uri:"/Guest/checkOut",
            onsuccess:"Guest_CheckOut",
            onerror:"Guest_CheckOut_error",
            data:{
                guest_id:id
            }
        })
    }
    getRoomNumber(attribute){
        if (attribute!=null || attribute!="null"){
            var pos = roomList_ui.GET_POSITION_IN_TAB(this.guests, attribute);
            if(this.guests[pos]["Room"]!=null){
                var section="";
                var floor = "";
                var room_number="";
                if(this.guests[pos]["Room"].section != null){
                    section = "S"+this.guests[pos]["Room"].section;
                }else{
                    section = "S";
                }
                if(this.guests[pos]["Room"].floor != null){
                    floor = "F"+this.guests[pos]["Room"].floor;
                }else {
                    floor = "F";
                }
                if(this.guests[pos]["Room"].room_number != null){
                    room_number = "N"+this.guests[pos]["Room"].room_number;
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
    /*GET_HTML_CheckOut(residence){
        if(residence != null && residence != 'null' && residence != ''){
            return '<i style="font-size: 18px; cursor: pointer" class="fas fa-sign-out-alt" title="CheckOut" onclick="guestList_ui.CheckOut(this)"></i>';
        }else{
            return "--";
        }
    }
    GET_HTML_ClearPw(pw){
        //console.log(guest,"zzzzzzzzzzzzzz");
        if(pw != null && pw != 'null' && pw != ''){
            return '<i style="font-size: 18px; cursor: pointer" class="fas fa-key" title="Reset Password" onclick="guestList_ui.ClearPw(this)"></i>';
        }else{
            return "--";
        }
    }*/

    CHECK_OUT_GUEST(id){

        SSAPI.SUBMIT({
            uri:"/Guest/checkOut",
            onsuccess:"Guest_CheckOut",
            onerror:"Guest_CheckOut_error",
            data:{
                guest_id:id
            }
        })
    }
    RESET_PASSWORD_GUEST(id){

        SSAPI.SUBMIT({
            uri:"/Guest/clear_password",
            onsuccess:"Guest_Password_cleared",
            onerror:"Guest_Password_cleared_error",
            data:{
                guest_id:id
            }
        })
    }
    CLEAR_DATA(){
        var id = this.selectedGuest.id;
        console.log(id);
    }

    GET_HTML_Edit(id){
        if(id != null && id != 'null' && id != ''){
            return '<i title="Edit" style="cursor: pointer;padding: 5px;" DATI-TD-STYLE="text-align:center" DATI-LINK="EditGuest"  DATI-PATH="Front Office &nbsp&nbsp&nbsp > &nbsp&nbsp&nbsp Guests &nbsp&nbsp&nbsp > &nbsp&nbsp&nbsp Edit Form" onclick="guestList_ui.setSelected(this)" class="fas fa-pencil-alt fa-lg"></i>';
        }else{
            return "";
        }
    }
    GET_HTML_Delete(id){
        if(id != null && id != 'null' && id != ''){
            return '<i title="Delete" style="cursor: pointer;padding: 5px" DATI-TD-STYLE="text-align:right" onclick="guestList_ui.DELETE(this)" class="far fa-trash-alt fa-lg"></i>';
        }else{
            return "";
        }
    }
    GET_HTML_Plus(id){
        if(id != null && id != 'null' && id != ''){
            return '<i title="Details" style="cursor: pointer;padding: 5px" DATI-TD-STYLE="text-align:right" DATI-LINK="detailsGuest" onclick="guestList_ui.setSelected(this)" class="fas fa-ellipsis-v fa-lg"></i>';
        }else{
            return "";
        }
    }
//*********************************
    TOGGEL_ALERTE(){
        $("[DATI-PAGE=ListGuests]").find("[dati-id=GuestDeleteAlerte]").find("[class=overlay_restau]").css("display", "block");
    }

    CANCEL_ALERTE(){
        $("[DATI-PAGE=ListGuests]").find("[dati-id=GuestDeleteAlerte]").find("[class=overlay_restau]").css("display", "none");
    }

    VALIDATE_ALERTE(){
        var id_guest = this.selectedGuest.id;

        iGuest.DELETE_GUEST(id_guest);

    }

    DELETE_NAME(){
        var fName = this.selectedGuest.f_name;
        var lName = this.selectedGuest.l_name;
        var fName = fName.toUpperCase();
        var lName = lName.toUpperCase();
        $("[DATI-ID=delete-item-name]").html("Are you sure to delete guest "+fName+" "+lName);
    }

    DELETE(rest_element){
        this.setSelected(rest_element);
        this.TOGGEL_ALERTE();
        this.DELETE_NAME();
    }
//*********************************
    TOGGEL_ALERTE_CHECKOUT(){
        $("[DATI-PAGE=detailsGuest]").find("[dati-id=GuestCheckOutAlerte]").find("[class=overlay_restau]").css("display", "block");
    }

    CANCEL_ALERTE_CHECKOUT(){
        $("[DATI-PAGE=detailsGuest]").find("[dati-id=GuestCheckOutAlerte]").find("[class=overlay_restau]").css("display", "none");
    }

    VALIDATE_ALERTE_CHECKOUT(){
        var id_guest = this.selectedGuest.id;
        this.CHECK_OUT_GUEST(id_guest);
    }

    DELETE_NAME_CHECKOUT(){
        var fName = this.selectedGuest.f_name;
        var lName = this.selectedGuest.l_name;
        var fName = fName.toUpperCase();
        var lName = lName.toUpperCase();
        $("[DATI-ID=delete-item-name]").html("Are you sure to checkout guest "+fName+" "+lName);
    }

    DELETE_CHECKOUT(){
        console.log("aaaa",this.selectedGuest);
        this.TOGGEL_ALERTE_CHECKOUT();
        this.DELETE_NAME_CHECKOUT();
    }
//*****************************
    TOGGEL_ALERTE_RESET_PASSWORD(){
        $("[DATI-PAGE=detailsGuest]").find("[dati-id=GuestResetPasswordAlerte]").find("[class=overlay_restau]").css("display", "block");
    }

    CANCEL_ALERTE_RESET_PASSWORD(){
        $("[DATI-PAGE=detailsGuest]").find("[dati-id=GuestResetPasswordAlerte]").find("[class=overlay_restau]").css("display", "none");
    }

    VALIDATE_ALERTE_RESET_PASSWORD(){
        var id_guest = this.selectedGuest.id;
        this.RESET_PASSWORD_GUEST(id_guest);
    }

    DELETE_NAME_RESET_PASSWORD(){
        var fName = this.selectedGuest.f_name;
        var lName = this.selectedGuest.l_name;
        var fName = fName.toUpperCase();
        var lName = lName.toUpperCase();
        $("[DATI-ID=delete-item-name]").html("Are you sure to reset password for  "+fName+" "+lName);
    }

    DELETE_RESET_PASSWORD(){
        console.log("aaaa",this.selectedGuest);
        this.TOGGEL_ALERTE_RESET_PASSWORD();
        this.DELETE_NAME_RESET_PASSWORD();
    }
// *****************************
    GET_POSITION_IN_TAB(list,id){
        for(var i=0; i<list.length;i++){
            if(list[i].id == id){
                return i;
            }
        }
        return -1;
    }

    DELETE_ID_FROM_DATATABLE(id){
        var pos = guestList_ui.GET_POSITION_IN_TAB(guestList_ui.guests,id);
        if(pos != -1){
            guestList_ui.guests.splice(pos, 1);
        }
        dati_table.UPDATE("guestList");
        guestList_ui.CANCEL_ALERTE();
    }

    DELETE_PASSWORD_FROM_DATATABLE(id){
        var pos = guestList_ui.GET_POSITION_IN_TAB(guestList_ui.guests,id);
        if(pos != -1){
            guestList_ui.guests[pos].password=null;
        }
        dati_table.UPDATE("guestList");
        guestList_ui.CANCEL_ALERTE_RESET_PASSWORD();
    }

    DELETE_RESIDENCE_FROM_DATATABLE(id){
        var pos = guestList_ui.GET_POSITION_IN_TAB(guestList_ui.guests,id);
        if(pos != -1){
            guestList_ui.guests[pos].Residence=null;
            guestList_ui.guests[pos]["Room"].room_number=null;
        }
        dati_table.UPDATE("guestList");
        guestList_ui.CANCEL_ALERTE_CHECKOUT();
    }

    INIT_dataTable(){
        /*var action = '<tr DATI-COMPOSENT="datatable-icon-edit" DATI-TD-STYLE="text-align:center" DATI-LINK="EditGuest"\n' +
            '            onclick="guestList_ui.setSelected(this)"></tr>\n' +
            '<tr DATI-COMPOSENT="datatable-icon-detail" DATI-TD-STYLE="text-align:right" DATI-LINK="detailsGuest"\n' +
            '            onclick="guestList_ui.setSelected(this)"></tr>\n' +
            '<tr DATI-COMPOSENT="datatable-icon-delete" DATI-TD-STYLE="text-align:right"\n' +
            '            onclick="guestList_ui.DELETE(this)"></tr>';
        $("[DATI-ID=guestList]").append(action);*/
    }

    RESEARCH_BY_GUEST(data){
        guestList_ui.guests=data;
        dati_table.UPDATE("guestList");
    }

    RESEARCH_BY_ROOM_NUMBER(data){
        guestList_ui.guests=data;
        dati_table.UPDATE("guestList");
    }

    fillPageDetail(){
        try {
            $("[DATI-ID=check_in]").html(this.selectedGuest.Residence.arrival_date+" "+this.selectedGuest.Residence.arrival_time);
        }catch (e) {
            $("[DATI-ID=check_in]").html("--");
        }
        
        try {
            $("[DATI-ID=check_out]").html(this.selectedGuest.Residence.departure_date+" "+this.selectedGuest.Residence.departure_time);
        }catch (e) {
            $("[DATI-ID=check_out]").html("--");
        }
        try {
            var section ="";
            var floor = "";
            var roomNumber="";
            if (this.selectedGuest.Room.section!=null){
                section ="S"+this.selectedGuest.Room.section;
            }else {
                section ="S";
            }
            if (this.selectedGuest.Room.floor!=null){
                floor ="F"+this.selectedGuest.Room.floor;
            }else {
                floor ="F";
            }
            if (this.selectedGuest.Room.room_number!=null){
                roomNumber ="N"+this.selectedGuest.Room.room_number;
            }else {
                roomNumber ="N";
            }
            $("[DATI-ID=room]").html(section+"-"+floor+"-"+roomNumber);
        }catch (e) {
            $("[DATI-ID=room]").html("--");
        }

        try {
            $("[DATI-ID=born]").html(this.selectedGuest.birthDay);
        }catch (e) {
            $("[DATI-ID=born]").html("--");
        }

        try {
            $("[DATI-ID=email]").html(this.selectedGuest.email);
        }catch (e) {
            $("[DATI-ID=email]").html("--");
        }

        try {
            $("[DATI-ID=phone_number]").html(this.selectedGuest.phone_number);
        }catch (e) {
            $("[DATI-ID=phone_number]").html("--");
        }

        try {
            $("[DATI-ID=short_number]").html(this.selectedGuest.prefix);
        }catch (e) {
            $("[DATI-ID=short_number]").html("--");
        }


        $("[DATI-ID=id_passport]").html(this.selectedGuest.passport);
        $("[DATI-ID=country]").html(this.selectedGuest.Country.name);
        $("[DATI-ID=guest_name]").html("Guest Name : "+this.selectedGuest.f_name+" "+this.selectedGuest.l_name);

    }

    DATALIST_AVAILABLE_ROOM_EDIT(data){
        var options = "";
        for(var i = 0; i<data.length; i++){
            options = options+"<option value='"+data[i].id+"'>"+data[i].room_number+"</option>";
        }
        try {
            var options2 ="<option value=''>select room</option><option value='"+this.selectedGuest.Room.id+"'>"+this.selectedGuest.Room.room_number+"</option>"+options;
            $("[DATI-INPUT-NAME=room_edit_guest]").html(options2);
            $("[DATI-INPUT-NAME=room_edit_guest]").val(this.selectedGuest.Room.id);
        }catch (e) {
            $("[dati-input-name=room_edit_guest]").html("<option value=''>select room</option>"+options);
        }
    }

    fillPageEditGuest(){
        $("[DATI-INPUT-NAME=prefix]").val(this.selectedGuest.prefix);
        try {
            $("[DATI-INPUT-NAME=first_name_edit_guest]").val(this.selectedGuest.f_name);
        }catch (e) {
            $("[DATI-INPUT-NAME=first_name_edit_guest]").val('');
        }
        try {
            $("[DATI-INPUT-NAME=last_name_edit_guest]").val(this.selectedGuest.l_name);
        }catch (e) {
            $("[DATI-INPUT-NAME=last_name_edit_guest]").val('');
        }
        try {
            $("[DATI-INPUT-NAME=born_edit_guest]").val(this.selectedGuest.birthDay);
        }catch (e) {
            $("[DATI-INPUT-NAME=born_edit_guest]").val('');
        }
        try {
            $("[DATI-INPUT-NAME=country_edit_guest]").val(this.selectedGuest.Country.id);
        }catch (e) {
            $("[DATI-INPUT-NAME=country_edit_guest]").val('');
        }
        try {
            $("[DATI-INPUT-NAME=phone_number_edit_guest]").val(this.selectedGuest.phone_number);
        }catch (e) {
            $("[DATI-INPUT-NAME=phone_number_edit_guest]").val('');
        }
        try {
            $("[DATI-INPUT-NAME=id_passport_edit_guest]").val(this.selectedGuest.passport);
        }catch (e) {
            $("[DATI-INPUT-NAME=id_passport_edit_guest]").val('');
        }


        try {
            $("[DATI-INPUT-NAME=arrival_date_edit_guest]").val(this.selectedGuest.Residence.arrival_date);
        }catch (e) {
            $("[DATI-INPUT-NAME=arrival_date_edit_guest]").val('');
        }
        try {
            $("[DATI-INPUT-NAME=arrival_time_name_edit]").val(this.selectedGuest.Residence.arrival_time);
        }catch (e) {
            $("[DATI-INPUT-NAME=arrival_time_name_edit]").val('');
        }
        try {
            $("[DATI-INPUT-NAME=departure_date_edit]").val(this.selectedGuest.Residence.departure_date);
        }catch (e) {
            $("[DATI-INPUT-NAME=departure_date_edit]").val('');
        }
        try {
            $("[DATI-INPUT-NAME=departure_time_edit]").val(this.selectedGuest.Residence.departure_time);

        }catch (e) {
            $("[DATI-INPUT-NAME=departure_time_edit]").val('');
        }
        try {
            $("[DATI-INPUT-NAME=email_edit_guest]").val(this.selectedGuest.email);

        }catch (e) {
            $("[DATI-INPUT-NAME=email_edit_guest]").val('');
        }

        }
    setSelected(iconDetail){
        var i = $(iconDetail).parent().parent().attr("DATI-ROW");
        this.selectedGuest = this.guests[i];
    }

};

let guestList_ui = new Ui_guestList();