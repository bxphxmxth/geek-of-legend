class Boss{
     constructor(nom,pv,pa){
          this.nom = nom;
          this.pv = pv;
          this.pa = pa;
          this.attaquer = () =>{
               pa = 100;
               if(this.pv <= 20){
                   let tabEnigme = ["Au féminin, elle chasse la nuit et apporte la lumière, chez Homère, elle a des doigts de rose, dans les comptes pour enfants, elle se fait traquer par un individu maléfique. Qui suis-je?", " En amour ils sont appréciés, les mettre sur papier soulage le coeur. Qui suis-je?", "Elle est une amie, un guide, elle sera ta lumière lorsque que ce sera la fin mais pourtant tout le monde la craint. Qui est-elle ?"];
                   Math.floor(Math.random()*tabEnigme.length);
                   alert(tabEnigme[Math.floor(Math.random()*tabEnigme.length)])

               }
          }
     }
}

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

export {Boss};


class Heros{
     constructor(nom, pv,pa,pr){
          this.nom = nom; 
          this.pv = pv;
          this.pa = pa;
          this.pr = pr;
          this.defense = (pa,pv) =>{
               pa = pa*0.5;
               pv = pv*0.75
               return true;
          }
          this.attaque = () =>{
               pa = pa*1.4;
               pv = pv*0.75;
               return true;
          }

     }
}

