function NavBar( {currentIndex, setCurrentIndex, showAnswer, setShowAnswer, totalFlashCards} ) {

    function nextCard() {
        if(currentIndex < totalFlashCards) {
            setCurrentIndex(currentIndex + 1);
            setShowAnswer(false)
        }
    }

    function previousCard() {
        if(currentIndex > 1) {
            setCurrentIndex(currentIndex - 1);
            setShowAnswer(false)
        }
    }

    function toggleAnswer() {
        setShowAnswer(!showAnswer);
    }

    return (
        <div className="d-flex justify-content-around p-2 w-100">
            <button onClick={previousCard} disabled={currentIndex === 1} className="btn btn-primary">Previous</button>

            {showAnswer ? (
                <button onClick={toggleAnswer} className="btn btn-primary">Hide Answer</button>
            ) : (
                <button onClick={toggleAnswer} className="btn btn-primary">Show Answer</button>
            )}
            
            <button onClick={nextCard} disabled={currentIndex === totalFlashCards} className="btn btn-primary">Next</button>
        </div>
    );
}

export default NavBar