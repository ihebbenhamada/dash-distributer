<?php

    namespace DAO;

    use \PDO ;
	use \Database ;
	use \Models ;
	
	class Users extends Database{

        public function __construct(){
            
        }

        public function add(){
			$ctp = func_num_args();
			$args = func_get_args();
			// echo $ctp;
			if($ctp > 1){
                
				$sql = "INSERT INTO `Users` (`id`, `email`, `password`, `enable`, `deleted`) VALUES 
				(NULL, :email, :pass, 1, 0);";
				$valeur = array(
								':email' => $args[0],
								':pass' => $args[1]
								);

				if($res = $this->insert("Users",$sql, $valeur)){
					return $res;
				}else{
					return false;
				}
			}else{
				return false;
			}
		}

    }
?>