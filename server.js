const app = require('express')();

app.get('/', (req, res) => {
    const { domain, path, cookie } = req.query;

    const nextHourDate = new Date(new Date().getTime() + 3600000);

    const setCookieString = `Cloud-CDN-Cookie=${cookie}; Expires=${nextHourDate.toUTCString()}; Domain=${domain}; Path=${path}; httpOnly`;
    res.setHeader('Set-Cookie', setCookieString).send(setCookieString);
});

app.get('/path1', (req, res) => {
    res.send(req.headers.cookie);
});
app.get('/path1/path11', (req, res) => {
    res.send(req.headers.cookie);
});
app.get('/path1/path11/path111', (req, res) => {
    res.send(req.headers.cookie);
});

app.get('/path2', (req, res) => {
    res.send(req.headers.cookie);
});

app.get('/path3', (req, res) => {
    res.send(req.headers.cookie);
});

app.listen(8080, () => {
    console.log('Listening on port 8080');
});
