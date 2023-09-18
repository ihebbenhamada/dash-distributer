class imp_chats{
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();
    }


    EVENTS_UI(){

        document.addEventListener("SHOW_PAGE", function(e){

            var page = e.detail.pageLink;

             if(page == "chat"){


                 var eventDep = new CustomEvent("showDepartementChat", {
                     detail: {
                         list:[{
                             id:1,
                             title:"Room Service",
                             img:"/assets/img/chat/roomService.svg",
                             img_Inactive:"/assets/img/chat/RooServiceInactive.svg"

                         },
                             {
                                 id:2,
                                 title:"Maintenance",
                                 img:"/assets/img/chat/maintenance.svg",
                                 img_Inactive:"/assets/img/chat/maintenanceinac.svg"

                             },
                             {
                                 id:3,
                                 title:"Restaurant",
                                 img:"/assets/img/chat/restaurant.svg",
                                 img_Inactive:"/assets/img/chat/restaurantinac.svg"

                             }


                         ]
                     }
                 });

                //document.dispatchEvent(event);
                 document.dispatchEvent(eventDep);




            }
            //if(page != "chat"){
               // console.log("mouch f chatttt");
               // ItemMsgReceive_ui.selectedMsgRecieve = null;
         //   }


        }, false);
    }


    EVENTS_SSAPI(){


        document.addEventListener("showDepartementChat", function(e){

            chat_ui.DEPARTMENTLIST(e.detail);


        }, false);
        document.addEventListener("showDepartementNav", function(e){

            nav_ui.CHATNAV(e.detail);


        }, false);
        document.addEventListener("FilterMsgByDep", function(e){

            var id_dep = e.detail.id_dep ;
            //ss-api.submit({
            //uri:"/msgByDep",
            //data:{id:id_dep},
            //onsuccess:"MsgFiltrer"
            //});
            var event = new CustomEvent("MsgFiltrer", {
                detail: {
                    list:[
                        {
                            id:1,
                            id_sender:22,
                            id_receiver:1,
                            msg:"Good Morning",
                            is_seen:0,
                            name_sender:"Rima Rima",
                            room_number:5,
                            time:"1h",
                            ve:10253,
                            imei:1237777774568,
                            is_active:0

                        }, {
                            id:2,
                            id_sender:1,
                            id_receiver:22,
                            msg:"Good Morning",
                            is_seen:0,
                            name_sender:"leila Rima",
                            room_number:5,
                            time:"1h",
                            ve:10253,
                            imei:1237777774568,
                            is_active:0

                        },  {
                            id:6,
                            id_sender:22,
                            id_receiver:1,
                            msg:"please check the air conditioner",
                            is_seen:0,
                            name_sender:"salma Rima",
                            room_number:5,
                            time:"1h",
                            ve:10253,
                            imei:1237777774568,
                            is_active:0

                        }, {
                            id:6,
                            id_sender:1,
                            id_receiver:22,
                            msg:"yes we are coming ",
                            is_seen:0,
                            name_sender:"ali Rima",
                            room_number:5,
                            time:"1h",
                            ve:10253,
                            imei:1237777774568,
                            is_active:0

                        }


                    ]
                }
            });

            document.dispatchEvent(event);



        }, false);
        document.addEventListener("MsgFiltrer", function(e){
            chat_ui.MSGLIST(e.detail)
            ItemMsgReceive_ui.UPDATE("msgBox");



        }, false);



        document.addEventListener("MsgByGuestSelected", function(e){

            var id_guest = e.detail.id_guest;
            //ss-api.submit({
            //uri:"/msgByGuest",
            //data:{id:id_guest},
            //onsuccess:"MsgFiltrerByGuestSelected"
            //});
            var eventMsg = new CustomEvent("MsgFiltrerByGuestSelected", {
                detail: {
                    list:[
                        {
                            id:1,
                            id_sender:22,
                            id_receiver:1,
                            msg:"Good Morning",
                            is_seen:0,
                            name_sender:"Rima Rima",
                            room_number:5,
                            time:"1h",
                            ve:10253,
                            imei:1237777774568,
                            is_active:0

                        }, {
                            id:2,
                            id_sender:1,
                            id_receiver:22,
                            msg:"Good Morning",
                            is_seen:0,
                            name_sender:"salma Rima",
                            room_number:5,
                            time:"1h",
                            ve:10253,
                            imei:1237777774568,
                            is_active:0

                        },  {
                            id:6,
                            id_sender:22,
                            id_receiver:1,
                            msg:"please check the air conditioner",
                            is_seen:0,
                            name_sender:"Rima Ali",
                            room_number:5,
                            time:"1h",
                            ve:10253,
                            imei:1237777774568,
                            is_active:0

                        }, {
                            id:6,
                            id_sender:1,
                            id_receiver:22,
                            msg:"yes we are coming ",
                            is_seen:0,
                            name_sender:"Leila Rima",
                            room_number:5,
                            time:"1h",
                            ve:10253,
                            imei:1237777774568,
                            is_active:0

                        },  {
                            id:6,
                            id_sender:22,
                            id_receiver:2,
                            msg:"please check the air conditioner",
                            is_seen:0,
                            name_sender:"Rima Ali",
                            room_number:5,
                            time:"1h",
                            ve:10253,
                            imei:1237777774568,
                            is_active:0

                        }, {
                            id:6,
                            id_sender:2,
                            id_receiver:22,
                            msg:"yes we are coming ",
                            is_seen:0,
                            name_sender:"Leila Rima",
                            room_number:5,
                            time:"1h",
                            ve:10253,
                            imei:1237777774568,
                            is_active:0

                        },  {
                            id:6,
                            id_sender:22,
                            id_receiver:3,
                            msg:"to fix it",
                            is_seen:0,
                            name_sender:"Rima Ali",
                            room_number:5,
                            time:"1h",
                            ve:10253,
                            imei:1237777774568,
                            is_active:0

                        }, {
                            id:6,
                            id_sender:3,
                            id_receiver:22,
                            msg:"yes i will ",
                            is_seen:0,
                            name_sender:"Leila Rima",
                            room_number:5,
                            time:"1h",
                            ve:10253,
                            imei:1237777774568,
                            is_active:0

                        }



                    ]
                }
            });

            document.dispatchEvent(eventMsg);



        }, false);
        document.addEventListener("MsgFiltrerByGuestSelected", function(e){
            chat_ui.MSGBYGUEST(e.detail)




        }, false);
    }
}

let iChat = new imp_chats();