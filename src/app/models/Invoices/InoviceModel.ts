
export interface InvoiceModel{

     // No
    //[Key]
    //[MaxLength(14)]
    nO_Invoice:String ;

    //[MaxLength(2)]
    year :String ;

    //FK
    //[MaxLength(1)]
    //char
    fk_Real_Estate_Types_id : String;

    //FK_NO_10
    //[MaxLength(10)]
    fk_Subscription_No_sp_id :number ; 

    //FK_NO_10
    //[MaxLength(6)]
    fK_Subscription_No_sp_Date :String;

    //FK
    //[MaxLength(10)]
    fK_Subscriber_No :String;


    //[MaxLength(10)]
    date :Date;
    
    //[MaxLength(10)]
    from :Date;
    
    //[MaxLength(10)]
    to :String;

    //[MaxLength(10)]
    previous_Consumption_Amount :number;

    //[MaxLength(10)]
    current_Consumption_Amount :number;

    //[MaxLength(10)]
    amount_Consumption_Amount :number;

    //[MaxLength(11)]
    service_Free :number; 

    //[MaxLength(11)]
    tax_Rate :number;

    is_There_Sanitation :Boolean;

    //[MaxLength(11)]
    consumption_Value :number;

    //[MaxLength(11)]
    wastewater_Consumption_Value :number;

    //[MaxLength(11)]
    total_Invoice :number;
    //[MaxLength(11)]
    tax_Value :number;
    //[MaxLength(11)]
    total_Bill :number;

    //[MaxLength(100)]
    reasons? : String;

}