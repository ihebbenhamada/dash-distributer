<?php


namespace DAO;


use Database;

class Employees extends Database{

    public $res;
    public $error;

    /**
     * Employees constructor.
     */
    public function __construct(){
    }

    public function add_Employee(){

        try {
            $cpt = func_num_args();
            $args = func_get_args();
     /*       print_r(array_values($args));*/
            if ($cpt > 1) {

                $sql = "INSERT INTO `Employee` (`id`, `username`, `password`, `email`, `is_su`, `is_owner`, `is_root`) 
                        VALUES  (NULL ,:username,:password,:email,:is_su,:is_owner,:is_root)";
                $value = array(
                    ':username' => $args[0],
                    ':password' => $args[1],
                    ':email' => $args[2],
                    ':is_su' => $args[3],
                    ':is_owner' => $args[4],
                    ':is_root' => $args[5]);

                if ($res = $this->insert("Employee", $sql, $value)) {
                   return $res;
                } else {
                    return false;
                }
            }else{
                return false;
            }
        }catch (\Throwable $th){
            return false;
        }
    }


    public function search($val){
        try {
            $sql ="SELECT * FROM `Employee` WHERE `username`= '".$val."'";
            echo $sql;
            if ($res = $this->Select("Employer",$sql)){
                if ($res != "no-result"){
                    return $res;
                }else{
                    return  false;
                }
            }
        }catch (\Throwable $th){
            return false;
        }

    }




}