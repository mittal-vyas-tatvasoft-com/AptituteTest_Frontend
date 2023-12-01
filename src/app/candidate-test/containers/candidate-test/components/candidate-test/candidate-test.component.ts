import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuestionStatusModel } from 'src/app/candidate-test/interfaces/candidate-test.interface';
import { CandidateTestService } from 'src/app/candidate-test/services/candidate-test.service';
import { LoginService } from 'src/app/core/auth/services/login.service';
import { StatusCode } from 'src/app/shared/common/enums';
import { ResponseModel } from 'src/app/shared/common/interfaces/response.interface';
import { SnackbarService } from 'src/app/shared/snackbar/snackbar.service';

@Component({
  selector: 'app-candidate-test',
  templateUrl: './candidate-test.component.html',
  styleUrls: ['./candidate-test.component.scss'],
})
export class CandidateTestComponent implements OnInit {
  userId: number = 187;
  testId = 69;
  questionsStatus: QuestionStatusModel = {
    answered: 0,
    questionStatusVMs: [],
    totalQuestion: 0,
    unAnswered: 0,
  };

  constructor(
    public loginService: LoginService,
    private router: Router,
    private testService: CandidateTestService,
    private snackBarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.getQuestionsStatus();
  }

  getQuestionsStatus() {
    if (this.userId && this.testId) {
      this.testService.getQuestionsStatus(this.userId, this.testId).subscribe({
        next: (response: ResponseModel<QuestionStatusModel>) => {
          if (response.statusCode == StatusCode.Success) {
            this.questionsStatus = response.data;
          } else {
            this.snackBarService.error(response.message);
          }
        },
      });
    }
  }

  loadQuestion(event: number) {}
}
