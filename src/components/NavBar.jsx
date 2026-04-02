function NavBar( {progress, setProgress, showAnswer, setShowAnswer} ) {

    function nextCard() {
        if(progress < 10) {
            setProgress(progress + 1);
            setShowAnswer(false)
        }
    }

    function previousCard() {
        if(progress > 1) {
            setProgress(progress - 1);
            setShowAnswer(false)
        }
    }

    function toggleAnswer() {
        setShowAnswer(!showAnswer);
    }

    return (
        <div className="d-flex justify-content-around p-2 w-100">
            <button onClick={previousCard} className="btn btn-primary">Previous</button>

            {showAnswer ? (
                <button onClick={toggleAnswer} className="btn btn-primary">Hide Answer</button>
            ) : (
                <button onClick={toggleAnswer} className="btn btn-primary">Show Answer</button>
            )}
            
            <button onClick={nextCard} className="btn btn-primary">Next</button>
        </div>
    );
}

export default NavBar