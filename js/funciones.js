$(document).ready(function() {
    //evento click menu inicio
    $("#menuInicio").click(function(event) {
        $("#divInicio").show("slow");
        $("#divFormulario").hide("slow");
    });
    //evento click del menu ususario
    $("#menuUsuario").click(function(event) {
        $("#divInicio").hide("slow");
        //cargar datos en el div mostrarUsuarios
        $("#divMostrarUsuarios").load("./php/mostrarUser.php");
        $("#divFormulario").show("slow");
        $("#mostrarGrafica").load("./php/grafico.php");
    });
    //evento del boton btnAgregar
    $("#btnAgregar").click(function(event) {
        var nombre, edad, clave, accion, valorBoton;
        //guardamos los datos de las cajas de texto
        clave = $("#txtClave").val();
        nombre = $("#txtNombre").val();
        edad = $("#txtEdad").val();
        valorBoton = $("#btnAgregar").val();
        if (valorBoton == "agregar") {
            accion = "agregarUsuario";
        } else {
            accion = "editarUsuario";
        }

        //usamos ajax para el envio de los datos al servidor
        $.ajax({
            url: "./php/servidor.php",
            type: "GET",
            data: { clave: clave, nombre: nombre, edad: edad, accion: accion },
            success: function(respuetaServidor) {
                //comprobamos que el servidor regrese a 1
                if (respuetaServidor == "1") {
                    alertify.success("Accion exitosa");
                    $("#divMostrarUsuarios").load("./php/mostrarUser.php");
                    $("#mostrarGrafica").load("./php/grafico.php");
                    limpiar();
                    $("#btnAgregar").removeClass();
                    $("#btnAgregar").addClass("btn btn-success");
                    $("#btnAgregar").val("agregar");
                    $("#btnAgregar").html("Agregar");

                } else {
                    alertify.error("No se registro el dato");
                }
            }
        });
    });
});

function limpiar() {
    $("#txtClave").val("");
    $("#txtNombre").val("");
    $("#txtEdad").val("");
    $("#txtClave").focus();
}

function eliminar(id) {
    //confirmar la eliminación
    alertify.confirm("Seguro de eliminar el registro con id " + id + "?", function(respuesta) {
        if (respuesta) {
            $.ajax({
                url: "./php/servidor.php",
                type: "GET",
                data: { id: id, accion: "eliminarUsuario" },
                success: function(respuetaServidor) {
                    if (respuetaServidor == "1") {
                        alertify.success("Eliminación correcta");
                        $("#divMostrarUsuarios").load("./php/mostrarUser.php");
                        $("#mostrarGrafica").load("./php/grafico.php");
                    }
                }
            });
        }
    });
}

function editar(id, clave, nombre, edad) {
    $("#txtClave").val(clave);
    $("#txtClave").attr("readonly", "true");
    $("#txtNombre").val(nombre);
    $("#txtEdad").val(edad);
    $("#btnAgregar").removeClass();
    $("#btnAgregar").val("Actualizar");
    $("#btnAgregar").addClass("btn btn-secondary");
    $("#btnAgregar").html("Actualizar datos");

}