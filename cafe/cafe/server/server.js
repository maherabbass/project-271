// sk_test_51MskqzFnHtpyV359PWWllf1Nzkt0s6sffqVVSEv3S7ER9wbZUiR3eexoOco9ZpOpaUdSHXEWbFFcmD55KIABGeCH00JidCaWEw
// Coffee: price_1Mw8XAFnHtpyV359sLrPtNSy
// Water: price_1Mw8YzFnHtpyV359sguXszEC
// Chips: price_1Mw8ZwFnHtpyV359qMcqorOl

const express = require("express");
var cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51MskqzFnHtpyV359PWWllf1Nzkt0s6sffqVVSEv3S7ER9wbZUiR3eexoOco9ZpOpaUdSHXEWbFFcmD55KIABGeCH00JidCaWEw"
);

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  /*
    req.body.items
    [
        {
            id: 1,
            quantity: 3
        }
    ]
    stripe wants
    [
        {
            price: 1,
            quantity: 3
        }
    ]
    */
  console.log(req.body);
  const items = req.body.items;
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:5173/success",
    cancel_url: "http://localhost:5173/cancel",
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

app.listen(4000, () => console.log("Listening on port 4000!"));
