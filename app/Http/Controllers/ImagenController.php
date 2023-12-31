<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;

class ImagenController extends Controller
{
    public function store(Request $request)
    {
        // obtiene la imagen del request
        $imagen = $request->file('file');

        // genera un nombre único para la imagen, incluyendo la extensión
        $nombreImagen = Str::uuid() . "." . $imagen->extension();

        // crea una instancia de la InterventionImage
        $imagenServidor = Image::make($imagen);
        // redimensiona la imagen
        $imagenServidor->fit(1000, 1000);

        // guarda la imagen en el directorio uploads en public (crear carpeta uploads si no existe)
        $imagenPath = public_path('uploads') . '/' . $nombreImagen;
        $imagenServidor->save($imagenPath);

        // retorna el nombre de la imagen como json response, almacena el nombre en la db
        return response()->json(['imagen' => $nombreImagen ]);
    }
}
