const Header = ({ onSwitchScreen }) => {
    const handleSwitchScreen = (e) => {
        if (e.target.id === 'browse') {
            onSwitchScreen('browse');
        }
        else if (e.target.id === 'portfolio') {
            onSwitchScreen('portfolio');
        }
        else {
            onSwitchScreen('home')
        }
    }
    return (
      <div id="header">
        <div className="header-item">

            <button
                id="home"
                className="home-btn btn"
                onClick={handleSwitchScreen} >
            HOME
            </button>
        </div>
        <div className="header-item">

            <button
                id="browse"
                className="browse-btn btn"
                onClick={handleSwitchScreen} >
            BROWSE
            </button>
        </div>
        <div className="header-item">

            <button
                id="portfolio"
                className="portfolio-btn btn"
                onClick={handleSwitchScreen} >
            MY PORTFOLIO
            </button>
        </div>
      </div>
    );
};
export default Header;