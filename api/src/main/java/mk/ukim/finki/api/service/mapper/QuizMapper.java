package mk.ukim.finki.api.service.mapper;

import mk.ukim.finki.api.model.Question;
import mk.ukim.finki.api.model.Quiz;
import mk.ukim.finki.api.service.dto.QuizResult;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Component
public class QuizMapper {

    public QuizResult mapToQuizResult (Quiz quiz) {
        QuizResult quizResult = new QuizResult();

        Double quizScore = calculateScore(quiz.getTotalQuestions(), countCorrectQuestions(quiz.getQuestions()));
        Map<String, Boolean> questionsAndCorrectness = mapQuizQuestions(quiz.getQuestions());

        quizResult.setQuizId(quiz.getQuizId());
        quizResult.setScore(quizScore);
        quizResult.setQuestions(questionsAndCorrectness);

        return quizResult;
    }

    private Double calculateScore(int totalQuestions, int correctlyAnsweredQuestions) {
        return correctlyAnsweredQuestions/totalQuestions*100.00;
    }

    private Map<String, Boolean> mapQuizQuestions(List<Question> questions) {
        Map<String, Boolean> resultQuestions = new HashMap<>();

        for (Question q : questions) {
            resultQuestions.put(q.getQuestionContent(), q.getIsCorrectlyAnswered());
        }

        return resultQuestions;
    }

    private Integer countCorrectQuestions(List<Question> questions) {
        int numCorrect = 0;

        for(Question q : questions) {
            if(q.getIsCorrectlyAnswered())
                numCorrect++;
        }

        return numCorrect;
    }


}
