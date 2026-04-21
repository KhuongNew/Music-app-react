using System.ComponentModel.DataAnnotations;

namespace WebappAPI.Requests;

public class SongRequest
{
    [Required]
    [MaxLength(120)]
    public string Title { get; set; } = string.Empty;

    [Required]
    [MaxLength(120)]
    public string Artist { get; set; } = string.Empty;

    [Required]
    [MaxLength(20)]
    public string Duration { get; set; } = string.Empty;
}
