<?php 

namespace Business;
use \Models\JsonCode;


class Device {
    private $dao;
    private $json;

    public function __construct(){
        if (class_exists('\DAO\Device')){
            $this->dao = new \DAO\Device();
        }else{
            header("HTTP/1.0 404 Not Found");
            exit();
        }
    }

    // public function attr(){
    //     if(!required_posts("value")){
    //         $json = new JsonCode(0,"Column value not reveived");
    //         echo json_encode($json);
    //         return false;
    //     }
    // }

    public function getId(){
       
        try{
            if(!required_posts("id")){
                $json = new JsonCode(0,"Column value not reveived");
                echo json_encode($json);
                return false;
            }
            
            if($res = $this->dao->get_id(post("id"))){
                if($res != "no-result"){
                    $json = new JsonCode($res);
                    echo json_encode($json);
                }else{
                    $json = new JsonCode("(0) Result found");
                    echo json_encode($json);
                }
            }else{
                $json = new JsonCode(0,"Error api");
                echo json_encode($json);
                return false;
            }
        }catch(\Throwable $th){

            $json = new JsonCode(0,"Error api");
            echo json_encode($json);
            return false;
        }
    } // END function getID
    
    
    public function getAll(){
        try {
            if($res = $this->dao->getALL()){
                if($res != "no-result"){
                    $json = new JsonCode($res);
                    echo json_encode($json);
                }else{
                    $json = new JsonCode("(0) Result found");
                    echo json_encode($json);
                }
            }else{
                $json = new JsonCode(0,"Error api");
                echo json_encode($json);
                return false;
            }
        } catch (\Throwable $th) {
            $json = new JsonCode(0,"Error api");
                echo json_encode($json);
                return false;
        }

    } // END function getALL


    public function addDevice (){
        try {
                if (required_posts("imei")){
                    $imei = $_POST["imei"];

                    if (isset_posts("description")){
                        $desc = $_POST["description"];
                    }else{
                        $desc = null;
                    }


                    if (isset_posts("status")){
                        $status = $_POST["status"];
                    }else{
                        $status = null;
                    }


                    if ($res = $this->dao->add_Device($imei,$desc,$status)){
                        $json = new JsonCode($res);
                        echo json_encode($json);
                    }else{
                        $json = new JsonCode(0,"Can't add device");
                        echo json_encode($json);
                    }

                }else{
                    $json = new JsonCode(0,"Parameters not receive");
                    echo json_encode($json);
                    return false;
                }

        }catch (\Throwable $th){
            $json = new JsonCode(0,"Error api");
            echo json_encode($json);
            return false;
        }
    } // End function addDevice


    public function search(){
        try {
            if (!required_posts("imei")&& !required_posts("description")&& !required_posts("status")){
                $json = new JsonCode(0,"no parameters recieve");
                echo json_encode($json);
                exit();
            }
            $tab = array();
            if (required_posts("imei")){
                $tab["imei"]= post("imei");
            }

            if (required_posts("description")){
                $tab["description"]= post("description");
            }

            if (isset_posts("status")){
                $tab["status"]= post("status");
            }
            if ($res = $this->dao->search($tab)){
                $json = new JsonCode($res);
                echo json_encode($json);

            }else{
                $json = new JsonCode(0,"not found");
                echo json_encode($json);
            }
        }catch (\Throwable $th){
            $json = new JsonCode(0,"Error api");
            echo json_encode($json);
            return false;
        }
    }


}


?>