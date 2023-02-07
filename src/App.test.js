import { render, screen } from '@testing-library/react';
import App from './App';
import Compteurs from "./components/Compteurs"

describe(App,()=>{
  it("Counter displays 0 as initial value", ()=>{
      const {getByTestId} = render(<App/>)
      const countValue = getByTestId("app");
      expect(countValue.childNodes.length).toBe(1);
  })

})