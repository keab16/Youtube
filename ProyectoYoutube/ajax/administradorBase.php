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
                    mkdir('../data/Videos', 0777, true);
                    $archivoBase=fopen('../data/Videos/urlVideos'.".json","w");
                    fclose($archivoBase);

                    if( file_exists('../data/Videos') ){
                        if ( move_uploaded_file($guardado, '../data/Videos/'.$nombre) ) {
                            $archivoBase=fopen('../data/Videos/urlVideos'.".json","a+");
                            fwrite($archivoBase, '"../data/Videos/'.$nombre."\"\n");
                            fclose($archivoBase);

                            echo "<script>alert('Archivo guardado con exito');</script>";                            
                            header("Location: ../index.html");
                        }else{
                            echo "<script>alert('Archivo no se pudo Guardar');</script>";    
                            header("Location: ../index.html");                                                    
                        }
                    }
                }else{
                    if ( move_uploaded_file($guardado, '../data/Videos/'.$nombre) ) {
                        $archivoBase=fopen(' \"../data/Videos/urlVideos \"'.".json","a+");
                        fwrite($archivoBase, '"../data/Videos/'.$nombre."\"\n");
                        fclose($archivoBase);
                            
                        echo "<script>alert('Archivo guardado con exito');</script>";
                        header("Location: ../index.html");                                                
                    }else{
                        echo "<script>alert('Archivo no se pudo Guardar');</script>";
                        header("Location: ../index.html");                                                
                    }
                }
            //}
        break;
        default:
            
        break;
    } 
?>