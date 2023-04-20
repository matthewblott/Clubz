namespace Clubz.Services;

using Domain;
using Models;

public class MemberService : IMemberService
{
  private readonly IClubzContext _clubzContext;

  public MemberService(IClubzContext clubzContext) => _clubzContext = clubzContext;

  public IReadOnlyCollection<Club> All() => _clubzContext.Clubs.ToList();

  public IEnumerable<Member> ByClub(int clubId)
    => _clubzContext.Members.Where(m => m.ClubId == clubId).ToList();

  public int Create(Member member)
  {
    _clubzContext.Members.Add(member);
    _clubzContext.SaveChanges();
    return member.Id;
  }

  public void Update(Member member)
  {
    _clubzContext.Members.Update(member);
    _clubzContext.SaveChanges();
  }

  public void Delete(int id)
  {
    _clubzContext.Members.Remove(new Member() { Id = id });
    _clubzContext.SaveChanges();
  }

  public Member FindById(int id) => _clubzContext.Members.Find(id);

}