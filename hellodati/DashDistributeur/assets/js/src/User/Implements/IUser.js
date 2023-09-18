let IUSER = class{
    constructor() {
        this.EVENTS_UI();
        this.EVENTS_SSAPI();
    }


    EVENTS_UI(){
        //GET USER AUT
        $(".btn_send").click(function(){
            var username = $("#username").val();
            var pass = $("#password").val();

            if(dati_user.VERIF_FORM(username,pass)){
                $("[DATI-SPINNER-LOGIN]").css("display","inline-block");
                SSAPI.SUBMIT({
                    uri:"/Emp/authentification",
                    data: {username: username, password: pass},
                    onsuccess: "successAuth",
                    onerror: "failedAuth"
                })
            }
        });
        SSAPI.get_session_var({name:"USER",onsuccess:"userReceive"});
    }


    EVENTS_SSAPI() {
        //Success Authentification
        document.addEventListener("successAuth", function(e){
            $("[DATI-SPINNER-LOGIN]").css("display","none");
            $("[DATI-ERRRUE-MSG-LOGIN]").css("display","none");
            SSAPI.REMEMBER({
                USER: JSON.stringify(e.detail.res[0]),
                onsuccess: "session_saved"
            })
        }, false);

        //Saved Session
        document.addEventListener("session_saved", function(e){
         window.location.replace(window.location.protocol+"//"+window.location.hostname);
        }, false);


        //Failed Authentification
        document.addEventListener("failedAuth", function(e){
            $("[DATI-SPINNER-LOGIN]").css("display","none");
            $("[DATI-ERRRUE-MSG-LOGIN]").css("display","inline-block");
            console.log("failedAuth event lisner"+e.detail);
        }, false);

        //GET User AUth

        document.addEventListener("userReceive",function (e) {
            console.log(e.detail.res,"zzzzzzzzz");
            editProfile_ui.user=e.detail.res;
            $("[dati-name-hotel]").html(e.detail.res.Hotel.name);
            $("[DATI-STAR-HOTEL]").attr("repeat",e.detail.res.Hotel.stars);
            $("[DATI-LOGO-HOTEL]").attr("src",e.detail.res.Hotel.logo);
            $("[dati-name-employee]").html(e.detail.res.Employee.name);
            $("[dati-img-profile-user]").attr("src", e.detail.res.Employee.img);
            $("[img_profile_user_uploader]").css("background-image", "url('"+e.detail.res.Employee.img+"')");
            $("[dati-last-conx]").html("Last Connexion :"+e.detail.res.last_connection);
            $('[DATI-STAR-HOTEL][repeat]').each(function() {
                var toRepeat = $(this).text();
                var times = parseInt($(this).attr('repeat'));
                var repeated = Array(times+1).join(toRepeat);
                $(this).text(repeated).removeAttr('repeat');
            });
        })

    }
}




