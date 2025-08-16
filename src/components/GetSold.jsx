import '../components/CSS/getSold.css';

export default function GetSold() {
    return (
        <div className="get-sold">
            <div className="firstHalf">
                <div className="imageGetitSold">
                    <img className='getsoldIMAGE' src="getSold.jpg" alt="Top Residential Sales" />
                </div>
                <div className="textGetitSold">
                    <div className="firstText30">
                        <p>Top Residential Sales Last 5 Years</p>
                    </div>
                    <div className="secondText35">
                        <p>We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard every day to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, and we want to make sure our best is better every year.</p>
                    </div>
                    <div className="thirdText35">
                        <p>We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home. Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, and more!</p>
                    </div>
                </div>
            </div>
            <div className="secondHalf">
                {/* Additional content can go here */}
            </div>
        </div>
    );
}
