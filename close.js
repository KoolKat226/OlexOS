var iframe = document.createElement("iframe");
iframe.setAttribute("style","position: fixed; z-index: 999999; height: 100vh; width: 100vw; top: 0px; border-radius: 0px; overflow: hidden; background-color: #fff;");
iframe.setAttribute("id","olex");
iframe.src = "https://koolkat226.github.io/OlexOS/";
document.body.appendChild(iframe);
iframe.onload=my_code;