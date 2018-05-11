var http = require('http');  
    http.createServer(function(req, res){  
        var html = '<html>'  
        +'<head>'  
        +'<title>nodejs</title>'  
        +'</head>'  
        +'<body>'  
        +   'hello GuoHe! HaHa'  
        +'</body>'  
        +'</html>';  
        res.writeHead(200,{'Content-Type' : 'text/html'});  
        res.write(html);  
        res.end();  
    }).listen(8888);  