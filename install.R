# PLS 120 Week 10 - ANOVA and Linear Regression Analysis
# Essential R packages for statistical analysis

install.packages(c(
  # Data manipulation and visualization
  "ggplot2",        # Grammar of graphics
  "dplyr",          # Data manipulation
  "tidyr",          # Data tidying
  "readr",          # Reading CSV files
  "tidyverse",      # Complete tidyverse suite
  
  # Statistical analysis
  "broom",          # Tidy statistical output
  "car",            # Companion to Applied Regression
  
  # Jupyter notebook support
  "IRkernel",       # R kernel for Jupyter
  "knitr",          # Dynamic report generation
  
  # Additional utilities
  "here",           # File path management
  "devtools"        # Development tools
))

# Install Jupyter R kernel
IRkernel::installspec()

# Print success message
cat("✅ All packages installed successfully!\n")
cat("🐷 Ready for ANOVA and regression analysis!\n")