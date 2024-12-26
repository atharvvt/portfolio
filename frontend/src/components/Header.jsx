import logo from '../assets/pngwing.com.png';
const Header = () => {
    return (
        <header className="l-header">
            <nav className="nav bd-grid">
                <div>
                    <img  src={logo} alt="Logo" className="Header_logo" />
                </div>
                <div className="nav-menu" id="nav-menu">
                    <ul className="nav-list">
                        <li className="nav-item"><a href="#home" className="nav-link active">Home</a></li>
                        <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
                        <li className="nav-item"><a href="#skills" className="nav-link">Skills</a></li>
                        <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
                    </ul>
                </div>
                <div className="nav-toggle" id="nav-toggle">
                    <i className='bx bx-menu'></i>
                </div>
            </nav>
        </header>
    );
};


export default Header;