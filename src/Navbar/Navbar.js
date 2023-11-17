import './Navbar.css';

function Navbar() {
    return (
        <div className='navbar_top_div'>
            <div className='navbar_top_inner_div'>
                <a href='/'>
                    <p>About</p>
                </a>
                <a href='/projects'>
                    <p>Projects</p>
                </a>
                <a href='/resume.pdf'>
                    <p>Resume</p>
                </a>
                <a href='https://github.com/aparyavi' target={'_blank'} rel="noreferrer">
                    <p>Github</p>
                </a>
            </div>
        </div >
    );
}

export default Navbar;
