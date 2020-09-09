import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CoilingServService } from '../services/coiling-serv.service';
import { ChamferingServService } from '../services/chamfering-serv.service';
import { GrindingServService } from '../services/grinding-serv.service';
import { HpsServService } from '../services/hps-serv.service';
import { SpccServService } from '../services/spcc-serv.service';

import {  } from 'rxjs';
import { CoilingInt } from '../interfaces/coiling-int';
import { ChamferingInt } from '../interfaces/chamfering-int';
import { GrindingInt } from '../interfaces/grinding-int';
import { HpsInt } from '../interfaces/hps-int';
import { SpccInt } from '../interfaces/spcc-int';
import { Key } from 'protractor';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-avail',
  templateUrl: './avail.component.html',
  styleUrls: ['./avail.component.css']
})
export class AvailComponent implements OnInit {

  coiling: CoilingInt;
  chamfering: ChamferingInt = null;
  grinding: GrindingInt = null;
  hps: HpsInt;
  spcc: SpccInt = null;

  CoilingMessage = null;
  ChamferMessage = null;
  GrindingMessage = null;
  HpsMessage = null;
  SpccMessage = null;

  errCoiling = null;
  errChamfering = null;
  errGrinding = null;
  errHps = null;
  errSpcc = null;

  constructor(private coilingService: CoilingServService,
    private chamferingService: ChamferingServService,
    private grindingService: GrindingServService,
    private hpsService: HpsServService,
    private spccService: SpccServService) { }



  ngOnInit(): void {
  }

  coilingSubmit(form: NgForm){
    this.coilingService.getAllCoiling()
    .subscribe((data: CoilingInt) => setTimeout(()=>{
      this.coiling = data;
      if(form.value.coilingsel == 0){
        for(let key in this.coiling){        
          if(this.coiling[key].KEBPnt == form.value.coilingtool){          
            this.CoilingMessage = true;
            return;
          }
        }
        this.errCoiling = true;
      }else if(form.value.coilingsel == 1){
        for(let key in this.coiling){
          if(this.coiling[key].KEBPIDMandrel == form.value.coilingtool){
            this.CoilingMessage = true;
            return;
          }
        }
        this.errCoiling = true;
      }else if(form.value.coilingsel == 2){
        for(let key in this.coiling){
          if(this.coiling[key].KEBPODBush == form.value.coilingtool){
            this.CoilingMessage = true;
            return;
          }
        }
        this.errCoiling = true;
      }else if(form.value.coilingsel == 3){
        for(let key in this.coiling){
          if(this.coiling[key].KEBPLengthM == form.value.coilingtool){
            this.CoilingMessage = true;
            return;
          }
        }
        this.errCoiling = true;
      }else if(form.value.coilingsel == 4){
        for(let key in this.coiling){
          if(this.coiling[key].KEBPPitchTool == form.value.coilingtool){
            this.CoilingMessage = true;
            return;
          }
        }
        this.errCoiling = true;
      }else if(form.value.coilingsel == 5){
        for(let key in this.coiling){
          if(this.coiling[key].KEBPImessBushLo == form.value.coilingtool){
            this.CoilingMessage = true;
            return;
          }
        }
        this.errCoiling = true;
      }else if(form.value.coilingsel == 6){
        for(let key in this.coiling){
          if(this.coiling[key].KEBPImessBushOD == form.value.coilingtool){
            this.CoilingMessage = true;
            return;
          }
        }
        this.errCoiling = true;
      }else if(form.value.coilingsel == 7){
        for(let key in this.coiling){
          if(this.coiling[key].WGENFeedRoller == form.value.coilingtool){
            this.CoilingMessage = true;
            return;
          }
        }
        this.errCoiling = true;
      }else if(form.value.coilingsel == 8){
        for(let key in this.coiling){
          if(this.coiling[key].WTHGWireGuide == form.value.coilingtool){
            this.CoilingMessage = true;
            return;
          }
        }
        this.errCoiling = true;
      }else if(form.value.coilingsel == 9){
        for(let key in this.coiling){
          if(this.coiling[key].ENCutterInserts == form.value.coilingtool){
            this.CoilingMessage = true;
            return;
          }
        }
        this.errCoiling = true;
      }else if(form.value.coilingsel == 10){
        for(let key in this.coiling){
          if(this.coiling[key].ENCoilingMandrel == form.value.coilingtool){
            this.CoilingMessage = true;
            return;
          }
        }
        this.errCoiling = true;
      }
    }, 3000));


  }

  resetCoiling(){
    this.CoilingMessage = false;
    this.errCoiling = false;
  }

  grindingSubmit(form: NgForm){
    this.grindingService.getAllGrinding()
    .subscribe((data: GrindingInt) => setTimeout(() => {
      this.grinding = data;
      if(form.value.grindingsel == 0){
        for(let key in this.grinding){
          if(this.grinding[key].SSEPODDisk == form.value.grindingtool){
            this.GrindingMessage = true;
            return;
          }
        }
        this.errGrinding = true;
      }else if(form.value.grindingsel == 1){
        for(let key in this.grinding){
          if(this.grinding[key].SSEPThicknessDisk == form.value.grindingtool){
            this.GrindingMessage = true;
            return;
          }
        }
        this.errGrinding = true;
      }else if(form.value.grindingsel == 2){
        for(let key in this.grinding){
          if(this.grinding[key].SSEPIdBush == form.value.grindingtool){
            this.GrindingMessage = true;
            return;
          }
        }
        this.errGrinding = true;
      }else if(form.value.grindingsel == 3){
        for(let key in this.grinding){
          if(this.grinding[key].SSEPThicknessBush == form.value.grindingtool){
            this.GrindingMessage = true;
            return;
          }
        }
        this.errGrinding = true;
      }else if(form.value.grindingsel == 4){
        for(let key in this.grinding){
          if(this.grinding[key].SSEPODBush == form.value.grindingtool){
            this.GrindingMessage = true;
            return;
          }
        }
        this.errGrinding = true;
      }else if(form.value.grindingsel == 5){
        for(let key in this.grinding){
          if(this.grinding[key].SSEPHoleF == form.value.grindingtool){
            this.GrindingMessage = true;
            return;
          }
        }
        this.errGrinding = true;
      }else if(form.value.grindingsel == 6){
        for(let key in this.grinding){
          if(this.grinding[key].SSEPLoBush == form.value.grindingtool){
            this.GrindingMessage = true;
            return;
          }
        }
        this.errGrinding = true;
      }
    }));    

  }

  resetGrinding(){
    this.GrindingMessage = false;
    this.errGrinding = false;
  }

  hpsSubmit(form: NgForm){
    this.hpsService.getAllHps()
    .subscribe((data: HpsInt) => setTimeout(() => {
      this.hps = data;
      if(form.value.hpssel == 0){
        for(let key in this.hps){
          if(this.hps[key].SSEPLoadTestL1 == form.value.hpstool){
            this.HpsMessage = true;
            return;
          }
        }
        this.errHps = true;
      }else if(form.value.hpssel == 1){
        for(let key in this.hps){
          if(this.hps[key].SSEPLoadTestL2 == form.value.hpstool){
            this.HpsMessage = true;
            return;
          }
        }
        this.errHps = true;
      }else if(form.value.hpssel == 2){
        for(let key in this.hps){
          if(this.hps[key].KEBPStripperIDControlID == form.value.hpstool){
            this.HpsMessage = true;
            return;
          }
        }
        this.errHps = true;
      }else if(form.value.hpssel == 3){
        for(let key in this.hps){
          if(this.hps[key].KEBPInnerDiameterTestOD1 == form.value.hpstool){
            this.HpsMessage = true;
            return;
          }
        }
        this.errHps = true;
      }else if(form.value.hpssel == 4){
        for(let key in this.hps){
          if(this.hps[key].KEBPInnerDiameterTestOD2 == form.value.hpstool){
            this.HpsMessage = true;
            return;
          }
        }
        this.errHps = true;
      }else if(form.value.hpssel == 5){
        for(let key in this.hps){
          if(this.hps[key].SSEPBottomSectionIDControlID == form.value.hpstool){
            this.HpsMessage = true;
            return;
          }
        }
        this.errHps = true;
      }else if(form.value.hpssel == 6){
        for(let key in this.hps){
          if(this.hps[key].SSEPBottomSectionIDControlOD == form.value.hpstool){
            this.HpsMessage = true;
            return;
          }
        }
        this.errHps = true;
      }else if(form.value.hpssel == 7){
        for(let key in this.hps){
          if(this.hps[key].SSEPODBoxOD == form.value.hpstool){
            this.HpsMessage = true;
            return;
          }
        }
        this.errHps = true;
      }
    }));
  }

  resetHps(){
    this.HpsMessage = false;
    this.errHps = false;
  }

  //Needs To be made changes
  //Got An Error Here!
  ccSubmit(form: NgForm){
    this.spccService.getAllSpcc()
    .subscribe((data: SpccInt) => setTimeout(() => {
      this.spcc = data;
      if(form.value.ccsel == 0){
        for(let key in this.spcc){
          if(this.spcc[key].SIIDimenClichePlateDimen == form.value.cctool){
            this.SpccMessage = true;
            return;
          }
        }
        this.errSpcc = true;
      }else if(form.value.ccsel == 1){
        for(let key in this.spcc){
          if(this.spcc[key].SIIDimenTamponSideSide == form.value.cctool){
            this.SpccMessage = true;
            return;
          }
        }
        this.errSpcc = true;
      }else if(form.value.ccsel == 2){
        for(let key in this.spcc){
          if(this.spcc[key].SIIDimenTamponSideTop == form.value.cctool){
            this.SpccMessage = true;
            return;
          }
        }
        this.errSpcc = true;
      }
    }));
    console.log(this.spcc);
  }

  resetSpcc(){
    this.SpccMessage = false;
    this.errSpcc = false;
  }

  chamferSubmit(form: NgForm){
    this.chamferingService.getAllChamfering()
    .subscribe((data: ChamferingInt) => setTimeout(() => {
      this.chamfering = data;
      if(form.value.chamfersel == 0){
        for(let key in this.chamfering){
          if(this.chamfering[key].MAChamferingMachine == form.value.chamferingtool){
            this.ChamferMessage = true;
            return;
          }
        }
        this.errChamfering = true;
      }
    }));
  }

  resetChamfering(){
    this.ChamferMessage = false;
    this.errChamfering = false;
  }
}
