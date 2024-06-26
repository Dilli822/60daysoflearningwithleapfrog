
# https://colab.research.google.com/drive/1lgmNii00TjzRTcdL8o1s4QkSH4kyrKYH?usp=sharing
import pandas as pd
from tabulate import tabulate
# Load the dataset
file_path = './PandasYouTubeSeries/Customer Call List.xlsx'  # replace with your file path
df = pd.read_excel(file_path)

# Define regex pattern for unusual symbols (anything not a letter, space, hyphen, or apostrophe)
pattern = r"[^a-zA-Z\s'-]"

# Use str.contains() to detect unusual symbols in the name columns
unusual_firstname = df['First_Name'].str.contains(pattern, na=False)
unusual_lastname = df['Last_Name'].str.contains(pattern, na=False)

# Combine results to find rows with unusual symbols in any of the name columns
unusual_rows = df[unusual_firstname | unusual_lastname]

# Display the rows with unusual symbols
print("Rows with unusual symbols in 'First_Name' or 'Last_Name':")
print(unusual_rows)

# Additional step: Remove rows with unusual symbols if needed
cleaned_df = df[~(unusual_firstname | unusual_lastname)]

# Save the cleaned DataFrame to a new Excel file if needed
# cleaned_df.to_excel('./PandasYouTubeSeries/Cleaned_Customer_Call_List.xlsx', index=False)
print("Cleaned DataFrame:")
print(cleaned_df)

################## REMOVE DUPLICATE DATA ##############
# Create a sample DataFrame with duplicate rows
data = {'Name': ['Alice', 'Bob', 'Charlie', 'Alice', 'David'],
        'Age': [25, 30, 20, 25, 35],
        'City': ['New York', 'Los Angeles', 'Chicago', 'New York', 'London']}

df = pd.DataFrame(data)

# Print the DataFrame before dropping duplicates
print("Original DataFrame:")
print(df)

# Remove duplicate rows (keeping the first occurrence by default)
df_without_duplicates = df.drop_duplicates()

# Print the DataFrame after dropping duplicates
print("\nDataFrame after dropping duplicates:")
print(df_without_duplicates)

################## REMOVING SPECIFIC COLUMN WHOLE DATA ##############
data = {'Name': ['Alice', 'Bob', 'Charlie', 'Alice', 'David'],
        'Age': [25, 30, 20, 25, 35],
        'City': ['New York', 'Los Angeles', 'Chicago', 'New York', 'London'],
        'Not_Useful_Column': [1,2,3,4,5]}

df = pd.DataFrame(data)

# Print the DataFrame before dropping the column
print("Original DataFrame:")
print(df)

# Drop the column 'Not_Useful_Column'
df = df.drop(columns = "Not_Useful_Column")

# Print the DataFrame after dropping the column
print("\nDataFrame after dropping the column:")
print(df)

################## REMOVING LETTERS OR ANY UNWANTED SYMBOLS LIKE / OR --- COLUMN WHOLE DATA ##############
# Sample DataFrame with messy last names
data = {'Last_Name': ['-----1st_Alice', 'Bob/Last', '...Charlie.', './..2nd.Alice', '???#David_3']}
print("\nOriginal DataFrame with Messy Last Names:")
df = pd.DataFrame(data)
print(df)

print("\n Filtered DataFrame with Messy Last Names:")
# Define characters to strip (one or more non-word characters)
chars_to_strip = r"\W+"

# Clean the "Last_Name" column
df["Last_Name"] = df["Last_Name"].str.strip(chars_to_strip).str.replace(r'[^\w]', '', regex=True)

# Print the DataFrame after cleaning
print(df)

# df[["Street_Address", "State", "Zip_Code"]] = df["Address"].str.split(',',2, expand=True)
# df
# Sample DataFrame with "Address" column
data = {'Address': ['123 Main St, New York, 10001', '456 Oak Ave, Los Angeles, 90001']}
df = pd.DataFrame(data)

# Display the original DataFrame
print("\nOriginal DataFrame:")
print(df)

# Convert DataFrame to a table
original_table = tabulate(df, headers='keys', tablefmt='pretty')

# Print the table
print("\nTable for Original DataFrame:")
print(original_table)

# Split "Address" column into separate columns
df[['Street_Address', 'State', 'Zip_Code']] = df['Address'].str.split(',', expand=True)

# Display the DataFrame with the split columns
print("\nDataFrame after splitting Address:")
print(df)

# Convert DataFrame to a table
table = tabulate(df, headers='keys', tablefmt='pretty')

# Print the table
print("\nTable after splitting Address:")
print(table)

# df["Do_Not_Contact"] = df["Do_Not_Contact"].str.replace('Yes','Y')
# Sample DataFrame with messy data
data = {'Do_Not_Contact': ['Yes', 'nO', 'YEs', ' Maybe']}
df = pd.DataFrame(data)

# Print DataFrame before cleaning
print("Original DataFrame:")
print(df)

# Replace variations of 'Yes' with 'Y' in "Do_Not_Contact"
df["Do_Not_Contact"] = df["Do_Not_Contact"].str.upper().str.replace('YES', 'Y')

# Print DataFrame after cleaning
print("\nDataFrame after cleaning:")
print(df)
# df["Do_Not_Contact"] = df["Do_Not_Contact"].str.replace('No','N')
# df

# #df = df.replace('N/a','')
# #df = df.replace('NaN','')
# Sample data (replace with your actual data)
data = {'Col1': [1, 2, None, 4], 'Col2': ['A', 'B', 'N/a', 'D']}
df = pd.DataFrame(data)

# Print DataFrame before dropping
print("Original DataFrame:")
print(df)

# Remove rows with any missing values (including NaN and None)
df_dropna = df.dropna()

# Print DataFrame after dropping
print("\nDataFrame after dropping rows with missing values:")
print(df_dropna)

# df=df.fillna('')
# df
# Sample data (replace with your actual data)
data = {'Col1': [1, 2, None, 4], 'Col2': ['A', 'B', 'N/a', 'D']}
df = pd.DataFrame(data)

# Print DataFrame before filling
print("Original DataFrame:")
print(df)

# Fill missing values with empty strings
df_filled = df.fillna('')

# Print DataFrame after filling
print("\nDataFrame after filling missing values with empty strings:")
print(df_filled)

# for x in df.index:
#     if df.loc[x, "Do_Not_Contact"] == 'Y':
#         df.drop(x, inplace=True)
# df
import pandas as pd

# Sample data (replace with your actual data)
data = {'Name': ['Alice', 'Bob', 'Charlie', 'David'], 'Do_Not_Contact': ['N', 'Y', 'N', 'Y']}
df = pd.DataFrame(data)

# Print DataFrame before dropping
print("Original DataFrame:")
print(df)

# Drop rows with 'Y' in "Do_Not_Contact" using loop (less efficient for simple filtering)
# for x in df.index:
#     if df.loc[x, "Do_Not_Contact"] == 'Y':
#         df.drop(x, inplace=True)

# Drop rows with 'Y' in "Do_Not_Contact" using query (more concise)
df_filtered = df.query('Do_Not_Contact != "Y"')

# Print DataFrame after dropping
print("\nDataFrame after dropping rows with 'Y' in 'Do_Not_Contact':")
print(df_filtered)

# for x in df.index:
#     if df.loc[x, "Phone_Number"] == '':
#         df.drop(x, inplace=True)
# df
# Sample data (replace with your actual data)
data = {'Name': ['Alice', 'Bob', 'Charlie', 'David'], 'Phone_Number': ['', '123-456-7890', '987-654-3210', '']}
df = pd.DataFrame(data)

# Print DataFrame before dropping (shows original data)
print("Original DataFrame:")
print(df)

# Loop to drop rows with empty phone numbers
for index in df.index:
    if df.loc[index, "Phone_Number"] == '':
        df.drop(index, inplace=True)

# Print DataFrame after dropping (shows rows with empty phone numbers removed)
print("\nDataFrame after dropping rows with empty phone numbers:")
print(df)

# #Another way to drop null values
# #df = df.dropna(subset="Phone_Number"), inplace=True)
# df = df.reset_index(drop=True)
# df

