using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HR_Squared.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

// This is the Controller that handles the CRUD operations for the Employee data
namespace HR_Squared.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : Controller
    {
        private readonly HR_SquaredContext _context;

        public EmployeesController(HR_SquaredContext context)
        {
            _context = context;
        }
        
        // This [HttpGet] method handles GETTING the master list of Employees
        [HttpGet]
        public IActionResult Get()
        {
            var Result = _context.Employees.Include(x => x.Plan).ToList();
            return Ok(Result);
        }
        
        // This [HttpPost] method handles ADDING a new Employee record to the master list
        [HttpPost]
        public IActionResult Create ([FromBody] Employees employee)
        {
            employee.Name = employee.Name; 
            employee.Department = employee.Department;
            employee.Supervisor = employee.Supervisor;
            employee.Email = employee.Email;
            employee.Phone = employee.Phone;
            employee.PlanId = employee.PlanId;
            
            _context.Employees.Add(employee);
            _context.SaveChanges();

            return Ok();
        }
        
        // This [HttpPut] method handles EDITING an Employee record
        [HttpPut("{id}")]
        public IActionResult Update (int id, [FromBody] Employees employee)
        {
            var emp = _context.Employees.FirstOrDefault(e => e.EmployeeId == id);

            if(employee.Department != null) {
                emp.Department = employee.Department;
            }

            if(employee.Supervisor != null) {
                emp.Supervisor = employee.Supervisor;
            }

            if(employee.Email != null) {
                emp.Email = employee.Email;
            }

            if(employee.Phone != null) {
                emp.Phone = employee.Phone;
            }
            
            emp.PlanId = employee.PlanId;

            _context.SaveChanges();

            return Ok();
        }

        // This [HttpDelete] method handles DELETING an Employee record
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var Match = _context.Employees.FirstOrDefault(employee => employee.EmployeeId == id);

            _context.Employees.Remove(Match);
            _context.SaveChanges();
            
            return Ok();
        }
    }
}
