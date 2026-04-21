using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebappAPI.Data;
using WebappAPI.Models;
using WebappAPI.Requests;

namespace WebappAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class SongsController(MusicDbContext context) : ControllerBase
{
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Song>>> GetSongs()
    {
        var songs = await context.Songs
            .OrderBy(song => song.Id)
            .ToListAsync();

        return Ok(songs);
    }

    [HttpGet("{id:int}")]
    public async Task<ActionResult<Song>> GetSong(int id)
    {
        var song = await context.Songs.FindAsync(id);

        if (song is null)
        {
            return NotFound(new { message = $"Song with id {id} was not found." });
        }

        return Ok(song);
    }

    [HttpPost]
    public async Task<ActionResult<Song>> CreateSong([FromBody] SongRequest request)
    {
        var song = new Song
        {
            Title = request.Title.Trim(),
            Artist = request.Artist.Trim(),
            Duration = request.Duration.Trim()
        };

        context.Songs.Add(song);
        await context.SaveChangesAsync();

        return CreatedAtAction(nameof(GetSong), new { id = song.Id }, song);
    }

    [HttpPut("{id:int}")]
    public async Task<ActionResult<Song>> UpdateSong(int id, [FromBody] SongRequest request)
    {
        var song = await context.Songs.FindAsync(id);

        if (song is null)
        {
            return NotFound(new { message = $"Song with id {id} was not found." });
        }

        song.Title = request.Title.Trim();
        song.Artist = request.Artist.Trim();
        song.Duration = request.Duration.Trim();

        await context.SaveChangesAsync();

        return Ok(song);
    }

    [HttpDelete("{id:int}")]
    public async Task<IActionResult> DeleteSong(int id)
    {
        var song = await context.Songs.FindAsync(id);

        if (song is null)
        {
            return NotFound(new { message = $"Song with id {id} was not found." });
        }

        context.Songs.Remove(song);
        await context.SaveChangesAsync();

        return NoContent();
    }
}
