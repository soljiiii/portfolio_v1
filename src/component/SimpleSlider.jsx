import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function NextArrow({onClick}){
    return(
        <div className="nextarrow" onClick={onClick}>
            ›
        </div>
    );
}

function PrevArrow({onClick}){
    return(
        <div className="prevarrow" onClick={onClick}>
            ‹
        </div>
    );
}

function SimpleSlider({state}){
    
    const settings = {
        dots:false,
        infinite: false,
        speed:500,
        slidesToShow:1,
        slidesToScroll:1,
        rows:1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };

    if(state===1){
        return (
            <div className="slider-container">
                <Slider {...settings} className="slider">
                    <div><img src="./pj1/1-1.png" className="pjImg"/></div>
                    <div><img src="./pj1/1-2.png" className="pjImg"/></div>
                    <div><img src="./pj1/1-3.png" className="pjImg"/></div>
                    <div><img src="./pj1/1-4.png" className="pjImg"/></div>
                    <div><img src="./pj1/1-5.png" className="pjImg"/></div>
                    <div><img src="./pj1/1-6.png" className="pjImg"/></div>
                </Slider>
            </div>
        );
    }
    else if(state===2){
        return (
            <div className="slider-container">
                <Slider {...settings} className="slider">
                    <div><img src="./pj2/2-1.png" className="pjImg"/></div>
                    <div><img src="./pj2/2-2.png" className="pjImg"/></div>
                    <div><img src="./pj2/2-3.png" className="pjImg"/></div>
                    <div><img src="./pj2/2-4.png" className="pjImg"/></div>
                    <div><img src="./pj2/2-5.png" className="pjImg"/></div>
                    <div><img src="./pj2/2-6.png" className="pjImg"/></div>
                    <div><img src="./pj2/2-7.png" className="pjImg"/></div>
                    <div><img src="./pj2/2-8.png" className="pjImg"/></div>
                </Slider>
            </div>
        );
    }
    else if(state===3){
        return (
            <div className="slider-container">
                <Slider {...settings} className="slider">
                    <div><img src="./pj3/3-1.png" className="pjImg"/></div>
                    <div><img src="./pj3/3-2.png" className="pjImg"/></div>
                    <div><img src="./pj3/3-3.png" className="pjImg"/></div>
                    <div><img src="./pj3/3-4.png" className="pjImg"/></div>
                    <div><img src="./pj3/3-5.png" className="pjImg"/></div>
                    <div><img src="./pj3/3-6.png" className="pjImg"/></div>
                    <div><img src="./pj3/3-7.png" className="pjImg"/></div>
                </Slider>
            </div>
        );
    }
}


export default SimpleSlider;