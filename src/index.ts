import axios, { AxiosResponse } from 'axios'

import {
  AppStoreResponse,
  AppleMusicResponse,
  BingImageResponse,
  BingSearchResponse,
  ChannelInfoResponse,
  CountryResponse,
  DeezerResponse,
  EmojiInfoResponse,
  GImageResponse,
  GeniusSearchResponse,
  GoogleSearchResponse,
  HTMLExtractResponse,
  LyricsResponse,
  MixedEmojiResponse,
  MojitoResponse,
  MovieResponse,
  NPMResponse,
  NoticiasResponse,
  PinterestImageResponse,
  Rule34Response,
  SimiResponse,
  SoundCloudResponse,
  SpotifySearchResponse,
  TenorResponse,
  TikTokSearchResponse,
  TikTokStalkResponse,
  TrackResponse,
  TranslationResponse,
  URLCheckResponse,
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
 * const result = await deezerSearch("Feel special");
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
 * const gifs = await tenorSearch('Nayeon TWICE');
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
 * const packages = await searchNpmjs('axios', 20);
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

// TOOLS

/**
 * Makes a GET request to the URL verification tool API to check a specific URL.
 * @param url The URL to check.
 * @returns A promise that resolves with the response from the URL verification tool API.
 * @throws Error if there is an error in the request.
 * @example
 * // Check the URL "https://delirius-api-oficial.vercel.app/docs"
 * const checkResult = await checkURL('https://delirius-api-oficial.vercel.app/docs');
 * console.log(checkResult);
 */
async function checkUrl(url: string): Promise<URLCheckResponse> {
  try {
    const response: AxiosResponse<URLCheckResponse> = await axios.get(
      `https://delirios-api-delta.vercel.app/tools/checkurl?url=${url}`
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
 * Makes a GET request to the HTML extraction tool API to extract HTML content from a specific URL.
 * @param url The URL from which to extract HTML content.
 * @returns A promise that resolves with the response from the HTML extraction tool API.
 * @throws Error if there is an error in the request.
 * @example
 * // Extract HTML content from the URL "https://delirios-api-delta.vercel.app"
 * const htmlContent = await extractHTML('https://delirios-api-delta.vercel.app');
 * console.log(htmlContent);
 */
async function extractHTML(url: string): Promise<HTMLExtractResponse> {
  try {
    const response: AxiosResponse<HTMLExtractResponse> = await axios.get(
      `https://delirios-api-delta.vercel.app/tools/htmlextract?url=${url}`
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
 * Performs a GET request to the translation API to translate the specified text.
 * @param text The text to be translated.
 * @param language The target language for translation (e.g., "en" for English).
 * @returns A promise that resolves with the translation response from the API.
 * @throws Error if there is an error in the request.
 * @example
 * // Translate the text "Hola, bienvenido a la api oficial de Delirius Bot" to English
 * const translation = await translate("Hola, bienvenido a la api oficial de Delirius Bot", "en");
 * console.log(translation);
 */
async function translate(
  text: string,
  language: string
): Promise<TranslationResponse> {
  try {
    const response: AxiosResponse<TranslationResponse> = await axios.get(
      `https://delirios-api-delta.vercel.app/tools/translate?text=${encodeURIComponent(
        text
      )}&language=${language}`
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
 * Perform a request to the Mojito API to generate an ASCII art representation of the specified emoji.
 * @param emoji The emoji for which to generate ASCII art representation.
 * @returns A promise that resolves with the ASCII art representation of the emoji.
 * @throws Error if there is an error in the request.
 * @example
 * // Generate ASCII art representation for the 😀 emoji
 * const asciiArt = await generateEmojiArt("😀");
 * console.log(asciiArt);
 */
async function emojito(
  emoji: string
): Promise<MojitoResponse | undefined | null> {
  try {
    const response: AxiosResponse<MojitoResponse> = await axios.get(
      `https://delirios-api-delta.vercel.app/tools/mojito?emoji=${encodeURIComponent(
        emoji
      )}`
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
 * Makes a GET request to the Simi API to generate a response for the given text.
 * @param text The text for which a response is to be generated.
 * @returns A promise that resolves with the response from the Simi API.
 * @throws Error if there is an error in the request.
 * @example
 * // Generate a response for the text "Causa"
 * const simiResponse = await simisimi("Hola");
 * console.log(simiResponse);
 */
async function simisimi(text: string): Promise<SimiResponse> {
  try {
    const response: AxiosResponse<SimiResponse> = await axios.get(
      `https://controlled-gae-deliriusapi.koyeb.app/api/simi?text=${text}`
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
 * Fetches headline stories from the news API with the given language and country.
 * @param language The language of the news (default: 'es' for Spanish).
 * @param country The country for the news (default: 'PE' for Peru).
 * @returns A promise that resolves with the response containing the headline stories.
 * @throws Error if there is an error in the request.
 * @example
 * // Fetch headline stories in Spanish from Peru
 * const noticias = await googleNews();
 * console.log(noticias);
 * @example
 * // Fetch headline stories in English from United States
 * const noticias = await googleNews('en', 'US');
 * console.log(noticias);
 */
async function googleNews(
  language: string = 'es',
  country: string = 'PE'
): Promise<NoticiasResponse> {
  try {
    const response: AxiosResponse<NoticiasResponse> = await axios.get(
      `https://controlled-gae-deliriusapi.koyeb.app/api/noticias?language=${language}&country=${country}`
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
 * Makes a GET request to the TikTok Stalk API to retrieve profile information for a given username.
 * @param username The TikTok username to retrieve information for.
 * @returns A promise that resolves with the profile information from the TikTok Stalk API.
 * @throws Error if there is an error in the request.
 * @example
 * // Retrieve profile information for the TikTok username "twice_tiktok_official"
 * const tikTokProfile = await tiktokStalk("twice_tiktok_official");
 * console.log(tikTokProfile);
 */
async function tiktokStalk(username: string): Promise<TikTokStalkResponse> {
  try {
    const response = await axios.get<TikTokStalkResponse>(
      `https://delirios-api-delta.vercel.app/tools/tiktokstalk?q=${encodeURIComponent(
        username
      )}`
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
 * Makes a GET request to the Mixed Emoji API to generate an image from two mixed emojis.
 * @param emoji1 The first emoji.
 * @param emoji2 The second emoji.
 * @returns A promise that resolves with the URL of the generated image.
 * @throws Error if there is an error in the request.
 * @example
 * // Generate an image from the emojis 😝 and 😊
 * const imageUrl = await emojiMix("😝", "😊");
 * console.log(imageUrl);
 */
async function emojiMix(
  emoji1: string,
  emoji2: string
): Promise<MixedEmojiResponse | null | undefined> {
  try {
    const response = await axios.get<MixedEmojiResponse>(
      `https://delirios-api-delta.vercel.app/tools/mixed?emoji1=${encodeURIComponent(
        emoji1
      )}&emoji2=${encodeURIComponent(emoji2)}`
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
 * Makes a GET request to the Channelstalk API to retrieve information about a Telegram channel.
 * @param channel The username of the Telegram channel.
 * @returns A promise that resolves with an array of ChannelInfo objects containing information about the channel.
 * @throws Error if there is an error in the request.
 * @example
 * // Retrieve information about the channel "deliriuus"
 * const channelInfo = await telegramStalkChannel("deliriuus");
 * console.log(channelInfo);
 */
async function telegramStalkChannel(
  channel: string
): Promise<ChannelInfoResponse> {
  try {
    const response = await axios.get<ChannelInfoResponse>(
      `https://delirios-api-delta.vercel.app/tools/channelstalk?channel=${channel}`
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
 * Makes a GET request to fetch emoji information based on the provided text.
 * @param text The text representing the emoji.
 * @returns A promise that resolves with the emoji information.
 * @throws Error if there is an error in the request.
 * @example
 * // Get emoji information for 😁
 * const emojiInfo = await emoji("😁");
 * console.log(emojiInfo);
 */
async function emoji(text: string): Promise<EmojiInfoResponse> {
  try {
    const response: AxiosResponse<EmojiInfoResponse> = await axios.get(
      `https://controlled-gae-deliriusapi.koyeb.app/api/emoji?text=${encodeURIComponent(
        text
      )}`
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
 * Makes a GET request to the API to retrieve country information based on the phone number.
 * @param phoneNumber The phone number for which country information is sought.
 * @returns A promise that resolves with the country information.
 * @throws Error if there is an error in the request.
 * @example
 * // Get country information for the phone number +34 613 28 81 16
 * const countryInfo = await countryEmoji("+34 613 28 81 16");
 * console.log(countryInfo);
 */
async function countryEmoji(phoneNumber: string): Promise<CountryResponse> {
  try {
    const response: AxiosResponse<CountryResponse> = await axios.get(
      `https://delirius-api-oficial.vercel.app/api/country?text=${encodeURIComponent(
        phoneNumber
      )}`
    )
    return response.data
  } catch (error) {
    // Handling errors
    if (typeof error === 'string') {
      throw new Error(error)
    } else {
      throw error
    }
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
  searchAppStore,
  checkUrl,
  extractHTML,
  translate,
  emojito,
  simisimi,
  googleNews,
  tiktokStalk,
  emojiMix,
  telegramStalkChannel,
  emoji,
  countryEmoji
}
