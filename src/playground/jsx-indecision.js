console.log("app.js is running!");

//JSX - JavaScript XML
const app = {
    title : "Indecision App",
    subtitle: "This is some more info",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault(); //prevent default refresh
    //target is form in this case. where event started
    //option is name of child element
    //value is the value inputed to option element
    const option = e.target.elements.option.value;

    if (option) { //if content inside input run
        app.options.push(option); //add to options array
        e.target.elements.option.value = ''; //reset input
    }
    renderApp();
};

const removeAll = () => {
    app.options = [];
    renderApp();
}
//generate random number from 0 to length - 1 and select index.
const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "Here are your options" : "No Options"}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            
            <ol>
                {/*map over app.options to show options*/}
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('app');
renderApp();