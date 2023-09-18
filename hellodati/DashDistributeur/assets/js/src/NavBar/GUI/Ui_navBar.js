let Ui_navBar = class {
    constructor() {
        this.EVENT_UI();

    }

    EVENT_UI() {
        $(document).ready(function () {
            var event = new CustomEvent("SHOW_PAGE", {
                detail: {
                    pageLink: "Hotels",
                    pagePath: "Hotels"
                }
            });


            document.dispatchEvent(event);
        });


        //Open Close Lists In Navbar
        $(document).on('click', '.dashboard_sidebar [FOR-ITEM-LIST]', function () {
            var item = $(this).attr("FOR-ITEM-LIST");
            console.log(item, "item");

            var display = $("[ITEM-LIST=" + item + "]").css("display");
            if (display == "block") {
                $("[ITEM-LIST=" + item + "]").css("display", "none");
            } else {
                $("[ITEM-LIST]").css("display", "none");
                $("[ITEM-LIST=" + item + "]").css("display", "block");
            }

        });

        //Click On Links Dati

        $(document).on('click', '[DATI-LINK]', function () {
            console.log("clickeddd");
            var link = $(this).attr("DATI-LINK");
            console.log(link, "clickeddd");
            var path = $(this).attr("DATI-PATH");

            if (link != "#") {

                var page = "[DATI-PAGE=" + link + "]";

                $("[DATI-PAGE]").css("display", "none");
                if ($(page).attr("DATI-DISPLAY")) {
                    $(page).css("display", $(page).attr("DATI-DISPLAY"));
                } else {
                    $(page).css("display", "inline-block");
                }
                //Show Page
                var event = new CustomEvent("SHOW_PAGE", {
                    detail: {
                        pageLink: link,
                        pagePath: path
                    }
                });


                document.dispatchEvent(event);


            }


        });
    }
}


let dati_navBar = new Ui_navBar();