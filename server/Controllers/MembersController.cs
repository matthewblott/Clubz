namespace Clubz.Controllers;

using Microsoft.AspNetCore.Mvc;
using Models;
using Services;

[ApiController]
[Route("api/[controller]")]
public class MembersController : ControllerBase
{
  private readonly IMemberService _memberService;

  public MembersController(IMemberService memberService) => _memberService = memberService;

  public IEnumerable<Member> GetByClub(int clubId) => _memberService.ByClub(clubId);
  
  [Route("{id:int}")]
  public Member Get(int id) => _memberService.FindById(id);

  [HttpPost]
  public int Post(Member member) => _memberService.Create(member);

  [HttpPut]
  [Route("{id:int}")]
  public void Put(Member member) => _memberService.Update(member);
  
  [HttpDelete]
  [Route("{id:int}")]
  public void Delete(int id) => _memberService.Delete(id);
  
}