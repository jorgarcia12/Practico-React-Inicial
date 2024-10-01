// import { ComponentCounter } from "./components/ComponenteCounter/ComponentCounter";
// import { ComponentUseEffect } from "./components/ComponentUseEffect/ComponentUseEffect";
// import { MiPrimerComponent } from "./components/MiPrimerComponent/MiPrimerComponent";
import { AppProduct } from "./components/appProduct/appProduct";
// import { FormComponent } from "./components/FormComponent/FormComponent";

export const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "2vh" }}>
      {/* <MiPrimerComponent
        text={"Texto desde Propiedades"}
        color="red"
        fontSize={3}
      />
      <ComponentCounter />
      <ComponentUseEffect /> */}
      {/* <FormComponent /> */}
      <AppProduct />
    </div>
  );
};
