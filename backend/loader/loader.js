const data = require("../products.json");
const { supabase } = require("../core/supabase");

async function loadData() {
  data.forEach((entry) => {
    entry.price = parseFloat(entry.price.substring(1));
  });
  let error = await supabase.from("products").insert(data);
  console.log(error);
}

loadData();
