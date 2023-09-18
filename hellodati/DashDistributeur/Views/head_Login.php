<!doctype html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard HelloDati</title>
    <script src="//kit.fontawesome.com/57447fb040.js" crossorigin="anonymous"></script>
    <script type="text/javascript" src="//code.jquery.com/jquery-3.x-git.min.js"></script>
    <script src="/assets/js/config/SSAPI_MANAGER.js"></script>
    <script src="/assets/js/config/SSAPI.js"></script>
    <script src="/assets/js/src/User/GUI/Ui_user.js"></script>
    <script src="/assets/js/src/User/Implements/IUser.js"></script>


    <style type="text/css">
        <?php
            include(root."/assets/css/loginPage.css");
        ?>
    </style>
    <script type="text/javascript">
        $("document").ready(function(){
            document.addEventListener("successAuth", function(e){
                  $("[DATI-SPINNER-LOGIN]").css("display","none");
                 $("[DATI-ERRRUE-MSG-LOGIN]").css("display","none");
                console.log("successAuth event lisner",e.detail.res[0]);
                console.log(e.detail.res[0]);
                SSAPI.REMEMBER({
                    USER: JSON.stringify(e.detail.res[0]),
                    onsuccess: "session_saved"
                })
                /*SSAPI.REMEMBER_SESSION({
                    onsuccess: "session_saved"
                });*/

            }, false);

            document.addEventListener("failedAuth", function(e){
             $("[DATI-SPINNER-LOGIN]").css("display","none");
             $("[DATI-ERRRUE-MSG-LOGIN]").css("display","inline-block");
                console.log("failedAuth event lisner"+e.detail);
            }, false);



            document.addEventListener("session_saved", function(e){
                window.location.replace(window.location.protocol+"//"+window.location.hostname);
            }, false);
            $(".btn_send").click(function(){
            console.log("clickeddd");
            console.log( $("#username").val(),"clickeddd");
            console.log($("#password").val(),"clickeddd");
            $("[DATI-SPINNER-LOGIN]").css("display","inline-block");
                SSAPI.SUBMIT({
                    uri:"/Emp/authentification_Provider",
                    data: {username: $("#username").val(), password: $("#password").val()},
                     onsuccess: "successAuth",
                     onerror: "failedAuth"
                 })
            });
        });
    </script>


</head>
