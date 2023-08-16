function hitungRataRataNilai(nilaiku) {
  var total = 0;
  for (var i = 0; i < nilaiku.length; i++) {
      total += nilaiku[i];
  }
  var rataRata = total / nilaiku.length;
  return rataRata;
}

function konversiKeGrade(nilai) {
  if (nilai >= 90 && nilai <= 100) {
      return 'A';
  } else if (nilai >= 80 && nilai < 90) {
      return 'B';
  } else if (nilai >= 70 && nilai < 80) {
      return 'C';
  } else if (nilai >= 60 && nilai < 70) {
      return 'D';
  } else if (nilai >= 0 && nilai < 60) { 
      return 'E';
  }
}

var nilaiUN = [90, 93, 95, 90, 85];
var rataRata = hitungRataRataNilai(nilaiUN);
var gradeRataRata = konversiKeGrade(rataRata);

console.log("Nilai UN: " + nilaiUN);
console.log("Rata-rata Nilai UN: " + rataRata);
console.log("Grade Rata-rata: " + gradeRataRata);
