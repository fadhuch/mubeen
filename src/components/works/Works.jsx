import { useState } from "react";
import "./works.scss";

export default function Works() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
            id: "1",
            icon: "./assets/instagram.png",
            title: "Instagram",
            desc: "My Instagram Page",
            img: "https://www.instagram.com/mubeen_huzain/",
        },
        {
            id: "2",
            icon: "./assets/globe.png",
            title: "Mobile Application",
            desc: "Dummy Application.",
            img: "https://lens.google.com/search?p=ASQ0Rg2I661bj1Amizrh6FTSgUkg3zprceDtCdALBdM5gQklj9ipn5-8xP5o3PQb0_A4we71bQ_rT_0S9vbWOpd0umBhiRqv8_CSWa7Hb7Zf2ZIw6lt8W3I8Jz4RI4IF72lUNus1sOBBuyJCIR_4swpAFTKGUmpIrUf5WT3jUw8Aefk7_0_U8FG6V2pHL-WKzgAJ4qfgeTUBFNK8dswaHFitxXBcK2AkqVtU8AI21Wk%3D&s&ep=ccm&pli=1#lns=W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsIkVpWUtKR0ZpWkRrM01qSm1MVE5qWXpndE5EQXdOaTA0WldZNUxUQTJZbUptT0RWa1lUSXpaUT09Il0=",
        },
        {
            id: "3",
            icon: "./assets/writing.png",
            title: "Branding",
            desc: "Simply dummy text of the printing and typesetting industry.",
            img: "https://lens.google.com/search?p=ASQ0Rg1cjj0RFefLRD0Vmpcq6ZBaAlfHNPqIlpQlsz-xJTknRS4Gc6P-WVMwTlmHK7-0IZc3u7r-iOU7Q8LHnVi-8kUSV1zDyCCXR1cpr1AAXeYqbZiA8Sbt83M7JG7ZetUrAuBr5-oKg-jkP-FWSFBYHSxh6Bfj0Bu3bQTezI9Yb7347vSzdzOPnyRuwfPEO_DB7cz7Rgs0PszcEqLKl0mxKbaa2GqUgc8VYmf6uQoP&s&ep=ccm#lns=W251bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsIkVpWUtKREF3WlRrMk9HSmlMVEpqWWprdE5HWXlZUzA0WWpJNExUVTJZVEkzWmpGaU1XRTBOdz09Il0=",
        },
    ];

    const handleClick = (way) => {
        way === "left" 
        ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) 
        : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };

    return (
        <div className="works" id="works">
            <div className="slider" 
            style={{transform: "translateX(-${currentSlide *100}vw)" }}>
                { data.map((d) => (
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt=""/>
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src="https://www.123rf.com/photo_131522897_man-using-graphic-tablet-and-pan-graphic-designer-at-work-in-office.html?vti=lxkarg3zvjpl4vfa0c-1-2" 
                            alt=""/>
                        </div>
                    </div>
        
                </div>
                ))}
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick()}/>
        </div>
    );
}
