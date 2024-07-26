import numpy as np
from scipy.stats import pearsonr, f_oneway, spearmanr,kendalltau, chi2_contingency
import pandas as pd
from sklearn.feature_selection import mutual_info_classif

x = np.array([
    3.63,   
    3.02,   
    3.82,   
    3.42,   
    3.59,   
    2.87,   
    3.03,
    3.46,   
    3.36,   
    3.3
])

y = np.array([
    53.1,
    49.7,
    48.4,
    54.2,
    54.9,
    43.7,
    47.2,
    45.2,
    54.4,
    50.4
])
# Type: Numerical vs. Numerical
# Pearson's correlation
corr, _ = pearsonr(x, y)
print('Pearsons correlation: %.3f' % corr)

# Type: Numerical vs. Numerical
# Example data
x = np.array([3.5, 5.5, 2, 1, 5.5, 3.5])
y = np.array([3.5, 6, 5, 3.5, 1, 2])

# Spearman's correlation
corr, _ = spearmanr(x, y)
print('Spearmans correlation: %.3f' % corr)

# Type: Categorical vs. Numerical#Z
# Example data
data = {'group': ['A', 'A','A', 'B', 'B','B', 'C', 'C','C'],
        'value': [1, 2, 5, 2, 4, 2, 2, 3, 4]}
df = pd.DataFrame(data)

# Perform ANOVA
groups = df.groupby('group')['value'].apply(list)
f_stat, p_value = f_oneway(*groups)
print('ANOVA F-statistic: %.3f, p-value: %.3f' % (f_stat, p_value))


# Example data
x = np.array([12, 2, 1, 12, 2])
y = np.array([1, 4, 7, 1, 0])
# Categorical vs. Numerical or Numerical vs. Numerical
# Kendall's rank coefficient
tau, _ = kendalltau(x, y)
print('Kendall’s tau: %.3f' % tau)


#Categorical vs. Categorical
# Example data
data = np.array([[10, 10, 20], [20, 20, 40], [30, 30, 60]])

# Chi-Squared test
chi2, p, dof, expected = chi2_contingency(data)
print('Chi-Squared test statistic: %.3f, p-value: %.3f' % (chi2, p))


# Example data
X = np.array([[1, 1, 1], [2, 2, 2], [3, 3, 3], [4, 4, 4]])
y = np.array([1, 0, 1, 0])

# Mutual Information
mi = mutual_info_classif(X, y)
print('Mutual Information:', mi)

"""
Summary
>>> Numerical vs. Numerical:
Pearson’s Correlation
Spearman’s Rank Correlation
Kendall’s Rank Coefficient

>>> Categorical vs. Numerical:
ANOVA
Kendall’s Rank Coefficient

>>> Categorical vs. Categorical:
Chi-Squared Test
Mutual Information

"""

### VISUALIZATION PART FOCUSED
import numpy as np
from scipy.stats import pearsonr, f_oneway, spearmanr, kendalltau, chi2_contingency
import pandas as pd
from sklearn.feature_selection import mutual_info_classif
import matplotlib.pyplot as plt
import seaborn as sns
import matplotlib.animation as animation

# Pearson's correlation data
x1 = np.array([
    3.63,   
    3.02,   
    3.82,   
    3.42,   
    3.59,   
    2.87,   
    3.03,
    3.46,   
    3.36,   
    3.3
])

y1 = np.array([
    53.1,
    49.7,
    48.4,
    54.2,
    54.9,
    43.7,
    47.2,
    45.2,
    54.4,
    50.4
])

# Spearman's correlation data
x2 = np.array([3.5, 5.5, 2, 1, 5.5, 3.5])
y2 = np.array([3.5, 6, 5, 3.5, 1, 2])

# ANOVA data
data_anova = {'group': ['A', 'A', 'A', 'B', 'B', 'B', 'C', 'C', 'C'],
              'value': [1, 2, 5, 2, 4, 2, 2, 3, 4]}
df_anova = pd.DataFrame(data_anova)

# Kendall's rank correlation data
x3 = np.array([12, 2, 1, 12, 2])
y3 = np.array([1, 4, 7, 1, 0])

# Chi-Squared test data
data_chi2 = np.array([[10, 10, 20], [20, 20, 40], [30, 30, 60]])

# Mutual Information data
X_mi = np.array([[1, 1, 1], [2, 2, 2], [3, 3, 3], [4, 4, 4]])
y_mi = np.array([1, 0, 1, 0])

def plot_pearson():
    fig, ax = plt.subplots()
    def update(frame):
        ax.clear()
        ax.scatter(x1[:frame+1], y1[:frame+1])
        corr, _ = pearsonr(x1[:frame+1], y1[:frame+1])
        ax.set_title(f"Pearson's Correlation: {corr:.3f}")
        ax.set_xlim([min(x1)-0.5, max(x1)+0.5])
        ax.set_ylim([min(y1)-5, max(y1)+5])
    ani = animation.FuncAnimation(fig, update, frames=len(x1), repeat=False, interval=1000)
    plt.show()

def plot_spearman():
    fig, ax = plt.subplots()
    def update(frame):
        ax.clear()
        ax.scatter(x2[:frame+1], y2[:frame+1])
        corr, _ = spearmanr(x2[:frame+1], y2[:frame+1])
        ax.set_title(f"Spearman's Correlation: {corr:.3f}")
        ax.set_xlim([min(x2)-0.5, max(x2)+0.5])
        ax.set_ylim([min(y2)-0.5, max(y2)+0.5])
    ani = animation.FuncAnimation(fig, update, frames=len(x2), repeat=False, interval=1000)
    plt.show()

def plot_anova():
    fig, ax = plt.subplots()
    def update(frame):
        ax.clear()
        df = df_anova.iloc[:frame+1]
        sns.boxplot(x='group', y='value', data=df, ax=ax)
        if len(df['group'].unique()) > 1:
            groups = df.groupby('group')['value'].apply(list)
            f_stat, p_value = f_oneway(*groups)
            ax.set_title(f"ANOVA F-statistic: {f_stat:.3f}, p-value: {p_value:.3f}")
    ani = animation.FuncAnimation(fig, update, frames=len(df_anova), repeat=False, interval=1000)
    plt.show()

def plot_kendall():
    fig, ax = plt.subplots()
    def update(frame):
        ax.clear()
        ax.scatter(x3[:frame+1], y3[:frame+1])
        tau, _ = kendalltau(x3[:frame+1], y3[:frame+1])
        ax.set_title(f"Kendall’s tau: {tau:.3f}")
        ax.set_xlim([min(x3)-1, max(x3)+1])
        ax.set_ylim([min(y3)-1, max(y3)+1])
    ani = animation.FuncAnimation(fig, update, frames=len(x3), repeat=False, interval=1000)
    plt.show()

def plot_chi2():
    fig, ax = plt.subplots()
    def update(frame):
        ax.clear()
        data = data_chi2[:frame+1, :frame+1]
        sns.heatmap(data, annot=True, fmt="d", cmap="YlGnBu", ax=ax)
        if data.size > 1:
            chi2, p, dof, expected = chi2_contingency(data)
            ax.set_title(f"Chi-Squared test statistic: {chi2:.3f}, p-value: {p:.3f}")
    ani = animation.FuncAnimation(fig, update, frames=data_chi2.shape[0], repeat=False, interval=1000)
    plt.show()

def plot_mutual_info():
    fig, ax = plt.subplots()
    def update(frame):
        ax.clear()
        mi = mutual_info_classif(X_mi[:frame+1], y_mi[:frame+1])
        ax.bar(range(len(mi)), mi)
        ax.set_title(f"Mutual Information: {mi}")
    ani = animation.FuncAnimation(fig, update, frames=len(X_mi), repeat=False, interval=1000)
    plt.show()

# Display each plot one by one
plot_pearson()
plot_spearman()
plot_anova()
plot_kendall()
plot_chi2()
plot_mutual_info()
