<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello Dati</title>
    <script src="https://kit.fontawesome.com/57447fb040.js" crossorigin="anonymous"></script>
    <script type="text/javascript" src="https://code.jquery.com/jquery-3.x-git.min.js"></script>

    <script src="/assets/js/src/config/SSAPI_MANAGER.js?v=300"></script>
    <script src="/assets/js/src/config/SSAPI.js?v=300"></script>
    <script defer src="/assets/js/home.js?v=2"></script>
    <link rel="stylesheet" type="text/css" href="assets/css/wireless.css" media="all"/>
    <script type="text/javascript">
        $(document).ready(function () {

            SSAPI.get_session_var({name:"USER",onsuccess:"userReceive"});

            document.addEventListener("userReceive",function (e) {
                console.log(e.detail.res,"zzzzzzzzz");
                editProfile_ui.user=e.detail.res;
                $("[dati-name-hotel]").html(e.detail.res.Hotel.name);
                $("[DATI-STAR-HOTEL]").attr("repeat",e.detail.res.Hotel.stars);
                $("[DATI-LOGO-HOTEL]").attr("src",e.detail.res.Hotel.logo);
                $("[dati-name-employee]").html(e.detail.res.Employee.name);
                if (e.detail.res.Employee.img == null || e.detail.res.Employee.img=="" || e.detail.res.Employee.img=="NULL"){
                    $("[dati-img-profile-user]").attr("src", "/assets/img/profile.png");
                }else {
                    $("[dati-img-profile-user]").attr("src", e.detail.res.Employee.img);
                }

                $("[img_profile_user_uploader]").css("background-image", "url('"+e.detail.res.Employee.img+"')");
                $("[dati-last-conx]").html("Last Connexion :"+e.detail.res.last_connection);
                $('[DATI-STAR-HOTEL][repeat]').each(function() {
                    var toRepeat = $(this).text();
                    var times = parseInt($(this).attr('repeat'));
                    var repeated = Array(times+1).join(toRepeat);
                    $(this).text(repeated).removeAttr('repeat');
                });
            })
        })

    </script>


    <?php
    include(root."/Views/myscripts_iheb.php");
    include(root."/Views/myscripts_mariem.php");
    ?>
    <style type="text/css">


        <?php
            include(root."/assets/css/home.css");
            include(root."/assets/css/nav.css");
            include(root."/assets/css/header.css");
            include(root."/assets/css/main.css");
            include(root."/assets/css/add_form.css");
            include(root."/assets/css/addDevice.css");
            include(root."/assets/css/addEmployee.css");
            include(root."/assets/css/addGuest.css");
            include(root."/assets/css/addRoom.css");
            include(root."/assets/css/datatable.css");
            include(root."/assets/css/headerList.css");
            include(root."/assets/css/listDevices.css");
            include(root."/assets/css/listGuests.css");
            include(root."/assets/css/orderReservation.css");
            include(root."/assets/css/restaurant.css");
            include(root."/assets/css/services.css");
            include(root."/assets/css/switcher.css");
            include(root."/assets/css/loginPage.css");
            include(root."/assets/css/demandes.css");
            include(root."/assets/css/listEmployee.css");
            include(root."/assets/css/hotel.css");
            include(root."/assets/css/addCategory.css");
            include(root."/assets/css/addFormService.css");
            include(root."/assets/css/addLanguage.css");
            include(root."/assets/css/bar.css");
            include(root."/assets/css/barRestauu.css");
            include(root."/assets/css/detailsPopUp.css");
            include(root."/assets/css/detailPopUp.css");
            include(root."/assets/css/echecModal.css");
            include(root."/assets/css/notification.css");
            include(root."/assets/css/openingTime.css");
            include(root."/assets/css/promotion.css");
            include(root."/assets/css/restaurantCard.css");
            include(root."/assets/css/reviews.css");
            include(root."/assets/css/notification.css");
            include(root."/assets/css/serviceCard.css");
            include(root."/assets/css/services.css");
            include(root."/assets/css/successModal.css");
            include(root."/assets/css/suppressionModal.css");
            include(root."/assets/css/switcherTest.css");
            include(root."/assets/css/detailGuest.css");
            include(root."/assets/css/addLanguageForm.css");
            include(root."/assets/css/rating.css");
            include(root."/assets/css/addHotel.css");
            include(root."/assets/css/swap_device.css");
            include(root."/assets/css/detailsDish.css");
            include(root."/assets/css/delete.css");
            include(root."/assets/css/contentService.css");
             include(root."/assets/css/chat.css");
             include(root."/assets/css/addCat.css");
             include(root."/assets/css/MsgErreur.css");
             include(root."/assets/css/detailsNotif.css");
             include(root."/assets/css/concierge.css");
             include(root."/assets/css/dateTimePicker.css");
             include(root."/assets/css/contactUs.css");

        ?>

        [dati-page]{
            display:none
        }

        [dati-composent=pagination] select{
            font-size: 14px;
            border: none;
            -webkit-appearance: none;
            background-color: #e0e0e0;
            color:#374a68;
            background-image: url(/assets/img/sidebar/inactiveList.svg);
            background-size: auto 5px;
            background-repeat: no-repeat;
            background-position: -14px center;
            padding-left:14px

        }


        [dati-composent=pagination] select:focus{
            outline: none;
        }
        [dati-composent=pagination]{
            text-align:right;
            overflow: hidden;
            white-space: nowrap;
        }


        [dati-composent=pagination] select::selection {
            color: none;
            background: none;
        }
        /* For Mozilla Firefox */
        [dati-composent=pagination] select::-moz-selection {
            color: none;
            background: none;
        }
        [dati-composent=arrows_pagination]{
            width:40px;display:inline-block;margin-left: 10px
        }


        [dati-composent=arrow_pagination_prev], [dati-composent=arrow_pagination_next]{
            color:#374a68;
            cursor:pointer;
            padding:4px
        }

        [dati-composent=arrow_pagination_prev]:hover, [dati-composent=arrow_pagination_next]:hover{
            color:#E0CD08;
            cursor:pointer;
        }
        [dati-composent=arrow_pagination_prev].inactive, [dati-composent=arrow_pagination_next].inactive{
            color:#c0c0c0;
            padding:4px;
            opacity:0.4;
            cursor:not-allowed;
        }
        [dati-composent=arrow_pagination_prev].inactive:hover, [dati-composent=arrow_pagination_next].inactive:hover{
            color:#c0c0c0;
            padding:4px;
            cursor:not-allowed;
        }

        [DATI-PAGE-TYPE=pop-up]{
            display:none;
            position:fixed;
            top:0px;
            left:0px;
            background-color:rgba(0,0,0,0.5);
            width:100%;
            height:100%;
            justify-content:center;
            align-content:center;
            z-index:7;

        }

        [DATI-COMPOSENT=pop-up]{
            display:inline-block;
            overflow:auto;
            background-color:#FFFFFF;
            width: 836px;
            max-width: 85vw;
            height: 400px;
            max-height: 90vh;
            border: 0px solid;
            border-radius:10px;

        }
        [DATI-COMPOSENT=close-pop-up]{
            display:inline-block;
            cursor: pointer;
        }
        [DATI-PAGE]{
            display:none;

        }

    </style>

</head>
