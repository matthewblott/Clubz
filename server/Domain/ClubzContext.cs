namespace Clubz.Domain;

using Microsoft.EntityFrameworkCore;
using Models;

public class ClubzContext : DbContext, IClubzContext
{
  public ClubzContext(DbContextOptions<ClubzContext> options) : base(options)
  {
    
  }

  public DbSet<Club> Clubs { get; set; }
  public DbSet<Member> Members { get; set; }
  public void SaveChanges()
  {
    base.SaveChanges();
  }
}

