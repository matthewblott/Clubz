namespace Clubz.Controllers;

using Microsoft.AspNetCore.Mvc;
using Models;
using Services;

[ApiController]
[Route("api/[controller]")]
public class ClubsController : ControllerBase
{
  private readonly IClubService _clubService;

  public ClubsController(IClubService clubService) => _clubService = clubService;

  public IEnumerable<Club> Get() => _clubService.All();

  [Route("{id:int}")]
  public Club Get(int id) => _clubService.FindById(id);

  [HttpPost]
  public int Post(Club club) => _clubService.Create(club);

  [HttpPut]
  [Route("{id:int}")]
  public void Put(Club club) => _clubService.Update(club);
  
  [HttpDelete]
  [Route("{id:int}")]
  public void Delete(int id) => _clubService.Delete(id);

}