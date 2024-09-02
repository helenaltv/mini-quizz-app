import { useState } from "react";

export default function Quiz({ questions, onFinish }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswerChange = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsFinished(true);
      onFinish(answers);
    }
  };

  const question = questions[currentQuestionIndex];

  if (isFinished) {
    return <div>Quiz finished! See your results.</div>;
  }

  return (
    <div>
      <h2>{question.question}</h2>
      {question.options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            id={`option-${index}`}
            name={`question-${currentQuestionIndex}`}
            value={option}
            checked={answers[currentQuestionIndex] === option}
            onChange={() => handleAnswerChange(currentQuestionIndex, option)}
          />
          <label htmlFor={`option-${index}`}>{option}</label>
        </div>
      ))}
      <button onClick={handleNextQuestion}>
        {currentQuestionIndex < questions.length - 1
          ? "Next Question"
          : "Finish Quiz"}
      </button>
    </div>
  );
}
