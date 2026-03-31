import { useState } from "react";
import FlashCard from "./FlashCard";
import NavBar from "./NavBar";
import ProgressBar from "./ProgressBar";

function AnswerableFlashCards ( {flashCards} ) {
    const [progress, setProgress] = useState(1);
    const [showAnswer, setShowAnswer] = useState(false);

    return(
        <div className="container d-flex flex-column align-items-center mt-4">
            <h2>Flash Cards</h2>
            <div className="vh-100 w-75 card d-flex align-items-center justify-content-start mt-4">
                <ProgressBar progress={progress}/>
                <FlashCard progress={progress} flashCards={flashCards} showAnswer={showAnswer}/>
                <NavBar progress={progress} setProgress={setProgress} showAnswer={showAnswer} setShowAnswer={setShowAnswer}/>
            </div>
        </div>
    );
}

export default AnswerableFlashCards