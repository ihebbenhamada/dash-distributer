<?php

    namespace DAO;

    use \PDO ;
	use \Database ;
	
	class Trx extends Database{
        public $res;
        public $error;
        public function __construct(){
            // $this->db = new \Database();
        }

        public function get_id($id){
            
            $sql = "SELECT * FROM `Trx` where id = :id";
            $valeur = array(':id' => $id);
            try {
                $res = $this->Select("Trx",$sql, $valeur);
                if($res){
                    return $res;
                }else{
                    return false;
                }
            } catch (\Throwable $th) {
                return false;
            }
        }

        public function get_Code($code){
            
            $sql = "SELECT * FROM `Trx` where code = :code";
            $valeur = array(':code' => $code);
            try {
                $res = $this->Select("Trx",$sql, $valeur);
                if($res){
                    return $res;
                }else{
                    return false;
                }
            } catch (\Throwable $th) {
                return false;
            }
        }

        public function getAll(){
            $sql = "SELECT * FROM `Trx`";
            try {
                $res = $this->Select("Trx",$sql);
                if($res){
                    return $res;
                }else{
                    return false;
                }
            } catch (\Throwable $th) {
                return false;
            }
        }

        public function getAllactive(){
            $sql = "SELECT * FROM `Trx` where isActive=1";
            try {
                $res = $this->Select("Trx",$sql);
                if($res){
                    return $res;
                }else{
                    return false;
                }
            } catch (\Throwable $th) {
                return false;
            }
        }

    }
?>