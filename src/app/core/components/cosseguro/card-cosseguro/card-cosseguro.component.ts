import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-card-cosseguro',
  templateUrl: './card-cosseguro.component.html',
  styleUrls: ['./card-cosseguro.component.scss']
})
export class CardCosseguroComponent implements OnInit {

  cosseguroForm!: UntypedFormGroup;
  filtroPesquisa: boolean = false;

  constructor(private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.cosseguroForm = this.formBuilder.group({
      codigo: [''],
      nome: [''],
      status: [''],
      tipoOperacao: [''],
      carta: [''],
      dataStatus: [''],
      ramo: [''],
      apoliceSubApolice: [''],
      endosso: [''],
      Pano: [''],
      sinistro: [''],
      valor: [''],
      numeroOrdem: [''],
      numero: [''],
      sinistroOficial: [''],
      dataPagPlataforma: [''],
      cliente: [''],
      cd: [''],
    });
  }

  onSubmit() {
  }

  pesquisaBasica(){
    this.filtroPesquisa = false
  }

  espandirPesquisa(){
    if(this.filtroPesquisa === false){
      return this.filtroPesquisa = true
    }
    return this.filtroPesquisa = false
  }


  clear() {
    this.cosseguroForm.reset({
      codigo: null,
      nome: null,
      status: [''],
      tipoOperacao: [''],
      carta: [''],
      dataStatus: [''],
      ramo: [''],
      apoliceSubApolice: [''],
      endosso: [''],
      Pano: [''],
      sinistro: [''],
      valor: [''],
      numeroOrdem: [''],
      numero: [''],
      sinistroOficial: [''],
      dataPagPlataforma: [''],
      cliente: [''],
      cd: [''],
    });
  }

}
