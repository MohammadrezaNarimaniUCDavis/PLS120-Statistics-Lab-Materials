# 📊 PLS 120 - Week 6: Confidence Intervals and T-Tests

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/MohammadrezaNarimaniUCDavis/PLS120-Statistics-Lab-Materials/binder-week6)

## 📚 Week 6 Overview: Confidence Intervals and T-Tests

Welcome to Week 6 of PLS 120! This week focuses on **confidence intervals and t-tests for comparing means**. You'll learn essential skills for constructing confidence intervals, understanding t-distributions, and comparing means between different groups in agricultural research.

---

## 🎯 Learning Objectives

By the end of this week, you will be able to:

✅ **Understand Different Printing Methods** - Master print(), cat(), and paste() functions in R  
✅ **Construct Confidence Intervals** - Build confidence intervals for population means  
✅ **Use T-Distribution** - Apply t-distribution when population variance is unknown  
✅ **Compare Group Means** - Analyze differences between treatment groups  
✅ **Interpret Confidence Intervals** - Understand overlapping vs non-overlapping intervals  
✅ **Apply Statistical Inference** - Make decisions based on confidence interval results  

---

## 📊 What You'll Learn This Week

### 🖨️ **R Output Functions**
- **Basic Output**: Understanding different ways to display results in R
- **print() Function**: Standard method for displaying data types and objects
- **cat() Function**: Concatenating and printing objects with custom formatting
- **paste() Function**: Combining strings and storing results for later use

### 📐 **T-Distribution and Confidence Intervals**
- **T vs Z Distribution**: When to use t-distribution instead of z-distribution
- **Degrees of Freedom**: Understanding df = n - 1 for sample-based inference
- **Critical T-Values**: Using qt() function to find t-scores
- **Confidence Interval Formula**: x̄ ± t(SE) for population mean estimation

### 🌸 **Group Comparisons**
- **Data Filtering**: Separating datasets by treatment groups using dplyr
- **Individual Statistics**: Calculating means and standard deviations for each group
- **Standard Error Calculation**: SE = s/√n for each treatment group
- **Confidence Interval Comparison**: Interpreting overlapping vs non-overlapping intervals

---

## 📁 Week 6 Materials

### 🧪 **Class Activity: Confidence Intervals and T-Tests**
**File**: `class_activity/Week6_Confidence_Intervals_T_Tests.ipynb`

**Step-by-Step Learning Path**:

1. **R Output Functions** (15 minutes)
   - Practice different printing methods in R
   - Understand when to use each output function
   - Learn about storing vs displaying results

2. **Iris Dataset Exploration** (20 minutes)
   - Load and examine the iris dataset structure
   - Convert variables to appropriate data types
   - Visualize data with boxplots and scatter plots

3. **Data Filtering and Grouping** (15 minutes)
   - Separate data by species using dplyr filter()
   - Create individual datasets for each group
   - Calculate sample sizes for each group

4. **Statistical Calculations** (25 minutes)
   - Calculate means and standard deviations for each group
   - Compute standard errors using SE = s/√n formula
   - Determine appropriate t-scores using qt() function

5. **Confidence Interval Construction** (30 minutes)
   - Build confidence intervals for each species
   - Calculate margins of error and bounds
   - Create vectors containing confidence interval results

6. **Results Interpretation** (15 minutes)
   - Compare confidence intervals between groups
   - Understand implications of overlapping vs non-overlapping intervals
   - Draw conclusions about group differences

### 📋 **Assignment 6: Wheat Fertilizer Experiment**
**File**: `assignment/Assignment6.ipynb`  
**Total Points**: 20

**Detailed Assignment Breakdown**:

#### **Part 1: Overall Analysis** (9 points)
- **Question 1.1: Load and Explore Data** (1 point)
  - Load wheat_yield.csv dataset and examine structure
  - Convert fertilizer treatment to factor variable
- **Question 1.2: Sample Size** (1 point)
  - Identify total sample size and samples per group
- **Question 1.3: Overall Statistics** (2 points)
  - Calculate overall mean and standard deviation of yield
- **Question 1.4: Z-Score Calculation** (1 point)
  - Calculate z-score for 95% confidence interval
- **Question 1.5: Overall Confidence Interval** (3 points)
  - Calculate standard error, margin of error, and confidence interval bounds
- **Question 1.6: Interpretation** (1 point)
  - Interpret the overall confidence interval results

#### **Part 2: Treatment Comparison** (11 points)
- **Question 2.1: Data Separation** (1 point)
  - Filter dataset by fertilizer treatment (Control vs N)
- **Question 2.2: Treatment Statistics** (2 points)
  - Calculate means and standard deviations for each treatment
- **Question 2.3: Standard Errors** (2 points)
  - Calculate standard errors for both treatment groups
- **Question 2.4: Margins of Error** (2 points)
  - Calculate margins of error using t-scores
- **Question 2.5: Treatment Confidence Intervals** (3 points)
  - Construct confidence intervals for both treatments
- **Question 2.6: Treatment Comparison** (1 point)
  - Compare treatments and justify conclusions using confidence intervals

---

## 🚀 Getting Started

### **Option 1: Launch Binder (Recommended)**
Click the Binder badge above to launch an interactive R environment with all packages pre-installed.

### **Option 2: Local Setup**
If you prefer to work locally:
```r
# Install required packages
install.packages(c("ggplot2", "tidyverse"))

# Load packages
library(ggplot2)
library(tidyverse)
```

---

## 📊 Datasets Used This Week

### **1. Iris Dataset** (Class Activity)
- **Source**: Built-in R dataset (iris)
- **Variables**: Sepal.Length, Sepal.Width, Petal.Length, Petal.Width, Species
- **Use**: Learning confidence interval construction and group comparisons
- **Focus**: Comparing sepal length between three iris species

### **2. Wheat Yield Data** (Assignment)
- **Source**: wheat_yield.csv (agricultural experiment data)
- **Variables**: Yield (kg/ha), Fertilizer treatment (Control vs N)
- **Use**: Applying confidence intervals to agricultural research
- **Challenge**: Determining fertilizer effectiveness using statistical inference

---

## 🛠️ Key R Functions You'll Master

### **Output Functions**
```r
# Basic display
x <- 42
x

# Standard printing
print(x)

# Concatenated output
cat("The value is:", x)

# String combination
paste("Result:", x, "units")
```

### **T-Distribution Functions**
```r
# Critical t-value for 95% confidence
t_score <- qt(1 - alpha/2, df = n - 1)

# Degrees of freedom
DoF <- n - 1
```

### **Confidence Intervals**
```r
# Standard error
SE <- sd / sqrt(n)

# Margin of error
ME <- t_score * SE

# Confidence interval bounds
lower_bound <- mean - ME
upper_bound <- mean + ME
CI <- c(lower_bound, mean, upper_bound)
```

### **Data Filtering**
```r
# Separate by groups
group1 <- data %>% filter(Treatment == "Control")
group2 <- data %>% filter(Treatment == "Treatment")
```

---

## 💡 Pro Tips for Success

### **🖨️ Output Function Strategy**
1. **Use print()** for standard data display and debugging
2. **Use cat()** for custom formatted output with multiple variables
3. **Use paste()** when you need to store combined strings for later use
4. **Remember** cat() cannot be stored in objects, paste() can

### **📊 Confidence Interval Best Practices**
1. **Use t-distribution** when population variance is unknown (most real situations)
2. **Check degrees of freedom** - always n-1 for single sample
3. **Interpret correctly** - "We are 95% confident the true mean is between..."
4. **Compare intervals** - non-overlapping suggests significant differences

### **🔬 Agricultural Research Applications**
1. **Treatment comparisons** - fertilizer, pesticide, variety trials
2. **Quality control** - product specifications and standards
3. **Yield estimation** - crop production forecasting
4. **Risk assessment** - understanding variability in agricultural systems

---

## 🎯 Agricultural Applications

### **Real-World Scenarios You'll Be Prepared For**:

- **Fertilizer Effectiveness Studies**: Compare crop yields between treated and control plots
- **Variety Trials**: Determine if new crop varieties perform significantly better
- **Quality Control Testing**: Establish confidence intervals for product specifications
- **Pesticide Efficacy Research**: Compare pest control between different treatments
- **Soil Amendment Studies**: Evaluate effects of different soil treatments
- **Irrigation Efficiency**: Compare water use efficiency between irrigation methods

---

## 📧 Need Help?

**Mohammadreza Narimani**  
📧 mnarimani@ucdavis.edu  
🏫 Department of Biological and Agricultural Engineering, UC Davis  
⏰ Office Hours: Thursdays 10 AM - 12 PM (Zoom)

---

## 🔄 What's Next?

**Week 7 Preview**: We'll build on confidence intervals to explore:
- Formal hypothesis testing procedures
- One-sample and two-sample t-tests
- P-values and statistical significance
- Type I and Type II errors in agricultural research

---

*Last updated: November 2024 | PLS 120 - Applied Statistics in Agricultural Sciences | UC Davis*