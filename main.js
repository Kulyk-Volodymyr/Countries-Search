let searchQuery = document.getElementById('search-select');
let table = document.querySelector("table");
let caption = document.createElement("caption");

let getcountriesList = [];

function switchRadio(data) {
    searchQuery.removeAttribute("disabled");
    if (document.getElementsByTagName("option").length > 1) {
        while (searchQuery.firstChild) {
            searchQuery.removeChild(searchQuery.lastChild);
        }
        let selectValue = document.createElement("option");
        selectValue.innerText = "Select value";
        searchQuery.appendChild(selectValue);
    }
    if (table.firstChild !== null) {
        while (table.firstChild) {
            table.removeChild(table.lastChild);
        }
    }
    for (i of data) {
        let optionValue = document.createElement("option");
        optionValue.textContent = i;
        optionValue.setAttribute("onclick", `getTableCaption('${i}')`);
        searchQuery.appendChild(optionValue);
    }
}

function getTableCaption(value) {
    if (getRegionsList.includes(value)) {
        caption.innerText = `Region: ${value}`;
        table.appendChild(caption);
        if (document.getElementsByTagName("thead").length === 0) {
            drawTableHeader('region');
        }
        let countries = [];
        for (i of countriesList) {
            if (i.region === value) countries.push(i);
        }
        for (i of countries) delete i.region;
        countries.sort(sortList);
        getcountriesList = countries;
        drawTableBody(getcountriesList);
    } else {
        caption.innerText = `Languague: ${value}`;
        table.appendChild(caption);
        if (document.getElementsByTagName("thead").length === 0) {
            drawTableHeader('languague');
        }
        let countries = [];
        for (i of countriesList) {
            if (i.languages.includes(value)) countries.push(i);
        }
        countries.sort(sortList);
        getcountriesList = countries;
        drawTableBody(getcountriesList);
    }
}

function sortList( a, b ) {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
}

function drawTableHeader(data) {
    let tHead = document.createElement("thead");
    let tRow = document.createElement("tr");
    table.appendChild(tHead);
    tHead.appendChild(tRow);
    let headers = ['Country', 'Capital', 'World region', 'Languages', 'Flag'];
    if (data === 'region') headers.splice(2, 1);
    for (i of headers) {
        let tHeadData = document.createElement("th");
        tHeadData.innerHTML = i;
        if (i === 'Country') {
            let arrow = document.createElement("span");
            arrow.id = "name-arrow";
            arrow.onclick = arrowClick;
            arrow.innerHTML = "&#8593";
            tHeadData.innerHTML += ' ';
            tHeadData.appendChild(arrow);
        }
        tRow.appendChild(tHeadData);
    }
}

function arrowClick() {
    let arrow = document.getElementById("name-arrow");
    if (arrow.innerHTML.charCodeAt() === 8593) {
        arrow.innerHTML = "&#8595";
    } else {
        arrow.innerHTML = "&#8593";
    }
    getcountriesList.reverse();
    drawTableBody(getcountriesList);
}

function drawTableBody(data) {
    if (document.getElementsByTagName("tbody").length !== 0) {
        while (document.getElementsByTagName("tbody").length !== 0) {
            table.removeChild(document.getElementsByTagName("tbody")[0]);
        }
    }
    let tBody = document.createElement("tbody");
    table.appendChild(tBody)
    for (let i = 0; i < data.length; i++) {
        let tRow = document.createElement("tr");
        tBody.appendChild(tRow);
        let tDName = document.createElement("td");
        tDName.innerText = data[i].name;
        tRow.appendChild(tDName);
        let tDCapital = document.createElement("td");
        tDCapital.innerText = data[i].capital;
        tRow.appendChild(tDCapital);
        if (data[i].region != undefined) {
            let tDRegion = document.createElement("td");
            tDRegion.innerText = data[i].region;
            tRow.appendChild(tDRegion);
        }
        let tDLanguages = document.createElement("td");
        tDLanguages.innerText = data[i].languages.join(', ');
        tRow.appendChild(tDLanguages);
        let tDFlag = document.createElement("td");
        let flag = document.createElement("img");
                flag.setAttribute("src", `${data[i].flagPic}`);
                flag.setAttribute("alt", `${data[i]['name']}'s flag`);
                tDFlag.appendChild(flag);
        tRow.appendChild(tDFlag);
    }
}
