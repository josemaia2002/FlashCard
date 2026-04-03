import './FlashCard.css'

function FlashCard( {flashCards, currentIndex, showAnswer, toggleAnswer} ) {

    if(!flashCards.length) {
        return <p>No cards available!</p>;
    }
    
    const currentCard = flashCards[currentIndex - 1];

    return (
        <div onClick={toggleAnswer} className="flash-card card text-center w-50 h-50 mb-4 p-4">
            <div className={`flash-card-inner card-body p-2 d-flex align-items-center justify-content-center ${showAnswer ? 'is-flipped' : ''}`}>
                <p className="d-flex align-items-center justify-content-center flash-card-front card-text display-6" style={{ fontSize: "clamp(26px, 1.2em, 32px)" }}>
                    {currentCard.question}
                </p>
                <p className="d-flex align-items-center justify-content-center flash-card-back card-text display-6" style={{ fontSize: "clamp(26px, 1.2em, 32px)" }}>
                    {currentCard.answer}
                </p>
            </div>
        </div>

    );
}

export default FlashCard