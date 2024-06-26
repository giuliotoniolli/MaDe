export interface Schools {
  data: School[]
  meta: any
}

export interface SingleSchool {
  data: School
  meta: any
}

export interface School {
  id: number
  attributes: Attributes
}

export interface Attributes {
  Name: string
  Lat: number
  Long: number
  City: string
  Address: string
  CAP: string
  Province: string
  Website: string
  Phone: string
  Fax: string
  PEC: string
  Email: string
  createdAt: string
  updatedAt: string
  Description: Description[]
  Type: string
  Logo: ImgInfo
  open_days: OpenDays
  paths: Paths
  branches: Branches
  urlVideo: string
  top:number
  left:number
  colore:string
  Sfondo: ImgInfo
}

export interface Description {
  type: string
  children: Children[]
}

export interface Children {
  type: string
  text: string
}

export interface ImgInfo {
  data: Img
}

export interface Img {
  id: number
  attributes: AttributeImg
}

export interface AttributeImg {
  name: string
  alternativeText: string
  caption: string
  width: number
  height: number
  formats: Formats
  hash: string
  ext: string
  mime: string
  size: number
  url: string
  previewUrl: any
  provider: string
  provider_metadata: any
  createdAt: string
  updatedAt: string
}

export interface Formats {
  thumbnail: Thumbnail
}

export interface Thumbnail {
  name: string
  hash: string
  ext: string
  mime: string
  path: any
  width: number
  height: number
  size: number
  sizeInBytes: number
  url: string
}

export interface OpenDays {
  data: OpenDay[]
}

export interface OpenDay {
  id: number
  attributes: AttributesOD
}

export interface AttributesOD {
  Date: string
  StartTime: string
  EndTime: string
  Note: string
  createdAt: string
  updatedAt: string
}

export interface Paths {
  data: Path[]
}

export interface Path {
  id: number
  attributes: AttributesP
}

export interface AttributesP {
  Name: string
  Description: Description[]
  Duration: string
  createdAt: string
  updatedAt: string
}

export interface Branches {
  data: any[]
}