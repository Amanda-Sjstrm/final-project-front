import React, { useState } from "react";
import { HikeSection, TextH2, HikeSelect, CardsContainer, Card, CardImg, CardH3, CardH4 } from "./StyledHikes";

export const Hikes = () => {
  const [selectedCity, setSelectedCity] = useState("malmo");

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const getCardsForSelectedCity = () => {
    switch (selectedCity) {
      case "malmo":
        return (
          <CardsContainer>
            <Card>
              <CardImg src="https://malmo.se/images/18.38c6709716cae2cad393b50b/1581691874965/bokskogen%20i%20torup%20inneh%C3%A5llsbild.png" alt="Old castle" />
              <CardH3>Vandring</CardH3>
              <CardH4>TORUPS REKREATIONSOMRÅDE</CardH4>
              <a href="#" id="btn">
                Hitta hit
              </a>
            </Card>
            <Card>
              <CardImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtmSk2eRqloHziNaQzGjchIMfhOaI3_2psTA&usqp=CAU" alt="Witchy looking trees" />
              <CardH3>Vandring</CardH3>
              <CardH4>PRÄSTASKOGENS NATURRESERVAT</CardH4>
              <a href="#" id="btn">
                Hitta hit
              </a>
            </Card>
            <Card>
              <CardImg src="https://www.sverigesnationalparker.se/globalassets/soderasen/textsida-topp-945x500/soderasens-nationalpark-hitta-hit.jpg" alt="Person walking up a hill in the woods" />
              <CardH3>Vandring</CardH3>
              <CardH4>SÖDERÅSEN NATIONALPARK</CardH4>
              <a href="#" id="btn">
                Hitta hit
              </a>
            </Card>
          </CardsContainer>
        );
      case "stockholm":
        return (
          <CardsContainer>
            <Card>
              <CardImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtmSk2eRqloHziNaQzGjchIMfhOaI3_2psTA&usqp=CAU" alt="Witchy looking trees" />
              <CardH3>Vandring</CardH3>
              <CardH4>PRÄSTRASKOGENS NATURRESERVAT</CardH4>
              <a href="#" id="btn">
                Hitta hit
              </a>
            </Card>
            <Card>
              <CardImg src="https://www.sverigesnationalparker.se/globalassets/soderasen/textsida-topp-945x500/soderasens-nationalpark-hitta-hit.jpg" alt="Person walking up a hill in the woods" />
              <CardH3>Vandring</CardH3>
              <CardH4>SÖDERÅSEN NATIONALPARK</CardH4>
              <a href="#" id="btn">
                Hitta hit
              </a>
            </Card>
            <Card>
              <CardImg src="https://malmo.se/images/18.38c6709716cae2cad393b50b/1581691874965/bokskogen%20i%20torup%20inneh%C3%A5llsbild.png" alt="Old castle" />
              <CardH3>Vandring</CardH3>
              <CardH4>BOKSKOGEN</CardH4>
              <a href="#" id="btn">
                Hitta hit
              </a>
            </Card>
          </CardsContainer>
        );
      case "goteborg":
        return (
          <CardsContainer>
            <Card>
              <CardImg src="https://malmo.se/images/18.38c6709716cae2cad393b50b/1581691874965/bokskogen%20i%20torup%20inneh%C3%A5llsbild.png" alt="Old castle" />
              <CardH3>Vandring</CardH3>
              <CardH4>BOKSKOGEN</CardH4>
              <a href="#" id="btn">
                Hitta hit
              </a>
            </Card>
            <Card>
              <CardImg src="https://www.sverigesnationalparker.se/globalassets/soderasen/textsida-topp-945x500/soderasens-nationalpark-hitta-hit.jpg" alt="Person walking up a hill in the woods" />
              <CardH3>Vandring</CardH3>
              <CardH4>SÖDERÅSEN NATIONALPARK</CardH4>
              <a href="#" id="btn">
                Hitta hit
              </a>
            </Card>
            <Card>
              <CardImg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtmSk2eRqloHziNaQzGjchIMfhOaI3_2psTA&usqp=CAU" alt="Witchy looking trees" />
              <CardH3>Vandring</CardH3>
              <CardH4>PRÄSTRASKOGENS NATURRESERVAT</CardH4>
              <a href="#" id="btn">
                Hitta hit
              </a>
            </Card>
          </CardsContainer>
        );
      default:
        return null;
    }
  };

  return (
    <HikeSection className="book">
      <TextH2>HITTA EN NY PROMENAD IDAG</TextH2>
      <p>I närheten av</p>
      <HikeSelect name="book-city" value={selectedCity} onChange={handleCityChange}>
        <option value="malmo">MALMÖ</option>
        <option value="stockholm">STOCKHOLM</option>
        <option value="goteborg">GÖTEBORG</option>
      </HikeSelect>
      {getCardsForSelectedCity()}
    </HikeSection>
  );
};
