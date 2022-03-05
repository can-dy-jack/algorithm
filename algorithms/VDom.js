/**
 * 渲染虚拟dom
 */
// virtual DOM
const vdom = {
    tag: "div",
    events: {
        onDblClick: () => console.log('虚拟DOM - div'),
    },
    props: {
        style: 'padding: 10px;margin: 50px;width: 200px;background: #eee;'
    },
    children: [
        {
            tag: "a",
            events: {
                onClick: () => confirm('虚拟DOM'),
            },
            props: {
                href: '#',
                style: 'background: #dfdfdf;'
            },
            children: "click me"
        },
        {
            tag: "span",
            children: "span"
        }
    ]
}
// 渲染函数
function render(vdom, container){
    const tag = document.createElement(vdom.tag);
    // events
    for(let event in vdom.events){
        if(/^on/.test(event)){
            tag.addEventListener(
                event.substring(2).toLowerCase(),
                vdom.events[event]
            )
        }
    }
    // props
    for(let prop in vdom.props){
        tag.setAttribute(prop,vdom.props[prop])
    }
    if(typeof vdom.children === 'string'){
        tag.appendChild(document.createTextNode(vdom.children));
    } else if(Array.isArray(vdom.children)){
        vdom.children.forEach(function (child){
            render(child,tag);
        });
    }
    container.appendChild(tag);
}
render(vdom,document.body);
