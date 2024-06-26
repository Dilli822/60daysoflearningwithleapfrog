# https://colab.research.google.com/drive/1p2lZsjWoiRtRWO4gXLFmNVVc8mkXJ4oW?usp=sharing
import requests
from bs4 import BeautifulSoup
import pandas as pd
import csv
# URL of the webpage to scrape
url = "https://en.wikipedia.org/wiki/FIFA_World_Cup"

# Send an HTTP request and get the HTML content
response = requests.get(url)
response.raise_for_status()  # Raise an exception for HTTP errors

# Parse the HTML content
soup = BeautifulSoup(response.content, 'html.parser')

# Find all table tags
tables = soup.find_all('table')

# Initialize an empty list to store the data
all_tables_data = []

# Loop through each table
for table in tables:
    headers = [header.text.strip() for header in table.find_all('th')]
    print("Headers:", headers)
    
    # Initialize a list to store table data
    table_data = []

    # Iterate through data rows (excluding the header row)
    for row in table.find_all('tr')[1:]:
        row_data = [cell.text.strip() for cell in row.find_all('td')]
        if len(row_data) == len(headers):  # Only add rows with the correct number of columns
            table_data.append(row_data)
        else:
            print("Skipping row due to mismatch:", row_data)

    # Create a DataFrame for the current table and add it to the list
    if headers and table_data:
        df = pd.DataFrame(table_data, columns=headers)
        all_tables_data.append(df)

# Print all the tables
for i, df in enumerate(all_tables_data):
    print(f"\nTable {i + 1}:")
    print(df)

file_path = './fifa_world_cup_data.csv'
# Print all the tables
for i, df in enumerate(all_tables_data):
    print(f"\nTable {i + 1}:")
    print(df)
    # Save each table as a separate CSV file
    table_file_path = file_path.replace('.csv', f'_table_{i+1}.csv')
    df.to_csv(table_file_path, index=False)
    print(f"Table {i+1} saved to {table_file_path}")

# # CLEANING PART HERE
# Assuming the CSV file is named "fifa_data.csv"
data = pd.read_csv("fifa_winner.csv")

cleaned_data = []

# Assuming the CSV file is named 'world_cup_data.csv'
csv_file = 'fifa_winner.csv'

# Open the CSV file and read its contents
with open(csv_file, newline='') as file:
    reader = csv.reader(file)
    # Skip the header row
    next(reader)
    # Clean and process each row
    for row in reader:
        # Remove unwanted characters and spaces from each column
        cleaned_row = [col.strip('"').replace('*', '').strip() for col in row]
        cleaned_data.append(cleaned_row)

# Print the cleaned data
for row in cleaned_data:
    print(row)


# Define dictionaries to store insights
titles_won = {}
runners_up = {}
third_place = {}
fourth_place = {}
top_4_total = {}

# Loop through cleaned data and extract insights
for row in cleaned_data:
    team = row[3]
    titles = int(row[0].split()[0]) if row[0] else 0
    runners = int(row[1].split()[0]) if row[1] else 0
    third = int(row[2].split()[0]) if row[2] else 0
    fourth = int(row[4].split()[0]) if row[4] else 0
    top_4 = int(row[5])
    
    titles_won[team] = titles
    runners_up[team] = runners
    third_place[team] = third
    fourth_place[team] = fourth
    top_4_total[team] = top_4

# Print the insights
print("Total Titles Won by Each Team:")
for team, titles in titles_won.items():
    print(f"{team}: {titles}")

print("\nTotal Runner-up Positions by Each Team:")
for team, runners in runners_up.items():
    print(f"{team}: {runners}")

print("\nTotal Third Place Finishes by Each Team:")
for team, third in third_place.items():
    print(f"{team}: {third}")

print("\nTotal Fourth Place Finishes by Each Team:")
for team, fourth in fourth_place.items():
    print(f"{team}: {fourth}")

print("\nTotal Top 4 Finishes by Each Team:")
for team, top_4 in top_4_total.items():
    print(f"{team}: {top_4}")
    
# Define the filename for the new CSV file
output_file = './fifa_world_cup_insights.csv'

# Define headers for the new CSV file
headers = ['Team', 'Titles Won', 'Runner-up Positions', 
           'Third Place Finishes', 'Fourth Place Finishes', 'Top 4 Finishes']

# Write the extracted insights to the new CSV file
import csv

# Define the filename for the new CSV file
output_file = 'fifa_world_cup_insights.csv'

# Define headers for the new CSV file
headers = ['Team', 'Titles Won', 'Runner-up Positions', 'Third Place Finishes',
           'Fourth Place Finishes', 'Top 4 Finishes']

# Initialize dictionaries for each insight
titles_won = {}
runners_up = {}
third_place = {}
fourth_place = {}
top_4_total = {}

# Extract insights for each team
for team in cleaned_data:
    team_name = team[3]
    titles = int(team[0].split()[0]) if team[0] else 0
    runners = int(team[1].split()[0]) if team[1] else 0
    third = int(team[2].split()[0]) if team[2] else 0
    fourth = int(team[4].split()[0]) if team[4] else 0
    top_4 = int(team[5])
    
    titles_won[team_name] = titles
    runners_up[team_name] = runners
    third_place[team_name] = third
    fourth_place[team_name] = fourth
    top_4_total[team_name] = top_4

# Write the extracted insights to the new CSV file
with open(output_file, mode='w', newline='') as file:
    writer = csv.writer(file)
    
    # Write the header row
    writer.writerow(headers)
    
    # Write the data rows
    for team_name in titles_won.keys():
        writer.writerow([
            team_name,
            titles_won.get(team_name, 0),
            runners_up.get(team_name, 0),
            third_place.get(team_name, 0),
            fourth_place.get(team_name, 0),
            top_4_total.get(team_name, 0)
        ])

print(f"Insights saved to {output_file}")


