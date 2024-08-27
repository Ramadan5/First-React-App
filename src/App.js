import React from 'react';
import { isAndroid, isIOS } from "react-device-detect";
import './App.css';
// import data from "./countries.json";
// import logo from './logo.svg';

const data = require ('./countries.json');

function Interactivity() {
  const openApp = document.getElementById ("whatsApp_homePage");
  const selectedCountry = document.getElementById ("selectedCountry");
  const countryPrefix = document.getElementById ("countryPrefix");
  const input = document.getElementById ("number");
  const chatBtn = document.getElementById ("chat");

  const countries = [];
  const countryDialCodes = [];


  if (isAndroid) {
    openApp.setAttribute ("href", "intent://chat/#Intent;scheme=whatsapp;package=com.whatsapp;end");
  }
  else if (isIOS) {
    openApp.setAttribute ("href", "whatsapp://");
  }
  else {
    openApp.setAttribute ("href", "https://web.whatsapp.com/");
  }

  for (let i = 0; i < data.length; i++) {
    countries[i] = data[i].name;
    let country = document.createElement ("option");
    country.innerText = countries[i];
    if (country.innerText == "Egypt") {
        country.setAttribute ("selected", "");
    }
    selectedCountry.append (country);
  }
  
  selectedCountry.addEventListener ("change", () => {
    for (let i = 0; i < data.length; i++) {
        countries[i] = data[i].name;
        countryDialCodes[i] = data[i].dial_code;

        if (selectedCountry.options[selectedCountry.selectedIndex].text == countries[i]) {
            countryPrefix.value = countryDialCodes[i];
        }
    }
    chatBtn.setAttribute ("href", "https://wa.me/" + countryPrefix.value + input.value.replace (/ /g, ""));
  });
  

  input.addEventListener ("input", (e) => {
    e.preventDefault();

    input.value = input.value.replace (/ /g, "");

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


const Functions = {App, Interactivity};

export default Functions;
