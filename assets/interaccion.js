function mostrarAlerta() {
    window.alert("¡Solo contactame en el formulario que se encuentra al finalizar la pagina y pronto te contactare!");
  }

  function enviarFormulario() {
    const email = document.getElementById("exampleInputEmail1").value;
    const servicio = document.getElementById("exampleInputtext").value;

    // Aquí puedes realizar alguna acción con los datos (por ejemplo, enviarlos a un servidor)
    // y luego mostrar un mensaje al usuario:
    alert("¡Gracias! Nos pondremos en contacto pronto.");

    // Limpia los campos de entrada:
    document.getElementById("exampleInputEmail1").value = "";
    document.getElementById("exampleInputtext").value = "";
}
  