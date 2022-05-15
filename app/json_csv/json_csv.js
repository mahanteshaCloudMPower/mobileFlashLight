export const json_to_csv = (obj, filename, opt) => {
    if (typeof obj !== 'object') return null;
    opt = opt || {};
    let scopechar = opt.scopechar || ':';
    let delimeter = opt.delimeter || ',';
    if (Array.isArray(obj) === false) obj = [obj];
    let curs, name, rownum, key, queue, values = [], rows = [], headers = {}, headersArr = [];
    for (rownum = 0; rownum < obj.length; rownum++) {
        queue = [obj[rownum], ''];
        rows[rownum] = {};
        while (queue.length > 0) {
            name = queue.pop();
            curs = queue.pop();
            if (curs !== null && typeof curs === 'object') {
                for (key in curs) {
                    if (curs.hasOwnProperty(key)) {
                        queue.push(curs[key]);
                        queue.push(name + (name ? scopechar : '') + key);
                    }
                }
            } else {
                if (headers[name] === undefined) headers[name] = true;
                rows[rownum][name] = curs;
            }
        }
        values[rownum] = [];
    }
    // create csv text
    for (key in headers) {
        if (headers.hasOwnProperty(key)) {
            headersArr.push(key);
            for (rownum = 0; rownum < obj.length; rownum++) {
                values[rownum].push(rows[rownum][key] === undefined
                    ? ''
                    : JSON.stringify(rows[rownum][key]));
            }
        }
    }
    for (rownum = 0; rownum < obj.length; rownum++) {
        values[rownum] = values[rownum].join(delimeter);
    }
    let csvFile =  '"' + headersArr.join('"' + delimeter + '"') + '"\n' + values.join('\n');
    let blob = new Blob([csvFile], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, filename);
    } else {
        let link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            let url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", filename);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}