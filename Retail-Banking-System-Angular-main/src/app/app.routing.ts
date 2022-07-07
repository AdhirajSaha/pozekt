import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home";
import { LoginComponent } from "./login";
import { EmployeeComponent } from "./employee";
import { CustomerComponent } from "./customer";
import { AuthGuard } from "./_helpers";
import { DepositComponent } from "./customer/deposit";
import { WithdrawComponent } from "./customer/withdraw";
import { StatementsComponent } from "./customer/statements";
import { TransferComponent } from "./customer/transfer";

const routes: Routes = [
  { path: "", component: HomeComponent, canActivate: [AuthGuard] },
  { path: "login", component: LoginComponent },
  { path: "employee", component: EmployeeComponent },
  { path: "customer", component: CustomerComponent },
  { path: "deposit", component: DepositComponent },
  { path: "withdraw", component: WithdrawComponent },
  { path: "transactions", component: TransferComponent },
  { path: "statements", component: StatementsComponent },

  // otherwise redirect to home
  { path: "**", redirectTo: "" },
];

export const appRoutingModule = RouterModule.forRoot(routes);
