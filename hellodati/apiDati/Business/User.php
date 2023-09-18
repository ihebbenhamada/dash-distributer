<?php

    namespace Business;

    use \Models\JsonCode;
	class User {

        private $dao;
        private $json;
        public function __construct(){
            $this->dao = new \DAO\Users();
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
                echo "error";
            }
        }

        public function verif_profil(){

        }

        public function subsribe(){
            
            if(isset_posts("email","first_name","last_name","trx_id","location_id","contact_id","birthDay")){
                $email = $_POST["email"];
                $first_name = $_POST["first_name"];
                $last_name = $_POST["last_name"];
                $trx_id = $_POST["trx_id"];
                $location_id = $_POST["location_id"];
                $contact_id = $_POST["contact_id"];
                $birthDay = $_POST["birthDay"];
                if(required_posts("password")){
                    $pass = $_POST["password"];
                }else{
                    $pass = NULL;
                }
                if($res = $this->dao->add($email,$pass)){
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