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
  const private_key = `-----BEGIN RSA PRIVATE KEY-----
MIIEoQIBAAKCAQBmW1XglIDnlw02W+8stJFlHGk7w9rn10y68uwIFYcy9xuwrO+x
dK3m00yRAkIThaZHeW8oHIoeeByoTT+V3bMR2gXOzPyvsEnrCIYqCMKti/ld4JLB
W0wy4Ova3a7CSwMY8CXbTQdc9WXuPI+gLaZ5kjib7T3508Jj0pTNcUMizXY/riuv
rRurKAnfkaHsBbL2MlD89Raut7ofIUHoMzSUrbazouwQLnEYC5MHnG0C9frwU0Il
Sx51DEqngmB5W0ocKdfdFNoEKWYVBIHSv54EmqCHZtyRwB/igtQdwsKA917ZyHbE
tYgGRNOWUcEVqoHXMLzOsmZOvm5steS+4gJtAgMBAAECggEAAYsG9GfIubURQeyI
4oemWXvgKkJ9nlkkkvzuigCpFR+cj0FMK8SyinRNBzKdhGXTZ+hwwI4NlwAAjpj7
iGrbND2xMLjuZkemFaD/RMr1BGDD1aJ5E+kocOvrIlWNOOigl1OnfnLe1YvtiXXo
RGXryJFnwRIGiSmkGJUoISC//lpNt2+k03VR6BUNKfctrhIokercLzRMFXRYHim4
3lrBoegVCfyJgwNimrq3G5FyyHEgJGFZb5eTToZI4Q4Y0oCskdzvPAHi9fuGQuuU
tCKmT36umfzgWruFgQK9Y8Nh/zAnvGEDw4nUEjjXqrraCuS1hYnOD/kL7IjGWREL
r6rEAQKBgQCo/vtB2PEDZ1xjour8C7etE2oqQt043Y8RRNLoNHu+xTQMFCv/2eXZ
67A4cILkRqYJow/tQVEplDeFiHGpOAjNVrMr/9lltvCxPusQUx/NeVWF+VUzcmuz
7Q9Chtffe2bb+C6Q3p3yZyaQhEHPwdbjzdU8zXknmOmD46u2wEGyLQKBgQCbDY+b
TV52N6DVIZ1pcGlSkAO4VGXIomiC5DGUwlLt3YqFz8TJFvVBozSHmhCiKCAdenrU
IN04vS4O4ST1STnabgNXqzFbdgj3kkDs6HjVK6kYTvtJ3xpR6PN3B7Bj6QXoUE4z
fP/Y+haEehb/YqkED8AjTR1Js5PpBZHCBT75QQKBgE9YODu4UaBZfSVCrrVcAwb9
4JCrCBbU34EqISPo0FjHWiJ5rhbYBXUFlZ1KJgprqTVJHAc27ZZqAo9teoAK0Qcn
t8PmwflhpSxy8AagIIRmfWMDp58aD7tQiCOiD+TbmXWZ1rMp8lqHV7Huhr+2sOAQ
GhgMGOAgiTLlSA/rwGyZAoGAaG4dxs+5S43z+RiG2Lkpdr4gg0n0s8kO8vmWm0a2
bBbGcZGaTIX18Ztmid4uTckQuEoB6FWqKcjg+IyTQ9Fp8cAe6DEZMSyypWwP5oA8
wfaCESlA/mQRahGnyQeYufH8VJeh0/Pgrdbiy58fViqxA1dIZX5Ot5EHke56WV8H
JwECgYBa+TcNeZ9JTvSOTdFCYt3GZZHcozgQ8NBthw7dm3+5HHFmu5fOiadJfvkb
f0ZqWic2AzplEF8RkE8/WPM4n6/cbKB74tkVbgOzD9f1wCCxWAR03CPQHQtRlXeP
04edAVBlNcvLLLnb9iIz7VFM6rd9laiTp1P0KwUvMLtdVa0fLQ==
-----END RSA PRIVATE KEY-----`;

  const sign = crypto.createSign("RSA-SHA256");
  sign.update(JSON.stringify(data));
  // const signature = sign.sign(config.gap_operator_rsa_private_key, "base64");
  const signature = sign.sign(private_key, "base64");
  return signature;
};
