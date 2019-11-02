var os = require('os')
var fs = require('fs')
var osName = require('os-name')


var fileSystemFunctions = function() {

    this.getBrowserMetaData = function (browserCapibilities){

        var length = Object.keys(browserCapibilities).length;

        browserList = '';
        for(var i=0; i < length; i++) {
            temp = browserCapibilities[i].browserName + ",";
            browserList += temp
        }

        var text = 
        '<environment>\n' + 
        '   <parameter>\n' +
        '       <key>Browser(s)</key>\n' +
        '       <value>' + browserList.slice(0, -1) + '</value>\n' +
        '   </parameter>\n' +
        '   <parameter>\n' +
        '       <key>Operating System</key>\n' +
        '       <value>' + osName(os.platform(), os.release()) + '</value>\n' +
        '   </parameter>\n' +
        '   <parameter>\n' +
        '       <key>Host</key>\n' +
        '       <value>' + os.hostname + '</value>\n' +
        '   </parameter>\n' +
        '</environment>'                    

        var writeStream = fs.createWriteStream("tempFiles/environment.xml");
        writeStream.write(text);
        writeStream.end();

        setTimeout(function() {
            console.log('Gathering data of Test Environment');
        }, 3000);

    }

}

module.exports = new fileSystemFunctions();