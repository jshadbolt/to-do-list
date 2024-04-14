import createEl from "../utility/createEl"

let createSelect = function(selectors, dataList) {

    let select = createEl(`select${selectors}`);

    dataList.forEach(value => {
        let opt = createEl('option');
        opt.value = value;
        opt.textContent = value;
        select.appendChild(opt);
    });

    return select;

}

export default createSelect;

