export type Location = {
  latitude: number,
  longitude: number,
  zoom: number
}
export type City = {
  location: Location,
  name: string,
}

export type Apatament = {
  id: number,
  title: string,
  rate: number,
  cash: number,
  type: string,
  bedroom: number,
  adults: number,
  inside: string[],
  isPremium: boolean,
  isFavorite: boolean,
  photos: string[],
  city: City,
}

export type AppatamentsSmall = Apatament;

export type Appataments = AppatamentsSmall[]

export type ApartamentSrore = {
  list: Appataments,
  isLoader: boolean,
  currentCity: City,
  listCity: Appataments;
  sort: string,
}

export type Favorite = {
  name: string,
  list: Appataments
}
