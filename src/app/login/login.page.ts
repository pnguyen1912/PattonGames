import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router
} from '@angular/router'
import {
  CognitoService
} from '../cognito.service';
import {
  AlertController
} from '@ionic/angular';
import {
  ToastController
} from '@ionic/angular';
import {
  RestapiService
} from '../restapi.service';

@Component({
  selector: 'app-alogin',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  element: HTMLElement;
  email: string;
  password: string;


  constructor(public api: RestapiService,
    private router: Router, public cognitoService: CognitoService, public alertCtrl: AlertController, public toastCtrl: ToastController) {
    if (this.cognitoService.getAuthenticatedUser() != null) {
      this.api.getData();
      setTimeout(() => {
        this.router.navigate(['/main'])

      }, 1000);
      console.log(this.cognitoService.getAuthenticatedUser())
      this.cognitoService.getAuthenticatedUser().getSession(function (err, session) {
        if (err) {
          alert(err);
          return;
        }
        console.log('session validity: ' + session.isValid());

      }, );
    }
  };

  DOB: any;
  gender: any;
  SelectedValue: any;

  ngOnInit() {}

newlogin(){
let main1 = document.getElementById('main1')
let login = document.getElementById('login')
let signup = document.getElementById('signup')
main1.style.display = 'none'
login.style.display = 'block'
signup.style.display = 'none'
}

newsignup(){
  let main1 = document.getElementById('main1')
  let login = document.getElementById('login')
  let signup = document.getElementById('signup')
  main1.style.display = 'none'
  login.style.display = 'none'
  signup.style.display = 'block'
}

goBack1(){
  let main1 = document.getElementById('main1')
  let login = document.getElementById('login')
  let signup = document.getElementById('signup')
  main1.style.display = 'block'
  login.style.display = 'none'
  signup.style.display = 'none'
}





  login() {
    this.cognitoService.authenticate(this.email, this.password).then((res) => {
      console.log("User logged in");
      console.log(res);
      console.log(res['idToken']['jwtToken']);
       this.api.getData();
      setTimeout(() => {
        this.router.navigate(['/main'])

      }, 1000);

      this.presentToast();
    }, (err) => {
      console.log("user not logged in!");
      console.log(err);
    })
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'You were Signed In',
      duration: 2000
    });
    toast.present();
  }

  register() {

    //  this.api.User.gender = this.gender
    //  this.api.User.DOB = this.DOB


    //  console.log(this.api.User)


    this.cognitoService.signUp(this.email, this.password).then(
      res => {
        this.promptVerificationCode();
      },
      err => {

        console.log(err);
      }
    );
  }

  async promptVerificationCode() {
    let alert = await this.alertCtrl.create({
      message: "Enter Verfication Code",
      inputs: [{
        name: "VerificationCode",
        placeholder: "Verification Code"
      }],
      buttons: [{
          text: "Cancel",
          role: "cancel",
          handler: data => {
            console.log("Cancel clicked");
          }
        },
        {
          text: "Verify",
          handler: data => {
            this.verifyUser(data.VerificationCode);
          }
        }

      ]
    });
    await alert.present();
  }

  verifyUser(VerificationCode) {
    this.cognitoService.confirmUser(VerificationCode, this.email).then(
      res => {
        console.log(res);
        this.successAlert();
      },
      err => {
        alert(err.message);
      }
    );
  }

  async successAlert() {
    const alert = await this.alertCtrl.create({
      header: "Success",
      message: "You are now registered!",
      buttons: ["Sweet!"]
    });
    alert.onDidDismiss().then(() => {
      this.router.navigate(['/main']);
    });
    await alert.present();
  }

  onChange(SelectedValue) {
    console.log("Selected", SelectedValue)

  }

}