import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";

import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { MatTableModule } from "@angular/material/table";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { AppComponent } from "./app.component";
import { SchemeComponent } from "./SchemeMasters/app.Scheme.Component";
import { AllSchemeComponent } from "./SchemeMasters/app.AllScheme.Component";
import { EditSchemeComponent } from "./SchemeMasters/app.EditScheme.Component";
import { PlanMasterComponent } from "./PlanMaster/app.planmaster.component";
import { AllPlanMasterComponent } from "./PlanMaster/app.allplanmaster.component";
import { EditPlanComponent } from "./PlanMaster/app.EditPlan.component";
import { RoleComponent } from "./RoleMaster/app.Role.component";
import { AllRoleComponent } from "./RoleMaster/app.AllRole.component";
import { EditRoleComponent } from "./RoleMaster/app.EditRole.component";
import { MemberRegistrationComponent } from "./MemberRegistration/app.MemberRegistration.component";
import { EditMemberRegistrationComponent } from "./MemberRegistration/app.EditMemberRegistration.component";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatInputModule } from "@angular/material/input";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatFormFieldModule } from "@angular/material/form-field";
import { UserRegistrationComponent } from "./CreateUsers/app.UserRegistration.component";
import { AllUserRegistrationComponent } from "./CreateUsers/app.AllUserRegistration.component";
import { EditUserRegistrationComponent } from "./CreateUsers/app.EditUserRegistration.component";
import { AssignRoleComponent } from "./AssignRole/app.AssignRole.component";
import { AllAssignRoleComponent } from "./AssignRole/app.AllAssignRole.component";
import { MemberListComponent } from "./MemberRegistration/List/app.MemberListComponent ";
import { MemberViewComponent } from "./MemberRegistration/List/app.MemberViewComponent";
import { PaymentOverviewComponent } from "./Payment/List/app.PaymentOverviewComponent";
import { PaymentListComponent } from "./Payment/List/app.PaymentListComponent";
import { RenewalComponent } from "./Renewal/app.Renewal.Component";
import { LoginComponent } from "./Login/app.LoginComponent";
import { AppAdminLayoutComponent } from "./_layout/app-adminlayout.component";
import { UserDashboardComponent } from "./UserDashboard/app.UserDashboardComponent";
import { AdminDashboardComponent } from "./AdminDashboard/app.AdminDashboardComponent";
import { MemberDetailsReportComponent } from "./Reports/app.MemberDetailsReport.Component";
import { YearwiseReportComponent } from "./Reports/app.YearwiseReport.Component";
import { MonthwiseReportComponent } from "./Reports/app.MonthwiseReport.Component";
import { RenewalReportComponent } from "./Reports/app.RenewalReport.Component";
import { AppUserLayoutComponent } from "./_layout/app-userlayout.component";
import { AdminLogoutComponent } from "./Login/app.AdminLogout.Component";
import { UserLogoutComponent } from "./Login/app.UserLogout.Component";
import { AdminAuthGuardService } from "./AuthGuard/AdminAuthGuardService";
import { UserAuthGuardService } from "./AuthGuard/UserAuthGuardService";
import { GenerateRecepitComponent } from "./Recepit/app.generateRecepit.Component";

@NgModule({
  declarations: [
    AppComponent,
    AppAdminLayoutComponent,
    AppUserLayoutComponent,
    SchemeComponent,
    AllSchemeComponent,
    EditSchemeComponent,
    PlanMasterComponent,
    AllPlanMasterComponent,
    EditPlanComponent,
    RoleComponent,
    AllRoleComponent,
    EditRoleComponent,
    MemberRegistrationComponent,
    MemberListComponent,
    MemberViewComponent,
    EditMemberRegistrationComponent,
    UserRegistrationComponent,
    AllUserRegistrationComponent,
    EditUserRegistrationComponent,
    AssignRoleComponent,
    AllAssignRoleComponent,
    PaymentOverviewComponent,
    PaymentListComponent,
    RenewalComponent,
    LoginComponent,
    AdminLogoutComponent,
    UserLogoutComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    MemberDetailsReportComponent,
    YearwiseReportComponent,
    MonthwiseReportComponent,
    RenewalReportComponent,
    GenerateRecepitComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BsDatepickerModule.forRoot(),
    MatTableModule,
    MatAutocompleteModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
  ],
  exports: [BsDatepickerModule],
  providers: [DatePipe, AdminAuthGuardService, UserAuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
