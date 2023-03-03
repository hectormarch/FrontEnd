export class Experiencia{

  public id=new Number;
  public trabajo=new String;
  public empresa=new String;
  public fecha_inicio=new Date;
  public fecha_fin=new Date;
  public es_trabajo_actual=new Number;

  constructor(id:number, trabajo:string,empresa:string, fecha_inicio: Date, fecha_fin:Date, es_trabajo_actual:number ){
    this.id=id;
    this.trabajo=trabajo;
    this.empresa=empresa;
    this.fecha_inicio=fecha_fin;
    this.fecha_fin=fecha_fin;
    this.es_trabajo_actual=es_trabajo_actual;
  }


}
