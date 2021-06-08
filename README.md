# code-20200608

Demo Code For BMI Calculator 

# Start Application 
$ npm i

$ npm start

# Home Page
http://localhost:3000/

# for Bulk BMI Calculator 
POST
http://localhost:3000/calculate_bmi

# Sample Data
Content-Type : application/json

Send Data in Body

[{ "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female", "HeightCm": 166,
"WeightKg": 62}, {"Gender": "Female", "HeightCm": 150, "WeightKg": 70}, {"Gender": "Female",
"HeightCm": 167, "WeightKg": 82},{"Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, { "Gender": "Male", "HeightCm": 161, "WeightKg":
85 }]

You can send 100mb post data 
