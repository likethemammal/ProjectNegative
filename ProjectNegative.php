<!DOCTYPE html>
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
    <title>Simple game with HTML5 Canvas</title>
    <style>
        @font-face {
            font-family: 'Fjalla One';
            font-style: normal;
            font-weight: 400;
            src: local('Fjalla One'), local('FjallaOne-Regular'), url(http://themes.googleusercontent.com/static/fonts/fjallaone/v1/rxxXUYj4oZ6Q5oDJFtEd6hsxEYwM7FgeyaSgU71cLG0.woff) format('woff');
        }
        @font-face {
            font-family: 'Carter One';
            font-style: normal;
            font-weight: 400;
            src: local('Carter One'), local('CarterOne'), url(http://themes.googleusercontent.com/static/fonts/carterone/v5/VjW2qt1pkqVtO22ObxgEBRsxEYwM7FgeyaSgU71cLG0.woff) format('woff');
        }

        body {
            margin:0;
            padding:0;
            text-align:center;
        }

        canvas{
            outline:0;
            border:1px solid #000;
            margin-left: auto;
            margin-right: auto;
        }
    </style>
</head>
<body>

<div id="container">
<canvas id='c'></canvas>


</div>

<script src="Game.js"></script>

</body>
</html>