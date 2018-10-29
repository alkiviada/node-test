export const logCalc = (b) => {
 const fs = require('fs');
 fs.readFile('../../assets/log.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
    let obj = JSON.parse(data); //now it an object
    if (obj.table) {
      console.log(b)
      obj.table.push({id: 2, square:3}); //add some data
    }
    else {
      console.log(b)
      obj.table = []
    }
    json = JSON.stringify(obj); //convert it back to json
    fs.writeFile('myjsonfile.json', json, 'utf8'); // write it back 
}});
 return 'Success'
}

export const loadQuotes = () => {
  const json = require('../../assets/json.json')
  const quotes = json.q
  return {quotes}
}

