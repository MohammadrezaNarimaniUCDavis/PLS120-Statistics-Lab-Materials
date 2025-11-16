# PLS 120 Final Project - Comprehensive R Package Installation
# All essential packages for statistical analysis in agricultural sciences

# Core R packages for data manipulation and visualization
install.packages(c(
  # Data manipulation and cleaning
  "dplyr",          # Data manipulation
  "tidyr",          # Data tidying
  "readr",          # Reading CSV files
  "readxl",         # Reading Excel files
  "data.table",     # Fast data manipulation
  
  # Data visualization
  "ggplot2",        # Grammar of graphics
  "plotly",         # Interactive plots
  "corrplot",       # Correlation plots
  "pheatmap",       # Heatmaps
  
  # Statistical analysis
  "stats",          # Base statistics
  "car",            # Companion to Applied Regression
  "agricolae",      # Agricultural statistics
  "multcomp",       # Multiple comparisons
  "emmeans",        # Estimated marginal means
  
  # Hypothesis testing and modeling
  "broom",          # Tidy statistical output
  "lmtest",         # Linear model tests
  "nortest",        # Normality tests
  "lawstat",        # Lawson-Hanson statistics
  
  # ANOVA and experimental design
  "aov",            # Analysis of variance
  "TukeyHSD",       # Tukey's HSD test
  "agricolae",      # Agricultural experimental design
  
  # Regression analysis
  "lm",             # Linear models
  "glm",            # Generalized linear models
  "MASS",           # Modern Applied Statistics
  
  # Report generation
  "knitr",          # Dynamic report generation
  "rmarkdown",      # R Markdown documents
  "DT",             # Interactive data tables
  
  # Utility packages
  "IRkernel",       # Jupyter R kernel
  "devtools",       # Development tools
  "here"            # File path management
))

# Install Jupyter R kernel for notebook interface
IRkernel::installspec()

# Print success message
cat("✅ All packages installed successfully!\n")
cat("🚀 Your R environment is ready for statistical analysis!\n")