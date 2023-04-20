namespace Clubz.Services;

using Domain;
using Models;

public class ClubService : IClubService
{
  private readonly IClubzContext _clubzContext;

  public ClubService(IClubzContext clubzContext) => _clubzContext = clubzContext;

  public IEnumerable<Club> All() => _clubzContext.Clubs.ToList();
  
  public Club FindById(int id) => _clubzContext.Clubs.Find(id);

  public int Create(Club club)
  {
    _clubzContext.Clubs.Add(club);
    _clubzContext.SaveChanges();
    return club.Id;
  }

  public void Update(Club club)
  {
    _clubzContext.Clubs.Update(club);
    _clubzContext.SaveChanges();
  }

  public void Delete(int id)
  {
    var members = _clubzContext.Members.Where(m => m.ClubId == id).ToList();
      
    members.ForEach(m => _clubzContext.Members.Remove(m));
    
    _clubzContext.Clubs.Remove(new Club { Id = id });
    _clubzContext.SaveChanges();
  }
  
}