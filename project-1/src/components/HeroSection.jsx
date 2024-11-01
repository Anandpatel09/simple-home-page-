const HeroSection = () => {
    return (<>
        <main className="hero">
            <div >
                <div className="hero-text">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nobis molestias pariatur quae fugit quam obcaecati magni dolore voluptate. Dicta odio qui asperiores est sit?</p>
                </div>
                <div className="hero-content">
                
                <div className="shopping">
                    <p>Also Available On</p>
                    <div className="brand-icon">
                        <img className="nike-img" src="/images/amazon-a-logo.webp" alt="" />
                        <img className="nike-img" src="/images/flipkart.png" alt="" />
                    </div>
                </div>
                <div className="hero-imge">
                    <img className='shose' src="/images/shose.png" alt="shose" />
                </div>
                </div>
                <div className="hero-button">
                    <button className="btn1">Shop Now</button>
                    <button className="btn2">Category</button>
                </div>
            </div>
        </main>
    </>
    );
};
export default HeroSection;