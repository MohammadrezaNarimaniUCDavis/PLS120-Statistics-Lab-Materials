# PLS 120 – Applied Statistics in Agriculture  
_Statistical Methods and Data Analysis for Plant Sciences_

[![Live Site](https://img.shields.io/badge/GitHub%20Pages-live-blue)](https://mohammadrezanarimaniucdavis.github.io/PLS120-Statistics-Lab-Materials/)
[![License: MIT](https://img.shields.io/badge/license-MIT-green)](#license)

Interactive course website and learning materials for **PLS 120: Applied Statistics in Agriculture** offered by the University of California, Davis (Plant Sciences Department).  
The goal is to provide a comprehensive, modern learning platform that guides students through statistical concepts and their applications in agricultural research.

---

## ✨ Key Features
| Feature | Description |
|---------|-------------|
| 📑 **Modular Architecture** | Separated HTML, CSS, and JavaScript files for professional maintainability. |
| 🌓 **Light / Dark Theme** | One‑click theme toggle with preference stored in `localStorage`. |
| 🖨️ **Print / PDF‑ready** | "Download as PDF" button isolates the current section and triggers `window.print()` for clean exports. |
| 📝 **Markdown Export** | "Download as MD" converts the visible section to Markdown and downloads it as a file. |
| 📱 **Responsive Design** | Collapsible sidebar and mobile dropdown keep navigation usable on any screen size. |
| 📊 **Progressive Learning** | 10 weeks of structured content with tutorials, activities, and homework assignments. |
| 🔬 **R Integration** | Comprehensive R/RStudio tutorials and statistical computing exercises. |
| 📚 **Course Materials** | Syllabus, resources, FAQ, and all weekly content organized professionally. |
| 🚀 **Dynamic Loading** | JavaScript dynamically loads page content without page refreshes. |
| 🌾 **Agricultural Focus** | Real-world statistical applications in plant sciences and agricultural research. |

---

## 🚀 Live Demo
The production build is automatically published via GitHub Pages:  
<https://mohammadrezanarimaniucdavis.github.io/PLS120-Statistics-Lab-Materials/>

---

## 🖥️ Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/MohammadrezaNarimaniUCDavis/PLS120-Statistics-Lab-Materials.git
cd PLS120-Statistics-Lab-Materials

# 2. Serve locally (Python 3)
python -m http.server 8000
# then visit http://localhost:8000 in your browser
```

_No dependencies are required—any static file server (or just opening `index.html`) will work._

---

## 🔧 Project Structure
```
├── index.html              # main website file
├── css/
│   └── styles.css          # all styling
├── js/
│   └── main.js             # all functionality
├── pages/                  # individual page content
│   ├── syllabus.html
│   ├── resources.html
│   ├── faq.html
│   └── week1-week10.html   # weekly materials
├── assets/                 # images and media
│   └── images/
│       ├── logos/
│       └── people/         # instructor photos
└── README.md               # you're reading it!
```

---

## 📚 Course Overview

The course introduces statistical methods essential for agricultural and plant science research using **R/RStudio** for data analysis. Students progress through hands-on tutorials covering fundamental to advanced statistical concepts.

### 📅 Weekly Schedule
1. **Week 1**: Introduction to Statistics - Basic concepts, data types, R/RStudio setup
2. **Week 2**: Descriptive Statistics - Central tendency, variability, data visualization  
3. **Week 3**: Probability Distributions - Normal, binomial, and agricultural applications
4. **Week 4**: Hypothesis Testing - Null/alternative hypotheses, p-values, significance
5. **Week 5**: t-Tests - One-sample, two-sample, and paired comparisons
6. **Week 6**: ANOVA - Analysis of variance for multiple group comparisons
7. **Week 7**: Regression Analysis - Linear relationships and prediction models
8. **Week 8**: Correlation Analysis - Relationships between variables
9. **Week 9**: Non-parametric Tests - Distribution-free statistical methods
10. **Week 10**: Final Project - Independent data analysis and presentation

### 📊 Course Components
Each week includes:
- **Tutorial**: Step-by-step R programming and statistical concepts
- **Class Activity**: Hands-on exercises with agricultural datasets
- **Homework Assignment**: Problem sets reinforcing weekly topics

### 🎯 Final Project
Students complete an independent statistical analysis project featuring:
- **Dataset Selection**: Choose from provided agricultural datasets or propose alternative
- **Research Questions**: Formulate testable hypotheses relevant to agriculture
- **Statistical Analysis**: Apply appropriate methods learned throughout the course
- **Visualization**: Create publication-quality graphs and charts
- **Reporting**: Write comprehensive analysis report (8-10 pages)
- **Presentation**: Present findings to class (10-minute presentation)

---

## 🎯 Learning Outcomes

By completing this course, students will be able to:
- Apply fundamental statistical concepts to agricultural research problems
- Design and analyze experiments using appropriate statistical methods
- Use R/RStudio for data manipulation, analysis, and visualization
- Interpret statistical results and communicate findings effectively
- Evaluate assumptions and limitations of statistical analyses
- Conduct independent statistical research projects

---

## 🛠️ Required Software

- **R Statistical Software** (free from CRAN)
- **RStudio IDE** (free from RStudio)
- **Alternative**: RStudio Cloud (browser-based, no installation required)

### Essential R Packages
```r
install.packages(c("ggplot2", "dplyr", "tidyr", "readr", 
                   "agricolae", "car", "lme4", "multcomp"))
```

---

## 🤝 Contributing

1. **Fork** the repository  
2. **Create** your feature branch (`git checkout -b feature/new-content`)  
3. **Commit** your changes (`git commit -m 'Add new statistical tutorial'`)  
4. **Push** to the branch (`git push origin feature/new-content`)  
5. **Open a Pull Request**

Please use the **Open Issue** button in the site header or the GitHub "Issues" tab for bugs or enhancement ideas.

---

## 📜 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 🙏 Acknowledgements

* **UC Davis Plant Sciences Department** – course host  
* **R Core Team** – R statistical computing environment
* **RStudio Team** – RStudio IDE and educational resources
* **Previous Course Materials** – Foundation content from earlier course iterations
* GitHub Pages – free static site hosting  
