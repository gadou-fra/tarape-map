const elections = {
  2009: {
    SD: { name: "Social-démocratie", percent: 35.12, seats: 74 },
    FE: { name: "Conservatisme", percent: 33.05, seats: 71 },
    DDT: { name: "Libéralisme", percent: 8.13, seats: 17 },
    AGT: { name: "National-Populisme", percent: 7.84, seats: 13 },
    ED: { name: "Ecologie politique", percent: 5.33, seats: 12 },
    FCT: { name: "Libéral-régionalisme", percent: 5.14, seats: 11 },
    FG: { name: "Communisme", percent: 3.15, seats: 6 },
    LT: { name: "Socialisme démocratique", percent: 2.24, seats: 6 }
  },

  2010: {
    FE: { name: "Conservatisme", percent: 35.16, seats: 92 },
    SD: { name: "Social-démocratie", percent: 18.41, seats: 39 },
    ED: { name: "Ecologie politique", percent: 13.24, seats: 21 },
    DDT: { name: "Libéralisme", percent: 10.16, seats: 19 },
    FCT: { name: "Libéral-régionalisme", percent: 10.06, seats: 18 },
    AGT: { name: "National-Populisme", percent: 5.18, seats: 8 },
    FG: { name: "Communisme", percent: 4.18, seats: 7 },
    LT: { name: "Socialisme démocratique", percent: 3.61, seats: 6 }
  },

  2013: {
    SD: { name: "Social-démocratie", percent: 40.99, seats: 110 },
    FE: { name: "Conservatisme", percent: 17.54, seats: 28 },
    FCT: { name: "Libéral-régionalisme", percent: 15.03, seats: 24 },
    DDT: { name: "Libéralisme", percent: 8.76, seats: 15 },
    AGT: { name: "National-Populisme", percent: 7.84, seats: 17 },
    ED: { name: "Ecologie politique", percent: 5.13, seats: 9 },
    LT: { name: "Socialisme démocratique", percent: 3.58, seats: 5 },
    FG: { name: "Communisme", percent: 1.13, seats: 2 }
  },

  2017: {
    FT: { name: "Libéral-conservatisme", percent: 20.54, seats: 49 },
    ED: { name: "Ecologie politique", percent: 14.86, seats: 30 },
    FE: { name: "Conservatisme", percent: 14.64, seats: 28 },
    SD: { name: "Social-démocratie", percent: 14.13, seats: 29 },
    LT: { name: "Socialisme démocratique", percent: 13.03, seats: 27 },
    P: { name: "Ultralibéralisme", percent: 9.11, seats: 18 },
    DDT: { name: "Libéralisme", percent: 6.13, seats: 14 },
    AGT: { name: "National-Populisme", percent: 5.43, seats: 10 },
    FG: { name: "Communisme", percent: 2.13, seats: 5 }
  },

  2020: {
    DDT: { name: "Libéralisme", percent: 25.33, seats: 60 },
    FT: { name: "Libéral-conservatisme", percent: 17.26, seats: 40 },
    FE: { name: "Conservatisme", percent: 15.70, seats: 33 },
    ED: { name: "Ecologie politique", percent: 15.04, seats: 33 },
    P: { name: "Ultralibéralisme", percent: 11.39, seats: 19 },
    SD: { name: "Social-démocratie", percent: 8.59, seats: 14 },
    FG: { name: "Communisme", percent: 2.76, seats: 5 },
    LT: { name: "Socialisme démocratique", percent: 2.71, seats: 5 },
    AGT: { name: "National-Populisme", percent: 1.22, seats: 1 }
  },

  2021: {
    FT: { name: "Libéral-conservatisme", percent: 32.92, seats: 72 },
    SD: { name: "Social-démocratie", percent: 17.12, seats: 38 },
    FG: { name: "Communisme", percent: 11.77, seats: 23 },
    P: { name: "Ultralibéralisme", percent: 10.88, seats: 20 },
    DDT: { name: "Libéralisme", percent: 10.06, seats: 20 },
    ED: { name: "Ecologie politique", percent: 8.56, seats: 18 },
    DNP: { name: "National-Conservatisme", percent: 6.13, seats: 14 },
    AGT: { name: "National-Populisme", percent: 1.63, seats: 3 },
    LT: { name: "Socialisme démocratique", percent: 0.93, seats: 2 }
  },

  2023: {
    FT: { name: "Libéral-conservatisme", percent: 24.35, seats: 53 },
    SD: { name: "Social-démocratie", percent: 20.01, seats: 41 },
    DDT: { name: "Libéralisme", percent: 18.51, seats: 41 },
    FG: { name: "Communisme", percent: 17.94, seats: 35 },
    ED: { name: "Ecologie politique", percent: 4.13, seats: 9 },
    AGT: { name: "National-Populisme", percent: 4.11, seats: 7 },
    P: { name: "Ultralibéralisme", percent: 4.03, seats: 12 },
    LT: { name: "Socialisme démocratique", percent: 4.03, seats: 7 },
    DNP: { name: "National-Conservatisme", percent: 2.89, seats: 5 }
  }
};

const yearsDiv = document.getElementById("years");
const resultsDiv = document.getElementById("results");

// create year buttons
for (let year in elections) {
  let btn = document.createElement("button");
  btn.innerText = year;

  btn.onclick = () => showYear(year);

  yearsDiv.appendChild(btn);
}

// show results
function showYear(year) {
  resultsDiv.innerHTML = "";

  let data = elections[year];

  for (let party in data) {
    let div = document.createElement("div");
    div.classList.add("party");
    div.classList.add(party);

    div.innerHTML = `
      <span><b>${party}</b> (${data[party].name})</span>
      <span>${data[party].percent}% | ${data[party].seats} seats</span>
    `;

    resultsDiv.appendChild(div);
  }
}
