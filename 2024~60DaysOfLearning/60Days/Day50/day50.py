# import matplotlib.pyplot as plt
# import numpy as np

# # Sample dataset
# tweets = [
#     {'text': "I am so happy", 'label': 'positive'},
#     {'text': "I am sad", 'label': 'negative'},
#     {'text': "This is great", 'label': 'positive'},
#     {'text': "I am not happy", 'label': 'negative'},
#     {'text': "Happy moments", 'label': 'positive'},
#     {'text': "Terrible day", 'label': 'negative'},
#     {'text': "I am happy", 'label': 'positive'},
#     {'text': "I am so unhappy", 'label': 'negative'},
#     {'text': "Wonderful!", 'label': 'positive'},
#     {'text': "I am very happy", 'label': 'positive'},
# ]

# # Function to calculate the probability of an event
# def calculate_probability(event_count, total_count):
#     return event_count / total_count

# # Count the occurrences of positive and negative tweets
# positive_tweets = [tweet for tweet in tweets if tweet['label'] == 'positive']
# negative_tweets = [tweet for tweet in tweets if tweet['label'] == 'negative']

# total_tweets = len(tweets)
# positive_count = len(positive_tweets)
# negative_count = len(negative_tweets)

# # Calculate probabilities
# prob_positive = calculate_probability(positive_count, total_tweets)
# prob_negative = calculate_probability(negative_count, total_tweets)

# # Count tweets containing the word "happy"
# tweets_with_happy = [tweet for tweet in tweets if 'happy' in tweet['text'].lower()]
# happy_count = len(tweets_with_happy)

# # Count tweets that are positive and contain the word "happy"
# positive_and_happy_tweets = [tweet for tweet in positive_tweets if 'happy' in tweet['text'].lower()]
# positive_and_happy_count = len(positive_and_happy_tweets)

# # Calculate probabilities
# prob_happy = calculate_probability(happy_count, total_tweets)
# prob_positive_and_happy = calculate_probability(positive_and_happy_count, total_tweets)

# # Calculate conditional probability using Bayes' rule
# prob_happy_given_positive = calculate_probability(positive_and_happy_count, positive_count)
# prob_positive_given_happy = (prob_happy_given_positive * prob_positive) / prob_happy

# # Print results
# print(f"Probability of positive sentiment: {prob_positive:.2f}")
# print(f"Probability of negative sentiment: {prob_negative:.2f}")
# print(f"Probability of a tweet containing 'happy': {prob_happy:.2f}")
# print(f"Probability of a tweet being positive and containing 'happy': {prob_positive_and_happy:.2f}")
# print(f"Probability of positive sentiment given 'happy': {prob_positive_given_happy:.2f}")

# # Visualize the results
# labels = ['Positive', 'Negative', 'Happy', 'Positive and Happy']
# probabilities = [prob_positive, prob_negative, prob_happy, prob_positive_and_happy]

# fig, ax = plt.subplots()
# bar_width = 0.5
# bars = ax.bar(labels, probabilities, bar_width)

# # Add probabilities on top of the bars
# for bar in bars:
#     height = bar.get_height()
#     ax.annotate(f'{height:.2f}', xy=(bar.get_x() + bar.get_width() / 2, height),
#                 xytext=(0, 3), textcoords='offset points', ha='center', va='bottom')

# # Add titles and labels
# ax.set_ylabel('Probability')
# ax.set_title('Probabilities of Events')
# plt.show()

# # Visualize Bayes' Rule Application
# labels_conditional = ['P(Happy|Positive)', 'P(Positive|Happy)']
# probabilities_conditional = [prob_happy_given_positive, prob_positive_given_happy]

# fig, ax = plt.subplots()
# bars_conditional = ax.bar(labels_conditional, probabilities_conditional, bar_width, color=['blue', 'green'])

# # Add probabilities on top of the bars
# for bar in bars_conditional:
#     height = bar.get_height()
#     ax.annotate(f'{height:.2f}', xy=(bar.get_x() + bar.get_width() / 2, height),
#                 xytext=(0, 3), textcoords='offset points', ha='center', va='bottom')

# # Add titles and labels
# ax.set_ylabel('Probability')
# ax.set_title('Conditional Probabilities Using Bayes\' Rule')
# plt.show()


import matplotlib.pyplot as plt
import numpy as np
import matplotlib.animation as animation

# Sample dataset
tweets = [
    {'text': "I am so happy", 'label': 'positive'},
    {'text': "I am sad", 'label': 'negative'},
    {'text': "This is great", 'label': 'positive'},
    {'text': "I am not happy", 'label': 'negative'},
    {'text': "Happy moments", 'label': 'positive'},
    {'text': "Terrible day", 'label': 'negative'},
    {'text': "I am happy", 'label': 'positive'},
    {'text': "I am so unhappy", 'label': 'negative'},
    {'text': "Wonderful!", 'label': 'positive'},
    {'text': "I am very happy", 'label': 'positive'},
]

# Function to calculate the probability of an event
def calculate_probability(event_count, total_count):
    return event_count / total_count

# Count the occurrences of positive and negative tweets
positive_tweets = [tweet for tweet in tweets if tweet['label'] == 'positive']
negative_tweets = [tweet for tweet in tweets if tweet['label'] == 'negative']

total_tweets = len(tweets)
positive_count = len(positive_tweets)
negative_count = len(negative_tweets)

# Calculate probabilities
prob_positive = calculate_probability(positive_count, total_tweets)
prob_negative = calculate_probability(negative_count, total_tweets)

# Count tweets containing the word "happy"
tweets_with_happy = [tweet for tweet in tweets if 'happy' in tweet['text'].lower()]
happy_count = len(tweets_with_happy)

# Count tweets that are positive and contain the word "happy"
positive_and_happy_tweets = [tweet for tweet in positive_tweets if 'happy' in tweet['text'].lower()]
positive_and_happy_count = len(positive_and_happy_tweets)

# Calculate probabilities
prob_happy = calculate_probability(happy_count, total_tweets)
prob_positive_and_happy = calculate_probability(positive_and_happy_count, total_tweets)

# Calculate conditional probability using Bayes' rule
prob_happy_given_positive = calculate_probability(positive_and_happy_count, positive_count)
prob_positive_given_happy = (prob_happy_given_positive * prob_positive) / prob_happy

# Set up the figure and axis
fig, ax = plt.subplots()
ax.set_ylabel('Probability')
ax.set_ylim(0, 1)

# Define initial probabilities and labels
labels = ['P(Positive)', 'P(Negative)', 'P(Happy)', 'P(Positive and Happy)', 'P(Positive|Happy)']
probabilities = [0, 0, 0, 0, 0]

# Create the initial bar chart
bars = ax.bar(labels, probabilities)

def animate(i):
    if i == 1:
        probabilities[0] = prob_positive
    elif i == 2:
        probabilities[1] = prob_negative
    elif i == 3:
        probabilities[2] = prob_happy
    elif i == 4:
        probabilities[3] = prob_positive_and_happy
    elif i == 5:
        probabilities[4] = prob_positive_given_happy

    for bar, prob in zip(bars, probabilities):
        bar.set_height(prob)
        ax.annotate(f'{prob:.2f}', xy=(bar.get_x() + bar.get_width() / 2, bar.get_height()),
                    xytext=(0, 3), textcoords='offset points', ha='center', va='bottom')

# Create the animation
ani = animation.FuncAnimation(fig, animate, frames=6, interval=1000, repeat=False)

# Show the plot
plt.title('Probabilities Animation')
plt.show()
