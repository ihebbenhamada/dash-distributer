<?php

class Router{
	protected $site="api.sowazi.com";
	public $isp;
    private $parms;
	private $controller;
	
	private $className;
	private $methodName;
	private $url;
	private $dns="";
	public $error="";

	

    public function getController(){
        return $this->controller;
	}
	public function getClassName(){
        return $this->className;
	}
	public function getMethodName(){
        return $this->methodName;
    }
    public function getParms(){
        return $this->parms;
    }
	
	public function getAdmin(){
		return $this->dns2;
	}
	
	public function getSite_url(){
		return $this->dns;
	}
	public function getSite2_url(){
		return $this->dns2;
	}
    public function getUrl($cible){
		$c = str_replace($this->controller."/", $cible."/", $this->url);
        return $c;
    }
    public function getDNS(){
        return $this->dns;
    }
	
	private function same_dns2(){
		if(strlen($_SERVER['HTTP_REFERER']) >= strlen($this->dns2)){
			$dns_received = substr($_SERVER['HTTP_REFERER'],0, strlen($this->dns2));
			if($dns_received == $this->dns2){
				return true;
			}else{
				return false;
			}
		}else{
			return false;
		}
	}
	
	private function same_dns(){
		if(strlen($_SERVER['HTTP_REFERER']) >= strlen($this->dns)){
			$dns_received = substr($_SERVER['HTTP_REFERER'],0, strlen($this->dns));
			if($dns_received == $this->dns){
				return true;
			}else{
				return false;
			}
		}else{
			return false;
		}
	}
	public function same_ref($ref){
		if($_SERVER['HTTP_REFERER'] == $this->dns."".$ref){
			return 1;
		}else{
			return 0;
		}
	}
	public function protect_s(){
		if(isset($_SERVER['HTTP_REFERER']) && !empty($_SERVER['HTTP_REFERER'])){
			return $this->same_dns();
		}else{
			return false;
		}
	}
	public function protect_s2(){
		if(isset($_SERVER['HTTP_REFERER']) && !empty($_SERVER['HTTP_REFERER'])){
			return $this->same_dns2();
		}else{
			return false;
		}
	}


	// verify if error json dns
	private function verify_dsn_json($dnsj){
		if(!isset($dnsj->dns) || empty($dnsj->dns)){
			header("HTTP/1.1 401 Unauthorized");
			$this->error = "error file /Config/dns.json";
			exit();
		}

		if(!isset($dnsj->controller) || empty($dnsj->controller)){
			header("HTTP/1.1 401 Unauthorized");
			$this->error = "error file /Config/dns.json";
			exit();
		}

		if(!isset($dnsj->https_only) || empty($dnsj->https_only)){
			header("HTTP/1.1 401 Unauthorized");
			$this->error = "error file /Config/dns.json";
			exit();
		}
	} 

	private function myDomainConfig (){
		for ($i = 0; $i < count($this->dns); $i++) {
			if($this->dns[$i]->dns == dns){
				return $i;
			}
		}
		return -1;
	}

    function __construct(){
        //require "Autoloader.php";
		//Autoloader::register();
		// echo getcwd();
		if(file_exists(root."/Config/dns.json")){
			try{
				$file = root."/Config/dns.json";
				$this->dns = file_get_contents($file);
				$this->dns = json_decode($this->dns);
				if(!isset( $this->dns[0]) || empty( $this->dns[0])){
					header("HTTP/1.1 401 Unauthorized");
					exit();
				}	
			} catch (Exception $e) {
				header("HTTP/1.1 401 Unauthorized");
    			exit();
			}
			
		}else{
			header("HTTP/1.1 401 Unauthorized");
    		exit();
		}
		for ($i = 0; $i < count($this->dns); $i++) {
			$this->verify_dsn_json($this->dns[$i]);
		}

		if($this->myDomainConfig() == -1){
			header("HTTP/1.1 401 Unauthorized");
			exit();
		}
		
		
            $u=uri;
			$this->url = $u;
			$l=strlen($u);
			if($l > 1){
				if( $u[$l-1] == "/" ){
					$u = substr($u, 0, -1);
				}
				if( $u[0] == "/" ){
					$u = $u = substr($u, 1, $l);;
				}
			}elseif($l > 0){
				if( $u[0] == "/" ){
					$u = "";
				}
			}

			$this->controller = root."/Controllers/".$this->dns[$this->myDomainConfig()]->controller."/index.php";
			
			$url = explode('/', filter_var($u,FILTER_SANITIZE_URL));
		
			
			if(count($url) > 0){
				$this->className = $url[0];
			}
			if(count($url) > 1){
				$this->methodName = $url[1];
			}
			unset($url[0]);
			unset($url[1]);
			$this->parms = array();
			if(count($url) > 0){
				$this->isp = true;
				foreach ($url as $value) {
					$pos = strpos($value, "=");
					if($pos !== false){
						$name = substr($value, 0, $pos); 
						$val = substr($value, $pos+1, strlen($value)-$pos-1);
						// array_push($this->parms, $name => $val);
						$this->parms[$name] = $val;
					}
				}
			}else{
				$this->isp = false;
			}
			if(!file_exists($this->getController())){
				header("HTTP/1.0 404 Not Found");
				exit();
			}
    }
}

?>