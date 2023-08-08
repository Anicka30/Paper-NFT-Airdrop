const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.listen(2400, () => {
  console.log("Server running on port 2400");
});

//Airdrop Contract
app.post("/api/airdrop", async (req, res) => {
  const { walletAddress, email } = req.body;
  try {
    const response = await axios({
      method: "post",
      url: "<https://withpaper.com/api/2022-08-12/airdrop>",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: `Bearer ${process.env.API_SECRET}`,
      },
      data: { contractId: `${process.env.CONTRACT_ID}`, walletAddress, email },
    });
    res.status(200).json(response.data);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});
