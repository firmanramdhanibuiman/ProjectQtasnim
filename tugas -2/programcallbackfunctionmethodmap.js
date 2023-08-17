const getMonth = (callback) => {
    let error = false;
  
    let months = ["January", "February", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  
    if (!error) {
      callback(null, months);
    } else {
      callback(new Error("Sorry, Data Not Found"));
    }
  };
  
  // Define a callback function to display the months
  const displayMonths = (err, months) => {
    if (err) {
      console.error(err);
    } else {
      months.map((month, index) => {
        console.log(`${index + 1}. ${month}`);
      });
    }
  };
  
  // Call the getMonth function with the displayMonths callback
  getMonth(displayMonths);
  