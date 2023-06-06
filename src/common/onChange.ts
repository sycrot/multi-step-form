export function onChange (e: any, formData: any, setFormData: (data: any) => void) {
  const target = e.target
  const value = target.value
  const name = target.name

  let data: any = { ...formData, [name]: value }
  setFormData(data)
}