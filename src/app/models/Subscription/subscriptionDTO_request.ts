export interface SubscriptionDTORequest{




    //FK
    //[MaxLength(10)]
    fK_Subscriber_No :string;

    
    //FK
    //[MaxLength(1)]
    //char
    fK_Real_Estate_Types_id :string;

    

    //[MaxLength(2)]
    unit_No :number;

    is_There_Sanitation :boolean;

    //[MaxLength(10)]
    last_Reading_Meter :number;

    //[MaxLength(100)]
    reasons? :string;
}   