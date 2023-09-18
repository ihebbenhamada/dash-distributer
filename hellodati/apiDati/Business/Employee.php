<?php


namespace Business;
use Models\JsonCode;

class Employee
{
    private $dao;
    private  $json;

    public function __construct()
    {
        $this ->dao = new \DAO\Employees();
    }

    public function AddEmployee(){

                if (required_posts("username","password")){
                    $username = $_POST["username"];
                    $password = $_POST["password"];

                            if (isset_posts("email")){
                                $email = $_POST["email"];
                            }else{
                                $email = null;
                            }

                            if (isset_posts("is_su")){
                                $superUser = $_POST["is_su"];
                            }else{
                                $superUser = null;
                            }

                            if (isset_posts("is_owner")){
                                $owner = $_POST["is_owner"];
                            }else{
                                $owner = null;
                            }

                            if (isset_posts("is_root")){
                                $root= $_POST["is_root"];
                            }else{
                                $json = new JsonCode(false,"error");
                                echo json_encode($json);
                                $root = null;
                            }


                            if ($res = $this->dao->add_Employee($username,$password,$email,$superUser,$owner,$root)){
                                $json = new JsonCode($res);
                                echo json_encode($json);
                            }else{
                                $json = new JsonCode(0,"Can't add employee");
                            }
                    }
                else {
                    $json = new JsonCode(0,"Parameters not receive");
                    echo json_encode($json);
                    return false;
                }

                }

                public function SearchEmployer(){

                    try {
                        if (!required_posts("username")){
                            $json = new JsonCode(0,"no parameters receive");
                            echo json_encode($json);
                            exit();
                        }else{
                            $search = post("username");
                        }

                        if ($res = $this->dao->search($search)){
                            $json = new JsonCode($res);
                            echo json_encode($json);
                        }else{

                            $json = new JsonCode(0,"not found");
                            echo json_encode($json);
                        }
                    }catch (\Throwable $th){
                        $json = new JsonCode(0,"Error api");
                        echo json_encode($json);
                        return false;
                    }


                }


                public function SearchEmp(){

                    try {
                        if (!required_posts("username")){
                            $json = new JsonCode(0,"no parameters receive");
                            echo json_encode($json);
                            exit();
                        }else{
                            $search = post("username");
                        }

                        if ($res = $this->dao->search($search)){
                            $json = new JsonCode($res);
                            echo json_encode($json);
                        }else{

                            $json = new JsonCode(0,"not found");
                            echo json_encode($json);
                        }
                    }catch (\Throwable $th){
                        $json = new JsonCode(0,"Error api");
                        echo json_encode($json);
                        return false;
                    }


                }











}