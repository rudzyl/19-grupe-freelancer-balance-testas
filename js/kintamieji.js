function renderMenesiai(selecotr, data) {
    const menesiaiDOM = document.querySelector (selecotr);
    if (!menesiaiDOM) {
        return false;
    }
    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if (!item) {
            continue;
        }
        // const pavadinimas = [
        //     {menesis: 'spalis'},
        //     {menesis: 'sausis'},
        //     {menesis: 'kovas'},
        //     {menesis: 'liepa'},
        //     {menesis: 'vasaris'},
        //     {menesis: 'geguze'},
        //     {menesis: 'geguze'},
        //     {menesis: 'rugsejis'},
        //     {menesis: 'birzelis'},
        //     {menesis: 'lapkritis'},
        //     {menesis: 'rugpjutis'},
        //     {menesis: 'gruodis'}
        // ];
        // if(!pavadinimas) {
        //     continue;
        // }
    

    HTML += `<div class="table-row">
                <div class="cell">${item.month}</div>
                <div class="cell">${item.menesis}</div>
                <div class="cell">${item.income} Eur</div>
                <div class="cell">${item.expense}</div>
                <div class="cell">150.00 Eur</div>
            </div>`
    }
    if (HTML === '') {
        return false;
    }
    menesiaiDOM.innerHTML += HTML;
    return true;
}

export { renderMenesiai }