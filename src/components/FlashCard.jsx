import './FlashCard.css'

function FlashCard( {flashCards, currentIndex, showAnswer, toggleAnswer} ) {

    if(!flashCards.length) {
        return <p>No cards available!</p>;
    }
    
    const currentCard = flashCards[currentIndex - 1];

    return (
        <div onClick={toggleAnswer} className="flash-card text-center mb-4 flashcard-wrapper">
            <div className={`flash-card-inner card h-100 card-body p-2 d-flex align-items-center justify-content-center ${showAnswer ? 'is-flipped' : ''}`}>
                <div className="d-flex align-items-center justify-content-center flash-card-front card-text display-6" style={{ fontSize: "clamp(26px, 1.2em, 32px)" }}>
                    {currentCard.question}
                </div>
                <div className="d-flex align-items-center justify-content-center flash-card-back card-text display-6" style={{ fontSize: "clamp(26px, 1.2em, 32px)" }}>
                    {currentCard.answer}
                </div>
            </div>
        </div>

    );
}

export default FlashCard