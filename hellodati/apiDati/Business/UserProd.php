<?php


namespace Business;


use Models\JsonCode;

class UserProd
{
    private $dao;
    private $json;

    public function __construct(){
        if (class_exists('\DAO\UsersProd')){
            $this->dao = new \DAO\UsersProd();
        }else{
            header("HTTP/1.0 404 Not Found");
            exit();
        }
    }


    public function addUserProd(){
        try {
            if (required_posts("username","password","email")){


                $username = post("username");
                $password = post("password");
                $email = post("email");

                if ($res = $this->dao->check_username($username)){
                    $json = new JsonCode(0,"You have an account");
                    echo json_encode($json);
                    exit();
                }

                if ($res = $this->dao->check_email($email)){
                    $json = new JsonCode(0,"You have an account with this email");
                    echo json_encode($json);
                    exit();
                }

                  /*          if (isset_posts("email")){
                                $email = post("email");
                            }else{
                                $email = null;
                            }*/

                            if (isset_posts("nom")){
                                $nom = post("nom");
                            }else{
                                $nom = null;
                            }

                            if (isset_posts("prenom")){
                                $prenom = post("prenom");
                            }else{
                                $prenom = null;
                            }

                            if (isset_posts("enabled")){
                                $enabled = post("enabled");
                            }else{
                                $enabled = null;
                            }

                            if (isset_posts("last_connection")){
                                $last_connection = post("last_connection");
                            }else{
                                $last_connection = null;
                            }

                            if (isset_posts("is_sup")){
                                $is_sup = post("is_sup");
                            }else{
                                $is_sup = null;
                            }

                if ($res = $this ->dao ->addUserProd($username,$password,$email,$nom,$prenom,$enabled,$last_connection,$is_sup)){
                    $json = new JsonCode($res);
                    echo json_encode($json);
                }else{
                    if($res = "contact-admin"){
                        $json = new JsonCode(0,"Contact admin");
                        echo json_encode($json);
                    }else{
                        $json = new JsonCode(0,"Check parameters");
                        echo  json_encode($json);
                    }
                }
            }else {
                $json = new JsonCode(0,"Parameters not receive");
                echo json_encode($json);
                return false;
            }

        }catch (\Throwable $th){
            $json = new JsonCode(0,"Error api");
            echo json_encode($json);
            return false;
        }
    }

    public function Authentification(){
        try {
            if (required_posts("username","password")){
                $username = $_POST["username"];
                $password = post("password");


                echo $username;
                echo $password;

                if ($res = $this->dao->checkUser($username,$password)){
                    $json = new JsonCode($res);
                    echo json_encode($json);
                }else{
                    $json = new JsonCode(0,"You must subscribe");
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
    }

    public function update_vis(){
        try {
            if (required_posts("enabled","id")){
                $enabled = post("enabled");
                $id = post("id");
                if ($res = $this->dao->update_visibility($enabled,$id)){
                    $json = new JsonCode($res);
                    echo json_encode($json);
                }else{
                    $json = new JsonCode(0,"opération non valide");
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
    }

    public function checkUsername(){
        try {
            if (required_posts("username")){
                $username = post("username");
                if ($res = $this->dao->check_username($username)){
                    $json = new JsonCode($res);
                    echo json_encode($json);
                }else{
                    $json = new JsonCode(0,"Username not found");
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
        }
    }

    public function checkEmail(){
        try {
            if (required_posts("email")){
                $email = post("email");
                if ($res = $this->dao->check_email($email)){
                    $json = new JsonCode($res);
                    echo json_encode($json);
                }else{
                    $json = new JsonCode(0,"Email not found");
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
        }
    }

    public function makeSuper(){
        try {
            if (required_posts("is_sup","id")){
                $is_sup = post("is_sup");
                $id = post("id");

                if ($res = $this->dao->make_sup($is_sup,$id)){
                    $json = new JsonCode($res);
                    echo json_encode($json);
                }else{
                    $json = new JsonCode(0,"check attributs");
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
        }
    }

    public function getAllUsers(){
        try {
            if ($res = $this->dao->getAllUsers()){
                $json = new JsonCode($res);
                echo json_encode($json);
            }else{
                $json = new JsonCode(0,"(0) User found");
                echo json_encode($json);
            }

        }catch (\Throwable $th){
            $json = new JsonCode(0,"Error api");
            echo json_encode($json);
        }
    }

    public function DeleteUser(){
        try {

            if (required_posts("username","password","id")){
                $username = post("username");
                $password = post("password");
                $id = post("id");
                if ($res = $this->dao->deleteUser($id,$username,$password)){
                    $json = new JsonCode($res);
                    echo json_encode($json);
                }else{
                    $json = new JsonCode(0,"(0) User found");
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
        }
    }

    public function UpdateUser(){
        try {

            if (required_posts("username","password","id")){
                $username = post("username");
                $password = post("password");
                $id = post("id");

                if (isset_posts("password")){
                    $new_password = post("password");
                }else{
                    $new_password = null;
                }

                if (isset_posts("nom")){
                    $new_nom = post("nom");
                }else{
                    $new_nom = null;
                }

                if (isset_posts("prenom")){
                    $new_prenom = post("nom");
                }else{
                    $new_prenom = null;
                }


                $new_prenom = post("prenom");

                if ($res = $this->dao->updateUser($username,$password,$id,$new_password,$new_nom,$new_prenom)){
                    $json = new JsonCode($res);
                    echo json_encode($json);
                }else{
                    $json = new JsonCode(0,"(0) User found");
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
        }
    }

}