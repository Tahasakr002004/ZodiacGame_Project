'user strict';
const score1 = document.querySelector('#score--1');
const score2 = document.querySelector('#score--2');
const diceImg = document.querySelector('.dice');
const Rollbtn = document.querySelector('.btn--roll');
const Holdbtn = document.querySelector('.btn--hold');
let currentScore = document.querySelector('.current-score');
const currentSc1 = document.querySelector('#current--1');
const currentSc2 = document.querySelector('#current--2');
const player1 = document.querySelector('.player--1');
const player2 = document.querySelector('.player--2');
const NewReset = document.querySelector('.btn--new');
////////////////////////////////////////////////////////////////////
/**mit den Lösungen beginnen*****/
let t_Score1 = 0;
let t_Score2 = 0;
score1.textContent = 0;
score2.textContent = 0;
let currentPlus = 0;
let still_working = true;
diceImg.classList.add('hidden');
/////////////////////////////////////////////////////
const resetFunc = function () {
  still_working = true;
  diceImg.classList.add('hidden');
  t_Score1 = t_Score2 = currentPlus = 0;
  score1.textContent = 0;
  score2.textContent = 0;
  currentScore.textContent = 0;
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  if (player2.classList.contains('player--active')) {
    player2.classList.remove('player--active');
    player1.classList.add('player--active');
    currentScore = document.querySelector('#current--1');
    currentPlus = 0;
    currentSc2.textContent = 0;
  }
};
// SwitchFunc :funktion, für Umtausch
const SwitchFunc = function () {
  if (still_working) {
    if (player1.classList.contains('player--active')) {
      //player1.classList.toggle('player--active');
      player1.classList.remove('player--active');
      player2.classList.add('player--active');
      currentScore = document.querySelector('#current--2');
      currentPlus = 0;
      currentSc1.textContent = 0;
    } else if (player2.classList.contains('player--active')) {
      //player2.classList.toggle('player--active');
      player2.classList.remove('player--active');
      player1.classList.add('player--active');
      currentScore = document.querySelector('#current--1');
      currentPlus = 0;
      currentSc2.textContent = 0;
    }
    console.log(t_Score1, t_Score2);
  }
};
// RollFunc: funktion für Rollen
const RollFunc = function (x_n) {
  if (still_working) {
    diceImg.classList.remove('hidden');
    diceImg.src = `src/image/dice-${x_n}.png`;
    if (x_n === 1) {
      currentPlus = 0;
      currentScore.textContent = currentPlus;
      SwitchFunc();
    } else {
      currentPlus += x_n;
      currentScore.textContent = currentPlus;
    }
  }
};
Rollbtn.addEventListener('click', function () {
  if (still_working) {
    let num = Math.trunc(Math.random() * 6 + 1);
    console.log(num);
    switch (num) {
      case 1:
        RollFunc(1);
        break;
      case 2:
        RollFunc(num);
        break;
      case 3:
        RollFunc(num);
        break;
      case 4:
        RollFunc(num);
        break;
      case 5:
        RollFunc(num);
        break;
      case 6:
        RollFunc(num);
        break;
    }
  }
});
///////////////////////////////////////////////////
//3-zum anderen Spieler einrichten
Holdbtn.addEventListener('click', function () {
  if (still_working) {
    if (player1.classList.contains('player--active')) {
      t_Score1 += currentPlus;
      if (t_Score1 >= 20) {
        player1.classList.add('player--winner');
        document.querySelector('.label--1').innerHTML = 'Gewinn';
        diceImg.classList.remove('hidden');
        still_working = false;
      }
      score1.textContent = t_Score1;
      SwitchFunc();
    } else if (player2.classList.contains('player--active')) {
      t_Score2 += currentPlus;
      if (t_Score2 >= 20) {
        player2.classList.add('player--winner');
        document.querySelector('.label--2').innerHTML = 'Gewinn';
        diceImg.classList.remove('hidden');
        still_working = false;
      }
      score2.textContent = t_Score2;
      SwitchFunc();
    }
  }
});

// /////////////////////////////////////
// NewReset.addEventListener('click', resetFunc);
// console.log( ' 12.07.2002 - 20.03.2022 | 10.05.2008 - 10-06-2011 '.trim().split('|').map(item => item.trim() )
// );
// const example1Customer = {
//   CustomerNumber: "KN15000016",
//   Identifiernumber: "NULL",
//   IdentifierBlocked: "0",
//   Gender: "M",
//   Firstname: "Kunde",
//   Lastname: "Musterkunde",
//   Company: "NULL",
//   Birthdate: "17.10.1990",
//   EMail: "musterkunde@micromerce.com",
//   Mobile: "123456789",
//   Extension: "NULL",
//   Street: "Straße",
//   Housenumber: "56",
//   ZIP: "12345",
//   City: "Micromercestadt",
//   Country: "DE",
//   ConsumptionAmountVending: ".00",
//   ConsumptionAmountBonus: ".00",
//   Payoption: "directdebit",
//   Paymode: "per month",
//   Accountholder: "Musterkunde",
//   IBAN: "123456",
//   BIC: "NOLA2dfg34JF",
//   Bankname: "Micromercebank",
//   Mandatereference: "KJHSDsdfgF2357",
//   MandateSigendate: "13.09.2017",
//   DirectDebitDay: "1.0",
//   BlockDirectDebit: "NULL",
//   BlockDunning: "NULL",
//   Contractnumber: "15000017",
//   ContractType: "M",
//   ContractStatus: "I",
//   Date_Start_Contract: "01.10.2017",
//   Date_Sign_Contract: "03.08.2017",
//   Date_Start_Training: "02.09.2017",
//   Termination_Received_Date: "10.04.2019",
//   Termination_Reason: "Keine Angabe",
//   Termination_Date: "30.09.2019",
//   Next_Termination_Deadline: "2019-06-30",
//   Next_Termination_Date: "2019-09-30",
//   ModelId: "2",
//   Modelname: "Abo 24 Monate + Getränke",
//   ModelPeriodType: "Month",
//   ModelPeriodInit: "24",
//   ModelPeriodExtension: "12",
//   Initial_Termination_Period_Type: "Month",
//   Initial_Termination_Period_Count: "3",
//   Extension_Termination_Period_Type: "Month",
//   Extension_Termination_Period_Count: "3",
//   ListOfPeriods: "   15.03.2017 - 01.05.2017",
//   OpenCredits: ".00",
//   OpenDebts: ".00",
//   AdditionalFields: "NULL",
//   PersonMarketingEmail: "NULL",
//   PersonMarketingAddress: "NULL",
//   PersonMarketingMobileCall: "NULL",
//   PersonMarketingMobileMessenger: "NULL",
//   PersonMarketingPhoneCall: "NULL"
// };
// const example2Customer = {
//   CustomerNumber: "KN15000016",
//   Identifiernumber: "NULL",
//   IdentifierBlocked: "0",
//   Gender: "M",
//   Firstname: "Kunde",
//   Lastname: "Musterkunde",
//   Company: "NULL",
//   Birthdate: "17.10.1990",
//   EMail: "musterkunde@micromerce.com",
//   Mobile: "123456789",
//   Extension: "NULL",
//   Street: "Straße",
//   Housenumber: "56",
//   ZIP: "12345",
//   City: "Micromercestadt",
//   Country: "DE",
//   ConsumptionAmountVending: ".00",
//   ConsumptionAmountBonus: ".00",
//   Payoption: "directdebit",
//   Paymode: "per month",
//   Accountholder: "Musterkunde",
//   IBAN: "123456",
//   BIC: "NOLA2dfg34JF",
//   Bankname: "Micromercebank",
//   Mandatereference: "KJHSDsdfgF2357",
//   MandateSigendate: "13.09.2017",
//   DirectDebitDay: "1.0",
//   BlockDirectDebit: "NULL",
//   BlockDunning: "NULL",
//   Contractnumber: "15000017",
//   ContractType: "M",
//   ContractStatus: "I",
//   Date_Start_Contract: "01.10.2017",
//   Date_Sign_Contract: "03.08.2017",
//   Date_Start_Training: "02.09.2017",
//   Termination_Received_Date: "10.04.2019",
//   Termination_Reason: "Keine Angabe",
//   Termination_Date: "30.09.2019",
//   Next_Termination_Deadline: "2019-06-30",
//   Next_Termination_Date: "2019-09-30",
//   ModelId: "2",
//   Modelname: "Abo 24 Monate + Getränke",
//   ModelPeriodType: "Month",
//   ModelPeriodInit: "24",
//   ModelPeriodExtension: "12",
//   Initial_Termination_Period_Type: "Month",
//   Initial_Termination_Period_Count: "3",
//   Extension_Termination_Period_Type: "Month",
//   Extension_Termination_Period_Count: "3",
//   ListOfPeriods: "12.06.2008- 11.07.2008|12.08.2008 - 11.11.2008",
//   OpenCredits: ".00",
//   OpenDebts: ".00",
//   AdditionalFields: "NULL",
//   PersonMarketingAddress: "NULL",
//   PersonMarketingMobileCall: "NULL",
//   PersonMarketingMobileMessenger: "NULL",
//   PersonMarketingPhoneCall: "NULL"
// };
// const example3Customer = {
//   CustomerNumber: "KN15000016",
//   Identifiernumber: "NULL",
//   IdentifierBlocked: "0",
//   Gender: "M",
//   Firstname: "Kunde",
//   Lastname: "Musterkunde",
//   Company: "NULL",
//   Birthdate: "17.10.1990",
//   EMail: "musterkunde@micromerce.com",
//   Mobile: "123456789",
//   Extension: "NULL",
//   Street: "Straße",
//   Housenumber: "56",
//   ZIP: "12345",
//   City: "Micromercestadt",
//   Country: "DE",
//   ConsumptionAmountVending: ".00",
//   ConsumptionAmountBonus: ".00",
//   Payoption: "directdebit",
//   Paymode: "per month",
//   Accountholder: "Musterkunde",
//   IBAN: "123456",
//   BIC: "NOLA2dfg34JF",
//   Bankname: "Micromercebank",
//   Mandatereference: "KJHSDsdfgF2357",
//   MandateSigendate: "13.09.2017",
//   DirectDebitDay: "1.0",
//   BlockDirectDebit: "NULL",
//   BlockDunning: "NULL",
//   Contractnumber: "15000017",
//   ContractType: "M",
//   ContractStatus: "I",
//   Date_Start_Contract: "01.10.2017",
//   Date_Sign_Contract: "03.08.2017",
//   Date_Start_Training: "02.09.2017",
//   Termination_Received_Date: "10.04.2019",
//   Termination_Reason: "Keine Angabe",
//   Termination_Date: "30.09.2019",
//   Next_Termination_Deadline: "2019-06-30",
//   Next_Termination_Date: "2019-09-30",
//   ModelId: "2",
//   Modelname: "Abo 24 Monate + Getränke",
//   ModelPeriodType: "Month",
//   ModelPeriodInit: "24",
//   ModelPeriodExtension: "12",
//   Initial_Termination_Period_Type: "Month",
//   Initial_Termination_Period_Count: "3",
//   Extension_Termination_Period_Type: "Month",
//   Extension_Termination_Period_Count: "3",
//   ListOfPeriods: "NULL",
//   OpenCredits: ".00",
//   OpenDebts: ".00",
//   AdditionalFields: "NULL",
//   PersonMarketingEmail: "NULL",
//   PersonMarketingAddress: "NULL",
//   PersonMarketingMobileCall: "NULL",
//   PersonMarketingMobileMessenger: "NULL",
//   PersonMarketingPhoneCall: "NULL"
// };
//  const example4Customer = {
//   CustomerNumber: "KN15000016",
//   Identifiernumber: "NULL",
//   IdentifierBlocked: "0",
//   Gender: "M",
//   Firstname: "Kunde",
//   Lastname: "Musterkunde",
//   Company: "NULL",
//   Birthdate: "17.10.1990",
//   EMail: "musterkunde@micromerce.com",
//   Mobile: "123456789",
//   Extension: "NULL",
//   Street: "Straße",
//   Housenumber: "56",
//   ZIP: "12345",
//   City: "Micromercestadt",
//   Country: "DE",
//   ConsumptionAmountVending: ".00",
//   ConsumptionAmountBonus: ".00",
//   Payoption: "directdebit",
//   Paymode: "per month",
//   Accountholder: "Musterkunde",
//   IBAN: "123456",
//   BIC: "NOLA2dfg34JF",
//   Bankname: "Micromercebank",
//   Mandatereference: "KJHSDsdfgF2357",
//   MandateSigendate: "13.09.2017",
//   DirectDebitDay: "1.0",
//   BlockDirectDebit: "NULL",
//   BlockDunning: "NULL",
//   Contractnumber: "15000017",
//   ContractType: "M",
//   ContractStatus: "I",
//   Date_Start_Contract: "01.10.2017",
//   Date_Sign_Contract: "03.08.2017",
//   Date_Start_Training: "02.09.2017",
//   Termination_Received_Date: "10.04.2019",
//   Termination_Reason: "Keine Angabe",
//   Termination_Date: "30.09.2019",
//   Next_Termination_Deadline: "2019-06-30",
//   Next_Termination_Date: "2019-09-30",
//   ModelId: "2",
//   Modelname: "Abo 24 Monate + Getränke",
//   ModelPeriodType: "Month",
//   ModelPeriodInit: "24",
//   ModelPeriodExtension: "12",
//   Initial_Termination_Period_Type: "Month",
//   Initial_Termination_Period_Count: "3",
//   Extension_Termination_Period_Type: "Month",
//   Extension_Termination_Period_Count: "3",
//   OpenCredits: ".00",
//   OpenDebts: ".00",
//   AdditionalFields: "NULL",
//   PersonMarketingEmail: "NULL",
//   PersonMarketingAddress: "NULL",
//   PersonMarketingMobileCall: "NULL",
//   PersonMarketingMobileMessenger: "NULL",
//   PersonMarketingPhoneCall: "NULL"
// };


// // type Dates = {
// //   startDate: string;
// //   endDate: string;
// // };

// // const extractDates = (customer) => {
//   // your code here
// const toExtractedDates = ( customer ) => {
//     /* die extractedDates*/
//   let extractedDates = [];
  
//   //falls es im KundeObject optional ListOfPeriods gibt, dann im periods initialisiert
//     //wird. ansonsten,gibt es leer array zurück;
//   if ( customer.ListOfPeriods ) {
//     const periods = customer.ListOfPeriods;
//     // ich habe hier die Periods gespalted und terminiert, 
//     const splitedPeriod = periods.trim().split( '|' ).map( periodItem => periodItem.trim() );
    
//     splitedPeriod.forEach((dateItem) => {
//       let period = dateItem.split('-');
//       if ( period.length === 2 ) {
//         // console.log( period );
//           extractedDates.push({startDate: period[0].trim(),endDate:period[1].trim()});
//         }else{
//            extractedDates.push({error: "String Lenght is Invalid ?!!"})
//         }
//     });
//     return extractedDates;
//   } else {
//     return [];
//   }
   
//   }
// console.log('C1: ',toExtractedDates( example1Customer ));
// console.log('C2: ',toExtractedDates( example2Customer ));
// console.log('C3: ',toExtractedDates( example3Customer ));
// console.log('C4: ',toExtractedDates( example4Customer ));
// // };


// // export default extractDates;
