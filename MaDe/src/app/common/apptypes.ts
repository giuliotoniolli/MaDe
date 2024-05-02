export interface Root {
    data: Daum[]
    meta: Meta
  }
  
  export interface Daum {
    id: number
    attributes: Attributes
  }
  
  export interface Attributes {
    Name: string
    Description: Description[]
    createdAt: string
    updatedAt: string
    schools: Schools
  }
  
  export interface Description {
    type: string
    children: Children[]
  }
  
  export interface Children {
    type: string
    text: string
  }
  
  export interface Schools {
    data: Daum2[]
  }
  
  export interface Daum2 {
    id: number
    attributes: Attributes2
  }
  
  export interface Attributes2 {
    Name: string
    Lat: any
    Long: any
    City: string
    Address: string
    CAP: string
    Province: string
    Website: any
    Phone: string
    Fax: string
    PEC: any
    Email: any
    createdAt: string
    updatedAt: string
    Description: any
    Type: string
  }
  
  export interface Meta {
    pagination: Pagination
  }
  
  export interface Pagination {
    page: number
    pageSize: number
    pageCount: number
    total: number
  }
  