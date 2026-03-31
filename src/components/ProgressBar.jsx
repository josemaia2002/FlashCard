function ProgressBar( {progress} ) {
    let percent = Math.round(100*(progress/10));

    return (
        <div className="mt-4 mb-4">
            <p>{percent}% {progress} of 10</p>

            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: `${percent}%` }}></div>
            </div>
        
        </div>
    );
}

export default ProgressBar