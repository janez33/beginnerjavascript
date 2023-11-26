const endpoint =
  'https://v6.exchangerate-api.com/v6/d45a4e0bb16c012cc3a3ee6d/latest';

const ratesByBase = {};

export async function fetchRates(base = 'USD') {
  const res = await fetch(`${endpoint}/${base}`);
  const rates = (await res).json();
  return rates;
}

export async function convert(amount, from, to) {
  // first check if we even have the rates to convert from that currency
  if (!ratesByBase[from]) {
    console.log(
      `Oh no, we don't have ${from} to convert to ${to}. So let's go get it!`
    );
    const rates = await fetchRates(from);
    // store them for next time
    ratesByBase[from] = rates;
  }

  // convert the amount that they passed in
  const rate = ratesByBase[from].conversion_rates[to];
  const convertedAmount = rate * amount;
  return convertedAmount;
}
