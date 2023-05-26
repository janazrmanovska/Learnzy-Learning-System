package mk.ukim.finki.api.service.Impl;

import mk.ukim.finki.api.model.*;
import mk.ukim.finki.api.repository.LessonRepository;
import mk.ukim.finki.api.repository.QuestionRepository;
import mk.ukim.finki.api.repository.QuizRepository;
import mk.ukim.finki.api.repository.QuizScoreRepository;
import mk.ukim.finki.api.restController.requests.QuizRequest;
import mk.ukim.finki.api.service.QuizService;
import mk.ukim.finki.api.service.dto.QuizResult;
import mk.ukim.finki.api.service.mapper.QuizMapper;
import org.springframework.stereotype.Service;

import java.util.*;

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

        Lesson lesson = this.lessonRepository.findById(quizRequest.getLessonId()).get();

        List<Question> questions = new ArrayList<>();
        for (long quizId : quizRequest.getQuestionIds()) {
            questions.add(this.questionRepository.findById(quizId).get());
        }

        Quiz quiz = new Quiz();

        quiz.setName(quizRequest.getName());
        quiz.setDescription(quizRequest.getDescription());
        quiz.setTotalQuestions(quizRequest.getTotalQuestions());
        quiz.setLesson(lesson);
        quiz.setQuestions(questions);
        quiz.setScores(new HashSet<>());

        return quiz;
    }

    @Override
    public QuizResult finishQuiz(Long quizId) {
        //we should set the score in quizScoreRepository

        Optional<Quiz> quiz = this.quizRepository.findById(quizId);

        return this.quizMapper.mapToQuizResult(quiz.get());
    }
    @Override
    public void finishQuiz(User user, Quiz quiz, Map<Long, String> userAnswers) {
        int score = 0;

        for (Question question : quiz.getQuestions()) {
            String chosenAnswer = userAnswers.get(question.getQuestionId());

            if (chosenAnswer != null && chosenAnswer.equals(question.getChosenAnswer())) {
                question.setIsCorrectlyAnswered(true);
                score++;
            } else {
                question.setIsCorrectlyAnswered(false);
            }
        }

        user.setScore(user.getScore() + score);

        QuizScore quizScore = new QuizScore();
        quizScore.setUser(user);
        quizScore.setQuiz(quiz);
        quizScore.setScore((double) score);
        quiz.getScores().add(quizScore);
    }
    @Override
    public Quiz getQuizById(Long quizId) {
        return quizRepository.findById(quizId)
                .orElseThrow(() -> new NoSuchElementException("Quiz not found with ID: " + quizId));
    }

}
