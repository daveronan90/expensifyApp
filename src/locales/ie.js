import numeral from "numeral";

export default () => {
  numeral.register("locale", "ie", {
    delimiters: {
      thousands: " ",
      decimal: ",",
    },
    currency: {
      symbol: "€",
    },
  });

  numeral.locale("ie");
};
