import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'applyPormoCode'})
export class PromoCodePipeComponent implements PipeTransform{
  
  transform(value: number, promoCode = 1): number {
      if(promoCode == 1){
        return (value-0.20*value);
      }else if(promoCode == 2){
        return (value-0.40*value);
      }else if(promoCode == 3){
        return (value-0.50*value);
      }else{
        return value;
      }
  }

}
