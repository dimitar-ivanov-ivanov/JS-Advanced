function validateRequest(request) {
    let methodOptions = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let specialChars = /^[^<>\\&'"]+$/g;
    let uriRegex = /\*|(^[a-zA-Z0-9.]+$)/g;

    if (request.method === undefined) {
        throw Error('Invalid request header: Invalid Method');
    }
    if (request.uri === undefined) {
        throw Error('Invalid request header: Invalid URI');
    }
    if (request.version === undefined) {
        throw Error('Invalid request header: Invalid Version');
    }
    if (request.message === undefined) {
        throw Error('Invalid request header: Invalid Message');
    }

    if (!methodOptions.includes(request.method)) {
        throw Error('Invalid request header: Invalid Method');
    }
    if (!uriRegex.test(request.uri) || request.uri === '') {
        throw Error('Invalid request header: Invalid URI');
    }
    if (!versions.includes(request.version)) {
        throw Error('Invalid request header: Invalid Version');
    }
    if (!specialChars.test(request.message) && request.message !== '') {
        throw Error('Invalid request header: Invalid Message');
    }

    return request;
}

validateRequest({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
});


validateRequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
});

/*validateRequest({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
});*/
