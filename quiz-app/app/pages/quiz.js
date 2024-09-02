// pages/quiz.tsx
import { useState } from "react";
import Quiz from "../components/Quiz";
import { useSelector } from "react-redux";

export default function QuizPage() {
  const questions = useSelector((state) => state.admin.questions);
  const [result, setResult] = useState(null);

  const handleFinish = (answers) => {
    // Här kan du lägga till logik för att beräkna resultatet
    setResult(answers);
  };

  return (
    <div>
      <h1>Quiz Page</h1>
      {result ? (
        <div>
          <h2>Quiz Finished</h2>
          <p>Your answers: {JSON.stringify(result)}</p>
        </div>
      ) : (
        <Quiz questions={questions} onFinish={handleFinish} />
      )}
    </div>
  );
}
