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


// array of items
Inventory = [WandOne, WandTwo, WandThree, SpeedPotion, HealthPotion, StrengthPotion, BroomOne, BroomTwo];
currentInventory = [];

function addItem(Item){


}

function removeItem(ItemName){

}

function getItem(ItemName){
    for(let i = 0; i < Inventory.length; i++){
        if(Inventory[i] == ItemName){
            return Inventory[i];
        }
    }
    return null;
}

function listItems(){
    //remove everything there


    //add all current items 


}

function searchItems(query){
    currentInventory = [];

    for(let i = 0; i < Inventory.length; i++){
        
    }
}

function calculateTotalValue(){
    Sum = 0;
    for(let i = 0; i < currentInventory.length; i++){
        Sum += (currentInventory[i].price * currentInventory[i].quantity);
    }
    return Sum;
}

