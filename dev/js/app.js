var App = {};

App.componentRes = {};

App.getFileExt = function(filename) {
    var index1 = filename.lastIndexOf(".")
    var index2 = filename.length;
    return filename.substring(index1, index2).toLowerCase();
}

App.loadFile = function (tpl, css, callback) {
    if (arguments.length === 2) {
        css(App.componentRes[tpl]);
    } else {
        callback(App.componentRes[tpl],App.componentRes[css]);
    }
}
