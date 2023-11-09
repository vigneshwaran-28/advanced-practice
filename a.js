// const timeZones = [
//   { name: "Asia/Tokyo", delay: Date.now() },
//   { name: "Asia/Shanghai", delay: Date.now() },
//   { name: "Europe/London", delay: Date.now() },
//   { name: "America/New_York", delay: Date.now() },
//   { name: "America/Los_Angeles", delay: Date.now() },
//   { name: "America/Chicago", delay: Date.now() },
//   { name: "America/Sao_Paulo", delay: Date.now() },
//   { name: "Australia/Sydney", delay: Date.now() },
//   { name: "Australia/Perth", delay: Date.now() },
//   { name: "Europe/Paris", delay: Date.now() },
//   { name: "Europe/Moscow", delay: Date.now() },
//   { name: "Africa/Cairo", delay: Date.now() },
//   { name: "Pacific/Honolulu", delay: Date.now() },
//   { name: "Pacific/Auckland", delay: Date.now() },
//   { name: "Pacific/Fiji", delay: Date.now() },
//   { name: "America/Denver", delay: Date.now() },
//   { name: "America/Phoenix", delay: Date.now() },
//   { name: "America/Argentina/Buenos_Aires", delay: Date.now() },
//   { name: "Africa/Johannesburg", delay: Date.now() },
//   { name: "Asia/Dubai", delay: Date.now() },
//   { name: "Asia/Kolkata", delay: Date.now() },
//   { name: "Europe/Berlin", delay: Date.now() },
//   { name: "Europe/Istanbul", delay: Date.now() },
// ];

// const dataLanguage = [
//   { name: "Assamese (অসমীয়া)" },
//   { name: "Bengali (বাংলা)" },
//   { name: "Bodo (बर)' " },
//   { name: "Dogri (डोगरी)" },
//   { name: "Gujarati (ગુજરાતી)" },
//   { name: "Hindi (हिन्दी)" },
//   { name: "Kannada (ಕನ್ನಡ)" },
//   { name: "Kashmiri (كأشُر)" },
//   { name: "Konkani (कोंकणी)" },
//   { name: "Maithili (मैथिली)" },
//   { name: "Malayalam (മലയാളം)" },
//   { name: "Manipuri (মণিপুরী)" },
//   { name: "Marathi (मराठी)" },
//   { name: "Nepali (नेपाली)" },
//   { name: "Odia (ଓଡ଼ିଆ)" },
//   { name: "Punjabi (ਪੰਜਾਬੀ)" },
//   { name: "Sanskrit (संस्कृतम)" },
//   { name: "Santali (संथाली)" },
//   { name: "Sindhi (سنڌي)" },
//   { name: "Tamil (தமிழ்)" },
//   { name: "Telugu (తెలుగు)" },
//   { name: "Urdu (اُردُو)" },
// ];

// const data=[{a:10},{b:39},{"1":{
//     c:9
// }}];

// console.log(data[2][1].c);
// const {a,...rest}=data;

// console.log(a,rest);

// let obj={
//     "1":[{a:10}]
// }

// console.log(obj[1][0].a);

// const b = "bbf5d3539ba5e1b884fe9352c8faadfe33eb42edd28fdb16d75c9735f7c0c676";

//   const c = "bbf5d3539ba5e1b884fe9352c8faadfe33eb42edd28fdb16d75c9735f7c0c676";

// console.log(b==c);

// const b=-10,c=0;

// let obj={a:10,b,c}

// const {a,...rest}=obj

// console.log(rest);

// let map=new Map();

// map.set(1,{a:null,b:10});

// const res=[];

// for(let [i,j] of map.entries() ){
//   if(!j.a)
//   j.a='vignesh';
// // map.set(i,j);
//   res.push(j);
// }

// // obj[0].a=10

// console.log(res,map);

// let a={name:'v',age:12,school:'aos'};
// let b = { name :'n',colege:'ngp'};

// let final = {
//   ...b,
//   ...a,
// };

// console.log(final);

// const a=[{name:'vignesh'},{name:'richard'}];
// const b=[{name:'aswin'}]

// const c=[...b,...a]

// console.log("c dara",c);

// const data = [
//   { country_name: "Afghanistan", country_code: "AF" },
//   { country_name: "Albania", country_code: "AL" },
//   { country_name: "Algeria", country_code: "DZ" },
//   { country_name: "American Samoa", country_code: "AS" },
//   { country_name: "Andorra", country_code: "AD" },
//   { country_name: "Angola", country_code: "AO" },
//   { country_name: "Anguilla", country_code: "AI" },
//   { country_name: "Antarctica", country_code: "AQ" },
//   { country_name: "Antigua and Barbuda", country_code: "AG" },
//   { country_name: "Argentina", country_code: "AR" },
//   { country_name: "Armenia", country_code: "AM" },
//   { country_name: "Aruba", country_code: "AW" },
//   { country_name: "Australia", country_code: "AU" },
//   { country_name: "Austria", country_code: "AT" },
//   { country_name: "Azerbaijan", country_code: "AZ" },
//   { country_name: "Bahamas", country_code: "BS" },
//   { country_name: "Bahrain", country_code: "BH" },
//   { country_name: "Bangladesh", country_code: "BD" },
//   { country_name: "Barbados", country_code: "BB" },
//   { country_name: "Belarus", country_code: "BY" },
//   { country_name: "Belgium", country_code: "BE" },
//   { country_name: "Belize", country_code: "BZ" },
//   { country_name: "Benin", country_code: "BJ" },
//   { country_name: "Bermuda", country_code: "BM" },
//   { country_name: "Bhutan", country_code: "BT" },
//   { country_name: "Bolivia", country_code: "BO" },
//   { country_name: "Bosnia and Herzegovina", country_code: "BA" },
//   { country_name: "Botswana", country_code: "BW" },
//   { country_name: "Brazil", country_code: "BR" },
//   { country_name: "British Indian Ocean Territory", country_code: "IO" },
//   { country_name: "British Virgin Islands", country_code: "VG" },
//   { country_name: "Brunei", country_code: "BN" },
//   { country_name: "Bulgaria", country_code: "BG" },
//   { country_name: "Burkina Faso", country_code: "BF" },
//   { country_name: "Burundi", country_code: "BI" },
//   { country_name: "Cambodia", country_code: "KH" },
//   { country_name: "Cameroon", country_code: "CM" },
//   { country_name: "Canada", country_code: "CA" },
//   { country_name: "Cape Verde", country_code: "CV" },
//   { country_name: "Cayman Islands", country_code: "KY" },
//   { country_name: "Central African Republic", country_code: "CF" },
//   { country_name: "Chad", country_code: "TD" },
//   { country_name: "Chile", country_code: "CL" },
//   { country_name: "China", country_code: "CN" },
//   { country_name: "Christmas Island", country_code: "CX" },
//   { country_name: "Cocos Islands", country_code: "CC" },
//   { country_name: "Colombia", country_code: "CO" },
//   { country_name: "Comoros", country_code: "KM" },
//   { country_name: "Cook Islands", country_code: "CK" },
//   { country_name: "Costa Rica", country_code: "CR" },
//   { country_name: "Croatia", country_code: "HR" },
//   { country_name: "Cuba", country_code: "CU" },
//   { country_name: "Curacao", country_code: "CW" },
//   { country_name: "Cyprus", country_code: "CY" },
//   { country_name: "Czech Republic", country_code: "CZ" },
//   { country_name: "Democratic Republic of the Congo", country_code: "CD" },
//   { country_name: "Denmark", country_code: "DK" },
//   { country_name: "Djibouti", country_code: "DJ" },
//   { country_name: "Dominica", country_code: "DM" },
//   { country_name: "Dominican Republic", country_code: "DO" },
//   { country_name: "East Timor", country_code: "TL" },
//   { country_name: "Ecuador", country_code: "EC" },
//   { country_name: "Egypt", country_code: "EG" },
//   { country_name: "El Salvador", country_code: "SV" },
//   { country_name: "Equatorial Guinea", country_code: "GQ" },
//   { country_name: "Eritrea", country_code: "ER" },
//   { country_name: "Estonia", country_code: "EE" },
//   { country_name: "Eswatini", country_code: "SZ" },
//   { country_name: "Ethiopia", country_code: "ET" },
//   { country_name: "Falkland Islands", country_code: "FK" },
//   { country_name: "Faroe Islands", country_code: "FO" },
//   { country_name: "Fiji", country_code: "FJ" },
//   { country_name: "Finland", country_code: "FI" },
//   { country_name: "France", country_code: "FR" },
//   { country_name: "French Polynesia", country_code: "PF" },
//   { country_name: "Gabon", country_code: "GA" },
//   { country_name: "Gambia", country_code: "GM" },
//   { country_name: "Georgia", country_code: "GE" },
//   { country_name: "Germany", country_code: "DE" },
//   { country_name: "Ghana", country_code: "GH" },
//   { country_name: "Gibraltar", country_code: "GI" },
//   { country_name: "Greece", country_code: "GR" },
//   { country_name: "Greenland", country_code: "GL" },
//   { country_name: "Grenada", country_code: "GD" },
//   { country_name: "Guam", country_code: "GU" },
//   { country_name: "Guatemala", country_code: "GT" },
//   { country_name: "Guernsey", country_code: "GG" },
//   { country_name: "Guinea", country_code: "GN" },
//   { country_name: "Guinea-Bissau", country_code: "GW" },
//   { country_name: "Guyana", country_code: "GY" },
//   { country_name: "Haiti", country_code: "HT" },
//   { country_name: "Honduras", country_code: "HN" },
//   { country_name: "Hong Kong", country_code: "HK" },
//   { country_name: "Hungary", country_code: "HU" },
//   { country_name: "Iceland", country_code: "IS" },
//   { country_name: "India", country_code: "IN" },
//   { country_name: "Indonesia", country_code: "ID" },
//   { country_name: "Iran", country_code: "IR" },
//   { country_name: "Iraq", country_code: "IQ" },
//   { country_name: "Ireland", country_code: "IE" },
//   { country_name: "Isle of Man", country_code: "IM" },
//   { country_name: "Israel", country_code: "IL" },
//   { country_name: "Italy", country_code: "IT" },
//   { country_name: "Ivory Coast", country_code: "CI" },
//   { country_name: "Jamaica", country_code: "JM" },
//   { country_name: "Japan", country_code: "JP" },
//   { country_name: "Jersey", country_code: "JE" },
//   { country_name: "Jordan", country_code: "JO" },
//   { country_name: "Kazakhstan", country_code: "KZ" },
//   { country_name: "Kenya", country_code: "KE" },
//   { country_name: "Kiribati", country_code: "KI" },
//   { country_name: "Kosovo", country_code: "XK" },
//   { country_name: "Kuwait", country_code: "KW" },
//   { country_name: "Kyrgyzstan", country_code: "KG" },
//   { country_name: "Laos", country_code: "LA" },
//   { country_name: "Latvia", country_code: "LV" },
//   { country_name: "Lebanon", country_code: "LB" },
//   { country_name: "Lesotho", country_code: "LS" },
//   { country_name: "Liberia", country_code: "LR" },
//   { country_name: "Libya", country_code: "LY" },
//   { country_name: "Liechtenstein", country_code: "LI" },
//   { country_name: "Lithuania", country_code: "LT" },
//   { country_name: "Luxembourg", country_code: "LU" },
//   { country_name: "Macao", country_code: "MO" },
//   { country_name: "Madagascar", country_code: "MG" },
//   { country_name: "Malawi", country_code: "MW" },
//   { country_name: "Malaysia", country_code: "MY" },
//   { country_name: "Maldives", country_code: "MV" },
//   { country_name: "Mali", country_code: "ML" },
//   { country_name: "Malta", country_code: "MT" },
//   { country_name: "Marshall Islands", country_code: "MH" },
//   { country_name: "Mauritania", country_code: "MR" },
//   { country_name: "Mauritius", country_code: "MU" },
//   { country_name: "Mayotte", country_code: "YT" },
//   { country_name: "Mexico", country_code: "MX" },
//   { country_name: "Micronesia", country_code: "FM" },
//   { country_name: "Moldova", country_code: "MD" },
//   { country_name: "Monaco", country_code: "MC" },
//   { country_name: "Mongolia", country_code: "MN" },
//   { country_name: "Montenegro", country_code: "ME" },
//   { country_name: "Montserrat", country_code: "MS" },
//   { country_name: "Morocco", country_code: "MA" },
//   { country_name: "Mozambique", country_code: "MZ" },
//   { country_name: "Myanmar", country_code: "MM" },
//   { country_name: "Namibia", country_code: "NA" },
//   { country_name: "Nauru", country_code: "NR" },
//   { country_name: "Nepal", country_code: "NP" },
//   { country_name: "Netherlands", country_code: "NL" },
//   { country_name: "New Caledonia", country_code: "NC" },
//   { country_name: "New Zealand", country_code: "NZ" },
//   { country_name: "Nicaragua", country_code: "NI" },
//   { country_name: "Niger", country_code: "NE" },
//   { country_name: "Nigeria", country_code: "NG" },
//   { country_name: "Niue", country_code: "NU" },
//   { country_name: "Norfolk Island", country_code: "NF" },
//   { country_name: "North Korea", country_code: "KP" },
//   { country_name: "North Macedonia", country_code: "MK" },
//   { country_name: "Northern Mariana Islands", country_code: "MP" },
//   { country_name: "Norway", country_code: "NO" },
//   { country_name: "Oman", country_code: "OM" },
//   { country_name: "Pakistan", country_code: "PK" },
//   { country_name: "Palau", country_code: "PW" },
//   { country_name: "Palestine", country_code: "PS" },
//   { country_name: "Panama", country_code: "PA" },
//   { country_name: "Papua New Guinea", country_code: "PG" },
//   { country_name: "Paraguay", country_code: "PY" },
//   { country_name: "Peru", country_code: "PE" },
//   { country_name: "Philippines", country_code: "PH" },
//   { country_name: "Pitcairn Islands", country_code: "PN" },
//   { country_name: "Poland", country_code: "PL" },
//   { country_name: "Portugal", country_code: "PT" },
//   { country_name: "Puerto Rico", country_code: "PR" },
//   { country_name: "Qatar", country_code: "QA" },
//   { country_name: "Republic of the Congo", country_code: "CG" },
//   { country_name: "Reunion", country_code: "RE" },
//   { country_name: "Romania", country_code: "RO" },
//   { country_name: "Russia", country_code: "RU" },
//   { country_name: "Rwanda", country_code: "RW" },
//   { country_name: "Saint Barthelemy", country_code: "BL" },
//   { country_name: "Saint Helena", country_code: "SH" },
//   { country_name: "Saint Kitts and Nevis", country_code: "KN" },
//   { country_name: "Saint Lucia", country_code: "LC" },
//   { country_name: "Saint Martin", country_code: "MF" },
//   { country_name: "Saint Pierre and Miquelon", country_code: "PM" },
//   { country_name: "Saint Vincent and the Grenadines", country_code: "VC" },
//   { country_name: "Samoa", country_code: "WS" },
//   { country_name: "San Marino", country_code: "SM" },
//   { country_name: "Sao Tome and Principe", country_code: "ST" },
//   { country_name: "Saudi Arabia", country_code: "SA" },
//   { country_name: "Senegal", country_code: "SN" },
//   { country_name: "Serbia", country_code: "RS" },
//   { country_name: "Seychelles", country_code: "SC" },
//   { country_name: "Sierra Leone", country_code: "SL" },
//   { country_name: "Singapore", country_code: "SG" },
//   { country_name: "Sint Maarten", country_code: "SX" },
//   { country_name: "Slovakia", country_code: "SK" },
//   { country_name: "Slovenia", country_code: "SI" },
//   { country_name: "Solomon Islands", country_code: "SB" },
//   { country_name: "Somalia", country_code: "SO" },
//   { country_name: "South Africa", country_code: "ZA" },
//   { country_name: "South Korea", country_code: "KR" },
//   { country_name: "South Sudan", country_code: "SS" },
//   { country_name: "Spain", country_code: "ES" },
//   { country_name: "Sri Lanka", country_code: "LK" },
//   { country_name: "Sudan", country_code: "SD" },
//   { country_name: "Suriname", country_code: "SR" },
//   { country_name: "Svalbard and Jan Mayen", country_code: "SJ" },
//   { country_name: "Sweden", country_code: "SE" },
//   { country_name: "Switzerland", country_code: "CH" },
//   { country_name: "Syria", country_code: "SY" },
//   { country_name: "Taiwan", country_code: "TW" },
//   { country_name: "Tajikistan", country_code: "TJ" },
//   { country_name: "Tanzania", country_code: "TZ" },
//   { country_name: "Thailand", country_code: "TH" },
//   { country_name: "Togo", country_code: "TG" },
//   { country_name: "Tokelau", country_code: "TK" },
//   { country_name: "Tonga", country_code: "TO" },
//   { country_name: "Trinidad and Tobago", country_code: "TT" },
//   { country_name: "Tunisia", country_code: "TN" },
//   { country_name: "Turkey", country_code: "TR" },
//   { country_name: "Turkmenistan", country_code: "TM" },
//   { country_name: "Turks and Caicos Islands", country_code: "TC" },
//   { country_name: "Tuvalu", country_code: "TV" },
//   { country_name: "Uganda", country_code: "UG" },
//   { country_name: "Ukraine", country_code: "UA" },
//   { country_name: "United Arab Emirates", country_code: "AE" },
//   { country_name: "United Kingdom", country_code: "GB" },
//   { country_name: "United States", country_code: "US" },
//   { country_name: "Uruguay", country_code: "UY" },
//   { country_name: "Uzbekistan", country_code: "UZ" },
//   { country_name: "Vanuatu", country_code: "VU" },
//   { country_name: "Vatican City", country_code: "VA" },
//   { country_name: "Venezuela", country_code: "VE" },
//   { country_name: "Vietnam", country_code: "VN" },
//   { country_name: "Wallis and Futuna", country_code: "WF" },
//   { country_name: "Western Sahara", country_code: "EH" },
//   { country_name: "Yemen", country_code: "YE" },
//   { country_name: "Zambia", country_code: "ZM" },
//   { country_name: "Zimbabwe", country_code: "ZW" },
// ];

// console.log("leb", data.length);


// const data = [
//   {
//     tier_id: 1,
//     whitelabel_id: 1,
//     tier_level: "Bronze",
//     max_limit: "5000",
//     bonus_percentage: 0,
//     cashback_percentage: 0,
//     updated_at: new Date(),
//   },
//   {
//     tier_id: 2,
//     whitelabel_id: 1,
//     tier_level: "Silver",
//     max_limit: "10000",
//     bonus_percentage: 0,
//     cashback_percentage: 0,
//     updated_at: new Date(),
//   },
//   {
//     tier_id: 3,
//     whitelabel_id: 1,
//     tier_level: "Gold",
//     max_limit: "50000",
//     bonus_percentage: 0,
//     cashback_percentage: 0,
//     updated_at: new Date(),
//   },
//   {
//     tier_id: 4,
//     whitelabel_id: 1,
//     tier_level: "Platinum",
//     max_limit: "100000",
//     bonus_percentage: 0,
//     cashback_percentage: 0,
//     updated_at: new Date(),
//   },
//   {
//     tier_id: 5,
//     whitelabel_id: 1,
//     tier_level: "Diamond",
//     max_limit: "1000000",
//     bonus_percentage: 0,
//     cashback_percentage: 0,
//     updated_at: new Date(),
//   },
// ];

// const a=undefined,b=false,c={ar:10};

// const d={
//   ...(!a?{}:{adata:a}),
//   ...(!b?{}:{bdata:b})
// }

// console.log(a==b,a,b);

let a='afs1627617';
a = a.replace(/[0-9]/g, "");
console.log(a);

