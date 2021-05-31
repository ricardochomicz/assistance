<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="{{ URL::asset('assets/css/style.css') }}">
    <title>SPA</title>
</head>

<body style="background: #efebe9" class="hold-transition sidebar-mini">
    <div class="wrapper" id="app">
        <app></app>
    </div>
    <script src="{{ mix('js/app.js') }}"></script>
   
</body>

</html>
