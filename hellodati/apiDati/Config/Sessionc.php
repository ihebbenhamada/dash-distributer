<?php
	class Sessionc {
		public $client;
		public $visit;
		public $admin;
		public $ID_V;
		public function __construct(){
			session_name("apiHellodati20191221");
			session_start();
        }
		
		public function isLogin(){
			if(isset($_SESSION["users"]) && !empty($_SESSION["users"])){
				return true;
			}else{
				return false;
			}
		}

		public function isAdmin(){
			if(isset($_SESSION["admin"]) && !empty($_SESSION["admin"])){
				return true;
			}else{
				return false;
			}
		}
		
		public function Admin($admin){
			$_SESSION["admin"] = $admin;
		}

		public function AdminLogOut(){
			$_SESSION["admin"] = NULL;
		}

		public function isMarchants(){
			if(isset($_SESSION["Marchants"]) && !empty($_SESSION["Marchants"])){
				return true;
			}else{
				return false;
			}
		}
		public function Marchants($Marchants){
			$_SESSION["users"] = $Marchants;
		}
		public function Login($users){
			$_SESSION["users"] = new Users();
			$_SESSION["users"] = $users;
		}
		
		public function fermer(){
			session_write_close();
		}
		public function detruire(){
			$_SESSION["users"] = NULL;
		}
	}
?>