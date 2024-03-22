using System.Reflection;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using to_do_list.Persistence;


var builder = WebApplication.CreateBuilder(args);



builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo
    {
        Version = "v1",
        Title = "ToDo-List API",
        Description = "An ASP.NET Core Web API for managing ToDo items",
        Contact = new OpenApiContact
        {
            Name = "Contact",
            Url = new Uri("https://www.linkedin.com/in/johnrodrigues-/")
        },
        License = new OpenApiLicense
        {
            Name = "License",
            Url = new Uri("https://opensource.org/license/mit")
        }
    });
     var xmlFilename = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
    options.IncludeXmlComments(Path.Combine(AppContext.BaseDirectory, xmlFilename));
});
builder.Services.AddDbContext<TaskDbContext>(
    options=>
    {
        options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection"));
    }
    );

builder.Services.AddCors(options=>{
    options.AddPolicy("todolistApp", policyBuilder =>
    {
        policyBuilder.WithOrigins("http://localhost:5173");
        policyBuilder.AllowAnyHeader();
        policyBuilder.AllowAnyMethod();
        policyBuilder.AllowCredentials();
    }
    );
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseCors("todolistApp");

app.Run();
