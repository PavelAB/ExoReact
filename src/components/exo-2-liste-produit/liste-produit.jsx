import PropTypes from 'prop-types'
import clsx from 'clsx'
import style from './liste-produit.module.css'
import PriceEuro from '../price-euro/price-euro'

const ProduitHeader =()=>(
    <thead>
        <tr>
            <th>Produit</th>
            <th>Prix</th>
            <th>Promo</th>
        </tr>
    </thead>
)

const ProduitTableRow =({name,price,isPromo})=>(
    <tr>
        <td>{name}</td>
        <td>
            { 
                 <span className={isPromo===true ? clsx(style['is-promo']) : clsx(style['not-promo']) }><PriceEuro price={price}></PriceEuro></span>
            }
        </td>
        <td>{isPromo===true ? "Promo": " " }</td>
    </tr>
)

const ListeProduits=({produit})=>{
    console.log(produit);
    return(
        <div>
            
            <h2>Liste de produits</h2>
            <table>
            <ProduitHeader/>
                <tbody>
                    {produit.map(ProduitRow =>(
                            <ProduitTableRow key={ProduitRow.id} {...ProduitRow}/>
                        ))
                    }
                </tbody>
            </table>

        </div>
    )

}

ListeProduits.defaultProps={
    produit:[]
}
ListeProduits.propTypes={
    produit:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired,
        name:PropTypes.string.isRequired,
        price:PropTypes.number.isRequired,
        isPromo:PropTypes.bool
    }))
}


export default ListeProduits