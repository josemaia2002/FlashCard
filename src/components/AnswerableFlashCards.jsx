import { useState, useEffect } from "react";
import FlashCard from "./FlashCard";
import NavBar from "./NavBar";
import ProgressBar from "./ProgressBar";

function AnswerableFlashCards ( {originalFlashCards} ) {
    const [flashCards, setFlashCards] = useState(originalFlashCards);
    const [showAnswer, setShowAnswer] = useState(false);

    const [currentIndex, setCurrentIndex] = useState(() => {
        const savedIndex = localStorage.getItem("flashCardHistory");
        if(savedIndex) {
            return JSON.parse(savedIndex);
        }
        return 1;
    });


    useEffect(() => {
        localStorage.setItem("flashCardHistory", JSON.stringify(currentIndex))
    }, [currentIndex]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if(event.code === 'ArrowRight') {   
                nextCard();
            }
            else if(event.code === 'ArrowLeft') {
                previousCard();
            }
            else if(event.code === 'Space') {
                toggleAnswer();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [currentIndex, showAnswer]);

    const shuffleArray = (array) => {
        const shuffled = [...array]; 
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    };

    const shuffleCards = () => {
        const newOrder = shuffleArray(flashCards);
        setFlashCards(newOrder);
        setShowAnswer(false);
        setCurrentIndex(1);
    };

    function toggleAnswer() {
        setShowAnswer(!showAnswer);
    }

    function nextCard() {
        if(currentIndex < flashCards.length) {
            setCurrentIndex(currentIndex + 1);
            setShowAnswer(false);
        }
    }

    function previousCard() {
        if(currentIndex > 1) {
            setCurrentIndex(currentIndex - 1);
            setShowAnswer(false);
        }
    }

    return(
        <div className="container d-flex flex-column align-items-center mt-4">
            <h2>Flash Cards</h2>
            <div className="vh-100 w-75 card d-flex align-items-center justify-content-start mt-4">
                <ProgressBar currentIndex={currentIndex} totalFlashCards={flashCards.length}/>
                <FlashCard currentIndex={currentIndex} flashCards={flashCards} showAnswer={showAnswer} toggleAnswer={toggleAnswer}/>
                <NavBar currentIndex={currentIndex} previousCard={previousCard} nextCard={nextCard} shuffleCards={shuffleCards} totalFlashCards={flashCards.length}/>
            </div>
        </div>
    );
}

export default AnswerableFlashCards