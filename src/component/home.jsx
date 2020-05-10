import React, {useState} from 'react'

function Home() {
    const [scroll, set] = useState(0)
    window.addEventListener('scroll', handleScroll)
    function handleScroll(){
        const x = document.documentElement.scrollTop
        console.log(x)
        set(x)
    }
    return (
        <div className='home-container'>
            <div className="section1">
                <div className="sec1-text">
                    <span>池畔的美好时光。</span>
                </div>
                <div className="scroll">
                    <span>Scroll</span>
                </div>
            </div>
            <div className="section2">
                <div className={`sec2-img ${scroll > 345 ? 'active' : ''}`}>
                    <img src={require('../img/02.jpg')} alt='' />
                    <div className="img-text">
                        <span>有花的陪伴,</span>
                        <span>才是真正的快乐。</span>
                    </div>
                </div>
            </div>
            <div className={`section3 ${scroll> 1200 ? 'sec3-active' : ''}`}>
                <div className="sec3-img">
                    <img src={require('../img/03.jpg')} alt=""/>
                </div>
                <div className='sec3-text'>
                    <div className="sec3-text-title">关于我们</div>
                    <div className="sec3-text-content">Suikou Flower是一种新型的花篮，“每个人都可以玩得开心，每个人都可以随便住”。我们想告诉您有关您在日常生活中可以享受到的池袋魅力。</div>
                    <div className="more">
                        <span>More</span>
                    </div>
                </div>
            </div>
            <div className={`section4 ${scroll> 1600 ? 'sec4-active' : ''}`}>
                <div className="sec4-img">
                    <img src={require('../img/04.jpg')} alt=""/>
                </div>
                <div className='sec4-text'>
                    <div className="sec4-text-title">对于初次使用的用户</div>
                    <div className="sec4-text-content">Suikou Flower的魅力在于，即使是初学者也可以轻松享受。第一期课程没有任何准备，请随时加入我们。</div>
                    <div className="more">
                        <span>More</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
