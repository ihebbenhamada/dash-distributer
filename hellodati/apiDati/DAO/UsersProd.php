<?php


namespace DAO;
use \PDO ;
use \Database ;
use \Models ;

class UsersProd extends Database {


    /**
     * UsersProd constructor.
     */
    public function __construct()
    {
    }


    public function checkById($id){
            $sql ="SELECT * FROM `UsersProd` WHERE `id` = :id";
            $valeur = array(':id'=>$id);

            if ($res =$this->Select("UsersProd",$sql,$valeur)){

                return true;
            }else{
                return false;
            }
    }
    public function checkSuperUser($username,$password){
        $ctp = func_num_args();
        if ($ctp > 1) {
            $sql = "SELECT * FROM `UsersProd` WHERE `username` = $username AND `password` = $password AND `is_sup` = 1";
            if ($res = $this->Select($sql)) {
                return $res;
            } else {
                return false;
            }
        }else{
            return false;
        }
    }
    public function checkUser(){
        $cpt = func_num_args();
        $args = func_get_args();
        if ($cpt>1){
            $sql ="SELECT * FROM `UsersProd` WHERE `username` = :username AND `password` = :password  AND `is_sup` = 0";
            $valeur = array(
                ':username'=>$args[0],
                ':password'=>$args[1]);

            if ($res =$this->Select("UsersProd",$sql,$valeur)){

                return true;
            }else{
                return false;
            }
        }
    }
    public function addUserProd(){
        $cpt = func_num_args();
        $args = func_get_args();

        if ($cpt > 1) {
            $user = $args[0];
            $pass = $args[1];
            if ($this->checkSuperUser($user,$pass)) {
                $sql = "INSERT INTO `UsersProd` 
                (`id`, `username`, `password`, `email`, `nom`, `prenom`, `enabled`, `last_connection`, `is_sup`) 
                VALUES (NULL , :username, :password, :email, :nom, :prenom, :enabled, :last_connection, :is_sup);";

                $valeur = array(
                    ':username'=>$args[0],
                    ':password'=>$args[1],
                    ':email'=>$args[2],
                    ':nom'=>$args[3],
                    ':prenom'=>$args[4],
                    ':enabled'=>$args[5],
                    ':last_connection'=>$args[6],
                    ':is_sup'=>$args[7]);

                if ($res =$this->insert("UsersProd",$sql,$valeur)){
                    return $res;
                }else{
                    return false;
                }
            }else{
                return "contact-admin";
            }
        }
        else{
            return false;
        }

    }
    public function update_visibility(){
        $cpt = func_num_args();
        $args = func_get_args();
        if($cpt > 1){
            if ($this->checkById($args[1])){

                $sql ="UPDATE `UsersProd` SET `enabled` = :enable  WHERE `UsersProd`.`id` = :id;";
                $valeur = array(
                    ':enable' => $args[0],
                    ':id' => $args[1]
                );

                if ($res = $this->update("UsersProd",$sql, $valeur)){
                    return $res;
                }else{
                    return false;
                }


            }else{
                return false;
            }
        }else{
            return false;
        }
    }
    public function check_username($username){


        $cpt = func_num_args();
        $args = func_get_args();
        $username = $args[0];

        if ($cpt >0){
            $req = "SELECT * FROM `UsersProd` WHERE `username` = $username";
            if ($res =$this->Select($req)){
                return $res;
            }else{
                return false;
            }

        }else{
            return false;
        }
    }
    public function check_email(){
        $cpt = func_num_args();
        $args = func_get_args();
        $email = $args[0];

        if ($cpt >0){
            $req = "SELECT * FROM `UsersProd` WHERE `email` =$email ";
            if ($res =$this->Select($req)){
                return $res;
            }else{
                return false;
            }

        }else{
            return false;
        }
    }
    public function make_sup(){
        $cpt = func_num_args();
        $args = func_get_args();
        if($cpt > 1){
            if ($this->checkById($args[1])){

                $sql ="UPDATE `UsersProd` SET `is_sup` = :is_sup WHERE `UsersProd`.`id` = :id;";
                $valeur = array(
                    ':is_sup' => $args[0],
                    ':id' => $args[1]
                );

                if ($res = $this->update("UsersProd",$sql, $valeur)){
                    return $res;
                }else{
                    return false;
                }


            }else{
                return false;
            }
        }else{
            return false;
        }
    }
    public function getAllUsers(){
        try {
            $sql = "SELECT * FROM `UsersProd`";
            if($res = $this->Select("UsersProd",$sql)){

                if ($res !="no-result") {
                    return $res;
                }else{
                    return false;
                }

            }
        } catch (\Throwable $th) {
            return false;
        }

    }
    public function deleteUser($id,$username,$password){
        try {
            if ($this->checkSuperUser($username,$password)){
                $sql ="DELETE FROM `UsersProd` WHERE `UsersProd`.`id` = $id";

                if ($res=$this->insert($sql)){
                    return $res;
                }else{
                    return false;
                }

            }else{
                return false;
            }

        }catch (\Throwable $th){
            return false;
        }

    }
    public function updateUser(){
        try {
            $cpt = func_num_args();
            $args = func_get_args();
            if ($cpt>5){
                $username_login = $args[0];
                $pass_login = $args[1];
                $id = $args[2];
                if ($this->checkSuperUser($username_login,$pass_login)==false) {

                            $sql = "UPDATE `UsersProd` SET `password` = :password,`nom` = :nom, 
                            `prenom` = :prenom WHERE `UsersProd`.`id` = $id ;";

                            $valeur = array(
                                ':password'=>$args[3],
                                ':nom'=>$args[4],
                                ':prenom'=>$args[5]);

                            if ($res =$this->insert("UsersProd",$sql,$valeur)){
                                return $res;
                            }else{
                                return false;
                            }
                }else{
                    return false;

                }

            }
        }catch (\Throwable $th){
            return false;
        }
    }
}