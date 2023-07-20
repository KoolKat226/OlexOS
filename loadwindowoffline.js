        function openBlankWindow() {
            var newWindow = window.open('about:blank', '_blank');

            newWindow.document.write(`
<html>
                <head>
                    <title>New Tab</title>
                    <link rel="icon" href="https://koolkat226.github.io/OlexOS/logosmall.png" type="image/x-icon">
                    <link rel="shortcut icon" href="https://koolkat226.github.io/OlexOS/logosmall.png" type="image/x-icon">
                </head>
<style type="text/css">
        html {
            overflow: auto;
        }
          

        iframe {
            margin: 0px;
            padding: 0px;
            height: 100%;
            border: none;
        }
          
        iframe {
            display: block;
            width: 100%;
            border: none;
            overflow-y: auto;
            overflow-x: hidden;
        }
html, body {margin: 0; height: 100%; overflow: hidden}
    </style>
    <body>
                <iframe src="https://olex.jacsyn.repl.co"
            frameborder="0" 
		name="browser"
            marginheight="0" 
            marginwidth="0" 
            width="100%" 
            height="100%" 
            allowfullscreen
            allow="camera;microphone"
            allowpaymentrequest="true"
            scrolling="auto">
            
  </iframe>
  </body>
  <script>
  window.addEventListener("beforeunload", function(event) {
            event.preventDefault();
            event.returnValue = ""; // Required for Chrome and Firefox
            return ""; // Required for Safari
        });
        </script>
                </html>
            `);

            newWindow.document.close();
        }

openBlankWindow();