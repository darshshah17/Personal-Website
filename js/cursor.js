document.body.onpointermove = event => {
    const {clientX, clientY} = event;

    const blob = document.getElementById("cursor");
    if (blob) {

        blob.style.left = `${clientX}px`;
        blob.style.top = `${clientY}px`
    } 
}