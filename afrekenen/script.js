function logCartItems() {
    const data = JSON.parse(localStorage.getItem("items")); 
  
    console.log("items in cart:");
  
    if (data !== null) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].text.includes("prijs:")) {
          console.log("Prijs: " + data[i].text.substring(6));
        } else {
          console.log("Item: " + data[i].text);
        }
      }
    } else {
      console.log("niks in cart.");
    }
  }
  const prijs = localStorage.getItem("prijs");
  console.log("Prijs: " + prijs);
    