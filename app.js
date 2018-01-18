"use strict";

const jsonToYaml = require('json2yaml');
const fs = require('fs');

const app = function() {
    console.log("Hello");
    let rawdata = JSON.parse(fs.readFileSync("data/data.json"));
    rawdata.forEach(obj => {
        obj["size"] = JSON.stringify(obj).length;
    });
    let ymlText = jsonToYaml.stringify(rawdata);
    fs.writeFileSync("data/yamlData.yaml", ymlText);
};


app();