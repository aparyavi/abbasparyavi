import React, { useState, useEffect } from 'react';
import './Home.css';
import { MdLocationOn, MdEmail } from 'react-icons/md'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFile } from "react-icons/fa";

function Home() {
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        document.title = "Abbas Paryavi";
    }, []);


    function clipboardCopied() {
        document.getElementById('clipboard_copied_message_div').style.display = 'inherit'

        setTimeout(function () {
            document.getElementById('clipboard_copied_message_div').style.display = 'none'
        }, 2000);
    }

    function mouseOverImg() {
        if (!flipped) {
            setFlipped(true);
            document.getElementById('profile_img').style.filter = 'brightness(.5) blur(5px)'

            setTimeout(function () {
                setFlipped(false);
                document.getElementById('profile_detail_div').style.display = 'initial'
            }, 200);
        }
    }
    function mouseLeaveImg() {
        setFlipped(true);
        document.getElementById('profile_img').style.filter = 'blur(0)'

        setTimeout(function () {
            setFlipped(false);
            document.getElementById('profile_detail_div').style.display = 'none'
        }, 200);

        // scrollImageFunction(true)
    }

    function toCodeStyle(text) {
        // Split the text into an array of words
        const words = text.split(' ');

        // Map over the words, wrapping the target word in a span with a specific class
        const highlightedText = words.map((word, index) => (
            word.toLowerCase() === 'From'.toLowerCase()
                || word.toLowerCase() === 'With'.toLowerCase()
                || word.toLowerCase() === 'Node'.toLowerCase()
                || word.toLowerCase() === 'Express'.toLowerCase()
                || word.toLowerCase() === 'science'.toLowerCase()
                || word.toLowerCase() === 'Js,'.toLowerCase() ? (
                <span key={index} className="purple_coding_text">
                    {word + " "}
                </span>
            ) : word.toLowerCase() === 'and'.toLowerCase()
                || word.toLowerCase() === 'NumPy,'.toLowerCase()
                || word.toLowerCase() === 'Majority'.toLowerCase() ? (
                <span key={index} className="blue_coding_text">
                    {word + " "}
                </span>
            ) : word.toLowerCase() === 'creating'.toLowerCase()
                || word.toLowerCase() === 'application'.toLowerCase()
                || word.toLowerCase() === 'Customized'.toLowerCase()
                || word.toLowerCase() === 'infrastructure'.toLowerCase()
                || word.toLowerCase() === 'software'.toLowerCase()
                || word.toLowerCase() === 'PostgreSQL,'.toLowerCase() ? (
                <span key={index} className="red_coding_text">
                    {word + " "}
                </span>
            ) : (
                <span key={index}>
                    {word + " "}
                </span>
            )
        ));

        return highlightedText
    }

    function experience(num, company, title, date) {
        return (
            <div>
                {num === 1 ?
                    <a href='https://idc-a.org/' className='home_page_indiv_company_a' target={'_blank'} rel="noreferrer">
                        <p id='home_page_indiv_company_a_p'>{company}</p>
                    </a> :
                    <p id='home_page_indiv_company'>{company}</p>
                }

                <div className='home_page_indiv_title_date_small_wind_div'>
                    <p>{title}</p>
                    <div className='home_page_indiv_title_date_small_wind_diviver'></div>
                    <p>{date}</p>
                </div>

                {num === 1 ?
                    <div>
                        <ul className='home_page_description_coding'>
                            <li>{toCodeStyle('Developed an in-house web application which includes a full CMS for admin access, user portal with event and course registration capabilities, and a membership platform')}</li>
                            <li>{toCodeStyle('Integrated an open-source forum application (NodeBB) onto the membership platform running on Azure VM')}</li>
                            <li>{toCodeStyle('Integrated Zoom registration and emailing capabilities with event registration saving 15 hours of monthly manual work from employees')}</li>
                            <li>{toCodeStyle('Setup and integrated Salesforce CRM and MarketingCloud for email marketing. Customized lead, contact, and opportunity objects for salesforce users, and automated reporting for sales representatives. Automated MarketingCloud email subscriber lists based on demographics and other criteria')}</li>
                        </ul>
                        <p className='home_page_description_coding_tools'>
                            <span className='home_page_description_coding_tools_span'>Tools:</span>
                            {toCodeStyle(' React, HTML/CSS, JavaScript, Node JS, Express JS, Azure VM, Azure Functions, Firebase, Firebase Cloud Functions, GitHub, REST APIs, and Salesforce')}</p>
                    </div>
                    : num === 2 ?
                        <div>
                            <ul className='home_page_description_coding'>
                                <li>{toCodeStyle('Analyzed and rendered the computer science building’s collected data, to ensure that the air conditioning systems as well as the lighting systems operate more efficiently')}</li>
                            </ul>
                            <p className='home_page_description_coding_tools'>
                                <span className='home_page_description_coding_tools_span'>Tools:</span>
                                {toCodeStyle(' Python, NumPy, Pandas, Matplotlib')}</p>

                        </div>
                        :
                        <ul className='home_page_description_coding'>
                            <li>{toCodeStyle('Audited IOT’s (Indiana Office of Technology) three main data centers infrastructure finding numerous design and implementation flaws by shadowing expert auditors')}</li>
                            <li>{toCodeStyle('Assisted with technical content development and editing of one of the engineering courses')}</li>
                        </ul>
                }
            </div>
        )
    }

    function experienceDetail(title, date, location) {

        return (
            <div className='home_page_indiv_title_date_div'>
                <p id='home_page_indiv_title'>{title}</p>
                <p id='home_page_indiv_date'>{date}</p>
            </div>
        )
    }

    const [isVisibleAboutImg, setIsVisibleAboutImg] = useState(false);
    const [isVisibleAboutText, setIsVisibleAboutText] = useState(false);

    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
    const [isVisible3, setIsVisible3] = useState(false);

    const [isVisibleProj1, setIsVisibleProj1] = useState(false)
    const [isVisibleProj2, setIsVisibleProj2] = useState(false)
    const [isVisibleProj3, setIsVisibleProj3] = useState(false)
    const [isVisibleProj4, setIsVisibleProj4] = useState(false)
    const [isVisibleProj5, setIsVisibleProj5] = useState(false)
    const [isVisibleProj6, setIsVisibleProj6] = useState(false)
    const [isVisibleProj7, setIsVisibleProj7] = useState(false)
    const [isVisibleProj8, setIsVisibleProj8] = useState(false)

    useEffect(() => {
        const handleScroll = () => {

            const elementAboutImg = document.getElementById('profile_img_div');
            if (elementAboutImg) {
                const elementPosition = elementAboutImg.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (elementPosition < windowHeight) {
                    setIsVisibleAboutImg(true);
                }
            }

            const elementAbout = document.getElementById('transition-object-about-text');
            if (elementAbout) {
                const elementPosition = elementAbout.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (elementPosition < windowHeight) {
                    setIsVisibleAboutText(true);
                }
            }

            const element1 = document.getElementById('transition-object-1');
            if (element1) {
                const elementPosition = element1.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (elementPosition < windowHeight) {
                    setIsVisible1(true);
                }
            }
            const element2 = document.getElementById('transition-object-2');
            if (element2) {
                const elementPosition = element2.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (elementPosition < windowHeight) {
                    setIsVisible2(true);
                }
            }
            const element3 = document.getElementById('transition-object-3');
            if (element3) {
                const elementPosition = element3.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (elementPosition < windowHeight) {
                    setIsVisible3(true);
                }
            }


            const project1 = document.getElementById('project-1');
            if (project1) {
                const elementPosition = project1.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (elementPosition < windowHeight) {
                    setIsVisibleProj1(true);
                }
            }
            const project2 = document.getElementById('project-2');
            if (project2) {
                const elementPosition = project2.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (elementPosition < windowHeight) {
                    setIsVisibleProj2(true);
                }
            }
            const project3 = document.getElementById('project-3');
            if (project3) {
                const elementPosition = project3.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (elementPosition < windowHeight) {
                    setIsVisibleProj3(true);
                }
            }
            const project4 = document.getElementById('project-4');
            if (project4) {
                const elementPosition = project4.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (elementPosition < windowHeight) {
                    setIsVisibleProj4(true);
                }
            }
            const project5 = document.getElementById('project-5');
            if (project5) {
                const elementPosition = project5.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (elementPosition < windowHeight) {
                    setIsVisibleProj5(true);
                }
            }
            const project6 = document.getElementById('project-6');
            if (project6) {
                const elementPosition = project6.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (elementPosition < windowHeight) {
                    setIsVisibleProj6(true);
                }
            }
            const project7 = document.getElementById('project-7');
            if (project7) {
                const elementPosition = project7.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (elementPosition < windowHeight) {
                    setIsVisibleProj7(true);
                }
            }
            const viewAll = document.getElementById('view-all');
            if (viewAll) {
                const elementPosition = viewAll.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (elementPosition < windowHeight) {
                    setIsVisibleProj8(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className='home_page_banner_div'>
                <div>
                    <h1 className='home_page_banner_name'>Abbas Paryavi</h1>
                    <p className='home_page_banner_img_credit'>background image by benzoix on Freepik</p>

                    <div className='home_page_banner_detail'>
                        <a href='https://github.com/aparyavi' target={'_blank'} rel="noreferrer">
                            <FaGithub className='home_page_banner_detail_indiv_div' size={30} />
                        </a>
                        <a href='https://www.linkedin.com/in/abbas-paryavi/' target={'_blank'} rel="noreferrer">
                            <div className='home_page_banner_detail_indiv_div'>
                                <FaLinkedinIn size={30} />
                            </div>
                        </a>
                        <a href='mailto:abbparyavi@gmail.com' target={'_blank'} rel="noreferrer">
                            <div className='home_page_banner_detail_indiv_div'>
                                <MdEmail size={30} />
                            </div>
                        </a>
                        <a href='/resume.pdf' target={'_blank'} rel="noreferrer">
                            <div className='home_page_banner_detail_indiv_div'>
                                <FaFile size={27} />
                            </div>
                        </a>
                    </div>
                </div>
            </div>

            <div className='about_top_div'>
                <div className='home_page_top_div' style={{ marginTop: '0px' }}>
                    <h2 className='home_page_about_h2'>About Me</h2>

                    <div className='home_page_about_top_div'>

                        <div className={`home_page_profile_img_div ${flipped ? 'flipped' : ''} ${isVisibleAboutImg ? 'visible' : ''}`}
                            onMouseEnter={() => mouseOverImg()} onMouseLeave={() => mouseLeaveImg()}
                            id='profile_img_div'>

                            <img src={'/abbas.PNG'} className='home_page_profile_img' id='profile_img' />


                            <div id='profile_detail_div'>
                                <div className='profile_detail_indiv_cliper_div'>
                                    <CopyToClipboard
                                        text='Potomac, MD'
                                        onCopy={() => clipboardCopied()}
                                    >
                                        <div className='profile_detail_indiv_div'>
                                            <MdLocationOn color='white' size={25} />
                                            <p>Potomac, MD</p>
                                        </div>
                                    </CopyToClipboard>
                                </div>

                                <div className='profile_detail_indiv_cliper_div'>
                                    <CopyToClipboard
                                        text='abbparyavi@gmail.com'
                                        onCopy={() => clipboardCopied()}
                                    >
                                        <div className='profile_detail_indiv_div'>
                                            <MdEmail color='white' size={24} />
                                            <p>abbparyavi@gmail.com</p>
                                        </div>
                                    </CopyToClipboard>
                                </div>

                                <div className='profile_detail_indiv_cliper_div'>
                                    <CopyToClipboard
                                        text='(202) 805 - 8280'
                                        onCopy={() => clipboardCopied()}
                                    >
                                        <div className='profile_detail_indiv_div'>
                                            <BsFillTelephoneFill color='white' size={22} />
                                            <p>(202) 805 - 8280</p>
                                        </div>
                                    </CopyToClipboard>
                                </div>
                            </div>
                        </div>

                        <div id='clipboard_copied_message_div'>
                            Copied!
                        </div>

                        <div className={`about_text_button_div ${isVisibleAboutText ? 'visible' : ''}`} id="transition-object-about-text">
                            <p className='about_text'>Junior Software Engineer with over 4 years of experience and a lifelong passion in software development and application integration. Majority of experience has been in full stack development using React, PostgreSQL, Node Js, and Azure VMs. Extensive experience in web hosting, application integration, and creating servers, VMs, and databases</p>

                            <div className='get_in_touch_div'>
                                <a href='#contact'>
                                    <p>Get in touch</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='home_page_top_div'>
                <div>
                    <h2 className='home_page_about_h2'>My Experiences</h2>

                    <div className='home_page_description_div'>
                        <div>
                            <div className={`home_page_line_and_description_div ${isVisible1 ? 'visible' : ''}`} id="transition-object-1">
                                <div>
                                    {experienceDetail('Full Stack Developer', 'Jun 2021 - Present', 'Rockville, MD')}
                                </div>

                                <div className='home_page_line_description_diviver'></div>

                                <div className='circle_line_text_div'>
                                    <div className='circle_line_text_divider'></div>

                                    {experience(1, 'International Data Center Authority (IDCA)', 'Full Stack Developer', 'Jun 2021 - Present')}
                                </div>
                            </div>

                            <div className={`home_page_line_and_description_div ${isVisible2 ? 'visible' : ''}`} id="transition-object-2">
                                <div>
                                    {experienceDetail('Data Science Research Assistant', 'Aug 2020 – Jan 2021', 'College Park, MD')}
                                </div>

                                <div className='home_page_line_description_diviver'></div>

                                <div className='circle_line_text_div'>
                                    <div className='circle_line_text_divider'></div>

                                    {experience(2, 'UMD CS Department', 'Data Science Research Assistant', 'Aug 2020 – Jan 2021')}
                                </div>
                            </div>

                            <div className={`home_page_line_and_description_div ${isVisible3 ? 'visible' : ''}`} id="transition-object-3" style={{ borderBottom: '0px' }}>
                                <div>
                                    {experienceDetail('Data Center Engineering Intern', 'Jul 2019 – Nov 2019', 'Derwood, MD')}
                                </div>

                                <div className='home_page_line_description_diviver'></div>

                                <div className='circle_line_text_div'>
                                    <div className='circle_line_text_divider'></div>

                                    {experience(3, 'TechXact Group Corporation', 'Data Center Engineering Intern', 'Jul 2019 – Nov 2019')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='projects_top_div'>
                <div className='home_page_top_div'>
                    <h2 className='home_page_about_h2'>My Projects</h2>

                    <div className='all_project_top_div'>
                        <div className='indiv_project_top_div' onMouseEnter={() => {
                            document.getElementById('project-1').style.filter = 'brightness(40%)'
                            document.getElementById('project-1-detail').style.display = 'initial'
                        }} onMouseLeave={() => {
                            document.getElementById('project-1').style.filter = 'brightness(100%)'
                            document.getElementById('project-1-detail').style.display = 'none'
                        }}>
                            <a href='https://idc-a.org/' target={'_blank'} rel="noreferrer">
                                <div>
                                    <img src='/idca-logo.png' className={`indiv_project_img ${isVisibleProj1 ? 'visible' : ''}`} id='project-1' />
                                    <div className='indiv_project_detail_div' id='project-1-detail'>
                                        <p>IDCA Platform</p>
                                        <p className='indiv_project_detail_tools'>Tools: React, HTML/CSS, JavaScript, Node JS, Express JS, Azure VM, Azure Functions, Firebase, Firebase Cloud Functions, GitHub, REST APIs, and Salesforce</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className='indiv_project_top_div' onMouseEnter={() => {
                            document.getElementById('project-2').style.filter = 'brightness(40%)'
                            document.getElementById('project-2-detail').style.display = 'initial'
                        }} onMouseLeave={() => {
                            document.getElementById('project-2').style.filter = 'brightness(100%)'
                            document.getElementById('project-2-detail').style.display = 'none'
                        }}>
                            <a href='https://github.com/aparyavi/MLB_SpendingVsWinAnalysis' target={'_blank'} rel="noreferrer">
                                <div>
                                    <img src='/MLB Analysis.png' className={`indiv_project_img ${isVisibleProj2 ? 'visible' : ''}`} id='project-2' />
                                    <div className='indiv_project_detail_div' id='project-2-detail'>
                                        <p>Major League Baseball 1990-2020 Spending Data Analysis</p>
                                        <p className='indiv_project_detail_tools'>Tools: Python, Pandas, Numpy, and Matplotlib</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className='indiv_project_top_div' onMouseEnter={() => {
                            document.getElementById('project-3').style.filter = 'brightness(40%)'
                            document.getElementById('project-3-detail').style.display = 'initial'
                        }} onMouseLeave={() => {
                            document.getElementById('project-3').style.filter = 'brightness(100%)'
                            document.getElementById('project-3-detail').style.display = 'none'
                        }}>
                            <a href='https://github.com/aparyavi/Climate_Change_and_Precipitation_Patterns' target={'_blank'} rel="noreferrer">
                                <div>
                                    <img src='/World Temps.png' className={`indiv_project_img ${isVisibleProj3 ? 'visible' : ''}`} id='project-3' />
                                    <div className='indiv_project_detail_div' id='project-3-detail' >
                                        <p>Global Climate Change and Precipitation Patterns</p>
                                        <p className='indiv_project_detail_tools'>Tools: Python, Pandas, Numpy, and Matplotlib</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className='indiv_project_top_div' onMouseEnter={() => {
                            document.getElementById('project-4').style.filter = 'brightness(40%)'
                            document.getElementById('project-4-detail').style.display = 'initial'
                        }} onMouseLeave={() => {
                            document.getElementById('project-4').style.filter = 'brightness(100%)'
                            document.getElementById('project-4-detail').style.display = 'none'
                        }}>
                            <a href='https://mehdiparyavi.com/' target={'_blank'} rel="noreferrer">
                                <div>
                                    <img src='/MehdiParyavi.png' className={`indiv_project_img ${isVisibleProj4 ? 'visible' : ''}`} id='project-4' />
                                    <div className='indiv_project_detail_div' id='project-4-detail'>
                                        <p>Mehdi Paryavi Personal Blog Page</p>
                                        <p className='indiv_project_detail_tools'>Tools: React, Javascript, HTML, CSS, and Google Cloud Platform</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className='indiv_project_top_div' onMouseEnter={() => {
                            document.getElementById('project-5').style.filter = 'brightness(40%)'
                            document.getElementById('project-5-detail').style.display = 'initial'
                        }} onMouseLeave={() => {
                            document.getElementById('project-5').style.filter = 'brightness(100%)'
                            document.getElementById('project-5-detail').style.display = 'none'
                        }}>
                            <a href='/' >
                                <div>
                                    <img src='/AbbasParyavi.png' className={`indiv_project_img ${isVisibleProj5 ? 'visible' : ''}`} id='project-5' />
                                    <div className='indiv_project_detail_div' id='project-5-detail'>
                                        <p>My Personal Website</p>
                                        <p className='indiv_project_detail_tools'>Tools: React, Javascript, HTML, CSS, and Google Cloud Platform</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className='indiv_project_top_div' onMouseEnter={() => {
                            document.getElementById('project-6').style.filter = 'brightness(40%)'
                            document.getElementById('project-6-detail').style.display = 'initial'
                        }} onMouseLeave={() => {
                            document.getElementById('project-6').style.filter = 'brightness(100%)'
                            document.getElementById('project-6-detail').style.display = 'none'
                        }}>
                            <a href='https://github.com/aparyavi/sanity-cms-react' target={'_blank'} rel="noreferrer">
                                <div>
                                    <img src='/Blog Page.png' className={`indiv_project_img ${isVisibleProj6 ? 'visible' : ''}`} id='project-6' />
                                    <div className='indiv_project_detail_div' id='project-6-detail'>
                                        <p>Headless CMS Integrated with Blog Page</p>
                                        <p className='indiv_project_detail_tools'>Tools: React, Sanity, Express JS, Node Js, Javascript, HTML, and CSS</p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div className='indiv_project_top_div' onMouseEnter={() => {
                            document.getElementById('project-7').style.filter = 'brightness(40%)'
                            document.getElementById('project-7-detail').style.display = 'initial'
                        }} onMouseLeave={() => {
                            document.getElementById('project-7').style.filter = 'brightness(100%)'
                            document.getElementById('project-7-detail').style.display = 'none'
                        }}>
                            <a href='https://github.com/aparyavi/react-node-express-app' target={'_blank'} rel="noreferrer">
                                <div>
                                    <img src='/ExpressApp.png' className={`indiv_project_img ${isVisibleProj7 ? 'visible' : ''}`} id='project-7' />
                                    <div className='indiv_project_detail_div' id='project-7-detail'>
                                        <p>React Node Express App</p>
                                        <p className='indiv_project_detail_tools'>Tools: React, Express JS, Node Js, Javascript, HTML, and CSS</p>
                                    </div>
                                </div>
                            </a>
                        </div>


                        <div className={`indiv_project_top_div indiv_project_view_more_a_div ${isVisibleProj8 ? 'visible' : ''}`} id='view-all'>
                            <a href='https://github.com/aparyavi' target={'_blank'} rel="noreferrer">
                                <p>View More</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default Home;
