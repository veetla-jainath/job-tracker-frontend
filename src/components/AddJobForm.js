import React, { useState } from "react";
import API from "../api";

const AddJobForm = () => {
  const [form, setForm] = useState({ company: "", role: "", status: "Applied", appliedDate: "", link: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/jobs", form);
    alert("Job Added!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Company" onChange={(e) => setForm({ ...form, company: e.target.value })} />
      <input type="text" placeholder="Role" onChange={(e) => setForm({ ...form, role: e.target.value })} />
      <input type="date" onChange={(e) => setForm({ ...form, appliedDate: e.target.value })} />
      <input type="text" placeholder="Link" onChange={(e) => setForm({ ...form, link: e.target.value })} />
      <button type="submit">Add Job</button>
    </form>
  );
};

export default AddJobForm;
