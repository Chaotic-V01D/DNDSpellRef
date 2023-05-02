let spellClasses = [];
let dmgTypes = [];
let Spell = function(name, level, classOpt, dmg, description){
  this.name=name;//String, name of the spell
  this.level=level;//Integer, level of the spell
  this.classOpt=classOpt;//Int Array, the indexes of the spellClasses array that the spell is available to
  this.dmg=dmg;//Int Array, the indexes of the dmg type that the spell does (an array bc some have multiple i.e. Chromatic Orb)
  this.description=description;//String, the description of the spell in the PHB or DMG
}
