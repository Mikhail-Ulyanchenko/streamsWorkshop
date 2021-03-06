const fs = require('fs');

console.time('read');
console.timeLog('read', 'reading the file');

const bigJson = fs.readFileSync('./citylots.json');

console.timeEnd('read');

console.time('parse');
console.timeLog('parse', 'parsing JSON');

const parsedJson = JSON.parse(bigJson);

console.timeEnd('parse');

/**
 {
     'type': 'FeatureCollection',
     'features': [
         {'type': 'Feature',
             'properties': {
                 'MAPBLKLOT': '0001001',
                 'BLKLOT': '0001001',
                 'BLOCK_NUM': '0001',
                 'LOT_NUM': '001',
                 'FROM_ST': '0',
                 'TO_ST': '0',
                 'STREET': 'UNKNOWN',
                 'ST_TYPE': null,
                 'ODD_EVEN': 'E'
             },
             'geometry': {
                 'type': 'Polygon',
                 'coordinates': [[[-122.422003528252475, 37.808480096967251, 0.0], [-122.422076013325281, 37.808835019815085, 0.0], [-122.421102174348633, 37.808803534992904, 0.0], [-122.421062569067274, 37.808601056818148, 0.0], [-122.422003528252475, 37.808480096967251, 0.0]]]
             }
         }
         ...
 */