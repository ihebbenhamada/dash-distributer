let Ui_Chat = class {
    constructor() {
        this.msgsReceive=[];
        this.departments=[];
        this.msgByGuest=[];

    }

    MSGLIST(data){

        this.msgsReceive = data.list;

    }
    DEPARTMENTLIST(data){

        this.departments = data.list;

    }

    MSGBYGUEST(data){

        this.msgByGuest = data.list;

    }


/*    SHOWSERVICES(){
        var event = new CustomEvent("showDepartementNav",
            { detail: {
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


                    ]} });
        document.dispatchEvent(event);
    }*/
};

let chat_ui = new Ui_Chat();