

var div = document.createElement("div");
document.body.appendChild(div);
  div.innerHTML = `
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
body {
  font-family: "Lato", sans-serif;
}

.sidenav {
  border-radius: 20px;
  margin: 0;
  position: absolute;
  top: 0%;
  -ms-transform: translateY(30%);
  transform: translateY(30%);
  height: 61%;
  width: 69px;
  position: fixed;
  z-index: 99999999;
  top: 0;
  left: 4;
  overflow-x: hidden;
  padding-top: 20px;
  background:rgba(217, 217, 217,.8); backdrop-filter: saturate(180%) blur(14px);
}

.sidenav a {
  padding: 0px 0px 0px 8px;
  text-decoration: none;
  font-size: 25px;
}

.sidenav a:hover {
  opacity:50%;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 0px;}
  .sidenav a {font-size: 18px;}
}
</style>
</head>
<body>

<div id="mySidenav" class="sidenav">
<img style="padding: 0px 0px 0px 18px; height:22px;" src="https://koolkat226.github.io/OlexOS/olexosgo//olexosgo.png">
<br>
<p><a href="javascript:((function()%7Bvar a,b,c,d;c='https://koolkat226.github.io/OlexOS/olexosgo/browse/index.html',b=document.createElement('iframe'),b.setAttribute('allowfullscreen',d),b.setAttribute('src',c),b.setAttribute('id','magic'),b.setAttribute('style','border-radius: 20px; border:0px; left:6%;
  margin: 0;
  position: absolute;
  top: 0%;
  padding: 4px;
  -ms-transform: translateY(30%);
  transform: translateY(30%);
  resize: both;
  height: 63%;
  width: 40%;
  position: fixed;
  z-index: 9999999;
  top: 0;
  overflow-x: hidden;
  background:rgba(217, 217, 217,.8); backdrop-filter: saturate(180%) blur(14px);

'),a=document.getElementsByTagName('body')%5B0%5D,a.appendChild(b)%7D)).call(this)">
<img src="https://koolkat226.github.io/OlexOS/olexosgo//browsericon.png" alt="play" style="border-radius:100%;" width="50" height="50">
</a></p>
<p><a href="javascript:((function()%7Bvar a,b,c,d;c='https://olex.jacsyn.repl.co/home/clipboard/index.html',b=document.createElement('iframe'),b.setAttribute('allowfullscreen',d),b.setAttribute('src',c),b.setAttribute('id','magic'),b.setAttribute('style','border-radius: 20px; border:0px; left:6%;
  margin: 0;
  position: absolute;
  top: 0%;
  padding: 4px;
  -ms-transform: translateY(30%);
  transform: translateY(30%);
  resize: both;
  height: 63%;
  width: 40%;
  position: fixed;
  z-index: 9999999;
  top: 0;
  overflow-x: hidden;
  background:rgba(217, 217, 217,.8); backdrop-filter: saturate(180%) blur(14px);

'),a=document.getElementsByTagName('body')%5B0%5D,a.appendChild(b)%7D)).call(this)">
<img src="https://koolkat226.github.io/OlexOS/olexosgo//clipboardicon.png" alt="play" style="border-radius:100%;" width="50" height="50">
</a></p>
<p><a href="javascript:((function()%7Bvar a,b,c,d;c='https://olex.jacsyn.repl.co/home/library.html',b=document.createElement('iframe'),b.setAttribute('allowfullscreen',d),b.setAttribute('src',c),b.setAttribute('id','magic'),b.setAttribute('style','border-radius: 20px; border:0px;  left:6%;
  margin: 0;
  position: absolute;
  top: 0%;
  padding: 4px;
  -ms-transform: translateY(30%);
  transform: translateY(30%);
  resize: both;
  height: 63%;
  width: 40%;
  position: fixed;
  z-index: 9999999;
  top: 0;
  overflow-x: hidden;
  background:rgba(217, 217, 217,.8); backdrop-filter: saturate(180%) blur(14px);

'),a=document.getElementsByTagName('body')%5B0%5D,a.appendChild(b)%7D)).call(this)">
<img src="https://koolkat226.github.io/OlexOS/olexosgo//libraryicon.png" alt="play" style="border-radius:100%;" width="50" height="50">
</a></p>
<p><a onclick="document.getElementById('magic').remove();" style="cursor:pointer;">
<img src="https://koolkat226.github.io/OlexOS/olexosgo//close.png" alt="close" width="50" height="23">
</a></p>
<p><a onclick="document.getElementById('mySidenav').remove();" style="cursor:pointer;">
<img src="https://koolkat226.github.io/OlexOS/olexosgo//logout.png" alt="close" width="50" height="23">
</a></p>

</div>




   <script>
   $(document).ready(function () {
    $(document).on('mouseenter', '.divbutton', function () {
        $(this).find(":button").show();
    }).on('mouseleave', '.divbutton', function () {
        $(this).find(":button").hide();
    }).on('click', ':button', function() {
        $(this).parent().remove();
    });
});
</script>
</body>
</html> 




  `;
document.body.appendChild(div);
