import React from "react";
import { TextWrapper, StyledH2, StyledP } from "./StyledInfo";

export const Info = () => {
  return (
    <TextWrapper>
      <StyledH2>Välkommen till Stigvisaren!</StyledH2>
      <StyledP>
        Upptäck och utforska en värld av vandring. Stigvisaren gör det möjligt för dig att söka efter vandringsleder, spara dina favoritrutter och dela dina oförglömliga vandringserfarenheter. Hitta
        leder nära eller långt ifrån, filtrera efter svårighetsgrad och längd, och ge dig ut på ditt nästa äventyr. Anslut till en gemenskap av andra vandrare, utbyt tips och låt dig inspireras av
        fantastiska foton delade av friluftsentusiaster. Börja din vandring idag med vår intuitiva och funktionsspäckade app!
      </StyledP>
    </TextWrapper>
  );
};
