import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np
import random
import json

df = pd.read_csv('./vgsales.csv')
# Print the column headers
print("Columns List --->", df.columns)

# Display the first few rows
df.head()

# Convert to list and print
columns_list = df.columns.tolist()
print("Columns List --->", columns_list)

# Iterate through columns and print each one
for col in df.columns:
    print(col)

# Check for missing values
df.isnull().sum()

# Optionally, drop or fill missing values
# df = df.dropna()  # Or use df.fillna() to fill missing values
# Display basic information about the dataset
df.info()

# Display the first few rows
df.head()

# Check for missing values
df.isnull().sum()

# Optionally, handle missing values
# df = df.dropna()  # Or use df.fillna() to fill missing values

# Top 10 games by Global Sales
top_games = df.nlargest(10, 'Global_Sales')
print("top 10 games --->\n", top_games)

# Distribution of numerical features
# Randomly select one color from a list of common color names
colors = ['blue', 'red', 'green', 'purple']
chosen_color = random.choice(colors)

# Plot histograms with the randomly chosen color
df.hist(bins=20, figsize=(20, 15), color=chosen_color)
plt.show()

# Select only the numeric columns
numeric_df = df.select_dtypes(include=[np.number])

# Calculate the correlation matrix
corr_matrix = numeric_df.corr()

# Display the heatmap
plt.figure(figsize=(12, 8))
sns.heatmap(corr_matrix, annot=True, cmap='coolwarm', linewidths=0.5)
plt.show()

# Sales distribution by region
regions = ['NA_Sales', 'EU_Sales', 'JP_Sales', 'Other_Sales']

# Create a single figure with subplots
fig, axs = plt.subplots(2, 2, figsize=(14, 10))
fig.suptitle('Sales Distribution by Region')

# Flatten the array of axes for easier iteration
axs = axs.flatten()

# Plot the distribution for each region
for i, region in enumerate(regions):
    sns.histplot(df[region], kde=True, ax=axs[i])
    axs[i].set_title(f'Sales Distribution in {region}')
    
    # Zoom in 5 times
    max_sales = df[region].max()
    axs[i].set_xlim(0, max_sales * 0.05)  # Adjust the multiplier to zoom in more if needed


# Adjust the layout
plt.tight_layout()

# Display the plot
plt.show()

# Top 10 games by Global Sales
top_games = df.nlargest(10, 'Global_Sales')
print("Top 10 games by Global Sales:")
print(top_games[['Rank', 'Name', 'Global_Sales']])  # Displaying Rank, Name, and Global Sales

# Plotting histogram
plt.figure(figsize=(10, 6))
sns.histplot(data=top_games, x='Name', hue='Name', multiple='stack')
plt.xticks(rotation=45, ha='right')
plt.title('Top 10 Games by Global Sales')
plt.xlabel('Game Name')
plt.ylabel('Frequency')
plt.tight_layout()
plt.show()

# Load the dataset
df = pd.read_csv('./vgsales.csv')

# Save column headers to a text file
with open('columns_list.txt', 'w') as file:
    file.write("Columns List --->\n")
    for column in df.columns:
        file.write(f"{column}\n")

# Save first few rows to a JSON file
first_few_rows = df.head().to_dict(orient='records')
with open('first_few_rows.json', 'w') as file:
    json.dump(first_few_rows, file, indent=4)

# Save summary statistics to a JSON file
summary_statistics = df.describe().to_dict()
with open('summary_statistics.json', 'w') as file:
    json.dump(summary_statistics, file, indent=4)

# Save data info (info about data types and missing values) to a text file
import io
buffer = io.StringIO()
df.info(buf=buffer)
s = buffer.getvalue()
with open('data_info.txt', 'w') as file:
    file.write("Data Info --->\n")
    file.write(s)

# Save value counts for categorical variables to separate JSON files
for col in df.select_dtypes(include=['object']).columns:
    value_counts = df[col].value_counts().to_dict()
    with open(f'value_counts_{col}.json', 'w') as file:
        json.dump(value_counts, file, indent=4)

# Save value counts for categorical variables to separate CSV files
for col in df.select_dtypes(include=['object']).columns:
    value_counts_df = df[col].value_counts().reset_index()
    value_counts_df.columns = [col, 'Count']
    value_counts_df.to_csv(f'value_counts_{col}.csv', index=False)

# Calculate correlation matrix for numeric columns
numeric_columns = df.select_dtypes(include=['number']).columns
correlation_matrix = df[numeric_columns].corr()

# Save correlation matrix to a JSON file
with open('correlation_matrix.json', 'w') as file:
    json.dump(correlation_matrix.to_dict(), file, indent=4)

# Save correlation matrix to a CSV file
correlation_matrix.to_csv('correlation_matrix.csv')

print("Data extracted and saved successfully.")