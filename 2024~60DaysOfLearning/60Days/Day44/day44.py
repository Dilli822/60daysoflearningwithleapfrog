import pandas as pd
import matplotlib.pyplot as plt

# Define the structure of the Bayesian Network
edges = [('Alarm On?', 'Overslept?'), 
         ('Bus Late?', 'On Time?'),
         ('Overslept?', 'On Time?')]

# Define the CPDs
P_Alarm_On = [0.9, 0.1]  # P(Alarm On = [yes, no])
P_Bus_Late = [0.2, 0.8]  # P(Bus Late = [yes, no])
P_Overslept_given_Alarm_On = [[0.1, 0.9], [0.9, 0.1]]  # P(Overslept = [yes, no] | Alarm On = [yes, no])
P_On_Time_given_Bus_Late_and_Overslept = [
    [0.1, 0.2],  # P(On Time = [yes, no] | Bus Late = yes, Overslept = [yes, no])
    [0.3, 0.9]   # P(On Time = [yes, no] | Bus Late = no, Overslept = [yes, no])
]

# Calculate the probability of being on time for each scenario
def calculate_probability(P_A, P_B, P_O_given_A, P_T_given_B_O):
    P_O_yes_given_A = P_O_given_A[0]
    P_T_yes_given_B_O_yes = P_T_given_B_O[0]
    P_O_no_given_A = P_O_given_A[1]
    P_T_yes_given_B_O_no = P_T_given_B_O[1]

    P_T = (P_T_yes_given_B_O_yes * P_O_yes_given_A * P_B * P_A) + \
          (P_T_yes_given_B_O_no * P_O_no_given_A * P_B * P_A)
    return P_T

# Define scenarios and calculate probabilities
scenarios = [
    ("Alarm On", "Bus Late", P_Alarm_On[0], P_Bus_Late[0], P_Overslept_given_Alarm_On[0], P_On_Time_given_Bus_Late_and_Overslept[0]),
    ("Alarm On", "Bus On Time", P_Alarm_On[0], P_Bus_Late[1], P_Overslept_given_Alarm_On[0], P_On_Time_given_Bus_Late_and_Overslept[1]),
    ("Alarm Off", "Bus Late", P_Alarm_On[1], P_Bus_Late[0], P_Overslept_given_Alarm_On[1], P_On_Time_given_Bus_Late_and_Overslept[0]),
    ("Alarm Off", "Bus On Time", P_Alarm_On[1], P_Bus_Late[1], P_Overslept_given_Alarm_On[1], P_On_Time_given_Bus_Late_and_Overslept[1])
]

results = []

for scenario in scenarios:
    description, bus_status, P_A, P_B, P_O_given_A, P_T_given_B_O = scenario
    P_T = calculate_probability(P_A, P_B, P_O_given_A, P_T_given_B_O)
    results.append([description, bus_status, P_T])

# Create a DataFrame
df = pd.DataFrame(results, columns=["Alarm Status", "Bus Status", "Probability of Being On Time"])

# Plot the table
fig, ax = plt.subplots(figsize=(10, 3))
ax.axis('tight')
ax.axis('off')
table = ax.table(cellText=df.values, colLabels=df.columns, cellLoc='center', loc='center')

plt.title("Probability of Being On Time for Different Scenarios")
plt.show()
