async function payMensal() {
  const res = await fetch("/.netlify/functions/create-payment-intent?plan=mensal");
  const data = await res.json();
  alert("Pagamento iniciado! Client secret: " + data.clientSecret);
}

async function payAnual() {
  const res = await fetch("/.netlify/functions/create-payment-intent?plan=anual");
  const data = await res.json();
  alert("Pagamento iniciado! Client secret: " + data.clientSecret);
}
