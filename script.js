let spellClasses = ["Artificer", "Bard","Cleric","Druid","Paladin","Sorceror","Warlock","Wizard"];//Classes with access to spells (sorted alphabetically)
let dmgTypes = ["N/A", "Acid", "Bludgeoning", "Cold", "Fire", "Force", "Lightning", "Necrotic", "Piercing", "Poison", "Psychic", "Radiant", "Slashing", "Thunder"];//Damage types of spells (sorted alphabetically)
let schools = ["Abjuration", "Conjuration", "Divination", "Enchantment", "Evocation", "Illusion", "Necromancy", "Transmutation"];
let castTimeStamps=["1 reaction", "1 bonus action", "1 action", "1 minute", "10 minutes", "1 hour", "8 hours", "1 day"]
let spellSource = ["PHB", "TCE", "XGE", "GGR", "SCAG", "EEPC", "EGW", "AI", "ID:RF", "SCC", "SAS", "LLK", "FTD"]
let Spell = function(name, dmg, school, level, ritual, conc, castTime, source, louisaYummy, classOpt, description){
  this.name=name;//String, name of the spell
  this.dmg=dmg;//Int Array, the indexes of the dmg type that the spell does (an array bc some have multiple i.e. Chromatic Orb)
  this.school=school;//Integer, the index of the schools array that the spell is in
  this.level=level;//Integer, level of the spell
  this.conc = conc;//Boolean,  is the spell concentration
  this.castTime = castTime//Integer, the index of the castTimeStamps array that the spell requires
  this.source = source;//Int, the index of the spellSource array that the spell is from
  this.louisaYummy= louisaYummy;//Boolean, does Louisa think that this spell is yummy?
  this.classOpt=classOpt;//Int Array, the indexes of the spellClasses array that the spell is available to
  this.description=description;//String, the description of the spell in the PHB or DMG
}
let spellList = []
spellList.push(new Spell("Acid Splash", [1], 1, 0, false, 0, 0, [4,6],"You hurl a bubble of acid. Choose one creature within range, or choose two creatures within range that are within 5 feet of each other. A target must succeed on a Dexterity saving throw or take 1d6 acid damage."))
spellList.push(new Spell("Blade Ward", [0], 0, false, false, 2, 0, true, [1, 5, 6, 7], "description"))
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
