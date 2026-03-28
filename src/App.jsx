import { useState } from 'react'
import AnswerableFlashCards from './components/AnswerableFlashCards';

function App() {
    return (
        <div className="min-vh-100 d-flex justify-content-center align-items-start">
            <AnswerableFlashCards />
        </div>
    );
}

export default App