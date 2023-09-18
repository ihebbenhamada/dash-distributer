<body DATI-COMPOSENT="app">
<div class="grid_container">
    <?php
    include("Views/header.php");
    include("Views/nav.php");

    ?>
    <main>
        <?php

        include("Views/body_iheb.php");
        include("Views/body_mariem.php");


        ?>
        <?php
        include("Views/wireless.php");
        ?>
    </main>
</div>

<script type="text/javascript">







    /*$(document).on('hover','[dati-composent=hotel_info]',function(){
        var parent = $(this).find("[class=block_list_hotels]");
        $(parent).show();
    });*/
    $(document).ready(function () {
        /*$("[dati-composent=hotel_info]").hover(function () {
            var element =  $(this).find("[class=block_list_hotels]");
            $(element).show();

        },function(){
            var element =  $(this).find("[class=block_list_hotels]");
            $(element).hide();
        })*/

        //$("[dati-page=Dashboard]").css("")
        $("[dati-page=Dashboard]").on("contextmenu", function (e) {
            return false;
        });

        $("[dati-composent=notif_info]").hover(function () {
            var element = $(this).find("[class=block_list_notif]");
            $(element).show();

        }, function () {
            var element = $(this).find("[class=block_list_notif]");
            $(element).hide();
        })
    });


    $(document).ready(function () {
        document.addEventListener("SSAPI_READY", function(e){
            /*$("[DATI-PAGE]").css("display", "none");
            $("[DATI-PAGE=Dashboard]").css("display", "grid");
            var event = new CustomEvent("SHOW_PAGE", {
                detail: {
                    pageLink: "Dashboard"
                }
            });
            document.dispatchEvent(event);*/
        }, false);
        $(document).on('click', '[dati-composent=close-pop-up]', function () {

            var parentPopup = $(this).parent();
            var isPop = false;
            while ($(parentPopup).attr("DATI-PAGE-TYPE") != "pop-up" && $(parentPopup).attr("DATI-COMPOSENT") != "app" && $(parentPopup).attr("DATI-PAGE-TYPE") != "pop-up-order-detail") {
                console.log(1111);
                parentPopup = $(parentPopup).parent();
            }

            if ($(parentPopup).attr("DATI-PAGE-TYPE") == "pop-up" || $(parentPopup).attr("DATI-PAGE-TYPE") == "pop-up-order-detail") {
                $(parentPopup).hide();
            }
        });
        $(document).on('click', '[DATI-LINK]', function () {
            var link = $(this).attr("DATI-LINK");
            var path = $(this).attr("DATI-PATH");
            if(link != "#"){
                var page = "[DATI-PAGE=" + link + "]";


                if ($(page).attr("DATI-PAGE-TYPE") == "pop-up") {
                    var contentPage = $(page).html();
                    $(page).html("");
                    $(page).append('<div style="display:flex;justify-content:center" DATI-COMPOSENT="pop-up"' +
                        'DATI-LIST="guestList_ui.guests"' +
                        'DATI-ID="info_guest"' +
                        'DATI-UPDATE="ListGuestsReceive">' +
                        '</div>');
                    $(page).find("[DATI-COMPOSENT=pop-up]").append(contentPage);
                    $(page).css("display", "grid");
                } else {
                    $("[DATI-PAGE]").css("display", "none");
                    if ($(page).attr("DATI-DISPLAY")) {
                        $(page).css("display", $(page).attr("DATI-DISPLAY"));
                    } else {
                        $(page).css("display", "inline-block");
                    }
                }



                //event
                var datievent = $(this).attr("DATI-EVENT");
                //!!!pour filtrer les donneés avant que rediriger vers page restau
                if ($(this).attr("dati-before-link")) {
                    eval($(this).attr("dati-before-link"));
                }
                var event = new CustomEvent("SHOW_PAGE", {
                    detail: {
                        pageLink: link ,
                        pagePath: path
                    }
                });


                document.dispatchEvent(event);
            }




        });
        // const popup = document.getElementById("myPopup");
        // const btn_popup = document.getElementById("btn_popup");
        // btn_popup.addEventListener("click", () => {

        //     if (popup.style.display == "none") {
        //         popup.style.display = "block";
        //     } else if (popup.style.display == "block") {
        //         popup.style.display = "none";
        //     }
        // });

    })


</script>
</body>
</html>