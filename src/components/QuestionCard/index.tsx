import { AnswerObject } from 'App';
import { ButtonWrapper, Container } from './styles';

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  answers,
  callback,
  question,
  questionNumber,
  totalQuestions,
  userAnswer,
}) => {
  return (
    <Container>
      <p className="question-number">
        Question: {questionNumber}/{totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((answer) => (
          <ButtonWrapper
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}
            key={answer}
          >
            <button disabled={!!userAnswer} value={answer} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Container>
  );
};

export default QuestionCard;
