async function casinoWorker() {
  const bodyData = {
    operator_id: config.gap_operator_id,
    page: 0,
    page_size: 500,
  };

  while (true) {
    bodyData.page = bodyData.page + 1;
    const signature = getSignature(bodyData);

    const configs = {
      method: "post",
      url: config.gap_provider_host + "/api/operator/get-games-list",
      headers: {
        signature: signature,
        "Content-Type": "application/json",
      },
      data: JSON.stringify(bodyData),
    };
    const response = await axios.request(configs);

    const gameList = response.data.data;
    for (const data of gameList) {
      await cronDao.addGapCasinoMatch({ ...data, aggregator_id: 1 });
    }
    if (gameList.length < bodyData.page_size) break;
  }
}

const getSignature = (data) => {
  const private_key = ``;

  const sign = crypto.createSign("RSA-SHA256");
  sign.update(JSON.stringify(data));
  // const signature = sign.sign(config.gap_operator_rsa_private_key, "base64");
  const signature = sign.sign(private_key, "base64");
  return signature;
};
