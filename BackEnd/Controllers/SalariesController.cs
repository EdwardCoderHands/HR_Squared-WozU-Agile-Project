using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HR_Squared.Models;
using Microsoft.AspNetCore.Mvc;

// This is a stub Controller for 'Salaries' used to show that the project routing is working correctly
namespace HR_Squared.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SalariesController : Controller
    {
        [HttpGet]
        public IActionResult Get()
        {
            return base.Json((new string[] {"'Salaries' JSON Response from .NET Controller"}));
        }
    }
}