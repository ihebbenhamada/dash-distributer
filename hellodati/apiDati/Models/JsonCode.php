<?php
	namespace Models;
	class JsonCode{
		public $isValid;
		public $errorCode;
		public $error;
		public $data;
		public function __construct(){
            $ctp = func_num_args();
			$args = func_get_args();
			switch($ctp)
			{
				case 4:
					$this->isValid=$args[0];
					$this->errorCode=$args[1];
					$this->error=$args[2];
					$this->data=[$args[3]];
					break;
				case 3:
					$this->isValid=$args[0];
					$this->errorCode=0;
					$this->error=$args[1];
					$this->data=[$args[2]];
					break;
				case 2:
					$this->isValid=$args[0];
					$this->errorCode=0;
					$this->error=$args[1];
					$this->data=[];
					break;
				case 1:
						$this->isValid=true;
						$this->errorCode=0;
						$this->error=false;
						if(gettype($args[0]) == "array"){
							$this->data=$args[0];
						}else{
							$this->data=[$args[0]];
						}
						
						break;
				default:
					break;
			}
        }
	}

	
?>