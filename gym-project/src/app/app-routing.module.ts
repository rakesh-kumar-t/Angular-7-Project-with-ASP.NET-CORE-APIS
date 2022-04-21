import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminDashboardComponent } from "./AdminDashboard/app.AdminDashboardComponent";
import { AllAssignRoleComponent } from "./AssignRole/app.AllAssignRole.component";
import { AssignRoleComponent } from "./AssignRole/app.AssignRole.component";
import { AdminAuthGuardService } from "./AuthGuard/AdminAuthGuardService";
import { UserAuthGuardService } from "./AuthGuard/UserAuthGuardService";
import { AllUserRegistrationComponent } from "./CreateUsers/app.AllUserRegistration.component";
import { EditUserRegistrationComponent } from "./CreateUsers/app.EditUserRegistration.component";
import { UserRegistrationComponent } from "./CreateUsers/app.UserRegistration.component";
import { AdminLogoutComponent } from "./Login/app.AdminLogout.Component";
import { LoginComponent } from "./Login/app.LoginComponent";
import { UserLogoutComponent } from "./Login/app.UserLogout.Component";
import { EditMemberRegistrationComponent } from "./MemberRegistration/app.EditMemberRegistration.component";
import { MemberRegistrationComponent } from "./MemberRegistration/app.MemberRegistration.component";
import { MemberViewComponent } from "./MemberRegistration/List/app.MemberViewComponent";
import { PaymentOverviewComponent } from "./Payment/List/app.PaymentOverviewComponent";
import { AllPlanMasterComponent } from "./PlanMaster/app.allplanmaster.component";
import { EditPlanComponent } from "./PlanMaster/app.EditPlan.component";
import { PlanMasterComponent } from "./PlanMaster/app.planmaster.component";
import { GenerateRecepitComponent } from "./Recepit/app.generateRecepit.Component";
import { RenewalComponent } from "./Renewal/app.Renewal.Component";
import { MemberDetailsReportComponent } from "./Reports/app.MemberDetailsReport.Component";
import { MonthwiseReportComponent } from "./Reports/app.MonthwiseReport.Component";
import { RenewalReportComponent } from "./Reports/app.RenewalReport.Component";
import { YearwiseReportComponent } from "./Reports/app.YearwiseReport.Component";
import { AllRoleComponent } from "./RoleMaster/app.AllRole.component";
import { EditRoleComponent } from "./RoleMaster/app.EditRole.component";
import { RoleComponent } from "./RoleMaster/app.Role.component";
import { AllSchemeComponent } from "./SchemeMasters/app.AllScheme.Component";
import { EditSchemeComponent } from "./SchemeMasters/app.EditScheme.Component";
import { SchemeComponent } from "./SchemeMasters/app.Scheme.Component";
import { UserDashboardComponent } from "./UserDashboard/app.UserDashboardComponent";
import { AppAdminLayoutComponent } from "./_layout/app-adminlayout.component";
import { AppUserLayoutComponent } from "./_layout/app-userlayout.component";

const routes: Routes = [
  {
    path: "Scheme",
    component: AppAdminLayoutComponent,
    children: [
      {
        path: "Add",
        component: SchemeComponent,
        canActivate: [AdminAuthGuardService],
      },
      {
        path: "Edit/:schemeId",
        component: EditSchemeComponent,
        canActivate: [AdminAuthGuardService],
      },
      {
        path: "All",
        component: AllSchemeComponent,
        canActivate: [AdminAuthGuardService],
      },
    ],
  },
  {
    path: "Plan",
    component: AppAdminLayoutComponent,
    children: [
      {
        path: "Add",
        component: PlanMasterComponent,
        canActivate: [AdminAuthGuardService],
      },
      {
        path: "Edit/:PlanID",
        component: EditPlanComponent,
        canActivate: [AdminAuthGuardService],
      },
      {
        path: "All",
        component: AllPlanMasterComponent,
        canActivate: [AdminAuthGuardService],
      },
    ],
  },
  {
    path: "Role",
    component: AppAdminLayoutComponent,
    children: [
      {
        path: "Add",
        component: RoleComponent,
        canActivate: [AdminAuthGuardService],
      },
      {
        path: "Edit/:RoleID",
        component: EditRoleComponent,
        canActivate: [AdminAuthGuardService],
      },
      {
        path: "All",
        component: AllRoleComponent,
        canActivate: [AdminAuthGuardService],
      },
    ],
  },
  {
    path: "Member",
    component: AppUserLayoutComponent,
    children: [
      {
        path: "Add",
        component: MemberRegistrationComponent,
        canActivate: [UserAuthGuardService],
      },
      {
        path: "Edit/:MemberId",
        component: EditMemberRegistrationComponent,
        canActivate: [UserAuthGuardService],
      },
      {
        path: "All",
        component: MemberViewComponent,
        canActivate: [UserAuthGuardService],
      },
    ],
  },
  {
    path: "User",
    component: AppAdminLayoutComponent,
    children: [
      {
        path: "Add",
        component: UserRegistrationComponent,
        canActivate: [AdminAuthGuardService],
      },
      {
        path: "Edit/:UserId",
        component: EditUserRegistrationComponent,
        canActivate: [AdminAuthGuardService],
      },
      {
        path: "All",
        component: AllUserRegistrationComponent,
        canActivate: [AdminAuthGuardService],
      },
    ],
  },
  {
    path: "Assign",
    component: AppAdminLayoutComponent,
    children: [
      {
        path: "Role",
        component: AssignRoleComponent,
        canActivate: [AdminAuthGuardService],
      },
      {
        path: "AllRole",
        component: AllAssignRoleComponent,
        canActivate: [AdminAuthGuardService],
      },
    ],
  },
  {
    path: "Payment",
    component: AppUserLayoutComponent,
    children: [
      {
        path: "Details",
        component: PaymentOverviewComponent,
        canActivate: [UserAuthGuardService],
      },
    ],
  },
  {
    path: "Renewal",
    component: AppUserLayoutComponent,
    children: [
      {
        path: "Renew",
        component: RenewalComponent,
        canActivate: [UserAuthGuardService],
      },
    ],
  },

  {
    path: "Admin",
    component: AppAdminLayoutComponent,
    children: [
      {
        path: "Dashboard",
        component: AdminDashboardComponent,
        canActivate: [AdminAuthGuardService],
      },
    ],
  },
  {
    path: "User",
    component: AppUserLayoutComponent,
    children: [
      {
        path: "Dashboard",
        component: UserDashboardComponent,
        canActivate: [UserAuthGuardService],
      },
      {
        path: "Recepit/:PaymentID",
        component: GenerateRecepitComponent,
        canActivate: [UserAuthGuardService],
      },
    ],
  },
  {
    path: "Report",
    component: AppAdminLayoutComponent,
    children: [
      {
        path: "Member",
        component: MemberDetailsReportComponent,
        canActivate: [AdminAuthGuardService],
      },
      {
        path: "Yearwise",
        component: YearwiseReportComponent,
        canActivate: [AdminAuthGuardService],
      },
      {
        path: "Monthwise",
        component: MonthwiseReportComponent,
        canActivate: [AdminAuthGuardService],
      },
      {
        path: "Renewal",
        component: RenewalReportComponent,
        canActivate: [AdminAuthGuardService],
      },
    ],
  },

  { path: "Login", component: LoginComponent },
  { path: "AdminLogout", component: AdminLogoutComponent },
  { path: "UserLogout", component: UserLogoutComponent },

  { path: "", redirectTo: "Login", pathMatch: "full" },
  { path: "**", redirectTo: "Login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
