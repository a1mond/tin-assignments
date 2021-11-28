const http = require('http');
const pages = require('./pages');
const URL = require('url').URL;

const server = http.createServer((req, res) => {
    const url = req.url;
    const parsed_url = new URL(req.url, `http://${req.headers.host}`);
    const query = parsed_url.searchParams;

    const method = req.method;

    if (url === '/' && method === 'GET') {
        res.write(pages.startPage());

        return res.end();
    } else if (url.includes('/calc') && method === 'POST') {
        const num1 = query.get('num1');
        const num2 = query.get('num2');
        
        if (num1 === null || num2 === null) {
            res.end();
        } else {
            const { add, sub, mult, div } = operations(num1, num2);
            res.write(pages.calcPage(add, sub, mult, div));

            return res.end();
        }
    }

    return res.end();
});

const operations = (num1, num2) => {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    return {
        add: num1 + num2,
        sub: num1 - num2,
        mult: num1 * num2,
        div: num1 / num2
    }
}

server.listen(8080);