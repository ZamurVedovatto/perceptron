var fs = require('fs');

module.exports = {
    readFile: function (file)
    {
        try {  
            var data = fs.readFileSync(file, 'utf8');
            return(data);    
        } catch(e) {
            console.log('Error:', e.stack);
        }        
    }
}