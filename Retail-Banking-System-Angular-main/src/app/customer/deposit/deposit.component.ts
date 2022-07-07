import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AccountInput } from "@app/_models/accountinput";
import { AuthenticationService } from "@app/_services";
import { TransactionService } from "@app/_services/transaction.service";
import { first } from "rxjs/operators";

@Component({
  selector: "app-deposit",
  templateUrl: "./deposit.component.html",
})
export class DepositComponent implements OnInit {
  depositForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = "";
  accountInput = new AccountInput();

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private transactionService: TransactionService,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.depositForm = this.formBuilder.group({
      accountid: ["", Validators.required],
      amount: ["", Validators.required],
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }
  // convenience getter for easy access to form fields
  get f() {
    return this.depositForm.controls;
  }

  deposit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.depositForm.invalid) {
      return;
    }

    this.loading = true;

    this.transactionService
      .deposit(this.f.accountid.value, this.f.amount.value)
      .pipe(first())
      .subscribe((account) => {
        console.log(account);
        this.router.navigate(["/customer", this.route.snapshot.params.customerid]);
      });
  }

  
  transfer() {
    this.router.navigate(["transfer"], { relativeTo: this.route });
  }

  withdraw() {
    this.router.navigate(["withdraw"], { relativeTo: this.route });
  }
  viewTransactions() {
    this.router.navigate(["transactions"], { relativeTo: this.route });
  }
  viewStatements() {
    this.router.navigate(["statements"], { relativeTo: this.route });
  }

  getDashboard() {
    this.router.navigate(["/customer", this.route.snapshot.params.customerid]);
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(["/login"]);
  }
}
