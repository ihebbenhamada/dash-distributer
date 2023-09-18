<?php
header('Access-Control-Allow-Origin: *');
//header('Access-Control-Allow-Headers: Content-Type, appid, app_secret, session, session_id, session_access_token, session_refresh_token');
define("root", $_SERVER["DOCUMENT_ROOT"]);
session_name("dashboardDatiApps");
session_start();
$ssapiDns="https://v2.apitndati.com";
$aid = "10928344384930";
$as = "DatiskjdsnDSQI4524dsqkdsls\$dioesp";

if(isset($_POST["remember_param"]) && !empty($_POST["remember_param"])){
    if(isset($_POST["USER"]) && !empty($_POST["USER"])){
        $_SESSION["USER"] = json_decode($_POST["USER"]);
        print_r(
            json_encode(
                array(
                    'isValid' => 'true'
                )
            )
        );
    }else{
        print_r(
            json_encode(
                array(
                    'isValid' => 'false'
                )
            )
        );
    }
    exit();
}
if(isset($_POST["get_session_var"]) && !empty($_POST["get_session_var"]) && isset($_POST["name"]) && !empty($_POST["name"])){
    if(isset($_SESSION[$_POST["name"]]) && !empty($_SESSION[$_POST["name"]])){
        print_r(
            json_encode(
                array(
                    'isValid' => 'true',
                    'data' => $_SESSION[$_POST["name"]]
                )
            )
        );
    }else{
        print_r(
            json_encode(
                array(
                    'isValid' => false
                )
            )
        );
    }
    exit();
}


if(isset($_POST["session_destroy"]) && !empty($_POST["session_destroy"])){
    session_unset();
    session_destroy();
    session_write_close();
    print_r(
        json_encode(
            array(
                'isValid' => 'true'
            )
        )
    );
    exit();
}



if(isset($_POST["remember"]) && !empty($_POST["remember"])){
    header("Content-type: application/json; charset=utf-8");
    if(isset($_POST["SSAPI_UPDATE_PARAM"]) && !empty($_POST["SSAPI_UPDATE_PARAM"])){
        if($_POST["SSAPI_UPDATE_PARAM"] == "new"){
            unset($_SESSION["si"]);
            unset($_SESSION["sat"]);
            unset($_SESSION["srt"]);
            print_r(
                json_encode(
                    array(
                        'isValid' => 'true',
                        'session' => 'new',
                        'dns' => $ssapiDns,
                        'aid' => $aid,
                        'as' => $as
                    )
                )
            );
        }else{
            $_SESSION["si"]=$_POST["si"];
            $_SESSION["sat"]=$_POST["sat"];
            $_SESSION["srt"]=$_POST["srt"];
            print_r(json_encode(array(
                'isValid' => 'true',
                'session' => 'linked',
                'dns' => $ssapiDns,
                'aid' => $aid,
                'as' => $as,
                'si' => $_SESSION["si"],
                'sat' => $_SESSION["sat"],
                'srt' => $_SESSION["srt"]
            )));
        }
        exit();
    }
    if(isset($_POST["SSAPI_PARAM"]) && !empty($_POST["SSAPI_PARAM"])){
        if(isset($_SESSION["si"]) && !empty($_SESSION["si"]) &&
            isset($_SESSION["sat"]) && !empty($_SESSION["sat"]) &&
            isset($_SESSION["srt"]) && !empty($_SESSION["srt"])
        ){
            print_r(json_encode(array(
                'isValid' => 'true',
                'session' => 'linked',
                'dns' => $ssapiDns,
                'aid' => $aid,
                'as' => $as,
                'si' => $_SESSION["si"],
                'sat' => $_SESSION["sat"],
                'srt' => $_SESSION["srt"]
            )));
        }else{
            print_r(
                json_encode(
                    array(
                        'isValid' => 'true',
                        'session' => 'new',
                        'dns' => $ssapiDns,
                        'aid' => $aid,
                        'as' => $as
                    )
                )
            );
        }
        exit();
    }
    if(isset($_POST["si"]) && !empty($_POST["si"]) && isset($_POST["sat"]) && !empty($_POST["sat"]) && isset($_POST["srt"]) && !empty($_POST["srt"])){
        $_SESSION["si"] = $_POST["si"];
        $_SESSION["sat"] = $_POST["sat"];
        $_SESSION["srt"] = $_POST["srt"];
        print_r(json_encode(array('isValid' => 'true')));
    }else{
        print_r(json_encode(array('isValid' => 'false')));
    }
    exit();
}
if(isset($_SESSION["USER"]) && !empty($_SESSION["USER"])){
    include("Views/head.php");
    include("Views/body.php");
}else{
    include("Views/head_Login.php");
    include("Views/Login.php");

     /* include("Views/head.php");
    include("Views/body.php");*/

}

// $_SESSION = array();
// if (ini_get("session.use_cookies")) {
//     $params = session_get_cookie_params();
//     setcookie(session_name(), '', time() - 42000,
//         $params["path"], $params["domain"],
//         $params["secure"], $params["httponly"]
//     );
// }
// session_destroy();


?>