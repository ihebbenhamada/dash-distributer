<?php

namespace DAO;
use \PDO ;
use \Database ;

class Device extends Database{

    // nos attributs
    public $res;
    public $error;
    private $db;

    public function __construct(){

    }

    public function get_id(){
        // $cpt : compteur nbr de param
        // $args : nos params

        try {
            $cpt = func_num_args();
            $args = func_get_args();


                if($cpt < 1){
                    return false;
                    exit();
                }


                $id = $args[0];
                $sql = "SELECT * FROM `Device` WHERE `id`= :id";
                $valeur = array(':id' => $id);

                if($res = $this->Select("Device",$sql, $valeur)){
                    if($res != "no-result"){
                        return $res;
                    }else{
                        return false;
                    }
                }
        } catch (\Throwable $th) {
            return false;
        }
    } // End function get_id


    public function getALL(){
        try {
            $sql = "SELECT * FROM `Device`";
          if($res = $this->Select("Device",$sql)){

              if ($res !="no-result") {
                  return $res;
              }else{
                  return false;
              }

          }
        } catch (\Throwable $th) {
           return false;
        }
    } // End function get_ALL

public function add_Device(){
    try {
        $cpt = func_num_args();
        $args = func_get_args();
        if($cpt > 1){

            $sql = "INSERT INTO `Device`(`id`, `imei`, `description`, `status`) VALUES (NULL ,:imei,:description,:status)";
            $valeur = array(
                ':imei' => $args[0],
                ':description' => $args[1],
                ':status'=> $args[2]
            );

            if($res = $this->insert("Device",$sql, $valeur)){
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
}// End function add_Device


    public function search($tab){
        try {

            $i =0;
            $sql = "";
            foreach ($tab as $key =>$value){
                if ($i == 0){
                    $sql .= $key."='".$value."'";
                }else{
                    $sql .= ' || '. $key."='".$value."'";
                }
                $i++;
            }
            $sql = "SELECT * FROM `Device` WHERE ".$sql;
            if($res = $this->Select("Device",$sql)){

                if ($res !="no-result") {
                    return $res;
                }else{
                    return false;
                }

            }
        } catch (\Throwable $th) {
            return false;
        }
    } // End function search
}

?>