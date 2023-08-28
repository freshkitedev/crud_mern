import users from "../Model/studentSchema.js"

export const createStudent = async (req, res) => {
    const data = new users({
        Name:req.body.Na,
        Course:req.body.Cou,
        Email:req.body.Em,
        Contact:req.body.Co,
        Fees:req.body.Fe,
    });

    console.log("Saving in DB", req.body);
    try {
        await data.save();
        res.status(200).json(data);
    } catch(err) {
        console.log(err);
    }
}

export const getStudent = async (req, res) => {
    console.log("GetStudent");
    try {
        const details = await users.find()
        res.status(200).json(details)
    } catch(err) {
        console.log(err);
    }
}

export const updateStudent = async (req, res) => {
    console.log("Student is updated ", req.body);
    try {
        const upData = await users.findByIdAndUpdate(
            {_id:req.body._id},
            {
                $set : {
                    Name:req.body.Na,
                    Course:req.body.Cou,
                    Email:req.body.Em,
                    Contact:req.body.Co,
                    Fees:req.body.Fe, 
                }
            },
            {new:true}
        )
        res.status(200).json(upData);
    } catch(err) {
        console.log(err);
    }
}

export const deleteStudent = async (req, res) => {
    console.log("Delete Student", req.params.id);
    try {
        await users.findByIdAndDelete(req.params.id);
        res.status(200).json("Student deleted")
    } catch(err) {
        console.log(err);
    }
}