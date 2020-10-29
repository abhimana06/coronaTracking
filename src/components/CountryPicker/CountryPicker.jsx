import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountryData } from "../../api";
import styles from "./CountryPicker.module.css";

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);
  useEffect(() => {
    const fetchApiData = async () => {
      setFetchedCountries(await fetchCountryData());
    };

    fetchApiData();
  }, [setFetchedCountries]);

  return (
    <div>
      <FormControl className={styles.formControl}>
        <h4> Select Country</h4>{" "}
        <NativeSelect
          defaultValue=""
          onChange={(e) => {
            handleCountryChange(e.target.value);
          }}
        >
          <option value="">Global</option>
          {fetchedCountries.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default CountryPicker;
