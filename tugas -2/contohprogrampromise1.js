const janji = "berubah menjadi lebih baik";

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (janji === "berubah menjadi lebih baik") {
      resolve("Kehidupan Menjadi Lebih Baik");
    } else {
      reject("Tidak ada perubahan sama sekali");
    }
  }, 2000);
});

p.then((result) => {
  console.log(result);
}).catch((error) => {
  console.error(error);
});
