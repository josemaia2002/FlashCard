import FlashCard from "./FlashCard";
import NavBar from "./NavBar";
import ProgressBar from "./ProgressBar";

function AnswerableFlashCards () {

    return(
        <div className="d-flex flex-column align-items-center mt-4">
            <h2>Flash Cards</h2>
            <div className="vh-100 w-75 card d-flex align-items-center justify-content-start mt-4">
                <ProgressBar />
                <FlashCard />
                <NavBar />
            </div>
        </div>
    );
}

export default AnswerableFlashCards