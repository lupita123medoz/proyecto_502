<?php
    include "conexion.php";
    //recibimos la accion a realizar
    //enviado dede el formulario
    $accion=$_GET["accion"];
    //evaluamos la accion 
    switch($accion){
        case 'agregarUsuario':
            //recibimos los datos enviados por el formulario
            $clave=$_GET["clave"];
            $nombre=$_GET["nombre"];
            $edad=$_GET["edad"];
            //se especifica el sql a realizar
            $sql="insert into usuario values (0, '$clave','$nombre','$edad')";
            //ejecutar la setencia
            $ejecutaSQL=$conexion->query($sql);
            //comprobamos si la ejecucion fue correcta
            if($ejecutaSQL){
                echo "1";
            }
            else
            {
                echo "0";
            }
            break;
        
        case 'eliminarUsuario':
                //recibimos los datos enviados por el formulario
                $id=$_GET["id"];
                //se especifica el sql a realizar
                $sql="delete from usuario where id='$id'";
                //ejecutar la setencia
                $ejecutaSQL=$conexion->query($sql);
                //comprobamos si la ejecucion fue correcta
                if($ejecutaSQL){
                    echo "1";
                }
                else
                {
                    echo "0";
                }
                break;
        case 'editarUsuario':
                    //recibimos los datos enviados por el formulario
                    $clave=$_GET["clave"];
                    $nombre=$_GET["nombre"];
                    $edad=$_GET["edad"];
                    //se especifica el sql a realizar
                    $sql="update usuario set nombre='$nombre', edad='$edad' where clave='$clave'";
                    //ejecutar la setencia
                    $ejecutaSQL=$conexion->query($sql);
                    //comprobamos si la ejecucion fue correcta
                    if($ejecutaSQL){
                        echo "1";
                    }
                    else
                    {
                        echo "0";
                    }
                    break;
    }

?>