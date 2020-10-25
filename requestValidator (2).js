function requestValidator(object){
   /// ^([a-zA-Z0-9+.]+) regex for URI ******* 
        let methodObj = object.method; //  GET, POST, DELETE or CONNECT
        let uriObj = object.uri; /// cant equal ' ' * okay [a-z]\.
        let versionObj = object.version; // HTTP/0.9, HTTP/1.0, HTTP/1.1 or HTTP/2.0 
        let messageObj = object.message; // can be empty  cant have - <, >, \, &, ', "
        const uriRegex = /^([a-zA-Z0-9+.]+)/gm;
        const messageRegex = /(?!&)(?!")(?!')(?!\()^(^$|[\^&a-zA-Z0-9+. ^$ -\/:]+)/gm;
        if (methodObj == 'GET'||methodObj == 'POST'||methodObj == 'DELETE' ||methodObj == 'CONNECT') {
        }   else {
            throw new Error('Invalid request header: Invalid Method');
        }
        if (uriRegex.test(uriObj)) {
        }   else {
            throw new Error('Invalid request header: Invalid URI');
        }
        if (versionObj == 'HTTP/0.9' ||versionObj == 'HTTP/1.0'||versionObj == 'HTTP/1.1'||versionObj =='HTTP/2.0') {
        }   else {
            //throw new Error('Invalid request header: Invalid Version');
            return ('Invalid request header: Invalid Version')
        }
        if (messageRegex.test(messageObj)) {
        }   else {
            throw new Error('Invalid request header: Invalid Message');
        }

            return object;


}
module.exports = requestValidator



// requestValidator(
// {
//     method: 'GET',
//     uri: 'svn.public.catalog',
//     version: 'HTTP/1.1',
//     message: ''
// }
// // {
// //     method: 'POST',
// //     uri: 'home.bash',
// //     message: 'rm -rf /*'
// //    }
// )