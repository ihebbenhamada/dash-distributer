class SSAPI_SENDER{

    constructor() {
        $("documemt").ready(function(){
            SSAPI.INIT();
        })
    }

    INIT(){
        var dataS = {remember:"session", SSAPI_PARAM:"verify"};
        $.ajax({
            type: "POST",
            url: window.location.protocol+"//"+window.location.hostname,
            data : dataS,
            dataType: "json",
            error: function (data) {
                console.error("session error synch");
                $(".cnx_lost").css("display","inline-block");
                setTimeout(function() {SSAPI.INIT()}, 1000);
            },
            success: function (data) {
                $(".cnx_lost").css("display","none");
                // var data1 = JSON.parse(data);
                var data1 = data;
                if(data.isValid){
                    if(data.session == "new"){
                        SSAPI_MANAGER.dns = data.dns;
                        SSAPI_MANAGER.setSESSION(data.session);
                        SSAPI_MANAGER.setAID(data.aid);
                        SSAPI_MANAGER.setAS(data.as);
                    }else{
                        SSAPI_MANAGER.dns = data.dns;
                        SSAPI_MANAGER.setSESSION(data.session);
                        SSAPI_MANAGER.setAID(data.aid);
                        SSAPI_MANAGER.setAS(data.as);
                        SSAPI_MANAGER.setSI(data.si);
                        SSAPI_MANAGER.setSAT(data.sat);
                        SSAPI_MANAGER.setSRT(data.srt);
                    }
                    SSAPI_MANAGER.EVENTS("SSAPI_READY");
                }
            }
        });
    }

    destroy(){
        var dataS = {session_destroy:"true"};
        $.ajax({
            type: "POST",
            url: window.location.protocol+"//"+window.location.hostname,
            data : dataS,
            dataType: "json",
            error: function (data) {
                console.error("session error synch");
                $(".cnx_lost").css("display","inline-block");
                setTimeout(function() {SSAPI.UPDATE(param)}, 1000);
            },
            success: function (data) {
                $(".cnx_lost").css("display","none");
                if(data.isValid){
                    window.location.replace(window.location.protocol+"//"+window.location.hostname);
                }
            }
        });
    }

    UPDATE(param){
        var dataS = {remember:"session", SSAPI_UPDATE_PARAM:param, si:SSAPI_MANAGER.getSI(), sat:SSAPI_MANAGER.getSAT(), srt:SSAPI_MANAGER.getSRT()};
        $.ajax({
            type: "POST",
            url: window.location.protocol+"//"+window.location.hostname,
            data : dataS,
            dataType: "json",
            error: function (data) {
                console.error("session error synch");
                $(".cnx_lost").css("display","inline-block");
                setTimeout(function() {SSAPI.UPDATE(param)}, 1000);
            },
            success: function (data) {
                $(".cnx_lost").css("display","none");
                var data1 = data;
                if(data.isValid){
                    if(data.session == "new"){
                        SSAPI_MANAGER.setSESSION(data.session);
                        SSAPI_MANAGER.setAID(data.aid);
                        SSAPI_MANAGER.setAS(data.as);
                    }else{
                        SSAPI_MANAGER.setSESSION(data.session);
                        SSAPI_MANAGER.setAID(data.aid);
                        SSAPI_MANAGER.setAS(data.as);
                        SSAPI_MANAGER.setSI(data.si);
                        SSAPI_MANAGER.setSAT(data.sat);
                        SSAPI_MANAGER.setSRT(data.srt);
                    }
                    SSAPI_MANAGER.EVENTS("SSAPI_READY");
                }
            }
        });
    }

    REMEMBER_SESSION(param){
        var dataS = {remember:"session",si:SSAPI_MANAGER.getSI(),sat:SSAPI_MANAGER.getSAT(),srt:SSAPI_MANAGER.getSRT()};
        $.ajax({
            type: "POST",
            url: window.location.protocol+"//"+window.location.hostname,
            data : dataS,
            dataType: "json",
            beforeSend: function() {
                if(param.loading){
                    $("[DATI-ROLE='loading']").show();
                }
            },
            complete: function(data) {
                if(param.loading){
                    $("[DATI-ROLE='loading']").hide();
                }
            },
            error: function (data) {
                console.error("session error synch");
                $(".cnx_lost").css("display","inline-block");
                setTimeout(function() {SSAPI.REMEMBER_SESSION(param)}, 1000);
                if(param.onerror){
                    SSAPI.EVENTS(param.onerror,{error:"Error synchronisation data, try later",errorCode:100,isValid:0});
                }
            },
            success: function (data) {
                $(".cnx_lost").css("display","none");
                var data1 = data;
                if(data1.isValid){
                    if(param.onsuccess){
                        SSAPI_MANAGER.EVENTS(param.onsuccess);
                    }
                }else{
                    if(param.onerror){
                        SSAPI_MANAGER.EVENTS(param.onerror);
                    }
                }
            }
        });
    }


    get_session_var(param){
        param.get_session_var=true;
        var dataS = param;
        $.ajax({
            type: "POST",
            url: window.location.protocol+"//"+window.location.hostname,
            data : dataS,
            dataType: "json",
            beforeSend: function() {
                if(param.loading){
                    $("[DATI-ROLE='loading']").show();
                }
            },
            complete: function(data) {
                if(param.loading){
                    $("[DATI-ROLE='loading']").hide();
                }
            },
            error: function (data) {
                console.error("session error synch");
                $(".cnx_lost").css("display","inline-block");
                setTimeout(function() {SSAPI.REMEMBER(param)}, 1000);
            },
            success: function (data) {
                $(".cnx_lost").css("display","none");
                if(data.isValid){
                    if(param.onsuccess){
                        SSAPI.EVENTS(param.onsuccess,data);
                    }
                }else{
                    if(param.onerror){
                        SSAPI.EVENTS(param.onerror,data);
                    }
                }
            }
        });
    }

    REMEMBER(param){
        param.remember_param=true;
        var dataS = param;
        $.ajax({
            type: "POST",
            url: window.location.protocol+"//"+window.location.hostname,
            data : dataS,
            dataType: "json",
            beforeSend: function() {
                if(param.loading){
                    $("[DATI-ROLE='loading']").show();
                }
            },
            complete: function(data) {
                if(param.loading){
                    $("[DATI-ROLE='loading']").hide();
                }
            },
            error: function (data) {
                console.error("session error synch");
                $(".cnx_lost").css("display","inline-block");
                setTimeout(function() {SSAPI.REMEMBER(param)}, 1000);
            },
            success: function (data) {
                $(".cnx_lost").css("display","none");
                if(data.isValid){
                    if(param.onsuccess){
                        SSAPI.EVENTS(param.onsuccess,data);
                    }
                }else{
                    if(param.onerror){
                        SSAPI.EVENTS(param.onerror,data);
                    }
                }
            }
        });
    }


    SUBMIT(param) {
        if(SSAPI_MANAGER.wait){
            if (!SSAPI_MANAGER.EXIST_IN_PILE(param)) {
                SSAPI_MANAGER.pile.push(JSON.stringify(param));

            }
        }else{
            var headers = SSAPI_MANAGER.CONSTRUCT_HEADER();
            if(headers.session == "new"){
                SSAPI_MANAGER.wait = true;
                SSAPI_MANAGER.setlastRequest_param(param);
            }
            SSAPI.SEND(param,headers);
        }
    }

    upload(param){

        var headers = SSAPI_MANAGER.CONSTRUCT_HEADER();
        SSAPI.SEND_upload(param,headers);

    }
    SEND_upload(param,HEADER){
        console.log("upload")
        var dataSend = param.data;

        if(param.method){
            var method = param.method;
        }else{
            var method = "POST";
        }
        var uri = SSAPI_MANAGER.dns+param.uri;
        $.ajax({
            type: "POST",
            url: uri,
            data : dataSend,
            dataType: "json",
            headers: HEADER,
            processData: false,
            mimeType: "multipart/form-data",
            contentType: false,
            beforeSend: function() {
                if(param.loading){
                    $("[SOWAZI-ROLE='loading']").show();
                }
            },
            complete: function(data) {
                if(param.loading){
                    $("[SOWAZI-ROLE='loading']").hide();
                }
            },
            error: function (data) {
                console.log(data);

                /*$(".cnx_lost").css("display","inline-block");
                SSAPI_MANAGER.EVENTS("ERROR_CONNECTION_SERVER");
                if(HEADER.session == "new" || HEADER.session == "refresh"){
                    setTimeout(function() {SSAPI.SEND_upload(param,HEADER)}, 1000);
                }else{
                    setTimeout(function() {SSAPI.upload(param)}, 1000);
                }*/
            },
            success: function (data) {
                console.log(data);
                SSAPI_MANAGER.EVENTS("SUCCESS_CONNECTION_SERVER");
                $(".cnx_lost").css("display","none");
                if(data.session_updated){
                    SSAPI_MANAGER.UPDATE_PARAMS(data.session);
                }
                if(data.isValid){
                    if(param.onsuccess){
                        SSAPI.EVENTS(param.onsuccess,data);
                    }
                }else{
                    if(!SSAPI_MANAGER.RESOLVE_SESSION(param,data["errorCode"])){
                        if(param.onerror){
                            SSAPI.EVENTS_ERROR(param.onerror,data);
                        }
                    }
                }
            }
        });
    }


    SEND(param,HEADER){
        var dataSend = param.data;

        if(param.method){
            var method = param.method;
        }else{
            var method = "POST";
        }
        var uri = SSAPI_MANAGER.dns+param.uri;
        $.ajax({
            type: "POST",
            url: uri,
            data : dataSend,
            dataType: "json",
            headers: HEADER,
            beforeSend: function() {
                if(param.loading){
                    $("[SOWAZI-ROLE='loading']").show();
                }
            },
            complete: function(data) {
                if(param.loading){
                    $("[SOWAZI-ROLE='loading']").hide();
                }
            },
            error: function (data) {

                $(".cnx_lost").css("display","inline-block");
                SSAPI_MANAGER.EVENTS("ERROR_CONNECTION_SERVER");
                if(HEADER.session == "new" || HEADER.session == "refresh"){
                    setTimeout(function() {SSAPI.SEND(param,HEADER)}, 1000);
                }else{
                    setTimeout(function() {SSAPI.SUBMIT(param)}, 1000);
                }
            },
            success: function (data) {
                console.log(data.data,"dsqdsqdqs");

                /*if(data.data[0].hasOwnProperty("description")){
                    console.log(data.data[0]["description"],"data ssapi");
                }else{
                    console.log("no description property","data ssapi");
                }*/
                
                SSAPI_MANAGER.EVENTS("SUCCESS_CONNECTION_SERVER");
                $(".cnx_lost").css("display","none");
                if(data.session_updated){
                    SSAPI_MANAGER.UPDATE_PARAMS(data.session);
                }
                if(data.isValid){
                    if(param.onsuccess){
                        SSAPI.EVENTS(param.onsuccess,data);
                    }
                }else{
                    if(!SSAPI_MANAGER.RESOLVE_SESSION(param,data["errorCode"])){
                        if(param.onerror){
                            SSAPI.EVENTS_ERROR(param.onerror,data);
                        }
                    }
                }
            }
        });
    }


    EVENTS(name,data){
        var event = new CustomEvent(name, {
            detail: {
                success: data.isValid,
                error: data.error,
                res: data.data
            }
        });
        document.dispatchEvent(event);
    }

    EVENTS_ERROR(name,data){
        var event = new CustomEvent(name, {
            detail: {
                success: data.isValid,
                error: data.error,
                error_code: data.errorCode
            }
        });
        document.dispatchEvent(event);
    }

}

let SSAPI = new SSAPI_SENDER();