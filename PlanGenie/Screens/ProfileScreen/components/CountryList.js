import React from "react";
import { SelectList } from 'react-native-dropdown-select-list';
import { View, StyleSheet } from "react-native";

export default function AllCountries({continent,setSelectedCountry}){
    const AsianCountries = [
        { id: "AS1", name: "Afghanistan", continentKey: "5" },
        { id: "AS2", name: "Armenia", continentKey: "5" },
        { id: "AS3", name: "Azerbaijan", continentKey: "5" },
        { id: "AS4", name: "Bahrain", continentKey: "5" },
        { id: "AS5", name: "Bangladesh", continentKey: "5" },
        { id: "AS6", name: "Bhutan", continentKey: "5" },
        { id: "AS7", name: "Brunei", continentKey: "5" },
        { id: "AS8", name: "Cambodia", continentKey: "5" },
        { id: "AS9", name: "China", continentKey: "5" },
        { id: "AS10", name: "Cyprus", continentKey: "5" },
        { id: "AS11", name: "Georgia", continentKey: "5" },
        { id: "AS12", name: "India", continentKey: "5" },
        { id: "AS13", name: "Indonesia", continentKey: "5" },
        { id: "AS14", name: "Iran", continentKey: "5" },
        { id: "AS15", name: "Iraq", continentKey: "5" },
        { id: "AS16", name: "Japan", continentKey: "5" },
        { id: "AS17", name: "Jordan", continentKey: "5" },
        { id: "AS18", name: "Kazakhstan", continentKey: "5" },
        { id: "AS19", name: "Kuwait", continentKey: "5" },
        { id: "AS20", name: "Kyrgyzstan", continentKey: "5" },
        { id: "AS21", name: "Laos", continentKey: "5" },
        { id: "AS22", name: "Lebanon", continentKey: "5" },
        { id: "AS23", name: "Malaysia", continentKey: "5" },
        { id: "AS24", name: "Maldives", continentKey: "5" },
        { id: "AS25", name: "Mongolia", continentKey: "5" },
        { id: "AS26", name: "Myanmar", continentKey: "5" },
        { id: "AS27", name: "Nepal", continentKey: "5" },
        { id: "AS28", name: "North Korea", continentKey: "5" },
        { id: "AS29", name: "Oman", continentKey: "5" },
        { id: "AS30", name: "Pakistan", continentKey: "5" },
        { id: "AS31", name: "Palestine", continentKey: "5" },
        { id: "AS32", name: "Philippines", continentKey: "5" },
        { id: "AS33", name: "Qatar", continentKey: "5" },
        { id: "AS34", name: "Russia", continentKey: "5" },
        { id: "AS35", name: "Saudi Arabia", continentKey: "5" },
        { id: "AS36", name: "Singapore", continentKey: "5" },
        { id: "AS37", name: "South Korea", continentKey: "5" },
        { id: "AS38", name: "Sri Lanka", continentKey: "5" },
        { id: "AS39", name: "Syria", continentKey: "5" },
        { id: "AS40", name: "Taiwan", continentKey: "5" },
        { id: "AS41", name: "Tajikistan", continentKey: "5" },
        { id: "AS42", name: "Thailand", continentKey: "5" },
        { id: "AS43", name: "Timor-Leste", continentKey: "5" },
        { id: "AS44", name: "Turkey", continentKey: "5" },
        { id: "AS45", name: "Turkmenistan", continentKey: "5" },
        { id: "AS46", name: "United Arab Emirates", continentKey: "5" },
        { id: "AS47", name: "Uzbekistan", continentKey: "5" },
        { id: "AS48", name: "Vietnam", continentKey: "5" },
        { id: "AS49", name: "Yemen", continentKey: "5" }
      ];
      
      const AfricanCountries = [
        { id: "AF1", name: "Algeria", continentKey: "1" },
        { id: "AF2", name: "Angola", continentKey: "1" },
        { id: "AF3", name: "Benin", continentKey: "1" },
        { id: "AF4", name: "Botswana", continentKey: "1" },
        { id: "AF5", name: "Burkina Faso", continentKey: "1" },
        { id: "AF6", name: "Burundi", continentKey: "1" },
        { id: "AF7", name: "Cabo Verde", continentKey: "1" },
        { id: "AF8", name: "Cameroon", continentKey: "1" },
        { id: "AF9", name: "Central African Republic", continentKey: "1" },
        { id: "AF10", name: "Chad", continentKey: "1" },
        { id: "AF11", name: "Comoros", continentKey: "1" },
        { id: "AF12", name: "Democratic Republic of the Congo", continentKey: "1" },
        { id: "AF13", name: "Djibouti", continentKey: "1" },
        { id: "AF14", name: "Egypt", continentKey: "1" },
        { id: "AF15", name: "Equatorial Guinea", continentKey: "1" },
        { id: "AF16", name: "Eritrea", continentKey: "1" },
        { id: "AF17", name: "Eswatini", continentKey: "1" },
        { id: "AF18", name: "Ethiopia", continentKey: "1" },
        { id: "AF19", name: "Gabon", continentKey: "1" },
        { id: "AF20", name: "Gambia", continentKey: "1" },
        { id: "AF21", name: "Ghana", continentKey: "1" },
        { id: "AF22", name: "Guinea", continentKey: "1" },
        { id: "AF23", name: "Guinea-Bissau", continentKey: "1" },
        { id: "AF24", name: "Ivory Coast", continentKey: "1" },
        { id: "AF25", name: "Kenya", continentKey: "1" },
        { id: "AF26", name: "Lesotho", continentKey: "1" },
        { id: "AF27", name: "Liberia", continentKey: "1" },
        { id: "AF28", name: "Libya", continentKey: "1" },
        { id: "AF29", name: "Madagascar", continentKey: "1" },
        { id: "AF30", name: "Malawi", continentKey: "1" },
        { id: "AF31", name: "Mali", continentKey: "1" },
        { id: "AF32", name: "Mauritania", continentKey: "1" },
        { id: "AF33", name: "Mauritius", continentKey: "1" },
        { id: "AF34", name: "Morocco", continentKey: "1" },
        { id: "AF35", name: "Mozambique", continentKey: "1" },
        { id: "AF36", name: "Namibia", continentKey: "1" },
        { id: "AF37", name: "Niger", continentKey: "1" },
        { id: "AF38", name: "Nigeria", continentKey: "1" },
        { id: "AF39", name: "Rwanda", continentKey: "1" },
        { id: "AF40", name: "Sao Tome and Principe", continentKey: "1" },
        { id: "AF41", name: "Senegal", continentKey: "1" },
        { id: "AF42", name: "Seychelles", continentKey: "1" },
        { id: "AF43", name: "Sierra Leone", continentKey: "1" },
        { id: "AF44", name: "Somalia", continentKey: "1" },
        { id: "AF45", name: "South Africa", continentKey: "1" },
        { id: "AF46", name: "South Sudan", continentKey: "1" },
        { id: "AF47", name: "Sudan", continentKey: "1" },
        { id: "AF48", name: "Tanzania", continentKey: "1" },
        { id: "AF49", name: "Togo", continentKey: "1" },
        { id: "AF50", name: "Tunisia", continentKey: "1" },
        { id: "AF51", name: "Uganda", continentKey: "1" },
        { id: "AF52", name: "Zambia", continentKey: "1" },
        { id: "AF53", name: "Zimbabwe", continentKey: "1" }
      ];
      
      const NACountries = [
        { id: "NA1", name: "Antigua and Barbuda", continentKey: "4" },
        { id: "NA2", name: "Bahamas", continentKey: "4" },
        { id: "NA3", name: "Barbados", continentKey: "4" },
        { id: "NA4", name: "Belize", continentKey: "4" },
        { id: "NA5", name: "Canada", continentKey: "4" },
        { id: "NA6", name: "Costa Rica", continentKey: "4" },
        { id: "NA7", name: "Cuba", continentKey: "4" },
        { id: "NA8", name: "Dominica", continentKey: "4" },
        { id: "NA9", name: "Dominican Republic", continentKey: "4" },
        { id: "NA10", name: "El Salvador", continentKey: "4" },
        { id: "NA11", name: "Grenada", continentKey: "4" },
        { id: "NA12", name: "Guatemala", continentKey: "4" },
        { id: "NA13", name: "Haiti", continentKey: "4" },
        { id: "NA14", name: "Honduras", continentKey: "4" },
        { id: "NA15", name: "Jamaica", continentKey: "4" },
        { id: "NA16", name: "Mexico", continentKey: "4" },
        { id: "NA17", name: "Nicaragua", continentKey: "4" },
        { id: "NA18", name: "Panama", continentKey: "4" },
        { id: "NA19", name: "Saint Kitts and Nevis", continentKey: "4" },
        { id: "NA20", name: "Saint Lucia", continentKey: "4" },
        { id: "NA21", name: "Saint Vincent and the Grenadines", continentKey: "4" },
        { id: "NA22", name: "Trinidad and Tobago", continentKey: "4" },
        { id: "NA23", name: "United States", continentKey: "4" }
      ];
      
      const SACountries = [
        { id: "SA1", name: "Argentina", continentKey: "3" },
        { id: "SA2", name: "Bolivia", continentKey: "3" },
        { id: "SA3", name: "Brazil", continentKey: "3" },
        { id: "SA4", name: "Chile", continentKey: "3" },
        { id: "SA5", name: "Colombia", continentKey: "3" },
        { id: "SA6", name: "Ecuador", continentKey: "3" },
        { id: "SA7", name: "Guyana", continentKey: "3" },
        { id: "SA8", name: "Paraguay", continentKey: "3" },
        { id: "SA9", name: "Peru", continentKey: "3" },
        { id: "SA10", name: "Suriname", continentKey: "3" },
        { id: "SA11", name: "Uruguay", continentKey: "3" },
        { id: "SA12", name: "Venezuela", continentKey: "3" }
      ];
      
      const EuropeCountries = [
        { id: "EU1", name: "Albania", continentKey: "2" },
        { id: "EU2", name: "Andorra", continentKey: "2" },
        { id: "EU3", name: "Austria", continentKey: "2" },
        { id: "EU4", name: "Belarus", continentKey: "2" },
        { id: "EU5", name: "Belgium", continentKey: "2" },
        { id: "EU6", name: "Bosnia and Herzegovina", continentKey: "2" },
        { id: "EU7", name: "Bulgaria", continentKey: "2" },
        { id: "EU8", name: "Croatia", continentKey: "2" },
        { id: "EU9", name: "Cyprus", continentKey: "2" },
        { id: "EU10", name: "Czech Republic", continentKey: "2" },
        { id: "EU11", name: "Denmark", continentKey: "2" },
        { id: "EU12", name: "Estonia", continentKey: "2" },
        { id: "EU13", name: "Finland", continentKey: "2" },
        { id: "EU14", name: "France", continentKey: "2" },
        { id: "EU15", name: "Germany", continentKey: "2" },
        { id: "EU16", name: "Greece", continentKey: "2" },
        { id: "EU17", name: "Hungary", continentKey: "2" },
        { id: "EU18", name: "Iceland", continentKey: "2" },
        { id: "EU19", name: "Ireland", continentKey: "2" },
        { id: "EU20", name: "Italy", continentKey: "2" },
        { id: "EU21", name: "Kosovo", continentKey: "2" },
        { id: "EU22", name: "Latvia", continentKey: "2" },
        { id: "EU23", name: "Liechtenstein", continentKey: "2" },
        { id: "EU24", name: "Lithuania", continentKey: "2" },
        { id: "EU25", name: "Luxembourg", continentKey: "2" },
        { id: "EU26", name: "Malta", continentKey: "2" },
        { id: "EU27", name: "Moldova", continentKey: "2" },
        { id: "EU28", name: "Monaco", continentKey: "2" },
        { id: "EU29", name: "Montenegro", continentKey: "2" },
        { id: "EU30", name: "Netherlands", continentKey: "2" },
        { id: "EU31", name: "North Macedonia", continentKey: "2" },
        { id: "EU32", name: "Norway", continentKey: "2" },
        { id: "EU33", name: "Poland", continentKey: "2" },
        { id: "EU34", name: "Portugal", continentKey: "2" },
        { id: "EU35", name: "Romania", continentKey: "2" },
        { id: "EU36", name: "San Marino", continentKey: "2" },
        { id: "EU37", name: "Serbia", continentKey: "2" },
        { id: "EU38", name: "Slovakia", continentKey: "2" },
        { id: "EU39", name: "Slovenia", continentKey: "2" },
        { id: "EU40", name: "Spain", continentKey: "2" },
        { id: "EU41", name: "Sweden", continentKey: "2" },
        { id: "EU42", name: "Switzerland", continentKey: "2" },
        { id: "EU43", name: "Ukraine", continentKey: "2" },
        { id: "EU44", name: "United Kingdom", continentKey: "2" },
        { id: "EU45", name: "Vatican City", continentKey: "2" }
      ];
      
      const OceaniaCountries = [
        { id: "OC1", name: "Australia", continentKey: "6" },
        { id: "OC2", name: "Fiji", continentKey: "6" },
        { id: "OC3", name: "Kiribati", continentKey: "6" },
        { id: "OC4", name: "Marshall Islands", continentKey: "6" },
        { id: "OC5", name: "Micronesia", continentKey: "6" },
        { id: "OC6", name: "Nauru", continentKey: "6" },
        { id: "OC7", name: "New Zealand", continentKey: "6" },
        { id: "OC8", name: "Palau", continentKey: "6" },
        { id: "OC9", name: "Papua New Guinea", continentKey: "6" },
        { id: "OC10", name: "Samoa", continentKey: "6" },
        { id: "OC11", name: "Solomon Islands", continentKey: "6" },
        { id: "OC12", name: "Tonga", continentKey: "6" },
        { id: "OC13", name: "Tuvalu", continentKey: "6" },
        { id: "OC14", name: "Vanuatu", continentKey: "6" }
      ];
      const countryData = {
        Africa: AfricanCountries,
        Asia: AsianCountries,
        Europe: EuropeCountries,
        "North America": NACountries,
        "South America": SACountries,
        Oceania: OceaniaCountries
      };
      const countries = countryData[continent] || [];
      const countryItems = countries.map(country => ({
        id: country.id,
        value: country.name // Use 'value' instead of 'name' for SelectList
    }));
    return(
        <View>
        
            <SelectList
                setSelected={(val) => setSelectedCountry(val)}
                data={countryItems}
                save="value"
                boxStyles={styles.input}
                search={false}
                fontWeight
                inputStyles={styles.dropdownItemText}
            />
        </View>
    );
}
const styles=StyleSheet.create({
    dropdownItemText:{
      fontSize:14,
      marginLeft:-10
    },
    input:{
      borderWidth:0.3,
      borderRadius:5,
      borderColor:'#544C4C',
      padding:8,
      marginTop:10,
      width:'100%',
    },
  });
  