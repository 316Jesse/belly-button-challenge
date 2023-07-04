var jsData;

function init(){
    var selector = d3.select("#selDataset");

    d3.json("static/samples.json").then((data) =>{
      jsData = data;
        var subjectID = data.names;
        subjectID.forEach((ID) => {
            selector
            .append('option')
            .text(ID)
            .property('value', ID);
        });
    