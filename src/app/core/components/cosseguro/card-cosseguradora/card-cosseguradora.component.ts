import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-card-cosseguradora',
  templateUrl: './card-cosseguradora.component.html',
  styleUrls: ['./card-cosseguradora.component.scss']
})
export class CardCosseguradoraComponent implements OnInit {

  cosseguroForm!: UntypedFormGroup;
  filtroPesquisa: boolean = false;

  displayedColumns: string[] = ['status', 'tipoOperacao', 'carta', 'dtStatus','ramo','apoliceSubapolice','endosso','parc','sinistro','valor','detalhes'];
  dataSource = new MatTableDataSource<any>([]);

  mocks = [
    {
      status: 'ATV',
      tipoOperacao: '12 - 1',
      carta: '1234',
      dtStatus: '01/11/23',
      ramo: '3',
      apoliceSubapolice: '123653434',
      endosso: '213',
      parc: '10%',
      sinistro: '123',
      valor: 'R$ 20,00',
      detalhes: ''
    }
  ];

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

    this.dataSource.data = this.mocks;
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
