import "./about.scss";

export default function About() {
    
    
    const data = [
        {
            id: 1,
            name: "mubeen_huzain",
            title: "Instagram Page",
            img: "https://www.instagram.com/p/CVryc3qogXI/",
            icon: "assets/instagram.png",
            desc: "My Instagram.",
            

        },
        {
            id: 2,
            name: "Mohamed Mubeen PT",
            title: "Linked In",
            img: "https://www.linkedin.com/in/mohamed-mubeen-pt-a8937112b/",
            icon: "assets/linkedin.png",
            desc: "My LinkedIn.",
            featured: true,

        },
        {
            id: 3,
            name: "Mohamed Mubeen PT",
            title: "GitHub",
            img: "https://github.com/MubeenPT",
            icon: "assets/github.png",
            desc: "My github.",

        },

    ];


    return (
        <div className="about" id="about">
            <h1>About</h1>
            <div className="container">
                { data.map((d) => (
            <div className={d.featured ? "card featured" : "card"}>
                <div className="top">
                    <img src="assets/right-arrow.png" className="left" alt="" />
                    <img 
                    className="user"
                    src={d.img} alt=""/>
                    <img className="right" src={d.icon} alt="" />
                </div>
                <div className="center">
                    {d.desc}
                </div>
                <div className="bottom">
                    <h3>{d.name}</h3>
                    <h4>{d.title}</h4>
                </div>
                
            </div>
            ))}
            </div>
            
        </div>
    );
}
