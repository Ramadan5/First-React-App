import React from 'react';
// import logo from './logo.svg';
import './App.css';

import data from "./countries.json";
import { isAndroid, isIOS } from "react-device-detect";

function Usage() {
  const selectedCountry = document.getElementById ("selectedCountry");
  const countryPrefix = document.getElementById ("countryPrefix");
  const input = document.getElementById ("number");
  const chatBtn = document.getElementById ("chat");

  const countries = [];
  const countryDialCodes = [];


  if (isAndroid) {
    document.getElementById ("whatsApp_homePage").setAttribute ("href", "https://wa.me/+201");
  }
  else if (isIOS) {
    document.getElementById ("whatsApp_homePage").setAttribute ("href", "whatsapp://");
  }
  else {
    document.getElementById ("whatsApp_homePage").setAttribute ("href", "https://web.whatsapp.com/");
  }

  for (let i = 0; i < data.length; i++) {
    countries[i] = data[i].name;
    let country = document.createElement ("option");
    country.innerText = countries[i];
    if (country.innerText === "Egypt") {
        country.setAttribute ("selected", "");
    }
    selectedCountry.append (country);
  }

  selectedCountry.addEventListener ("change", () => {
    for (let i = 0; i < data.length; i++) {
        countries[i] = data[i].name;
        countryDialCodes[i] = data[i].dial_code;

        if (selectedCountry.options[selectedCountry.selectedIndex].text === countries[i]) {
            countryPrefix.value = countryDialCodes[i];
        }
    }
    chatBtn.setAttribute ("href", "https://wa.me/" + countryPrefix.value + input.value.replace (/ /g, ""));
  });

  input.addEventListener ("input", (e) => {
    e.preventDefault();

    if (input.value[0] === 0) {
        input.value = input.value - input.value[0];
    }

    chatBtn.setAttribute ("href", "https://wa.me/" + countryPrefix.value + input.value.replace (/ /g, ""));
  });
}

function App() {
  return (
    <div className="App">
      <form>
        <a href="/#" target="_blank" id="whatsApp_homePage"><img src="WhatsApp.svg" width="100vw" alt="Whatsapp logo"/></a>
        <label htmlFor="selectedCountry">Select Country:</label>
        <select id="selectedCountry"></select>
        <input type="text" id="countryPrefix" value="+20" disabled/>
        <input type="tel" id="number" placeholder="Enter phone number"/>
        <a href="/#" target="_blank" id="chat">Chat</a>
      </form>
    </div>
  );
};

const Test = {App, Usage};

export default Test;