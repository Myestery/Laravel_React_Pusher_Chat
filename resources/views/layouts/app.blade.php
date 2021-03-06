<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
   <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
 
    <link href="css/w3.css" rel="stylesheet">

    <link href="css/my.css" rel="stylesheet">
    <!-- Bootstrap CSS -->
    <link href="bootstrap-4.3.1-dist/css/bootstrap.css" rel="stylesheet">
</head>
<body>
    <header id="header"></header>
        <main class="py-4" id="app">
            @yield('content')
        </main>
        @yield('footer')
        
        <script src="js/popper.js"></script>

        <script src="{{ asset('js/app.js') }}" defer></script>
        <script src="js/Header.js" defer></script>
        @yield('script')
      <script src="/bootstrap-4.3.1-dist/js/bootstrap.js"></script>
      <script src="js/jquery-3.2.1.min.js"></script> 
</body>
</html>
