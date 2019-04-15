using System;
using System.Collections.Generic;

// This defines the model for the 'Employees' Db
namespace HR_Squared.Models
{
    public partial class Employees
    {
        public int EmployeeId { get; set; }
        public string Name { get; set; }
        public string Department { get; set; }
        public string Supervisor { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public int PlanId { get; set; }

        public HealthcarePlans Plan { get; set; }
    }
}
