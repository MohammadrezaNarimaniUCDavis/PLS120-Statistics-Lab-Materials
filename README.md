# 🌾 PLS 120 - Week 3: Data Manipulation with dplyr

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/MohammadrezaNarimaniUCDavis/PLS120-Statistics-Lab-Materials/binder-week3)

## 📚 Week 3 Overview: Data Manipulation and Visualization

Welcome to Week 3 of PLS 120! This week focuses on **data manipulation using dplyr** and **data visualization techniques**. You'll learn essential skills for organizing, cleaning, and visualizing agricultural data using the tidyverse ecosystem.

---

## 🎯 Learning Objectives

By the end of this week, you will be able to:

✅ **Master Data Subsetting** - Use brackets, indices, and logical conditions to extract specific data  
✅ **Apply dplyr Functions** - Use filter(), select(), slice(), arrange(), mutate(), and group_by()  
✅ **Chain Operations** - Connect multiple data manipulation steps using pipes (%>%)  
✅ **Select Columns Efficiently** - Use starts_with(), ends_with(), contains(), and matches()  
✅ **Clean Real-World Data** - Handle non-numeric values and missing data  
✅ **Create Visualizations** - Generate histograms, boxplots, scatter plots, and stem-and-leaf plots  
✅ **Interpret Data Patterns** - Analyze distributions, outliers, and central tendency measures  

---

## 📊 What You'll Learn This Week

### 🔍 **Data Manipulation Fundamentals**
- **Basic Subsetting**: Using `[row, column]` notation to extract specific data points
- **Logical Filtering**: Creating subsets based on conditions (e.g., species, gender, age ranges)
- **Row Operations**: Using `slice()`, `slice_head()`, `slice_tail()`, and `slice_sample()`
- **Column Selection**: Choosing specific variables with `select()` and helper functions

### 🔗 **The Power of Pipes (%>%)**
- **Chaining Operations**: Connect multiple data manipulation steps in a readable workflow
- **Readable Code**: Write code that reads like natural language ("take data, then filter, then select")
- **Efficient Workflows**: Combine filtering, selecting, and summarizing in single operations

### 🛠️ **Advanced dplyr Functions**
- **arrange()**: Sort data by one or more variables (ascending/descending)
- **rename()**: Change column names for clarity and consistency
- **mutate()**: Create new variables or transform existing ones
- **group_by() + summarize()**: Calculate statistics for different groups in your data

### 📈 **Data Visualization Techniques**
- **Base R Plots**: Create quick visualizations using built-in plotting functions
- **ggplot2 Graphics**: Build professional, publication-ready plots with layered grammar
- **Histogram Analysis**: Understand data distributions and identify patterns
- **Boxplot Comparisons**: Compare groups and identify outliers
- **Stem-and-Leaf Plots**: Examine data distribution details and estimate central tendency

### 🧹 **Real-World Data Cleaning**
- **Handle Non-Numeric Data**: Remove or convert problematic characters in datasets
- **Missing Value Treatment**: Identify and handle NA values appropriately
- **Data Type Conversion**: Ensure variables are in the correct format for analysis
- **Quality Control**: Verify data integrity after cleaning operations

---

## 📁 Week 3 Materials

### 🧪 **Class Activity: Data Manipulation with dplyr**
**File**: `class_activity/Week3_Data_Manipulation.ipynb`

**Step-by-Step Learning Path**:

1. **Getting Started** (15 minutes)
   - Load tidyverse and dplyr packages
   - Import and examine the iris dataset
   - Understand data structure with `head()` and `str()`

2. **Basic Data Subsetting** (20 minutes)
   - Learn bracket notation: `data[row, column]`
   - Extract specific rows, columns, and ranges
   - Practice with different subsetting patterns

3. **Filtering and Slicing** (25 minutes)
   - Use `filter()` to create species-specific subsets
   - Apply `slice()` functions for row-based selection
   - Compare `filter()` vs `subset()` approaches

4. **Column Selection Mastery** (20 minutes)
   - Select columns by name and position
   - Use helper functions: `starts_with()`, `ends_with()`, `contains()`
   - Combine row and column operations

5. **Data Manipulation Functions** (25 minutes)
   - Sort data with `arrange()` and `desc()`
   - Rename columns for clarity
   - Create new variables with `mutate()`

6. **Grouping and Summarizing** (20 minutes)
   - Group data by categorical variables
   - Calculate summary statistics for each group
   - Create comprehensive data summaries

7. **Data Visualization** (30 minutes)
   - Build histograms, boxplots, and scatter plots
   - Compare base R vs ggplot2 approaches
   - Customize plots with colors, labels, and themes

### 📋 **Assignment 3: Data Visualization and Analysis**
**File**: `assignment/Assignment3.ipynb`  
**Total Points**: 20

**Detailed Assignment Breakdown**:

#### **PART ONE: LA Crime Data Analysis** (6 points)
- **Load and Filter Data** (2 points)
  - Import LA_Data.csv using `read.csv()`
  - Create male and female victim subsets using `filter()`
- **Data Verification** (1 point)
  - Check subset sizes with `nrow()`
- **Boxplot Creation** (2 points)
  - Compare age distributions between genders
  - Add appropriate titles and labels
- **Statistical Interpretation** (1 point)
  - Analyze median differences and variability patterns

#### **PART TWO: SAT Dataset Processing** (9 points)
- **Data Import and Inspection** (2 points)
  - Load SAT_DATASET_2012.csv
  - Examine data structure and types
- **Random Sampling** (2 points)
  - Create 80-row random subset using `sample()`
  - Understand sampling without replacement
- **Data Cleaning** (2 points)
  - Remove non-numeric characters with `str_replace_all()`
  - Handle missing values with `na.omit()`
- **Column Extraction** (2 points)
  - Extract SAT Math scores using `subset()`
- **Data Verification** (1 point)
  - Examine cleaned data with `head()` and `nrow()`

#### **PART THREE: Distribution Analysis** (5 points)
- **Stem-and-Leaf Plot** (2 points)
  - Create detailed stem-and-leaf visualization
  - Use appropriate scale and formatting parameters
- **Statistical Analysis** (3 points)
  - Identify distribution shape and patterns
  - Detect and locate outliers
  - Estimate central tendency measures
  - Compare mean, median, and mode relationships

---

## 🚀 Getting Started

### **Option 1: Launch Binder (Recommended)**
Click the Binder badge above to launch an interactive R environment with all packages pre-installed.

### **Option 2: Local Setup**
If you prefer to work locally:
```r
# Install required packages
install.packages(c("tidyverse", "ggplot2", "dplyr", "stringr"))

# Load packages
library(tidyverse)
library(ggplot2)
library(stringr)
```

---

## 📊 Datasets Used This Week

### **1. Iris Dataset** (Class Activity)
- **Source**: Built-in R dataset
- **Variables**: Sepal/Petal measurements, Species
- **Use**: Learning data manipulation techniques
- **Size**: 150 observations, 5 variables

### **2. LA Crime Data** (Assignment)
- **Source**: Los Angeles crime statistics
- **Variables**: Victim demographics, crime details
- **Use**: Filtering and visualization practice
- **Focus**: Age distribution by gender

### **3. SAT Dataset 2012** (Assignment)
- **Source**: School SAT performance data
- **Variables**: Math, Reading, Writing scores
- **Use**: Data cleaning and stem-and-leaf analysis
- **Challenge**: Contains non-numeric values requiring cleaning

---

## 🛠️ Key R Functions You'll Master

### **Data Manipulation**
```r
# Filtering and subsetting
filter(data, condition)
slice(data, rows)
select(data, columns)
subset(data, condition, select = columns)

# Data transformation
arrange(data, variable)
mutate(data, new_var = expression)
rename(data, new_name = old_name)

# Grouping and summarizing
group_by(data, grouping_var)
summarize(data, stat = function(variable))
```

### **Data Visualization**
```r
# Base R plotting
hist(data$variable)
boxplot(variable ~ group, data = data)
plot(x, y)

# ggplot2 graphics
ggplot(data, aes(x = var1, y = var2)) + geom_point()
ggplot(data, aes(x = variable)) + geom_histogram()
ggplot(data, aes(x = group, y = variable)) + geom_boxplot()
```

### **Data Cleaning**
```r
# String manipulation
str_replace_all(text, pattern, replacement)
as.integer(character_vector)

# Missing value handling
na.omit(data)
is.na(data)
```

---

## 💡 Pro Tips for Success

### **🔍 Data Exploration Strategy**
1. **Always start with `head()` and `str()`** to understand your data structure
2. **Check data dimensions** with `nrow()` and `ncol()` before and after operations
3. **Verify your filters** by examining subset sizes and characteristics
4. **Use `summary()`** to get quick statistical overviews

### **📊 Visualization Best Practices**
1. **Add meaningful titles and labels** to all plots
2. **Choose appropriate colors** that are colorblind-friendly
3. **Consider your audience** when selecting plot types
4. **Always interpret your visualizations** in context

### **🧹 Data Cleaning Workflow**
1. **Examine raw data first** to understand what needs cleaning
2. **Document your cleaning steps** for reproducibility
3. **Verify cleaning results** by checking data types and ranges
4. **Keep original data intact** while creating cleaned versions

---

## 🎯 Agricultural Applications

### **Real-World Scenarios You'll Be Prepared For**:

- **Crop Yield Analysis**: Filter data by variety, location, or growing season
- **Soil Sample Processing**: Clean laboratory data with mixed numeric/text values
- **Weather Data Visualization**: Create plots showing temperature and precipitation patterns
- **Livestock Performance**: Compare growth rates across different feed treatments
- **Field Trial Analysis**: Subset experimental data by treatment groups
- **Quality Control**: Identify outliers in product measurements using stem-and-leaf plots

---

## 📧 Need Help?

**Mohammadreza Narimani**  
📧 mnarimani@ucdavis.edu  
🏫 Department of Biological and Agricultural Engineering, UC Davis  
⏰ Office Hours: Thursdays 10 AM - 12 PM (Zoom)

---

## 🔄 What's Next?

**Week 4 Preview**: We'll build on this week's data manipulation skills to explore:
- Advanced statistical analysis
- Hypothesis testing fundamentals  
- Correlation and regression analysis
- Statistical inference in agricultural research

---

*Last updated: October 2025 | PLS 120 - Applied Statistics in Agricultural Sciences | UC Davis*