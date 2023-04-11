import AgeNom from './components/age-nom/age-nom';
import './App.css'
import ListeProduits from './components/exo-2-liste-produit/liste-produit';
import produitData from './data/produit.json'
import Compteur from './components/compteur/compteur';
import CompteurV2 from './components/compteur-v2/compteur-v2';
import Calculator from './components/calculator/calculator';
import ToDoPage from './containers/to-do-page';
import CurrentDate from './components/compteur-v2/current-date';
import { useState } from 'react';

function App() {
  const [isActive,setActive] = useState(true)
  return (
    <div>
      {/* <AgeNom nom={'Pavel'}/>
      <ListeProduits produit={produitData}/>
      <h1>Compteur</h1>
      <Compteur></Compteur>
      <Compteur increment={6}></Compteur>
      <h2>Calculatrice</h2>
      <Calculator></Calculator>   */}
      {/* <h2>ToDoListe</h2>
      <ToDoPage/> */}
      <h2>Compteur</h2>
      {
        isActive && <CompteurV2></CompteurV2>
      }
      {
        !isActive && <CurrentDate></CurrentDate>
      }      


      <div>
        { isActive ? <button onClick={()=>setActive(!isActive)}>Afficher la date</button> : <button onClick={()=>setActive(!isActive)}>Afficher l'heure</button>}
      </div>
    </div>
  );
};

export default App;
