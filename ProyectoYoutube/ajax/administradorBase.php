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
        case 'subirArchivo':            
            $nombre = $_FILES['archivo']['name'];
            $guardado = $_FILES['archivo']['tmp_name'];

            //if (isset($_POST)){
                if( !file_exists('archivos') ){
                    mkdir('../data/videos/Archivo', 0777, true);
                    if( file_exists('../data/videos/Archivo') ){
                        if ( move_uploaded_file($guardado, '../data/videos/Archivo/'.$nombre) ) {
                            header("Location: ../index.html");
                            echo "<script>alert('Archivo guardado con exito');</script>";                            
                        }else{
                            header("Location: ../index.html");
                            echo "<script>alert('Archivo no se pudo Guardar');</script>";                            
                        }
                    }
                }else{
                    if ( move_uploaded_file($guardado, '../data/videos/Archivo/'.$nombre) ) {
                        header("Location: ../index.html");
                        echo "<script>alert('Archivo guardado con exito');</script>";                        
                    }else{
                        header("Location: ../index.html");
                        echo "<script>alert('Archivo no se pudo Guardar');</script>";                        
                    }
                }
            //}
        break;
        default:
            
        break;
    } 
?>