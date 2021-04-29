document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        document.body = twemoji.parse(document.body);
    }
};
