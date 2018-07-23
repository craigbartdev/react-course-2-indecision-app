class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handle = this.handle.bind(this);
        this.state = {
            visibility: false
        };
    }

    handle() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render() {
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handle}>
                    {this.state.visibility ? 'Hide Details' : 'Show Details'}
                </button>
                {
                    this.state.visibility && (
                        <div>
                            <p>These are some details</p>
                        </div>
                    )
                }
            </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

/*
console.log("toggle is running!");

let visibility = false;

const toggleVisibility = () => {
    visibility = !visibility;
    render();
};

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide details' : 'Show details'}
            </button> 
            {visibility && (
                <div>
                    <p>These are some details</p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById('app');
render();
*/