let Ui_ItemMsgReceive = class {
    constructor() {
        this.EVENTS_UI();
        this.selectedMsgRecieve = null;
    }
    FIN_BY_ID_IN_LIST(list,id){
        for(var i=0; i < list.length; i++){
            if(list[i].id == id){
                return list[i];
            }
        }
    }
    SELECTED_SENDER(element){
        var Id_Msg_Reicive = $(element).attr("DATI-ID-MSG-RECEIVE");
        var listSearch = eval($(element).parent().attr("DATI-LIST"));

        this.selectedMsgRecieve =ItemMsgReceive_ui.FIN_BY_ID_IN_LIST(listSearch,Id_Msg_Reicive);
        //console.log(this.selectedMsgRecieve.id_sender,"the selected msg sender");
        this.REMPLIR_DETAIL_GUEST();
        this.ISACTIVE(element);
        //create event to get all msg that id_guest(id_sender) == id_receiver && id_guest == id_sender
        var event = new CustomEvent("MsgByGuestSelected", { detail: {id_guest : this.selectedMsgRecieve.id_sender} });
        document.dispatchEvent(event);
    }
    ISACTIVE(element){
        $("[DATI-PAGE=chat]").find("[dati-id-msg-receive]").css( "background-color","rgb(36, 71, 141)");
        $(element).css( "background-color","rgb(23, 55, 119)");
    }

    REMPLIR_DETAIL_GUEST(){

        $("[DATI-PAGE=chat]").find("[DATI-ID=msg-sender-name]").html(this.selectedMsgRecieve.name_sender);
        $("[DATI-PAGE=chat]").find("[DATI-ID=msg-sender-room-number]").html(this.selectedMsgRecieve.room_number);
        $("[DATI-PAGE=chat]").find("[DATI-ID=msg-sender-virtuel-extension]").html(this.selectedMsgRecieve.ve);
        $("[DATI-PAGE=chat]").find("[DATI-ID=msg-sender-imei]").html(this.selectedMsgRecieve.imei);
    }
    MSG_ITEM(list){
        if(list.is_seen == 1){
            var seenBackground =  " /assets/img/chat/seen.svg";
            var className ="image_seen";
        }else if(list.is_seen == 0){
            var seenBackground =  " /assets/img/chat/notSeen.svg";
            var className ="image_active"
        }
        return'<div class="msg_container" DATI-ID-MSG-RECEIVE="'+list.id+'" onclick="ItemMsgReceive_ui.SELECTED_SENDER(this)">'+
            '<div class="profile"></div>'+
            '<div class="the_msg">'+
            '<div>'+
            '<div class="guest_name">'+
            '<div class="name">'+list.name_sender+'</div>'+
              '<div class="room_number">Room : ('+list.room_number+')</div>'+
           '</div>'+
        '<p class="msg">'+list.msg+'</p>'+
        '</div>'+
        '</div>'+
        '<div class="time">'+
            '<div>'+
            '<p>'+list.time+'</p>'+
        '<div class="'+className+'" style="   background-image: url('+seenBackground+');">'+
            '</div>'+
            '</div>'+
            '</div>'+
            '</div>'
    }
    UPDATE(id){
        var msgR = $("[DATI-ID="+id+"]");
        var lists_name = $(msgR).attr("DATI-LIST");
        var lists = eval(lists_name);
        //console.log(lists[0],"this my list msg");
        this.selectedMsgRecieve = lists[0];
        var event = new CustomEvent("MsgByGuestSelected", { detail: {id_guest : lists[0].id_sender} });
        document.dispatchEvent(event);
       // console.log(msgR,"this my id");
        $(msgR).html("");
        for(var i=0; i<lists.length; i++) {
            var list = lists[i];
            var msgItem = "";
            msgItem += this.MSG_ITEM(list);
            $(msgR).append(msgItem);
        }
        this.REMPLIR_DETAIL_GUEST();
        //console.log(this.selectedMsgRecieve,"this my receive msg");


    }


    EVENTS_UI(){
        var myComposents = document.querySelectorAll("[dati-composent=msgItemContainer]");
        for(var i=0; i<myComposents.length;i++){
            var myComposent = myComposents[i];
            if($(myComposent).attr("dati-update")){
                this.LUNCH($(myComposent).attr("dati-update"),$(myComposent).attr("dati-id"));
            }
        }
    }
    LUNCH(eventName,id){
        document.addEventListener(eventName, function(e){
            setTimeout(function(){
                ItemMsgReceive_ui.UPDATE(id)
            }, 100);
        }, false);
    }

};

let ItemMsgReceive_ui = new Ui_ItemMsgReceive();