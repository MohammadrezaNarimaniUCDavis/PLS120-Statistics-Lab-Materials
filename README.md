# 🌾 PLS 120: Applied Statistics in Agriculture
## Week 2: Descriptive Statistics and Central Tendency

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/MohammadrezaNarimaniUCDavis/PLS120-Statistics-Lab-Materials/binder-week2)

**Welcome to Week 2!** This week, we explore **descriptive statistics** and **measures of central tendency** - essential tools for summarizing and understanding data in agricultural research.

---

## 📊 What You'll Learn This Week

### Measures of Central Tendency
Understanding where the "center" of your data lies:

- **Mean (μ or x̄)** - The arithmetic average
  - Formula: `μ = Σx / n`
  - Sensitive to outliers
  - Most commonly used measure

- **Median** - The middle value when data is ordered
  - Less affected by outliers
  - Better for skewed distributions

- **Mode** - The most frequently occurring value
  - Useful for categorical data
  - Can have multiple modes

### Measures of Variability
Understanding how spread out your data is:

- **Variance (σ²)** - Average squared deviation from the mean
  - Formula: `σ² = Σ(x - μ)² / n`
  - Units are squared

- **Standard Deviation (σ)** - Square root of variance
  - Formula: `σ = √(σ²)`
  - Same units as original data
  - Most interpretable measure of spread

- **Coefficient of Variation (CV)** - Relative variability
  - Formula: `CV = (σ / μ) × 100%`
  - Allows comparison across different scales

### Quantiles and Percentiles
Understanding data distribution:

- **Quartiles** - Divide data into four equal parts
  - Q1 (25th percentile)
  - Q2 (50th percentile = median)
  - Q3 (75th percentile)
  - Interquartile Range (IQR) = Q3 - Q1

---

## 🚀 Getting Started

### Step 1: Launch Binder 🌐

Click the **"Launch Binder"** button above. This will take **2-5 minutes** to load your R environment.

### Step 2: Navigate to Materials 📚

Once Binder loads, you'll see:
- `assignment/` - Assignment 2 on descriptive statistics
- `class_activity/` - Week 2 lab tutorial

### Step 3: Start with Class Activity 📖

Open `class_activity/Week2_Descriptive_Statistics.ipynb` to begin the tutorial.

---

## 📝 This Week's Materials

### Class Activity: Week2_Descriptive_Statistics.ipynb
Interactive tutorial covering:
- Loading and examining the iris dataset
- Calculating mean, median, and mode
- Computing variance and standard deviation
- Finding quantiles
- Understanding data dimensions with `nrow()` and `ncol()`

### Assignment 2: Central Tendency Analysis
Apply your knowledge to the LA crime dataset:
- Calculate measures of central tendency for different subgroups
- Compare male vs. female victim statistics
- Analyze variability across datasets
- Interpret quantiles and draw inferences

**Total Points:** 20 points

---

## 🧮 Key R Functions This Week

### Summary Statistics
```r
summary(data)          # Comprehensive summary
mean(data$column)      # Calculate mean
median(data$column)    # Calculate median
var(data$column)       # Calculate variance
sd(data$column)        # Calculate standard deviation
quantile(data$column)  # Calculate quantiles
```

### Data Exploration
```r
head(data)             # First 6 rows
str(data)              # Data structure
nrow(data)             # Number of rows
ncol(data)             # Number of columns
```

### Custom Functions
```r
# Mode function (not built-in)
Mode <- function(x) {
  ux <- unique(x)
  ux[which.max(tabulate(match(x, ux)))]
}
```

---

## 💾 Saving Your Work

**⚠️ Important:** Binder environments are temporary!

### Before Closing Binder:
1. **Save your notebook:** File → Save
2. **Download .ipynb file:** File → Download
3. **Export HTML/PDF:** File → Save and Export Notebook As → HTML

### To Continue Later:
1. Launch Binder again
2. Click **Upload** button
3. Upload your saved `.ipynb` file
4. Continue where you left off!

---

## 📤 Assignment Submission

Submit **TWO files** to UC Davis Canvas:

1. **📄 HTML or PDF Report** - Your completed assignment with all outputs
2. **💾 .ipynb File** - Your notebook code as backup

**Due Date:** Check Canvas for deadline

---

## 🎯 Learning Objectives

By the end of this week, you will be able to:

✅ Calculate and interpret mean, median, and mode  
✅ Understand when to use each measure of central tendency  
✅ Compute variance, standard deviation, and coefficient of variation  
✅ Interpret measures of variability in context  
✅ Use quantiles to understand data distribution  
✅ Compare statistics across different subgroups  
✅ Make data-driven inferences about populations  

---

## 📊 Why This Matters in Agriculture

Descriptive statistics are fundamental in agricultural research:

- **Crop Yields:** Compare mean yields across varieties
- **Soil Properties:** Understand variability in soil nutrients
- **Weather Data:** Analyze temperature and rainfall patterns
- **Pest Populations:** Track changes in pest abundance
- **Quality Control:** Monitor consistency in agricultural products

Understanding central tendency and variability helps you:
- Summarize large datasets efficiently
- Identify typical values and outliers
- Compare different treatments or groups
- Make informed management decisions

---

## 🌟 Tips for Success

### 💡 Best Practices

- **Understand the concepts** - Don't just calculate, interpret!
- **Compare measures** - How do mean, median, and mode differ?
- **Consider context** - What do the numbers tell you about the real world?
- **Check your work** - Do your results make sense?
- **Use hints wisely** - They guide you to the solution

### ⚡ Keyboard Shortcuts

- **Shift + Enter** - Run current cell and move to next
- **Ctrl + Enter** - Run current cell and stay in place
- **A** - Insert cell above
- **B** - Insert cell below
- **DD** - Delete current cell

---

## ❓ Need Help?

### 📧 Contact Information

**Mohammadreza Narimani**  
📧 mnarimani@ucdavis.edu  
🏫 Department of Biological and Agricultural Engineering, UC Davis

### 🔧 Common Issues

- **Binder won't load?** Try refreshing or clearing browser cache
- **Code error?** Check that you've run all previous cells in order
- **Lost work?** Always download files before closing Binder
- **Function not working?** Use `?function_name` for help documentation

### 📚 Additional Resources

- **R Documentation:** Type `?function_name` in any code cell
- **Course Materials:** All tutorials in `class_activity/` folder
- **Practice:** Experiment with the iris dataset to reinforce learning

---

## 🎉 Ready to Start?

Click the Binder badge at the top of this page to launch Week 2!

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/MohammadrezaNarimaniUCDavis/PLS120-Statistics-Lab-Materials/binder-week2)

**Happy analyzing! 📊🌾**

---

*Last updated: October 2025 | PLS 120 - Applied Statistics in Agriculture | UC Davis*
*Week 2: Descriptive Statistics and Central Tendency*
