library(plumber)

r <- plumb("DendroSummary.R")
r$run(port = 8002, host = "0.0.0.0")