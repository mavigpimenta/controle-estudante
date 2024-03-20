let photo = document.getElementById('imgPhoto');
let file = document.getElementById('flImage');

photo.addEventListener('click', () => {
    file.click();
});

file.addEventListener('change', () => {
    if (file.files.lenght == 0) {
        return;
    }

    let reader = new FileReader();
    reader.readAsDataURL(file.files[0]);
    
    reader.onload = () => {
        photo.src = reader.result;
    }
})