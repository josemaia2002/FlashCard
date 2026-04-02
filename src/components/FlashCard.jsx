import './FlashCard.css'

function FlashCard( {flashCards, currentIndex, showAnswer, setShowAnswer} ) {

    if(!flashCards.length) {
        return <p>No cards available!</p>;
    }
    
    const currentCard = flashCards[currentIndex - 1];

    function toggleAnswer() {
        setShowAnswer(!showAnswer);
    }

    return (
        <div onClick={toggleAnswer} className="flash-card card text-center w-50 h-50 mb-4 p-4">
            <div className="card-body p-2 d-flex align-items-center justify-content-center">
                <p className="card-text display-6" style={{ fontSize: "clamp(26px, 1.2em, 32px)" }}>
                    {showAnswer ? currentCard.answer : currentCard.question}
                </p>
            </div>
        </div>
    );
}

export default FlashCard