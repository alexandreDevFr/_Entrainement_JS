/*
  Lord of the rings app
  For practice JS.
                        */



/*
  PERSONNAGES
             */
const Gandalf ={
  Nom : "Gandalf",
  Pv : 500,
  Atk : 30,
  Mage : 50,
  Mana : 275,
  Status : "En vie",
  Force : "Bien"
}

const Sauron ={
  Nom : "Sauron",
  Pv : 1200,
  Atk : 50,
  Mage : 50,
  Mana : 300,
  Status : "En vie",
  Force : "Mal"
}


let Bien = 'Vous faites partis du bon côté mon ami !'
let Mal = 'Vous êtes du côté de Morgoth ! Seigneur des ténèbres ! Hors de ma vue !'


var question;
var Force = prompt('Êtes vous du camps de la Lumière ou celui des ténèbres ?')
switch(Force){
  case 'Bien':
  console.log('Excellent choix ! Suivez la lumière');
  break;
  case 'Mal':
  console.log('Hmm, je vois, suivez les ténèbres et vous vous perderez !');
  break;
  default:
  console.log('Errer seul, tel un rôdeur du nord');
  break
}





/*

if(Gandalf.Force == 'Bien'){
  console.log("Vous faites partie du camp du Bien !");
}else{
  console.log("Vous faites partie du camp du Mal !");
}

*/


/*
if('in Gandalf.Force == 'Bien''){
  console.log("Vous faites partie du camp du Bien !");
}else{
  console.log("Vous faites partie du camp du Mal !");
}
*/


/* console.log("Gandalf ("+ Gandalf.Pv +"Pv) attaque Sauron ("+ Sauron.Pv +"Pv) !"); */

/* console.log("Gandalf à "+ Gandalf.Pv - Sauron.Atk +"Pv"); */
