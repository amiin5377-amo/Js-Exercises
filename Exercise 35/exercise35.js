function changeImage() {
    const image  = document.querySelector('img');
    const url = prompt("Enter the URL of the new image:");
    const borderColor = prompt("Enter the border color for the image:");
    const height = prompt("Enter the height for the image (in pixels):");
    const width = prompt("Enter the width for the image (in pixels):");
    image.style.border = `5px solid ${borderColor}`;
    image.style.height = `${height}px`;
    image.style.width = `${width}px`;
image.setAttribute('src', url);

}