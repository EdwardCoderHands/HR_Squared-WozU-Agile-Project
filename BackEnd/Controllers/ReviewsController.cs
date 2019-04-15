using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HR_Squared.Models;
using Microsoft.AspNetCore.Mvc;

// This is a stub Controller for 'Reviews' used to show that the project routing is working correctly
namespace HR_Squared.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewsController : Controller
    {
        [HttpGet]
        public IActionResult Get()
        {
            return base.Json((new string[] {"'Reviews' JSON Response from .NET Controller"}));
        }
    }
}