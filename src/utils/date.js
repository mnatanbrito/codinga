export const formatDate = date => {
  const parsedDate = new Date(date)
  return `${parsedDate.getDate()} de ${
    i18n.months[parsedDate.getMonth()]
  } de ${parsedDate.getFullYear()}`
}

const i18n = {
  months: [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ],
}
