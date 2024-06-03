﻿using System.ComponentModel.DataAnnotations.Schema;

namespace WebApplicationSaludMental.Models
{
    public class Capacitaciones
    {
        public int IdCapacitaciones { get; set; }
        public string Titulo { get; set; }
        public string FechaInicio { get; set; }
        public string FechaFin { get; set; }
        public string Descripcion { get; set; }
        public string Precio { get; set; }
        public string Lugar { get; set; }
        public string Modalidad { get; set; }
        public string URLImagen { get; set; }

    }
}
