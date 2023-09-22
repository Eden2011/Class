"use strict";

class Pokemon{//permet de créer une classe avec des valeurs selon la variable
    constructor(nom,atk,def,hp,luck){//ajout des différentes variables qui seront présentes dans la classe
        this.name=nom
        this.attaque=atk
        this.defense=def
        this.hp=hp
        this.luck=luck
    }
    attackPokemon(pokemon){//tout ce qui sera dans cette accolade permet de créer une attaque
        if(this.isLucky()){//l'attaque se repose sur la chance
            let damage=this.attaque-pokemon.defense//les dégâts correspondent à notre attaque- la défense adverse
            pokemon.hp-=damage//les PV correspondent à -dégats
            console.log(this.name+" a attaqué "+pokemon.name+" pour "+damage+" de dégâts, il lui reste "+pokemon.hp+" points de vie");
        }else {
            console.log(this.name+" a raté son attaque!");
        }
    }
    isLucky(){
        return this.luck>Math.random()//l'attaque sera faite ou non de manière aléatoire (une chance entre 0 et 1)
    }
}
let mimiqui=new Pokemon("Mimiqui",14,8,100,0.5);//les chiffres correspondent à atk, def, hp et luck du constructor
let flamiaou=new Pokemon("Flamiaou",18,4,70,0.8);

while(mimiqui.hp >0 && flamiaou.hp>0){//tant que les PV des pokemons sont sup à 0 le combat continue
    mimiqui.attackPokemon(flamiaou)//mimiqui attaque flamiaou
    if(flamiaou.hp<=0){//si les PV de flamiaou tombent à 0, il est K.O, le combat est terminé
        console.log(flamiaou.name+" est K.O!");
        break;//la boucle est coupée
    }
    flamiaou.attackPokemon(mimiqui)//flamiaou attaque mimiqui
    if(mimiqui.hp<=0){//si les PV de mimiqui tombent à 0, il est K.O, le combat est terminé
        console.log(mimiqui.name+" est K.O!");
        break
    }
}
