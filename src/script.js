const numPartInput = document.getElementById('num_part');

// localStorage permetto di salvare le coppie key/value nel browser.
window.addEventListener('load', () => {
    const savedData = JSON.parse(localStorage.getItem('participants') || '[]');
    const savedNum = localStorage.getItem('num_part');

    if (savedNum) {
        numPartInput.value = savedNum;
    }

    if (savedData.length) {
        generateTable(savedData);
    }
});


numPartInput.addEventListener('input', () => {
    localStorage.setItem('num_part', numPartInput.value);
    generateTable(JSON.parse(localStorage.getItem('participants') || '[]'));
});

function generateTable(savedData = []) {
    const num = parseInt(numPartInput.value) || 0;
    const container = document.getElementById('table-container');
    container.innerHTML = '';

    if (num > 0) {
        const table = document.createElement('table');

        const header = document.createElement('tr');
        ['Nome', 'Cognome', 'Età'].forEach(text => {
            const th = document.createElement('th');
            th.textContent = text;
            header.appendChild(th);
        });
        table.appendChild(header);

        for (let i = 0; i < num; i++) {
            const tr = document.createElement('tr');

            const tdName = document.createElement('td');
            const inputName = document.createElement('input');
            inputName.type = 'text';
            inputName.name = 'name[]';
            inputName.required = true;
            inputName.value = savedData[i]?.name || '';
            tdName.appendChild(inputName);

            const tdSurname = document.createElement('td');
            const inputSurname = document.createElement('input');
            inputSurname.type = 'text';
            inputSurname.name = 'surname[]';
            inputSurname.required = true;
            inputSurname.value = savedData[i]?.surname || '';
            tdSurname.appendChild(inputSurname);

            const tdAge = document.createElement('td');
            const inputAge = document.createElement('input');
            inputAge.type = 'number';
            inputAge.name = 'age[]';
            inputAge.min = 0;
            inputAge.required = true;
            inputAge.value = savedData[i]?.age || '';
            tdAge.appendChild(inputAge);

            tr.appendChild(tdName);
            tr.appendChild(tdSurname);
            tr.appendChild(tdAge);
            table.appendChild(tr);
        }

        container.appendChild(table);

        container.querySelectorAll('input').forEach(input => {
            input.addEventListener('input', () => {
                const allRows = Array.from(container.querySelectorAll('tr')).slice(1);
                const data = allRows.map(row => {
                    const [name, surname, age] = row.querySelectorAll('input');
                    return { name: name.value, surname: surname.value, age: age.value };
                });
                localStorage.setItem('participants', JSON.stringify(data));
            });
        });
    } else {
        localStorage.removeItem('participants');
    }
}

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

if (select.value != "--Scegli una meta--"){
  displayCity();
}

select.addEventListener("change", displayCity);

function displayCity(){
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
}