var DepartmentModule = (function () {
    // Return anything that you want to expose outside the closure
    return {
        getDepartments: function (callback) {
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "http://localhost:65326/api/Department",
                success: function (data) {
                    console.log(data);
                    callback(data);
                }
            });
        },

        getDepartmentById: function (id, callback) {
            //alert(id);
            $.ajax({
                type: "GET",
                dataType: "json",
                url: "http://localhost:65326/api/Department/" + id,
                success: function (data) {
                    console.log(data);
                    callback(data);
                }
            });

        },

        addDepartment: function (department) {

        },

        updateDepartment: function (id, department) {
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: "http://localhost:65326/api/Department/" + id,
                data: JSON.stringify(department),
                dataType: "json",
                success: function (msg) {
                    alert('Success');
                },
                error: function (err) {
                    alert('Error');
                }
            });

        },

        deleteDepartment: function (id) {

        }
    };
}());