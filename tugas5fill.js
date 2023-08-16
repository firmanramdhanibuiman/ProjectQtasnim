const numbers = [1, 2, 3, 4, 5];

// Mengisi semua elemen dengan nilai 0 mulai dari indeks 2 hingga akhir
numbers.fill(0, 2);

console.log(numbers); // Output: [1, 2, 0, 0, 0]

// Mengisi semua elemen dengan nilai 10 mulai dari indeks 1 hingga indeks 3
numbers.fill(10, 1, 4);

console.log(numbers); 
// omment Metode fill digunakan untuk mengisi semua elemen dalam array dengan nilai yang sama, mulai dari indeks yang ditentukan hingga indeks terakhir (atau dari indeks yang ditentukan hingga indeks tertentu).//