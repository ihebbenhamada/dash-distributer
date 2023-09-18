let Ui_AppendMsgToList = class {
    constructor() {
        $(document).ready(function () {
            $("[dati-send-message=theSender]").keypress(function (event) {
                if ( event.which == 13 ) {
                    AppendMsgToList_ui.READ_MSG_VALUE();
                }
            })
        })

    }





    READ_MSG_VALUE(){

        var myMsgToSend =  $("[dati-send-message=theSender]").val();

        if (myMsgToSend !== ""){
            var appendMsg = {
                id:1,
                id_sender:depInChat_ui.selectedService.id,
                id_receiver:ItemMsgReceive_ui.selectedMsgRecieve.id_sender,
                msg:myMsgToSend,
                is_seen:0,
                name_sender:ItemMsgReceive_ui.selectedMsgRecieve.name_sender,
                room_number:ItemMsgReceive_ui.selectedMsgRecieve.room_number,
                time:new Date().getHours() +":"+ new Date().getMinutes(),
                ve:ItemMsgReceive_ui.selectedMsgRecieve.ve,
                imei:ItemMsgReceive_ui.selectedMsgRecieve.imei,
                is_active:0
            }
            var myList = eval(chat_ui.msgByGuest);
            myList.push(appendMsg);
            Messenger_ui.UPDATE("MsgInBox");
            $("[dati-send-message=theSender]").val("");

        }
    }







}




let AppendMsgToList_ui = new Ui_AppendMsgToList();