export const handlePriceService = (value: number, formData: any) => {
  if (formData.monthlyOrYearly === 'monthly') {
    return `$${value}/mo`
  } else {
    return `$${value * 10}/yr`
  }
}