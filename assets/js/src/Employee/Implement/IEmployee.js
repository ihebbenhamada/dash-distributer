class imp_Employee{
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();
    }

    ADD_EMPLOYEE_API(data){
        console.log("excute the api")
        SSAPI.SUBMIT({
            uri: "/Employee/add",
            data: data,
            onsuccess: "EmployeeAdded",
            onerror: "EmployeeAdded_error"
        });
}
    EVENTS_UI(){
        document.addEventListener("SHOW_PAGE", function(e){

            var page = e.detail.pageLink;
            if(page == "EmpolyeeDati"){

                var event = new CustomEvent("EmployeeReceive", {
                    detail: {
                        list:[{
                            id:1,
                            name:"Foulen ben foulen 1",
                            username:"Test1",
                            date_birth:"20-10-1995",
                            cin:20202020220,
                            job:"Developer Web",
                            img:"https://apitndati.com/assets/HOTEL39/j2NEUTskkcHhtCDJp6bHiaJRBBPbjnoKp7Su4n0yL5xzFfMVBDAjdD48u39LAEtD3681IFCPO4PuRwfeLUwZ5C4cx0shHUK0EIm7"
                        },{
                            id:2,
                            name:"Foulen ben foulen 2",
                            username:"Test2",
                            date_birth:"20-10-1996",
                            cin:20202020220,
                            job:"Developer Web",
                            img:"https://apitndati.com/assets/HOTEL39/j2NEUTskkcHhtCDJp6bHiaJRBBPbjnoKp7Su4n0yL5xzFfMVBDAjdD48u39LAEtD3681IFCPO4PuRwfeLUwZ5C4cx0shHUK0EIm7"
                        },{
                            id:3,
                            name:"Foulen ben foulen 3",
                            username:"Test3",
                            date_birth:"20-10-1997",
                            cin:20202020220,
                            job:"Designer",
                            img:"https://apitndati.com/assets/HOTEL39/j2NEUTskkcHhtCDJp6bHiaJRBBPbjnoKp7Su4n0yL5xzFfMVBDAjdD48u39LAEtD3681IFCPO4PuRwfeLUwZ5C4cx0shHUK0EIm7"
                        },{
                            id:4,
                            name:"Foulen ben foulen 4",
                            username:"Test4",
                            date_birth:"20-10-1998",
                            cin:20202020220,
                            job:"Designer",
                            img:"https://apitndati.com/assets/HOTEL39/j2NEUTskkcHhtCDJp6bHiaJRBBPbjnoKp7Su4n0yL5xzFfMVBDAjdD48u39LAEtD3681IFCPO4PuRwfeLUwZ5C4cx0shHUK0EIm7"
                        }


                        ]
                    }
                });


                document.dispatchEvent(event);
                //***** EVENT FOR HEADER ********//
                var eventHeader = new CustomEvent("showHeaderEmployee", {
                    detail: {
                        list:[
                            {id:1,
                                title:"List",
                                link:"EmpolyeeDati",
                                icon:"<i class=\"fas fa-stream\"></i>"},
                            {id:2,
                                title:"History",
                                link:"HistoryEmpolyeeDati",
                                icon:"<i class=\"fas fa-list\" ></i>"},
                            {id:3,
                                title:"Add",
                                link:"AddEmpolyeeDati",
                                icon:"<i class=\"fas fa-plus\"></i>"},
                        ]
                    }
                });


                document.dispatchEvent(eventHeader);

            }
            if(page == "AddEmpolyeeDati" || page=="EditEmpolyeeDati"){
                var event = new CustomEvent("EmployeeAuthorisationReceive", {
                    detail: {
                        list:[
                            {
                            fields: [],
                            id: 1,
                            nav_id: 1,
                            privilege: 1,
                            privilege_detail: {C: false, U: false, D: false},
                            privilege_name: "HOME",
                         },
                            {
                                fields: [
                                    {
                                        fields: [],
                                        id: 1,
                                        nav_id: 1,
                                        privilege: 1,
                                        privilege_detail: {C: false, U: false, D: false},
                                        privilege_name: "HOME 1",
                                    },
                                    {
                                        fields: [],
                                        id: 2,
                                        nav_id: 1,
                                        privilege: 1,
                                        privilege_detail: {C: false, U: false, D: false},
                                        privilege_name: "HOME 2",
                                    }
                                ],
                                id: 2,
                                nav_id: 1,
                                privilege: 1,
                                privilege_detail: {C: false, U: false, D: false},
                                privilege_name: "EMPLOYEE",
                            },
                            {
                                fields: [],
                                id: 3,
                                nav_id: 1,
                                privilege: 1,
                                privilege_detail: {C: false, U: false, D: false},
                                privilege_name: "HOTEL",
                            }, {
                                fields: [],
                                id: 4,
                                nav_id: 1,
                                privilege: 1,
                                privilege_detail: {C: false, U: false, D: false},
                                privilege_name: "GUIDE",
                            }



                        ]
                    }
                });


                document.dispatchEvent(event);
                //***** EVENT FOR HEADER ********//
                var eventHeader = new CustomEvent("showHeaderEmployeeAdd", {
                    detail: {
                        list:[
                            {id:1,
                            title:"List",
                            link:"EmpolyeeDati",
                            icon:"<i class=\"fas fa-stream\"></i>"},
                            {id:2,
                             title:"History",
                             link:"EmpolyeeDati",
                             icon:"<i class=\"fas fa-list\" ></i>"},
                            {id:3,
                            title:"Add",
                             link:"EmpolyeeDati",
                            icon:"<i class=\"fas fa-plus\"></i>"}

                        ]
                    }
                });


                document.dispatchEvent(eventHeader);
                /*LANCEMENT TABLE PRIVILAGE */
                dati_table_previlege.UPDATE("previlegeList");
                dati_table_previlege.UPDATE("previlegeListUpdate");
            }
            if(page == "HistoryEmpolyeeDati"){
                var eventHeader = new CustomEvent("showHeaderEmployeeHistory", {
                    detail: {
                        list:[
                            {id:1,
                                title:"List",
                                link:"EmpolyeeDati",
                                icon:"<i class=\"fas fa-stream\"></i>"},
                            {id:2,
                                title:"History",
                                link:"EmpolyeeDati",
                                icon:"<i class=\"fas fa-list\" ></i>"},
                            {id:3,
                                title:"Add",
                                link:"EmpolyeeDati",
                                icon:"<i class=\"fas fa-plus\"></i>"}

                        ]
                    }
                });


                document.dispatchEvent(eventHeader);


                // DATATABLE//
                var event= new CustomEvent("AllEmpHistoryReceive", {
                    detail: {
                        list:[
                            {   id:1,
                                employee_name:"foulen ben foulen 1",
                                date:"20-10-2020",
                                action:"Authentification",
                                action_detail:"Authentification with success"},
                            {   id:2,
                                employee_name:"foulen ben foulen 2",
                                date:"20-10-2020",
                                action:"Authentification",
                                action_detail:"Authentification with success"},
                            {   id:3,
                                employee_name:"foulen ben foulen 3",
                                date:"20-10-2020",
                                action:"Authentification",
                                action_detail:"Authentification with success"},
                            {   id:3,
                                employee_name:"foulen ben foulen 3",
                                date:"20-10-2020",
                                action:"Authentification",
                                action_detail:"Authentification with success"},
                            {   id:3,
                                employee_name:"foulen ben foulen 3",
                                date:"20-10-2020",
                                action:"Authentification",
                                action_detail:"Authentification with success"},
                            {   id:3,
                                employee_name:"foulen ben foulen 3",
                                date:"20-10-2020",
                                action:"Authentification",
                                action_detail:"Authentification with success"},
                            {   id:3,
                                employee_name:"foulen ben foulen 3",
                                date:"20-10-2020",
                                action:"Authentification",
                                action_detail:"Authentification with success"},
                            {   id:3,
                                employee_name:"foulen ben foulen 3",
                                date:"20-10-2020",
                                action:"Authentification",
                                action_detail:"Authentification with success"},
                            {   id:3,
                                employee_name:"foulen ben foulen 3",
                                date:"20-10-2020",
                                action:"Authentification",
                                action_detail:"Authentification with success"},
                            {   id:3,
                                employee_name:"foulen ben foulen 3",
                                date:"20-10-2020",
                                action:"Authentification",
                                action_detail:"Authentification with success"},
                        ]
                    }
                });


                document.dispatchEvent(event);

            }
        }, false);

    }

    EVENTS_SSAPI(){
        document.addEventListener("EmployeeReceive", function(e){
            employee_ui.DATALIST(e.detail);

        }, false);
        document.addEventListener("EmployeeAuthorisationReceive", function(e){
            employee_ui.DATALIST_AUTHORISATION(e.detail);

        }, false);
        document.addEventListener("showHeaderEmployee", function(e){
            employee_ui.DATALIST_HEADER(e.detail);

        }, false);
        document.addEventListener("AllEmpHistoryReceive", function(e){
            employee_ui.DATALIST_HISTORY(e.detail);

        }, false);
    }
}

let iEmployee= new  imp_Employee();