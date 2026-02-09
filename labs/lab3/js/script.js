// item  objects 
const SpeedPotion = {
    name: "Speed Potion",
    type: "Potion",
    price: 50,
    quantity: 20,
    description: "Makes you run up to 3x as fast for 2 minutes."
};

const StrengthPotion = {
    name: "Strength Potion",
    type: "Potion",
    price: 75,
    quantity: 15,
    description: "Makes you up to 3x as strong for 2 minutes."
};

const HealthPotion = {
    name: "Health Potion",
    type: "Potion",
    price: 20,
    quantity: 50,
    description: "Heals minor injures."
};

const WandOne = {
    name: "Beginner Wand",
    type: "Wand",
    price: 100,
    quantity: 50,
    description: "Good for aspiring mages."
};

const WandTwo = {
    name: "Intermediate Wand",
    type: "Wand",
    price: 250,
    quantity: 20,
    description: "Good for experienced mages."
};

const WandThree = {
    name: "Advanced Wand",
    type: "Wand",
    price: 1000,
    quantity: 5,
    description: "Good for veteran mages."
};

const BroomOne = {
    name: "Beginner Broom",
    type: "Broom",
    price: 400,
    quantity: 5,
    description: "Good for intermediate mages."
};

const BroomTwo = {
    name: "Advanced Broom",
    type: "Broom",
    price: 1000,
    quantity: 3,
    description: "Good for veteran mages."
};


// array of all items
Inventory = [WandOne, WandTwo, WandThree, SpeedPotion, HealthPotion, StrengthPotion, BroomOne, BroomTwo];

//array of items currently in inventory 
currentInventory = [...Inventory];

listItems();

// add 1 item
function addItem(ItemName) {
    const item = getItem(ItemName);
    item.quantity += 1;

    //reList items
    listItems();
}

//remove 1 item 
function removeItem(ItemName) {
    const item = getItem(ItemName);

    if (item.quantity == 0) {
        alert("No more left!");
        return;
    }

    item.quantity -= 1;

    //reList items
    listItems();
}

// add new entry 
function newItem(item) {
    Inventory.push(item);
    currentInventory.push(item);
    listItems();
}

// delete an entry 
function deleteItem(itemName) {
    Inventory = Inventory.filter(item => item.name !== itemName);
    currentInventory = currentInventory.filter(item => item.name !== itemName);
    listItems();
}

function getItem(itemName) {
    for (let i = 0; i < Inventory.length; i++) {
        if (Inventory[i].name == itemName) {
            return Inventory[i];
        }
    }
    return null;
}

function listItems() {

    // add total value 

    const value = document.getElementById("value");
    value.textContent = "$" + calculateTotalValue();
    //remove everything already displayed
    const inventoryDiv = document.getElementById("inventory");
    inventoryDiv.innerHTML = "";

    // add each item in our current inventory
    currentInventory.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "item";

        const name = document.createElement("h2");
        name.textContent = item.name;

        const type = document.createElement("p");
        type.textContent = `Type: ${item.type}`;

        const price = document.createElement("p");
        price.textContent = `Price: ${item.price} coins`;

        const quantity = document.createElement("p");
        quantity.textContent = `Quantity: ${item.quantity}`;

        const description = document.createElement("p");
        description.textContent = item.description;

        const addBtn = document.createElement("button");
        addBtn.textContent = "Add";
        addBtn.onclick = () => addItem(item.name);

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.onclick = () => removeItem(item.name);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => deleteItem(item.name);

        itemDiv.append(
            name,
            type,
            price,
            quantity,
            description,
            addBtn,
            removeBtn,
            deleteBtn
        );

        inventoryDiv.appendChild(itemDiv);
    });

    groupByCategory();
}

function searchItems(query) {
    //empty current inventory 
    currentInventory = [];

    for (let i = 0; i < Inventory.length; i++) {
        if (Inventory[i].name.toLowerCase().includes(query.toLowerCase()) ||
            Inventory[i].type.toLowerCase().includes(query.toLowerCase())) {
            currentInventory.push(Inventory[i]);
        }
    }

    //redraw items 
    listItems()
}

function calculateTotalValue() {
    Sum = 0;
    for (let i = 0; i < currentInventory.length; i++) {
        Sum += (currentInventory[i].price * currentInventory[i].quantity);
    }
    return Sum;
}

document.getElementById("query").addEventListener("submit", function (e) {
    e.preventDefault();
    const query = document.getElementById("input").value;
    searchItems(query);
});

// send info from form to new item 
document.getElementById("newItem").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("nameInput").value.trim();
    const type = document.getElementById("typeInput").value.trim();
    const price = parseInt(document.getElementById("priceInput").value);
    const quantity = parseInt(document.getElementById("quantityInput").value);
    const description = document.getElementById("descInput").value.trim();

    if (isNaN(price)) {
        alert("price must be a number!");
    }

    if (isNaN(quantity)) {
        alert("quantity must be a number!");
    }


    const item = {
        name: name,
        type: type,
        price: price,
        quantity: quantity,
        description: description
    };

    newItem(item);
});


// Bonus question 

function groupByCategory() {
    let groups = {};

    Inventory.forEach(item => {
        if (!groups[item.type]) {
            groups[item.type] = [];
        }

        groups[item.type].push(item.name);

    });

    const mainDiv = document.getElementById("groups");
    mainDiv.innerHTML = "";

    for (const type in groups) {
        const typeDiv = document.createElement("p")

        typeDiv.textContent = type + " : " + groups[type];

        mainDiv.appendChild(typeDiv);
    }

} 

