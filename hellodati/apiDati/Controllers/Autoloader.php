<?php
    class AutoLoader{
        static function register(){
            spl_autoload_register(array(__class__, 'autoload'));
		}
		
		static function autoload($class){
			if(strpos($class, "Models") !== false ||
			strpos($class, "DAO") !== false || 
			strpos($class, "Business") !== false
			){
				$class = str_replace('\\','/',$class);
				if(file_exists(root."/".$class.".php")){
					include(root."/".$class.".php");
				}else{
					http_response_code(500);
				}
			}
			
		}
    }
?>