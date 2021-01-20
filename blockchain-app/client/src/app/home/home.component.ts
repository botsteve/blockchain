import { Component, OnInit } from '@angular/core';
import { NetworkService } from '../api/network.service';
const test = require('../../../../server/local_fabric_wallet/connection.json')

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  certAuth: string = '';
  certAuthName: string = '';
  certAuthUrl: string = '';
  walletName: string = '';
  organization: string = '';
  orgMsipd: string = '';
  orgPeersName: string = '';
  orgPeersUrl: string = '';
  version: string = '';

  constructor() { }

  ngOnInit(): void {
    this.parseConnectionProfile();
  }


  parseConnectionProfile() {
    const allPropertyNames = Object.keys(test['certificateAuthorities']);
    const certAuthProp = Object.keys(test['certificateAuthorities'][allPropertyNames[0]]);
    const organizations = Object.keys(test['organizations']);
    const organizationParams = Object.keys(test['organizations'][organizations[0]]);
    const peers = Object.keys(test['peers']);
    const peersValues = Object.keys(test['peers'][peers[0]]);

    this.orgPeersUrl = test['peers'][peers[0]][peersValues[0]];
    this.organization = organizations[0]
    this.orgMsipd = test['organizations'][organizations[0]][organizationParams[1]];
    this.orgPeersName = test['organizations'][organizations[0]][organizationParams[2]][0];
    this.certAuth = allPropertyNames[0];
    this.certAuthName = test['certificateAuthorities'][allPropertyNames[0]][certAuthProp[0]]
    this.certAuthUrl = test['certificateAuthorities'][allPropertyNames[0]][certAuthProp[1]];
    this.walletName = test['name'];
    this.version = test['version'];

    console.log(this.certAuth,this.certAuthName,this.certAuthUrl,this.walletName, this.version, this.orgPeersName,this.organization,this.orgMsipd, this.orgPeersUrl);
    
  }

}
