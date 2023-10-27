export async function handleButtonCLick(event) {
  const { localCurrency, default: currency } = await import('./currencies.js');
  console.log(localCurrency, currency);
}
