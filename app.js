let mobiles = [
    {
        company: 'iphone',
        model: "v13Pro",
        ram: "6GB",
        rom: "64GB",
        price: 120000
    },
    {
        company: 'iphone',
        model: "v13",
        ram: "4GB",
        rom: "32GB",
        price: 120000
    },
    {
        company: 'iphone',
        model: "v14Pro",
        ram: "8GB",
        rom: "128GB",
        price: 120000
    },
    {
        company: 'iphone',
        model: "v11Pro",
        ram: "2GB",
        rom: "16GB",
        price: 120000
    },
    {
        company: 'samsung',
        model: "Galaxy A13",
        ram: "6GB",
        rom: "64GB",
        price: 120000
    },
    {
        company: 'samsung',
        model: "Galaxy XCover6 Pro",
        ram: "4GB",
        rom: "32GB",
        price: 120000
    },
    {
        company: 'samsung',
        model: "Galaxy M13",
        ram: "8GB",
        rom: "128GB",
        price: 120000
    },
    {
        company: 'samsung',
        model: "Galaxy Z Flip4",
        ram: "2GB",
        rom: "16GB",
        price: 120000
    },
    {
        company: 'realme',
        model: "Real Me 1",
        ram: "6GB",
        rom: "64GB",
        price: 120000
    },
    {
        company: 'realme',
        model: "Realme V5",
        ram: "4GB",
        rom: "32GB",
        price: 120000
    },
    {
        company: 'realme',
        model: "Real Me 6 X",
        ram: "8GB",
        rom: "128GB",
        price: 120000
    },
    {
        company: 'realme',
        model: "Real Me X2",
        ram: "2GB",
        rom: "16GB",
        price: 120000
    },
    {
        company: 'vivo',
        model: " Vivo y20",
        ram: "6GB",
        rom: "64GB",
        price: 120000
    },
    {
        company: 'vivo',
        model: "Vivo X7",
        ram: "4GB",
        rom: "32GB",
        price: 120000
    },
    {
        company: 'vivo',
        model: "Vivo Z6",
        ram: "8GB",
        rom: "128GB",
        price: 120000
    },
    {
        company: 'vivo',
        model: "Vivo V9 Youth",
        ram: "2GB",
        rom: "16GB",
        price: 120000
    },
    
]


let selectCompany = document.getElementById("company");
let selectModel = document.getElementById("model");

//Getting all companies 
let companiesDummy = mobiles.map(function(e){
    return e.company;
})

//Removing redundant company names
companies = new Set([...companiesDummy]);

//rendering company names in dropDown on webPage
companies.forEach(function(value){
    selectCompany.innerHTML += `
    <option value="${value}">${value}</option>
    `
});

//Function runs when user select company
function showModels(){
    selectModel.disabled = false;

    selectModel.innerHTML = "";
    selectModel.innerHTML = `<option value="">Select Model</option>`

    //Getting models of a selected company
    let models = mobiles.filter(function(value){
        return value.company == `${selectCompany.value}`
    })

    //rendering models of selected company on webPage
    models.forEach(function(value){
        selectModel.innerHTML += `
        <option value="${value.model}">${value.model}</option>
        `
    })

}

function searchData(){
    //Getting data of selected model
    let selectedMobile = mobiles.find(function(value){
        return value.model == `${selectModel.value}`
    })

    //Rendering Data on Screen
    let parent = document.getElementById("parent");
    parent.innerHTML = "";
    parent.innerHTML = `
    <p> <font color = 'Yellow'> PRICE : </font> ${selectedMobile["price"]}</p>
    <p> <font color = 'Yellow'> RAM : </font> ${selectedMobile.ram}</p>
    <p> <font color = 'Yellow'> ROM : </font> ${selectedMobile.rom}</p>
    `
}