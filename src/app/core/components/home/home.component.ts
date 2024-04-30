import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],

})

export class HomeComponent implements OnInit {

  selectedStepIndex: number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  checkRoute(): number {
    if (this.router.url === '/detalhes') return 1;
    if (this.router.url === '/simulacoes') return 2;
    else if (this.router.url === '/resultado') return 3;
    else return 0;
  }

  nextStep() {
    this.selectedStepIndex++;
  }

  prevStep() {
    this.selectedStepIndex--;
  }

  goToRoute(route: string) {
    this.router.navigate([route]);
  }

}
