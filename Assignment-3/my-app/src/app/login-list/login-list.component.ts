import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Login } from '../login/login.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-login-list',
  templateUrl: './login-list.component.html',
  styleUrl: './login-list.component.css'
})
export class LoginListComponent {
  logins: Login[]=[];
  private loginsSub: Subscription;

  constructor(private loginsService: PostService) {

  }
  ngOnInit() {
    this.loginsService.getLogin();
      this.loginsSub = this.loginsService.getLoginUpdateListener().subscribe((logins: Login[])=>{
        this.logins = logins;
      });

  }
  onDelete(loginId: string){
    this.loginsService.deletePost(loginId)
  }
  ngOnDestroy() {
      this.loginsSub.unsubscribe();
  }
}
