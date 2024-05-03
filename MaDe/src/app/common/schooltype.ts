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
  Video: Video
  Logo: LogoInfo
  open_days: OpenDays
  paths: Paths
  branches: Branches
}

export interface Description {
  type: string
  children: Children[]
}

export interface Children {
  type: string
  text: string
}

export interface Video {
  data: any
}

export interface LogoInfo {
  data: Logo
}

export interface Logo {
  id: number
  attributes: AttributeL
}

export interface AttributeL {
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
  data: any[]
}

export interface Paths {
  data: Daum2[]
}

export interface Daum2 {
  id: number
  attributes: Attributes3
}

export interface Attributes3 {
  Name: string
  Description: any
  Duration: any
  createdAt: string
  updatedAt: string
}

export interface Branches {
  data: any[]
}