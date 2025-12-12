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

fetchuser()
  .then(data => console.log("User Data:", data))
  .catch(error => console.error("Error:", error));
