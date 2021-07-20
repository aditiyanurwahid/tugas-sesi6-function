// Soal nomor 1

function beli(namaPembeli, produkBeli) {
  return "Terima kasih" + namaPembeli + "telah membeli produk" + produkBeli;
}
console.log(beli(" Adit ", " Sabun"));

// Soal nomor 2

// Celcius to Fahrenheit
function toFahrenheit(c) {
  return (c * 9) / 5 + 32;
}
console.log(toFahrenheit(32) + " °F");

// Fahrenheit to Celcius
function toCelsius(f) {
  return (5 / 9) * (f - 32);
}
console.log(toCelsius(0) + " °C");

// Soal nomor 3

function hitungUsia(usiaKucing) {
  if (usiaKucing == 1) {
    console.log(15);
  } else if (usiaKucing == 2) {
    console.log(24);
  } else {
    console.log((usiaKucing - 2) * 4 + 24);
  }
}
hitungUsia(4);

// Soal nomor 4

let ubahHuruf = (kalimat) => {
  return kalimat.toLowerCase();
};
console.log(ubahHuruf("ADITIYA NURWAHID"));
