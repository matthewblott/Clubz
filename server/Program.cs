using Clubz.Domain;
using Clubz.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

builder.Services.AddCors(options =>
{
  options.AddDefaultPolicy(
    policy =>
    {
      policy.WithOrigins("http://localhost:5173", "https://localhost:5001");
    });
});

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddDbContext<ClubzContext>(options => options.UseSqlServer(connectionString));
builder.Services.AddScoped<IClubzContext>(provider => provider.GetRequiredService<ClubzContext>());
builder.Services.AddScoped<IClubService, ClubService>();
builder.Services.AddScoped<IMemberService, MemberService>();

var app = builder.Build();

app.UseCors(builder => builder
  .AllowAnyHeader()
  .AllowAnyMethod()
  .AllowAnyOrigin()
);

app.MapControllers();
app.UseDefaultFiles();
app.UseStaticFiles();

app.Run();