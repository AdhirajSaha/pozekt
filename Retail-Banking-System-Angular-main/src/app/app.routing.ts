import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { EmployeeComponent } from './employee';
import { CustomerComponent } from './customer';
import { AuthGuard } from './_helpers';
import { DepositComponent } from './customer/deposit/deposit.component';
import { StatementsComponent } from './customer/statements/statements.component';
import { TransferComponent } from './customer/transfer/transfer.component';
import { WithdrawComponent } from './customer/withdraw/withdraw.component';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'employee', component: EmployeeComponent },
    { path: 'customer', component: CustomerComponent },
    { path: 'deposit', component: DepositComponent },
    { path: 'statements', component: StatementsComponent },
    { path: 'transfer', component: TransferComponent },
    { path: 'withdraw', component: WithdrawComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);