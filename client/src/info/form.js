import { useEffect, useState } from "react"

const InfoForm = (props) => {
    const [id, setid] = useState("");
    const [Name, setName] = useState("");
    const [Course, setCourse] = useState("");
    const [Fees, setFees] = useState("");
    const [Email, setEmail] = useState("");
    const [Contact, setContact] = useState("");
    const [isEdit, setEdit] = useState(false);

    const infoSubmit = (event) => {
        if (!isEdit) {
            const data = {
                isEdit: isEdit,
                Na: Name,
                Cou: Course,
                Em: Email,
                Co: Contact,
                Fe: Fees,
            };
            props.createData(data);
        } else {
            const data = {
                isEdit: isEdit,
                _id: id,
                Na: Name,
                Cou: Course,
                Em: Email,
                Co: Contact,
                Fe: Fees,
            }
            props.createData(data);
        }
        
    }

    useEffect(() => {
        console.log("ue ID:", props.setEditInfo._id);
        if (props.setEditInfo._id != null) {
            setid(props.setEditInfo._id);
            setName(props.setEditInfo.Name);
            setEmail(props.setEditInfo.Email);
            setContact(props.setEditInfo.Contact);
            setFees(props.setEditInfo.Fees);
            setCourse(props.setEditInfo.Course);
            setEdit(true);
        }

    }, [props])

    console.log("ID:", id);

    return (
        <form onSubmit={infoSubmit} >
            <div className="form-group-dark">
                <label>Name</label>
                <input type="text" class="form-control"
                    onChange={(e) => setName(e.target.value)}
                    value={Name}
                />
            </div>
            <div className="form-group">
                <label>Course:</label>
                <input
                    type="text"
                    class="form-control"
                    onChange={(e) => setCourse(e.target.value)}
                    value={Course}
                />
            </div>
            <div className="form-group">
                <label>Email:</label>
                <input
                    type="text"
                    className="form-control"
                    onChange={(e) => setEmail(e.target.value)}
                    value={Email}
                />
            </div>
            <div className="form-group">
                <label>Contact:</label>
                <input
                    type="Number"
                    className="form-control"
                    onChange={(e) => setContact(e.target.value)}
                    value={Contact}
                />
            </div>
            <div className="form-group">
                <label>Fees:</label>
                <input
                    type="Number"
                    className="form-control"
                    onChange={(e) => setFees(e.target.value)}
                    value={Fees}
                />
            </div>
            <br></br>
            <button type="submit" class="btn btn-success">
                {isEdit? "Update" : "Create"}
            </button>
        </form>
    )
}

export default InfoForm;