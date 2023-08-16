const names = [
    "Abigail", "Alexandra", "Alison",
    "Amanda", "Angela", "Bella",
    "Carol", "Caroline", "Carolyn",
    "Deirdre", "Diana", "Elizabeth",
    "Ella", "Faith", "Olivia", "Penelope"
  ];
  
  // Fungsi untuk melakukan pencarian nama dengan batasan jumlah output
  function searchNames(keyword, limit, callback) {
    const filteredNames = names.filter(name => name.toLowerCase().includes(keyword.toLowerCase()));
    const limitedResults = filteredNames.slice(0, limit);
    callback(limitedResults);
  }
  
  // Fungsi callback untuk menampilkan hasil
  function displayResults(results) {
    if (results.length === 0) {
      console.log("Tidak ditemukan hasil yang sesuai.");
    } else {
      console.log("Hasil pencarian:");
      results.forEach((result, index) => {
        console.log(`${index + 1}. ${result}`);
      });
    }
  }
  
  const searchTerm = "an"; // Kata kunci pencarian
  const resultLimit = 3;   // Batasan jumlah output
  
  searchNames(searchTerm, resultLimit, displayResults);
  