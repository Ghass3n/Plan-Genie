import React, { useState, useEffect } from "react";
import { SelectList } from 'react-native-dropdown-select-list';
import { View, StyleSheet } from "react-native";

export default function Cities({ selectedCountry, setSelectedCity }) {
  const [cities,Setcities] = useState([]);
  let [isLoading,setIsLoading] = useState(true);
  let [error, setError] = useState();
  let [response, setResponse] = useState();
    var headers= new Headers();
    headers.append("X-CSCAPI-KEY", "API_KEY");

    var requestOptions = {
      method: 'GET',
      headers: headers,
      redirect: 'follow'
     };

     useEffect(() => {
      fetch("https://api.countrystatecity.in/v1/countries/IN/states", requestOptions)
      .then(response => response.text())
      .then(result => Setcities(result))
      .catch(error => console.log('error', error));
     },[])

    return (
        <View>
            <SelectList
                setSelected={(val) => setSelectedCity(val)}
                data={cities}
                save="value"
                boxStyles={styles.input}
                search={false}
                fontWeight
                inputStyles={styles.dropdownItemText}

            />
        </View>
    );
}

const styles = StyleSheet.create({
    dropdownItemText: {
        fontSize: 14,
        marginLeft: -10
    },
    input: {
        borderWidth: 0.3,
        borderRadius: 5,
        borderColor: '#544C4C',
        padding: 8,
        marginTop: 10,
        width: '100%',
    },
});
