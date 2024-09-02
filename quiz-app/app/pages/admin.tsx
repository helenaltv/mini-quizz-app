import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import styles from "../styles/Admin.module.css";
import {
  addQuestion,
  removeQuestion,
  updateQuestion,
} from "../redux/questionsSlice";

interface QuestionFormProps {
  onSubmit: (question: Question) => void;
  initialData?: Question;
}

const QuestionForm: React.FC<QuestionFormProps> = ({
  onSubmit,
  initialData,
}) => {
  const [question, setQuestion] = useState(initialData?.question || "");
  const [options, setOptions] = useState(initialData?.options.join(", ") || "");
  const [answer, setAnswer] = useState(initialData?.answer || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newQuestion = {
      id: initialData?.id || Date.now(),
      question,
      options: options.split(", ").map((opt) => opt.trim()),
      answer,
    };
    onSubmit(newQuestion);
    setQuestion("");
    setOptions("");
    setAnswer("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <label className={styles.label}>Question:</label>
        <input
          className={styles.input}
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>
      <div>
        <label className={styles.label}>Options (comma separated):</label>
        <input
          className={styles.input}
          type="text"
          value={options}
          onChange={(e) => setOptions(e.target.value)}
        />
      </div>
      <div>
        <label className={styles.label}>Answer:</label>
        <input
          className={styles.input}
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      </div>
      <button className={styles.button} type="submit">
        Submit
      </button>
    </form>
  );
};

export default function AdminPage() {
  const dispatch = useDispatch();
  const questions = useSelector(
    (state: RootState) => state.questions.questions
  );

  const handleAddQuestion = (question: Question) => {
    dispatch(addQuestion(question));
  };

  const handleRemoveQuestion = (id: number) => {
    dispatch(removeQuestion(id));
  };

  const handleUpdateQuestion = (question: Question) => {
    dispatch(updateQuestion(question));
  };

  return (
    <div className={styles.container}>
      <h1>Admin Page</h1>
      <QuestionForm onSubmit={handleAddQuestion} />
      <ul className={styles.list}>
        {questions.map((q) => (
          <li key={q.id} className={styles.listItem}>
            <div>
              <strong>{q.question}</strong>
              <div>Options: {q.options.join(", ")}</div>
              <div>Answer: {q.answer}</div>
              <button
                className={styles.button}
                onClick={() => handleRemoveQuestion(q.id)}
              >
                Remove
              </button>
              <button
                className={styles.button}
                onClick={() =>
                  handleUpdateQuestion({ ...q, question: "Updated Question?" })
                }
              >
                Update
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
