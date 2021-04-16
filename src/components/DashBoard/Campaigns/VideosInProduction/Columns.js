export const COLUMNS=[
    {
        Header:'Id',
        accessor:'id'
    },
    {
        Header:'Title/Details',
        accessor:'title'
    },
    {
        Header:'Advertiser',
        accessor:'clientCompany.companyName'
    },
    {
        Header:'Action Required By',
        accessor:(row)=>{
            return(
                row.statusWithPerson.firstName +' '+row.statusWithPerson.lastName
            )
        }
    },
    {
        Header:'Next Action Due By ',
       
        Cell:()=>('12-Apr-2021')
    },
    {
        Header:'Start',
        Cell:()=>('Not Selected')
    },
    {
        Header:'Finish',
        Cell:()=>('Not Selected')
    }

]