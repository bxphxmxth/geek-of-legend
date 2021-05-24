class Boss {
     constructor(nom, pv, pa) {
          this.nom = nom;
          this.pv = pv;
          this.pa = pa;
          this.attaquer = () => {

               if (this.pv <= 20) {
                    let tabEnigme = ["Au féminin, elle chasse la nuit et apporte la lumière, chez Homère, elle a des doigts de rose, dans les comptes pour enfants, elle se fait traquer par un individu maléfique. Qui suis-je?", " En amour ils sont appréciés, les mettre sur papier soulage le coeur. Qui suis-je?", "Elle est une amie, un guide, elle sera ta lumière lorsque que ce sera la fin mais pourtant tout le monde la craint. Qui est-elle ?"];

                    let randomEnigme = Math.floor(Math.random() * tabEnigme.length);

                    if(randomEnigme == 0){
                         let reponseEnigme = prompt(tabEnigme[randomEnigme]);

                         if(reponseEnigme == "aurore"){
                              alert("Tu as vaincu le boss, ah draré");
                         }else{
                              alert("raté, il te reste 2 chances, recommence");
                              let rep = prompt(tabEnigme[0]);
                              if(rep == "aurore"){
                                   alert("Tu as vaincu le boss, ah draré")
                              }else {
                                   alert("raté, il te reste 1 chance, recommence");
                                   let rep = prompt(tabEnigme[0])
                                   if(rep == "aurore"){
                                        alert("Tu as vaincu le boss, ah draré")
                                   }else{
                                        alert("Requiescat in pace")
                                   }
                              }
                     
                         }
                         
                    }else if (randomEnigme == 1){
                         let reponseEnigme = prompt(tabEnigme[randomEnigme]);

                         if(reponseEnigme == "les mots"){
                              alert("Tu as vaincu le boss, ah draré");

                         }else{
                              alert("raté, il te reste 2 chances, recommence");
                              let rep = prompt(tabEnigme[1]);
                              if(rep == "les mots"){
                                   alert("Tu as vaincu le boss, ah draré")

                              }else{
                                   alert("raté, il te reste 1 chance, recommence");
                                   let rep = prompt(tabEnigme[1])
                                   if(rep == "les mots"){
                                        alert("Tu as vaincu le boss, ah draré")
                                   }else{
                                        alert("Requiescat in pace")

                                   }

                              }
                         }

                    }else{
                         let reponseEnigme = prompt(tabEnigme[randomEnigme]);

                         if(reponseEnigme == "la mort"){
                              alert("Tu as vaincu le boss, ah draré");

                         }else{
                              alert("raté, il te reste 2 chances, recommence");
                              let rep = prompt(tabEnigme[1]);
                              if(rep == "la mort"){
                                   alert("Tu as vaincu le boss, ah draré")

                              }else{
                                   alert("raté, il te reste 1 chance, recommence");
                                   let rep = prompt(tabEnigme[1])
                                   if(rep == "la mort"){
                                        alert("Tu as vaincu le boss, ah draré")
                                   }else{
                                        alert("Requiescat in pace")

                                   }

                              }
                         }
                    }








                    // let reponseEnigme = prompt(tabEnigme[randomEnigme]);

                    // if (tabEnigme[randomEnigme] == 0 && reponseEnigme == "aurore" || "Aurore" || "l'aurore" || "L'aurore") {
                    //      alert("Tu as vaincu le boss.");
                    // } else if (tabEnigme[randomEnigme] == 1 && reponseEnigme == "Les mots" || "les mots" || "mots" || "Mots") {
                    //      alert("Tu as vaincu le boss.");
                    // } else if (tabEnigme[randomEnigme] == 2 && reponseEnigme == "La mort" || "la mort" || "mort" || "Mort") {
                    //      alert("Tu as vaincu le boss.");
                    // } else {
                    //      alert("Tu as échoué");
                    // }
               }
          }
     }
}
export { Boss };
class Sauron extends Boss{
     constructor(nom,pv,pa){
          super(nom, pv,pa);
     }
}

class Chronos extends Boss{
     constructor(nom,pv,pa){
          super(nom,pv,pa)
     }
}

class Lilith extends Boss{
     constructor(nom,pv,pa){
          super(nom,pv,pa);
     }
}




class Heros {
     constructor(nom, pv, pa) {
          this.nom = nom;
          this.pv = pv;
          this.pa = pa;
          this.defense = () => {
               this.pa = this.pa * 0.5;
               this.pv = this.pv * 2.5;
               return true;
          }
          this.attaque = () => {
               this.pa = this.pa * 1.4;
               this.pv = this.pv * 0.75;
               return true;
          }

     }
}

class Guerrier extends Heros{
     constructor(nom, pv, pa,pr){
          super(nom, pv,pa);
          this.pr = pr;
          this.defense = () =>{

          }
          this.attaque = () =>{

          }
     }
}

export {Guerrier};

// let tab = [7,9,11]; 

class Mage extends Heros{
     constructor(nom, pv, pa,pm){
          super(nom,pv,pa);
          this.pm = pm;
          // math.floor(Math.rondom()*tab.length)
          this.defense = () =>{

          }
          this.attaque = () =>{

          }
     }
}

export {Mage};

class Archer extends Heros{
     constructor(nom, pv, pa,nf){
          super(nom,pv,pa,nf);
          this.defense = () =>{

          }
          this.attaque = () =>{

          }
     }
}

export {Archer};

// utilise deux flèches du coup fera x2 attaque 

export { Heros };


