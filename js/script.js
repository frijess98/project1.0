var xmlhttp = new XMLHttpRequest();
var url = "http://localhost/datatable/js/jsonData.json";
xmlhttp.open("GET", url, true);
xmlhttp.send();
xmlhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(this.responseText);
    $("#example").DataTable({
      data: data.data,
      columns: [
        { data: "name" },
        { data: "position" },
        { data: "office" },
        { data: "extn" },
        { data: "start_date" },
        { data: "salary" },
      ],
    });
  }
};
