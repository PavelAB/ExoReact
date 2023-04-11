const PriceEuro=({price})=>{
    console.log(price);
    const prix = price.toLocaleString('be',{ style: 'currency', currency: 'EUR' })

    return (
        <span>{prix}</span>
    )
}
export default PriceEuro