function ranking(count, name) {
    var nameAndCount = {
        name: name,
        count: count
    };
    nameAndCountArray.push(nameAndCount);
    nameAndCountArray.sort(NumberCompare);
    var rankingElem = document.getElementById("ranking");
    var printArray = [];
    for (var i = 0; i < nameAndCountArray.length; i++) {
        if (i >= 5) {
            break;
        }
        printArray.push((i + 1) + '등 : ' + nameAndCountArray[i].name + " " + nameAndCountArray[i].count + '회');
    }
    rankingElem.innerHTML = printArray.join("<br/>");
}
function NumberCompare(a, b) {
    return a.count - b.count;
}