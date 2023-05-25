package mk.ukim.finki.api.service.Impl;

import mk.ukim.finki.api.model.Question;
import mk.ukim.finki.api.model.Quiz;
import mk.ukim.finki.api.repository.LessonRepository;
import mk.ukim.finki.api.repository.QuestionRepository;
import mk.ukim.finki.api.repository.QuizRepository;
import mk.ukim.finki.api.repository.QuizScoreRepository;
import mk.ukim.finki.api.restController.requests.QuizRequest;
import mk.ukim.finki.api.service.QuizService;
import mk.ukim.finki.api.service.dto.QuizResult;
import mk.ukim.finki.api.service.mapper.QuizMapper;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;

@Service
public class QuizServiceImpl implements QuizService {

    private final QuizRepository quizRepository;
    private final QuestionRepository questionRepository;
    private final LessonRepository lessonRepository;

    private final QuizMapper quizMapper;

    private final QuizScoreRepository quizScoreRepository;

    public QuizServiceImpl(QuizRepository quizRepository, QuestionRepository questionRepository, LessonRepository lessonRepository, QuizMapper quizMapper, QuizScoreRepository quizScoreRepository) {
        this.quizRepository = quizRepository;
        this.questionRepository = questionRepository;
        this.lessonRepository = lessonRepository;
        this.quizMapper = quizMapper;
        this.quizScoreRepository = quizScoreRepository;
    }

    @Override
    public List<Quiz> getAllQuizzes() {
        return this.quizRepository.findAll();
    }

    @Override
    public Quiz createQuiz(QuizRequest quizRequest) {

        List<Question> questions = new ArrayList<>();
        for (long quizId : quizRequest.getQuestionIds()) {
            questions.add(this.questionRepository.findById(quizId).get());
        }

        Quiz quiz = new Quiz();

        quiz.setName(quizRequest.getName());
        quiz.setDescription(quizRequest.getDescription());
        quiz.setTotalQuestions(quizRequest.getTotalQuestions());
        quiz.setQuestions(questions);
        quiz.setScores(new HashSet<>());

        this.quizRepository.save(quiz);

        return quiz;
    }

    @Override
    public QuizResult finishQuiz(Long quizId) {
        //we should set the score in quizScoreRepository

        Optional<Quiz> quiz = this.quizRepository.findById(quizId);

        return this.quizMapper.mapToQuizResult(quiz.get());
    }

}
