import { useState } from "react";

function FlashCard() {

    // const [listCards, setListCards] = useState(["What is React, and why is it used?", "Explain the concept of Virtual DOM."]);
    // const [cardIndex, setCardIndex] = useState(0);
    let cardIndex = 0;
    let listCards = ["What is React, and why is it used?", "Explain the concept of Virtual DOM."];

    return (
        <div className="card text-center w-50 mb-4 p-4">
            <div className="card-body">
                <p className="card-text display-6">{listCards[cardIndex]}</p>
            </div>
        </div>
    );
}

export default FlashCard