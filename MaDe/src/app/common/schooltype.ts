export interface School {
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
  Description: Description2[]
  Type: string
  Logo: Logo
}

export interface Description2 {
  type: string
  children: Children2[]
}

export interface Children2 {
  type: string
  text: string
}

export interface Logo {
  data: Data
}

export interface Data {
  id: number
  attributes: Attributes3
}

export interface Attributes3 {
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
