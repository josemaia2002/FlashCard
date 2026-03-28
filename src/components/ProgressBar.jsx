import { useState } from "react";

function ProgressBar() {
    // const [progress, setProgress] = useState(5);
    let progress = 5;

    return (
        <div className="mt-4 mb-4">
            <p>{progress}% 1 of 20</p>

            <div className="progress">
                <div className="progress-bar" role="progressbar" style={{ width: `${progress}%` }}>
                    {/* {progress}% */}
                </div>
            </div>
        
        </div>
    );
}

export default ProgressBar