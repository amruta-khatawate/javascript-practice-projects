import { countryList } from "./states.js";

const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector(".btn");
const userValue = document.querySelector(".input");
const fromCurr = document.querySelector(".from select");
const toCurr =  document.querySelector(".to select");
const msg = document.querySelector(".msg");


for(let select of dropdowns){
      for(let cureCode in countryList){
           let newOption = document.createElement("option")
           newOption.innerHTML = cureCode;
           newOption.value = cureCode  
           if(select.name === "from" && cureCode === "USD"){
                  newOption.selected = "selected"
           }
           if(select.name === "to" && cureCode === "INR"){
                  newOption.selected ="selected"
           }
           select.append(newOption)
      }

      select.addEventListener("change", (event)=>{
            getFlag(event.target)
      })
}

const exchangeCurrency = async ()=>{
      let amountVal = userValue.value;
      let fromCurrValLower = fromCurr.value.toLowerCase();
      let toCurrValLower = toCurr.value.toLowerCase()
      // console.log(amountVal, userValue);
      
      if(amountVal === "" & amountVal <= 0){
            amountVal = 1;
           userValue.setAttribute("value", 1);
      }else{
            userValue.setAttribute("value", amountVal);
      }
      let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrValLower}.json`
      
      const response = await fetch(url);

      const data = await response.json();
      // console.log(data[fromCurrValLower][toCurrValLower]);
      let total = amountVal * (data[fromCurrValLower][toCurrValLower]);

      msg.innerHTML = `${amountVal} ${fromCurr.value} = ${total} ${toCurr.value}`;
      
      // console.log(amountVal, fromCurr.value.toLowerCase(), toCurr.value);
      
}


function getFlag(element){
      let currency = element.value;
      let state = countryList[currency]
      let newImgSrc = `https://flagsapi.com/${state}/flat/64.png`;
      let ImgSrc = element.parentElement.querySelector("img");
      ImgSrc.src=newImgSrc;
}


btn.addEventListener("click", (event)=> {
      event.preventDefault();
      exchangeCurrency();
})

