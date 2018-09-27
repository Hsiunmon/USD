import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
const routes: Routes = [
    {
        path: '', component: LayoutComponent, children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule' },
            { path: 'another-page', loadChildren: '../another/another.module#AnotherModule' },
            { path: 'listmanage', loadChildren: '../listmanage/listmanage.module#ListmanageModule' },
            { path: 'userprofile', loadChildren: '../userprofile/userprofile.module#UserprofileModule' },
            { path: 'campaign', loadChildren: '../campaign/campaign.module#CampaignModule' },
            { path: 'creativelibrary', loadChildren: '../creativelibrary/creativelibrary.module#CreativelibraryModule' },
            { path: 'createnewcampaign', loadChildren: '../createnewcampaign/createnewcampaign.module#CreatenewcampaignModule' },
            { path: 'customizedirectmail', loadChildren: '../customizedirectmail/customizedirectmail.module#CustomizedirectmailModule' },
            { path: 'customizeemail', loadChildren: '../customizeemail/customizeemail.module#CustomizeemailModule' },
            { path: 'customizepurl', loadChildren: '../customizepurl/customizepurl.module#CustomizepurlModule' },
            { path: 'uploadlist', loadChildren: '../uploadlist/uploadlist.module#UploadlistModule' },
            { path: 'uploadlistmapping', loadChildren: '../uploadlistmapping/uploadlistmapping.module#UploadlistmappingModule' },
            { path: 'proof', loadChildren: '../proof/proof.module#ProofModule' },
            { path: 'uploadlistreport', loadChildren: '../uploadlistreport/uploadlistreport.module#UploadlistreportModule' },
            { path: 'portalbillingapprove', loadChildren: '../portalbillingapprove/portalbillingapprove.module#PortalbillingapproveModule' },
            { path: 'portalbillingcc', loadChildren: '../portalbillingcc/portalbillingcc.module#PortalbillingccModule' },
            { path: 'portalbillingsummary', loadChildren: '../portalbillingsummary/portalbillingsummary.module#PortalbillingsummaryModule' },
        ]
    }
];

export const ROUTES = RouterModule.forChild(routes);