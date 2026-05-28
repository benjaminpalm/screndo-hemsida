"use client";

import Navbar from "@/components/Navbar";
import { useState, FormEvent } from "react";

const inputStyle: React.CSSProperties = {
  borderRadius: "100px",
  border: "1px solid #ECECEC",
  padding: "14px 20px",
  fontSize: "15px",
  background: "#F8F7F4",
  width: "100%",
  boxSizing: "border-box",
  outline: "none",
  fontFamily: "inherit",
};

const textareaStyle: React.CSSProperties = {
  ...inputStyle,
  borderRadius: "16px",
  resize: "vertical",
};

const labelStyle: React.CSSProperties = {
  fontSize: "14px",
  fontWeight: 500,
  color: "#0A0A0A",
  marginBottom: "6px",
  display: "block",
};

const errorStyle: React.CSSProperties = {
  fontSize: "13px",
  color: "#FF6B5C",
  marginTop: "6px",
};

const fieldStyle: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  marginBottom: "20px",
};

type Fields = {
  email: string;
  firstName: string;
  lastName: string;
  company: string;
  jobTitle: string;
  companySize: string;
  message: string;
};

type Errors = Partial<Record<keyof Fields, string>>;

const required: (keyof Fields)[] = [
  "email",
  "firstName",
  "lastName",
  "company",
  "jobTitle",
  "companySize",
];

export default function BookIntro() {
  const [fields, setFields] = useState<Fields>({
    email: "",
    firstName: "",
    lastName: "",
    company: "",
    jobTitle: "",
    companySize: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function set(key: keyof Fields, value: string) {
    setFields((f) => ({ ...f, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate(): Errors {
    const e: Errors = {};
    for (const key of required) {
      if (!fields[key].trim()) {
        e[key] = "Please complete this required field.";
      }
    }
    return e;
  }

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }
    setSubmitted(true);
  }

  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "80px 24px",
        }}
      >
        <div style={{ maxWidth: "600px", width: "100%" }}>
          <h1
            style={{
              fontWeight: 700,
              fontSize: "36px",
              letterSpacing: "-1px",
              marginBottom: "8px",
              marginTop: 0,
            }}
          >
            Book an intro
          </h1>
          <p
            style={{
              fontSize: "16px",
              color: "#6B6B6B",
              marginBottom: "48px",
              marginTop: 0,
            }}
          >
            We will reach out within 24 hours.
          </p>

          {submitted ? (
            <p style={{ fontSize: "18px", color: "#0A0A0A" }}>
              Thanks! We will be in touch soon.
            </p>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {/* Work email */}
              <div style={fieldStyle}>
                <label style={labelStyle}>
                  Work email <span style={{ color: "#FF6B5C" }}>*</span>
                </label>
                <input
                  type="email"
                  value={fields.email}
                  onChange={(e) => set("email", e.target.value)}
                  style={inputStyle}
                />
                {errors.email && <span style={errorStyle}>{errors.email}</span>}
              </div>

              {/* First name + Last name */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                  marginBottom: "20px",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label style={labelStyle}>
                    First name <span style={{ color: "#FF6B5C" }}>*</span>
                  </label>
                  <input
                    type="text"
                    value={fields.firstName}
                    onChange={(e) => set("firstName", e.target.value)}
                    style={inputStyle}
                  />
                  {errors.firstName && (
                    <span style={errorStyle}>{errors.firstName}</span>
                  )}
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label style={labelStyle}>
                    Last name <span style={{ color: "#FF6B5C" }}>*</span>
                  </label>
                  <input
                    type="text"
                    value={fields.lastName}
                    onChange={(e) => set("lastName", e.target.value)}
                    style={inputStyle}
                  />
                  {errors.lastName && (
                    <span style={errorStyle}>{errors.lastName}</span>
                  )}
                </div>
              </div>

              {/* Company name + Job title */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                  marginBottom: "20px",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label style={labelStyle}>
                    Company name <span style={{ color: "#FF6B5C" }}>*</span>
                  </label>
                  <input
                    type="text"
                    value={fields.company}
                    onChange={(e) => set("company", e.target.value)}
                    style={inputStyle}
                  />
                  {errors.company && (
                    <span style={errorStyle}>{errors.company}</span>
                  )}
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <label style={labelStyle}>
                    Job title <span style={{ color: "#FF6B5C" }}>*</span>
                  </label>
                  <input
                    type="text"
                    value={fields.jobTitle}
                    onChange={(e) => set("jobTitle", e.target.value)}
                    style={inputStyle}
                  />
                  {errors.jobTitle && (
                    <span style={errorStyle}>{errors.jobTitle}</span>
                  )}
                </div>
              </div>

              {/* Company size */}
              <div style={fieldStyle}>
                <label style={labelStyle}>
                  Company size <span style={{ color: "#FF6B5C" }}>*</span>
                </label>
                <select
                  value={fields.companySize}
                  onChange={(e) => set("companySize", e.target.value)}
                  style={{ ...inputStyle, appearance: "auto" }}
                >
                  <option value="">Select…</option>
                  <option value="1-50">1–50 employees</option>
                  <option value="51-200">51–200 employees</option>
                  <option value="201-500">201–500 employees</option>
                  <option value="500+">500+ employees</option>
                </select>
                {errors.companySize && (
                  <span style={errorStyle}>{errors.companySize}</span>
                )}
              </div>

              {/* Message */}
              <div style={fieldStyle}>
                <label style={labelStyle}>
                  Anything you want us to know before we meet?
                </label>
                <textarea
                  rows={4}
                  value={fields.message}
                  onChange={(e) => set("message", e.target.value)}
                  style={textareaStyle}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                style={{
                  width: "100%",
                  background: "#04D8B5",
                  color: "#0A0A0A",
                  fontWeight: 600,
                  fontSize: "16px",
                  padding: "16px",
                  borderRadius: "100px",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  marginTop: "8px",
                }}
              >
                Send request
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
