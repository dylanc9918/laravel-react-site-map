# Load necessary libraries
library(plumber)
library(dplR)
library(jsonlite)

# Define the Plumber API
#* @apiTitle Tree Chronology Summary API

#* Generate tree chronology summary
#* @param req The request object
#* @post /summary
function(req) {
    tryCatch({

        # Parse the JSON body
        body <- fromJSON(req$postBody)
        
        # Extract the rwl_array from the parsed JSON
        rwl_array <- body$rwl_array
        
        # Convert the rwl_array to a data frame
        rwl_data <- as.rwl(rwl_array)

        # Generate the summary report
        summary_report <- rwi.stats(rwl_data)
        
        # Return the summary report
        return(summary_report)
    }, error = function(e) {
        # Log the error
        cat("Error: ", e$message, "\n")
        
        # Return a 500 error response
        req$status <- 500
        return(list(error = e$message))
    })
}

# Create and run the Plumber API
# Save this script as `DendroSummary.R` and run it using `plumber::plumb("DendroSummary.R")$run(port=8001)`