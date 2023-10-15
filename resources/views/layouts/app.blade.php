<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    @vite('resources/css/app.css')

    <title>DevStagram - @yield('titulo')</title>
</head>

<body>
    <header>
        <nav>
            <a href="/">Principal</a>
        </nav>
    </header>
    <main class="container mx-auto mt-10">
        <h2 class="font-black text-center  text-3xl mb-10">
            @yield('titulo')
        </h2>
        @yield('contenido')
    </main>
    <footer class="mt-10 text-center p-5 text-gray-500 font-bold uppercase">
        DevStagram - Todos los derechos reservados
        {{ now()->year }}
    </footer>
</body>

</html>
