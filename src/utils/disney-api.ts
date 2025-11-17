import { TCard } from "./types"

type TServerResponse<T> = {
  info: {} 
} & T;

type TCharactersResponse = {
  data: TCard[]
}

type TCharacterResponse = {
  data: TCard
}

const checkResponse = <T>(res: Response): Promise<T> =>
  res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

export const getCharactersApi = () => {
  return fetch('https://api.disneyapi.dev/character')
    .then((res) => checkResponse<TServerResponse<TCharactersResponse>>(res))
    .then((data) => {
      return data.data;
    })
};

export const getCharacterByIdApi = (id: number) => {
  return fetch(`https://api.disneyapi.dev/character/${id}`)
    .then((res) => checkResponse<TServerResponse<TCharacterResponse>>(res))
    .then((data) => {
      return data.data;
    })
}