import './bootstrap';
import Dropzone from "dropzone";

Dropzone.autoDiscover = false;

if(document.querySelector('#dropzone')) {

    const dropzone = new Dropzone("#dropzone", {
        dictDefaultMessage: "Sube aquí tu imagen",
        acceptedFiles: ".png,.jpg,.jpeg,.gif",
        addRemoveLinks: true,
        dictRemoveFile: "Borrar Imagen",
        maxFiles: 1,
        uploadMultiple: false,


        // hacer que la imagen se vuelva a llenar cuando falla la validacion y asi se mantenga
        init: function () {
            // si ya hay una imagen en el input imagen
            if (document.querySelector('[name="imagen"]').value.trim()) {
                // crea un objeto de la imagen con size y name (obligatorio)
                const imagenPublicada = {};
                imagenPublicada.size = 1234;
                imagenPublicada.name =
                    document.querySelector('[name="imagen"]').value;

                    // agrega la imagen al dropzone
                this.options.addedfile.call(this, imagenPublicada);

                // llama al callback de thumbnail
                this.options.thumbnail.call(
                    this,
                    imagenPublicada,
                    `/uploads/${imagenPublicada.name}`
                );

                // agrega la clase succes y complete a la imagen
                imagenPublicada.previewElement.classList.add(
                    "dz-success",
                    "dz-complete"
                );
            }
        },
    });


    // get name of uploaded image from response from imagencontroller
    dropzone.on("success", function (file, response) {
        // selecciona el input con el nombre imagen (en dashboard.blade.php) y le asigna como valor el nombre de la imagen
        document.querySelector('[name="imagen"]').value = response.imagen;
    });

    // al remover una imagen, se borra el input imagen (asi ya no se vuelve a llamar )
    dropzone.on("removedfile", function () {
        document.querySelector('[name="imagen"]').value = "";
    });

    // debugging

    dropzone.on("sending", function (file, xhr, formData) {
        console.log(formData);
    });

    // print json response from imagencontroller
    // dropzone.on("success", function (file, response) { console.log(response,) ;
    // });

    // dropzone.on("error", function (file, xhr, message) {
    //     console.log(message) ;
    // });

    // dropzone.on("removedfile", function () {
    //     console.log("Archivo eliminado") ;
    // });





}
