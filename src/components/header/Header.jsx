import React from "react";
import {
  HeaderButton,
  HeaderContainer,
  HeaderForm,
  HeaderTitle,
  SearchInput,
  SelectBox,
} from "./Header.style";
import { useNavigate } from "react-router-dom";
import { toastWarnNotify } from "../../helper/ToastNotify";

const Header = ({ setQuery, setSelectType, getData }) => {
  const printType = ["All", "Books", "Magazines"];
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = sessionStorage.getItem("user");
    if (user) {
      getData();
    } else {
      toastWarnNotify("Please login first...");
      navigate("/login");
    }
  };

  return (
    <HeaderContainer>
      <HeaderTitle>Books or Magazines</HeaderTitle>
      <HeaderForm onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          placeholder="Search to name"
          required
          onChange={(e) => setQuery(e.target.value)}
        />
        <SelectBox onChange={(e) => setQuery(e.target.value)}>
          {printType.map((type) => (
            <option value={type}>{type}</option>
          ))}
        </SelectBox>
        <HeaderButton type="submit">Search</HeaderButton>
      </HeaderForm>
    </HeaderContainer>
  );
};

export default Header;
