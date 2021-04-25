export function timeSinceDate(date) {
    const months = ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек']
    if (!date) return ''
    const day = date.substr(8,2)
    const month = months[parseInt(date.substr(5, 2)) - 1]
    const year = date.substr(0,4)
    const hour = date.substr(11,2)
    const minute = date.substr(14,2)
    const second = date.substr(17,2)

    return `${day}.${month}.${year} в ${hour}:${minute}:${second}`
}

export function daySinceSent(date) {
    if (!date) return ''
    const day = date.substr(8,2)
    const month = date.substr(5,2)
    const year = date.substr(0,4)
    const sent = new Date(`${month} ${day} ${year}`).toString()
    console.log(sent)
  console.log(sent.substr(4, 6))
    return sent.substr(4, 6)
}
