export type Level = {
    title: string;
    color: string;
    icon: 'down' | 'up';
    imc: number[];
    yourImc?: number;
}

export const levels: Level[] = [
    { title: 'Magresa', color: '#96A3AB', icon: 'down', imc: [0, 18.5] },
    { title: 'Normal', color: '#0EAD69', icon: 'up', imc: [18.6, 24.9] },
    { title: 'Sobrepeso', color: '#E2B036', icon: 'down', imc: [25, 30] },
    { title: 'Obesidade', color: '#C3423F', icon: 'down', imc: [30.1, 99] },

];




export const calculteImc = (height: number, weight: number) => {
    const imc = weight / (height * height);

    for (let i in levels) {
        if (imc >= levels[i].imc[0] && imc < levels[i].imc[1]) {
            let levelCopy:Level = {...levels[i]};
            levelCopy.yourImc = parseFloat(imc.toFixed(2));
            return levelCopy;
        }
    }

    return null;


    // No exemplo acima, levels[i].imc é um array com dois valores: 0 e 18.5. Aqui está a explicação correta:

    // levels[i].imc[0]: Isso representa o limite inferior da faixa de IMC para o nível i no array levels.
    // levels[i].imc[1]: Isso representa o limite superior da mesma faixa de IMC para o nível i no array levels.
    // Portanto, levels[i].imc é um array de dois elementos, onde o primeiro elemento ([0]) é o limite inferior e o segundo elemento ([1])
    //  é o limite superior da faixa de IMC para o nível i em levels.

}