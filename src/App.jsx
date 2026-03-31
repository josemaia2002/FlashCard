import { useState } from 'react'
import AnswerableFlashCards from './components/AnswerableFlashCards';

function App() {
    const FLASHCARDS = [
        {id: 1, question: "What is React, and why is it used?", answer:"React is a JavaScript library for building user interfaces."},
        {id: 2, question: "Explain the concept of Virtual DOM.", answer:"The Virtual DOM is a concept in React where a virtual representation of the real DOM is kept in memory. "},
        {id: 3, question: "What are the lifecycle methods in React?", answer:"Lifecycle methods are hooks that allow developers to run code at specific points in a component’s life."},
        {id: 4, question: "What are hooks in React?", answer:"React Hooks are functions that let you use state and other React features without writing a class. "},
        {id: 5, question: "What is JSX?", answer:"JSX, or JavaScript XML, is a syntax extension for JavaScript that allows you to write HTML-like code within a JavaScript file."},
        {id: 6, question: "Explain the difference between controlled and uncontrolled components.", answer:"Controlled components are those that do not maintain their own state."},
        {id: 7, question: "What is Redux, and how is it used with React?", answer:"Redux is a predictable state management library for JavaScript applications."},
        {id: 8, question: "What are keys and why are they important in React?", answer:"Keys are unique identifiers that React uses to identify which items in a list have changed, been added, or been removed."},
        {id: 9, question: "How can you optimize the performance of a React application?", answer:"Use React.memo: This can prevent unnecessary re-renders for functional components by memoizing them."},
        {id: 10, question: "What is prop drilling, and how can it be avoided?", answer:"Prop drilling is a term used to describe the process of passing data through multiple layers of components, even if intermediate components don’t need the data."}
    ];

    return (
        <div className="min-vh-100 d-flex justify-content-center align-items-start">
            <AnswerableFlashCards flashCards={FLASHCARDS}/>
        </div>
    );
}

export default App