let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
  };
  
  // Mengubah data menggunakan spread operator
  let newData = {
    id: 1,
    name: "Firman Ramdhani Budiman",
    username: "Firman",
    email: "ramdanifirman124@gmail.com",
    address: {
      street: "Raya Samarang",
      suite: "No. 52",
      city: "Kp. Malayu",
      zipcode: "44161",
    },
    phone: "089655655765",
    website: "firmanramdhanibudiman17blogspot.com",
  };
  
  
  console.log(newData);
  
  // Mengambil data street dan city menggunakan destructuring
  let Data = {...data, ...newData};
let { street, city } = newData.address;
let message = 'Saya tinggal di ' + city + ' jalan ' + street + '.';
console.log(newData);
console.log(message);