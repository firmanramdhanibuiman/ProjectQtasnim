const printSegitiga = 6; // Ganti nilai ini sesuai dengan tinggi segitiga yang diinginkan

if (typeof printSegitiga !== 'number' || printSegitiga <= 0) {
  console.log("Input harus berupa angka positif");
} else {
  for (let i = printSegitiga; i >= 1; i--) {
    let row = '';
    for (let j = 1; j <= i; j++) {
      row += j + ' ';
    }
    console.log(row);
  }
}
