# 📊 PLS 120 - Week 5: Sampling and Estimation

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/MohammadrezaNarimaniUCDavis/PLS120-Statistics-Lab-Materials/binder-week5)

## 📚 Week 5 Overview: Sampling and Estimation

Welcome to Week 5 of PLS 120! This week focuses on **sampling distributions and statistical estimation**. You'll learn essential skills for understanding how samples relate to populations, calculating confidence intervals, and making statistical inferences in agricultural research.

---

## 🎯 Learning Objectives

By the end of this week, you will be able to:

✅ **Understand Sampling Distributions** - Learn how sample means vary across different samples  
✅ **Apply Central Limit Theorem** - Understand how sample size affects sampling distribution shape  
✅ **Calculate Confidence Intervals** - Estimate population parameters with uncertainty measures  
✅ **Determine Sample Sizes** - Calculate required sample sizes for desired precision  
✅ **Estimate Population Parameters** - Use sample statistics to infer population characteristics  
✅ **Understand Standard Error** - Measure variability in sample statistics  
✅ **Apply Bootstrap Methods** - Use resampling techniques for robust estimation  

---

## 📊 What You'll Learn This Week

### 🎲 **Reproducible Research with set.seed()**
- **Random Number Generation**: Understanding how computers generate "random" numbers
- **Reproducible Results**: Using set.seed() for consistent random sampling
- **Research Integrity**: Ensuring others can replicate your statistical analyses
- **Best Practices**: When and how to use seeds in statistical research

### 📏 **Z-Scores and Standardization**
- **Standardization Process**: Converting raw data to z-scores for comparison
- **Z-Score Formula**: Understanding (x - μ) / σ and its applications
- **Distribution Comparison**: Comparing different datasets using standardized values
- **Outlier Detection**: Using z-scores to identify unusual observations

### 📊 **Normal Distribution Functions**
- **pnorm()**: Calculating cumulative probabilities and areas under curves
- **qnorm()**: Finding quantiles and critical values for confidence intervals
- **Standard Normal Distribution**: Working with mean=0, sd=1 distributions
- **tigerstats Package**: Visual probability functions for better understanding

### 🎯 **Confidence Intervals**
- **Population Parameter Estimation**: Using sample data to estimate population values
- **Margin of Error**: Understanding uncertainty in statistical estimates
- **Confidence Levels**: 90%, 95%, 99% confidence and their interpretations
- **Critical Z-Values**: Finding appropriate z-scores for different confidence levels

### 📏 **Sample Size Calculation**
- **Power Analysis**: Determining adequate sample sizes for research
- **Precision vs Cost**: Balancing statistical precision with practical constraints
- **Formula Application**: Using n = z²p(1-p)/d² for proportion studies
- **Parameter Effects**: How confidence level, margin of error, and prevalence affect sample size

---

## 📁 Week 5 Materials

### 🧪 **Class Activity: Sampling and Estimation**
**File**: `class_activity/Week5_Sampling_Estimation.ipynb`

**Step-by-Step Learning Path**:

1. **set.seed() Function** (15 minutes)
   - Understand reproducible research principles
   - Practice using set.seed() for consistent results
   - Learn when and why to use random seeds

2. **Z-Score Calculations** (25 minutes)
   - Calculate z-scores using (x - μ) / σ formula
   - Standardize data for comparison across datasets
   - Visualize original vs standardized distributions

3. **Normal Distribution Functions** (20 minutes)
   - Use pnorm() to find areas under normal curves
   - Use qnorm() to find critical values and quantiles
   - Practice with tigerstats visualization functions

4. **Confidence Interval Construction** (30 minutes)
   - Calculate z-scores for different confidence levels
   - Build confidence intervals using sample data
   - Interpret confidence intervals in practical contexts

5. **Sample Size Calculations** (25 minutes)
   - Apply sample size formula for proportion studies
   - Understand effects of changing parameters
   - Calculate required sample sizes for research scenarios

6. **Agricultural Applications** (20 minutes)
   - Apply concepts to crop yield estimation
   - Design studies for pesticide effectiveness
   - Calculate sample sizes for quality control

### 📋 **Assignment 5: Sample Size Calculation**
**File**: `assignment/Assignment5.ipynb`  
**Total Points**: 20

**Detailed Assignment Breakdown**:

#### **Question 1: Basic Sample Size Calculation** (6 points)
- **Z-Score Calculation** (1 point)
  - Calculate z-score for 95% confidence level using qnorm()
  - Display and interpret the critical value
- **Sample Size Formula** (1 point)
  - Apply n = z²p(1-p)/d² formula for proportions
  - Round up using ceiling() function
- **Margin of Error Interpretation** (2 points)
  - Explain what 5% margin of error means in practical terms
- **Confidence Interval Understanding** (2 points)
  - Interpret confidence intervals correctly

#### **Question 2: Effect of Prevalence Rate** (5 points)
- **0.5X Prevalence Calculation** (1 point)
  - Calculate sample size for 5% prevalence rate
- **2X Prevalence Calculation** (1 point)
  - Calculate sample size for 20% prevalence rate
- **3X Prevalence Calculation** (1 point)
  - Calculate sample size for 30% prevalence rate
- **Prevalence Effect Analysis** (2 points)
  - Analyze how changing prevalence affects sample size requirements

#### **Question 3: Effect of Margin of Error** (5 points)
- **2.5% Margin Calculation** (2 points)
  - Calculate sample size with tighter precision requirements
- **7.5% Margin Calculation** (1 point)
  - Calculate sample size with looser precision requirements
- **Precision Trade-off Analysis** (2 points)
  - Explain relationship between precision and sample size

#### **Question 4: Effect of Confidence Level** (4 points)
- **90% Confidence Calculation** (2 points)
  - Calculate sample size with lower confidence requirement
- **99% Confidence Calculation** (1 point)
  - Calculate sample size with higher confidence requirement
- **Confidence Effect Analysis** (1 point)
  - Analyze how confidence level affects sample size

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

### **1. Simulated Normal Data** (Class Activity)
- **Source**: Generated using rnorm() function
- **Variables**: Crop yields (bushels per acre)
- **Use**: Learning z-score calculations and standardization
- **Focus**: Understanding distribution shapes and standardization

### **2. Student Study Time Data** (Class Activity)
- **Source**: Hypothetical sample data
- **Variables**: Hours per week, sample statistics
- **Use**: Confidence interval construction
- **Application**: Estimating population parameters from samples

### **3. Public Health Scenarios** (Assignment)
- **Source**: Diabetes prevalence rates and research scenarios
- **Variables**: Prevalence rates, confidence levels, margins of error
- **Use**: Sample size calculation practice
- **Challenge**: Understanding parameter trade-offs in study design

---

## 🛠️ Key R Functions You'll Master

### **Reproducible Research**
```r
# Set random seed for reproducibility
set.seed(123)  # any integer works
sample(nrow(data), 10)  # consistent results
```

### **Z-Score Calculations**
```r
# Standardize data
z_scores <- (data - mean(data)) / sd(data)

# Check standardization
mean(z_scores)  # should be ~0
sd(z_scores)    # should be ~1
```

### **Normal Distribution Functions**
```r
# Calculate probabilities (areas)
pnorm(z_value)  # P(Z ≤ z)

# Find critical values (quantiles)
qnorm(0.975)  # 97.5th percentile for 95% CI
qnorm(1 - alpha/2)  # general formula
```

### **Confidence Intervals**
```r
# Confidence interval formula
lower <- sample_mean - z_score * (sample_sd / sqrt(n))
upper <- sample_mean + z_score * (sample_sd / sqrt(n))

# Margin of error
margin_error <- z_score * (sample_sd / sqrt(n))
```

### **Sample Size Calculation**
```r
# Sample size for proportions
n <- (z_score^2 * p * (1 - p)) / (margin_error^2)
ceiling(n)  # round up to whole number

# Critical z-values
z_90 <- qnorm(0.95)   # 90% confidence
z_95 <- qnorm(0.975)  # 95% confidence
z_99 <- qnorm(0.995)  # 99% confidence
```

---

## 💡 Pro Tips for Success

### **🎲 Reproducible Research Strategy**
1. **Always use set.seed()** before any random number generation
2. **Document your seed value** in research reports for transparency
3. **Use consistent seeds** across related analyses
4. **Choose memorable seeds** (like 123, 2025) for easy reference

### **📏 Confidence Interval Best Practices**
1. **Choose appropriate confidence levels** - 95% is standard, 99% for critical decisions
2. **Interpret intervals correctly** - "We are 95% confident the true value is between..."
3. **Consider practical significance** - statistical significance ≠ practical importance
4. **Report both point estimates and intervals** for complete information

### **📊 Sample Size Planning Strategy**
1. **Plan sample size before data collection** - not after seeing results
2. **Balance precision with resources** - smaller margins require larger samples
3. **Consider population characteristics** - prevalence affects required sample size
4. **Account for non-response** - collect more than calculated minimum

---

## 🎯 Agricultural Applications

### **Real-World Scenarios You'll Be Prepared For**:

- **Crop Yield Estimation**: Use confidence intervals to estimate average yields per acre
- **Pesticide Effectiveness Studies**: Calculate required sample sizes for treatment comparisons
- **Quality Control Programs**: Determine sampling frequencies for product testing
- **Field Trial Design**: Plan adequate sample sizes for detecting treatment effects
- **Organic Certification Surveys**: Estimate proportion of farms meeting organic standards
- **Agricultural Insurance**: Assess risk levels using statistical estimation methods

---

## 📧 Need Help?

**Mohammadreza Narimani**  
📧 mnarimani@ucdavis.edu  
🏫 Department of Biological and Agricultural Engineering, UC Davis  
⏰ Office Hours: Thursdays 10 AM - 12 PM (Zoom)

---

## 🔄 What's Next?

**Week 6 Preview**: We'll build on this week's estimation foundations to explore:
- Hypothesis testing and p-values
- t-tests for comparing means
- Type I and Type II errors
- Statistical decision-making in agricultural research

---

*Last updated: October 2025 | PLS 120 - Applied Statistics in Agricultural Sciences | UC Davis*