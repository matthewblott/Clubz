namespace Clubz.Domain;

using Microsoft.EntityFrameworkCore;
using Models;

public interface IClubzContext
{
   DbSet<Club> Clubs { get; set; }
   DbSet<Member> Members { get; set; }

   void SaveChanges();
}