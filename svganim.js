var svg = document.getElementById("vimage");
var started = 0;
var curX = 0;
var curY = 0;

function getMousePos(svg, e){
    var rect = svg.getBoundingClientRect();
    return{
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
    };
};

function makeDot(x, y, r){
    if (started == 1){
        var line = document.createElementNS("http://www.w3.org/2000/svg","line");
        line.setAttribute("x1",curX);
        line.setAttribute("y1",curY);
        line.setAttribute("x2",x);
        line.setAttribute("y2",y);
        line.setAttribute("style","stroke:#daa520; stroke-width:2");
        svg.appendChild(line);
    } else {
        started = 1;
    }
    var dot = document.createElementNS("http://www.w3.org/2000/svg","circle");
    dot.setAttribute("cx",x);
    dot.setAttribute("cy",y);
    dot.setAttribute("r", r);
    dot.setAttribute("fill","#663399");
    svg.appendChild(dot);
    curX = x;
    curY = y;
};

svg.addEventListener('click', function(e){
    var mousePos = getMousePos(svg, e);
    makeDot(mousePos.x, mousePos.y, 10);
},false);

var b = document.getElementById("clean");
b.addEventListener('click', function(e){
    while (svg.firstChild) {
        svg.removeChild(svg.firstChild);
    }
    started = 0;
});
