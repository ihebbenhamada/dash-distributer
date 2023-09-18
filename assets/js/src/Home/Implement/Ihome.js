class imp_Home{
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();
    }
    EVENTS_UI(){
/*        document.addEventListener("SHOW_PAGE", function(e) {

            var page = e.detail.pageLink;
            if (page == "Home") {
                var eventh = new CustomEvent("SectionReceive");
                document.dispatchEvent(eventh);
            }
        });*/
        $(document).ready(function() {
            var eventHome = new CustomEvent("SectionReceive2", {
                detail: {
                    list:[{
                        id:1,
                        link:"EmpolyeeDati",
                        img:"https://apitndati.com/assets/HOTEL39/os5YashPhXjNDyyQRuQY9jucmwgqCwEtr2c3l8ZXjDXRDvPoEhSUm42yzPKCzaoccmJToy7QdtJ52WK9yWRomb2otRkyOAlLpT5p"
                    },
                        {
                            id:2,
                            link:"HotelsDati",
                            img:"https://apitndati.com/assets/HOTEL39/xTxFABOLLil176nHFtE025HFuYDeK6Un6rFZVh6Je1T7PeupvAtuO6wXOBlLhqNl4DfrfjjOKcXMQakIEf7PKMAbMbXimtTRqHNP"
                        },
                        {
                            id:3,
                            link:"GuideDati",
                            img:"https://apitndati.com/assets/HOTEL39/YQtod7iYAXQrcsyjAj2gsMLnrNz5EpEysT4gAqOqMFGL2HxIqUXVLisFKQdCM2bYHx5xpBmyz1PKjcHx92rV8GJwpDmSxOcjcIjy"
                        },



                    ]
                }
            });


            document.dispatchEvent(eventHome);
            home_ui.UPDATE("SectionList");
        });

            }


    EVENTS_SSAPI(){
        document.addEventListener("SectionReceive2", function(e){
            home_ui.DATALIST(e.detail);
            console.log(1111111111111);
            var event = new CustomEvent("SectionReceive");
            document.dispatchEvent(event);

        }, false);

        document.addEventListener("SectionReceive", function(e) {
        console.log(22222222222);
        });
    }
}

let iHome= new  imp_Home();