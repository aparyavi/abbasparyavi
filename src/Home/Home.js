import React, { useState, useEffect } from 'react';
import './Home.css';
import { MdLocationOn, MdEmail } from 'react-icons/md'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { CopyToClipboard } from "react-copy-to-clipboard";

function Home() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [imageSrc, setImageSrc] = useState('/IMG_8235.png');
    const [imageBlur, setImageBlur] = useState(0)
    const [flipped, setFlipped] = useState(false);
    const [mouseOverImage, setMouseOverImage] = useState(false)

    useEffect(() => {
        document.title = "Abbas Paryavi";
    }, []);


    function clipboardCopied() {
        document.getElementById('clipboard_copied_message_div').style.display = 'inherit'

        setTimeout(function () {
            document.getElementById('clipboard_copied_message_div').style.display = 'none'
        }, 2000);
    }


    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        // Attach the scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Detach the scroll event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // The empty dependency array ensures that the effect runs only once on mount

    useEffect(() => {
        scrollImageFunction()
    }, [scrollPosition]);

    function scrollImageFunction(mouse_leave_img) {
        if (!mouseOverImage || mouse_leave_img)
            document.getElementById('profile_img').style.filter = 'blur(' + imageBlur + 'px)';


        if (scrollPosition > 400) {
            if (scrollPosition > 400 && scrollPosition < 600)
                setImageBlur(0)
            else
                setImageBlur(((scrollPosition - 401) / 400) * 10)

            setImageSrc('/IMG_8246.png');
        } else {
            if (scrollPosition >= 0 && scrollPosition < 200)
                setImageBlur(0)
            else
                setImageBlur(((scrollPosition - 200) / 200) * 10)

            setImageSrc('/IMG_8235.png');
        }
    }

    function mouseOverImg() {
        setMouseOverImage(true)

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
        setMouseOverImage(false)

        setFlipped(true);
        document.getElementById('profile_img').style.filter = 'blur(0)'

        setTimeout(function () {
            setFlipped(false);
            document.getElementById('profile_detail_div').style.display = 'none'
        }, 200);

        scrollImageFunction(true)
    }

    function codingText() {
        const text = "Junior Software Engineer with over 4 years of experience and a lifelong passion in software development and application integration. Majority of experience has been in full zstack development using React, PostgreSQL, Node Js, and Azure VMs. Extensive experience in web hosting, application integration, and creating servers, VMs, and databases.";

        // Split the text into an array of words
        const words = text.split(' ');

        // Map over the words, wrapping the target word in a span with a specific class
        const highlightedText = words.map((word, index) => (
            word.toLowerCase() === 'From'.toLowerCase()
                || word.toLowerCase() === 'With'.toLowerCase()
                || word.toLowerCase() === 'Node'.toLowerCase()
                || word.toLowerCase() === 'Js,'.toLowerCase() ? (
                <span key={index} className="purple_coding_text">
                    {word + " "}
                </span>
            ) : word.toLowerCase() === 'and'.toLowerCase()
                || word.toLowerCase() === 'Majority'.toLowerCase() ? (
                <span key={index} className="blue_coding_text">
                    {word + " "}
                </span>
            ) : word.toLowerCase() === 'creating'.toLowerCase()
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


        return (
            <p className='home_page_description_coding'>
                {highlightedText}
            </p>
        )
    }

    return (
        <div>
            <div className='home_page_top_div'>
                <div id='clipboard_copied_message_div'>
                    Copied!
                </div>
                <div className={`home_page_profile_img_div ${flipped ? 'flipped' : ''}`} onMouseEnter={() => mouseOverImg()} onMouseLeave={() => mouseLeaveImg()} id='profile_img_div'>
                    <img src={imageSrc} className='home_page_profile_img' id='profile_img' />

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


                <div className='home_page_description_div'>
                    <div className='home_page_line_and_description_div'>
                        <div className='home_page_line_description_diviver'></div>

                        <div>
                            <div className='circle_line_text_div'>
                                <div className='circle_line_text_divider'></div>
                                {codingText()}
                            </div>
                            <div className='circle_line_text_div'>
                                <div className='circle_line_text_divider'></div>
                                {codingText()}
                            </div>
                            <div className='circle_line_text_div'>
                                <div className='circle_line_text_divider'></div>
                                {codingText()}
                            </div>
                            <div className='circle_line_text_div'>
                                <div className='circle_line_text_divider'></div>
                                {codingText()}
                            </div>
                            <div className='circle_line_text_div'>
                                <div className='circle_line_text_divider'></div>
                                {codingText()}
                            </div>
                            <div className='circle_line_text_div'>
                                <div className='circle_line_text_divider'></div>
                                {codingText()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Home;
