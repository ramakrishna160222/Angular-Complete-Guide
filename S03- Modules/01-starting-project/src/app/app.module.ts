import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { FormsModule } from "@angular/forms";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "./shared/card/shared.module";
import { TasksModule } from "./tasks/tasks.module";


@NgModule({
    declarations:[
        AppComponent,
        HeaderComponent,
        UserComponent
        ],
    imports:[BrowserModule,SharedModule,TasksModule],
   bootstrap:[AppComponent]
})
export class AppModule{

}