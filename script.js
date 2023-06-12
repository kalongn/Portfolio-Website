const mouseCircle = document.getElementById("mouse-circle");
const mainFrame = document.getElementById("main-frame-wrapper");
const padding = document.querySelector(".exterior-padding");
const paddingStyles = padding.currentStyle || window.getComputedStyle(padding);
let offSet = parseInt(paddingStyles.padding);

mainFrame.onpointermove = event => {
    const { clientX, clientY } = event;
    mouseCircle.animate({
        left: `${clientX - offSet}px`,
        top: `${clientY - offSet}px`
    }, { duration: 1000, fill: "forwards" });
}