export const formattedDate = (value) => {
    const formattedMonth = value.getMonth() + 1
    const month = formattedMonth < 10 ? `0${formattedMonth}` : formattedMonth;
    const year = value.getFullYear() % 100;

    return `${month}/${year}`
}