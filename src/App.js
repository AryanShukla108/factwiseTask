import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { Formik } from "formik";
import "./App.css";
import * as Yup from "yup";
import { X } from "react-feather";

function App() {
  const initialData = [
    {
      id: 1,
      first: "Aidan",
      last: "Wang",
      dob: "1973-10-16",
      gender: "male",
      email: "aidan.wang@example.com",
      picture: "https://randomuser.me/api/portraits/med/men/93.jpg",
      country: "New Zealand",
      description:
        "This character description generator will generate a fairly random description of a belonging to Aidan Wang. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Aidan Wang.",
    },
    {
      id: 2,
      first: "Anna",
      last: "Horten",
      dob: "1972-03-15",
      gender: "female",
      email: "anna.horten@example.com",
      picture: "https://randomuser.me/api/portraits/med/women/48.jpg",
      country: "Norway",
      description:
        "This character description generator will generate a fairly random description of a belonging to Anna Horten. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Anna Horten.",
    },
    {
      id: 3,
      first: "Max",
      last: "Arnold",
      dob: "1954-04-22",
      gender: "male",
      email: "max.arnold@example.com",
      picture: "https://randomuser.me/api/portraits/med/men/27.jpg",
      country: "Ireland",
      description:
        "This character description generator will generate a fairly random description of a belonging to Max Arnold. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Max Arnold.",
    },
    {
      id: 4,
      first: "محمدپارسا",
      last: "صدر",
      dob: "1953-06-01",
      gender: "male",
      email: "mhmdprs.sdr@example.com",
      picture: "https://randomuser.me/api/portraits/med/men/34.jpg",
      country: "Iran",
      description:
        "This character description generator will generate a fairly random description of a belonging to محمدپارسا صدر. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of محمدپارسا صدر.",
    },
    {
      id: 5,
      first: "Emilia",
      last: "Gonzalez",
      dob: "1949-10-07",
      gender: "female",
      email: "emilia.gonzalez@example.com",
      picture: "https://randomuser.me/api/portraits/med/women/90.jpg",
      country: "Spain",
      description:
        "This character description generator will generate a fairly random description of a belonging to Emilia Gonzalez. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Emilia Gonzalez.",
    },
    {
      id: 6,
      first: "Alicia",
      last: "Ma",
      dob: "1995-11-23",
      gender: "female",
      email: "alicia.ma@example.com",
      picture: "https://randomuser.me/api/portraits/med/women/91.jpg",
      country: "Canada",
      description:
        "This character description generator will generate a fairly random description of a belonging to Alicia Ma. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Alicia Ma.",
    },
    {
      id: 7,
      first: "یاسمن",
      last: "كامياران",
      dob: "1985-06-24",
      gender: "female",
      email: "ysmn.kmyrn@example.com",
      picture: "https://randomuser.me/api/portraits/med/women/64.jpg",
      country: "Iran",
      description:
        "This character description generator will generate a fairly random description of a belonging to یاسمن كامياران. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of یاسمن كامياران.",
    },
    {
      id: 8,
      first: "Reingard",
      last: "Barz",
      dob: "1985-03-24",
      gender: "female",
      email: "reingard.barz@example.com",
      picture: "https://randomuser.me/api/portraits/med/women/95.jpg",
      country: "Germany",
      description:
        "This character description generator will generate a fairly random description of a belonging to Reingard Barz. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Reingard Barz.",
    },
    {
      id: 9,
      first: "Felix",
      last: "Douglas",
      dob: "1984-07-05",
      gender: "male",
      email: "felix.douglas@example.com",
      picture: "https://randomuser.me/api/portraits/med/men/53.jpg",
      country: "United Kingdom",
      description:
        "This character description generator will generate a fairly random description of a belonging to Felix Douglas. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Felix Douglas.",
    },
    {
      id: 10,
      first: "Claire",
      last: "Robertson",
      dob: "2006-04-16",
      gender: "female",
      email: "claire.robertson@example.com",
      picture: "https://randomuser.me/api/portraits/med/women/75.jpg",
      country: "United States",
      description:
        "This character description generator will generate a fairly random description of a belonging to Claire Robertson. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Claire Robertson.",
    },
    {
      id: 11,
      first: "Ümit",
      last: "Taşlı",
      dob: "2004-10-17",
      gender: "male",
      email: "umit.tasli@example.com",
      picture: "https://randomuser.me/api/portraits/med/men/80.jpg",
      country: "Turkey",
      description:
        "This character description generator will generate a fairly random description of a belonging to Ümit Taşlı. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Ümit Taşlı.",
    },
    {
      id: 12,
      first: "Tiemo",
      last: "Monshouwer",
      dob: "1956-09-11",
      gender: "male",
      email: "tiemo.monshouwer@example.com",
      picture: "https://randomuser.me/api/portraits/med/men/16.jpg",
      country: "Netherlands",
      description:
        "This character description generator will generate a fairly random description of a belonging to Tiemo Monshouwer. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Tiemo Monshouwer.",
    },
    {
      id: 13,
      first: "Dorian",
      last: "Carpentier",
      dob: "1963-10-06",
      gender: "male",
      email: "dorian.carpentier@example.com",
      picture: "https://randomuser.me/api/portraits/med/men/77.jpg",
      country: "France",
      description:
        "This character description generator will generate a fairly random description of a belonging to Dorian Carpentier. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Dorian Carpentier.",
    },
    {
      id: 14,
      first: "آرمیتا",
      last: "موسوی",
      dob: "1968-07-19",
      gender: "female",
      email: "armyt.mwswy@example.com",
      picture: "https://randomuser.me/api/portraits/med/women/59.jpg",
      country: "Iran",
      description:
        "This character description generator will generate a fairly random description of a belonging to آرمیتا موسوی. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of آرمیتا موسوی.",
    },
    {
      id: 15,
      first: "Lias",
      last: "Korsvik",
      dob: "1969-12-09",
      gender: "male",
      email: "lias.korsvik@example.com",
      picture: "https://randomuser.me/api/portraits/med/men/69.jpg",
      country: "Norway",
      description:
        "This character description generator will generate a fairly random description of a belonging to Lias Korsvik. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Lias Korsvik.",
    },
    {
      id: 16,
      first: "Florence",
      last: "Cooper",
      dob: "1989-08-31",
      gender: "female",
      email: "florence.cooper@example.com",
      picture: "https://randomuser.me/api/portraits/med/women/19.jpg",
      country: "Ireland",
      description:
        "This character description generator will generate a fairly random description of a belonging to Florence Cooper. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Florence Cooper.",
    },
    {
      id: 17,
      first: "Donald",
      last: "Harrison",
      dob: "1947-12-20",
      gender: "male",
      email: "donald.harrison@example.com",
      picture: "https://randomuser.me/api/portraits/med/men/34.jpg",
      country: "United Kingdom",
      description:
        "This character description generator will generate a fairly random description of a belonging to Donald Harrison. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Donald Harrison.",
    },
    {
      id: 18,
      first: "Michael",
      last: "Nichols",
      dob: "1963-06-26",
      gender: "male",
      email: "michael.nichols@example.com",
      picture: "https://randomuser.me/api/portraits/med/men/76.jpg",
      country: "United Kingdom",
      description:
        "This character description generator will generate a fairly random description of a belonging to Michael Nichols. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Michael Nichols.",
    },
    {
      id: 19,
      first: "Emile",
      last: "Miller",
      dob: "2009-02-03",
      gender: "male",
      email: "emile.miller@example.com",
      picture: "https://randomuser.me/api/portraits/med/men/24.jpg",
      country: "Canada",
      description:
        "This character description generator will generate a fairly random description of a belonging to Emile Miller. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Emile Miller.",
    },
    {
      id: 20,
      first: "Marjella",
      last: "Stuijt",
      dob: "2014-11-11",
      gender: "female",
      email: "marjella.stuijt@example.com",
      picture: "https://randomuser.me/api/portraits/med/women/31.jpg",
      country: "Netherlands",
      description:
        "This character description generator will generate a fairly random description of a belonging to Marjella Stuijt. However, some aspects of the descriptions will remain the same, this is done to keep the general structure the same, while still randomizing the important details of Marjella Stuijt.",
    },
  ];

  const [users, setUsers] = useState(initialData);
  const [open, setOpen] = useState(null);
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const UserSchema = Yup.object().shape({
    first: Yup.string().required("First name is required"),
    last: Yup.string().required("Last name is required"),
    dob: Yup.date().required("DOB is required").test(
      'is-adult',
      'You must be at least 18 years old',
      value => {
        return new Date().getFullYear() - new Date(value).getFullYear() >= 18;
      }
    ),
    country: Yup.string()
      .matches(/^[a-zA-Z\s]*$/, "Only letters are allowed")
      .required("Country is required"),
    description: Yup.string().required("Description is required"),
  });

  const handleClick = (id) => {
    setOpen(id === open ? null : id);
  };

  const handleSearch = (e) => {
    setSearch(e?.target?.value);
  };

  const handleEdit = (id) => {
    setEditId(id);
  };

  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    setShowModal(false);
  };

  const handleDeleteClick = (id) => {
    setShowModal(true);
    setDeleteId(id);
  };

  const handleSaveEdit = (values) => {
    const updatedUsers = users.map((user) =>
      user.id === editId ? { ...user, ...values } : user
    );
    setUsers(updatedUsers);
    setEditId(null);
  };

  const handleCancelEdit = () => {
    setEditId(null);
  };

  const filteredUsers = users.filter((user) =>
    `${user.first} ${user.last}`.toLowerCase().includes(search.toLowerCase())
  );

  const calculateAge = (dob) => {
    const birthDate = new Date(dob);
    const ageDiffernce = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDiffernce);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };

  return (
    <div className="App">
      <div className="app-parent">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={handleSearch}
          className="input-search"
        />
        {filteredUsers.map((user) => {
          return (
            <div key={user?.id}>
              {editId === user.id ? (
                ""
              ) : (
                <div onClick={() => handleClick(user?.id)} className="name">
                  <div className="drop-down">
                    <div className="img-div">
                      {" "}
                      <img
                        src={user?.picture}
                        alt="picture"
                        className="picture"
                      />{" "}
                      <span>{user?.first}</span> <span>{user?.last}</span>
                    </div>
                    <div className="KeyboardArrowDownIcon">
                      {/* <KeyboardArrowDownIcon /> */}
                      {open === user?.id ? <AddIcon /> : <RemoveIcon />}
                    </div>
                  </div>
                  {open === user?.id && (
                    <div>
                      <div className="parent">
                        <div>{calculateAge(user?.dob)}</div>
                        <div>{user.gender}</div>
                        <div>{user.country}</div>
                      </div>
                      <div className="des">{user?.description}</div>
                      <div className="actions">
                        <EditIcon
                          className="EditIcon"
                          onClick={() => handleEdit(user.id)}
                        />
                        <DeleteIcon
                          className="EditIcons"
                          onClick={() => handleDeleteClick(user.id)}
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}
              {editId === user.id && (
                <div className="name">
                  <Formik
                    initialValues={user}
                    validationSchema={UserSchema}
                    onSubmit={handleSaveEdit}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleSubmit,
                      handleBlur,
                    }) => (
                      <form onSubmit={handleSubmit} className="edit-form">
                        <div className="drop-down">
                          <div>
                            {" "}
                            <img
                              src={user?.picture}
                              alt="picture"
                              className="picture"
                            />
                          </div>
                          <div>
                            <input
                              type="text"
                              name="first"
                              className="name-inp"
                              value={values.first}
                              onChange={handleChange}
                              placeholder="First Name"
                            />
                            {touched.first && errors.first && (
                              <div className="error-message">
                                {errors.first}
                              </div>
                            )}
                            <input
                              type="text"
                              name="last"
                              className="name-inp"
                              value={values.last}
                              onChange={handleChange}
                              placeholder="Last Name"
                            />
                            {touched.last && errors.last && (
                              <div className="error-message">{errors.last}</div>
                            )}
                          </div>
                          <div className="KeyboardArrowDownIcon">
                            {/* <KeyboardArrowDownIcon /> */}
                            {editId === user.id ? <AddIcon /> : <RemoveIcon />}
                          </div>
                        </div>
                        <div className="drop-down">
                          <input
                            type="date"
                            name="dob"
                            value={values.dob}
                            onChange={handleChange}
                            className="name-inp inp"
                            placeholder="Date of Birth"
                          />
                          {touched.dob && errors.dob && (
                            <div className="error-message">
                              {errors.dob}
                            </div>
                          )}
                          <select
                            name="gender"
                            value={values.gender}
                            onChange={handleChange}
                            className="name-inp inp"
                          >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="prefer_not_to_say">
                              Prefer not to say
                            </option>
                          </select>
                          <input
                            type="text"
                            name="country"
                            className="name-inp inp"
                            value={values.country}
                            onChange={handleChange}
                            placeholder="Country"
                          />
                          {touched.country && errors.country && (
                            <div className="error-message">
                              {errors.country}
                            </div>
                          )}
                        </div>
                        <textarea
                          style={{ width: "288px", height: "150px" }}
                          name="description"
                          value={values.description}
                          onChange={handleChange}
                          placeholder="Description"
                        />
                        {touched.description && errors.description && (
                          <div className="error-message">
                            {errors.description}
                          </div>
                        )}
                        <div className="edit-actions">
                          <button className="btn-icon" type="submit">
                            <CheckIcon className="CheckIcon" />
                          </button>
                          <button
                            className="btn-icons"
                            type="button"
                            onClick={handleCancelEdit}
                          >
                            <CloseIcon className="CheckIcons" />
                          </button>
                        </div>
                      </form>
                    )}
                  </Formik>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="close">
              <div
                style={{ cursor: "pointer" }}
                className="close-btn"
                onClick={() => {
                  setShowModal(false);
                }}
              >
                <X className="cross-btn" />
              </div>
            </div>
            <p>Are you sure you want to delete?</p>
            <div className="btn-all">
              <button className="bac" onClick={() => setShowModal(false)}>Cancel</button>
              <button className="del" onClick={() => handleDelete(deleteId)}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
