let routes = {};
let templates = {};

let app_div = document.getElementById('app');

let home = () => {
    let div = document.createElement('div');
    let link = document.createElement('a');
    link.href = '#/about';
    link.innerText = 'About';
    div.innerHTML = '<h1>Home</h1>';
    div.appendChild(link);
    app_div.appendChild(div);
};

let about = () => {
    let div = document.createElement('div');
    let link = document.createElement('a');
    link.href = '#/';
    link.innerText = 'Home';
    div.innerHTML = '<h1>About</h1>';
    div.appendChild(link);
    app_div.appendChild(div);
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