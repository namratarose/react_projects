function renderElement(reactElement,container){
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML=reactElement.children;
    // domElement.setAttribute("href",reactElement.props.href);
    // domElement.setAttribute("target",reactElement.props.target);
    for(prop in reactElement.props){
        if(prop!==reactElement.children)
        domElement.setAttribute(prop,reactElement.props[prop]);
    }
    container.appendChild(domElement);
}

const reactElement={
    type:"a",
    props:{
        href:"https://www.google.com/",
        target:"_blank"
    },
    children:"Google"
}

const reactElement2={
    type:"button",
    props:{
        id:"btn",
        class:"button"
    },
    children:"Click me"
}

const mainContainer=document.getElementById("root");
renderElement(reactElement,mainContainer);
renderElement(reactElement2,mainContainer);