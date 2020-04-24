//Only these fields will accessed/displayed in GET/POST/PUT/DELETE/UPDATE
export interface IMember{
    MemNo: string;
    RegNo: number;
    Name: string;
    Dead: string;
    MobileNo:string;
    Sex:string;
 //   BirthDate:Date;  //Date, String or Any
    Addr1: string;
    Addr2: string;
    Village:string;
    Tal:string;
    Corr1:string;
    Corr2:string;
    Cent_Code:number;
    Centre:string;
    Cent_SubCode:string;
    Cent_SubCentre:string;
    Cent_VilCode:string;
    mName:string;
    mAddr1:string;
    mAddr2:string;
    mVillage:string;
    mTal:string;
    mCorr1:string;
    mCorr2:string;
    Remark:string;
    //memImageUrl:ImageBitmap;
}