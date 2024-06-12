import React, {useEffect, useState} from 'react'
import './header.scss'

const Header = (props) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [sectionAmount, setSectionsAmount] = useState(1);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const sectionId = entry.target.id;
                        setCurrentPage(sectionId)
                    }
                });
            },
            {
                threshold: 0.6
            }
        );

        const sections = document.querySelectorAll('section[id]');
        setSectionsAmount(sections.length)
        sections.forEach((section) => {
            observer.observe(section)
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    const handleBoxClick = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({behavior: "smooth"})
        }
    }

    const renderBoxes = () => {
        const boxes = []
        for (let i = 1; i <= sectionAmount; i++) {
            boxes.push(
                <div
                    key={i}
                    className={i == currentPage ? 'box current' : 'box'}
                    onClick={() => handleBoxClick(i)}
                />
            );
        }
        return boxes;
    }

    return (
        <header>
            <a href="/" className='name'>
                <h1>Aaron.</h1>
                <p>2024</p>
            </a>
            <div className='boxes'>
                {renderBoxes()}
            </div>

            <div className="menu">
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Projects</a>
                <a href="/">Contact</a>
            </div>
        </header>
    )
}

export default Header