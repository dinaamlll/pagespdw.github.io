// Fungsi untuk menampilkan tanggal dan waktu saat ini
function displayDateTime() {
  // Mendapatkan elemen dengan id "date-time"
  var dateTimeElement = document.getElementById("date-time");

  // Membuat objek Date untuk mendapatkan tanggal dan waktu saat ini
  var currentDate = new Date();

  // Mendapatkan informasi tanggal dan waktu
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  var dateTimeString = currentDate.toLocaleDateString('en-US', options);

  // Menampilkan tanggal dan waktu saat ini di dalam elemen dengan id "date-time"
  dateTimeElement.textContent = dateTimeString;
}

// Memanggil fungsi displayDateTime setiap detik untuk menampilkan waktu secara real-time
setInterval(displayDateTime, 1000);

  
  // Fungsi untuk menyapa pengguna sesuai waktu
  function setGreeting() {
    const hour = new Date().getHours();
    let greeting = "";
    if (hour < 12) {
      greeting = "Selamat Pagi, Dina!";
    } else if (hour < 18) {
      greeting = "Selamat Siang, Dina!";
    } else {
      greeting = "Selamat Malam, Dina!";
    }
    document.getElementById("greeting").textContent = greeting;
  }
  
  // Panggil fungsi displayDateTime setiap detik
  setInterval(displayDateTime, 1000);
  
  // Panggil fungsi setGreeting pada saat halaman dimuat
  setGreeting();
  