using Microsoft.EntityFrameworkCore;
using WebappAPI.Models;

namespace WebappAPI.Data;

public class MusicDbContext(DbContextOptions<MusicDbContext> options) : DbContext(options)
{
    public DbSet<Song> Songs => Set<Song>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Song>(entity =>
        {
            entity.Property(song => song.Title).HasMaxLength(120).IsRequired();
            entity.Property(song => song.Artist).HasMaxLength(120).IsRequired();
            entity.Property(song => song.Duration).HasMaxLength(20).IsRequired();

            entity.HasData(
                new Song { Id = 1, Title = "Supernova", Artist = "aespa", Duration = "3:15" },
                new Song { Id = 2, Title = "Armageddon", Artist = "aespa", Duration = "3:24" },
                new Song { Id = 3, Title = "Hay Trao Cho Anh", Artist = "Son Tung M-TP", Duration = "4:05" }
            );
        });
    }
}
