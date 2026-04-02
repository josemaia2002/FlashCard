function ProgressBar( {currentIndex, totalFlashCards} ) {
    let percent = Math.round(100*(currentIndex/totalFlashCards));

    return (
        <div className="mt-4 mb-4">
            <p>{percent}% {currentIndex} of {totalFlashCards}</p>

            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: `${percent}%` }}></div>
            </div>
        
        </div>
    );
}

export default ProgressBar