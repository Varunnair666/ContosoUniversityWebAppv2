var CourseModule = (function () {
    // Return anything that you want to expose outside the closure
    return {
        getCourses: function (callback) {
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "https://universityofcontosov3.azurewebsites.net/api/Course",
                success: function (data) {
                    //console.log(data);
                    callback(data);
                }
            });
        },

        getCourseById: function (id, callback) {
            //alert(id);
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "https://universityofcontosov3.azurewebsites.net/api/Course/" + id,
                success: function (data) {
                    console.log(data);
                    callback(data);
                }
            });

        },

        addCourse: function (course) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "https://universityofcontosov3.azurewebsites.net/api/Course/" + id,
                data: JSON.stringify(course),
                dataType: "json",
                success: function (msg) {
                    alert('Success');
                }
                /*error: function (err) {
                    alert('Error');
                }*/
            });
        },

        updateCourse: function (id, course) {
            $.ajax({
                type: "PUT",
                contentType: "application/json; charset=utf-8",
                url: "https://universityofcontosov3.azurewebsites.net/api/Course/" + id,
                data: JSON.stringify(course),
                dataType: "json",
                success: function (msg) {
                    alert('Success');
                }
                /*error: function (err) {
                    alert('Error');
                }*/
            });

        },

        deleteCourse: function (id) {
            $.ajax({
                type: "DELETE",
                dataType: "json",
                url: "https://universityofcontosov3.azurewebsites.net/api/Course/" + id,
                success: function (data) {
                    console.log(data);
                    callback(data);
                }
            });
        }
    };
}());