var vaccineList;
switch (travelSelection)
{
    case "Cameroon":
    case "Ethiopia":
    case "Nigeria":
	    vaccineList = ["Measles", "Yellow Fever", "Typhoid", "Polio", "Cholera", "Hepatitis A", "Hepatitis B", "Malaria", "Meningitis", "Rabies"];
		break;
    case "Philippines":
	    vaccineList = ["Measles", "Yellow Fever", "Typhoid", "Polio", "Cholera", "Hepatitis A", "Hepatitis B", "Malaria", "Japanese Encephalitis", "Rabies"];
		break;
    case "Benin":
    case "Central African Republic":
    case "Chad":
    case "Ghana":
	    vaccineList = ["Measles", "Yellow Fever", "Typhoid", "Polio", "Hepatitis A", "Hepatitis B", "Malaria", "Meningitis", "Rabies"];
		break;
	case "Bangladesh":
    case "India":
	    vaccineList = ["Measles", "Yellow Fever", "Typhoid", "Cholera", "Hepatitis A", "Hepatitis B", "Malaria", "Japanese Encephalitis", "Rabies"];
		break;
    case "Burma":
    case "China":
    case "Indonesia":
    case "Pakistan":
    case "Papua New Guinea":
	    vaccineList = ["Measles", "Yellow Fever", "Typhoid", "Polio", "Hepatitis A", "Hepatitis B", "Malaria", "Japanese Encephalitis", "Rabies"];
		break;
    case "Democratic Republic of the Congo":
    case "Somalia":
    case "Zambia":
	    vaccineList = ["Measles", "Yellow Fever", "Typhoid", "Polio", "Cholera", "Hepatitis A", "Hepatitis B", "Malaria", "Rabies"];
		break;
    case "The Gambia":
	    vaccineList = ["Measles", "Yellow Fever", "Typhoid", "Polio", "Hepatitis A", "Hepatitis B", "Malaria", "Meningitis", "Rabies"];
		break;
    case "Kenya":
    case "Sudan":
    case "Uganda":
	    vaccineList = ["Measles", "Yellow Fever", "Typhoid", "Cholera", "Hepatitis A", "Hepatitis B", "Malaria", "Meningitis", "Rabies"];
		break;
    case "Angola":
    case "Iran":
	    vaccineList = ["Measles", "Yellow Fever", "Typhoid", "Polio", "Hepatitis A", "Hepatitis B", "Malaria", "Rabies"];
		break;
    case "Burkina Faso":
    case "Ivory Coast":
    case "Eritrea":
    case "Guinea":
    case "Guinea-Bissau":
    case "Mali":
    case "Niger":
    case "Saudi Arabia":
    case "Senegal":
    case "Republic of South Sudan":
    case "Togo":
	    vaccineList = ["Measles", "Yellow Fever", "Typhoid", "Hepatitis A", "Hepatitis B", "Malaria", "Meningitis", "Rabies"];
		break;
    case "Burundi":
    case "Haiti":
    case "Malawi":
    case "Mozambique":
	    vaccineList = ["Measles", "Yellow Fever", "Typhoid", "Cholera", "Hepatitis A", "Hepatitis B", "Malaria", "Rabies"];
		break;
    case "Cambodia":
    case "Laos":
    case "Malaysia":
    case "Nepal":
    case "Thailand":
	    vaccineList = ["Measles", "Yellow Fever", "Typhoid", "Hepatitis A", "Hepatitis B", "Malaria", "Japanese Encephalitis", "Rabies"];
		break;
    case "Afghanistan":
	    vaccineList = ["Measles", "Typhoid", "Polio", "Hepatitis A", "Hepatitis B", "Malaria", "Rabies"];
		break;
    case "Algeria":
    case "Belize":
    case "Bolivia":
    case "Botswana":
    case "Brazil":
    case "Cape Verde":
    case "Colombia":
    case "Republic of the Congo":
    case "Costa Rica":
    case "Dominican Republic":
    case "Ecuador":
    case "Galápagos Islands":
    case "El Salvador":
    case "Equatorial Guinea":
    case "Eswatini":
    case "French Guiana":
    case "Gabon":
    case "Guatemala":
    case "Guyana":
    case "Honduras":
    case "Liberia":
    case "Madagascar":
    case "Mauritania":
    case "Mayotte":
    case "Namibia":
    case "Nicaragua":
    case "Oman":
    case "Panama":
    case "Paraguay":
    case "Peru":
    case "Rwanda":
    case "Sierra Leone":
    case "South Africa":
    case "Suriname":
    case "São Tomé and Príncipe":
    case "Tanzania":
    case "Zanzibar":
    case "Venezuela":
    case "Zimbabwe":
	    vaccineList = ["Measles", "Yellow Fever", "Typhoid", "Hepatitis A", "Hepatitis B", "Malaria", "Rabies"];
		break;
    case "Bhutan":
    case "South Korea":
    case "East Timor":
    case "Vietnam":
	    vaccineList = ["Measles", "Typhoid", "Hepatitis A", "Hepatitis B", "Malaria", "Japanese Encephalitis", "Rabies"];
		break;
    case "Brunei":
    case "Sri Lanka":
	    vaccineList = ["Measles", "Yellow Fever", "Typhoid", "Hepatitis A", "Hepatitis B", "Japanese Encephalitis", "Rabies"];
		break;
    case "Yemen": 
	    vaccineList = ["Measles", "Typhoid", "Cholera", "Hepatitis A", "Hepatitis B", "Malaria", "Rabies"];
		break;
    case "Australia":
        vaccineList = ["Measles", "Yellow Fever", "Hepatitis A", "Hepatitis B", "Japanese Encephalitis", "Rabies"];
		break;
    case "Antigua and Barbuda":
    case "Argentina":
    case "The Bahamas":
    case "Bahrain":
    case "Barbados":
    case "Bonaire":
    case "Curaçao":
    case "Dominica":
    case "United Arab Emirates":
    case "Egypt":
    case "Grenada":
    case "Saint Vincent and the Grenadines":
    case "Guadeloupe":
    case "Iraq":
    case "Jamaica":
    case "Jordan":
    case "Kazakhstan":
    case "Kyrgyzstan":
    case "Lesotho":
    case "Libya":
    case "Martinique":
    case "Montserrat":
    case "Saba":
    case "Saint Barthelemy":
    case "Saint Kitts and Nevis":
    case "Saint Lucia":
    case "Saint Martin":
    case "Saint Lucia":
    case "Seychelles":
    case "Singapore":
    case "Sint Eustatius":
    case "Sint Maarten":
    case "Tobago":
    case "Trinidad":
	    vaccineList = ["Measles", "Yellow Fever", "Typhoid", "Hepatitis A", "Hepatitis B", "Rabies"];
		break;
    case "Comoros":
    case "Djibouti":
    case "Mexico":
    case "Tajikistan":
    case "Western Sahara":
	    vaccineList = ["Measles", "Typhoid", "Hepatitis A", "Hepatitis B", "Maleria", "Rabies"];
		break;
    case "Solomon Islands":
	    vaccineList = ["Measles", "Yellow Fever", "Typhoid", "Hepatitis A", "Hepatitis B", "Malaria"];
		break;
    case "Albania":
    case "Malta":
	    vaccineList = ["Measles", "Yellow Fever", "Hepatitis A", "Hepatitis B", "Rabies"];
		break;
    case "British Virgin Islands":
    case "Anguilla":
    case "Aruba":
    case "Bermuda":
    case "Turks and Caicos Islands":
    case "Cayman Islands":
    case "Chile":
    case "Cuba":
    case "Hong Kong":
    case "Israel":
    case "Gaza":
    case "Kuwait":
    case "Lebanon":
    case "Macau":
    case "Mauritius":
    case "Mongolia":
    case "Morocco":
    case "Qatar":
    case "Réunion":
    case "Saint Helena":
    case "Syria":
    case "Tunisia":
    case "Turkey":
    case "Turkmenistan":
    case "Uruguay":
    case "Uzbekistan":
    case "Virgin Gorda":
	    vaccineList = ["Measles", "Typhoid", "Hepatitis A", "Hepatitis B", "Rabies"];
		break;
    case "French Polynesia":
    case "Christmas Island":
    case "Cocos (Keeling) Islands":
    case "Fiji":
    case "Maldives":
    case "New Caledonia":
    case "Norfolk Island":
    case "Pitcairn Islands":
    case "Samoa":
    case "Tahiti":
	    vaccineList = ["Measles", "Yellow Fever", "Typhoid", "Hepatitis A", "Hepatitis B"];
		break;
    case "Azerbaijan":
	    vaccineList = ["Measles", "Hepatitis A", "Hepatitis B", "Maleria", "Rabies"];
		break;
    case "Japan":
    case "Russia":
    case "Taiwan":
	    vaccineList = ["Measles", "Hepatitis A", "Hepatitis B", "Japanese Encephalitis", "Rabies"];
		break;
    case "Vanuatu":
	    vaccineList = ["Measles", "Typhoid", "Hepatitis A", "Hepatitis B", "Malaria"];
		break;
    case "Andorra":
    case "Armenia":
    case "Austria":
    case "Azores":
    case "Belarus":
    case "Belgium":
    case "Bosnia and Herzegovina":
    case "Bulgaria":
    case "Canada":
    case "Canary Islands":
    case "Croatia":
    case "Cyprus":
    case "Czech Republic":
    case "Denmark":
    case "Estonia":
    case "Faroe Islands":
    case "Finland":
    case "France":
    case "Georgia":
    case "Germany":
    case "Gibraltar":
    case "Greece":
    case "Greenland":
    case "United Kingdom":
    case "Guernsey":
    case "Italy":
    case "Holy See":
    case "Hungary":
    case "Iceland":
    case "Ireland":
    case "Isle of Man":
    case "Jersey":
    case "Kosovo":
    case "Latvia":
    case "Liechtenstein":
    case "Lithuania":
    case "Luxembourg":
    case "Madeira Islands":
    case "Moldova":
    case "Monaco":
    case "Montenegro":
    case "The Netherlands":
    case "North Macedonia":
    case "Northern Ireland":
    case "Norway":
    case "Poland":
    case "Portugal":
    case "Romania":
    case "San Marino":
    case "Scotland":
    case "Serbia":
    case "Slovakia":
    case "Slovenia":
    case "Spain":
    case "Sweden":
    case "Switzerland":
    case "Ukraine":
    case "Vatican City":
    case "Wales":
	    vaccineList = ["Measles", "Hepatitis A", "Hepatitis B", "Rabies"];
		break;
    case "British Indian Ocean Territory":
    case "Cook Islands":
    case "Easter Island":
    case "Falkland Islands":
    case "Kiribati":
    case "Marshall Islands":
    case "The Federated States of Micronesia":
    case "Nauru":
    case "Palau":
    case "South Georgia and the South Sandwich Islands":
    case "Tokelau":
    case "Tonga":
    case "Tuvalu":
    case "U.S. Wake Island":
	    vaccineList = ["Measles", "Typhoid", "Hepatitis A", "Hepatitis B"];
		break;
    case "Niue":
	    vaccineList = ["Yellow Fever", "Typhoid", "Hepatitis A", "Hepatitis B"];
    case "Puerto Rico":
    case "U.S. Virgin Islands":
    case "Saint Croix":
    case "Saint John":
    case "Saint Thomas":
	    vaccineList = ["Typhoid", "Hepatitis A", "Hepatitis B", "Rabies"];
		break;
    case "American Samoa":
    case "Guam":
    case "Northern Mariana Islands":
    case "Rota":
    case "Saipan":
	    vaccineList = ["Typhoid", "Hepatitis A", "Hepatitis B"];
		break;
    case "New Zealand":
	    vaccineList = ["Measles", "Hepatitis A", "Hepatitis B"];
		break;
    case "Antarctica":
	    vaccineList = ["MMR", "Tdap"];
	    break;
    default: 
        alert('Default case');
}