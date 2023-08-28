import axios from "axios";
import InfoForm from "./form";
import InfoTable from "./table";
import { useEffect, useState } from "react";
const App = () => {
  const [allStudentData, setData] = useState([]);
  const [editStudentInfo, setEditData] = useState([]);


  const createStudent = (data) => {
    if (!data.isEdit) {
      axios.post("http://localhost:5001/info/cs", data)
        .then((res) => {
          console.log("Student created");
          getAll();

        })
    } else {
      axios.put("http://localhost:5001/info/up", data)
        .then((res) => {
          console.log("Student created");
          getAll();
        })
    }
  }
  
  const delStudentData = (data) => {

    var option = window.confirm(`Are You Sure Want to Delete ${data.Name}`);

    if (option) {
      axios.delete(`http://localhost:5001/info/del/${data._id}`)
        .then((res) => {
          console.log("Student Deleted");
          getAll();
        })
    }
  }
  useEffect(() => {
    getAll();
  }, [])

  const getAll = () => {
    axios.get("http://localhost:5001/info/get")
    .then((res) => {
      setData(res.data)
    })
  }

  const editStudentData = (data) => {
    setEditData(data)
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-3">
          <InfoForm createData={createStudent} setEditInfo={editStudentInfo}/>
        </div>
        <div className="col-9">
          <InfoTable studentData={allStudentData} editData={editStudentData} deleteData={delStudentData}/>
        </div>  
      </div>
    </div>
  );
};

export default App;