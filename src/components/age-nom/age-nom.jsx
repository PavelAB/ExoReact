import PropTypes from 'prop-types'
import clsx from 'clsx'
import style from './AgeNom.module.css'


const AgeNom=(props)=>{
    console.log(props);
    return(
        <>
            <p className={clsx(style['nom-css'],style['back-css'])}> Bienvenue {props.nom} sur l'application React</p>
            <p className={clsx(style['age-css'],style['back-css'])}>Vous avez {props.age} ans!</p>
        </>
    );
};

AgeNom.defaultProps={age:18};
AgeNom.propTypes={
    nom:PropTypes.string
}

export default AgeNom;