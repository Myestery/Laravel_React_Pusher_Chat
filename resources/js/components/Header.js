class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            UserName: "",
            csrf: "fre"
        };
        this.Logout=(event)=> {
            event.preventDefault()
            axios.post('/logout', {
                _token:this.state.csrf
            })
                .then(res => {
                history.go()
                console.log(res)
            })
            .catch(err => {
                console.error(err); 
            })
        }
    }
    componentDidMount() {
        axios.get("/username").then(res => {
            this.setState({
                UserName: res.data.username,
                csrf: res.data.csrf
            });
        });
    }
    
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary fixed-top">
                <a className="navbar-brand" href="/">
                    ChatApp
                </a>
                <button
                    className="navbar-toggler d-lg-none"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                ></button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" href="/home">
                                Home <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="dropdownId"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Dropdown
                            </a>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownId"
                            >
                                <a className="dropdown-item" href="#">
                                    Action 1
                                </a>
                                <a className="dropdown-item" href="#">
                                    Action 2
                                </a>
                            </div>
                        </li>
                    </ul>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        {/* <!-- Left Side Of Navbar --> */}
                        <ul className="navbar-nav mr-auto"></ul>

                        {/* <!-- Right Side Of Navbar --> */}
                        <ul className="navbar-nav ml-auto">
                            {/* <!-- Authentication Links --> */}
                            {this.state.UserName === null && (
                                <div>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/login">
                                            Login
                                        </a>
                                    </li>

                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            href="/register"
                                        >
                                            register
                                        </a>
                                    </li>
                                </div>
                            )}
                            {this.state.UserName != null && (
                                <li className="nav-item dropdown">
                                    <a
                                        id="navbarDropdown"
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        {this.state.UserName.toString()}
                                        <span className="caret"></span>
                                    </a>

                                    <div
                                        className="dropdown-menu dropdown-menu-right"
                                        aria-labelledby="navbarDropdown"
                                    >
                                        <a
                                            className="dropdown-item"
                                            href="/logout"
                                            onClick={this.Logout}
                                        >
                                            Logout
                                        </a>

                                        <form
                                            id="logout-form"
                                            action="'/logout"
                                            method="POST"
                                            style={{ display: "none" }}
                                        >
                                            <input
                                                type="hidden"
                                                id="input"
                                                className="form-control"
                                                value={this.state.csrf}
                                            />
                                        </form>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;
if (document.getElementById("header")) {
    ReactDOM.render(<Header />, document.getElementById("header"));
}
