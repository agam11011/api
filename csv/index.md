# COVID19-India API

### CSV
Sometimes, having files in a spreadsheet format is more useful for analysts and scientists. We have provided the files as downloadable csv files as below.

## Files available :
Latest data (10-20 minutes delayed) is available through the `latest` end-point.
These are the files available

| Status        | Sheet Name                    | Link to CSV                                                               | Description                                                                                                                                            |
|---------------|-------------------------------|---------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| :green_heart: | raw_data1                     | https://api.covid19india.org/csv/latest/raw_data1.csv                     | Data added to represent confirmed cases till Apr 19th                                                                                                  |
| :green_heart: | raw_data2                     | https://api.covid19india.org/csv/latest/raw_data2.csv                     | Data added to represent confirmed cases from Apr 20th to Apr 26th                                                                                      |
| :green_heart: | raw_data3                     | https://api.covid19india.org/csv/latest/raw_data3.csv                     | Data added to represent confirmed, recovered and deceased cases from April 27th till May 9th                                                                |
| :green_heart: | raw_data4                     | https://api.covid19india.org/csv/latest/raw_data4.csv                     | Data added to represent confirmed, recovered and deceased cases from May 10th till May 23rd                                                              |
| :green_heart: | raw_data5                     | https://api.covid19india.org/csv/latest/raw_data5.csv                     | Data added to represent confirmed, recovered and deceased cases from May 24th till June 4th                                                                |
| :green_heart: | raw_data6                     | https://api.covid19india.org/csv/latest/raw_data6.csv                     | Data added to represent confirmed, recovered and deceased cases from June 5th till June 19th                                                                |
| :green_heart: | raw_data7                     | https://api.covid19india.org/csv/latest/raw_data7.csv                     | Data added to represent confirmed, recovered and deceased cases from June 19th onwards                                                                |
| :green_heart: | death_and_recovered1          | https://api.covid19india.org/csv/latest/death_and_recovered1.csv          | Data added to recovered and deceased cases till Apr 19th                                                                                               |
| :green_heart: | death_and_recovered2          | https://api.covid19india.org/csv/latest/death_and_recovered2.csv          | Data added to recovered and deceased cases from Apr 20th to Apr 26th                                                                                   |
| :green_heart: | state_wise                    | https://api.covid19india.org/csv/latest/state_wise.csv                    | The current statewise situation                                                                                                                        |
| :green_heart: | case_time_series              | https://api.covid19india.org/csv/latest/case_time_series.csv              | Time series of Confirmed, Recovered and Deceased cases                                                                                                 |
| :green_heart: | district_wise                    | https://api.covid19india.org/csv/latest/district_wise.csv                    | The current Districtwise numbers situation
| :green_heart: | district_wise                    | https://api.covid19india.org/csv/latest/districts.csv                    | Daily cumulative numbers per district from 26th April onwards
| :green_heart: | state_wise_daily              | https://api.covid19india.org/csv/latest/state_wise_daily.csv              | Statewise timeseries of Confirmed, Recovered and Deceased numbers.                                                                                     |
| :green_heart: | statewise_tested_numbers_data | https://api.covid19india.org/csv/latest/statewise_tested_numbers_data.csv | Number of tests conducted by the state, ventilators and hospital bed information reported in state bulletins                                           |
| :green_heart: | tested_numbers_icmr_data      | https://api.covid19india.org/csv/latest/tested_numbers_icmr_data.csv      | Number of tests reported by ICMR                                                                                                                       |
| :green_heart: | sources_list                  | https://api.covid19india.org/csv/latest/sources_list.csv                  | List of sources that we are using. Some links mentioned could break as states change their reporting location                                          |
| :end:         | raw_data                      | https://api.covid19india.org/csv/latest/raw_data.csv                      | raw_data1 + raw_data2. This is frozen as of Apr 26th.                                                                                                  |
| :end: | death_and_recovered           | https://api.covid19india.org/csv/latest/death_and_recovered.csv           | death_and_recovered1 + death_and_recovered2. This is frozen as of Apr 26th.                                                                            |
| :end:         | travel_history                | https://api.covid19india.org/csv/latest/travel_history.csv                | Travel history of patients, which used to be published publically for a few patients by the government. This data is not reported or captured anymore. |

## Notes
- raw_data3 includes confirmed, recovered and deceased entries. They can be distinguised based on the "Current Status" key
- If you need to get the full raw_data, you need to :
   * Append raw_data1, raw_data2, make all "Current Status" to 'Hospitalized'
   * Append death_and_recovered1, death_and_recovered2 intelligently to the above
   * Add a 'Num_Cases' column with all values 1
   * Append raw_data3 below this
- We will try to do this data wrangling and provide a one true raw_data soon. If anybody can create the script for doing this, PRs are welcome :)

## How to
If you prefer working on a Google Sheet instead of downloading the files and would like the data to reflect the latest version - below is an example to live fetch this CSV to a spreadsheet.
> :rocket: Quick example : Apply the formula `=IMPORTDATA("https://api.covid19india.org/csv/latest/state_wise.csv")` in A1 cell of a Google Sheets to get the state data for analysis :)

## Contributing
- If you notice issues or wants to suggest enhancement, please do raise an issue in the repo.

## Quick Links
If you're looking for the json files :
- [API](https://api.covid19india.org)
