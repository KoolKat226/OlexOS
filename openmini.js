var iframe = document.createElement("iframe");
iframe.setAttribute("style","position: fixed; z-index: 999999; width: 700px; height: 385px; right: 10px; top: 10px; border-radius: 20px; overflow: hidden; background-color: #fff;");
iframe.setAttribute("id","olex");
iframe.src = "https://koolkat226.github.io/OlexOS/";
document.body.appendChild(iframe);
iframe.onload=my_code;
