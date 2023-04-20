namespace Clubz.Services;

using Models;

public interface IMemberService
{
  IEnumerable<Member> ByClub(int clubId);
  Member FindById(int id);
  int Create(Member member);
  void Update(Member member);
  void Delete(int id);
}