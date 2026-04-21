# ASP.NET Core API + EF Core Setup

## 1. Backend structure

- `WebappAPI/Controllers/SongsController.cs`: CRUD endpoints with `GET`, `POST`, `PUT`, `DELETE`
- `WebappAPI/Data/MusicDbContext.cs`: EF Core DbContext
- `WebappAPI/Models/Song.cs`: entity model
- `WebappAPI/Requests/SongRequest.cs`: request body model for create/update
- `WebappAPI/Migrations/*`: initial EF Core migration

## 2. Connection string

The API reads the database connection from `WebappAPI/appsettings.json`.

Current SQLite example:

```json
"ConnectionStrings": {
  "DefaultConnection": "Data Source=melody.db"
}
```

This stores the database in a local file named `melody.db`, so you do not need SQL Server running.

## 3. EF Core packages

Already configured in `WebappAPI/WebappAPI.csproj`:

- `Microsoft.EntityFrameworkCore.Sqlite`
- `Microsoft.EntityFrameworkCore.Design`
- `Microsoft.EntityFrameworkCore.Tools`

## 4. dotnet-ef tool

A local tool manifest was added at `.config/dotnet-tools.json`.

Useful commands from the `music-app` folder:

```powershell
dotnet tool restore
dotnet tool run dotnet-ef migrations add AddAnotherTable --project WebappAPI --startup-project WebappAPI
dotnet tool run dotnet-ef database update --project WebappAPI --startup-project WebappAPI
```

The initial migration was created with:

```powershell
dotnet tool run dotnet-ef migrations add InitialCreate --project WebappAPI --startup-project WebappAPI
```

The API also runs `Database.Migrate()` on startup, so the SQLite file is created automatically when the backend starts.

## 5. Front-end Axios requests

- `src/api/axiosClient.js`: shared Axios instance
- `src/api/songApi.js`: wrappers for `GET`, `POST`, `PUT`, `DELETE`
- `src/pages/Library.jsx`: UI that calls the API

Set the API base URL in `.env` if needed:

```env
VITE_API_BASE_URL=http://localhost:5190/api
```

An example is included in `.env.example`.

## 6. Run the app

Backend:

```powershell
cd Backend
dotnet run
```

Front-end:

```powershell
npm install
npm run dev
```

