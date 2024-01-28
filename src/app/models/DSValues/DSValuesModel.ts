export interface DSValuesModel{
     
    //[Key] 
    //[MaxLength(1)]
    //char 
    code : string ;

    //[MaxLength(50)]
    name :string;

    //[MaxLength(3)]
    condition :number;


    //[MaxLength(7)]
    water_Price :number;

    //[MaxLength(7)]
    sanitation_price :number;

    //[MaxLength(100)]
    reasons? :string;
}