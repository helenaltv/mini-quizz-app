import { useState } from "react";

export default function QuestionForm({
  onSubmit,
  initialQuestion = "",
  initialOptions = [],
  initialAnswer = "",
}) {
  const [question, setQuestion] = useState(initialQuestion);
  const [options, setOptions] = useState(initialOptions);
  const [correctAnswer, setCorrectAnswer] = useState(initialAnswer);

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    setOptions([...options, ""]);
  };

  const handleRemoveOption = (index) => {
    setOptions(options.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ question, options, correctAnswer });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="question">Question</label>
        <input
          id="question"
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Options</label>
        {options.map((option, index) => (
          <div key={index}>
            <input
              type="text"
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              required
            />
            <button type="button" onClick={() => handleRemoveOption(index)}>
              Remove
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddOption}>
          Add Option
        </button>
      </div>
      <div>
        <label htmlFor="correctAnswer">Correct Answer</label>
        <input
          id="correctAnswer"
          type="text"
          value={correctAnswer}
          onChange={(e) => setCorrectAnswer(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
