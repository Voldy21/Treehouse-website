var fs = require('fs');


function mergeContent(values, content){
    for(let key in values){
        content = content.replace("{{" + key + "}}", values[key]);
    }
    return content;
}

function view(templateName, values, response){
    var fileContents = fs.readFileSync('./views/' + templateName + '.html', {encoding: "utf8"}); 
    fileContents = mergeContent(values, fileContents);
    response.write(fileContents);
}

module.exports.view = view;