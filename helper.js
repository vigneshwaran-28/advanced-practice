import { GapCasinoException } from "./exception.js";

export default (status) => {
  console.log("came inside");
  throw new GapCasinoException({ status, balance: 100 });
};
