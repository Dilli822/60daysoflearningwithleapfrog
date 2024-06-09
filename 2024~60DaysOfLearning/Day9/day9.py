# Pandas are the library of Python which is used to analyze or work with the data sets
# analyzing, cleaning, exploring, and manipulating data
# pandas can perform operations like deleteing the data which are not relevant, null or wrong data set
# pip install pandas

import pandas as pd

# Creating the dataset
data = {
    'Review_ID': [1, 2, 3, 4, 5],
    'Customer_Name': ['Alice', 'Bob', 'Charlie', 'Diana', 'Edward'],
    'Review_Text': [
        'Great product! Highly recommend it.',
        'Not what I expected. Quality could be better.',
        'Amazing! Will buy again. Superb quality.',
        'It\'s okay. Does the job, but nothing special.',
        'Terrible experience. Product broke after one use.'
    ],
    'Rating': [5, 3, 5, 3, 1],
    'Review_Date': pd.to_datetime(['2023-06-01', '2023-06-05', '2023-06-07', '2023-06-08', '2023-06-09'])
}

# Creating the DataFrame
df = pd.DataFrame(data)

# Displaying the DataFrame
print("DataFrame:")
print(df)

# Checking the data types
print("\nData Types:")
print(df.dtypes)
