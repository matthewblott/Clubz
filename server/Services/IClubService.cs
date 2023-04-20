namespace Clubz.Services;

using Models;

public interface IClubService
{
  IEnumerable<Club> All();
  Club FindById(int id);
  int Create(Club club);
  void Update(Club club);
  void Delete(int id);
}