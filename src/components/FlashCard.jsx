function FlashCard( {flashCards, progress, showAnswer} ) {
    

    let index = progress - 1;

    return (
        <div className="card text-center w-50 h-50 mb-4 p-4">
            <div className="card-body p-2 d-flex align-items-center justify-content-center">
                <p className="card-text display-6" style={{ fontSize: "clamp(26px, 1.2em, 32px)" }}>
                    {showAnswer ? flashCards[index].answer : flashCards[index].question}
                </p>
            </div>
        </div>
    );
}

export default FlashCard