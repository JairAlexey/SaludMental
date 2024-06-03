using WebApplicationSaludMental.Configurations;
using WebApplicationSaludMental.Services;
using Microsoft.Extensions.Configuration;
using WebApplicationSaludMental.Helpers;

var builder = WebApplication.CreateBuilder(args);

// Configuraci�n del logging
builder.Logging.ClearProviders();
builder.Logging.AddConsole();
builder.Logging.AddDebug();

// Obtener la configuraci�n del builder
var configuration = builder.Configuration;

// A�adir controladores con vistas al contenedor de servicios
builder.Services.AddControllersWithViews();

// Configura y registra ApiSettings en el contenedor de servicios usando la secci�n 'ApiSettings' del archivo de configuraci�n.
builder.Services.Configure<ApiSettings>(configuration.GetSection("ApiSettings"));

// Agrega el servicio HttpClient al contenedor. Esto permite inyectar y usar HttpClient en cualquier parte de la aplicaci�n.
builder.Services.AddHttpClient();

// Registra el servicio ApiService como 'Scoped', lo que significa que se crear� una instancia por cada solicitud.
builder.Services.AddScoped<IApiService, ApiService>();

// Registra el servicio FilesHelper como 'Scoped'
builder.Services.AddScoped<IFilesHelper, FilesHelper>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Home/Error");
}
app.UseStaticFiles();

app.UseRouting();

app.UseAuthorization();

// Configura la ruta predeterminada para que apunte a la acci�n 'Login' en el controlador 'Home'.
app.MapControllerRoute(
    name: "default",
    pattern: "{controller=Home}/{action=PaginaInicio}/{id?}");

app.Run();
