export class Category{
  public id: number;
  public name: string;
  public username: string;
  public email: string;
  public address: {
    street:string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat:string ;
      lng:string;
    };
  };
  public phone:string;
  public website:string;
  public company: {
    name:string ;
    catchPhrase: string ;
    bs: string;
  };
};

/*export class Category {
  id:number;
  parentId:number;
  isVisible:boolean;
  name:string;
  description:string;
  order:number;
}
*/
