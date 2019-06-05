export const showPrice = (price) => {
    const roundPrice = Math.round(Number(price) * 100) / 100;
    return `£${roundPrice}`
}
