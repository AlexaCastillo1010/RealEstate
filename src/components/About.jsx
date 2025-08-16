import "../components/CSS/about.css";


export default function About() {
    return (
        <div className="about">
            <div className="title">
                <p>About Us</p>
            </div>
            <div className="mainAbout">
                <div className="firstHalfAbout">
                    <div className="herpic">
                        <img className="actualPic" src="herPic.webp" alt="" />
                    </div>
                    <div className="hersocials">
                        <img className="socials1" src="/facebook.png" alt="" />
                        <img className="socials1" src="/linked.png" alt="" />
                        <img className="socials1" src="/wechat.png" alt="" />
                        <img className="socials1" src="/whatsapp.png" alt="" />

                    </div>
                </div>
                <div className="secondHalfAbout">
                    <div className="halfAboutText">
                        <p className="firstText">Marci Metzger</p>
                        <p className="thirdText">Marci Metzger is a licensed Realtor in California, specializing in residential real estate. With a passion for helping clients find their dream homes, Marci brings a wealth of knowledge and experience to the table. Her dedication to providing exceptional service and her keen understanding of the market make her a trusted partner for buyers and sellers alike.</p>
                    </div>
                    <hr />
                    <div className="anotherHalfAboutText">
                        <p className="secondText">Marci's approach is client-focused, ensuring that each transaction is smooth and successful. Whether you're a first-time homebuyer or looking to sell your property, Marci is committed to guiding you through every step of the process. Her expertise in negotiation and market analysis ensures that you get the best possible outcome.</p>
                        <p className="fourthText">With Marci Metzger, you're not just getting a Realtor; you're gaining a partner who genuinely cares about your real estate journey.</p>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    );
}