# Pali-Coding-Challenge
See Readme for instructions on how to run the app

# # Docker Section 
	# Build Docker images 
		```sudo docker build -t <username>/pali_challenge .``` 
	# Show Docker images 
	```sudo docker images``` 
	# Run Docker container 
	```sudo docker run -p 6000:3000 <username>/pali_challenge``` 
	# On Docker Linux: Meal id test 
	``` bash 
	curl --header "Content-Type: application/json" \ --request POST \ --data '{"mealIdList": ["52795", "52956", "52831", "52854"]}' \ http://localhost:6000/ ``` 
	# On Docker Windows: Meal id test 
	``` bash curl --header "Content-Type: application/json" ^ --request POST ^ --data '{"mealIdList": ["52795", "52956", "52831", "52854"]}' \ ^ http://localhost:6000/```
	# On Docker Linux: Incorrect meal id test 
	``` bash curl --header "Content-Type: application/json" \ --request POST \ --data '{"mealIdList": ["52795", "556"]}' \ http://localhost:6000/ ``` 
	# On Docker Windows: Incorrect meal id test ``` bash curl --header "Content-Type: application/json" ^ --request POST ^ --data '{"mealIdList": ["52795", "556"]}' ^ http://localhost:6000/ ``` 
# Run locally on localhost 
        # Run the app in terminal or shell npm start 
	# On Linux: Curl post request 
		```bash curl --header "Content-Type: application/json" \ 
                --request POST \ 
                --data '{"mealIdList": ["52795", "52956", "52831", "52854"]}' \ 
                http://localhost:3000/``` 
	# On Windows: Curl post request 
		``` batch curl --header "Content-Type: application/json" ^ 
                --request POST ^ 
                --data '{"mealIdList": ["52795", "52956", "52831", "52854"]}' ^
                http://localhost:3000/```

© 2019 GitHub, Inc.

