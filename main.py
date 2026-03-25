import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier


# Load the dataset from the CSV file.
data = pd.read_csv("dataset.csv")

# Convert the target column into numeric values.
# Pass = 1 and Fail = 0
data["result"] = data["result"].map({"Fail": 0, "Pass": 1})

# Separate input features and target output.
X = data[["study_hours", "attendance", "previous_marks", "assignments_completed"]]
y = data["result"]

# Split the dataset into training and testing sets.
# test_size=0.2 means 20% of the data is used for testing.
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Create the machine learning models.
decision_tree_model = DecisionTreeClassifier(random_state=42)
random_forest_model = RandomForestClassifier(n_estimators=100, random_state=42)

# Train both models using the training data.
decision_tree_model.fit(X_train, y_train)
random_forest_model.fit(X_train, y_train)

# Predict results on the test data.
decision_tree_predictions = decision_tree_model.predict(X_test)
random_forest_predictions = random_forest_model.predict(X_test)

# Calculate accuracy for both models.
decision_tree_accuracy = accuracy_score(y_test, decision_tree_predictions)
random_forest_accuracy = accuracy_score(y_test, random_forest_predictions)

# Print the model accuracies.
print("Student Performance Prediction")
print("-" * 35)
print(f"Decision Tree Accuracy: {decision_tree_accuracy * 100:.2f}%")
print(f"Random Forest Accuracy: {random_forest_accuracy * 100:.2f}%")

# Manual sample input for prediction.
# Format: study_hours, attendance, previous_marks, assignments_completed
sample_student = pd.DataFrame(
    [
        {
            "study_hours": 4.5,
            "attendance": 78,
            "previous_marks": 62,
            "assignments_completed": 6,
        }
    ]
)

# Use the Random Forest model for a sample prediction.
sample_prediction = random_forest_model.predict(sample_student)[0]
prediction_label = "Pass" if sample_prediction == 1 else "Fail"

print("\nSample Student Input:")
print(sample_student.to_string(index=False))
print(f"\nPrediction: {prediction_label}")
