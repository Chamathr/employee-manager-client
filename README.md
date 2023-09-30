## Getting Started

1. Clone this repository -> git clone https://github.com/Chamathr/employee-manager-client.git

2. Navigate to the project directory -> cd employee-manager-client

3. Install the dependencies -> npm install

4. To run the app you can use one of below methods:
    a. To run the app locally, use the following command -> npm run dev

    b. To build the app for production and run, use the following commands ->
        i. npm run build
        ii. npm run start
    
    c. To run the app with Docker ->
        i. Build the Docker image -> docker build -t <image-name>:<tag-name> .
        ii. Run the Docker image -> docker run -p 3000:3000 -d --name <container-name> <image-name>:<tag-name>

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

