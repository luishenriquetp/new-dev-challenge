### Documentation Summary

This React app interacts with the Star Wars API (`https://swapi.dev/api/`) to fetch and display resources (e.g., people, planets, starships) and their details.

#### Main Components

1. **MainPage**:
   - Fetches available resources from the API (people, planets, starships, etc.).
   - Displays a list of resources with links to their random IDs.
   
2. **ResourceDetails**:
   - Fetches detailed information about a specific resource (e.g., a person, planet, starship) based on the `resource` and `id` passed via the URL.
   - Displays details about the resource, such as characters, starships, vehicles, species, etc.

3. **API Functions**:
   - `fetchResources`: Fetches the list of available resources from the base API URL.
   - `fetchResourceDetails`: Fetches the details of a specific resource by ID.
   - `fetchAdditionalData`: Fetches additional data for related entities (e.g., characters, planets, films).

### Setup and Running

To run the app locally, follow these steps:

#### 1. Clone the Repository
   ```bash
   git clone https://bitbucket.org/luishenriquetp/new-dev-challenge/src/main/
   cd new-dev-challenge
   ```

#### 2. Install Dependencies
   Make sure you have Node.js installed, then run:
   ```bash
   npm install
   ```

#### 3. Run the Development Server
   After installing dependencies, start the development server with:
   ```bash
   npm run dev
   ```

   This will run the app locally on `http://localhost:3000`.

#### 4. Testing
   - Visit the `MainPage`, which lists the available resources.
   - Click on any resource (e.g., "people") to be taken to a page showing details for a randomly selected resource from that category.

### File Structure
- `App.tsx`: Main app component that initializes routing and renders the `MainPage`.
- `MainPage.tsx`: Displays the list of resources and links to their details.
- `ResourceDetails.tsx`: Displays detailed information about a resource.
- `api.ts`: Contains functions for fetching resources and their details from the Star Wars API.
- `MainPageStyle.ts` and `ResourceDetailsStyle.ts`: Style files for the `MainPage` and `ResourceDetails` components.

### Dependencies
- `react-router-dom`: For routing between pages.
- `moment`: For formatting dates (e.g., `created` and `edited` dates).
- `typescript`: For type safety.
- `react`: Core React library.

### Example:
The `MainPage` will show:
- "People (ID 45)"
- "Planets (ID 23)"
- Clicking a link will take you to a details page for that resource, where more detailed information is displayed (e.g., characters, starships).

### Notes
- The app uses `fetch` to get data from the Star Wars API, and each resource is displayed with related data such as characters, planets, or vehicles when available.