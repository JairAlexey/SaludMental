using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WebApplicationSaludMental.Models;
using System.Threading.Tasks;
using WebApplicationSaludMental.Services;

namespace WebApplicationSaludMental.Controllers
{
    public class AccesoController : Controller
    {
        private readonly IApiService _apiService;

        public AccesoController(IApiService apiService)
        {
            _apiService = apiService;
        }

        public async Task<IActionResult> Index()
        {
            try
            {
                var usuarios = await _apiService.getUsuario();
                return View(usuarios);
            }
            catch (Exception)
            {
                return View(new List<Usuarios>());
            }
        }

        public async Task<ActionResult> Details(int IdUsuario)
        {
            var usuarios = await _apiService.getUsuario(IdUsuario);
            if (usuarios != null)
            {
                return View(usuarios);
            }
            return RedirectToAction("Index");
        }

        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Create(Usuarios usuarios)
        {
            var result = await _apiService.addUsuario(usuarios);
            if (result)
            {
                return RedirectToAction(nameof(Index));
            }
            return View(usuarios);
        }

        public async Task<IActionResult> Edit(int IdUsuario)
        {
            var usuarios = await _apiService.getUsuario(IdUsuario);
            if (usuarios != null)
            {
                return View(usuarios);
            }
            return RedirectToAction("Index");
        }

        [HttpPost]
        public async Task<IActionResult> Edit(Usuarios usuarios)
        {
            var pAEditar = await _apiService.updateUsuario(usuarios.IdUsuario, usuarios);
            if (pAEditar != null)
            {
                return RedirectToAction(nameof(Index));
            }
            return View(pAEditar);
        }

        public async Task<IActionResult> Delete(int IdUsuario)
        {
            var pEliminar = await _apiService.deleteUsuario(IdUsuario);
            return RedirectToAction(nameof(Index));
        }

        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Login(Usuarios inicioSesion)
        {
            var result = await _apiService.IniciarSesion(inicioSesion);
            if (result)
            {
                // Si el inicio de sesión es exitoso, redirigir a la página principal.
                return RedirectToAction(nameof(Index));
            }
            // Si el inicio de sesión falla, mostrar un mensaje de error.
            ViewBag.ErrorMessage = "Correo o contraseña incorrectos";
            return View(inicioSesion);
        }
    }
}
