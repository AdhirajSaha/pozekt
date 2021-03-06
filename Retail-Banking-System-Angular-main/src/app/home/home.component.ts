import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from '@app/_models';
import { UserService, AuthenticationService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent {
    loading = false;
    users: User[];

    constructor(private userService: UserService,
        private router: Router) { }

    goToPage(pageName:string):void{
        this.router.navigate([`${pageName}`]);
    }
    
    getDashboard() {
    this.router.navigate(["/employee"]);
  }
  getCustomers() {
    this.router.navigate(["/customer"]);

  }
  getDashboard2() {
    this.router.navigate(["/customer"]);
  }
    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });
    }
}