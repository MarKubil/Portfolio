import "./styles.css"

function Home() {
    return (
        <div className="box">
            <div className="content row home">
                <main className="col-7">
                    <h1>
                        <span className="d-block animatedText text-1">Hello 👋</span>
                        <span className="d-block animatedText text-2">I'm Marius Kubilius</span>
                        <span className="d-block animatedText text-3">Front-end website developer</span></h1>
                </main>
                <div id="js-img" className="col-5">
                    <div className="cube" id="javascript"></div>
                    <div className="cube" id="html"></div>
                    <div className="cube" id="css"></div>
                </div>
            </div>
        </div>
    )
}

export default Home()