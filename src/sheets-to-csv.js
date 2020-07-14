const fetch = require('node-fetch');
const moment = require('moment-timezone');
var fs = require('fs');

var dir = './tmp/csv/';
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}

const now = moment().unix()
var date = moment.unix(now);
formated_date = date.tz("Asia/Kolkata").format("YYYY-MM-DD");

// var today_dir = dir + formated_date;
var latest_dir = dir + "latest";
// if (!fs.existsSync(today_dir)) {
//     fs.mkdirSync(today_dir);
// }
if (!fs.existsSync(latest_dir)) {
    fs.mkdirSync(latest_dir);
}

//Published sheets
const PUBLISHED_SHEET_ID_1 = "2PACX-1vSz8Qs1gE_IYpzlkFkCXGcL_BqR8hZieWVi-rphN1gfrO3H4lDtVZs4kd0C3P8Y9lhsT1rhoB-Q_cP4";
const PUBLISHED_SHEET_ID_2 = "2PACX-1vRodtoTyQwXckfuvuQllkMhGC_gruigaaizVc8I6-BZWeetYpmRyexnO75ep7rnSxFICd8c9dfpwU8I";
const PUBLISHED_SHEET_ID_3 = "2PACX-1vR_17UovavD4X7m_pqzmXjA_kCjGxIapemdWpRhDELHR1LbLJ-EVbxjKgeQat489BFRZ9bqMf-ILe_H";
const PUBLISHED_SHEET_ID_4 = "2PACX-1vSeAoAk_iMv7cQ0tldZC7aivJmGKM5Wpc5VVr37Nzv-geTmtr6pDMb-oDK59RS21Om80-SYR3jRp6qq";
const PUBLISHED_SHEET_ID_5 = "2PACX-1vSEikAgjAB9x7yhx4zNOUGLIx8Zfy2mAzRv0K1tbw08g73MO88-bbWCsgmhJ0uXa0gtuUlLMOnE9h26";
const PUBLISHED_SHEET_ID_6 = "2PACX-1vQQmgjCktQknnTPy-s4OFycu-imtoMCrWY5M2Lqig3nhGyy6W5E27xbCyaaKV9lGaDWmTzGWVzPH9-S";
const PUBLISHED_SHEET_ID_7 = "2PACX-1vR6blqV85tiBO-9u4MCW72qXALS3f7yQD0iV47MbsmIcKrvBDTorIVrUJ96QrxUj7iwAviYiecjp8VU";
const PUBLISHED_SHEET_ID_8 = "2PACX-1vR1zl3JStozuCgPsPol19f9k_io1ABmHS_mOl9gzWxiDd2_WvWhdfhePXBFZIUFjpW-gPfPwE9m7AA_";
const PUBLISHED_SHEET_ID_9 = "2PACX-1vRb4AsEPrV4b0S4j2vQku-J5XHnh8c_8fzmIhD2S2aMc2if7g6bLwJNYOPV8UmrrNR-Bv0C0yjcUnU3";
const PUBLISHED_SHEET_ID_10 = "2PACX-1vQyBRow24Pc7Wm_mSjU3JDy_Ua5mFByz6zE7-vFguBvUOdcr-90PgNcTBOCL-nTa40WrghiAN-kSFVX";


const sheets_v1 = [
    ["raw_data1", "0"],
    ["death_and_recovered1", "200733542"],
];

const sheets_v2 = [
    ["raw_data2", "0"],
    ["death_and_recovered2", "200733542"],
];

const sheets_v3 = [
    ["raw_data3", "0"],
    ["districts_26apr_gospel", "1964493192"]
];

const sheets_v4 = [
    ["raw_data4", "0"],
];

const sheets_v5 = [
    ["raw_data5", "0"],
];

const sheets_v6 = [
    ["raw_data6", "0"],
];

const sheets_v7 = [
    ["raw_data7", "0"],
];

const sheets_v8 = [
    ["raw_data8", "0"],
];

const sheets_v9 = [
    ["raw_data9", "0"],
];


const sheets_v10 = [
    ["raw_data10", "0"],
    ["state_wise", "1896310216"],
    ["state_wise_daily", "1395461826"],
    ["sources_list", "704389477"],
    ["district_wise", "227379561"],
    ["statewise_tested_numbers_data", "486127050"],
    ["case_time_series", "387368559"],
    ["tested_numbers_icmr_data", "2143634168"],
//     ["travel_history", "1532084277"],
    ["district_list", "1207378023"],
    ["district_testing", "458610673"],
];

async function sheet_to_csv(sheets, pub_id) {
    for (var element of sheets) {
        console.log("Reading: " + element[0]);
        var temp_url = "https://docs.google.com/spreadsheets/d/e/" + pub_id + "/pub?gid=" + element[1] + "&single=false&output=csv";
        console.log(temp_url);
        url = encodeURI(temp_url);
        let settings = { method: "Get" };
        await fetch(url, settings).then(res => res.text())
            .then(csv => {
                if (csv.includes("</html>")) {
                    console.error("probably not csv!");
                    process.exit(1);
                    return;
                } else {
                    // fs.writeFileSync(today_dir + "/" + element[0] + ".csv", csv);
                    fs.writeFileSync(latest_dir + "/" + element[0] + ".csv", csv);
                    console.log("Write completed: " + element[0]);
                }
            });
    };
}

(async function main() {
    // uncomment below and run when changes in v1 sheet
    await sheet_to_csv(sheets_v1, PUBLISHED_SHEET_ID_1);
    await sheet_to_csv(sheets_v2, PUBLISHED_SHEET_ID_2);
    await sheet_to_csv(sheets_v3, PUBLISHED_SHEET_ID_3);
    await sheet_to_csv(sheets_v4, PUBLISHED_SHEET_ID_4);
    await sheet_to_csv(sheets_v5, PUBLISHED_SHEET_ID_5);
    await sheet_to_csv(sheets_v6, PUBLISHED_SHEET_ID_6);
    await sheet_to_csv(sheets_v7, PUBLISHED_SHEET_ID_7);
    await sheet_to_csv(sheets_v8, PUBLISHED_SHEET_ID_8);
    await sheet_to_csv(sheets_v9, PUBLISHED_SHEET_ID_9);
    await sheet_to_csv(sheets_v10, PUBLISHED_SHEET_ID_10);

})();
