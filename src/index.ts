import axios, { AxiosResponse } from 'axios'

import {
  AppStoreResponse,
  AppleMusicResponse,
  BingImageResponse,
  BingSearchResponse,
  DeezerResponse,
  GImageResponse,
  GeniusSearchResponse,
  GoogleSearchResponse,
  LyricsResponse,
  MovieResponse,
  NPMResponse,
  PinterestImageResponse,
  Rule34Response,
  SoundCloudResponse,
  SpotifySearchResponse,
  TenorResponse,
  TikTokSearchResponse,
  TrackResponse,
  YouTubeSearchResponse
} from '../types/apidelirius'

/**
 * Searches Genius using the Genius search API.
 * @param query The search term to search on Genius.
 * @returns A promise that resolves with the Genius search response.
 * @example
 * // Search for lyrics by artist and song name
 * const lyrics = await geniusSearch('Taylor Swift Love Story');
 * console.log(lyrics);
 */
async function geniusSearch(query: string): Promise<GeniusSearchResponse> {
  try {
    const response: AxiosResponse<GeniusSearchResponse> = await axios.get(
      `https://delirios-api-delta.vercel.app/search/genius?q=${query}`
    )
    return response.data
  } catch (error) {
    throw error
  }
}

/**
 * Performs a GET request to the Genius lyrics search API.
 * @param url The URL of the song lyrics on Genius.
 * @returns A promise that resolves with the Genius lyrics search response.
 * @example
 * // Search for lyrics using the Genius URL
 * const lyrics = await searchLyrics('https://genius.com/Taylor-swift-love-story-lyrics');
 * console.log(lyrics);
 */
async function searchLyrics(url: string): Promise<LyricsResponse> {
  try {
    const response: AxiosResponse<LyricsResponse> = await axios.get(
      `https://delirios-api-delta.vercel.app/search/lyrics?url=${encodeURIComponent(
        url
      )}`
    )
    return response.data
  } catch (error) {
    throw error
  }
}

/**
 * Performs a GET request to the TikTok video search API.
 * @param query The search query to find TikTok videos.
 * @returns A promise that resolves with the TikTok video search response.
 * @example
 * // Search for TikTok videos by hashtag
 * const tiktokVideos = await searchTikTok('#dance');
 * console.log(tiktokVideos);
 */
async function searchTikTok(query: string): Promise<TikTokSearchResponse> {
  try {
    const response: AxiosResponse<TikTokSearchResponse> = await axios.get(
      `https://controlled-gae-deliriusapi.koyeb.app/api/tiktoksearch?query=${encodeURIComponent(
        query
      )}`
    )
    return response.data
  } catch (error) {
    throw error
  }
}

/**
 * Performs a GET request to the YouTube video search API.
 * @param query The search query to find YouTube videos.
 * @returns A promise that resolves with the YouTube video search response.
 * @example
 * // Search for YouTube videos by keyword
 * const youtubeVideos = await searchYouTube('funny cats');
 * console.log(youtubeVideos);
 */
async function searchYouTube(query: string): Promise<YouTubeSearchResponse> {
  try {
    const apiUrl = `https://delirius-api-oficial.vercel.app/api/ytsearch?q=${encodeURIComponent(
      query
    )}`
    const response: AxiosResponse<YouTubeSearchResponse> = await axios.get(
      apiUrl
    )
    return response.data
  } catch (error) {
    throw error
  }
}

/**
 * Searches Spotify using the external API.
 * @param query The search term.
 * @param limit The result limit.
 * @returns A promise that resolves to the typed search response.
 * @example
 * // Search for tracks on Spotify
 * const spotifyTracks = await searchSpotify('Taylor Swift', 10);
 * console.log(spotifyTracks);
 */
const searchSpotify = async (
  query: string,
  limit: number = 20
): Promise<SpotifySearchResponse> => {
  try {
    const response = await axios.get(
      `https://delirios-api-delta.vercel.app/search/spotify?q=${query}&limit=${limit}`
    )
    return response.data as SpotifySearchResponse
  } catch (error) {
    throw error
  }
}

/**
 * Searches for tracks using the API.
 * @param query The search term.
 * @returns A promise that resolves with an array of tracks if the search is successful, otherwise, null.
 * @example
 * // Search for tracks by title
 * const tracks = await searchTracks('Taylor Swift Love Story');
 * console.log(tracks);
 */
async function searchTracks(query: string): Promise<TrackResponse[] | null> {
  try {
    const response: AxiosResponse<TrackResponse[]> = await axios.get(
      `https://controlled-gae-deliriusapi.koyeb.app/api/searchtrack?q=${query}`
    )
    return response.data
  } catch (error) {
    throw error
  }
}

/**
 * Searches for Pokémon card images.
 * @param text The search text.
 * @returns The buffer of the Pokémon card image found.
 * @example
 * // Search for a Pokémon card by name
 * const pokemonImage = await searchPokemon('Pikachu');
 * console.log(pokemonImage);
 */
async function searchPokemon(text: string): Promise<Buffer | null> {
  try {
    const response = await axios.get<Buffer>(
      `https://delirios-api-delta.vercel.app/search/pokecard?text=${text}`,
      {
        responseType: 'arraybuffer'
      }
    )
    return response.data
  } catch (error) {
    throw error
  }
}

/**
 * Searches for Pinterest images related to the specified term.
 * @param text The search term.
 * @returns An array of objects with information about the images found on Pinterest.
 * @example
 * // Search for Pinterest images by keyword
 * const pinterestImages = await searchPinterest('travel destinations');
 * console.log(pinterestImages);
 */
async function searchPinterest(
  text: string
): Promise<PinterestImageResponse[] | null | undefined> {
  try {
    const response = await axios.get<PinterestImageResponse[]>(
      `https://delirios-api-delta.vercel.app/search/pinterest?text=${text}`
    )
    return response.data
  } catch (error) {
    console.error('Error searching for Pinterest images:', error)
    return null
  }
}

/**
 * Searches for songs and albums related to the specified term on Apple Music.
 * @param text The search term.
 * @returns An array of objects with information about the songs and albums found on Apple Music.
 * @example
 * // Search for songs and albums on Apple Music
 * const appleMusicResults = await searchAppleMusic('Taylor Swift');
 * console.log(appleMusicResults);
 */
async function searchAppleMusic(
  text: string
): Promise<AppleMusicResponse[] | null | undefined> {
  try {
    const response = await axios.get<AppleMusicResponse[]>(
      `https://delirios-api-delta.vercel.app/search/applemusic?text=${text}`
    )
    return response.data
  } catch (error) {
    throw error
  }
}

/**
 * Searches for images on Rule34 related to the specified term.
 * @param query The search term.
 * @returns An array of image URLs found on Rule34.
 * @example
 * // Search for images on Rule34
 * const rule34Images = await searchRule34('pokemon');
 * console.log(rule34Images);
 */
async function searchRule34(
  query: string
): Promise<Rule34Response | null | undefined> {
  try {
    const response = await axios.get<Rule34Response>(
      `https://delirius-api-oficial.vercel.app/api/rule34?query=${query}`
    )
    return response.data
  } catch (error) {
    if (typeof error === 'string') {
      throw new Error(error)
    } else {
      throw error
    }
  }
}

/**
 * Searches Google for images based on a search term.
 * @param query The search term.
 * @returns A promise that resolves to an object containing the creator, status, and image search results data.
 * If an error occurs, the promise is rejected with the error.
 * @example
 * // Search for images of cats on Google
 * const googleImages = await searchGoogleImage('cats');
 * console.log(googleImages);
 */
async function searchGoogleImage(query: string): Promise<GImageResponse> {
  try {
    const response = await axios.get<GImageResponse>(
      `https://delirios-api-delta.vercel.app/search/gimage?query=${query}`
    )
    return response.data
  } catch (error) {
    if (typeof error === 'string') {
      throw new Error(error)
    } else {
      throw error
    }
  }
}

/**
 * Searches Google for the given query term.
 * @param query The search term.
 * @returns A promise that resolves to an object containing the creator, status, and search results data.
 * If an error occurs, the promise is rejected with the error.
 * @example
 * // Perform a Google search for "Momo twice"
 * const result = await searchGoogle('Momo twice');
 * console.log(result);
 */
async function searchGoogle(query: string): Promise<GoogleSearchResponse> {
  try {
    const response = await axios.get<GoogleSearchResponse>(
      `https://delirios-api-delta.vercel.app/search/googlesearch?query=${query}`
    )
    return response.data
  } catch (error) {
    if (typeof error === 'string') {
      throw new Error(error)
    } else {
      throw error
    }
  }
}

/**
 * Searches for movies related to the given query term.
 * @param query The search term.
 * @returns A promise that resolves to an object containing the creator, status, and movie data.
 * If an error occurs, the promise is rejected with the error.
 * @example
 * // Search for movies related to "blackpink"
 * const result = await searchMovie('blackpink');
 * console.log(result);
 */
async function searchMovie(query: string): Promise<MovieResponse> {
  try {
    const response = await axios.get<MovieResponse>(
      `https://delirius-api-oficial.vercel.app/api/movie?query=${query}`
    )
    return response.data
  } catch (error) {
    if (typeof error === 'string') {
      throw new Error(error)
    } else {
      throw error
    }
  }
}

/**
 * Performs a search on Bing for the given query term.
 * @param query The search term.
 * @returns A promise that resolves to an object containing the current href and an array of search results.
 * If an error occurs, the promise is rejected with the error.
 * @example
 * // Perform a Bing search for "blackpink"
 * const result = await searchBing('blackpink');
 * console.log(result);
 */
async function searchBing(query: string): Promise<BingSearchResponse> {
  try {
    const response: AxiosResponse<BingSearchResponse> = await axios.get(
      `https://delirius-api-oficial.vercel.app/api/bingsearch?query=${query}`
    )
    return response.data
  } catch (error) {
    throw error
  }
}

/**
 * Searches Bing for images related to the given query.
 * @param query The search query.
 * @returns A promise that resolves to an array of objects containing image information.
 * Each object includes thumbnail, source URL, direct URL, description, and title of the image.
 * If an error occurs, the promise is rejected with the error.
 * @example
 * // Search Bing for images related to "Nayeon twice"
 * const images = await searchBingImage('Nayeon twice');
 * console.log(images);
 */
async function searchBingImage(query: string): Promise<BingImageResponse[]> {
  try {
    const response = await axios.get<{ results: BingImageResponse[] }>(
      `https://delirius-api-oficial.vercel.app/api/bingimage?query=${query}`
    )
    return response.data.results
  } catch (error) {
    if (typeof error === 'string') {
      throw new Error(error)
    } else {
      throw error
    }
  }
}

/**
 * Realiza una solicitud GET a la API de SoundCloud para obtener las pistas.
 * @param query El término de búsqueda para buscar pistas en SoundCloud.
 * @returns Una promesa que se resuelve con la respuesta de la API de SoundCloud.
 */
async function soundcloudSearch(query: string): Promise<SoundCloudResponse> {
  try {
    const response: AxiosResponse<SoundCloudResponse> = await axios.get(
      `https://delirius-api-oficial.vercel.app/api/soundcloud?q=${query}`
    )
    return response.data
  } catch (error) {
    throw error
  }
}

/**
 * Realiza una solicitud GET a la API de Deezer para obtener las pistas.
 * @param query El término de búsqueda para buscar pistas en Deezer.
 * @returns Una promesa que se resuelve con la respuesta de la API de Deezer.
 * @example
 * // Realiza una búsqueda de la pista "Feel Special" en Deezer
 * const result = await getDeezerTracks("Feel special");
 * console.log(result);
 */
async function deezerSearch(query: string): Promise<DeezerResponse> {
  try {
    const response: AxiosResponse<DeezerResponse> = await axios.get(
      `https://delirios-api-delta.vercel.app/search/deezer?q=${query}`
    )
    return response.data
  } catch (error) {
    throw error
  }
}

/**
 * Realiza una solicitud GET a la API de Tenor para obtener GIFs.
 * @param query El término de búsqueda para buscar GIFs en Tenor.
 * @returns Una promesa que se resuelve con la respuesta de la API de Tenor.
 * @example
 * // Buscar GIFs de Nayeon de TWICE en Tenor
 * const gifs = await getTenorGIFs('Nayeon TWICE');
 * console.log(gifs);
 */
async function tenorSearch(query: string): Promise<TenorResponse> {
  try {
    const response: AxiosResponse<TenorResponse> = await axios.get(
      `https://delirios-api-delta.vercel.app/search/tenor?q=${query}`
    )
    return response.data
  } catch (error) {
    throw error
  }
}

/**
 * Realiza una solicitud GET a la API de npm para buscar paquetes.
 * @param query El término de búsqueda para buscar paquetes en npm.
 * @param limit El número máximo de resultados a devolver.
 * @returns Una promesa que se resuelve con la respuesta de la API de npm.
 * @example
 * // Buscar paquetes relacionados con "axios" en npm
 * const packages = await searchNPM('axios', 20);
 * console.log(packages);
 */
async function searchNpmjs(
  query: string,
  limit: number = 20
): Promise<NPMResponse> {
  try {
    const response: AxiosResponse<NPMResponse> = await axios.get(
      `https://delirios-api-delta.vercel.app/search/npm?q=${query}&limit=${limit}`
    )
    return response.data
  } catch (error) {
    throw error
  }
}

/**
 * Realiza una solicitud GET a la API de App Store para buscar aplicaciones.
 * @param query El término de búsqueda para buscar aplicaciones en el App Store.
 * @returns Una promesa que se resuelve con la respuesta de la API de App Store.
 * @example
 * // Buscar la aplicación "WhatsApp" en el App Store
 * const apps = await searchAppStore('WhatsApp');
 * console.log(apps);
 */
async function searchAppStore(
  query: string
): Promise<AppStoreResponse | null | undefined> {
  try {
    const response: AxiosResponse<AppStoreResponse> = await axios.get(
      `https://delirios-api-delta.vercel.app/search/appstore?q=${query}`
    )
    return response.data
  } catch (error) {
    throw error
  }
}

export {
  geniusSearch,
  searchLyrics,
  searchTikTok,
  searchYouTube,
  searchSpotify,
  searchTracks,
  searchPokemon,
  searchPinterest,
  searchAppleMusic,
  searchRule34,
  searchGoogleImage,
  searchGoogle,
  searchMovie,
  searchBing,
  searchBingImage,
  soundcloudSearch,
  deezerSearch,
  tenorSearch,
  searchNpmjs,
  searchAppStore
}
