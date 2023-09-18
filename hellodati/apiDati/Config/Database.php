<?php
    // namespace Config;

    class Database { 
        private $host = 'localhost'; 
        private $user = "root";
        private $pass = "root";
        private $db = "dbhellodati";     
        public $exec=true;
        public $errorCode=0;
        public $errorMessage="";
        public $InsertId=0;
        public $result;
        public $nb_result;
        public function init(){
            $this->exec=true;
            $this->errorCode=0;
            $this->errorMessage="";
            $this->InsertId=0;
            $this->nb_result=0;
            $this->result="";
        }
       public function getConnection(){
			$this->exec=true;
            $this->errorCode=0;
            $this->errorMessage="";
            $this->InsertId=0;
            try {
                $connection = new PDO("mysql:dbname=$this->db;host=$this->host;charset=utf8", $this->user, $this->pass, [
					PDO::ATTR_EMULATE_PREPARES => false,
					PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
				]);
                return $connection;
            } catch (Exception $e) {
                return false;
            }
        }
        public function __construct(){
            $this->exec=true;
            $this->errorCode=0;
            $this->errorMessage="";
            $this->InsertId=0;
        }

		public function Select_id($class_name,$id){
			$this->init();
            $connexion = $this->getConnection();
           
            if(!$connexion){
                $this->errorCode=1;
                $this->errorMessage="Error connecting to the database";
                $this->exec=false;
                return false;
            }else{
                $stmt = $connexion->prepare("SELECT * FROM `".$class_name."` where id=".$id);
                $stmt->execute();
                $this->result =  $stmt->fetchObject($class_name);
                $stmt->closeCursor();
                return true;
            }
			$connexion = NULL;
		}


        public function Select(){
			$ctp = func_num_args();
            $args = func_get_args();
            if($ctp < 1){
                return false;
                exit();
            }
            
            if($connexion = $this->getConnection()){
                $stmt = $connexion->prepare($args[1]);
                $stmt->setFetchMode( PDO::FETCH_CLASS, $args[0]);
                if($ctp > 2){
                    $x = $stmt->execute($args[2]);
                }else{
                    $x = $stmt->execute();
                }

                if(!$x){
                    $stmt->closeCursor();
                    $connection = NULL;
                    $this->errorCode=1;
                    $this->error = "execution error of the request";
                    return false;
                }else{
                    $res =  $stmt->fetchAll( PDO::FETCH_CLASS );
                    if($res != NULL){
                        $stmt->closeCursor();
                        $this->errorCode=0;
                        $connection = NULL;
                        return $res;
                    }else{
                        $this->errorCode=0;
                        $stmt->closeCursor();
                        $connection = NULL;
                        return "no-result";
                    }
                }
            }else{
                $this->errorCode=1;
                $this->errorMessage="Error connecting to the database";
                $this->exec=false;
                return false;
            }
        }
        

        public function SelectWithOutModel(){
            try {  
                $ctp = func_num_args();
                $args = func_get_args();
                if($ctp < 1){
                    return false;
                    exit();
                }
                
                if($connexion = $this->getConnection()){
                    $stmt = $connexion->prepare($args[0]);
                    if($ctp > 1){
                        $x = $stmt->execute($args[1]);
                    }else{
                        $x = $stmt->execute();
                    }

                    if(!$x){
                        $stmt->closeCursor();
                        $connection = NULL;
                        $this->errorCode=1;
                        $this->error = "execution error of the request";
                        return false;
                    }else{
                        $res =  $stmt->fetchAll( PDO::FETCH_CLASS );
                        if($res != NULL){
                            $stmt->closeCursor();
                            $this->errorCode=0;
                            $connection = NULL;
                            return $res;
                        }else{
                            $this->errorCode=0;
                            $stmt->closeCursor();
                            $connection = NULL;
                            return "no-result";
                        }
                    }
                }else{
                    $this->errorCode=1;
                    $this->errorMessage="Error connecting to the database";
                    $this->exec=false;
                    return false;
                }
            } catch (\Throwable $th) {
                return false;
            }
        }

        public function insert(){
			$ctp = func_num_args();
            $args = func_get_args();
            if($ctp < 1){
                return false;
            }
            
            if($connexion = $this->getConnection()){
                $stmt = $connexion->prepare($args[1]);
                if($ctp > 2){
                    $x = $stmt->execute($args[2]);
                }else{
                    $x = $stmt->execute();
                }

                if(!$x){
                    $stmt->closeCursor();
					$connection = NULL;
					$this->errorCode=1;
					$this->error = "Error execution of the request";
					return false;
                }else{
                    $this->InsertId = $connexion->lastInsertId();
					$stmt->closeCursor();
					$this->errorCode=0;
					$connection = NULL;
					return $this->InsertId;
                }
            }else{
                $this->errorCode=1;
                $this->errorMessage="Error connecting to the database";
                $this->exec=false;
                return false;
            }
		}


        public function update(){
            $ctp = func_num_args();
            $args = func_get_args();
            if($ctp < 1){
                return false;
            }

            if($connexion = $this->getConnection()){
                $stmt = $connexion->prepare($args[1]);
                if($ctp > 2){
                    $x = $stmt->execute($args[2]);
                }else{
                    $x = $stmt->execute();
                }

                if(!$x){
                    $stmt->closeCursor();
                    $connection = NULL;
                    $this->errorCode=1;
                    $this->error = "Error execution of the request";
                    return false;
                }else{
                    $this->InsertId = $connexion->lastInsertId();
                    $stmt->closeCursor();
                    $this->errorCode=0;
                    $connection = NULL;
                    return $this->InsertId;
                }
            }else{
                $this->errorCode=1;
                $this->errorMessage="Error connecting to the database";
                $this->exec=false;
                return false;
            }
        }
    }


    
?>