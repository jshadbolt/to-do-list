import createEl from "../utility/createEl"

let createSelect = function(dataList, id) {

    let select = createEl(`select#${id}`);

    dataList.forEach(value => {
        let opt = createEl('option');
        opt.value = value;
        opt.textContent = value;
        select.appendChild(opt);
    });

    return select;

}

export default createSelect;

