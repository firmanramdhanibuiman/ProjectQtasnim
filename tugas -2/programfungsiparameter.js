function searchAndDisplayData(nilaiAwal, nilaiAkhir, dataArray) {
    if (nilaiAwal >= nilaiAkhir) {
      console.log("Nilai Akhir harus lebih besar dari Nilai Awal.");
      return;
    }
  
    if (dataArray.length <= 5) {
      console.log("Jumlah data dalam dataArray harus lebih dari 5.");
      return;
    }
  
    const filteredData = dataArray.filter(data => data > nilaiAwal && data < nilaiAkhir);
    const sortedData = filteredData.sort((a, b) => a - b);
  
    console.log("Nilai tidak ditemukan");
    sortedData.forEach((data, index) => {
      console.log(`${index + 1}. ${data}`);
    });
  }
  
  const data = [2, 25, 4, 1, 30, 18];
  const awal = 5;
  const akhir = 17;
  
  searchAndDisplayData(awal, akhir, data);
  