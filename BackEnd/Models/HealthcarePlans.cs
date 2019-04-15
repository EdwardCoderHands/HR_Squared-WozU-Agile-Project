using System;
using System.Collections.Generic;

// This defines the model for the 'HealthcarePlans' Db
namespace HR_Squared.Models
{
    public partial class HealthcarePlans
    {
        public int PlanId { get; set; }
        public string PlanName { get; set; }
    }
}
