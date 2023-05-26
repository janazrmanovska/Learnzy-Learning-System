package mk.ukim.finki.api.service.mapper;

import mk.ukim.finki.api.model.Question;
import mk.ukim.finki.api.service.dto.QuestionDto;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Component
public class QuestionMapper {

    public QuestionDto mapToQuestionOutput (Question question) {
        QuestionDto questionDto = new QuestionDto();

        List<String> questionAnswers = mapQuestionAnswers(question.getPossibleAnswers());

        questionDto.setQuestionId(question.getQuestionId());
        questionDto.setQuestionContent(question.getQuestionContent());
        questionDto.setAnswers(questionAnswers);
        questionDto.setChosenAnswer(question.getChosenAnswer());

        return questionDto;
    }

    private List<String> mapQuestionAnswers(Map<String, Boolean> possibleAnswers) {
        List<String> dtoAnswers = new ArrayList<>();

        for(Map.Entry<String, Boolean> entry : possibleAnswers.entrySet()) {
            dtoAnswers.add(entry.getKey());
        }

        return dtoAnswers;
    }
}
