import React, { useEffect, useRef, useState, useMemo } from 'react';
import '../components/CSS/explore.css';
 // You can place the CSS styles here

export default function Explore() {
    const carouselContainerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(3); // Default value
    const [autoplayInterval, setAutoplayInterval] = useState(null);
    const autoplayDelay = 3000;

    const slides = [
        {
            img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c919eceb-af50-4059-bd9f-9d1c74239b1c.png",
            title: "6460 Wagon Wheel",
            location: "Los Angeles"
        },
        {
            img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/9844c0f1-dbeb-43a2-8816-dc1f722ce985.png",
            title: "8234 Sunset Boulevard",
            location: "Los Angeles"
        },
        {
            img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a011d239-f54e-4b41-b294-80fd8315f8b4.png",
            title: "1592 Beverly Hills Dr",
            location: "Los Angeles"
        },
        {
            img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/092ff65d-1147-45f5-98e7-b146eb6f74b0.png",
            title: "4567 Hollywood Blvd",
            location: "Los Angeles"
        },
        {
            img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/8358d671-ff44-4ac4-805f-481a3e9919f1.png",
            title: "9876 Melrose Avenue",
            location: "Los Angeles"
        },
        {
            img: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f18a3b08-0445-45b8-a210-ce7f13435e40.png",
            title: "3210 Ocean Drive",
            location: "Los Angeles"
        }
    ];

    const getSlidesToShow = () => {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 1024) return 2;
        return 3;
    };

    const clonedSlides = useMemo(() => {
        const slidesToClone = Math.max(slidesToShow, 2);
        return [...slides.slice(0, slidesToClone), ...slides, ...slides.slice(-slidesToClone)];
    }, [slidesToShow]);

    useEffect(() => {
        setSlidesToShow(getSlidesToShow());
        startAutoplay();

        window.addEventListener('resize', handleResize);
        return () => {
            stopAutoplay();
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleResize = () => {
        setSlidesToShow(getSlidesToShow());
    };

    const startAutoplay = () => {
        stopAutoplay();
        setAutoplayInterval(setInterval(() => {
            nextSlide();
        }, autoplayDelay));
    };

    const stopAutoplay = () => {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
            setAutoplayInterval(null);
        }
    };

    const nextSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const actualIndex = (currentIndex + slides.length) % slides.length;

    return (
        <div className="explore-container">
            <div className="explore">
                <h1>Explore Our Listings</h1>
                <p>From our real estate to commercial and residential so you can rely on our expertise</p>
                <div className="losAngeles">
                    <div className="container">
                        <img className="locationLogo" src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/eb210e8f-996a-4812-b7e0-692fd682419c.png" alt="Location pin icon in blue color" />
                        <h2>Los Angeles</h2>
                    </div>
                </div>
            </div>

            <div className="listing">
                <div className="carousel-container" ref={carouselContainerRef} style={{ transform: `translateX(-${actualIndex * (100 / slidesToShow)}%)` }}>
                    {clonedSlides.map((slide, index) => (
                        <div className="pictureCarousel" key={index} style={{ minWidth: `${100 / slidesToShow}%` }}>
                            <img className="firsthouse" src={slide.img} alt={slide.title} />
                            <div className="textsPictureCarousel">
                                <p>{slide.title}</p>
                                <div className="withlogopicture">
                                    <img className="carouselLogo" src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/907cda9a-b0df-4ba8-b422-c7a07e78516f.png" alt="Small location pin icon in gray color" />
                                    <p>{slide.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="nav-button prev-button" onClick={prevSlide}>‹</button>
                <button className="nav-button next-button" onClick={nextSlide}>›</button>

                <div className="dots-container">
                    {slides.map((_, index) => (
                        <div key={index} className={`dot ${index === actualIndex ? 'active' : ''}`} onClick={() => goToSlide(index)}></div>
                    ))}
                </div>
            </div>
        </div>
    );
}
