using MySql.Data.Entity;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Migrations;
using System.Linq;
using System.Web;

namespace ContosoUniversityWebAppv2.Models
{
    [DbConfigurationType(typeof(MySqlEFConfiguration))]
    public class UniContext : DbContext
    {
        public class MyConfig : DbMigrationsConfiguration<UniContext>
        {
            public MyConfig()
            {
                this.AutomaticMigrationsEnabled = true;
                this.AutomaticMigrationDataLossAllowed = true;
            }

            protected override void Seed(UniContext context)
            {
                var students = new List<Student>
                {
                    new Student { FirstName = "Carson", LastName = "Alexander", EnrollmentDate = DateTime.Parse("2010-09-01") },
                    new Student { FirstName = "Meredith", LastName = "Alonso", EnrollmentDate = DateTime.Parse("2012-09-01") },
                    new Student { FirstName = "Arturo", LastName = "Anand", EnrollmentDate = DateTime.Parse("2013-09-01") },
                    new Student { FirstName = "Gytis", LastName = "Barzdukas", EnrollmentDate = DateTime.Parse("2012-09-01") },
                    new Student { FirstName = "Yan", LastName = "Li", EnrollmentDate = DateTime.Parse("2012-09-01") },
                    new Student { FirstName = "Peggy", LastName = "Justice", EnrollmentDate = DateTime.Parse("2011-09-01") },
                    new Student { FirstName = "Laura", LastName = "Norman", EnrollmentDate = DateTime.Parse("2013-09-01") },
                    new Student { FirstName = "Nino", LastName = "Olivetto", EnrollmentDate = DateTime.Parse("2005-08-11")}
                };
                students.ForEach(s => context.Students.AddOrUpdate(p => p.LastName, s));
                context.SaveChanges();

                var departments = new List<Department>
                {
                    new Department {DepartmentName="Science", DepartmentDesc="", },
                    new Department {DepartmentName="Economics", DepartmentDesc="", },
                    new Department {DepartmentName="Mathematics", DepartmentDesc="", },
                    new Department {DepartmentName="Arts", DepartmentDesc="", }
                };
                departments.ForEach(s => context.Departments.AddOrUpdate(p => p.DepartmentName, s));
                context.SaveChanges();

                var courses = new List<Course>
                {
                    new Course{
                    ID =1050,
                    CourseName ="Chemistry",
                    CourseDesc ="",
                    AssignmentInfo ="",
                    TestnExamInfo ="",
                    DepartmentID = departments.Single(d => d.DepartmentName == "Science").ID,
                    Credits =3,
                    },
                    new Course{
                    ID =4022,
                    CourseName ="Microeconomics",
                    CourseDesc ="",
                    AssignmentInfo ="",
                    TestnExamInfo ="",
                    DepartmentID = departments.Single(d => d.DepartmentName == "Economics").ID,
                    Credits =3,
                    },
                    new Course{
                    ID =4041,
                    CourseName ="Macroeconomics",
                    CourseDesc ="",
                    AssignmentInfo ="",
                    TestnExamInfo ="",
                    DepartmentID = departments.Single(d => d.DepartmentName == "Economics").ID,
                    Credits =3,
                    },
                    new Course{
                    ID =1045,
                    CourseName ="Calculus",
                    CourseDesc ="",
                    AssignmentInfo ="",
                    TestnExamInfo ="",
                    DepartmentID = departments.Single(d => d.DepartmentName == "Mathematics").ID,
                    Credits =4,
                    },
                    new Course{
                    ID =3141,
                    CourseName ="Trigonometry",
                    CourseDesc ="",
                    AssignmentInfo ="",
                    TestnExamInfo ="",
                    DepartmentID = departments.Single(d => d.DepartmentName == "Mathematics").ID,
                    Credits =4,
                    },
                    new Course{
                    ID =2021,
                    CourseName ="Composition",
                    CourseDesc ="",
                    AssignmentInfo ="",
                    TestnExamInfo ="",
                    DepartmentID = departments.Single(d => d.DepartmentName == "Arts").ID,
                    Credits =3,
                    },
                    new Course{
                    ID =2042,
                    CourseName ="Literature",
                    CourseDesc ="",
                    AssignmentInfo ="",
                    TestnExamInfo ="",
                    DepartmentID = departments.Single(d => d.DepartmentName == "Arts").ID,
                    Credits =4,
                    }
                };
                courses.ForEach(s => context.Courses.AddOrUpdate(p => p.CourseName, s));
                context.SaveChanges();

                var enrollments = new List<Enrollment>
                {
                    new Enrollment {
                    StudentID = students.Single(s => s.LastName == "Alexander").ID,
                    CourseID = courses.Single(c => c.CourseName == "Chemistry" ).ID,
                    Grade = Grade.A
                    },
                    new Enrollment {
                    StudentID = students.Single(s => s.LastName == "Alexander").ID,
                    CourseID = courses.Single(c => c.CourseName == "Microeconomics" ).ID,
                    Grade = Grade.C
                    },
                    new Enrollment {
                    StudentID = students.Single(s => s.LastName == "Alexander").ID,
                    CourseID = courses.Single(c => c.CourseName == "Macroeconomics" ).ID,
                    Grade = Grade.B
                    },
                    new Enrollment {
                    StudentID = students.Single(s => s.LastName == "Alonso").ID,
                    CourseID = courses.Single(c => c.CourseName == "Calculus" ).ID,
                    Grade = Grade.B
                    },
                    new Enrollment {
                    StudentID = students.Single(s => s.LastName == "Alonso").ID,
                    CourseID = courses.Single(c => c.CourseName == "Trigonometry" ).ID,
                    Grade = Grade.B
                    },
                    new Enrollment {
                    StudentID = students.Single(s => s.LastName == "Alonso").ID,
                    CourseID = courses.Single(c => c.CourseName == "Composition" ).ID,
                    Grade = Grade.B
                    },
                    new Enrollment {
                    StudentID = students.Single(s => s.LastName == "Anand").ID,
                    CourseID = courses.Single(c => c.CourseName == "Chemistry" ).ID
                    },
                    new Enrollment {
                    StudentID = students.Single(s => s.LastName == "Anand").ID,
                    CourseID = courses.Single(c => c.CourseName == "Microeconomics").ID,
                    Grade = Grade.B
                    },
                    new Enrollment {
                    StudentID = students.Single(s => s.LastName == "Barzdukas").ID,
                    CourseID = courses.Single(c => c.CourseName == "Chemistry").ID,
                    Grade = Grade.B
                    },
                    new Enrollment {
                    StudentID = students.Single(s => s.LastName == "Li").ID,
                    CourseID = courses.Single(c => c.CourseName == "Composition").ID,
                    Grade = Grade.B
                    },
                    new Enrollment {
                    StudentID = students.Single(s => s.LastName == "Justice").ID,
                    CourseID = courses.Single(c => c.CourseName == "Literature").ID,
                    Grade = Grade.B
                    }
                };

                foreach (Enrollment e in enrollments)
                {
                    var enrollmentInDataBase = context.Enrollments.Where(
                        s =>
                             s.Student.ID == e.StudentID &&
                             s.Course.ID == e.CourseID).SingleOrDefault();
                    if (enrollmentInDataBase == null)
                    {
                        context.Enrollments.Add(e);
                    }
                }
                context.SaveChanges();

            }
        }

        public UniContext() : base("name=UniContext")
        {
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<UniContext, MyConfig>());
        }

        public DbSet<Student> Students { get; set; }
        public DbSet<Course> Courses { get; set; }
        public DbSet<Enrollment> Enrollments { get; set; }
        public DbSet<Department> Departments { get; set; }
    }
}