# Install required R packages for PLS 120 Week 7
# Functions and T-Tests

install.packages(c(
  "ggplot2",    # Data visualization
  "dplyr",      # Data manipulation
  "readr",      # Reading CSV files
  "IRkernel"    # Jupyter R kernel
))

# Install Jupyter R kernel
IRkernel::installspec()