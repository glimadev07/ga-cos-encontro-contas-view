import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

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
      status: 'xxxxxxxxxx',
      tipoOperacao: 'xxxxxxxxxx',
      carta: 'xxxxxxxxxx',
      dtStatus: 'xxxxxxxxxx',
      ramo: 'xxxxxxxxxx',
      apoliceSubapolice: 'xxxxxxxxxx',
      endosso: 'xxxxxxxxxx',
      parc: 'xxxxxxxxxx',
      sinistro: 'xxxxxxxxxx',
      valor: 'xxxxxxxxxx',
      detalhes: 'xxxxxxxxxx'
    }
  ];

  constructor(private formBuilder: UntypedFormBuilder, private router:Router) { }

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

  navigate() {
    this.router.navigate(['/detalhes']);
  }
}
