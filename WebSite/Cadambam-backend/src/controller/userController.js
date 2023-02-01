const userDetailsModel = require("../Model/userDetailsModel");
const validators = require("../validators/validator");

const createUser = async function (req, res) {
    try {
        let data = req.body;
        //______________________________ empty body validation _______________________________________//

        if (!Object.keys(data).length) {
            return res
                .status(400)
                .send({ status: false, message: "Data can't be empty" });
        }

        //____________________________________________________________________________________________________//

        let { Name, Email, Phone, Otp, Age, Gender, Education, Occupation, City, Pincode, Address_Line_1, Address_Line_2, Address_Pincode } = data; // destructuring data

        //___________________________________ Name Validation_______________________________________________//

        if (!Name) {
            return res
                .status(400)
                .send({ status: false, message: "Name is required." });
        }
        if (!validators.isValid(Name))
            return res
                .status(400)
                .send({ status: false, message: "Please enter valid name" });
        if (!validators.IsValidStr(Name))
            return res
                .status(400)
                .send({ status: false, message: "use alphabets only in name" });


        //_______________________________________ Email Validation___________________________________________//

        if (Email) {
            return res
                .status(400)
                .send({ status: false, message: "Please enter Email" });
        }
        if (!validators.isValid(Email))
            return res
                .status(400)
                .send({ status: false, message: "Please enter valid EmailId" });
        if (!validators.isValidEmail(Email))
            return res
                .status(400)
                .send({ status: false, message: "Email is invalid." });
        if (Email.includes(" ")) {
            return res
                .status(400)
                .send({
                    status: false,
                    message: "Please remove any empty spaces from emailId",
                });
        }
        const OldEmail = await userDetailsModel.findOne({ Email });
        if (OldEmail)
            return res
                .status(409)
                .send({ status: false, message: "Email already exists" });

        // _______________________________________phone Validation_____________________________________________//

        if (!Phone)
            return res
                .status(400)
                .send({ status: false, message: "enter Phone number" });
        if (!validators.isValidMobile(Phone))
            return res
                .status(400)
                .send({ status: false, message: "Phone number is invalid." });
        if (!validators.isValid(Phone)) {
            return res
                .status(400)
                .send({ status: false, message: "provide Phone no. in string." });
        }
        if (Phone.includes(" ")) {
            return res
                .status(400)
                .send({
                    status: false,
                    message: "Please remove any empty spaces from Phone number",
                });
        }
        const uniqueMobile = await userDetailsModel.findOne({ Phone });
        if (uniqueMobile)
            return res
                .status(409)
                .send({ status: false, message: "Phone number already in use" });

        // _______________________________________Otp Validation_________________________________________//

        if (!Otp) {
            return res
                .status(400)
                .send({ status: false, message: "Please enter Otp" });
        }
        if (!validators.isValid(Otp)) {
            return res
                .status(400)
                .send({ status: false, message: "Provide Otp  in String" });
        }
        if (!(Otp.length != 4)) {
            return res
                .status(400)
                .send({
                    status: false,
                    message: "Otp should be in 4 character",
                });
        }

        // -------------------------- Age Validation--------------------------------------------------
        if (!Age) {
            return res
                .status(400)
                .send({ status: false, message: "Age is required." });
        }
        if (!validators.isValidNum(Age))
            return res
                .status(400)
                .send({ status: false, message: "Please enter valid Age" });

        // --------------------------------- Education Validation -------------------------------------

        if (!Education) {
            return res
                .status(400)
                .send({ status: false, message: "Education is required." });
        }
        if (!validators.isValid(Education))
            return res
                .status(400)
                .send({ status: false, message: "Please enter valid Education" });
        if (!validators.IsValidStr(Education))
            return res
                .status(400)
                .send({ status: false, message: "use alphabets only in name" });





        // _____________________________________________Address Validation_________________________________//

        if (!address)
            return res
                .status(400)
                .send({ status: false, message: "Address can't be empty" });
        else {
            let pinCode = parseInt(address.billing.pincode);
            if (!/^[1-9][0-9]{5}$/.test(pinCode))
                return res
                    .status(400)
                    .send({ status: false, message: "provide a valid pincode." });
        }
    }
        //_________________________________________VALIDATIONS COMPLETED________________________________________________________

        // data.address = address; //adding adress to data

    let savedData = await userDetailsModel.create(data);
    res
        .status(201)
        .send({
            status: true,
            message: "User created successfully",
            data: savedData,
        });
} catch (err) {
    return res
        .status(500)
}  .send({ status: false, message: "Error", error: err.message });
}

//*************************************LOGIN USER************************************************************************************** */
const loginUser = async function (req, res) {
    try {
        let data = req.body;
        //---------------empty body --------------------------//

        if (!Object.keys(data).length)
            return res
                .status(400)
                .send({ status: false, message: "Please enter details" });

        const { Email, password } = data; //  fetching Email and password

        //-----------------emailId validation------------------//

        if (Email)
            return res
                .status(400)
                .send({ status: false, message: "Please enter Email" });

        if (!validators.isValid Email))
        return res
            .status(400)
            .send({ status: false, message: "Please enter valid  EmailId" });

        if (!validators.isValidEmail Email))
        return res
            .status(400)
            .send({ status: false, message: "Provide valid Email" });

        //-----------------password validation-----------------//

        if (!password)
            return res
                .status(400)
                .send({ status: false, message: "Please enter password" });

        if (!validators.isValid(password)) {
            return res
                .status(400)
                .send({ status: false, message: "Provide password  in String" });
        }

        if (password.includes(" ")) {
            return res
                .status(400)
                .send({
                    status: false,
                    message: "Please remove any empty spaces in password",
                });
        }

        if (!(password.length >= 8 && password.length < 15)) {
            return res
                .status(400)
                .send({
                    status: false,
                    message: "Password should be in 8-15 character",
                });
        }

        //------------------matching Email and password ------------------//

        const user = await userDetailsModel.findOne({ Email: Email });

        if (!user)
            return res
                .status(404)
                .send({ status: false, message: "enter correct Email" });

        let checkPassword = user.password;

        let matchUser = await bcrypt.compare(password, checkPassword);

        if (!matchUser)
            return res
                .status(401)
                .send({ status: false, message: "password does not match" });

        //----------------generating token --------------------------------//

        let token = jwt.sign(
            {
                userId: user._id.toString(),

                at: Math.floor(Date.now() / 1000), //issued date
                exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60, //expires in 24 hr 24 represent this
            },
            "project_5"
        );

        res.setHeader("Auth", token);
        return res
            .status(200)
            .send({
                status: true,
                message: "User login successfull",
                data: { userId: user._id, token: token },
            });
    } catch (err) {
        console.log(err);
        return res.status(500).send({ status: false, message: err.message });
    }
};

module.exports = { createUser, loginUser };
