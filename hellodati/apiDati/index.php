<?php
// error_reporting(0);
	$interface = $_SERVER['SERVER_NAME'];
	header('Access-Control-Allow-Origin: *');
	$root = $_SERVER["DOCUMENT_ROOT"];
	define("root", $_SERVER["DOCUMENT_ROOT"]);
    define("dns", $_SERVER["HTTP_HOST"]);
	define("uri", $_SERVER["REQUEST_URI"]);
	
	function required_posts(){
		$ctp = func_num_args();
		$args = func_get_args();
		for($i=0; $i<$ctp; $i++){
			if( !isset( $_POST[$args[$i]] ) || empty( $_POST[$args[$i]] )){
				return false;
			}
		}
		return true;
	}

	function isset_posts(){
		$ctp = func_num_args();
		$args = func_get_args();
		for($i=0; $i<$ctp; $i++){
			if( !isset( $_POST[$args[$i]] ) ){
				return false;
			}
		}
		return true;
	}

	function required_gets(){
		global $route;
		$ctp = func_num_args();
		$args = func_get_args();
		for($i=0; $i<$ctp; $i++){
			if( !isset( $route->getParms()[$args[$i]] )){
				return false;
			}
		}
		return true;
	}

	function post($postname){
		try {
			return $_POST[$postname];
		} catch (\Throwable $th) {
			return false;
		}
	}

	function get($getname){
		global $route;
		try {
			if(required_gets($getname)){
				return $route->getParms()[$getname];
			}else{
				return false;
			}
		} catch (\Throwable $th) {
			return false;
		}
	}

    require "Config/Database.php";
    require "Controllers/router.php";
	require "Controllers/Autoloader.php";
	// include $_SERVER["DOCUMENT_ROOT"]."/Config/Database.php";
	// require "Config/Database.php";
	require "Config/Sessionc.php";
	//require "dao/User_dao.php";
	
    Autoloader::register();
	$sessionc= new Sessionc();
    $route = new Router();
	include($route->getController());
	$sessionc->fermer();
?>
