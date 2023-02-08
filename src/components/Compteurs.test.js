import Compteurs from "./Compteurs"  // On importe le composant Compteur, sur lequel les tests auront lieu.
import {fireEvent, render} from "@testing-library/react" // On importe la fonction render. Elle est responsable dafficher une copie du composant en test


// **** Tests du composant Compteur
describe(Compteurs,()=>{

    // Premier test du composant (Le compteur doit demarrer son comptage a ZERO)
    it("Counter displays 0 as initial value", ()=>{
        const {getByTestId} = render(<Compteurs/>) // On appelle la fonction getByTestId de la bibliotheque render du composant.
        const countValue = Number(getByTestId("valeur").textContent); // Sur le composant , on a mis la propriete data-testid="valeur" sur un element du DOM. Cette ligne appelle cet element du DOM et convertit son textContent en Number.
        expect(countValue).toEqual(0); // On espere que CounValue soit egal a ZERO
    });

    // Deuxieme test du composant (Counter is increment by One after a click)
    it("Counter is always return a number",()=>{
        const {getByTestId} = render(<Compteurs/>)
        const countValue = Number(getByTestId("valeur").textContent)
        expect(typeof(countValue)).toBe("number")
    
    });

       // Troisieme test du composant (The reset should bring back the counter to ZERO)
       it("Counter return zero after click on reset",()=>{
        const {getByTestId,getByRole} = render(<Compteurs/>) // getByRole pour acceder a une reference du DOM par son tagName
        const resetButton = getByRole("button",{name:"Reset"}) // la variable resetButton est le noeud du DOM dont le nom est Reset
        
        fireEvent.click(resetButton) // On simule l'evenement du click sur le bouton 
        
        const countValue = Number(getByTestId("valeur").textContent) 
        expect(countValue).toBe(0)
    
    });






})