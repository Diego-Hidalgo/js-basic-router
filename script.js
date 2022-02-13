let routes = {};
let templates = {};

let app_div = document.getElementById('app');

let home = () => {
    app_div.innerHTML = '<div><h1>Home</h1><a href=#/about>About</a></div>';
};

let about = () => {
    app_div.innerHTML = '<div><h1>About</h1><a href=#/>Home</a></div>';
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

template('home', function(){
    home();
});

template('about', function(){
    about();
});

route('/', 'home');
route('/about', 'about');

let resolveRoute = (route)=> {
    try{
        return routes[route];
    } catch (e) {
        throw new Error(`Route ${route} not found`);
    };
};

let router = ()=> {
    let url = window.location.hash.slice(1) || '/';
    let route = resolveRoute(url);
    route();
};

window.addEventListener('load', router);
window.addEventListener('hashchange', router);