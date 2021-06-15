import React, { useState } from "react";

export default function AboutUs() {
  const [useCategory, setCategory] = useState(
    "Welcome to Murchison & Cumming, LLP"
  );

  const categoryClick = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div>
      <div>Title</div>
      <div className="sidebar">
        <div onClick={categoryClick}>Welcome to Murchison & Cumming, LLP</div>
        <div onClick={categoryClick}>Litigation Philosophy</div>
        <div onClick={categoryClick}>Billing Philosophy</div>
        <div onClick={categoryClick}>Professional Organizations</div>
        <div onClick={categoryClick}>Representative Clients</div>
        <div onClick={categoryClick}>Diversity, Equity, & Inclusion</div>
        <div onClick={categoryClick}>Making A Difference</div>
        <div onClick={categoryClick}>Administrative Contacts</div>
      </div>
    </div>
  );
}
