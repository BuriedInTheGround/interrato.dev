document.addEventListener('readystatechange', (event) => {
    if (document.readyState === 'complete') {
        document.body = twemoji.parse(document.body);
    }
});
