function NavBar( {currentIndex, previousCard, nextCard, shuffleCards, totalFlashCards} ) {

    return (
        <div className="d-flex justify-content-around p-2 w-100">
            <button onClick={previousCard} disabled={currentIndex === 1} className="btn btn-primary">Previous</button>
            <button onClick={shuffleCards} className="btn btn-primary">Shuffle</button>
            <button onClick={nextCard} disabled={currentIndex === totalFlashCards} className="btn btn-primary">Next</button>
        </div>
    );
}

export default NavBar