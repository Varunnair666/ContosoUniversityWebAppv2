using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace ContosoUniversityWebAppv2.Models
{
    public class Course
    {
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public int ID { get; set; }
        public string CourseName { get; set; }
        public string CourseDesc { get; set; }
        public string AssignmentInfo { get; set; }
        public string TestnExamInfo { get; set; }
        public int DepartmentID { get; set; }
        public int Credits { get; set; }

        [JsonIgnore]
        public virtual ICollection<Enrollment> Enrollments { get; set; }
        [JsonIgnore]
        public virtual Department Department { get; set; }
    }
}