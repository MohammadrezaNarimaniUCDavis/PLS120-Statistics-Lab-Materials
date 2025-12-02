# 🌾 PLS 120: Applied Statistics in Agricultural Sciences
_Interactive R Programming with Binder - No Installation Required!_

[![Live Site](https://img.shields.io/badge/GitHub%20Pages-live-blue)](https://mohammadrezanarimaniucdavis.github.io/PLS120-Statistics-Lab-Materials/)
[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/MohammadrezaNarimaniUCDavis/PLS120-Statistics-Lab-Materials/binder-week1)
[![License: MIT](https://img.shields.io/badge/license-MIT-green)](#license)

Interactive course website and learning materials for **PLS 120: Applied Statistics in Agricultural Sciences** offered by the University of California, Davis.  
The goal is to provide a comprehensive, modern learning platform using **Binder** for cloud-based R programming - no software installation required!

---

## 🎯 Course Information

**Instructor:** Mohsen B. Mesgaran (mbmesgaran@ucdavis.edu)  
**Teaching Assistant:** Mohammadreza Narimani (mnarimani@ucdavis.edu)  
**Location:** Teaching and Learning Complex 1010  
**Lab Sessions:** TLC 2212 & 2216  

### 📚 Course Objectives
- **Acquire Fundamental Competencies:** Essential skills in data collection, organization, analysis, visualization, and interpretation
- **Develop Statistical Reasoning:** Comprehensive understanding of statistical thinking and reasoning for data analysis

---

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| 🌐 **Binder Integration** | Cloud-based R environment - no installation required! |
| 📱 **Responsive Design** | Works on any device with modern web browser |
| 🌓 **Light / Dark Theme** | One-click theme toggle with preference storage |
| 📊 **Interactive Learning** | Jupyter notebooks with step-by-step tutorials |
| 🔒 **Progressive Content** | Weeks 1-8 available, additional weeks coming soon |
| 📝 **Assignment System** | Integrated homework with HTML/PDF export |
| 🎯 **Agricultural Focus** | Real-world statistical applications in agriculture |
| 📚 **Complete Resources** | Syllabus, FAQ, resources, and help materials |

---

## 🚀 Quick Access

### 🌐 Course Website
**All course materials:** https://mohammadrezanarimaniucdavis.github.io/PLS120-Statistics-Lab-Materials/

### 💻 Interactive R Environment
**Week 1 - Introduction:** https://mybinder.org/v2/gh/MohammadrezaNarimaniUCDavis/PLS120-Statistics-Lab-Materials/binder-week1

**Week 2 - Descriptive Statistics:** https://mybinder.org/v2/gh/MohammadrezaNarimaniUCDavis/PLS120-Statistics-Lab-Materials/binder-week2

**Week 3 - Data Manipulation:** https://mybinder.org/v2/gh/MohammadrezaNarimaniUCDavis/PLS120-Statistics-Lab-Materials/binder-week3

**Week 4 - Probability and Sampling:** https://mybinder.org/v2/gh/MohammadrezaNarimaniUCDavis/PLS120-Statistics-Lab-Materials/binder-week4

**Week 5 - Sampling and Estimation:** https://mybinder.org/v2/gh/MohammadrezaNarimaniUCDavis/PLS120-Statistics-Lab-Materials/binder-week5

**Week 6 - Confidence Intervals:** https://mybinder.org/v2/gh/MohammadrezaNarimaniUCDavis/PLS120-Statistics-Lab-Materials/binder-week6

**Week 7 - Functions and T-Tests:** https://mybinder.org/v2/gh/MohammadrezaNarimaniUCDavis/PLS120-Statistics-Lab-Materials/binder-week7

**Week 8 - Hypothesis Testing and Statistical Analysis:** https://mybinder.org/v2/gh/MohammadrezaNarimaniUCDavis/PLS120-Statistics-Lab-Materials/binder-week8

**Week 9 - Tree Age Estimation Methods:** https://mybinder.org/v2/gh/MohammadrezaNarimaniUCDavis/PLS120-Statistics-Lab-Materials/binder-week9

**R Statistical Playground (Explore & Experiment):** https://mybinder.org/v2/gh/MohammadrezaNarimaniUCDavis/PLS120-Statistics-Lab-Materials/binder-playground

---

## 🔧 Project Structure

```
├── index.html              # main website file
├── css/
│   └── styles.css          # all styling
├── js/
│   └── main.js             # all functionality
├── pages/                  # course content pages
│   ├── syllabus.html       # complete course syllabus
│   ├── resources.html      # learning resources
│   ├── faq.html           # frequently asked questions
│   ├── week1.html         # week 1 materials
│   ├── week2.html         # week 2 materials
│   ├── week3.html         # week 3 materials
│   ├── week4.html         # week 4 materials
│   ├── week5.html         # week 5 materials
│   ├── week6.html         # week 6 materials
│   ├── week7.html         # week 7 materials
│   └── week8.html         # week 8 materials
├── assets/                 # images and media
│   ├── images/
│   │   ├── logos/         # UC Davis logos
│   │   └── people/        # instructor photos
│   ├── Week_1/            # week 1 specific materials
│   │   ├── Image_*.png    # tutorial screenshots
│   │   ├── README.md      # binder tutorial
│   │   └── pdf/           # LaTeX/PDF materials
│   ├── Week_2/            # week 2 specific materials
│   │   └── pdf/           # LaTeX/PDF materials
│   ├── Week_3/            # week 3 specific materials
│   │   └── pdf/           # LaTeX/PDF materials
│   ├── Week_4/            # week 4 specific materials
│   │   └── pdf/           # LaTeX/PDF materials
│   ├── Week_5/            # week 5 specific materials
│   │   └── pdf/           # LaTeX/PDF materials
│   ├── Week_6/            # week 6 specific materials
│   │   └── pdf/           # LaTeX/PDF materials
│   ├── Week_7/            # week 7 specific materials
│   │   └── pdf/           # LaTeX/PDF materials
│   ├── Week_8/            # week 8 specific materials
│   │   └── pdf/           # LaTeX/PDF materials
│   └── Playground/       # R statistical playground materials
│       └── pdf/           # LaTeX/PDF tutorial
├── assignment/            # homework assignments
│   ├── Assignment1.ipynb  # week 1 assignment
│   ├── Assignment2.ipynb  # week 2 assignment
│   ├── Assignment3.ipynb  # week 3 assignment
│   ├── Assignment4.ipynb  # week 4 assignment
│   ├── Assignment5.ipynb  # week 5 assignment
│   ├── Assignment6.ipynb  # week 6 assignment
│   ├── Assignment7.ipynb  # week 7 assignment
│   ├── Assignment8.ipynb  # week 8 assignment
│   ├── before_after.csv  # biodiversity wildfire dataset
│   ├── LA_Data.csv       # statistics dataset
│   ├── SAT_DATASET_2012.csv # SAT performance dataset
│   └── wheat_yield.csv   # wheat yield dataset
├── class_activity/        # interactive tutorials
│   ├── Week1_Introduction.ipynb
│   ├── Week2_Descriptive_Statistics.ipynb
│   ├── Week3_Data_Manipulation.ipynb
│   ├── Week4_Probability_Sampling.ipynb
│   ├── Week5_Sampling_Estimation.ipynb
│   ├── Week6_Confidence_Intervals.ipynb
│   ├── Week7_Regression_Analysis.ipynb
│   ├── Week8_Correlation_Analysis.ipynb
│   └── Paired_Agricultural_Yield.csv
└── README.md             # you're reading it!
```

---

## 📚 Course Content

### 🗓️ Weekly Schedule
1. **Week 1**: Introduction to Statistics ✅ *Available*
   - Overview of statistics and applications
   - Data types and measurement levels
   - Introduction to R with Binder
   - Basic data manipulation and visualization

2. **Week 2**: Descriptive Statistics ✅ *Available*
   - Measures of central tendency (mean, median, mode)
   - Measures of variability (variance, standard deviation)
   - Quantiles and data distribution
   - Coefficient of variation
   - Interactive statistical analysis with R

3. **Week 3**: Data Manipulation with dplyr ✅ *Available*
   - Data subsetting and filtering techniques
   - Using pipes (%>%) for readable workflows
   - Column selection with helper functions
   - Data transformation and cleaning
   - Grouping and summarizing data
   - Data visualization with ggplot2

4. **Week 4**: Probability and Sampling ✅ *Available*
   - Logical variables and data type conversions
   - Random sampling techniques with sample() function
   - Probability simulation (coins, dice)
   - Normal distribution functions (rnorm, pnorm, qnorm)
   - Experimental vs theoretical probability
   - Data visualization for probability distributions

5. **Week 5**: Sampling and Estimation ✅ *Available*
   - Central Limit Theorem and sampling distributions
   - Standard error and sampling variability
   - Point estimation vs interval estimation
   - Bootstrap sampling techniques
   - Sampling distribution visualization
   - Real-world sampling applications

6. **Week 6**: Confidence Intervals ✅ *Available*
   - Understanding confidence intervals and interpretation
   - Z-score calculations and critical values
   - Confidence intervals for population means
   - Margin of error calculations
   - Comparing confidence intervals between groups
   - Agricultural data analysis with confidence intervals

7. **Week 7**: Functions and T-Tests ✅ *Available*
   - Creating custom functions in R for reusable code
   - Function parameters, body, and return values
   - Sample size calculation functions
   - Two-sample t-tests for group comparisons
   - Hypothesis formation and testing
   - Welch's t-test for unequal variances
   - One-sided vs two-sided tests
   - Agricultural treatment comparison analysis

8. **Week 8**: Hypothesis Testing and Statistical Analysis ✅ *Available*
   - One-sample t-tests using multiple methods
   - Two-sample t-tests (independent and paired)
   - Paired t-tests for before/after analysis
   - Chi-square tests for categorical data
   - Critical value vs p-value methods
   - Environmental and biodiversity applications
   - Wildfire impact analysis using statistical testing
   - Understanding analysis limitations

9. **Week 9**: Tree Age Estimation Methods ✅ *Available*
   - Confidence intervals for means
   - Method comparison techniques
   - Independent vs paired t-tests
   - Statistical decision-making
   - Manual calculations and R functions
   - Complete solutions provided

10. **Week 10**: 🔒 *Coming Soon*
   - ANOVA and Multiple Comparisons
   - Regression Analysis

### 📋 Assessment
- **Mid-term Exam:** 100 points (22.2%)
- **Weekly Assignments:** 200 points (44.4%) - 10 assignments @ 20 points each
- **Final Assessment:** 150 points (33.3%)
  - **Traditional Final Exam**
- **Total:** 450 points

---

## 🛠️ Technology Stack

### 🌐 No Installation Required!
- **Binder:** Cloud-based R environment
- **Jupyter Notebooks:** Interactive coding and documentation
- **Pre-installed Packages:** tidyverse, ggplot2, dplyr, knitr

### 💻 Optional Local Setup
```r
# If you prefer local R installation
install.packages(c("ggplot2", "dplyr", "tidyr", "readr", 
                   "knitr", "rmarkdown"))
```

---

## 🎯 Learning Outcomes

By completing this course, students will be able to:
- Apply fundamental statistical concepts to agricultural research problems
- Use cloud-based R programming for data analysis (via Binder)
- Create frequency tables, histograms, and statistical visualizations
- Interpret statistical results and communicate findings effectively
- Complete assignments using Jupyter notebooks with HTML/PDF export
- Understand data types, variables, and basic statistical reasoning

---

## 📖 Getting Started

### For Students:
1. **Visit the course website:** [Course Materials](https://mohammadrezanarimaniucdavis.github.io/PLS120-Statistics-Lab-Materials/)
2. **Launch Interactive Environment:**
   - [Week 1 - Introduction](https://mybinder.org/v2/gh/MohammadrezaNarimaniUCDavis/PLS120-Statistics-Lab-Materials/binder-week1)
   - [Week 2 - Descriptive Statistics](https://mybinder.org/v2/gh/MohammadrezaNarimaniUCDavis/PLS120-Statistics-Lab-Materials/binder-week2)
   - [Week 3 - Data Manipulation](https://mybinder.org/v2/gh/MohammadrezaNarimaniUCDavis/PLS120-Statistics-Lab-Materials/binder-week3)
   - [Week 4 - Probability and Sampling](https://mybinder.org/v2/gh/MohammadrezaNarimaniUCDavis/PLS120-Statistics-Lab-Materials/binder-week4)
   - [Week 5 - Sampling and Estimation](https://mybinder.org/v2/gh/MohammadrezaNarimaniUCDavis/PLS120-Statistics-Lab-Materials/binder-week5)
   - [Week 6 - Confidence Intervals](https://mybinder.org/v2/gh/MohammadrezaNarimaniUCDavis/PLS120-Statistics-Lab-Materials/binder-week6)
   - [Week 7 - Functions and T-Tests](https://mybinder.org/v2/gh/MohammadrezaNarimaniUCDavis/PLS120-Statistics-Lab-Materials/binder-week7)
   - [Week 8 - Hypothesis Testing and Statistical Analysis](https://mybinder.org/v2/gh/MohammadrezaNarimaniUCDavis/PLS120-Statistics-Lab-Materials/binder-week8)
   - [Week 9 - Tree Age Estimation Methods](https://mybinder.org/v2/gh/MohammadrezaNarimaniUCDavis/PLS120-Statistics-Lab-Materials/binder-week9)
   - [R Statistical Playground](https://mybinder.org/v2/gh/MohammadrezaNarimaniUCDavis/PLS120-Statistics-Lab-Materials/binder-playground) (Explore & Experiment)
3. **No software installation needed!**

### For Developers:
```bash
# Clone the repository
git clone https://github.com/MohammadrezaNarimaniUCDavis/PLS120-Statistics-Lab-Materials.git
cd PLS120-Statistics-Lab-Materials

# Serve locally
python -m http.server 8000
# Visit http://localhost:8000
```

---

## 📧 Need Help?

### 📧 Contact Information
**Mohammadreza Narimani** (Teaching Assistant)  
📧 mnarimani@ucdavis.edu  
🏫 Department of Biological and Agricultural Engineering, UC Davis  
⏰ Office Hours: Thursdays 10 AM - 12 PM (Zoom)  
🔗 [Join Zoom Office Hours](https://ucdavis.zoom.us/j/99533096447)

### 🔧 Technical Support
- **Binder Issues:** Try refreshing page or clearing browser cache
- **Assignment Help:** Use Canvas discussion forum or office hours
- **Course Questions:** Check FAQ page or contact TA

---

## 🤝 Contributing

1. **Fork** the repository
2. **Create** your feature branch (`git checkout -b feature/new-content`)
3. **Commit** your changes (`git commit -m 'Add new tutorial content'`)
4. **Push** to the branch (`git push origin feature/new-content`)
5. **Open a Pull Request**

---

## 📜 License

© 2025 Mohammadreza Narimani, Personal Teaching Website  
Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 🙏 Acknowledgements

* **Mohsen B. Mesgaran** – Course Instructor
* **UC Davis Plant Sciences Department** – Course host
* **Binder Project** – Cloud-based computing environment
* **R Core Team** – R statistical computing environment
* **Jupyter Project** – Interactive notebook platform
* **GitHub Pages** – Free static site hosting

---

*Last updated: November 2024 | PLS 120 - Applied Statistics in Agricultural Sciences | UC Davis*