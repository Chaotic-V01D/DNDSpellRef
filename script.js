let spellClasses = [];//Classes with access to spells (sorted alphabetically)
let dmgTypes = [];//Damage types of spells (sorted alphabetically)
let schools = [];
let Spell = function(name, dmg, school, level, ritual, conc, source, classOpt, description){
  this.name=name;//String, name of the spell
  this.dmg=dmg;//Int Array, the indexes of the dmg type that the spell does (an array bc some have multiple i.e. Chromatic Orb)
  this.school=school;//Integer, the index of the schools array that the spell is in
  this.level=level;//Integer, level of the spell
  this.conc = conc;//Boolean,  is the spell concentration
  this.source = source;//Boolean, false for PHB, true for DMG
  this.classOpt=classOpt;//Int Array, the indexes of the spellClasses array that the spell is available to
  this.description=description;//String, the description of the spell in the PHB or DMG
}
let spellList = []
spellList.push(new Spell("Acid Splash", 0, [0], [0], "A splash of acid erupts from a place of your choosing"))

function sortSpells(method){
  let sorted = false;
  while(!sorted){
    sorted=true;
    for(var i=0;i<spellList.length-1;i++){
      if(!(spellList[i][method]<spellList[i+1][method])){
        sorted=false;
        let temp=spellList[i]
        spellList[i+1]=spellList[i]
        spellList[i]=temp;
      }
    }
  }
}
