
const formatNumber = (value, precision = 2) => {
  return value.toLocaleString('pt-br', {
    minimumFractionDigits: precision,
    maximumFractionDigits: precision,
 })
}
const formatCurrency = (value, precision = 2) => {
  return Number(value).toLocaleString('pt-br', {
    style: 'currency',
    currency: 'brl',
    minimumFractionDigits: precision,
    maximumFractionDigits: precision,
 });
}

const format = {
  formatNumber,
  formatCurrency,
} 

export default format;

export {
  formatNumber,
  formatCurrency,
}