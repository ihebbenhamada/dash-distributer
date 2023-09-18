<?php

    namespace Business;

    use \Models\JsonCode;
	class Country {

        private $dao;
        private $json;
        public function __construct(){
            if(class_exists("\DAO\Country")){
                $this->dao = new \DAO\Country();
            }else{
                header("HTTP/1.0 404 Not Found");
                exit();
            }
        }

        public function attr(){
            if(!required_posts("value")){
                $json = new JsonCode(0,"Column value not reveived");
                echo json_encode($json);
                return false;
            }
        }


        public function getId(){
            try {
                if(!required_posts("id")){
                    $json = new JsonCode(0,"Column id not reveived");
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
                    echo "error";
                }
            } catch (\Throwable $th) {
                $json = new JsonCode(0,"Error api");
                echo json_encode($json);
                return false;
            }
        }

        public function getALL(){
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
        }

        public function add(){
            if(required_posts("uid","web","token","userId")){
                $uid = $_POST["uid"];
                $web = $_POST["web"];
                $token = $_POST["token"];
                $userId = $_POST["userId"];
                if($res = $this->dao->add($uid,$web,$token,$userId)){
                    $json = new JsonCode($res);
                }else{
                    $json = new JsonCode(0,1,"Error : can not add authentification method",'');
                }
            }else{
                $json = new JsonCode(0,1,"parametres not receive",'');
            }
            echo json_encode($json);
        }
    }
?>