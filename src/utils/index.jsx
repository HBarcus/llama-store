export const formatCentsToUSD = (cents) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((cents/100).toFixed(2));
}

export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;

    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};
