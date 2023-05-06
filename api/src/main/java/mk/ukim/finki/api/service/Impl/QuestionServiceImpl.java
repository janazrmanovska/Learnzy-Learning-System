package mk.ukim.finki.api.service.Impl;

import mk.ukim.finki.api.model.Question;
import mk.ukim.finki.api.repository.QuestionRepository;
import mk.ukim.finki.api.repository.QuizRepository;
import mk.ukim.finki.api.restController.requests.QuestionRequest;
import mk.ukim.finki.api.service.QuestionService;
import mk.ukim.finki.api.service.dto.QuestionDto;
import mk.ukim.finki.api.service.mapper.QuestionMapper;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class QuestionServiceImpl implements QuestionService {

    private final QuestionRepository questionRepository;

    private final QuizRepository quizRepository;

    private final QuestionMapper questionMapper;

    public QuestionServiceImpl(QuestionRepository questionRepository, QuizRepository quizRepository, QuestionMapper questionMapper) {
        this.questionRepository = questionRepository;
        this.quizRepository = quizRepository;
        this.questionMapper = questionMapper;
    }

    @Override
    public QuestionDto getQuizQuestion(Long quizId, Long questionId) {

        Optional<Question> question = this.questionRepository.findByQuestionIdAndQuiz(questionId,
                this.quizRepository.findById(quizId).get());

        return this.questionMapper.mapToQuestionOutput(question.get());
    }

    @Override
    public QuestionDto answerQuizQuestion(Long quizId, Long questionId, String chosenAnswer) {
        Optional<Question> question = this.questionRepository.findByQuestionIdAndQuiz(questionId,
                this.quizRepository.findById(quizId).get());

        question.get().setChosenAnswer(chosenAnswer);
        this.questionRepository.save(question.get());

        return this.questionMapper.mapToQuestionOutput(question.get());
    }

    @Override
    public QuestionDto createQuestion(QuestionRequest questionRequest) {
        Question question = new Question();

        question.setQuiz(this.quizRepository.findById(questionRequest.getQuizId()).get());
        question.setQuestionContent(questionRequest.getQuestionContent());
        question.setQuestionContent(questionRequest.getPossibleAnswers().toString());

        this.questionRepository.save(question);
        return this.questionMapper.mapToQuestionOutput(question);
    }
}
