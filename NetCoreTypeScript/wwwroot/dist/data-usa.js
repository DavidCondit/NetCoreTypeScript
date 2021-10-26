function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
    .then(response => response.json())
    .then(data => {
    console.log(data);
    for (var i = 0; i < data.data.length; i++) {
        let dataItem = data.data[i];
        let body = document.getElementsByTagName('body')[0];
        let p = document.createElement('p');
        p.innerHTML = `${dataItem.Year} - ${numberWithCommas(dataItem.Population)}`;
        body.appendChild(p);
    }
});
//# sourceMappingURL=data-usa.js.map