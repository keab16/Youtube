<?php
        include("../class/class-conexion.php");
        $conexion = new Conexion();

       switch($_GET["accion"]){
        case "etapa-correo":
           $sql =   "SELECT codigo_usuario, nombre,  apellido, correo_electronico, contrasena, fecha_creacion, correo_alternativo ".
                    "FROM tbl_usuarios";
                    
            $resultado = $conexion->ejecutarConsulta($sql);
            $resultadoUsuarios = array();
            while($fila = $conexion->obtenerFila($resultado)){
                $resultadoUsuarios[] = $fila;
                var_dump($fila);
            }
            echo json_encode($resultadoUsuarios);
        break;
        case "etapa-contrasena":
                
        break;
        case "recuperar-contrasena":
            
        
        break;
        
        }

    $conexion->cerrarConexion();
?>