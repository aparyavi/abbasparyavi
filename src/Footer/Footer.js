import './Footer.css';
import { FaLinkedinIn, FaFile } from "react-icons/fa";
import { MdEmail } from 'react-icons/md'

function Footer() {
    return (
        <div id='contact'>
            <div className='home_page_top_div'>
                <h2 className='footer_info_connect_h2'>Contact</h2>
                <p className='footer_info_connect_p'>I'd Love To Connect With You.</p>

                <div className='footer_info_div'>
                    <div className='footer_info_indiv_div'>
                        <MdEmail size={40} color='white' />
                        <p className='footer_info_indiv_p'>Email Me At</p>
                        <a href='mailto:abbparyavi@gmail.com' target={'_blank'} rel="noreferrer">
                            <p>abbparyavi@gmail</p>
                        </a>
                    </div>

                    <div className='footer_info_indiv_div'>
                        <FaLinkedinIn size={40} color='white' />
                        <p className='footer_info_indiv_p'>Let's Connect</p>
                        <a href='https://www.linkedin.com/in/abbas-paryavi/' target={'_blank'} rel="noreferrer">
                            <p>linkedIn Profile</p>
                        </a>
                    </div>

                    <div className='footer_info_indiv_div'>
                        <FaFile size={40} color='white' />
                        <p className='footer_info_indiv_p'>My Resume</p>
                        <a href='/resume.pdf' target={'_blank'} rel="noreferrer">
                            <p>Resume</p>
                        </a>
                    </div>
                </div>
            </div>

            <p className='copyright'>Copyright © 2023 Abbas Paryavi.</p>
        </div >
    );
}

export default Footer;
