import Compteurs from "./Compteurs"
import {render} from "@testing-library/react"


describe(Compteurs,()=>{
    it("Counter displays 0 as initial value", ()=>{
        const {getByTestId} = render(<Compteurs/>)
        const countValue = Number(getByTestId("valeur").textContent);
        expect(countValue).toEqual(0);
    })

})