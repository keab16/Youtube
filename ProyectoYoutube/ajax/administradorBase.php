<?php
    switch ($_GET['accion']) {
        case 'obtenerUsuario':
            $archivo = fopen("../data/sesionYCuentas.json","a+");
            fwrite($archivo, json_encode($_POST) . "\n");
            fclose($archivo);
            $respuesta["codigo"]= 0;
            $respuesta["mensaje"]= "Registro guardado exitosamente";
            echo json_encode($respuesta);
        break;
        case 'leerUsuarios':
            $archivo = fopen("../data/sesionYCuentas.json", "r");
            $linea = "";
            $usuario=array();

            while ( $linea = fgets( $archivo ) ) {
                $registro = json_decode( $linea, true );
                $usuario[] = $registro;
            }
            echo json_encode( $usuario );
        break;
        default:
            
        break;
    } 
?>