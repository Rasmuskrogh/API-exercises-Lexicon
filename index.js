const getPokemons = async () => {
  try {
    let response = await fetch(
      "https://santosnr6.github.io/Data/pokemons.json"
    );
    let data = await response.json();
    console.log(data);

    for (pokemon of data) {
      document.body.innerHTML += `<br> <br> ${pokemon.id} ${pokemon.name} <br>`;
    }
  } catch (error) {
    console.log(error);
  }
};

const getDogs = async () => {
  try {
    let response = await fetch("https://majazocom.github.io/Data/dogs.json");
    let data = await response.json();
    console.log(data);

    for (dogs of data) {
      document.body.innerHTML += `<br> <br> name: ${dogs.name}`;
    }
  } catch (error) {
    console.log(data);
  }
};

const getBooks = async () => {
  try {
    let response = await fetch("https://majazocom.github.io/Data/books.json");
    let data = await response.json();

    for (book of data) {
      if (book.pages < 500) {
        document.body.innerHTML += `<br> <br> name: ${book.title}`;
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const getAttendees = async () => {
  try {
    let response = await fetch(
      "https://majazocom.github.io/Data/attendees.json"
    );
    let data = await response.json();
    console.log(data);

    for (attendee of data) {
      if (attendee.attending && attendee.allergies[0]) {
        console.log(attendee);
        document.body.innerHTML += ` <br> <br>${attendee.name} have the following allergies and diets: ${attendee.allergies}`;
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const button1 = document.createElement("button");
const button2 = document.createElement("button");
const button3 = document.createElement("button");
const button4 = document.createElement("button");
const button5 = document.createElement("button");

button1.innerText = "Get Pokemons";
button2.innerText = "Get Dogs";
button3.innerText = "Get Books";
button4.innerText = "get Attendees";
button5.innerText = "Button5";

document.body.appendChild(button1);
button1.addEventListener("click", () => {
  getPokemons();
});

document.body.appendChild(button2);
button2.addEventListener("click", () => {
  getDogs();
});

document.body.appendChild(button3);
button3.addEventListener("click", () => {
  getBooks();
});

document.body.appendChild(button4);
button4.addEventListener("click", () => {
  getAttendees();
});

document.body.appendChild(button5);
button5.addEventListener("click", () => {
  console.log("5");
});
