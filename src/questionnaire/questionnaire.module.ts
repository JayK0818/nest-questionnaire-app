import { Module } from "@nestjs/common";
import { QuestionnaireController } from "./questionnaire.controller";
import { QuestionnaireService } from "./questionnaire.service";

@Module({
  providers: [QuestionnaireService],
  controllers: [QuestionnaireController]
})

export class QuestionnaireModule {

}