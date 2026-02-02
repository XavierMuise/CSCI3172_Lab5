// In this example, I want to create an interactive form that allows Newt Scamander create a sort of inventory of the Fantastic Beasts he's rescuing
// Here's what we'll need to do:
// 1. Grab the input a user enters into our form
// 2. Represent this input in a meaningful way, let's say an Object
// 3. Push the contents of that Object into an Array
// 4. Reset our form so that the user can add a new creature if they want without having to manually delete the previous input
// 5. Display the new creature in our Array back to the user on our page

const creatureSanctuary = [];

function addCreature() {
  const creatureName = document.getElementById("creatureName").value;
  const creatureType = document.getElementById("creatureType").value;
  const creatureHabitat = document.getElementById("creatureHabitat").value;
  const creatureNotes = document.getElementById("creatureNotes").value;

  const newCreature = {
    name: creatureName,
    type: creatureType,
    habitat: creatureHabitat,
    notes: creatureNotes
  };
  creatureSanctuary.push(newCreature);

  document.getElementById("addCreatureForm").reset();
  displayCreatures();
}

function displayCreatures() {
  const creaturesDiv = document.getElementById("creatureSanctuary");
  creaturesDiv.innerHTML = "";

  const list = document.createElement("ul");
  for (const creature of creatureSanctuary) {
    const listItem = document.createElement("li");
    listItem.textContent = `${creature.name} - ${creature.type} (Habitat: ${creature.habitat}) Notes : ${creature.notes}`;
    list.appendChild(listItem);
  }
  creaturesDiv.appendChild(list);
}

document
  .getElementById("addCreatureForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    addCreature();
  });
