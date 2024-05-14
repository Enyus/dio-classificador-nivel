const { deflate } = require('zlib');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let hero = {
    name: '',
    xp: 0,
    nivel: ''
}

readline.question(`Qual o nome do Herói? -> `, heroName => {
    hero.name = heroName;
    readline.question(`Qual a quantidade de XP do Herói? ->`, heroXp => {
        hero.xp = Number(heroXp);

        if (isNaN(hero.xp)) {
            console.log("A quantidade de XP do herói deve ser um número!");
            return readline.close();
        } else if (hero.xp <= 1000 ) {
            hero.nivel = 'Ferro';
        } else if (hero.xp <= 2000) {
            hero.nivel = 'Bronze';
        } else if (hero.xp <= 5000) {
            hero.nivel = 'Prata';
        } else if (hero.xp <= 7000) {
            hero.nivel = 'Ouro';
        } else if (hero.xp <= 8000) {
            hero.nivel = 'Platina';
        } else if (hero.xp <= 9000) {
            hero.nivel = 'Ascendente';
        } else if (hero.xp <= 10000) {
            hero.nivel = 'Imortal';
        } else {
            hero.nivel = 'Radiante';
        }

        console.log(`O Herói de nome ${hero.name} está no nível de ${hero.nivel}.`)
        readline.close();
    });
});
