const colourchangebtn=document.getElementById("colourchangebtn")
const colorvalue=document.getElementById("colorvalue")
function getRandomColor(){
    const randomColor=Math.floor(Math.random()*16777215).toString(16);
    return `#${randomColor.padStart(6,'0')}`;
}
colourchangebtn.addEventListener('click', () => {
    const newColor = getRandomColor();
    document.body.style.backgroundColor = newColor;
    colorvalue.textContent = `Current Color: ${newColor}`;
});
