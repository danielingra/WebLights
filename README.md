# WebLights
this tool is used to hightlight easily things on a webpage.
In order to use this tool, follow these steps:

# Include script in HTML page
link -> https://cdn.jsdelivr.net/gh/danielingra/WebLights/webLights.js

# add HTML content
<div id="arrows">
    <span onclick="setHighlight('previous')">&#8593;</span>
    <span onclick="setHighlight('next')">&#8595;</span>
</div>

# add CSS 
#newLayer {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.63);
    z-index: 999;
}
#arrows {    
    position: relative;
    background-color: #61bf3f;    
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 20px;
    bottom: 20px;
    padding: 5px;  
    border-radius: 100px;  
    z-index: 1000;
}
#arrows span {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    background-color: rgb(29, 29, 29);
    width: 40px;
    height: 40px;
    border-radius: 100px;    cursor: pointer;
}
.newSelected {
    position: relative;
    background-color: #61bf3f;
    padding: 10px;
    z-index: 1000;
}