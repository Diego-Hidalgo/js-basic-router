let routes = {};
let templates = {};

let app_div = document.getElementById('app');

let home = () => {

};

let about = () => {

};

let route = (path, template) => {
    if (typeof template === 'function') {
        return routes[path] = template;
    }
    else if (typeof template === 'string') {
        return routes[path] = templates[template];
    } else {
        return;
    };
};

let template = (name, templateFunction) => {
    return templates[name] = templateFunction;
};

let resolveRoute = (route)=> {
    try{
        return routes[route];
    } catch (e) {
        throw new Error(`Route ${route} not found`);
    };
};