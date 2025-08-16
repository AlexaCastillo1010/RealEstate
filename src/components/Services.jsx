import React, { useEffect, useRef } from "react";
import "../components/CSS/services.css";

export default function Services() {
    const serviceRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-in");
                    }
                });
            },
            {
                rootMargin: "0px 0px -100px 0px",
                threshold: 0.1,
            }
        );

        serviceRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            serviceRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <div className="services">
            <h1 className="services-title">Our Real Estate Services</h1>
            <div className="services-container">
                <div
                    ref={(el) => (serviceRefs.current[0] = el)}
                    className="service-card"
                >
                    <img
                        src="/service1.webp"
                        alt="Real Estate Service 1"
                        className="service-image"
                    />
                    <h2 className="service-title">Real Estate Done Right</h2>
                    <p className="service-description">
                        Nervous about your property adventure? Don’t be. Whether
                        you're getting ready to buy or sell your residence,
                        looking at investment properties, or just curious about
                        the markets, our team ensures you get the best experience
                        possible!
                    </p>
                </div>
                <div
                    ref={(el) => (serviceRefs.current[1] = el)}
                    className="service-card"
                >
                    <img
                        src="/service2.webp"
                        alt="Real Estate Service 2"
                        className="service-image"
                    />
                    <h2 className="service-title">Commercial & Residential</h2>
                    <p className="service-description">
                        Large or small, condo or mansion, we can find it and get
                        at the price that's right. Fixer-uppers? Luxury? We can
                        help with all of it! We live, work, and play in this
                        community. Happy to help you find where to put your
                        hard-earned dollars.
                    </p>
                </div>
                <div
                    ref={(el) => (serviceRefs.current[2] = el)}
                    className="service-card"
                >
                    <img
                        src="/service3.webp"
                        alt="Real Estate Service 3"
                        className="service-image"
                    />
                    <h2 className="service-title">Rely on Expertise</h2>
                    <p className="service-description">
                        If you have questions about affordability, credit, and
                        loan options, trust us to connect you with the right
                        people to get the answers you need in a timely fashion.
                        We make sure you feel confident and educated every step
                        of the way.
                    </p>
                </div>
            </div>
        </div>
    );
}
