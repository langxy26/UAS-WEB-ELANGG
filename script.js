

function sendAlert(event) {
    event.preventDefault(); // stop reload halaman

    alert("Terima kasih! Pesan kamu sudah terkirim 😊");

    // reset form setelah submit
    event.target.reset();
}
