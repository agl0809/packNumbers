var SEPARATOR = ':';

function countNumbers(nums) {
    var arrCounted = [];
    var prev;

    nums.forEach(function (elem) {
        if (elem !== prev) {
            arrCounted.push(elem + SEPARATOR + 1);
            prev = elem;
        } else {
            var prevSplited = arrCounted[arrCounted.length - 1].split(SEPARATOR);

            arrCounted[arrCounted.length - 1] = prevSplited[0] + SEPARATOR + (parseInt(prevSplited[1], 10) + 1);
        }
    });

    return arrCounted;
}

function formatList(countList) {

    return countList.map(function (elem) {
        var elemSplited = elem.split(SEPARATOR);

        if (elemSplited[1] === '1') {
            return parseInt(elemSplited[0], 10);
        }

        return elem;
    });
}

function packNumbers(nums) {
    if (nums) {
        var arrCounted = countNumbers(nums);

        return formatList(arrCounted);
    }

    return [];
}
