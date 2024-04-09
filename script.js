let index = 0;

function changeColor() {
    let colors = ['green','blue','yellow','orange','purple'];
    
   let body = document.getElementsByTagName("body")[0];
    body.style.backgroundColor = colors[index++];

    if (index > colors.length - 1) {
        index = 0;
    }
};