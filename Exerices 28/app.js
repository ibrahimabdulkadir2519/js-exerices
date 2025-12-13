function fetchuser() {
  return new Promise((resolve, reject) => {
    console.log("book waan heynaa");

    setTimeout(() => {
      const success = true;

      if (success) {
        resolve({ id: 1, name: "ibrahim", phone: 7777 });
      } else {
        reject("userka lama helin");
      }
    }, 2000);
  });
}

// fetchuser()
//   .then(data => console.log("User Data:", data))
//   .catch(error => console.error("Error:", error));

async function fetchuser() {
   try{
     console.log('this');
     const data = await fetchuser();
     console.log("user data", data);
     
     

   }catch{
        console.error('error', error)
   }                                               
}

fetchuser()
console.log('this message runs immediately and is not blocked');
