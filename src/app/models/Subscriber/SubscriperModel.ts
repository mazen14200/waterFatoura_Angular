
export interface SubscriperModel{

    //[MaxLength(10)]
    id: string,    

    //[MaxLength(100)]
    name:string ,

    //[MaxLength(50)]
    city:string ,

    //[MaxLength(50)]
    area: string ,
    
    //[MaxLength(20)]
    mobile:string ,
    
    //[MaxLength(100)]
    reasons?:string 
}