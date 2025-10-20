# 🎲 PLS 120 - Week 4: Probability and Sampling

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/MohammadrezaNarimaniUCDavis/PLS120-Statistics-Lab-Materials/binder-week4)

## 📚 Week 4 Overview: Probability and Sampling

Welcome to Week 4 of PLS 120! This week focuses on **probability theory and sampling techniques**. You'll learn essential skills for understanding randomness, simulating probability experiments, and working with probability distributions in agricultural research.

---

## 🎯 Learning Objectives

By the end of this week, you will be able to:

✅ **Understand Logical Variables** - Work with TRUE/FALSE values and logical operations  
✅ **Convert Data Types** - Transform between numeric, character, factor, and logical types  
✅ **Perform Random Sampling** - Use the sample() function for population sampling  
✅ **Simulate Probability** - Model coin tosses and dice rolls programmatically  
✅ **Work with Normal Distributions** - Use rnorm(), pnorm(), and qnorm() functions  
✅ **Visualize Probability Distributions** - Create bar plots and histograms of outcomes  
✅ **Compare Experimental vs Theoretical** - Analyze differences between simulated and expected results  

---

## 📊 What You'll Learn This Week

### 🔍 **Logical Variables and Data Types**
- **Boolean Logic**: Understanding TRUE/FALSE values and logical operations
- **Comparison Operations**: Using ==, !=, <, >, &, | operators
- **Data Type Conversion**: Converting between numeric, character, factor, and logical types
- **Vector Operations**: Working with logical vectors and element-wise comparisons

### 🎯 **Random Sampling Techniques**
- **sample() Function**: Drawing random samples from populations
- **Sampling Parameters**: Understanding size, replace, and probability arguments
- **Population vs Sample**: Distinguishing between population parameters and sample statistics
- **Reproducible Results**: Using set.seed() for consistent random sampling

### 🪙 **Probability Simulation**
- **Coin Toss Experiments**: Simulating fair and biased coin flips
- **Dice Roll Simulations**: Modeling single and multiple dice experiments
- **Frequency Analysis**: Converting counts to probabilities using table() function
- **Law of Large Numbers**: Observing convergence to theoretical probabilities

### 📊 **Normal Distribution Functions**
- **rnorm()**: Generating random numbers from normal distributions
- **pnorm()**: Calculating cumulative probabilities and areas under curves
- **qnorm()**: Finding quantiles and percentiles in normal distributions
- **Distribution Visualization**: Creating density plots and histograms

---

## 📁 Week 4 Materials

### 🧪 **Class Activity: Probability and Sampling**
**File**: `class_activity/Week4_Probability_Sampling.ipynb`

**Step-by-Step Learning Path**:

1. **Logical Variables** (15 minutes)
   - Understand TRUE/FALSE values and logical operations
   - Practice comparison operators and logical combinations
   - Work with logical vectors and element-wise operations

2. **Data Type Conversion** (20 minutes)
   - Convert between numeric, character, factor, and logical types
   - Use as.numeric(), as.character(), as.factor(), as.logical()
   - Handle data type requirements for different functions

3. **Random Sampling** (25 minutes)
   - Use sample() function for population sampling
   - Understand sampling with and without replacement
   - Practice with iris dataset sampling

4. **Coin Toss Simulation** (20 minutes)
   - Simulate coin flips using sample() function
   - Calculate experimental probabilities
   - Create frequency tables and probability distributions

5. **Dice Roll Simulation** (25 minutes)
   - Model single and multiple dice experiments
   - Observe Central Limit Theorem effects
   - Compare different sample sizes

6. **Normal Distribution Functions** (20 minutes)
   - Generate random normal data with rnorm()
   - Calculate probabilities with pnorm()
   - Find quantiles with qnorm()

7. **Probability Visualization** (30 minutes)
   - Create bar plots for discrete distributions
   - Build histograms and density plots
   - Compare base R and ggplot2 approaches

### 📋 **Assignment 4: Probability Simulation**
**File**: `assignment/Assignment4.ipynb`  
**Total Points**: 20

**Detailed Assignment Breakdown**:

#### **PART ONE: Simulation** (6 points)
- **Coin Flip Simulation** (3 points)
  - Simulate 50 coin flips using sample() function
  - Use proper parameters for random sampling with replacement
- **Dice Roll Simulation** (3 points)
  - Simulate 50 six-sided dice rolls
  - Generate random integers from 1 to 6

#### **PART TWO: Probability Calculation** (6 points)
- **Coin Probability Analysis** (2 points)
  - Calculate experimental probabilities for heads and tails
  - Use table() function and probability conversion
- **Dice Probability Analysis** (3 points)
  - Calculate experimental probabilities for each face (1-6)
  - Compare results across different outcomes
- **Theoretical Comparison** (1 point)
  - Compare experimental vs theoretical probabilities
  - Discuss discrepancies and sample size effects

#### **PART THREE: Data Frames and Visualization** (8 points)
- **Coin Data Frame** (2 points)
  - Create data frame from coin probability distribution
  - Structure data for visualization
- **Dice Data Frame** (2 points)
  - Create data frame from dice probability distribution
  - Prepare discrete probability data
- **Coin Visualization** (2 points)
  - Create bar plot using barplot() or ggplot2
  - Add appropriate labels and titles
- **Dice Visualization** (2 points)
  - Create bar plot for dice probabilities
  - Compare visualization approaches

---

## 🚀 Getting Started

### **Option 1: Launch Binder (Recommended)**
Click the Binder badge above to launch an interactive R environment with all packages pre-installed.

### **Option 2: Local Setup**
If you prefer to work locally:
```r
# Install required packages
install.packages(c("ggplot2", "tigerstats"))

# Load packages
library(ggplot2)
library(tigerstats)
```

---

## 📊 Datasets Used This Week

### **1. Iris Dataset** (Class Activity)
- **Source**: Built-in R dataset
- **Variables**: Sepal/Petal measurements, Species
- **Use**: Learning random sampling techniques
- **Size**: 150 observations, 5 variables

### **2. Simulated Coin Data** (Class Activity & Assignment)
- **Source**: Generated using sample() function
- **Variables**: Heads (H) or Tails (T)
- **Use**: Probability simulation and analysis
- **Focus**: Experimental vs theoretical probability

### **3. Simulated Dice Data** (Class Activity & Assignment)
- **Source**: Generated using sample() function
- **Variables**: Integer values 1-6
- **Use**: Discrete probability distributions
- **Challenge**: Understanding Central Limit Theorem effects

---

## 🛠️ Key R Functions You'll Master

### **Probability and Sampling**
```r
# Random sampling
sample(x, size, replace = TRUE/FALSE)
set.seed(number)  # for reproducible results
nrow(data)  # population size

# Probability calculations
table(data)  # frequency counts
sum(logical_vector)  # count TRUE values
length(data)  # total observations
```

### **Normal Distribution Functions**
```r
# Generate random normal data
rnorm(n, mean = 0, sd = 1)

# Calculate probabilities
pnorm(q, mean = 0, sd = 1)

# Find quantiles
qnorm(p, mean = 0, sd = 1)
```

### **Data Type Conversion**
```r
# Type conversion functions
as.numeric(x)
as.character(x)
as.factor(x)
as.logical(x)
data.frame(x)  # convert to data frame
```

### **Visualization**
```r
# Base R plotting
barplot(table_data)
hist(numeric_data)
par(mfrow = c(rows, cols))  # multiple plots

# ggplot2 graphics
ggplot(data, aes(x = variable)) + geom_histogram()
ggplot(data, aes(x = category, y = frequency)) + geom_bar(stat = "identity")
```

---

## 💡 Pro Tips for Success

### **🎲 Probability Simulation Strategy**
1. **Use set.seed()** for reproducible random results
2. **Start with small samples** to understand concepts, then increase size
3. **Always verify your simulations** by checking total counts and probabilities
4. **Compare experimental to theoretical** probabilities to validate results

### **📊 Visualization Best Practices**
1. **Add meaningful titles and labels** to all probability plots
2. **Use appropriate scales** for probability (0 to 1) vs frequency displays
3. **Choose clear colors** to distinguish different outcomes
4. **Always interpret your results** in terms of probability theory

### **🔍 Statistical Analysis Workflow**
1. **Simulate first, then analyze** - generate data before calculating probabilities
2. **Document your random seed** for reproducible experiments
3. **Verify probability sums** - discrete probabilities should sum to 1
4. **Consider sample size effects** - larger samples approach theoretical values

---

## 🎯 Agricultural Applications

### **Real-World Scenarios You'll Be Prepared For**:

- **Seed Germination Studies**: Model probability of germination success under different conditions
- **Weather Risk Assessment**: Simulate probability of drought, frost, or extreme weather events
- **Quality Control Sampling**: Random sampling of agricultural products for testing
- **Field Trial Design**: Understanding sampling variability in experimental plots
- **Pest Management**: Modeling probability distributions of pest occurrence
- **Crop Insurance**: Calculating risk probabilities for insurance premium determination

---

## 📧 Need Help?

**Mohammadreza Narimani**  
📧 mnarimani@ucdavis.edu  
🏫 Department of Biological and Agricultural Engineering, UC Davis  
⏰ Office Hours: Thursdays 10 AM - 12 PM (Zoom)

---

## 🔄 What's Next?

**Week 5 Preview**: We'll build on this week's probability foundations to explore:
- Hypothesis testing and statistical inference
- Confidence intervals and p-values
- t-tests and ANOVA for agricultural experiments
- Statistical decision-making in research

---

*Last updated: October 2025 | PLS 120 - Applied Statistics in Agricultural Sciences | UC Davis*