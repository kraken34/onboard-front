import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth/auth.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/internal/Observable';
import {Utilisateur} from './auth/auth.domains';

/**
 * Composant principal de l'application.
 */
@Component({
  selector: 'app-root',
  template: `
    <div style="padding-top:80px">
      <div class="jumbotron">
        <h2 class="h1 h1-responsive">Super Application</h2>

        <div>
          <span *ngIf="!(utilisateurConnecte | async).estAnonyme()">{{(utilisateurConnecte | async).email}}</span>
          <span *ngIf="!(utilisateurConnecte | async).estAnonyme()">({{(utilisateurConnecte | async).roles}})</span>
          <app-menu [obs_visiteur_courant]="utilisateurConnecte"></app-menu>
          <a  class="btn btn-danger" (click)="seDeconnecter()" *ngIf="!(utilisateurConnecte | async).estAnonyme()">Se déconnecter</a>
        </div>
      </div>
      <router-outlet ></router-outlet>
    <div>
    <app-accueil></app-accueil>
    <app-liste-produits></app-liste-produits>
  `,
  styles: []
})
export class AppComponent implements OnInit {

  utilisateurConnecte: Observable<Utilisateur>;

  constructor(private _authSrv: AuthService, private _router: Router) {

  }

  /**
   * Action déconnecter collègue.
   */
  seDeconnecter() {
    this._authSrv.seDeconnecter().subscribe(
      value => this._router.navigate(['/auth'])
    );
  }

  /**
   * A l'initialisation, le composant s'abonne au flux du collègue courant connecté.
   *
   * Celui lui permet de rester à jour en fonction des connexions et déconnexions.
   */
  ngOnInit(): void {

    this.utilisateurConnecte = this._authSrv.utilisateurConnecteObs;
  }

}
