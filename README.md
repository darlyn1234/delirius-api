<p align="center">
  <a href="https://github.com/delirius0">
    <img align="center" src="https://cardgit.vercel.app/api?name=Module%20Docs%20🌵&description=Repositorio%20oficial%20de%20delirius%20module&image=https://i.pinimg.com/564x/a8/c2/5f/a8c25faed580a057f1e52ec1e68e50e0.jpg&usqp=CAU&backgroundColor=%23ecf0f1&instagram=delirius0&github=delirius0&pattern=ticTacToe&colorPattern=%23eaeaea&site=" />
  </a>
</p>

This module provides functions to interact with various APIs provided by Delirius. Below you'll find documentation for each function along with usage examples.

## Search Functions

### 1. `geniusSearch(query: string): Promise<GeniusSearchResponse>`

Searches Genius using the Genius search API.

- **Parameters:**
  - `query`: The search term to search on Genius.
- **Returns:** 
  - A promise that resolves with the Genius search response.
- **Throws:**
  - Error if there is an error in the request.
- **Example:**
  ```typescript
  // Search for lyrics by artist and song name
  const lyrics = await geniusSearch('Taylor Swift Love Story');
  console.log(lyrics);
    ```

### 2. `searchLyrics(url: string): Promise<LyricsResponse>`

Performs a GET request to the Genius lyrics search API.

- **Parameters:**
  - `url`: The URL of the song lyrics on Genius.
- **Returns:** 
  - A promise that resolves with the Genius lyrics search response.
- **Throws:**
  - Error if there is an error in the request.
- **Example:**
  ```typescript
  // Search for lyrics using the Genius URL
  const lyrics = await searchLyrics('https://genius.com/Taylor-swift-love-story-lyrics');
  console.log(lyrics);
  ```

### 3. `searchTikTok(query: string): Promise<TikTokSearchResponse>`

Performs a GET request to the TikTok video search API.

- **Parameters:**
  - `query`: The search query to find TikTok videos.
- **Returns:** 
  -  A promise that resolves with the TikTok video search response.
- **Throws:**
  - Error if there is an error in the request.
- **Example:**
  ```typescript
  // Search for TikTok videos by hashtag
  const tiktokVideos = await searchTikTok('#dance');
  console.log(tiktokVideos);
  ```













## Tools

### 1. `countryEmoji(phoneNumber: string): Promise<CountryInfoResponse>`

Makes a GET request to the Delirius API to retrieve country information based on the phone number.

- **Parameters:**
  - `phoneNumber`: The phone number for which country information is sought.
- **Returns:** 
  - A promise that resolves with the country information.
- **Throws:**
  - Error if there is an error in the request.
- **Example:**
  ```typescript
  // Get country information for the phone number +34 613 28 81 16
  const countryInfo = await countryEmoji("+34 613 28 81 16");
  console.log(countryInfo);
  ```

### 2. `simisimi(text: string): Promise<SimiResponse>`

Makes a GET request to the Simi API to generate a response for the given text.

- **Parameters:**
  - `text`: The text for which a response is to be generated.
- **Returns:** 
  - A promise that resolves with the response from the Simi API.
- **Throws:**
  - Error if there is an error in the request.
- **Example:**
  ```typescript
  // Generate a response for the text "Hola"
  const simiResponse = await simisimi("Hola");
  console.log(simiResponse);
  ```

### 3. `emojito(emoji: string): Promise<MojitoResponse | undefined | null>`

Makes a GET request to the Delirius API to retrieve information about the provided emoji.

- **Parameters:**
  - `emoji`: The emoji for which information is sought.
- **Returns:** 
  - A promise that resolves with the response from the Delirius API.
- **Throws:**
  - Error if there is an error in the request.
- **Example:**
  ```typescript
  // Get information about the emoji 😁
  const emojiInfo = await emojito("😁");
  console.log(emojiInfo);
  ```

### 4. `emoji(text: string): Promise<EmojiInfoResponse>`

Makes a GET request to the Delirius API to retrieve information about the provided emoji text.

- **Parameters:**
  - `text`: The emoji text for which information is sought.
- **Returns:** 
  - A promise that resolves with the response from the Delirius API.
- **Throws:**
  - Error if there is an error in the request.
- **Example:**
  ```typescript
  // Get information about the emoji text 😁
  const emojiInfo = await emoji("😁");
  console.log(emojiInfo);
  ```

### 5. `tiktokStalk(username: string): Promise<TikTokUserInfoResponse>`

Makes a GET request to the Delirius API to retrieve information about the provided TikTok username.

- **Parameters:**
  - `username`: The TikTok username for which information is sought.
- **Returns:** 
  - A promise that resolves with the response from the Delirius API.
- **Throws:**
  - Error if there is an error in the request.
- **Example:**
  ```typescript
  // Get information about the TikTok user "twice_tiktok_official"
  const tiktokUserInfo = await tiktokStalk("twice_tiktok_official");
  console.log(tiktokUserInfo);
  ```

### 6. `telegramStalkChannel(channel: string): Promise<ChannelInfo[]>`

Makes a GET request to the Delirius API to retrieve information about the provided channel.

- **Parameters:**
  - `channel`: The channel for which information is sought.
- **Returns:** 
  - A promise that resolves with the response from the Delirius API.
- **Throws:**
  - Error if there is an error in the request.
- **Example:**
  ```typescript
  // Get information about the channel "deliriuus"
  const channelInfo = await telegramStalkChannel("deliriuus");
  console.log(channelInfo);
  ```

---

You can use these functions in your TypeScript project to interact with the Delirius APIs seamlessly. Each function is well-documented with its purpose, parameters, return types, and usage examples. Enjoy automating your tasks with Delirius!
