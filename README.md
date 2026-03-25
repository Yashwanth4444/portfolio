# Student Performance Prediction

## Project Overview
This project predicts whether a student is likely to **pass** or **fail** based on a few simple academic and behavioral factors. It is designed to be beginner-friendly and easy to understand.

## Problem Statement
Schools and teachers often want to identify students who may need extra support. In this project, we use machine learning to study patterns in student behavior and academic history, then predict the final result as **Pass** or **Fail**.

## Features Used
The dataset contains the following input features:

- `study_hours`: Average study hours
- `attendance`: Attendance percentage
- `previous_marks`: Marks scored previously
- `assignments_completed`: Number of assignments completed

Target column:

- `result`: Pass or Fail

## Algorithms Used
This project uses two simple classification algorithms from scikit-learn:

- **Decision Tree Classifier**
- **Random Forest Classifier**

## Workflow
1. Create or load the dataset from `dataset.csv`
2. Read the dataset using pandas
3. Convert the target labels (`Pass` and `Fail`) into numeric form
4. Split the data into training and testing sets
5. Train a Decision Tree model
6. Train a Random Forest model
7. Predict results on the test data
8. Print the accuracy of both models
9. Use a manual sample input to predict whether the student will pass or fail

## Project Files
- `main.py` - Main Python script for training and prediction
- `dataset.csv` - Synthetic student performance dataset
- `requirements.txt` - Required Python libraries
- `README.md` - Project documentation

## How to Run the Project
1. Install Python on your computer
2. Install the required libraries:

```bash
pip install -r requirements.txt
```

3. Run the Python script:

```bash
python main.py
```

## Example Output
```text
Student Performance Prediction
-----------------------------------
Decision Tree Accuracy: 87.50%
Random Forest Accuracy: 87.50%

Sample Student Input:
 study_hours  attendance  previous_marks  assignments_completed
         4.5          78              62                      6

Prediction: Pass
```

## Notes
- The dataset is synthetic, which means it was created for learning purposes.
- The project avoids complex pipelines so that beginners can understand every step.
- Random Forest usually performs better on varied datasets, while Decision Tree is easy to visualize and explain.
