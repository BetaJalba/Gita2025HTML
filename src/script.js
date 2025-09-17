let studenti = 1;

function updateTable(id){
    studenti = document.getElementById(id).value;
}

function updateStudents(){
    console.log("Ciao")
    this.window.close()
}

function openTable(){
  const miniWindow = window.open(
    "",
    "MiniWindow",
    "width=400,height=300,top=100,left=100"
  );

  if (miniWindow) {
    let rows = ""
    for(let i = 0; i < studenti; i++){
        rows += `
            <tr>
            <td><input type="text" name="nome${i}"></td>
            <td><input type="text" name="cognome${i}"></td>
            <td><input type="number" min="10" max="25" name="eta${i}"></td>
            </tr>
        `
    }

    miniWindow.document.body.innerHTML = `
      <html>
        <head>
          <title>Mini Window</title>

        </head>
        <body>
          <h3>Elenco Partecipanti</h3>
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Cognome</th>
          <th>Età</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>
    <input type="button" value="Conferma" onclick="updateStudents()">
    <script src="src/script.js"></script>
        </body>
      </html>
    `;
  } else {
    alert("Popup blocked! Please allow popups for this site.");
  }
};

const cityData = {
    "Praga": {
      img: "res/prague.jpg",
      wiki: "https://en.wikipedia.org/wiki/Prague"
    },
    "Andalusia": {
      img: "res/andalousie.jpeg",
      wiki: "https://en.wikipedia.org/wiki/Andalusia"
    },
    "Barcellona": {
      img: "res/barcelona.jpeg",
      wiki: "https://en.wikipedia.org/wiki/Barcelona"
    },
    "Berlino": {
      img: "res/berlin.jpg",
      wiki: "https://en.wikipedia.org/wiki/Berlin"
    },
    "Parigi": {
      img: "res/paris.jpg",
      wiki: "https://en.wikipedia.org/wiki/Paris"
    }
  };

const select = document.getElementById("citta");
const display = document.getElementById("display_citta");

select.addEventListener("change", function() {
  const city = select.value;
  if(city && cityData[city]) {
    display.classList.remove("show");
    setTimeout(() => {
      display.innerHTML = `
        <h2>Modulo per viaggio con meta: ${city}</h2>
        <img src="${cityData[city].img}" alt="${city}">
        <p><a href="${cityData[city].wiki}" target="_blank">Più informazioni su Wikipedia</a></p>
      `;
      display.classList.add("show");
    }, 50);
  } else {
    display.classList.remove("show");
    display.innerHTML = "";
  }
});