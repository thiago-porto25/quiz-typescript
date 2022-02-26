import { useState } from 'react';
import QuestionCard from 'components/QuestionCard';
import { Difficulty, fetchQuizQuestions, QuestionState } from 'services/API';
import { Container } from 'styles';

const TOTAL_QUESTIONS = 10;

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestion = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setQuestions(newQuestion);
    setScore(0);
    setUserAnswers([]);
    setQuestionNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[questionNumber].correct_answer === answer;

      if (correct) setScore((prev) => prev + 1);

      const answerObject: AnswerObject = {
        question: questions[questionNumber].question,
        answer,
        correct,
        correctAnswer: questions[questionNumber].correct_answer,
      };

      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = questionNumber + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setQuestionNumber(nextQuestion);
    }
  };

  return (
    <Container>
      <h1>React Quiz</h1>

      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button className="start" onClick={startTrivia}>
          Start
        </button>
      ) : null}

      {!gameOver && <p className="score">Score: {score}</p>}

      {loading && <p>Loading Questions...</p>}

      {!gameOver && !loading && (
        <>
          <QuestionCard
            questionNumber={questionNumber + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[questionNumber]?.question}
            answers={questions[questionNumber]?.answers}
            userAnswer={userAnswers ? userAnswers[questionNumber] : undefined}
            callback={checkAnswer}
          />
        </>
      )}

      {!gameOver &&
      !loading &&
      userAnswers.length === questionNumber + 1 &&
      questionNumber !== TOTAL_QUESTIONS - 1 ? (
        <button className="next" onClick={nextQuestion}>
          Next
        </button>
      ) : null}
    </Container>
  );
};

export default App;
