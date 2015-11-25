var StudentModule = (function () {
    // Return anything that you want to expose outside the closure
    return {
        getStudents: function (callback) {
            $.ajax({
                type: "GET",
                dataType: "jsonp",
                url: "http://api.uinames.com/?amount=25",
                success: function (data) {
                    console.log(data);
                    callback(data);
                }
            });
        },

        getStudentById: function (id) {

        },

        addStudent: function (student) {

        },

        updateStudent: function (id, student) {

        },

        deleteStudent: function (id) {

        }
    };
}());