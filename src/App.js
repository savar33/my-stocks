
function App() {
  return (
    <div className="container-fluid">
      <div className='header'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
            <a className="navbar-brand" href="#">Stocks notebook</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#">My profile
                      <span className="sr-only">(current)</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Sign up</a>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="#">Sign in</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      
      <div className='main'>
        <h2>Stocks</h2>
      </div>

      <div className='footer'>
        <footer className="py-5 bg-dark">
          <div className="container">
              <p className="m-0 text-center text-white">Michael Mas Copyright &copy; Website 2020</p>
          </div>
        </footer>
      </div>

    </div>
  );
}

export default App;
