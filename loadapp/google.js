
var div = document.createElement("div");
document.body.appendChild(div);
  div.innerHTML = `
	<style type="text/css">
		
		.externalsoftware {
			display: block;
  height: 100%;
			border: none;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 100%;
  margin-bottom: 0px;
  transition: 0.3s;
z-index: 9992;
background:rgba(217, 217, 217,.8); backdrop-filter: saturate(180%) blur(14px);
		}
  .softwareoptions {
    overflow: hidden;
  position: fixed;
  top: 0;
  height: 10%;
  margin-top: -8px;
  transition: 0.3s;
z-index: 9997;
}
        .magictext {
          font-family: 'Montserrat', sans-serif;
margin: auto;
            color: #747474;
            text-decoration: none;
          text-align:center;
        }
  
	</style>
 
</head>

<div id="externalsoftware">
	<iframe src="https://olex.jacsyn.repl.co/system/browser/indexgoo.html"
			frameborder="0"
			width="100%"
			height="100%"
      allowfullscreen
			name="orangeframe"
      id="externalsoftware"
      class="externalsoftware">
</iframe>









  `;
document.body.appendChild(div);

var style = document.createElement("style");
document.body.appendChild(style);
  style.innerHTML = `
.external {
display:block;
}

.hideexternal {
display:none;
}
`;
  document.body.appendChild(style);

var closebutton = document.getElementById("externalapp");
closebutton.style.display = "block";

var applibrary = document.getElementById("mainapps");
applibrary.style.display = "none";

var text = document.getElementById("hideappstext");
text.style.display = "block";
