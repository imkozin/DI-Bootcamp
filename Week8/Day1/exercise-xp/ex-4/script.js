myForm = document.querySelector('form');

myForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const myRadius = parseFloat(document.getElementById('radius').value);
    if (!isNaN(myRadius)) {
        const volume = (4 / 3) * Math.PI * Math.pow(myRadius, 3);
        const myVolume = document.getElementById('volume');
        myVolume.value = volume.toFixed(2);
}
});

