//Partie I : fonction sans paramètres


function infoAboutMe(
	){
	console.log("Mon Nom est Kouabenan,j'aime me balader en bodure de mer,jaime le football");
};

infoAboutMe();

//Partie II: fonction à trois paramètres

function infoAboutPerson(personName,personAge,personFavoriteColor)
{
	console.log("votre nom est: "+personName+", vous avez: "+personAge+" ans, votre couleur favorite est: "+ personFavoriteColor);
}

infoAboutPerson("David",45,"blue");
infoAboutPerson("Josh",12,"yellow");


//Exercise 2: Conseils


// question 1
function calculateTip(){
	// question 2
	let montant = prompt( "Quel est le montant de la facture?");

	facture = Number(montant);
let pourcentage
// question 3 
if(facture < 50)
{
	pourcentage = 0.2
	 
}
else if(facture > 50 && facture < 200 )
{

  pourcentage = 0.15
}
else if(facture > 200 )
{
  pourcentage = 0.1
}
//question 4 
 const totalmontant = facture * (1 + pourcentage);
 console.log("montant",facture);
 console.log("montant total",totalmontant);
}
//question5
calculateTip();


//Exercise 3
//question 1

function isDivisible(divisor)
{
	let somme = 0;
	//question2

	for ( let nombre = 0 ; nombre < 500 ;  nombre ++ )
		if ( nombre % divisor === 0)
		{
			// question 3
		console.log("Outcome : " , nombre);

			somme +=  nombre;
		}

		// question 4
			console.log("La somme des nombres divisible par 23 est: ", somme);

};

//question 5
isDivisible(23);

//Exercice 4 : Liste De Courses
//question 1

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
//question2
 const  shoppingList = ["banana","orange","apple"];

//question3
 function myBill()
{
	//question 4

for(const article of shoppingList)

{
	const quantitee = stock[article];

	if( quantitee > 0)
	{
		const prix = prices[article];
		console.log('le prix de ', article," est : " , prix);
	}
	else{
		console.log("il n'ya pas de ",article,'en stock');
	}
}		
}
// question 5
myBill();


// exercise 5
//Créez une fonction nommée qui reçoit deux arguments :changeEnough(itemPrice, amountOfChange) le prix d’un article et un tableau représentant la quantité de monnaie dans votre poche.

function changeEnough(itemPrice, amountOfChange){

    const litedescoefficients = [0.25, 0.10, 0.05, 0.01];

    let nouveauprix = 0;

    // Verifier si amountOfChange est un array et a la meme taille que litedescoefficients
    if(Array.isArray(amountOfChange)  && litedescoefficients.length != amountOfChange.length)
    {
        return console.log("Veuillez fournir tableau de "+ litedescoefficients.length +"montant" );
    }

    for (let n = 0; n <amountOfChange.length; n++ ) {
        
        // recuperer le prix;
        let prix =  Number(amountOfChange[n]);

        //Verifier si l'element est un nombre sinon on l'attribue 0
        if (isNaN(prix)) {
            prix = 0;            
        }

        // Calcul du prix avec les coefficients
        nouveauprix = nouveauprix +  prix * litedescoefficients[n];

   }

   if (itemPrice <= nouveauprix) {
        return console.log(true);
   }else{
    return  console.log(false); 
   }
}


// question4
changeEnough(14.11, [2,100,0,0]);

changeEnough(0.75, [0,0,20,5]);

//Exercise 6

function hotelCost(){
    
    const cout = 140;
    let nombredenuits = undefined;

    do {
         nombredenuits = prompt('Nombre de nuité : ');
    } while (isNaN(nombredenuits));

    return console.log("le cout de l'hotel : " +  (Number(nombredenuits) * cout) );
}



function planeRideCost(){

    let destinations = {"Londres": 183, "Paris":220}
    let destination = undefined;
    let checker = true;

    do {
        destination = prompt('Votre destnation : ');
        let enleveespace = destination.trim();

        if(enleveespace.length > 0 && isNaN(enleveespace)){
            checker = false;
        }
    } while (checker);

    if (destinations[destination]) {
        return console.log("cout de l'hotel : " + destinations[destination]);
    } else {
        return console.log("le ticket est pour la destination de  : " + destination);
    }

}



function rentalCarCost(){

    const cout = 40;
    let nombredenuits = undefined;
    let resultat = 0;

    do {
        nombredenuits = prompt('Nombre de jours : ');
    } while (isNaN(nombredenuits));

    resultat = nombredenuits * cout;
    if (nombredenuits > 10) {
        resultat -= resultat * 0.05;
    }

    return console.log(" le cout du transport : " + resultat);
}



function totalVacationCost(){
    hotelCost();
    planeRideCost();
    rentalCarCost();
}

totalVacationCost()