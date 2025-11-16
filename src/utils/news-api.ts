import { TCard } from "./types"

type TNewsResponse = {
  info: {} 
  data: TCard[]
};

const checkResponse = <T>(res: Response): Promise<T> =>
  res.ok ? res.json() : res.json().then((err) => Promise.reject(err));

export const getNewsApi = () => {
  return fetch('https://api.disneyapi.dev/character')
    .then((res) => checkResponse<TNewsResponse>(res))
    .then((data) => {
      return data.data;
    })
}